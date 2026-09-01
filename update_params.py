import shutil
import os

src_img = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260820 HONGRUN TECH/20260901 网站修改/20260901-HY系列-产品参数修改 2/HY-200.jpg'
dst_intl = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/assets/images/products/intl/HY-200.jpg'
dst_thumbs = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/assets/images/products/thumbs/HY-200.jpg'

if os.path.exists(src_img):
    shutil.copy2(src_img, dst_intl)
    shutil.copy2(src_img, dst_thumbs)
    print("HY-200.jpg successfully replaced in intl and thumbs!")
else:
    print("Source image not found:", src_img)

# Update products-hy.html
hy_html_path = '/Users/martin/Documents/2026 BUSINESS MTRIX /20260810 HR TECH WEBSITE/hrtech/products-hy.html'
with open(hy_html_path, 'r', encoding='utf-8') as f:
    hy_content = f.read()

# HY-100: Tank 24L, Noise <=65 dB
# HY-200: Tank 32L, Noise <=65 dB
# HY-300: Tank 50L, Noise <=65 dB
# HYT-200: 3~4 chairs, Flow 300 L/min, Tank 60L
# HYT-300: 4~5 chairs (HYTG-300)
# HYT-400: 6~8 chairs, Flow 600 L/min, Motor 1.1kW*3, Tank 120L
# HYT-500: 10 chairs, Flow 800 L/min, Motor 1.1kW*4, Tank 200L, Noise <=65 dB

# Let's verify and replace sections in products-hy.html
print("Products-hy file loaded length:", len(hy_content))
