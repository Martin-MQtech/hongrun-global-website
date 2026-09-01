import shutil
import os
import re

# 1. Update products.html
prod_path = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/products.html'
with open(prod_path, 'r', encoding='utf-8') as f:
    p = f.read()

# Update HYT-200 in products.html: 3-4 chairs, 300 L/min, Tank 60L, Noise <=65 dB
p = re.sub(
    r'(<h3[^>]*>HYT-200</h3>[\s\S]*?<div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-lg font-bold text-brand-dark font-display tracking-tight">HYT-200</h3>
            <span class="bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-bold px-3 py-1 rounded-full">3–4 Chairs</span>
          </div>
          <div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4">
            <div><span class="font-bold text-slate-800">Power:</span> 0.75 kW×2</div>
            <div><span class="font-bold text-slate-800">Flow:</span> 300 L/min</div>
            <div><span class="font-bold text-slate-800">Tank:</span> 60 L</div>
            <div><span class="font-bold text-slate-800">Noise:</span> ≤65 dB</div>
          </div>''',
    p
)

# Update HYT-300 -> HYTG-300 in products.html: 4-5 chairs, 400 L/min, Tank 90L, Noise <=65 dB
p = re.sub(
    r'(<h3[^>]*>(?:HYT-300|HYTG-300)</h3>[\s\S]*?<div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-lg font-bold text-brand-dark font-display tracking-tight">HYTG-300</h3>
            <span class="bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-bold px-3 py-1 rounded-full">4–5 Chairs</span>
          </div>
          <div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4">
            <div><span class="font-bold text-slate-800">Power:</span> 1.1 kW×2</div>
            <div><span class="font-bold text-slate-800">Flow:</span> 400 L/min</div>
            <div><span class="font-bold text-slate-800">Tank:</span> 90 L</div>
            <div><span class="font-bold text-slate-800">Noise:</span> ≤65 dB</div>
          </div>''',
    p
)

# Update HYT-400 in products.html: 6-8 chairs, 600 L/min, Motor 1.1kW*3, Tank 120L, Noise <=65 dB
p = re.sub(
    r'(<h3[^>]*>HYT-400</h3>[\s\S]*?<div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-lg font-bold text-brand-dark font-display tracking-tight">HYT-400</h3>
            <span class="bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-bold px-3 py-1 rounded-full">6–8 Chairs</span>
          </div>
          <div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4">
            <div><span class="font-bold text-slate-800">Power:</span> 1.1 kW×3</div>
            <div><span class="font-bold text-slate-800">Flow:</span> 600 L/min</div>
            <div><span class="font-bold text-slate-800">Tank:</span> 120 L</div>
            <div><span class="font-bold text-slate-800">Noise:</span> ≤65 dB</div>
          </div>''',
    p
)

# Update HYT-500 in products.html: 10 chairs, 800 L/min, Motor 1.1kW*4, Tank 200L, Noise <=65 dB
p = re.sub(
    r'(<h3[^>]*>HYT-500</h3>[\s\S]*?<div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4">[\s\S]*?</div>)',
    '''<h3 class="text-lg font-bold text-brand-dark font-display tracking-tight">HYT-500</h3>
            <span class="bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-bold px-3 py-1 rounded-full">10 Chairs</span>
          </div>
          <div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4">
            <div><span class="font-bold text-slate-800">Power:</span> 1.1 kW×4</div>
            <div><span class="font-bold text-slate-800">Flow:</span> 800 L/min</div>
            <div><span class="font-bold text-slate-800">Tank:</span> 200 L</div>
            <div><span class="font-bold text-slate-800">Noise:</span> ≤65 dB</div>
          </div>''',
    p
)

with open(prod_path, 'w', encoding='utf-8') as f:
    f.write(p)

print("products.html updated successfully!")
