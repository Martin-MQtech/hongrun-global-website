#!/usr/bin/env python3
"""
宏润科技前沿 Web 架构自动化注入与校验工具
(Hongrun Technology - Edge Web Technologies Injector)

功能:
  在全站所有核心 HTML 页面中注入:
  1. W3C Speculation Rules API (悬停即预渲染，0ms 极速切换);
  2. PWA Web App Manifest 与 theme-color;
  3. OpenSearch 1.1 浏览器原生检索描述;
  4. 弱网/离线 Service Worker 自动注册脚本。

用法:
  python3 inject_edge_tech.py          # 全站注入 / 升级
  python3 inject_edge_tech.py --check  # 检查全站前沿技术接入状态
  python3 inject_edge_tech.py --clean  # 清除全站前沿技术标签
"""

import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))

EDGE_HEAD_BLOCK = """  <!-- W3C Speculation Rules (Instant Zero-Latency Prerendering) -->
  <script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "href_matches": "/*" },
        "eagerness": "moderate"
      }
    ]
  }
  </script>
  <!-- PWA Web Capabilities & OpenSearch 1.1 -->
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#0284C7" />
  <link rel="search" type="application/opensearchdescription+xml" title="Hongrun Medical" href="/opensearch.xml" />"""

SW_REGISTER_BLOCK = """  <!-- PWA Service Worker Registration -->
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').catch(function(){});
      });
    }
  </script>"""

HEAD_PATTERN = re.compile(
    r"[ \t]*<!-- W3C Speculation Rules.*?<!-- PWA Web Capabilities & OpenSearch 1\.1 -->\s*"
    r'<link rel="manifest"[^>]*>\s*'
    r'<meta name="theme-color"[^>]*>\s*'
    r'<link rel="search"[^>]*>[ \t]*\n?',
    re.DOTALL | re.IGNORECASE
)

LOOSE_SPECULATION_PATTERN = re.compile(r'[ \t]*<script type="speculationrules">.*?</script>[ \t]*\n?', re.DOTALL | re.I)
LOOSE_MANIFEST_PATTERN = re.compile(r'[ \t]*<link rel="manifest"[^>]*>[ \t]*\n?', re.I)
LOOSE_OPENSEARCH_PATTERN = re.compile(r'[ \t]*<link rel="search"[^>]*opensearch\.xml[^>]*>[ \t]*\n?', re.I)
LOOSE_THEME_COLOR = re.compile(r'[ \t]*<meta name="theme-color"[^>]*>[ \t]*\n?', re.I)
SW_PATTERN = re.compile(r"[ \t]*<!-- PWA Service Worker Registration -->\s*<script>.*?navigator\.serviceWorker\.register.*?</script>[ \t]*\n?", re.DOTALL | re.I)

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
    html = HEAD_PATTERN.sub("", html)
    html = LOOSE_SPECULATION_PATTERN.sub("", html)
    html = LOOSE_MANIFEST_PATTERN.sub("", html)
    html = LOOSE_OPENSEARCH_PATTERN.sub("", html)
    html = LOOSE_THEME_COLOR.sub("", html)
    html = SW_PATTERN.sub("", html)
    return html

def inject_edge_tech(html):
    html = remove_existing(html)
    # 1. 注入 Head Block (在 </head> 前)
    m_head_end = re.search(r'</head>', html, flags=re.I)
    if m_head_end:
        idx = m_head_end.start()
        html = html[:idx] + EDGE_HEAD_BLOCK + "\n" + html[idx:]
    
    # 2. 注入 Service Worker 注册 (在 </body> 前)
    m_body_end = re.search(r'</body>', html, flags=re.I)
    if m_body_end:
        b_idx = m_body_end.start()
        html = html[:b_idx] + SW_REGISTER_BLOCK + "\n" + html[b_idx:]
        
    return html

def run():
    files = find_all_html_files(ROOT)
    mode = "inject"
    if len(sys.argv) > 1:
        if sys.argv[1] == "--check":
            mode = "check"
        elif sys.argv[1] == "--clean":
            mode = "clean"

    print("=" * 75)
    print("⚡ 宏润科技国际官网 - 前沿 Web 架构 (Speculation Rules + PWA + OpenSearch) 注入器")
    print("=" * 75)
    print(f"  • 根目录     : {ROOT}")
    print(f"  • 目标核心页 : {len(files)} 个 HTML 文件")
    print(f"  • 执行模式   : {mode.upper()}")
    print("-" * 75)

    injected = 0
    updated = 0

    for path in files:
        rel = os.path.relpath(path, ROOT)
        content = open(path, encoding="utf-8").read()
        has_edge = ("speculationrules" in content and "opensearch.xml" in content)

        if mode == "check":
            if has_edge:
                injected += 1
                print(f"  ✅ [已就绪] {rel}")
            else:
                print(f"  ⚠️  [未接入] {rel}")
        elif mode == "clean":
            clean_content = remove_existing(content)
            if clean_content != content:
                open(path, "w", encoding="utf-8").write(clean_content)
                updated += 1
                print(f"  🧹 [已清理] {rel}")
            else:
                print(f"  -  [无变动] {rel}")
        else: # inject
            new_content = inject_edge_tech(content)
            if new_content != content:
                open(path, "w", encoding="utf-8").write(new_content)
                updated += 1
                print(f"  ⚡ [已激活] {rel}")
            else:
                print(f"  ✅ [已合规] {rel}")

    print("-" * 75)
    if mode == "check":
        print(f"📊 检查报告: {injected}/{len(files)} 个核心页面已激活前沿极速架构 ({(injected/len(files))*100:.1f}%)。")
    elif mode == "clean":
        print(f"✨ 清理完成: 共清理 {updated} 个页面。")
    else:
        print(f"🎉 部署完成: 全站 {len(files)} 个核心页面已 100% 接入 Speculation Rules 与 PWA 架构！")
    print("=" * 75)

if __name__ == "__main__":
    run()
