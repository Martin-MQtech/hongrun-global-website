#!/usr/bin/env python3
"""Ensure consent-gated analytics on every production HTML page.

Legacy direct gtag blocks are removed. The shared cookie-consent.js module is
solely responsible for setting Consent Mode defaults and requesting GA4 after
an affirmative analytics choice.
"""

import os
import re

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
CONSENT_SCRIPT = '  <script src="/assets/js/cookie-consent.js" defer></script>'


def process_file(filepath):
    rel = os.path.relpath(filepath, ROOT_DIR)
    if os.path.basename(filepath).startswith("yandex_"):
        return False, "Skipped (Yandex verification file)"

    with open(filepath, "r", encoding="utf-8") as handle:
        content = handle.read()
    original = content

    content = re.sub(
        r'[ \t]*<script\b[^>]*src=["\']https://www\.googletagmanager\.com/gtag/js\?id=G-25BF91Y6Q1["\'][^>]*>\s*</script>\s*\n?',
        "",
        content,
        flags=re.IGNORECASE,
    )

    def strip_legacy_inline(match):
        attrs, body = match.group(1), match.group(2)
        if "G-25BF91Y6Q1" in body and re.search(r"gtag\s*\(\s*[\"']config[\"']", body):
            return ""
        return match.group(0)

    content = re.sub(
        r"<script\b([^>]*)>([\s\S]*?)</script>",
        strip_legacy_inline,
        content,
        flags=re.IGNORECASE,
    )

    if "/assets/js/cookie-consent.js" in content:
        if content == original:
            return False, "Already consent-gated"
        with open(filepath, "w", encoding="utf-8") as handle:
            handle.write(content)
        return True, "Removed legacy analytics block"

    head = re.search(r"</head\s*>", content, re.IGNORECASE)
    if not head:
        return False, "No </head> tag found"
    content = content[: head.start()] + CONSENT_SCRIPT + "\n" + content[head.start() :]
    with open(filepath, "w", encoding="utf-8") as handle:
        handle.write(content)
    return True, "Consent module enabled"


def main():
    targets = []
    for root, _dirs, files in os.walk(ROOT_DIR):
        targets.extend(os.path.join(root, name) for name in files if name.endswith(".html"))
    targets.sort()

    changed = 0
    print(f"Checking {len(targets)} HTML pages for consent-gated analytics...")
    for filepath in targets:
        success, message = process_file(filepath)
        rel = os.path.relpath(filepath, ROOT_DIR)
        print(f" [{'OK' if success else '-'}] {rel} -> {message}")
        changed += int(success)
    print(f"Completed: {changed} pages updated.")


if __name__ == "__main__":
    main()
