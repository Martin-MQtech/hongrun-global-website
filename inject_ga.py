#!/usr/bin/env python3
"""
Hongrun Technology (hongrun1995.cn) - Google Analytics 4 (GA4) Injection Script
Measurement ID: G-25BF91Y6Q1
Injects official gtag.js and B2B conversion tracking into all production HTML pages.
"""

import os
import re

GA_SNIPPET = """  <!-- Google tag (gtag.js) - Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-25BF91Y6Q1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-25BF91Y6Q1', {
      send_page_view: true
    });

    // Global B2B Conversion Event Tracking for Hongrun Overseas Inquiries
    document.addEventListener('DOMContentLoaded', function() {
      // 1. Email clicks
      document.querySelectorAll('a[href^="mailto:"]').forEach(function(el) {
        el.addEventListener('click', function() {
          if (typeof gtag === 'function') {
            gtag('event', 'contact_email_click', {
              event_category: 'B2B Lead',
              event_label: el.getAttribute('href')
            });
          }
        });
      });
      // 2. WhatsApp clicks
      document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function(el) {
        el.addEventListener('click', function() {
          if (typeof gtag === 'function') {
            gtag('event', 'whatsapp_click', {
              event_category: 'B2B Lead',
              event_label: 'WhatsApp Chat Initiation'
            });
          }
        });
      });
      // 3. RFQ / Inquiry button clicks
      document.querySelectorAll('a[href*="contact.html"]').forEach(function(el) {
        el.addEventListener('click', function() {
          if (typeof gtag === 'function') {
            gtag('event', 'inquire_button_click', {
              event_category: 'B2B Engagement',
              event_label: el.getAttribute('href')
            });
          }
        });
      });
    });
  </script>"""

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

def process_file(filepath):
    rel = os.path.relpath(filepath, ROOT_DIR)
    # Skip yandex verification files
    if os.path.basename(filepath).startswith("yandex_"):
        return False, "Skipped (Yandex verification file)"

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    if "G-25BF91Y6Q1" in content:
        return False, "Already injected"

    # Search insertion point right after <meta charset="...">
    pattern = r"(<meta\s+charset=[\"'][^\"']+[\"']\s*\/?>)"
    match = re.search(pattern, content, re.IGNORECASE)
    
    if match:
        idx = match.end()
        new_content = content[:idx] + "\n" + GA_SNIPPET + content[idx:]
    else:
        # Fallback to after <head>
        head_match = re.search(r"(<head[^>]*>)", content, re.IGNORECASE)
        if head_match:
            idx = head_match.end()
            new_content = content[:idx] + "\n" + GA_SNIPPET + content[idx:]
        else:
            return False, "No <head> tag found"

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

    return True, "Injected successfully"

def main():
    target_files = []
    for root, dirs, files in os.walk(ROOT_DIR):
        for file in files:
            if file.endswith(".html"):
                target_files.append(os.path.join(root, file))

    target_files.sort()
    injected_count = 0

    print(f"Scanning {len(target_files)} HTML files for Google Analytics 4 integration...")
    for fp in target_files:
        rel = os.path.relpath(fp, ROOT_DIR)
        success, msg = process_file(fp)
        if success:
            injected_count += 1
            print(f" [OK] {rel} -> {msg}")
        else:
            print(f" [-] {rel} -> {msg}")

    print(f"\nCompleted: {injected_count} files injected with Google Analytics (G-25BF91Y6Q1).")

if __name__ == "__main__":
    main()
