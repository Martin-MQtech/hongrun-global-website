# 宏润科技 (Hongrun Technology / HR Tech) 国际官网终极项目执行手册
# PROJECT MASTER EXECUTION GUIDE & STANDARDS HANDBOOK

> **版本 Version:** 3.1 (同步吸收 2026-09-01 参考站交叉核对与域名对接成果 · 全站 19 页面 · 6 大产品品类与 8 人销售矩阵闭环)  
> **更新日期 Date:** 2026-09-01  
> **使用对象 Target:** AI Agent / 全栈工程师 / 国际贸易专家 / SEO & GEO 架构师 / 运维团队  
> **运营主体 Subject:** 宏润空压机科技有限公司 (Hongrun Compressor Technology Co., Ltd.)  
> **项目定位 Positioning:** 国际顶级 B2B 工业品与高端医疗气源国际官网（纯静态极速架构 · 全球边缘加速 · 独立仓库与域名隔离）  
> **线上生产发布地址 Public URL:** [https://www.hongrun1995.cn/](https://www.hongrun1995.cn/)（正式生产主域，HTTP/HTTPS 强制；`hongrun1995.cn` 301 至 www）  
> **GitHub 主干仓库 Repository:** `Martin-MQtech/hongrun-global-website` (Branch: `main`)

---

## 目录 (Table of Contents)

1. [项目概览与技术基建架构 (Project Overview & Tech Stack)](#1-项目概览与技术基建架构)
2. [全站 19 个核心页面统计与交付全貌 (Complete 19-Page Site Inventory)](#2-全站-19-个核心页面统计与交付全貌)
3. [VI V3.0 终极视觉规范与设计系统 (VI V3.0 Final Design Standards)](#3-vi-v30-终极视觉规范与设计系统)
4. [三类核心商业买家与转化漏斗 (Target Audiences & Conversion Funnel)](#4-三类核心商业买家与转化漏斗)
5. [全球对标竞争分析与出海护城河 (Global Competitor Benchmarking & Moats)](#5-全球对标竞争分析与出海护城河)
6. [6 大产品生态系统与专属详情页全览 (6-Category Product Architecture)](#6-6-大产品生态系统与专属详情页全览)
7. [4 大行业解决方案与数字化智能拓扑 (4 Application Areas & IoT Topology)](#7-4-大行业解决方案与数字化智能拓扑)
8. [品牌叙事、智能工厂视频展与 16 节点发展史 (Brand Narrative, Video & History)](#8-品牌叙事智能工厂视频展与-16-节点发展史)
9. [8 人国际业务与技术解决方案团队矩阵 (8-Member Global Commercial Network)](#9-8-人国际业务与技术解决方案团队矩阵)
10. [多页面 Hero 轮播大屏系统全景 (Multi-Page Hero Carousel Matrix)](#10-多页面-hero-轮播大屏系统全景)
11. [全球合作经营模式与外贸商务机制 (Business Models & Global Distributor Policy)](#11-全球合作经营模式与外贸商务机制)
12. [国际 SEO / GEO 结构化数据与爬虫优化 (Global SEO, GEO & Schema.org)](#12-国际-seo--geo-结构化数据与爬虫优化)
13. [图片素材、视频流与工业设计草图资产清单 (Project Media Asset Inventory)](#13-图片素材视频流与工业设计草图资产清单)
14. [Git 工作流与全自动部署规范 (Git Workflow & Deployment SOP)](#14-git-工作流与全自动部署规范)
15. [历史否决方案风控存档 (Rejected Approaches & Negative Constraints)](#15-历史否决方案风控存档)
16. [2026-09-01 参考站交叉核对与域名对接成果 (Auditing & Evolution Protocol)](#16-2026-09-01-参考站交叉核对与域名对接成果)

---

## 1. 项目概览与技术基建架构

### 1.1 项目背景与定位
宏润空压机科技有限公司（Hongrun Compressor Technology Co., Ltd.）创立于 1995 年，制造基地位于中国工业重镇山东淄博。企业深耕医用与高洁净无油空压机制造 30 余载，持国家二类医疗器械注册资质（NMPA Class II）与 ISO 8573-1 Class 0 国际零油纯度认证，年产能超 160,000 台套，服务全球 65,000+ 医疗机构与 190+ 顶尖高校科研院所。

本国际官网工程专门面向欧洲、北美、俄罗斯/独联体、亚太及中东非等海外市场，以**纯正工业科技感（Modern European B2B Identity）**为基调，面向全球设备分销商（Distributors）、EPC 医院气体工程总包商（Integrators）与科研分析机构（Institutes），提供清晰的产品选型、工程方案与 24 小时报价通道。

### 1.2 技术栈核心原则
* **轻量级现代纯静态架构**：采用 **HTML5 语义化标签 + TailwindCSS (CDN JIT) + Vanilla JS / CSS3 硬件加速动画**。坚决摒弃臃肿的 WordPress / PHP / 数据库框架，全站首屏无额外网络开销，页面加载时间严格控制在 0.5s~1.5s 之间。
* **全球边缘 CDN 加速**：部署于 GitHub Pages 全球高可用节点，国内及海外均能做到免代理秒开。
* **全局 Lightbox 极清交互**：自主编写原生 `assets/js/lightbox.js` 脚本，全站通过 `data-zoom` 和 `data-hd` 标签驱动，点击任意产品图、认证证书、工程案例均可全屏无损放大查看。

---

## 2. 全站 19 个核心页面统计与交付全貌

目前全站共包含 **19 个相互贯通的 HTML 页面**，全网已通过自动化死链审计测试（0 死链、0 缺失图片资产、0 语法异常）：

| # | 页面文件名 | 页面职责与核心模块 | 访问绝对路径 / 生产 URL |
| :---: | :--- | :--- | :--- |
| 1 | **`index.html`** | **官网主页 (Home)**：3 镜头全景轮播、Trust Bar 动态数据条、6 大品类全景网格、父女两代家国传承叙事、权威合作伙伴背书 | `https://www.hongrun1995.cn/index.html` |
| 2 | **`products.html`** | **产品总览中心 (Products Hub)**：3 镜头 3D CAD/旗舰机轮播、6 标签吸顶锚点导航、6 大系统规格参数表、直通独立详情页 | `https://www.hongrun1995.cn/products.html` |
| 3 | **`products-hy.html`** | **摆动活塞无油空压机 (HY Series)**：1~10 台牙椅门诊主力气源、HY-100~HYT-500 双机头冗余机组全参数表 | `https://www.hongrun1995.cn/products-hy.html` |
| 4 | **`products-hospital.html`** | **静音涡旋与医院系统 (HW/HBG)**：二类医疗器械资质、大型医院中央气源站、HW-200~HW-3600 全系机组 | `https://www.hongrun1995.cn/products-hospital.html` |
| 5 | **`products-hvs.html`** | **牙科电动抽吸机组 (HVS Series)**：1~50 台牙椅高负压抽吸工程、85%+ 高效气溶胶控制系统 | `https://www.hongrun1995.cn/products-hvs.html` |
| 6 | **`products-cleanair.html`** | **医用洁净气源站 (HYG/HVTG)**：露点 $\le -40^\circ	ext{C}$、0.01μm 绝对过滤一体化站深度评测 | `https://www.hongrun1995.cn/products-cleanair.html` |
| 7 | **`products-water.html`** | **医用纯化水系统 (HRC Series)**：多级 RO 反渗透、臭氧 + UV 双重消毒、消毒供应中心与中央环路配置 | `https://www.hongrun1995.cn/products-water.html` |
| 8 | **`products-core.html`** | **核心部件与耗材 (Core Spares)**：ZB 摆动泵头、4V 机头、PSA 模块化吸附干燥器、冷干机与备件清单 | `https://www.hongrun1995.cn/products-core.html` |
| 9 | **`solutions.html`** | **工程解决方案 (Solutions)**：4 大行业应用场景、真实医院/诊所施工工程图册、4K 数字化手术室与智能 IoT 拓扑 | `https://www.hongrun1995.cn/solutions.html` |
| 10 | **`about.html`** | **关于我们 (About Us)**：都柏林图书馆知识传承 Hero、1080P 双流智造视频展、民营家国情怀、16 节点权威史、企业文化 5 核心、极清证书墙、顶尖高校背书 | `https://www.hongrun1995.cn/about.html` |
| 11 | **`contact.html`** | **联系我们 (Contact Us)**：国际手术室&实景车间轮播、8 人技术销售矩阵（内嵌 CAD 线稿与专属社媒）、3 栏直通条、24h 报价表单、经销商招募 | `https://www.hongrun1995.cn/contact.html` |
| 12 | **`news.html`** | **新闻与技术洞察中心 (News Hub)**：官方企业新闻、牙科工程选型指南、30 周年全国质量巡检洞察、国际医疗展会里程碑 | `https://www.hongrun1995.cn/news.html` |
| 13 | **`blog-15-dental-chairs-sizing.html`** | **15 台牙椅选型白皮书 (Sizing Whitepaper)**：同时使用系数 k=0.70 计算、HYT 双机头冗余、HVS 中央负压选型 | `https://www.hongrun1995.cn/blog-15-dental-chairs-sizing.html` |
| 14 | **`blog-compressor-exploded-anatomy.html`** | **空压机 3D CAD 爆炸解剖 (Exploded Anatomy)**：Class 0 零油纯度工程、PTFE 活塞环生命周期、PSA 吸附干燥解剖 | `https://www.hongrun1995.cn/blog-compressor-exploded-anatomy.html` |
| 15 | **`blog-suction-exploded-anatomy.html`** | **HVS 抽吸系统 3D 爆炸解剖**：流体动力学、两级旋风分离、气溶胶控制、多椅选型 | `https://www.hongrun1995.cn/blog-suction-exploded-anatomy.html` |
| 16 | **`blog-dental-south-china-expo.html`** | **华南国际口腔展 (Dental South China Expo)**：智能化洁净空气站与 HVS 抽吸系统首发、OEM 合作签约 | `https://www.hongrun1995.cn/blog-dental-south-china-expo.html` |
| 17 | **`blog-jinan-medical-hub.html`** | **30 周年质量巡检 · 济南医疗器械枢纽**：制造集群与医院中央气站现场工程审计 | `https://www.hongrun1995.cn/blog-jinan-medical-hub.html` |
| 18 | **`blog-beijing-quality-tour.html`** | **30 周年质量巡检 · 北京**：三甲医院、北大口腔医学院、中科院实验室 | `https://www.hongrun1995.cn/blog-beijing-quality-tour.html` |
| 19 | **`privacy-policy.html`** | **隐私政策 (Privacy Policy)**：国际化数据保护与 GDPR 合规声明 | `https://www.hongrun1995.cn/privacy-policy.html` |

---

## 3. VI V3.0 终极视觉规范与设计系统

全站经过多轮严格实测与审美打磨，最终达成 **VI V3.0 终极设计标准**：

### 3.1 标准色彩系统 (Color Hierarchy)

| 色彩角色 Role | 色值 Hex / RGB | Tailwind 标记 | 核心应用场景与设计语义 |
| :--- | :--- | :--- | :--- |
| **深海品牌蓝 Primary** | `#0F4C81` | `brand.blue` | Logo 外圈主色、一级标题、主按钮强调、表头、核心图标、Hover 激活高亮 |
| **深邃暗蓝 Deep Blue** | `#0C3D6B` | `brand.deep` | 渐变背景终点、强调阴影层级、重型工业质感承载区 |
| **科技天蓝 Sky Blue** | `#0EA5E9` | `brand.sky` | 数据微动效激活态、暗底高光文本、轮播指示高亮点 |
| **沉稳炭黑 Charcoal** | `#0F172A` | `slate-900 / brand.dark` | **最底部页脚（Footer）底色**、暗色卡片、高级感科技背景 |
| **极浅蓝灰 Surface** | `#F1F5F9` | `brand.light / slate-100` | 浅色分区背景、产品参数卡片浅底、交替斑马行底色 |
| **纯白界面 Pure White** | `#FFFFFF` | `white` | 产品展示卡片背景、正文字体、大面积留白区域 |
| **点睛橙黄渐变 Accent** | `#EA580C` $
ightarrow$ `#EAB308` | `from-brand-accent to-brand-gold` | **CTA 核心行动按钮**、国内版橙黄 Logo、Logo 图形内部局部点睛线条 |

### 3.2 页面底层配色与层次节奏规范（严苛戒律）
1. **上层深蓝科技背书 $
ightarrow$ 底层炭黑厚重收尾**：全站页面底部的结构统一为“伙伴背书区采用深蓝渐变色（`bg-gradient-to-br from-brand-blue to-brand-deep`），最底部页脚统一采用深沉炭黑色（`bg-slate-900`）”，告别大面积同色块连成一体的单调感。
2. **Hero Banner 毛玻璃信息面板**：统一使用紧凑型半透明金属灰面板（`bg-slate-800/25` 或 `/35` + `backdrop-blur-sm rounded-xl border border-white/10`），绝不遮挡大屏背景中的核心设备或厂房字样。
3. **禁用蓝色浓雾大遮罩**：严禁在背景图上方覆盖刺眼的实色蓝全遮罩；一律采用极清背景实景图 + 局部毛玻璃文字框承载。

### 3.3 产品图陈列机制（杜绝抠图破损）
* **白底立体悬浮卡片**：产品图统一使用 $1000 	imes 1000$ 官方极清 JPG，置于带有细微投影的纯白圆角卡片（`bg-white rounded-xl shadow-xl border border-slate-200`）内，配合 `mix-blend-multiply` 实现白底与卡片边缘的无缝融合。
* **15% 轻微拉近悬停动效**：鼠标悬停于产品卡片时触发 `group-hover:scale-115` 或 `scale-105` 平滑放大动效（`transition-transform duration-500`），并支持全屏 Lightbox 大图弹窗。

---

## 4. 三类核心商业买家与转化漏斗

宏润国际官网同时精准服务三类海外核心买家，在信息架构上实现了分层触达：

| 受众类型 Target Buyer | 买家画像 Buyer Persona | 核心诉求 Primary Pain Points | 网站转化入口 Site Touchpoints |
| :--- | :--- | :--- | :--- |
| **经销商/代理商 (Distributors)** | 目标市场的设备分销商、牙科通路商、医疗器械进口商 | 产品线完整度、利润空间、CE/ISO 13485 合规证件、区域独家保护 | 专属 Distributor 入口、Catelog 下载、认证质检背书、直发合作申请 |
| **系统集成商 (EPC Integrators)** | 诊所装修工程总包、医院净化工程安装商 | 资质等级、管网阻力计算、两供一吸一体化交付能力 | EPC 方案页、两供一吸水汽拓扑、管径选型表、工程图纸 24h 响应 |
| **终端机构 (End-user Clinics/Labs)** | 口腔门诊院长、三甲医院设备科长、高校分析室主任 | 零油洁净标准、静音低噪表现、标杆用户背书 (安捷伦/中科院)、持久耐用 | 单双椅/多椅智能选型配置器、30,000h 关键部件寿命指标、客户专访 |

---

## 5. 全球对标竞争分析与出海护城河

通过系统化拆解欧洲一线品牌（EKOM、DÜRR Dental、Atlas Copco）与国内出海品牌，确立宏润的核心竞争策略：

| 对标品牌 | 核心优势 | 宏润转换落地与差异化突围策略 |
| :--- | :--- | :--- |
| **EKOM (斯洛伐克)** | 极洁工业摄影、紧凑箱式设计 | 学习其德系严谨排版；宏润以 16 万台规模化年产能与超高性价比备件实现降维竞争 |
| **DÜRR Dental (德国杜尔)** | "System in Action" 体系化叙事与牙科四件套集成 | 打造“两供一吸”完整闭环（空压机 + 负压抽吸 + 洁净干燥站 + 纯化水），提供一站式诊室气水交钥匙方案 |
| **Atlas Copco / Kaeser** | 行业解决方案深度、全球 EPC 交付背书 | 拔高医疗气源工业站定位，突出 Class II 资质、一级能效与安捷伦/布鲁克 OEM 原厂配套实力 |
| **Dynair / 国内出海竞品** | 价格敏感型外贸出口 | 宏润以 30 年军工精神传承、国家二类医疗注册证与全套极清 CAD 爆炸图构建高端品牌品质溢价 |

---

## 6. 6 大产品生态系统与专属详情页全览

官方站点数据已全面萃取，构建了覆盖牙科门诊到大型医院生命支持系统的 6 大产品家族：

```
Hongrun Complete Clean Air & Suction Ecosystem
  ├── 01. Piston Oil-Free Compressors (HY/HYT) ──────> products-hy.html
  ├── 02. Dental Vacuum Suction Systems (HVS) ────────> products-hvs.html
  ├── 03. Medical Clean Compressed Air (HYG/HVTG) ────> products-cleanair.html
  ├── 04. Hospital & Scroll Compressors (HW/HBG) ─────> products-hospital.html
  ├── 05. Medical Purified Water Systems (HRC) ───────> products-water.html
  └── 06. Core Components & Precision Spares (ZB/PSA) ─> products-core.html
```

### 6.1 6 大产品线参数与应用矩阵

| 品类编号与名称 | 代表型号 | 核心性能与指标参数 | 国际资质与权威认证 | 单椅与多椅适用规模 |
| :--- | :--- | :--- | :--- | :--- |
| **01. Piston Compressors**<br>(活塞无油空压机) | `HY-100` ~ `HY-500`<br>`HYT-200` ~ `HYT-500` | 70 ~ 500 L/min<br>$\le 60	ext{ dB(A)}$ 超静音<br>双机头并联冗余供气 | ISO 8573-1 Class 0<br>CE · ISO 13485<br>国家一级能效 | 1 至 10 台牙科综合治疗台 |
| **02. Dental Vacuum**<br>(口腔负压抽吸系统) | `HVS-1` ~ `HVS-10`<br>`HVS-15` ~ `HVS-50` | 300 ~ 3000 L/min<br>稳压 $-70	ext{ kPa}$ 负压<br>HEPA 0.01μm 排气过滤 | 二类医疗机械资质<br>气溶胶拦截率 $>85\%$ | 1 至 50 台牙椅中央负压系统 |
| **03. Clean Air Source**<br>(医用洁净气源站) | `HYG-301` ~ `HYG-1000`<br>`HVTG-400` ~ `HVTG-1600` | 压力露点 $\le -40^\circ	ext{C}$<br>0.01μm 绝对过滤<br>集成冷干/吸干双塔 | ISO 8573-1 (1.1.1 级)<br>无菌干燥无油气源 | 内镜清洗、灭菌室、ICU、中心手术室 |
| **04. Hospital & Scroll**<br>(医院中心站与涡旋机) | `HBG-400` ~ `HBG-2400`<br>`HW-200` ~ `HW-3600` | 400 ~ 3600 L/min<br>多机热备微机智能联控<br>全天候 24h 连续重载运行 | NMPA Class II 医疗器械<br>欧洲 CE 医疗认证 | 综合性三甲医院、口腔专科医院 |
| **05. Purified Water**<br>(医疗纯化水处理系统) | `HRC-60`<br>`HRC-100S`<br>`HRC-300`<br>`HRC-500` | 60 ~ 500 L/h 出水<br>多级高抗污染 RO 反渗透<br>臭氧 $O_3$ + 254nm 紫外双重阻导 | 电导率 $<1.0\ \mu	ext{S/cm}$<br>全不锈钢食品级管路 | 牙椅诊疗供水、消毒供应中心 (CSSD)、血液透析 |
| **06. Core Components**<br>(核心机头与干燥器耗材) | `ZB-100/200/300`<br>`4V 强劲机头`<br>`PSA 模块化吸干机`<br>`冷冻式干燥机` | 0.55 ~ 3.3 kW 泵头<br>瑞典纯正耐磨阀片<br>Saint-Gobain 特氟龙无油活塞环 | 30,000 小时重载寿命设计<br>百级动平衡精准校正 | 纯正原厂 OEM 备件、海内外老客户替换更新 |

---

## 7. 4 大行业解决方案与数字化智能拓扑

在 `solutions.html` 中，全面构建了**国际化 4 大行业应用方案与 4K 数字化智能物联拓扑**：

### 7.1 四大行业应用场景 (Application Sectors)
1. **Application 01: Dental Clinics & Stomatology Centers (口腔诊所与专科中心)**：
   - 针对 1~30 台牙椅提供“两供一吸”（洁净压缩气、纯化水路、高负压抽吸）一体化交钥匙管网排布，消除 85% 以上气溶胶交叉感染隐患。
2. **Application 02: Hospital & Infection Control EPC (医院中心供气与感控管网总包)**：
   - 具备国家二类医疗器械资质的 HBG 系列医院中心机房供气系统，全自动变频温控与露点 $\le -40^\circ	ext{C}$ 干燥体系，直通手术室与消毒供应中心。
3. **Application 03: Analytical & Scientific Research Labs (顶尖科研与仪器分析实验室)**：
   - 为质谱仪（LC-MS）、气相色谱仪（GC）、核磁共振（NMR）提供高纯度载气，是安捷伦（Agilent）、布鲁克（Bruker）、岛津（Shimadzu）与中科院 190+ 实验室的指定气源。
4. **Application 04: Precision Industrial & Clean Manufacturing (高端光学与无油精密智造)**：
   - 满足半导体封装、芯片洁净室、光学镜片镀膜对 100% 绝对零油气源的高标准要求。

### 7.2 数字化智能诊室与 IoT 物联网工程架构
- **4K 数字化无菌洁净手术室（左翼）**：展现暗埋食品级不锈钢无菌管路与设备连接，强调 ISO Class 0 洁净度。
- **24/7 云端 IoT 物联压力监控台（右翼）**：实时监测管网动压、露点温湿度、VFD 变频自适应调节与预测性故障预警。
- **三维技术指标胶囊**：`Zero-Oil Clean Supply`（纯净洁净供气）、`85%+ Aerosol Containment`（高负压防气溶胶扩散）、`Sterile Pure Water Loop`（臭氧/UV双重抑菌纯化水循环）。

---

## 8. 品牌叙事、智能工厂视频展与 16 节点发展史

在 `about.html` 中，深度呈现宏润科技 30 余年的工业底蕴与国际化品牌自信：

### 8.1 主视觉与品牌文化精神
- **历史厚重感 Hero**：采用都柏林圣三一学院长厅图书馆（Trinity College Library Long Room）9000px 极清原图，传达“文明传承、科技探索与厚重沉淀”的全球大厂定位。
- **两代人的家国精密制造信念**：讲述 1995 年退伍军人秉承“宏天下正气，润世间万物”的初心创办企业，两代工程师接力将中国精密无油压缩气源推向世界最高殿堂的史诗历程。
- **企业文化 5 大核心价值观 (Corporate Ideology)**：
  1. *Brand Essence (品牌释义)*：宏天下正气 · 润世间万物
  2. *Vision (企业愿景)*：打造全球领先空压机民族品牌
  3. *Mission (企业宗旨)*：专业追求赢得满意 · 诚信服务值得信赖
  4. *Core Values (核心价值观)*：专业品质 · 永久服务
  5. *Positioning (企业定位)*：高科技数字化全无油空压机生产商与服务商

### 8.2 智能工厂与现代产线视频展 (Factory & Clean-Room Video Tour)
- **双流极速转码**：由原始视频无损母带经过 FFmpeg 图像引擎重制（`hqdn3d` 高精降噪 + `unsharp` 边缘微观锐化 + `eq` 光学影棚提亮），生成 **MP4 (H.264 + FastStart 秒开)** 与 **WebM (VP9)** 双流。
- **流畅镜头编排**：
  - *第一镜头 (0 ~ 9.3s)*：宏伟大楼与 20,000㎡ 现代工业园全景。
  - *平滑十字溶解 (1.0s Crossfade)*：无缝过渡至内部装配线。
  - *第二镜头 (10.3s ~ 20.3s)*：无尘装配流水线、自动化测试台与数字化老化工位实景。
- **HTML5 自动静音循环播放**：`<video autoplay loop muted playsinline>` + 翠绿色呼吸灯状态指示徽章。

### 8.3 16 节点官方权威发展史（1995 – 2026 三幕演进）

```
[第一时期：1995-2005 奠基启航与医疗初试]
  ├── 1995 年 11 月：企业于山东淄博正式成立，开启无油专业制造之路
  ├── 2000 年：成功研制首代摆动活塞无油空压机；2002 年 8 月获国家一类医疗器械注册证
  ├── 2003 年 04 月：通过国家通用机械认证与轻工业局全国工业生产许可证考核
  └── 2004 年 05 月：一次性通过 ISO 9001:2000 国际质量管理体系认证

[第二时期：2006-2015 医院级资质跃升与欧盟 CE 准入]
  ├── 2006-2007 年：获得国家二类医疗器械制造许可证与核心系列二类注册证
  ├── 2008 年 09 月：电动负压抽吸机组获二类发证；全系空压机整机通过欧盟 CE 认证
  ├── 2012 年：全系列产品通过国家一级能效评测，荣获绿色低碳环保标识
  ├── 2013-2014 年：获批成立淄博市无油空压机工程技术研究中心，获评国家高新技术企业
  └── 2015 年：荣获淄博市高新区工业成长型三十强企业及淄博专利奖

[第三时期：2016-2026 智能制造转型与全球领军地位]
  ├── 2016-2017 年：荣获山东省科技进步奖，获得升级版二类医疗器械延续注册与生产许可
  ├── 2018-2019 年：荣获山东省“专精特新”中小企业、山东优质品牌及齐鲁杯工业设计大奖
  ├── 2020-2021 年：20,000㎡ 智能化制造基地落成投产；深度参与制定多项国家气源行业标准
  └── 2023-2026 年：获批设立山东省博士后创新实践基地，16万台年产能覆盖全球 50+ 国家
```

---

## 9. 8 人国际业务与技术解决方案团队矩阵

在 `contact.html` 中，建立了**对称平衡的 8 人名片矩阵（$4 	imes 2$ 布局）**，每张卡片严格按照 **“3-Zone 三段式布局”** 进行标准化构建：

```
┌─────────────────┬───────────────────────────────┬─────────────────────────┐
│ [Zone 1]        │ [Zone 2]                      │ [Zone 3]                │
│ 3:4 标准商务    │ Martin Chen                   │ ⚡ SOCIAL & ACTION      │
│ 深蓝天鹅绒肖像  │ CHIEF MARKETING DIRECTOR      │ ┌─────────────────────┐ │
│                 │ [Global Strategic Accounts]   │ │ 👔 LinkedIn Pill    │ │
│ (头部适度留白， │ ───────────────────────────── │ ├─────────────────────┤ │
│  胸口上方裁切， │ 📱 +86 13964416725            │ │ 𝕏  𝕏 Official       │ │
│  严禁露腰拉长)  │ ✉️ martinchen@hongrun1995.cn   │ ├─────────────────────┤ │
│                 │ ✉️ hrmedaircom@gmail.com      │ │ ▶️ YouTube Channel  │ │
│                 │ (底纹: 15% CAD 齿轮线稿草图)  │ ├─────────────────────┤ │
│                 │ (严格移除所有中文括号与网址)  │ │ ✈️ Send Email Direct│ │
│                 │                               │ └─────────────────────┘ │
└─────────────────┴───────────────────────────────┴─────────────────────────┘
```

### 9.1 8 位团队成员信息与官方通道总表

| 编号 | 姓名 / 职务 | 负责市场区域 | 联系电话 | 官方电子邮箱 | 社交媒体与直连入口 | 底纹 CAD 设计草图 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Martin Chen**<br>Chief Marketing Director | **Global Strategic Accounts & OEM** | `+86 13964416725` | `martinchen@hongrun1995.cn`<br>`hrmedaircom@gmail.com` | • [LinkedIn](https://linkedin.com/in/martin-hongrun-air-compressor-4b84849b)<br>• [𝕏 (@martinhrtech)](https://x.com/martinhrtech)<br>• [YouTube](https://www.youtube.com/@MartinChenAirtech)<br>• `Send Email Direct` | `sketch_1.png`<br>(五轴气缸套与双传动齿轮) |
| **2** | **Henry Xing**<br>Senior Market Director | **Russia / CIS / Central Asia** | `+86 13864483913` | `xing@hongrun1995.cn` | • [LinkedIn](https://www.linkedin.com)<br>• [𝕏](https://x.com)<br>• `Send Email Direct` | `sketch_2.png`<br>(渐开线涡旋动静盘型线) |
| **3** | **Steven Yang**<br>Market Director | **Asia-Pacific & MEA** | `+86 13581047133` | `stevenyang@hongrun1995.cn` | • [YouTube 专属频道](https://www.youtube.com/@stevenyang1983)<br>• `Send Email Direct` | `sketch_3.png`<br>(高负压涡轮叶轮与流线) |
| **4** | **Jason Li**<br>Market Director | **Europe & Americas** | `+86 15065856697` | `jason@hongrun1995.cn` | • [LinkedIn](https://www.linkedin.com)<br>• [𝕏](https://x.com)<br>• `Send Email Direct` | `sketch_4.png`<br>(5级精密过滤汇流排断面) |
| **5** | **Tina Liu**<br>Account Manager | **Africa & Mediterranean** | `+86 15069317135` | `tina@hongrun1995.cn` | • [𝕏 平台 (@tinaliuhongrun)](https://x.com/tinaliuhongrun)<br>• `Send Email Direct` | `sketch_5.png`<br>(多级RO膜壳与UV消毒) |
| **6** | **Daisy Wang**<br>Account Manager | **South America & Europe** | `+86 18678192340` | `wangdi@hongrun1995.cn`<br>`daisywang0012@gmail.com` | • [LinkedIn](https://www.linkedin.com/in/daisy-medical)<br>• [𝕏 平台 (@wangdidi0102)](https://x.com/wangdidi0102)<br>• `Send Email Direct` | `sketch_6.png`<br>(PSA分子筛吸附柱与导阀) |
| **7** | **Aimy Chen**<br>Special Channel Manager | **Specialized Channels & Accounts** | 专属大客户渠道 | `aimy@hongrun1995.cn` | • 3D 智慧工程形象肖像<br>• `Send Email Direct` | `sketch_7.png`<br>(瑞典精密阀片密封座) |
| **8** | **General Inquiries**<br>Official Commercial Desk | **24h Response Guarantee** | 总部官方专线 | `info@hongrun1995.cn` | • 3D 智慧工程形象肖像<br>• `Send Email Direct` | `sketch_8.png`<br>(医院中央供气Skid轴测) |

---

## 10. 多页面 Hero 轮播大屏系统全景

全站核心枢纽页面均配备了专属的大屏多镜头轮播系统：

| 页面 | 轮播镜头数量 | 镜头主题与素材 | 交互与转场机制 |
| :--- | :---: | :--- | :--- |
| **`index.html` (主页)** | **3 镜头** | 1. 国际品牌全景大图 (`en_b1.jpg`)<br>2. 6 大产品全家福系统实景 (`en_b2_products.jpg`)<br>3. 制造基地与现代化流水线 (`en_b3.jpg`) | 12s 自动轮播、毛玻璃面板居中偏左、Trust Bar 悬停放大 15% 跃入天蓝 |
| **`products.html` (产品中心)** | **3 镜头** | 1. 精密 3D CAD 机械管路爆炸拆解图 (`products_hero_exploded.jpg`)<br>2. 四机头旗舰无油空压机舒适景深 (`products_hero_compressor.jpg`)<br>3. 核心精密机头与马达放大 30% (`products_hero_motor.jpg`) | 8s 自动淡入淡出、左侧毛玻璃信息卡与机体自然叠压穿插 |
| **`contact.html` (联系我们)** | **2 镜头** | 1. 高科技数字化手术室实景 (`contact_hero_surgical.jpg`)<br>2. 现代成套设备装配车间与物流基地 (`contact_hero_assembly.jpg`) | 10s 自动轮播、背景向右偏移 75% 保障 Logo 绝对安全呼吸区 |

---

## 11. 全球合作经营模式与外贸商务机制

### 11.1 四大约定合作模式 (Cooperation Modes)
1. **OEM / ODM 原厂定制协作**：
   - 支持机箱外壳喷漆、品牌丝印、电压/频率国际定制（110V/220V/380V，50Hz/60Hz）、接口尺寸（G螺纹/NPT螺纹）专属工程开发。
2. **独家区域分销商计划 (Authorized Dealership)**：
   - 严格的区域独家代理协议与市场保护机制；提供每年 Marketing Co-op 市场联合推广基金、全套英文画册纸质物料支持与配件优先直发机制。
3. **医院气体 EPC 工程联合投标**：
   - 为海外工程总包商提供 CAD 施工管线图纸深化、气源用量与压降精算白皮书、全套 CE/ISO/NMPA Class II 招标资质授权。
4. **核心机头与关键配件供应链配套**：
   - 针对海外当地组装厂直供 ZB 摆动活塞机头、HW 涡旋机头与 PSA 核心干燥模组。

### 11.2 外贸询盘与 24h 自动化响应 SOP
- **官方总机**：`info@hongrun1995.cn`，全天候 24 小时内由 Chief Marketing Director 牵头技术团队回复技术方案与 FOB/CIF 报价。
- **商务表单直连**：`contact.html` 及各产品页内嵌在线询盘表单，支持直接标注牙椅台数、用气量指标与定制工况要求。

---

## 12. 国际 SEO / GEO 结构化数据与爬虫优化

全站 19 个 HTML 页面均已完成 **SEO（传统搜索引擎优化）** 以及 **GEO（AI/生成式搜索引擎优化 · Generative Engine Optimization）** 的最高规格部署：

1. **Schema.org 结构化 JSON-LD 注入**：
   - `index.html` / `about.html`：注入 `Organization` 架构，包含企业全称、始创年份 (1995)、质量认证标准、官方社交媒体主页与全球运营属地。
   - `products.html` 及 6 个产品详情页：独立注入 `Product` 与 `AggregateOffer` 架构，精准识别系列型号、ISO 8573-1 Class 0 分级、功率、排气量及现货状态。
   - `solutions.html`：注入 `Service` 与 `OfferCatalog` 架构，清晰界定口腔诊所两供一吸、医院中央供气二类医疗 EPC、实验室高纯气源等交付方案。
   - `contact.html`：注入 `ContactPage` 架构，标明官方总机邮箱 `info@hongrun1995.cn`、总部电话与山东淄博地址。
2. **规范链接与社交元标签 (Canonical & OpenGraph)**：
   - 每一页均配置 `<link rel="canonical" href="https://www.hongrun1995.cn/..." />`，坚决避免重复收录。
   - 配置高规格 `og:type`、`og:title`、`og:description`、`og:url`、`og:site_name` 及 `twitter:card="summary_large_image"`。
3. **爬虫引导协议**：
   - 根目录下编写 `sitemap.xml`，对全站 19 个页面标注更新频率（`weekly` / `monthly`）与权重优先级（`1.0` ~ `0.7`）。
   - 根目录下配置 `robots.txt`，允许 Googlebot、Bingbot、Applebot、Baiduspider 全量爬取。

---

## 13. 图片素材、视频流与工业设计草图资产清单

### 13.1 视频与富媒体资产 (`hrtech/assets/videos/`)
- `assets/videos/factory-tour.mp4` (14.4MB · H.264 + FastStart 极致秒开)
- `assets/videos/factory-tour.webm` (15.3MB · VP9 高清双流支持)
- `assets/videos/factory-tour-poster.jpg` (首帧静态占位封面，彻底杜绝白屏)

### 13.2 核心横幅资产 (`hrtech/assets/images/banners/`)
- `contact_hero_surgical.jpg` (2560x1416 -> 1920x672 数字化手术室 横幅)
- `contact_hero_assembly.jpg` (2480x1086 -> 1920x672 成套机组装配车间 横幅)
- `products_hero_exploded.jpg` (1920x672 3D 机械爆炸拆解图 横幅)
- `products_hero_compressor.jpg` (1920x672 四机头旗舰空压机 横幅)
- `products_hero_motor.jpg` (1920x672 核心马达机头 横幅)
- `en_b1.jpg` / `en_b2_products.jpg` / `en_b3.jpg` (1920x672 首页大屏轮播)
- `logo_transparent.png` (扁平纯蓝/R带橙黄渐变透明 PNG)
- `logo_cn_orange.png` (Footer 专属白底卡片承载国内版橙黄 Logo)

### 13.3 团队肖像与工业线稿资产 (`hrtech/assets/images/team/` & `hrtech/assets/images/sketches/`)
- `team_1.jpeg` 到 `team_8.png`：统一 $750 	imes 1000$、标准 3:4 商务半身胸像、美式深蓝天鹅绒影棚底色。
- `sketch_1.png` 到 `sketch_8.png`：8 组高对比度透明 CAD 工业设计线稿暗纹（齿轮、动静涡旋盘、叶轮、5级过滤管排、RO膜壳、PSA双塔、瑞典阀片、医院供气Skid）。

---

## 14. Git 工作流与全自动部署规范

### 14.1 分支与构建机制
* **主干分支**：`main` 为单一生产部署分支。
* **部署平台**：GitHub Pages（自 `main` 分支根目录自动化检测发布）。
* **提交规范**：严格遵循 Conventional Commits（`feat:`, `fix:`, `style:`, `refactor:`, `docs:`）。

### 14.2 发布三步验收 SOP
1. **本地自动化校验**：运行 Python 脚本对全站 19 个 HTML 文件的标签闭合、图片有效性、内部超链接进行 100% 遍历检查。
2. **Git 提交推送**：
   ```bash
   git add -A
   git commit -m "feat/fix: <说明变更>"
   git push origin main
   ```
3. **线上验证生效**：等待 GitHub Actions / Pages 构建完成（约 30~60 秒），强制清除本地浏览器缓存（`Ctrl+F5` / `Cmd+Shift+R`）验证全球公网加载情况。

---

## 15. 历史否决方案风控存档（严禁再次踩坑）

为保证后续接手的开发团队与 Agent 不出现设计倒退或逻辑混乱，特将历次评审中被**坚决否决的方案及原因**永久封存：

| 历史否决方案 | 否决与废弃原因 | 确立的终审替代标准 |
| :--- | :--- | :--- |
| **全站 PIL 阈值粗暴去白底抠图** | 阈值滤镜去除了医用设备内部白色的机壳与阀管，造成大面积破洞与锯齿边缘，极其粗糙。 | **白底立体实物展现**：采用原图 JPG 配合纯白圆角卡片（`mix-blend-multiply`）与 15% 悬停拉近。 |
| **蓝色浓雾全屏背景遮罩** | 大面积覆盖的 `brand-blue/90` 使得背景发糊发灰，像廉价雾霾，破坏工业摄影的通透度。 | **锐利实景背景 + 局部紧凑毛玻璃面板**：背景图锐利呈现，文字用半透明金属灰面板承载。 |
| **金属立体/银色渐变 Logo** | 描边与渐变在小尺寸导航栏（`h-14`）渲染发糊，失去辨识度。 | **扁平化纯蓝 Logo**：仅在 $R$ 字母内圈填充灵动的橙黄渐变点睛，外圈保持品牌深蓝。 |
| **大面积橙黄色块侵占主视觉** | 页面大面积使用高饱和度橙黄色块导致工业稳重感丧失，视觉轻浮。 | **极致克制点睛**：橙黄渐变严格限制在 CTA 按钮常态与国内版 Footer 反衬 Logo 上。 |
| **将大头贴随意放大或拉长露腰** | 过于贴脸产生压迫感，过度拉长下半身导致卡片高度失控、滚屏疲劳。 | **锁定 3:4 标准商务胸像**：头顶留白 5%~10%，下切至胸口领结上方，全员头肩比严格水平对齐。 |
| **编造不存在的网址与 VIP 标签** | 随意增加虚假链接或夸大性用语（如滥用 VIP Desk）损害海外 B2B 信任。 | **实事求是**：信息严格按真实档案录入，客观表述特殊大客户与技术支持通道。 |

---

## 16. 2026-09-01 参考站交叉核对与域名对接成果 (Auditing & Evolution Protocol)

### 16.1 域名对接（已完成，供复制参照）
- **唯一生产主域**：`https://www.hongrun1995.cn`（`hongrun1995.cn` 301 至 `www`，HTTPS 强制）。
- **GitHub Pages 绑定是双向握手，两步缺一不可**：
  1. **DNS 侧**：apex A 记录 → `185.199.108-111.153`；`www` CNAME → `martin-mqtech.github.io`。
  2. **仓库侧**：仓库根目录放置 `CNAME` 文件（内容 `www.hongrun1995.cn`），或 GitHub Pages 设置填自定义域名——**只做 DNS 不做仓库认领会 404 "There isn't a GitHub Pages site here"，且不签发 SSL 证书**。
- **重要教训**：配置类任务验收标准应为"最终可观测结果"（打开域名能看到网站），而非"指令里的操作都做完了"；否则会像本次一样漏掉第②步，导致 DNS 正确却 404。

### 16.2 参考站交叉核对结论（供后续 Agent 交叉验证）

> 本节为 2026-09-01 针对参考站 `https://www.hongrun1995.com` 的全站产品型号/图片/参数交叉核对沉淀。**后续 Agent 做同类核对时必须先读本节，避免重复踩坑或用错误方法误判。**

**A. 权威基准数据源分层（判断型号/参数/图是否可信）**
1. **最高权威**：官方图册《25宏润医用空气系统图册0501版90120.pdf》(37 个型号) + 《HONGRUN-COMPANY-PROFILE-V2.1.md》——决定型号真实性、完整参数。
2. **高权威**：国内站 `www.hong-run.com`（产品分类页）——确认型号是否真实存在（HW-1800/2400/3600、HWG-200/400/600、HVTG-1200/1600 等在此站确认真实）。
3. **素材源但不可作依据**：参考站 `www.hongrun1995.com`——**自身错配严重**（多型号共用一张图、部分型号已下架），仅作素材来源，取图前必须先 MD5 校验 + OCR 图内型号文字。
4. **型号↔图片归属的权威判定**：以**浏览器真实渲染 DOM 的行内配对**为准（型号标题所在 grid 内的 img），**不得**只用正则 `按 <h3> 切分取首图`——本站在"左图右文"布局下图排于标题之前，正则会误配到下一型号。

**B. 参考站 hongrun1995.com 官方权威型号基准（36 款）**
| 系列 | 官方型号 |
|---|---|
| 活塞/医用 | HY-200、HYT-200、HYT-400、HYT-500、HYTG-300、HBG-400、HBG-900、HBG-1200、HW-200、HW-400、HW-800、HW-1200 |
| 牙科抽吸 | HVS-1、HVS-2、HVS-3、HVS-4、HVS-5、HVS-7、HVS-10 |
| 洁净气源 | HVTG-400、HVTG-900、HYG-301、HYG-302 |
| 纯水 | HRC-60、HRC-100、HRC-100L、HRC-100S、HRC-180S、HRC-300、HRC-500 |
| 核心部件 | ZB-100、ZB-200、ZB-300、PSA-Dryer、Freezing-Dryer、Scroll-700、4V、Tubing-Disinfectant |

**C. 本次核对核心结论（渲染级逐一验证，全部通过）**
- 全站 7 个产品页（hy/hvs/cleanair/water/hospital/core/products 总览）的**型号↔图片匹配正确**，src 小图与 data-hd 大图均与型号同名对应，含 lazy 加载。**无系统性错位。**
- 总览页 `products.html` 的 HVS 用合并命名（HVS-5&7、15&20、25&30、35&40）共 `HVS-5-7-10.jpg`；HVS-5/7/10 共用机架图为官方做法，但 15&20 及以上共用一张图语义略牵强，可后续优化。
- HRC-1000/2000 为合卡（intl 无独立图），复用系列图集，非错误。
- HWG-200/400/600 使用 `hd/HWG-*.jpg` 国内版图（已加 `[IMG-TODO]` 注记，符合 SSOT 规则）。

**D. 待产品方核实型号清单（用户决策：保留 + 标记待核实，不删除）**
以下型号参考站英文站未收录，但多数已在国内站 `hong-run.com` 确认真实存在，判定为"官方英文站未全收录"而非编造：
- `HVS-15 / HVS-25 / HVS-35 / HVS-300 / HVS-500`（英文站仅 HVS-1/2/3/4/5/7/10）
- `HRC-1000 / HRC-2000`（intl 无独立图）
- `HVTG-1200 / HVTG-1600`、`HYG-400`（英文站仅 HVTG-400/900、HYG-301/302）
- `HBG-800`、`HW-600`（英文站未列，国内站部分型号对应）

> 处理原则：**勿把本地站型号当作官方站不存在的"错型号"删除**；核对型录缺口时应补英文站名单，而非删本地。

**E. 审计方法教训（重要，防止后续 Agent 重复误判）**
1. **不要用算法"反证"用户的眼睛**：用户说"图重复/配错"时，先排查线上实际渲染，再对照图库。
2. **检查"图↔型号匹配"的正确维度**：按真实渲染 DOM 行内配对（型号所在容器内的 img），且同时核对 `src` 与 `data-hd`（Lightbox 大图）。只用文件名/MD5 会漏掉"视觉重复"，只用正则切分会误配。
3. **型号真伪判定不能只对参考站英文站**：多个型号在官方英文站未收录但国内站真实存在。判定"是否可对外售卖"应综合【官方图册 + 国内站 + 产品方确认】三源，且整体遵循 SSOT（见手册 §5-§13 型号逻辑）。

---

> **手册结语**：本手册已完全吸收并统筹合并了历史 `20260628 国际网站优化方案` 与全期档案中的所有有效资产与业务策略，成为宏润科技国际官网（VI V3.0）的单一事实基准（Single Source of Truth）。历史散落文件已无保留必要，后续维护唯本手册是从。
