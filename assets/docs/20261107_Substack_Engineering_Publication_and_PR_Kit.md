# Hongrun Technology · Overseas Substack Publication & PR Kit (海外 Substack 专栏与公关通稿全套文稿)
> **Author**: Martin Chen / Hongrun Medical Pneumatics Taskforce  
> **Date**: November 2026  
> **Brand**: Hongrun Compressor Technology Co., Ltd. (Founded Nov 1995 · Zibo, China)  
> **Official Website**: https://www.hongrun1995.cn/  
> **Official Substack Publication**: https://hrmedaircom.substack.com/  

---

## Part 1: Substack Publication Overview & Strategy (专栏现状与发布指引)

* **Publication URL (专栏主页)**: [https://hrmedaircom.substack.com/](https://hrmedaircom.substack.com/)
* **Live Article URL (线上已发布文章)**: [https://hrmedaircom.substack.com/p/the-0003-milligram-catastrophe-what](https://hrmedaircom.substack.com/p/the-0003-milligram-catastrophe-what)
* **Published Date & Time (发布时间)**: November 7, 2026 · 21:21 UTC+8 (Directly published via BrowserOS neo)
* **Publication Name (刊物名称)**: `Hongrun Compressor Technology Co., Ltd.` / *Hongrun Medical Air Systems*
* **Login Account (管理账号)**: `hrmedaircom@gmail.com`
* **Author (署名作者)**: `Martin Chen`
* **Article Title (文章标题)**: `The 0.003-Milligram Catastrophe: What Actually Happens When Compressed Air Hits Etched Dentin`
* **Article Subtitle (副标题)**: `A forensic examination of hydrocarbon lipid films, adhesive bond failure, and the physics of oil-free medical air.`
* **Image Assets (高精图片外链)**: 本文 8 张高清工程配图已全部完成 Substack 官方 CDN 托管解析与全球分发！

---

## Part 2: Substack Flagship Article (Substack 深度工程长文 · 完整图文即发版)

> **Instructions for Publishing**:
> Copy and paste the Markdown content below directly into the Substack post editor at [https://hrmedaircom.substack.com/publish](https://hrmedaircom.substack.com/publish).

***

# The 0.003-Milligram Catastrophe: What Actually Happens When Compressed Air Hits Etched Dentin

### *A forensic examination of hydrocarbon lipid films, adhesive bond failure, and the physics of oil-free medical air.*

*By Martin Chen · Hongrun Medical Pneumatics Engineering Taskforce*

![Hongrun Manufacturing Plant](https://www.hongrun1995.cn/assets/images/banners/hongrun_smart_plant_cover.webp)
*Figure 1.0: Hongrun 20,000 m² automated medical compressor manufacturing facility in Zibo National High-Tech Zone, China (Annual capacity >160,000 units).*

In modern clinical dentistry, compressed air is an active medical fluid. From cooling turbine handpieces operating at up to 400,000 RPM to air-drying etched enamel prior to resin bonding, the pneumatic stream comes into direct contact with cavity preparations, dentinal tubules, and patient oral tissue.

Yet across clinical operatories, trace airborne oil aerosols and hydrocarbon vapors present a well-documented risk.

When a clinician prepares a restoration, 37% phosphoric acid etching removes the smear layer and demineralizes the top 3–5 microns of dentin, exposing an intricate hydrophilic collagen fibril scaffold. Adhesive monomers must thoroughly penetrate this micro-porous network to create an effective hybrid layer with >25 MPa shear bond strength.

If compressed air carries trace oil aerosol mist—even at 0.01 mg/m³—hydrophobic residues deposit onto the exposed collagen scaffold. This impairs dentin wettability and impedes primer infiltration. In laboratory evaluations, this contamination has been shown to reduce composite shear bond strength by up to 25% to 35%, contributing to accelerated marginal microleakage, postoperative sensitivity, and premature restoration debonding.

While standard workshop-grade compressors rely on lubricated pumps with downstream coalescing filters, international medical standards committees mandate a more rigorous engineering threshold: **ISO 8573-1:2010 Class 0**.

Here is an engineering examination of oil-free compression principles, self-lubricating polymers, modular duplex redundancy, and clinical sizing physics.

---

## 1. The Purity Standard: Why 0.003 mg/m³ Matters in Clinical Dentistry

Under international standard **ISO 8573-1:2010**, compressed air purity is categorized by residual oil content (including aerosols, liquids, and vapors):

* **Class 1**: Total oil $\le 0.01\text{ mg/m}^3$
* **Class 0**: Purity exceeding Class 1, strictly defined by manufacturer specifications and independently verified by third-party testing bodies.

```
+-------------------------------------------------------------------------+
|                  ISO 8573-1 OIL PURITY BENCHMARK SPECTRUM               |
+-------------------------------------------------------------------------+
| Standard Industrial Air       Class 1 Limit         Hongrun TÜV Measured|
| [ > 1.0 mg/m³ ]              [ 0.01 mg/m³ ]        [ < 0.003 mg/m³ ]    |
| ==============================|=====================|-------------------|
| Trace aerosol contamination   Standard laboratory   Zero detectable oil |
| Bond degradation risk         Acceptable baseline   Clinical benchmark  |
+-------------------------------------------------------------------------+
```

### Clinical Consequences of Trace Hydrocarbons:
1. **Adhesive Polymerization Degradation**: Hydrophobic lipid deposition on etched dentin impedes primer infiltration, reducing composite bond strength and elevating marginal microleakage risks.
2. **Handpiece Bearing Wear**: Oil mist exposed to repeated autoclave sterilization cycles (134°C) can oxidize into varnish-like residue, accelerating wear on precision ceramic turbine micro-bearings.
3. **Regulatory Requirements**: Under ISO 7396-1, HTM 02-01, and US NFPA 99 medical gas codes, clinical gas delivery systems require oil-free air.

![3D CAD Exploded Engineering Anatomy](https://www.hongrun1995.cn/assets/images/exploded/01-hy-compressor-exploded.jpg)
*Figure 2.0: 3D CAD exploded engineering anatomy of Hongrun HY-Series medical oil-free compressor: wobbling-piston kinematics, hard-anodized cylinder sleeves, and dual-direction acoustic cooling flow.*

At [Hongrun Technology](https://www.hongrun1995.cn/), independent laboratory testing conducted by **TÜV Rheinland** on HY and HYT Series wobbling-piston medical compressors confirmed a residual hydrocarbon concentration of **$< 0.003\text{ mg/m}^3$**—well below the ISO 8573-1 Class 1 baseline ($0.01\text{ mg/m}^3$), satisfying demanding medical gas requirements.

---

## 2. Materials & Tribology: Friction Control in Dry-Running Compressors

Without lubricating oil, dynamic friction between the piston seal and cylinder wall can cause thermal expansion, blow-by, and pressure degradation. To solve this tribological challenge, modern medical-grade compressors utilize self-lubricating polymer composites:

* **Self-Lubricating PTFE Composite Seals (Saint-Gobain Materials)**: Hongrun medical compressors integrate high-performance filled-PTFE composite piston rings developed with Saint-Gobain sealing technology. During initial operation, the composite ring deposits a microscopic polymeric transfer film onto the hard-anodized aluminum cylinder bore ($Ra \le 0.2\ \mu\text{m}$), maintaining low dynamic friction ($\mu \approx 0.08–0.12$) under dry-running conditions.
* **Engineered Operating Life**: The piston seal geometry is engineered for 8,000 to 10,000 hours of standard clinical duty before routine cup replacement, with the core mechanical structure rated for up to 20,000 hours of overall operating life.
* **Swedish Sandvik Flapper Valves**: Precision flapper valves manufactured from fatigue-resistant stainless strip steel, providing reliable cyclic sealing at 1,400–2,800 RPM.

> **Engineering & Custom Configuration Notice (定制与选配说明)**:  
> *Hongrun manufactures both standard medical configurations and customized OEM/institutional grade systems. High-end components—including Saint-Gobain filled-PTFE composite seals, Sandvik precision flapper valves, specialized acoustic enclosures, and advanced PLC control cabinets—are engineered options configured based on target clinical duty cycles, ambient conditions, and client procurement specifications. Standard catalog models utilize certified medical-grade baseline components.*

![ZB-300 Core Bare Pump Head](https://www.hongrun1995.cn/assets/images/products/intl/ZB-300.jpg)
*Figure 3.0: Hongrun ZB-300 core medical rocking-piston pump head featuring self-lubricating PTFE composite piston rings and Sandvik flapper valves.*

---

## 3. Simultaneous Sizing Math: The 4-to-8 Dental Chair Operatory Equation

Clinical operatory pneumatic demand is fundamentally intermittent. Sizing an air compressor cannot simply multiply peak consumption by total chairs, which results in oversized, inefficient motor cycling.

Instead, hospital pneumatic engineering utilizes the **Simultaneous Diversity Factor ($k$)**:

$$Q_{\text{total}} = \left[ \sum(q_{\text{instrument}} \times \eta_{\text{active}}) \times N_{\text{chairs}} + q_{\text{milling}} \right] \times k_{\text{simultaneous}} \times S_{\text{safety}}$$

Where:
* $q_{\text{turbine}}$: $45\text{ L/min}$ @ 0.25 MPa ($\eta = 0.50$ active duty)
* $q_{\text{scaler}}$: $35\text{ L/min}$ @ 0.35 MPa ($\eta = 0.70$ continuous duty)
* $q_{\text{milling}}$: $40\text{–}60\text{ L/min}$ purge for chairside CAD/CAM mills
* $S_{\text{safety}}$: $1.25$ (filter $\Delta P$ and line resistance compensation)

### Table 1.0: Global Clinical Sizing Reference (Dual Units: L/min ↔ CFM, kW ↔ HP)

| Clinic Scale | Operatories | Diversity Factor ($k$) | Peak Flow (@ 5.0 bar / 72.5 PSI) | Piping Header Spec | Recommended Duplex Solution |
|---|---|---|---|---|---|
| **Compact Clinic** | 3 – 4 Chairs | 0.60 – 0.65 | **140 – 170 L/min** *(4.9 – 6.0 CFM)* | DN20 (3/4") | HY-300 (1.1 kW / 1.5 HP) or HYTG-300 |
| **Standard Polyclinic** | 4 – 6 Chairs | 0.50 – 0.55 | **220 – 260 L/min** *(7.8 – 9.2 CFM)* | DN25 (1") | HYTG-300 (2.2 kW / 3.0 HP · 90L) |
| **High-Volume Center** | 6 – 8 Chairs | 0.45 – 0.48 | **300 – 350 L/min** *(10.6 – 12.4 CFM)* | DN25 (1") | HYT-400 / HYT-500 (3.3–4.4 kW / 4.5–6.0 HP) |
| **Surgical Hospital** | 8 – 12 Chairs | 0.40 – 0.45 | **420 – 520 L/min** *(14.8 – 18.4 CFM)* | DN32 (1-1/4") | HYT-500 (4.4 kW / 6.0 HP · 200L) |

> **US NFPA 99 Engineering Rule of Thumb**: Budget approximately **1.5 to 2.0 CFM per dental chair at 80–100 PSI**, or approximately **0.5 to 0.75 HP per active operatory**.

![4 to 8 Dental Chairs Central CAD Schematic](https://www.hongrun1995.cn/assets/images/news/news_13_4to8chairs_redundancy.webp)
*Figure 4.0: Engineering CAD schematic and piping manifold layout for 4-to-8 dental chair central medical compressed air system with closed-loop ring distribution and N+1 duplex failover.*

For in-depth piping schematics and CAD drawings, review Hongrun's technical whitepaper: [Dual-Pump Redundancy Architecture: 4-to-8 Dental Chair Sizing Guide](https://www.hongrun1995.cn/articles/20260908-4-to-8-dental-chairs-dual-pump-redundancy/).

---

## 4. Why Duplex Redundancy (N+1) Outperforms Single Large Compressors

For any clinic operating 4 or more chairs, a single compressor represents a **Single Point of Failure (SPOF)**. If an electric motor winding fails or a pressure switch malfunctions, dental operatories halt immediately.

In contrast, a duplex system like the **Hongrun HYTG-300** mounts two independent ZB300 rocking-piston pump heads onto a central 90-liter receiver tank:

```
[ PUMP HEAD A (ZB300 · 1.1 kW) ] ──┐
                                   ├──> [ SMART PLC ALTERNATOR ] ──> [ 90L RECEIVER TANK ]
[ PUMP HEAD B (ZB300 · 1.1 kW) ] ──┘
```

1. **Intelligent Wear Balancing**: The PLC alternates primary operation every cycle, equalizing run-hours across both motor heads.
2. **Automatic Peak Boost**: During simultaneous peak hours, both heads engage to deliver full 400 L/min (14.1 CFM).
3. **Zero-Downtime Serviceability**: If Pump Head A requires filter or ring maintenance, Pump Head B maintains continuous 200 L/min delivery—keeping emergency surgical and hygiene chairs operational.

> **Modular Redundancy Notice (冗余模块与储气罐说明)**:  
> *Duplex parallel configurations (N+1), intelligent alternating PLC controllers, and optional internal nano-antibacterial silver-ion tank coatings are specialized modular configurations (HYTG and HYT series) engineered for surgical centers and polyclinics requiring high-availability uptime.*

![Hongrun HYT-500 Duplex Redundant System](https://www.hongrun1995.cn/assets/images/products/hd/HYT-500.jpg)
*Figure 5.0: Hongrun HYT Series duplex multi-pump redundant station mounted on ASME/PED receiver vessel.*

---

## 5. Commercial Grounding: Warranty Integrity & TCO Reality

In global B2B procurement, engineering performance must be matched by commercial transparency.

![Digital Dental Operatory](https://www.hongrun1995.cn/assets/images/solutions/digital-dental-operatory.jpg)
*Figure 6.0: Multi-chair digital dental operatory powered by Class 0 clean air (<0.003 mg/m³) ensuring adhesive bonding integrity.*

### The Standard 12-Month Factory Guarantee
Hongrun officially provides a **Standard 12-Month Factory Manufacturer Warranty** commencing from the verified date of clinical installation and commissioning (not from factory B/L date). Every machine is backed by:
* **10-Year Guaranteed Spare Parts Availability**: Direct factory fulfillment of genuine PTFE rings, reed valves, and desiccant columns dispatched via DHL/FedEx Express within 24–48 hours.
* **Post-Warranty Paid Maintenance Support**: Transparent cost-recovery parts and field maintenance service agreements.
* **Warranty Policy Clarification**: Authentic Hongrun medical air units carry our standard 12-month manufacturer guarantee. Listings on third-party consumer retail platforms advertising shorter 6-month terms are unauthorized grey-market sellers not backed by Hongrun factory technical support. See the [Hongrun Official Global Warranty Policy](https://www.hongrun1995.cn/warranty-policy.html).

### Comparative Review: European Standards (e.g. Dürr Dental Alternative)
For clinics evaluating European systems alongside Hongrun, both offer certified Class 0 medical purity. The primary distinctions lie in architecture and lifecycle economics: Hongrun focuses on modular duplex redundancy (N+1) and direct factory component fulfillment, providing an estimated 40% to 55% reduction in 5-year Total Cost of Ownership (initial capital expenditure plus scheduled replacement consumables).

Compare the detailed engineering benchmarks in our technical review: [Hongrun vs. Dürr Dental: Comparative Analysis](https://www.hongrun1995.cn/hongrun-vs-durr-dental.html).

![Precision Manufacturing Floor](https://www.hongrun1995.cn/assets/images/web/precision-manufacturing.jpg)
*Figure 7.0: Automated precision CNC machining workshop at Hongrun manufacturing facility in Zibo.*

---

## 6. Technical Specification & Procurement Disclaimer (免责声明与严谨负责说明)

> **Procurement & Technical Specification Boundary**:  
> *The technical parameters, material specifications, and architectural diagrams in this engineering publication represent Hongrun's manufacturing capabilities and modular customization options. Because clinical requirements vary across global markets, not all features described (such as imported brand-name seals, multi-stage desiccant towers, or digital PLC controllers) are standard on baseline catalog models. Exact component bills of materials (BOM), performance guarantees, and warranty terms are governed solely by formal proforma invoices, technical agreements, and factory inspection sheets executed at the time of order.*

---

## About Hongrun Technology

Founded in November 1995 in the National High-Tech Industrial Development Zone of Zibo, Shandong Province, China, **Hongrun Compressor Technology Co., Ltd.** operates a 20,000 m² automated manufacturing facility with an annual capacity exceeding 160,000 units. Certified under **ISO 13485:2016** (Medical Device QMS, Cert: `381210185R1M`), CE MDR Class IIa, and TÜV Rheinland ISO 8573-1 Class 0, Hongrun pneumatic solutions are trusted by 65,000+ clinics and medical institutions across 50+ countries.

![ISO 13485:2016 Medical Device Certificate (Official Watermarked Specimen)](https://www.hongrun1995.cn/assets/images/certs/certifications/08-iso-13485-medical-device-qms.webp)
*Figure 8.0: Hongrun ISO 13485:2016 Medical Device Quality Management System Certificate (No. 381210185R1M) accredited by ANAB & IAF (Official Verification Specimen).*

**Official Technical Resource**: [https://www.hongrun1995.cn/](https://www.hongrun1995.cn/)

***

---

## Part 3: Standard 400-Word Press Release (PRLog / OpenPR 通稿即用版)

> **Headline**: Hongrun Technology Secures TÜV Rheinland ISO 8573-1 Class 0 Certification with Breakthrough 0.003 mg/m³ Purity in Medical Oil-Free Air Compressors  
> **Sub-headline**: 30-year medical pneumatics pioneer introduces duplex redundant dental air systems with 12-month commissioning warranty and 10-year spare parts commitment for global healthcare providers.  
> **City, Country**: Zibo, China  
> **Release Date**: FOR IMMEDIATE RELEASE  

**ZIBO, CHINA — November 2026** — Hongrun Compressor Technology Co., Ltd. (Est. 1995), an established manufacturer of medical-grade oil-free air compressors and dental vacuum systems, today highlighted its certified compliance with ISO 8573-1:2010 Class 0, validated through rigorous independent testing by TÜV Rheinland.

Laboratory spectrometry tests confirmed that Hongrun's wobbling-piston medical compressors achieve a total residual hydrocarbon aerosol and vapor concentration of less than **0.003 mg/m³**—well below the international Class 1 baseline of 0.01 mg/m³ and satisfying Class 0 medical requirements. This verified oil-free purity prevents composite resin bonding degradation and micro-bearing wear in critical clinical procedures.

Operating from a 20,000-square-meter automated manufacturing facility in Zibo High-Tech Zone, Hongrun delivers over 160,000 units annually to hospitals, dental polyclinics, and analytical laboratories across 50+ countries. Certified under ISO 13485:2016 (Medical Device Quality Management System, Certificate No: 381210185R1M) and CE MDR Class IIa, the company integrates French Saint-Gobain self-lubricating PTFE composite seals engineered for long-term dry-running reliability.

To eliminate single points of failure (SPOF) in high-throughput practices, Hongrun's flagship HYTG-300 and HYT Series offer modular dual-pump parallel redundancy (N+1) mounted on 90L to 150L ASME/PED receiver vessels. Controlled by an automated alternating PLC, the secondary pump head maintains 50% clinical flow capacity during routine servicing, ensuring uninterrupted operatory treatment. High-end components and modular configurations are custom-engineered based on client duty cycles and regional medical device specifications.

Hongrun also reaffirmed its global commercial service commitment: a standard **12-Month Manufacturer Factory Warranty** commencing upon clinical installation and commissioning, backed by a **10-Year Guaranteed Original Spare Parts Availability** pledge and lifetime paid maintenance services. Hongrun explicitly clarifies that all authentic medical units carry our standard 12-month manufacturer guarantee, refuting unauthorized grey-market listings advertising short 6-month warranties on regional consumer retail sites.

"Medical pneumatic purity directly impacts restorative clinical outcomes," said Martin Chen, Applications Engineering Director at Hongrun. "Our 30-year manufacturing heritage combines certified Class 0 purity benchmarks with modular duplex redundancy and significantly lower lifecycle maintenance investment."

For technical specifications, pneumatic sizing guidelines, and distributor inquiries, visit:  
**https://www.hongrun1995.cn/**

**Official Corporate Portal**:  
Website: https://www.hongrun1995.cn/warranty-policy.html

---

## Part 4: Overseas Blog & Media Asset Engineering SOP (博客与多媒体资产发布铁律 · 后续 Agent 执行标准)

本规范为后续任何 AI 智能体（Agent）接手海外技术博客（Substack / Medium / WordPress / Blogger）与公关通稿发布时必须 100% 遵照的不可逾越之标准：

### 1. 资质证书防盗水印准则 (Certificate Anti-Theft Watermark SSOT)
- **拒绝暴力与过度防御（告别刺眼深红）**：严禁采用大红、深红等具有严重破坏性的警示颜色，严禁密集网格排布，避免破坏证书严肃性与审计可读性。
- **色彩与透明度**：统一采用**高雅商务石板灰（Neutral Slate Grey，RGB: `105, 115, 130` / Hex: `#697382`）**，透明度严格锁定在 **约 40%**（`alpha = 105/255`），达到“**隐约可见水印存在，既具防伪穿透力，又丝毫不影响审计机构逐字核对公章与注册编号**”的专业境界。
- **稀疏舒缓全幅斜纹（密度降低 2/3）**：
  - 倾斜角度：**+32° ~ +35° 优雅向上对角线**；
  - 行间距：**200 ~ 220px**，整张 A4 证书纵向仅贯穿 **5~6 条对角线暗纹**，保持大面积清爽呼吸感；
  - 英文证书标准文案：`HONGRUN MEDICAL · FOR REFERENCE ONLY · DO NOT COPY`（Arial Bold 36pt）
  - 中文证书标准文案：`HONGRUN 宏润医疗 · 仅供审核参考 · 严禁盗用 · DO NOT COPY`（Hiragino Sans GB 34pt）
- **覆盖要件**：斜纹必须掠过证书编号（`381210185R1M`）、公司全称、三类医疗器械体系认证范围、波西（POSI）认证公章与总经理签字区。

### 2. 产品实拍与 3D 剖解图透明水印规范 (Product & 3D Anatomy Watermark SSOT)
- **右下角品牌与官方网址复合徽标 (Bottom-Right Brand Badge)**：
  - 原厂金属质感橙蓝官方 Logo + 官方网址 `www.hongrun1995.cn`（无衬线字体，带 1px 柔和白色微投影）；
  - 徽标宽度为底图宽度的 **30% ~ 32%**，透明度严格锁定为 **55% 半透明**（`alpha = 0.55`），保留 3.5% 安全外边距。
- **画面核心区防裁剪微暗纹 (Center Anti-Crop Micro-Watermark)**：
  - 画面中心中轴区叠加倾斜暗纹 `HONGRUN · www.hongrun1995.cn`，透明度 **15%**，防止第三方二次裁切。
- **母版绝对隔离归档**：
  - 原始无水印棚拍大图必须完整保留于 `hrtech/assets/images/products/unwatermarked_masters/`，严禁直接覆盖破坏原片。

### 3. 破损白底抠图彻底清退铁律 (Zero Broken Cutouts Policy)
- **严禁生成与引用 `*-cutout.*` 文件**：历史由于白底自动抠图导致的 68 个边缘咬蚀、脚轮缺失图片已彻底清除。
- **真实完整工程摄影**：大型复合气站必须使用完整原厂棚拍大图（如 `assets/images/products/hd/HYT-500.jpg` 1920×1534），完整保留万向刹车脚轮、耐高压不锈钢金属编织软管与自然物理阴影。

### 4. 博客去软文化与学术极客文风 (De-Commercialization & Pure Tech Voice)
- **联系方式全面清零**：严禁出现任何销售邮箱、WhatsApp、手机直拨电话或物理门牌号；
- **唯一定位**：打造纯粹的医疗流体动力装备白皮书与技术文献，全文仅保留官方技术门户反链：`https://www.hongrun1995.cn/`；
- **实事求是不吹牛**：严禁使用“超级工厂 (megafactory)”或虚构“DMG MORI 5轴”等未经核实的字眼，必须使用“专精特新自动化制造基地”与“高精密自动化数控加工中心集群”；寿命必须严谨区隔“核心机械结构设计寿命 20,000 小时，自润滑皮碗常规更换周期 8,000~10,000 小时”。
- **非标定制与高端模块免责说明**：文中涉及法国圣戈班 PTFE 活塞环、瑞典山特维克阀片、纳米银离子抗菌涂层气罐、PLC 智能交替双机柜时，必须强制嵌入独立提示框，声明此类均为针对特殊机构的定制选配项，合同与交付严格以正式技术协议与形式发票为准。

### 5. Substack CMS ProseMirror 底层事务级持久化与 CDN 穿透协议
- **ProseMirror 状态树事务更新**：Substack 编辑器为 ProseMirror 架构，直接修改 DOM `img.src` 无法生效。必须通过 ProseMirror 事务级 API：
  ```javascript
  const el = document.querySelector('.ProseMirror');
  const view = el.editor?.view || el.pmViewDesc?.view;
  let tr = view.state.tr;
  view.state.doc.descendants((node, pos) => {
    if (node.type.name === 'image2') {
      tr = tr.setNodeMarkup(pos, null, Object.assign({}, node.attrs, { src: freshUrl, width: 992, height: 1403 }));
    }
  });
  view.dispatch(tr);
  ```
- **CDN 路径去重穿透**：Substack 外部拉取器忽略 URL 查询参数。更新图片必须使用新的物理文件名（如 `-watermarked.jpg`）或 `raw.githubusercontent.com` 路径，强制触发全新 S3 媒体转存；
- **两段式发布确认**：点击 `Update` 按钮后必须进一步在弹窗中点击 `Update now`，确保线上实时生效。

