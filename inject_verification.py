#!/usr/bin/env python3
"""
预埋/注入 搜索引擎 HTML 验证标签。

用法:
  python3 inject_verification.py <google_code> <bing_code> <yandex_code> <baidu_code>
  传空字符串表示该引擎不做。

把四个引擎的验证 <meta> 标签统一插入到每个 HTML 页面 <link rel="canonical" ...> 之前。
重复运行是幂等的:已存在的验证 meta 会被替换成最新值,不会堆积。
"""
import sys, re, os

ROOT = os.path.dirname(os.path.abspath(__file__))

CODES = {
    "google":  sys.argv[1] if len(sys.argv) > 1 else "",
    "bing":    sys.argv[2] if len(sys.argv) > 2 else "",
    "yandex":  sys.argv[3] if len(sys.argv) > 3 else "",
    "baidu":   sys.argv[4] if len(sys.argv) > 4 else "",
}

# 引擎 -> (meta 无属性匹配用正则, 完整标签模板)
RULES = {
    "google": ("google-site-verification",
               '<meta name="google-site-verification" content="{code}"/>'),
    "bing":   ("msvalidate.01",
               '<meta name="msvalidate.01" content="{code}"/>'),
    "yandex": ("yandex-verification",
               '<meta name="yandex-verification" content="{code}"/>'),
    "baidu":  ("baidu-site-verification",
               '<meta name="baidu-site-verification" content="{code}"/>'),
}

def inject(html, code, name_attr, template):
    # 始终先移除旧的同名验证标签及其连带换行(幂等), 保留 re.IGNORECASE 容错大小写
    html = re.sub(r'[ \t]*<meta[^>]*name=[\'"]%s[\'"][^>]*/?>[ \t]*\n?' % re.escape(name_attr), "", html, flags=re.I)
    if not code:
        return html  # 已是清除模式: 旧标签已删,无新码则不插
    tag = template.format(code=code)
    # 插入到 <head> 之后, 规避各页 canonical 缩进差异, 不破坏原有格式
    m = re.search(r'<head>', html)
    if m:
        return html[:m.end()] + "\n" + tag + html[m.end():]
    # 兜底: 插入到 </head> 前
    html = re.sub(r'(</head>)', tag + "\n" + r"\1", html, count=1)
    return html

changed = 0
for f in sorted(x for x in os.listdir(ROOT) if x.endswith(".html")):
    path = os.path.join(ROOT, f)
    try:
        html = open(path, encoding="utf-8").read()
    except (FileNotFoundError, OSError) as e:
        continue
    before = html
    for engine, (name_attr, template) in RULES.items():
        html = inject(html, CODES[engine], name_attr, template)
    if html != before:
        open(path, "w", encoding="utf-8").write(html)
        changed += 1
        print(f"updated {f} | 已插入: " + ", ".join(e for e in CODES if CODES[e]))

print(f"\n共更新 {changed} 个页面")
