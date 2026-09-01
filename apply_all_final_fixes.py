import re
import shutil
import os

# 1. Update HY-200.jpg from user-provided file
src_img = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260820 HONGRUN TECH/20260901 网站修改/20260901-HY系列-产品参数修改 2/HY-200.jpg'
dst_intl = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/assets/images/products/intl/HY-200.jpg'
dst_thumbs = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/assets/images/products/thumbs/HY-200.jpg'

if os.path.exists(src_img):
    shutil.copy2(src_img, dst_intl)
    shutil.copy2(src_img, dst_thumbs)
    print("HY-200.jpg successfully updated!")

# 2. Update products-hy.html
with open('/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/products-hy.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace Swedish Spring Plates with Patented Core Components
text = text.replace('Swedish Spring Plates', 'Proprietary Core Patents')
text = text.replace('Premium imported components for 30,000+ hour service life', 'Self-developed patented valve &amp; pump engineering for 30,000+ hour reliability')

# Replace Oil-Free Design text
text = text.replace('Zero oil contamination, ISO 8573-1 Class 0 certified', '100% Pure oil-free air delivery (Zero oil lubrication physical design)')

# Replace <=60 dB with <=65 dB
text = text.replace('≤60 dB Silent', '≤65 dB Low Noise')
text = text.replace('Quieter than a normal conversation — chairside installation ready', 'Low-vibration acoustic dampening — comfortable chairside environment')

# Replace single-head specs
# HY-100: 24L, <=65 dB
text = re.sub(
    r'(<!-- HY-100 -->[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">)[\s\S]*?(</div>\s*<a href="contact\.html")',
    r'''\1
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Power / Motor</span><strong>0.55 kW (ZB100×1)</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Air Flow</span><strong>100 L/min</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank Capacity</span><strong>24 L</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise Level</span><strong>≤65 dB</strong></div>
        \2''',
    text
)

# HY-200: 32L, <=65 dB
text = re.sub(
    r'(<!-- HY-200 -->[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">)[\s\S]*?(</div>\s*<a href="contact\.html")',
    r'''\1
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Power / Motor</span><strong>0.75 kW (ZB200×1)</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Air Flow</span><strong>150 L/min</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank Capacity</span><strong>32 L</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise Level</span><strong>≤65 dB</strong></div>
        \2''',
    text
)

# HY-300: 50L, <=65 dB
text = re.sub(
    r'(<!-- HY-300 -->[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">)[\s\S]*?(</div>\s*<a href="contact\.html")',
    r'''\1
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Power / Motor</span><strong>1.1 kW (ZB300×1)</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Air Flow</span><strong>200 L/min</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank Capacity</span><strong>50 L</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise Level</span><strong>≤65 dB</strong></div>
        \2''',
    text
)

# Replace twin-head specs
# HYT-200: 3~4 chairs, Flow 300L/min, Tank 60L, Noise <=65 dB
text = re.sub(
    r'(<!-- HYT-200 -->[\s\S]*?<div class="text-brand-sky text-sm font-semibold mb-3">)[\s\S]*?(</div>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">)[\s\S]*?(</div>\s*<a href="contact\.html")',
    r'''\1For 3–4 treatment chairs · Redundant Twin-Head\2
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Air Flow</span><strong>300 L/min</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Motors</span><strong>0.75 kW × 2</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank Capacity</span><strong>60 L</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise Level</span><strong>≤65 dB</strong></div>
        \3''',
    text
)

# HYTG-300: 4~5 chairs
text = re.sub(
    r'(<h3[^>]*>(?:HYT-300|HYTG-300)</h3>[\s\S]*?<div class="text-brand-sky text-sm font-semibold mb-3">)[\s\S]*?(</div>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">)[\s\S]*?(</div>\s*<a href="contact\.html")',
    r'''<h3 class="text-xl font-extrabold text-brand-dark font-display tracking-tight mb-1">HYTG-300</h3>
        <div class="text-brand-sky text-sm font-semibold mb-3">For 4–5 treatment chairs · High-Duty Twin-Head</div>
        <div class="grid grid-cols-2 gap-3 text-sm mb-4">
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Air Flow</span><strong>400 L/min</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Motors</span><strong>1.1 kW × 2</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank Capacity</span><strong>90 L</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise Level</span><strong>≤65 dB</strong></div>
        </div>
        \3''',
    text
)

# HYT-400: 6~8 chairs, Flow 600L/min, Motors 1.1kW*3, Tank 120L, Noise <=65 dB
text = re.sub(
    r'(<!-- HYT-400 -->[\s\S]*?<div class="text-brand-sky text-sm font-semibold mb-3">)[\s\S]*?(</div>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">)[\s\S]*?(</div>\s*<a href="contact\.html")',
    r'''\1For 6–8 treatment chairs · Triple-Head Redundant\2
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Air Flow</span><strong>600 L/min</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Motors</span><strong>1.1 kW × 3</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank Capacity</span><strong>120 L</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise Level</span><strong>≤65 dB</strong></div>
        \3''',
    text
)

# HYT-500: 10 chairs, Flow 800L/min, Motors 1.1kW*4, Tank 200L, Noise <=65 dB
text = re.sub(
    r'(<!-- HYT-500 -->[\s\S]*?<div class="text-brand-sky text-sm font-semibold mb-3">)[\s\S]*?(</div>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">)[\s\S]*?(</div>\s*<a href="contact\.html")',
    r'''\1For 10 treatment chairs · Quad-Head Flagship\2
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Air Flow</span><strong>800 L/min</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Motors</span><strong>1.1 kW × 4</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank Capacity</span><strong>200 L</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise Level</span><strong>≤65 dB</strong></div>
        \3''',
    text
)

with open('/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/products-hy.html', 'w', encoding='utf-8') as f:
    f.write(text)
print("products-hy.html written!")

# 3. Update products-hvs.html for HEPA wording
with open('/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/products-hvs.html', 'r', encoding='utf-8') as f:
    hvs_text = f.read()

hvs_text = hvs_text.replace(
    'Catchment, separation and HEPA exhaust filtration',
    'Catchment, cyclone separation and precision multi-stage exhaust filtration'
)
hvs_text = hvs_text.replace('HEPA', 'Micro-Filtration')
hvs_text = hvs_text.replace('hepa', 'micro-filtration')

with open('/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/products-hvs.html', 'w', encoding='utf-8') as f:
    f.write(hvs_text)
print("products-hvs.html written!")

# 4. Update products.html
with open('/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/products.html', 'r', encoding='utf-8') as f:
    p_text = f.read()

p_text = p_text.replace('HEPA', 'Micro-Filtration')
p_text = p_text.replace('≤60 dB', '≤65 dB')

# HYT-200 card in products.html
p_text = re.sub(
    r'(<h4[^>]*>HYT-200</h4>[\s\S]*?<div class="text-xs text-slate-500 mb-3">)[\s\S]*?(</div>[\s\S]*?<div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded">)[\s\S]*?(</div>\s*<div class="mt-auto flex gap-2">)',
    r'''\13–4 Chairs · Twin-Head\2
            <div><span class="font-bold text-slate-800">Power:</span> 0.75 kW×2</div>
            <div><span class="font-bold text-slate-800">Flow:</span> 300 L/min</div>
            <div><span class="font-bold text-slate-800">Tank:</span> 60 L</div>
            <div><span class="font-bold text-slate-800">Noise:</span> ≤65 dB</div>
          \3''',
    p_text
)

# HYTG-300 card in products.html
p_text = re.sub(
    r'(<h4[^>]*>(?:HYT-300|HYTG-300)</h4>[\s\S]*?<div class="text-xs text-slate-500 mb-3">)[\s\S]*?(</div>[\s\S]*?<div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded">)[\s\S]*?(</div>\s*<div class="mt-auto flex gap-2">)',
    r'''<h4 class="font-bold text-brand-dark font-display text-base">HYTG-300</h4>
          <div class="text-xs text-slate-500 mb-3">4–5 Chairs · Heavy-Duty Twin-Head</div>
          <div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded">
            <div><span class="font-bold text-slate-800">Power:</span> 1.1 kW×2</div>
            <div><span class="font-bold text-slate-800">Flow:</span> 400 L/min</div>
            <div><span class="font-bold text-slate-800">Tank:</span> 90 L</div>
            <div><span class="font-bold text-slate-800">Noise:</span> ≤65 dB</div>
          \3''',
    p_text
)

# HYT-400 card in products.html
p_text = re.sub(
    r'(<h4[^>]*>HYT-400</h4>[\s\S]*?<div class="text-xs text-slate-500 mb-3">)[\s\S]*?(</div>[\s\S]*?<div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded">)[\s\S]*?(</div>\s*<div class="mt-auto flex gap-2">)',
    r'''\16–8 Chairs · Triple-Head\2
            <div><span class="font-bold text-slate-800">Power:</span> 1.1 kW×3</div>
            <div><span class="font-bold text-slate-800">Flow:</span> 600 L/min</div>
            <div><span class="font-bold text-slate-800">Tank:</span> 120 L</div>
            <div><span class="font-bold text-slate-800">Noise:</span> ≤65 dB</div>
          \3''',
    p_text
)

# HYT-500 card in products.html
p_text = re.sub(
    r'(<h4[^>]*>HYT-500</h4>[\s\S]*?<div class="text-xs text-slate-500 mb-3">)[\s\S]*?(</div>[\s\S]*?<div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded">)[\s\S]*?(</div>\s*<div class="mt-auto flex gap-2">)',
    r'''\110 Chairs · Quad-Head Flagship\2
            <div><span class="font-bold text-slate-800">Power:</span> 1.1 kW×4</div>
            <div><span class="font-bold text-slate-800">Flow:</span> 800 L/min</div>
            <div><span class="font-bold text-slate-800">Tank:</span> 200 L</div>
            <div><span class="font-bold text-slate-800">Noise:</span> ≤65 dB</div>
          \3''',
    p_text
)

with open('/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/products.html', 'w', encoding='utf-8') as f:
    f.write(p_text)
print("products.html written!")
