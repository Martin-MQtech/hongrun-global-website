#!/usr/bin/env python3
"""
搜索引擎所有权验证标签注入与清理工具 (SEO Webmaster Verification Tool)
支持引擎: Google Search Console, Bing Webmaster, Yandex Webmaster, Baidu 站长平台

用法:
  1. 标签注入 (传入各引擎验证码或完整 meta 标签):
     python3 inject_verification.py <google_code> <bing_code> <yandex_code> <baidu_code>
     (传空字符串 "" 表示该引擎不注入/清除已有标签)

  2. 示例:
     python3 inject_verification.py "google123456" "bing123456" "yandex123456" ""

  3. 清除全站所有验证标签:
     python3 inject_verification.py "" "" "" ""
"""
import sys, re, os

ROOT = os.path.dirname(os.path.abspath(__file__))

def extract_code(raw):
    """如果用户粘贴了整段 <meta ... content="CODE">，自动提取出纯 CODE 字符串"""
    if not raw:
        return ""
    raw = raw.strip()
    m = re.search(r'content=[\'"]([^\'"]+)[\'"]', raw, flags=re.I)
    if m:
        return m.group(1).strip()
    return raw

CODES = {
    "google":  extract_code(sys.argv[1]) if len(sys.argv) > 1 else "",
    "bing":    extract_code(sys.argv[2]) if len(sys.argv) > 2 else "",
    "yandex":  extract_code(sys.argv[3]) if len(sys.argv) > 3 else "",
    "baidu":   extract_code(sys.argv[4]) if len(sys.argv) > 4 else "",
}

# 引擎 -> (meta 无属性匹配用正则, 完整标签模板)
RULES = {
    "google": ("google-site-verification",
               '  <meta name="google-site-verification" content="{code}">'),
    "bing":   ("msvalidate.01",
               '  <meta name="msvalidate.01" content="{code}">'),
    "yandex": ("yandex-verification",
               '  <meta name="yandex-verification" content="{code}">'),
    "baidu":  ("baidu-site-verification",
               '  <meta name="baidu-site-verification" content="{code}">'),
}

def inject(html, code, name_attr, template):
    # 始终先移除旧的同名验证标签及其连带换行(幂等), 保留 re.IGNORECASE 容错大小写
    html = re.sub(r'[ \t]*<meta[^>]*name=[\'"]%s[\'"][^>]*/?>[ \t]*\n?' % re.escape(name_attr), "", html, flags=re.I)
    if not code:
        return html  # 已是清除模式: 旧标签已删,无新码则不插
    tag = template.format(code=code)
    # 插入到 <head> 之后 或 <meta charset> 之后
    m = re.search(r'(<meta\s+charset=[^>]+>)', html, flags=re.I)
    if m:
        return html[:m.end()] + "\n" + tag + html[m.end():]
    m_head = re.search(r'<head[^>]*>', html, flags=re.I)
    if m_head:
        return html[:m_head.end()] + "\n" + tag + html[m_head.end():]
    # 兜底: 插入到 </head> 前
    html = re.sub(r'(</head>)', tag + "\n" + r"\1", html, count=1, flags=re.I)
    return html

def find_all_html_files(root_dir):
    html_files = []
    for dirpath, _, filenames in os.walk(root_dir):
        if ".git" in dirpath or "node_modules" in dirpath:
            continue
        for f in filenames:
            if f.endswith(".html"):
                html_files.append(os.path.join(dirpath, f))
    return sorted(html_files)

all_files = find_all_html_files(ROOT)
changed = 0
active_engines = [e for e, c in CODES.items() if c]

print("=" * 60)
print("🔍 宏润国际官网 - 搜索引擎验证标签注入器 (SEO Verification Injector)")
print("=" * 60)
if active_engines:
    for eng in active_engines:
        print(f"  • {eng.capitalize():<8}: {CODES[eng]}")
else:
    print("  • 模式: 清理模式 (移除所有已存在的验证 meta 标签)")
print("-" * 60)

for path in all_files:
    rel_path = os.path.relpath(path, ROOT)
    try:
        html = open(path, encoding="utf-8").read()
    except (FileNotFoundError, OSError):
        continue
    before = html
    for engine, (name_attr, template) in RULES.items():
        html = inject(html, CODES[engine], name_attr, template)
    if html != before:
        open(path, "w", encoding="utf-8").write(html)
        changed += 1
        print(f"  ✅ [已更新] {rel_path}")

print("-" * 60)
print(f"✨ 处理完成: 共扫描 {len(all_files)} 个页面，更新 {changed} 个页面。")
print("=" * 60)
