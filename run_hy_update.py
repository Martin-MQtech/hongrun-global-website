import shutil
import os
import re

# 1. Update HY-200.jpg from user-provided file
src_img = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260820 HONGRUN TECH/20260901 网站修改/20260901-HY系列-产品参数修改 2/HY-200.jpg'
dst_intl = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/assets/images/products/intl/HY-200.jpg'
dst_thumbs = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/assets/images/products/thumbs/HY-200.jpg'

if os.path.exists(src_img):
    shutil.copy2(src_img, dst_intl)
    shutil.copy2(src_img, dst_thumbs)
    print("HY-200.jpg successfully copied!")

# 2. Update products-hy.html
hy_file = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/products-hy.html'
with open(hy_file, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace Swedish Spring Plates with Patented Core Components
text = text.replace(
    '''      <div class="text-center p-6 bg-brand-light rounded-sm border border-slate-200 hover:border-brand-blue transition">
        <i class="fa-solid fa-gear text-brand-blue text-3xl mb-4"></i>
        <h3 class="font-bold text-brand-dark font-display text-sm uppercase">Swedish Spring Plates</h3>
        <p class="text-slate-500 text-xs mt-2">Premium imported components for 30,000+ hour service life</p>
      </div>''',
    '''      <div class="text-center p-6 bg-brand-light rounded-sm border border-slate-200 hover:border-brand-blue transition">
        <i class="fa-solid fa-microchip text-brand-blue text-3xl mb-4"></i>
        <h3 class="font-bold text-brand-dark font-display text-sm uppercase">Proprietary Core Patents</h3>
        <p class="text-slate-500 text-xs mt-2">Self-developed patented valve &amp; pump engineering for 30,000+ hour reliability</p>
      </div>'''
)

# Replace Oil-Free Design text (note about 100% oil-free)
text = text.replace(
    'Zero oil contamination, ISO 8573-1 Class 0 certified',
    '100% Pure oil-free air delivery (Zero oil lubrication physical design)'
)

# Replace <=60 dB with <=65 dB
text = text.replace(
    '''      <div class="text-center p-6 bg-brand-light rounded-sm border border-slate-200 hover:border-brand-blue transition">
        <i class="fa-solid fa-volume-xmark text-brand-blue text-3xl mb-4"></i>
        <h3 class="font-bold text-brand-dark font-display text-sm uppercase">≤60 dB Silent</h3>
        <p class="text-slate-500 text-xs mt-2">Quieter than a normal conversation — chairside installation ready</p>
      </div>''',
    '''      <div class="text-center p-6 bg-brand-light rounded-sm border border-slate-200 hover:border-brand-blue transition">
        <i class="fa-solid fa-volume-xmark text-brand-blue text-3xl mb-4"></i>
        <h3 class="font-bold text-brand-dark font-display text-sm uppercase">≤65 dB Low Noise</h3>
        <p class="text-slate-500 text-xs mt-2">Low-vibration acoustic dampening — comfortable chairside environment</p>
      </div>'''
)

# Replace HY-100: Tank 24L, Noise <=65 dB
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

# Replace HY-200: Tank 32L, Noise <=65 dB
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

# Replace HY-300: Tank 50L, Noise <=65 dB
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

# Replace HYT-200: 3~4 chairs, Flow 300L/min, Tank 60L, Noise <=65 dB
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

# Replace HYT-300 / HYTG-300: 4~5 chairs
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

# Replace HYT-400: 6~8 chairs, Flow 600L/min, Motors 1.1kW*3, Tank 120L, Noise <=65 dB
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

# Replace HYT-500: 10 chairs, Flow 800L/min, Motors 1.1kW*4, Tank 200L, Noise <=65 dB
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

with open(hy_file, 'w', encoding='utf-8') as f:
    f.write(text)

print("products-hy.html updated successfully!")
