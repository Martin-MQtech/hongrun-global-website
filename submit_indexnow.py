#!/usr/bin/env python3
"""
IndexNow 即时收录推送工具 (Instant Indexing via IndexNow Protocol)
支持实时广播至: Microsoft Bing, Yandex, Naver, Seznam 等所有支持 IndexNow 协议的搜索引擎。

默认为【增量推送】模式：只推送「新增」或「内容已修改」的 URL，避免每次全量重推、
降低被引擎限流的风险。支持定期全量与预览。

用法:
  python3 submit_indexnow.py            # 增量推送: 只推新增 + 内容变更
  python3 submit_indexnow.py --full     # 全量推送: 重新提交 sitemap 全部 URL (建议每月 ≤1 次)
  python3 submit_indexnow.py --dry-run  # 仅预览本次会推送哪些 URL，不发请求
  python3 submit_indexnow.py --reset    # 清空本地推送状态，下次运行强制重新全量
"""
import os
import re
import json
import hashlib
import argparse
import urllib.request
import urllib.error

HOST = "www.hongrun1995.cn"
KEY = "8f1c4e92a7b64082b21c5f3e790a34dc"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
API_ENDPOINT = "https://api.indexnow.org/indexnow"

ROOT = os.path.dirname(os.path.abspath(__file__))
SITEMAP_PATH = os.path.join(ROOT, "sitemap.xml")
STATE_PATH = os.path.join(ROOT, "indexnow_state.json")


def get_urls():
    if not os.path.exists(SITEMAP_PATH):
        return [f"https://{HOST}/"]
    content = open(SITEMAP_PATH, encoding="utf-8").read()
    urls = re.findall(r'<loc>(https://[^<]+)</loc>', content)
    return sorted(list(set(urls)))


def url_to_local_file(url):
    """把 sitemap 里的 URL 映射回仓库本地 .html 文件路径，用于内容指纹。

    支持两种结构:
      - 扁平页: /xyz.html        -> xyz.html
      - 漂亮URL: /articles/<slug>/ -> articles/<slug>/index.html
    """
    clean = url.split("#", 1)[0].split("?", 1)[0]
    path = clean.replace(f"https://{HOST}/", "", 1)
    if not path:  # 首页 /  -> index.html
        return os.path.join(ROOT, "index.html")
    if path.endswith("/"):  # 目录式漂亮 URL -> <path>index.html
        path = path + "index.html"
    # 仅允许 .html 结尾且不含 "../" 的仓库内页面文件，防止路径穿越
    if path.endswith(".html") and ".." not in path:
        return os.path.join(ROOT, path)
    return None


def file_hash(path):
    if not path or not os.path.exists(path):
        return None
    with open(path, "rb") as fh:
        return hashlib.sha256(fh.read()).hexdigest()


def load_state():
    if os.path.exists(STATE_PATH):
        try:
            return json.load(open(STATE_PATH, encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            return {}
    return {}


def save_state(state):
    try:
        with open(STATE_PATH, "w", encoding="utf-8") as fh:
            json.dump(state, fh, ensure_ascii=False, indent=2)
    except OSError:
        pass


def submit(urls):
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        API_ENDPOINT,
        data=data,
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "HongrunTech-IndexNow-Client/1.0"
        }
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            status = resp.status
            body = resp.read().decode("utf-8")
            print(f"  ✅ [推送成功] HTTP 状态码: {status}")
            if body:
                print(f"  Response: {body}")
            return True
    except urllib.error.HTTPError as e:
        print(f"  ℹ️ [HTTP 响应] 状态码: {e.code} ({e.reason})")
        if e.code == 200 or e.code == 202:
            print("  ✅ [推送成功] 搜索引擎已受理索引请求！")
            return True
        try:
            print(f"  响应详情: {e.read().decode('utf-8')}")
        except Exception:
            pass
        return False
    except Exception as e:
        print(f"  ❌ [连接错误]: {e}")
        return False


def main():
    ap = argparse.ArgumentParser(description="IndexNow incremental submitter")
    ap.add_argument("--full", action="store_true", help="全量推送 sitemap 全部 URL")
    ap.add_argument("--dry-run", action="store_true", help="只预览将推送的 URL，不发请求")
    ap.add_argument("--reset", action="store_true", help="清空本地推送状态")
    args = ap.parse_args()

    if args.reset:
        if os.path.exists(STATE_PATH):
            os.remove(STATE_PATH)
            print("  🧹 已清空本地推送状态 indexnow_state.json")
        else:
            print("  ℹ️ 无本地状态文件可清空")
        return

    urls = get_urls()
    state = load_state()
    url_map = {u: file_hash(url_to_local_file(u)) for u in urls}
    current_set = set(urls)

    # 已从 sitemap 移除的 URL：清出状态（线上由 GitHub Pages 返回 404，符合删除要求）
    removed = [u for u in state if u not in current_set]
    for u in removed:
        state.pop(u, None)

    if args.full:
        to_submit = list(urls)
        mode = "全量推送"
    else:
        to_submit = []
        new_ct = changed_ct = 0
        for u in urls:
            old = state.get(u)
            new = url_map[u]
            if old is None:
                to_submit.append(u); new_ct += 1
            elif old != new:
                to_submit.append(u); changed_ct += 1
        mode = f"增量推送 (新增 {new_ct} / 变更 {changed_ct} / 清理 {len(removed)})"

    print("=" * 65)
    print("🚀 宏润国际官网 - IndexNow 全球搜索引擎即时索引推送")
    print("=" * 65)
    print(f"  • 目标主机 (Host)        : {HOST}")
    print(f"  • IndexNow Key           : {KEY}")
    print(f"  • Key 验证位置 (Location): {KEY_LOCATION}")
    print(f"  • 本次模式               : {mode}")
    print(f"  • 待推送 URL 数量        : {len(to_submit)} 个 / 站点总数 {len(urls)} 个")
    print("-" * 65)
    for u in to_submit:
        print(f"  ▶ {u}")

    if args.dry_run:
        print("-" * 65)
        print("👀 预览模式完成，未向搜索引擎发送任何请求。")
        print("=" * 65)
        return

    if not to_submit:
        print("-" * 65)
        print("✨ 本次无新增或变更页面，跳过推送（避免无意义请求与限流）。")
        print("=" * 65)
        return

    print("-" * 65)
    ok = submit(to_submit)
    if ok:
        for u in to_submit:
            state[u] = url_map[u]
        # 清理掉内容指纹为 None(本地文件缺失) 的记录，避免多次重复推送
        for u in list(state):
            if state[u] is None:
                state.pop(u, None)
        save_state(state)
        print("  📦 已更新本地推送状态 indexnow_state.json")
    print("-" * 65)
    print("✨ 推送完成。所有 URL 已通过 IndexNow 协议向全球节点广播！")
    print("=" * 65)


if __name__ == "__main__":
    main()
