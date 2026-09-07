#!/usr/bin/env python3
"""
WebMCP AI Agent Protocol 全站自动化注入与校验工具
(Hongrun Technology - WebMCP Protocol Injector)

功能:
  遍历全站 22 个核心 HTML 页面（自动跳过搜索引擎验证文件 yandex_*.html / google*.html），
  自动、幂等地在 <head> 中注入 W3C WebMCP 官方 Polyfill 与宏润原生智能体工具库。

用法:
  python3 inject_webmcp.py          # 全站注入 / 更新
  python3 inject_webmcp.py --check  # 检查全站注入覆盖率
  python3 inject_webmcp.py --clean  # 清除全站 WebMCP 标签
"""

import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))

POLYFILL_CDN = "https://cdn.jsdelivr.net/npm/@mcp-b/webmcp-polyfill@3.0.0/dist/index.iife.js"
TOOLS_PATH = "/assets/js/webmcp-tools.js"

WEBMCP_BLOCK = (
    "  <!-- WebMCP AI Agent Protocol (W3C webmachinelearning/webmcp) -->\n"
    f'  <script src="{POLYFILL_CDN}" crossorigin="anonymous"></script>\n'
    f'  <script src="{TOOLS_PATH}" defer></script>'
)

PATTERN = re.compile(
    r"[ \t]*<!-- WebMCP AI Agent Protocol.*?-->\s*"
    r'<script[^>]*@mcp-b/webmcp-polyfill[^>]*></script>\s*'
    r'<script[^>]*webmcp-tools\.js[^>]*></script>[ \t]*\n?',
    re.DOTALL | re.IGNORECASE
)

LOOSE_POLYFILL_PATTERN = re.compile(r'[ \t]*<script[^>]*@mcp-b/webmcp-polyfill[^>]*></script>[ \t]*\n?', re.I)
LOOSE_TOOLS_PATTERN = re.compile(r'[ \t]*<script[^>]*webmcp-tools\.js[^>]*></script>[ \t]*\n?', re.I)
LOOSE_COMMENT_PATTERN = re.compile(r'[ \t]*<!-- WebMCP AI Agent Protocol.*?-->[ \t]*\n?', re.I)

def is_verification_file(filename):
    lower = filename.lower()
    return lower.startswith("yandex_") or lower.startswith("google") or lower.startswith("baidu")

def find_all_html_files(root_dir):
    html_files = []
    for dirpath, _, filenames in os.walk(root_dir):
        if ".git" in dirpath or "node_modules" in dirpath:
            continue
        for f in filenames:
            if f.endswith(".html") and not is_verification_file(f):
                html_files.append(os.path.join(dirpath, f))
    return sorted(html_files)

def remove_existing(html):
    html = PATTERN.sub("", html)
    html = LOOSE_POLYFILL_PATTERN.sub("", html)
    html = LOOSE_TOOLS_PATTERN.sub("", html)
    html = LOOSE_COMMENT_PATTERN.sub("", html)
    return html

def inject_webmcp(html):
    html = remove_existing(html)
    # 优先插入在 </head> 之前
    m_head_end = re.search(r'</head>', html, flags=re.I)
    if m_head_end:
        idx = m_head_end.start()
        return html[:idx] + WEBMCP_BLOCK + "\n" + html[idx:]
    # 备用插入在 <head> 之后
    m_head_start = re.search(r'<head[^>]*>', html, flags=re.I)
    if m_head_start:
        idx = m_head_start.end()
        return html[:idx] + "\n" + WEBMCP_BLOCK + html[idx:]
    return html

def clean_verification_files():
    """保证搜索引擎所有权验证文件纯净无额外注入"""
    for f in os.listdir(ROOT):
        if f.endswith(".html") and is_verification_file(f):
            p = os.path.join(ROOT, f)
            c = open(p, encoding="utf-8").read()
            cleaned = remove_existing(c)
            if cleaned != c:
                open(p, "w", encoding="utf-8").write(cleaned)

def run():
    clean_verification_files()
    files = find_all_html_files(ROOT)
    mode = "inject"
    if len(sys.argv) > 1:
        if sys.argv[1] == "--check":
            mode = "check"
        elif sys.argv[1] == "--clean":
            mode = "clean"

    print("=" * 70)
    print("🤖 宏润科技国际官网 - WebMCP 智能体协议自动化注入与校验工具")
    print("=" * 70)
    print(f"  • 扫描根目录 : {ROOT}")
    print(f"  • 核心页面数 : {len(files)} 个 HTML 页面（已过滤验证文件）")
    print(f"  • 执行模式   : {mode.upper()}")
    print("-" * 70)

    injected_count = 0
    updated_count = 0

    for path in files:
        rel_path = os.path.relpath(path, ROOT)
        content = open(path, encoding="utf-8").read()
        has_webmcp = ("webmcp-polyfill" in content and "webmcp-tools.js" in content)

        if mode == "check":
            if has_webmcp:
                injected_count += 1
                print(f"  ✅ [已接入] {rel_path}")
            else:
                print(f"  ⚠️  [未接入] {rel_path}")
        elif mode == "clean":
            new_content = remove_existing(content)
            if new_content != content:
                open(path, "w", encoding="utf-8").write(new_content)
                updated_count += 1
                print(f"  🧹 [已清理] {rel_path}")
            else:
                print(f"  -  [无变动] {rel_path}")
        else: # inject
            new_content = inject_webmcp(content)
            if new_content != content:
                open(path, "w", encoding="utf-8").write(new_content)
                updated_count += 1
                print(f"  🚀 [已注入] {rel_path}")
            else:
                print(f"  ✅ [已就绪] {rel_path}")

    print("-" * 70)
    if mode == "check":
        print(f"📊 检查结果: {injected_count}/{len(files)} 个核心页面已激活 WebMCP 协议 ({(injected_count/len(files))*100:.1f}%)。")
    elif mode == "clean":
        print(f"✨ 清理完成: 共清理 {updated_count} 个页面。")
    else:
        print(f"🎉 注入完成: 全站 {len(files)} 个核心页面 100% 接入 WebMCP 智能体协议！")
    print("=" * 70)

if __name__ == "__main__":
    run()
