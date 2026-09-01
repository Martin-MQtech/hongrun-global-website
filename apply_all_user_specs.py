import shutil
import os
import re

# 1. Copy new HY-200.jpg
src_img = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260820 HONGRUN TECH/20260901 网站修改/20260901-HY系列-产品参数修改 2/HY-200.jpg'
dst_intl = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/assets/images/products/intl/HY-200.jpg'
dst_thumbs = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/assets/images/products/thumbs/HY-200.jpg'

if os.path.exists(src_img):
    shutil.copy2(src_img, dst_intl)
    shutil.copy2(src_img, dst_thumbs)
    print("HY-200.jpg successfully updated!")

# 2. Update products-hy.html
hy_path = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/products-hy.html'
with open(hy_path, 'r', encoding='utf-8') as f:
    c = f.read()

# Update Oil-free badge text: HY is physical oil-free design, ISO Class 0 applies to Scroll systems
c = c.replace('Zero oil contamination, ISO 8573-1 Class 0 certified', '100% Oil-free air delivery (Zero oil lubrication design)')

# HY-100: Tank 24L, Noise <=65 dB
c = re.sub(
    r'(<h3[^>]*>HY-100</h3>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-xl font-extrabold text-brand-dark font-display tracking-tight mb-1">HY-100</h3>
        <div class="text-brand-sky text-sm font-semibold mb-3">For 1 treatment chair · Compact Portable</div>
        <div class="grid grid-cols-2 gap-3 text-sm mb-4">
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Power / Motor</span><strong>0.55 kW (ZB100×1)</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Air Flow</span><strong>100 L/min</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank Capacity</span><strong>24 L</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise Level</span><strong>≤65 dB</strong></div>
        </div>''',
    c
)

# HY-200: Tank 32L, Noise <=65 dB
c = re.sub(
    r'(<h3[^>]*>HY-200</h3>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-xl font-extrabold text-brand-dark font-display tracking-tight mb-1">HY-200</h3>
        <div class="text-brand-sky text-sm font-semibold mb-3">For 1–2 treatment chairs · Standard Clinic</div>
        <div class="grid grid-cols-2 gap-3 text-sm mb-4">
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Power / Motor</span><strong>0.75 kW (ZB200×1)</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Air Flow</span><strong>150 L/min</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank Capacity</span><strong>32 L</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise Level</span><strong>≤65 dB</strong></div>
        </div>''',
    c
)

# HY-300: Tank 50L, Noise <=65 dB
c = re.sub(
    r'(<h3[^>]*>HY-300</h3>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-xl font-extrabold text-brand-dark font-display tracking-tight mb-1">HY-300</h3>
        <div class="text-brand-sky text-sm font-semibold mb-3">For 2–3 treatment chairs · High Output Single-Head</div>
        <div class="grid grid-cols-2 gap-3 text-sm mb-4">
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Power / Motor</span><strong>1.1 kW (ZB300×1)</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Air Flow</span><strong>200 L/min</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank Capacity</span><strong>50 L</strong></div>
          <div class="bg-brand-light rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise Level</span><strong>≤65 dB</strong></div>
        </div>''',
    c
)

# HYT-200: 3~4 chairs, Flow 300 L/min, Tank 60L
c = re.sub(
    r'(<h3[^>]*>HYT-200</h3>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-xl font-extrabold text-brand-dark font-display tracking-tight mb-1">HYT-200</h3>
        <div class="text-brand-sky text-sm font-semibold mb-3">For 3–4 chairs · Redundant Twin-Head</div>
        <div class="grid grid-cols-2 gap-3 text-sm mb-4">
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Flow</span><strong>300 L/min</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Motors</span><strong>0.75 kW × 2</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank</span><strong>60 L</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise</span><strong>≤65 dB</strong></div>
        </div>''',
    c
)

# HYT-300 / HYTG-300: 4~5 chairs
c = re.sub(
    r'(<h3[^>]*>(?:HYT-300|HYTG-300)</h3>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-xl font-extrabold text-brand-dark font-display tracking-tight mb-1">HYTG-300</h3>
        <div class="text-brand-sky text-sm font-semibold mb-3">For 4–5 chairs · High-Duty Twin-Head</div>
        <div class="grid grid-cols-2 gap-3 text-sm mb-4">
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Flow</span><strong>400 L/min</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Motors</span><strong>1.1 kW × 2</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank</span><strong>90 L</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise</span><strong>≤65 dB</strong></div>
        </div>''',
    c
)

# HYT-400: 6~8 chairs, Flow 600 L/min, Motor 1.1kW*3, Tank 120L
c = re.sub(
    r'(<h3[^>]*>HYT-400</h3>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-xl font-extrabold text-brand-dark font-display tracking-tight mb-1">HYT-400</h3>
        <div class="text-brand-sky text-sm font-semibold mb-3">For 6–8 chairs · Triple-Head Redundant</div>
        <div class="grid grid-cols-2 gap-3 text-sm mb-4">
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Flow</span><strong>600 L/min</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Motors</span><strong>1.1 kW × 3</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank</span><strong>120 L</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise</span><strong>≤65 dB</strong></div>
        </div>''',
    c
)

# HYT-500: 10 chairs, Flow 800 L/min, Motor 1.1kW*4, Tank 200L, Noise <=65 dB
c = re.sub(
    r'(<h3[^>]*>HYT-500</h3>[\s\S]*?<div class="grid grid-cols-2 gap-3 text-sm mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-xl font-extrabold text-brand-dark font-display tracking-tight mb-1">HYT-500</h3>
        <div class="text-brand-sky text-sm font-semibold mb-3">For 10 chairs · Quad-Head Flagship</div>
        <div class="grid grid-cols-2 gap-3 text-sm mb-4">
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Flow</span><strong>800 L/min</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Motors</span><strong>1.1 kW × 4</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Tank</span><strong>200 L</strong></div>
          <div class="bg-white rounded p-3"><span class="block text-slate-500 text-xs uppercase">Noise</span><strong>≤65 dB</strong></div>
        </div>''',
    c
)

with open(hy_path, 'w', encoding='utf-8') as f:
    f.write(c)

print("products-hy.html successfully updated!")
