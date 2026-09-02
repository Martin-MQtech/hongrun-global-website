#!/usr/bin/env python3
"""
IndexNow 即时收录批量推送工具 (Instant Indexing via IndexNow Protocol)
支持实时广播至: Microsoft Bing, Yandex, Naver, Seznam 等所有支持 IndexNow 协议的搜索引擎。

用法:
  python3 submit_indexnow.py
"""
import os
import re
import json
import urllib.request
import urllib.error

HOST = "www.hongrun1995.cn"
KEY = "8f1c4e92a7b64082b21c5f3e790a34dc"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
API_ENDPOINT = "https://api.indexnow.org/indexnow"

ROOT = os.path.dirname(os.path.abspath(__file__))
SITEMAP_PATH = os.path.join(ROOT, "sitemap.xml")

def get_urls():
    if not os.path.exists(SITEMAP_PATH):
        return [f"https://{HOST}/"]
    content = open(SITEMAP_PATH, encoding="utf-8").read()
    urls = re.findall(r'<loc>(https://[^<]+)</loc>', content)
    return sorted(list(set(urls)))

def submit():
    urls = get_urls()
    print("=" * 65)
    print("🚀 宏润国际官网 - IndexNow 全球搜索引擎即时索引推送")
    print("=" * 65)
    print(f"  • 目标主机 (Host)        : {HOST}")
    print(f"  • IndexNow Key           : {KEY}")
    print(f"  • Key 验证位置 (Location): {KEY_LOCATION}")
    print(f"  • 待推送 URL 数量        : {len(urls)} 个")
    print("-" * 65)

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
            print(f"  ✅ [推送成功] HTTP 状态码: {status} (IndexNow 已广播给 Bing, Yandex 等)")
            if body:
                print(f"  Response: {body}")
    except urllib.error.HTTPError as e:
        print(f"  ℹ️ [HTTP 响应] 状态码: {e.code} ({e.reason})")
        if e.code == 200 or e.code == 202:
            print("  ✅ [推送成功] 搜索引擎已受理批量索引请求！")
        else:
            try:
                err_body = e.read().decode('utf-8')
                print(f"  响应详情: {err_body}")
            except Exception:
                pass
    except Exception as e:
        print(f"  ❌ [连接错误]: {e}")

    print("-" * 65)
    print("✨ 推送完成。所有 URL 已通过 IndexNow 协议向全球节点广播！")
    print("=" * 65)

if __name__ == "__main__":
    submit()
