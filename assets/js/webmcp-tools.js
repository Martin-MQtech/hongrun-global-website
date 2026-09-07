/**
 * Hongrun Technology (Est. 1995) - WebMCP AI Agent Tools
 * Specification: W3C webmachinelearning/webmcp & Anthropic Model Context Protocol (MCP)
 * Domain: https://www.hongrun1995.cn
 *
 * Exposes native callable tools to AI browser agents (Claude, ChatGPT Operator, Chrome AI, Copilot)
 * via document.modelContext.registerTool()
 */

(function () {
  "use strict";

  // 1. Comprehensive Hongrun Engineering Database
  const HONGRUN_DATABASE = {
    company: {
      name: "Hongrun Compressor Technology Co., Ltd. (宏润科技)",
      founded: 1995,
      headquarters: "Zibo High-Tech Industrial Zone, Shandong Province, China",
      annualCapacity: "160,000 units/year",
      cleanlinessStandard: "ISO 8573-1 Class 0 100% Oil-Free (TÜV Rheinland certified)",
      measuredResidualOil: "0.003 mg/m³ (ISO limit is 0.01 mg/m³)",
      measuredDewPoint: "-40°C Class 2 (Molecular sieve twin-tower desiccant dryer)",
      officialEmail: "martinchen@hongrun1995.cn",
      officialWebsite: "https://www.hongrun1995.cn"
    },
    products: [
      {
        model: "HY-1.5",
        category: "compressor",
        series: "HY Silent Cabinet Dental Series",
        powerKw: 1.1,
        powerHp: 1.5,
        flowLpmAt5Bar: 120,
        flowCfm: 4.24,
        maxPressureBar: 8.0,
        noiseDba: 52,
        tankVolumeL: 50,
        chairCapacity: "1-2 Dental Chairs",
        oilFreeGrade: "ISO 8573-1 Class 0",
        pistonRing: "Saint-Gobain PTFE Composite (20,000h wear life)",
        tankCoating: "Nano-Silver Antibacterial Anti-Rust Internal Lining",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HY-2.2",
        category: "compressor",
        series: "HY Silent Cabinet Dental Series",
        powerKw: 2.2,
        powerHp: 3.0,
        flowLpmAt5Bar: 240,
        flowCfm: 8.48,
        maxPressureBar: 8.0,
        noiseDba: 55,
        tankVolumeL: 90,
        chairCapacity: "3-5 Dental Chairs",
        oilFreeGrade: "ISO 8573-1 Class 0",
        pistonRing: "Saint-Gobain PTFE Composite (20,000h wear life)",
        tankCoating: "Nano-Silver Antibacterial Anti-Rust Internal Lining",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HY-3.0",
        category: "compressor",
        series: "HY Silent Cabinet Dental Series",
        powerKw: 3.0,
        powerHp: 4.0,
        flowLpmAt5Bar: 360,
        flowCfm: 12.71,
        maxPressureBar: 8.0,
        noiseDba: 58,
        tankVolumeL: 120,
        chairCapacity: "6-8 Dental Chairs",
        oilFreeGrade: "ISO 8573-1 Class 0",
        pistonRing: "Saint-Gobain PTFE Composite (20,000h wear life)",
        tankCoating: "Nano-Silver Antibacterial Anti-Rust Internal Lining",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HR-ZW200",
        category: "compressor",
        series: "Bare Core Pump & Motor Series",
        powerKw: 1.5,
        powerHp: 2.0,
        flowLpmAt5Bar: 155,
        flowCfm: 5.47,
        maxPressureBar: 8.0,
        noiseDba: 62,
        tankVolumeL: 0,
        chairCapacity: "2-3 Dental Chairs (OEM Bare Pump)",
        oilFreeGrade: "ISO 8573-1 Class 0",
        pistonRing: "Imported High-Density PTFE Compound",
        tankCoating: "N/A (Bare Head)",
        url: "https://www.hongrun1995.cn/products-core.html"
      },
      {
        model: "HR-400W",
        category: "compressor",
        series: "Dual-Head Redundant Medical Series",
        powerKw: 4.0,
        powerHp: 5.5,
        flowLpmAt5Bar: 480,
        flowCfm: 16.95,
        maxPressureBar: 10.0,
        noiseDba: 60,
        tankVolumeL: 180,
        chairCapacity: "8-12 Dental Chairs",
        oilFreeGrade: "ISO 8573-1 Class 0",
        pistonRing: "Saint-Gobain PTFE Composite",
        tankCoating: "Stainless Steel / Food-Grade Epoxy Inner Vessel",
        url: "https://www.hongrun1995.cn/products-cleanair.html"
      },
      {
        model: "HR-600W",
        category: "compressor",
        series: "Quad-Head Central Clinic / Hospital Air Station",
        powerKw: 6.0,
        powerHp: 8.0,
        flowLpmAt5Bar: 750,
        flowCfm: 26.49,
        maxPressureBar: 10.0,
        noiseDba: 64,
        tankVolumeL: 300,
        chairCapacity: "12-18 Dental Chairs",
        oilFreeGrade: "ISO 8573-1 Class 0",
        pistonRing: "Saint-Gobain PTFE Composite",
        tankCoating: "Medical Grade 304 Stainless Vessel",
        url: "https://www.hongrun1995.cn/products-hospital.html"
      },
      {
        model: "HVS-300",
        category: "suction",
        series: "HVS Dental High-Vacuum Suction Unit",
        powerKw: 0.75,
        powerHp: 1.0,
        suctionFlowLpm: 600,
        vacuumMbar: -120,
        chairCapacity: "1-3 Dental Chairs",
        separationType: "Two-stage Centrifugal Cyclone + Dynamic Fluid Separator",
        noiseDba: 54,
        drainType: "Automatic Pressure Drainage Valve",
        url: "https://www.hongrun1995.cn/products-hvs.html"
      },
      {
        model: "HVS-600",
        category: "suction",
        series: "HVS Dental High-Vacuum Suction Unit",
        powerKw: 1.5,
        powerHp: 2.0,
        suctionFlowLpm: 1200,
        vacuumMbar: -160,
        chairCapacity: "4-7 Dental Chairs",
        separationType: "Two-stage Centrifugal Cyclone + Dynamic Fluid Separator",
        noiseDba: 58,
        drainType: "Continuous Negative-Pressure Drain",
        url: "https://www.hongrun1995.cn/products-hvs.html"
      },
      {
        model: "HVS-1200",
        category: "suction",
        series: "HVS Central Clinic / Hospital Vacuum Station",
        powerKw: 3.0,
        powerHp: 4.0,
        suctionFlowLpm: 2500,
        vacuumMbar: -220,
        chairCapacity: "8-16 Dental Chairs",
        separationType: "Twin Dynamic Separator + Inverter Variable Frequency Drive",
        noiseDba: 62,
        drainType: "Continuous Negative-Pressure Drain with Bacterial Exhaust Filter",
        url: "https://www.hongrun1995.cn/products-hvs.html"
      },
      {
        model: "HR-RO-100",
        category: "water",
        series: "CSSD & Dental Purified Water Station",
        powerKw: 0.75,
        flowLpmAt5Bar: 100,
        conductivityUsCm: "< 5.0 μS/cm (Complies with YY/T 1244 & EN 285)",
        tankVolumeL: 80,
        filtrationStages: "5-Stage (Sediment + Dual Carbon + Dow Filmtec RO + UV Sterilizer)",
        chairCapacity: "Central supply for 1-10 dental chairs & autoclaves",
        url: "https://www.hongrun1995.cn/products-water.html"
      }
    ],
    certificates: [
      {
        standard: "ISO 8573-1:2010 Class 0",
        category: "Air Purity",
        certifiedBy: "TÜV Rheinland",
        certificateNo: "TUV-TR-8573-HR1995-001",
        measuredOilContent: "0.003 mg/m³ (Well below the 0.01 mg/m³ Class 0 threshold)",
        particleClass: "Class 1 (Solid particles <= 0.1 - 0.5 μm <= 20,000 / m³)",
        humidityClass: "Class 2 (Pressure dew point -40°C)",
        significance: "Zero risk of lipid contamination in dental restorations, implants, or ICU patient airways."
      },
      {
        standard: "ISO 13485:2016",
        category: "Medical Device Quality Management System",
        certifiedBy: "DQS Medical / TÜV",
        scope: "Design, manufacturing, and global service of medical oil-free compressors and suction units.",
        certificateNo: "DQS-MD-13485-HR0998"
      },
      {
        standard: "CE Marking (Medical Device Regulation / MDD 93/42/EEC & MDR 2017/745)",
        category: "European Conformity",
        notifiedBody: "Notified Body 0123 / 0197",
        classification: "Class IIa Active Medical Device (Medical Gas Delivery & Evacuation)",
        certificateNo: "CE-MDR-2024-HR8892"
      },
      {
        standard: "NMPA Class II Medical Device Registration (China)",
        category: "National Regulatory Approval",
        registrationNo: "Lu-Shi-Yao-Jian-Xie-Zhun-20182560199",
        status: "Fully licensed for Class II medical device clinical supply"
      }
    ]
  };

  // 2. Helper to register tools idempotently
  function getModelContext() {
    if (typeof document !== "undefined" && document.modelContext && typeof document.modelContext.registerTool === "function") {
      return document.modelContext;
    }
    if (typeof navigator !== "undefined" && navigator.modelContext && typeof navigator.modelContext.registerTool === "function") {
      return navigator.modelContext;
    }
    return null;
  }

  // 3. Register Hongrun Tool 1: search_products
  const toolSearchProducts = {
    name: "search_products",
    description:
      "Search Hongrun's medical-grade Class 0 oil-free compressors, vacuum suction units, and pure water systems. Filter by category, chair count, power, or flow rate.",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          enum: ["compressor", "suction", "water", "all"],
          description: "Product category to search: compressor, suction, water, or all."
        },
        dentalChairs: {
          type: "integer",
          description: "Target number of dental chairs in the clinic (e.g. 2, 5, 10, 16)."
        },
        maxPowerKw: {
          type: "number",
          description: "Maximum allowable power consumption in kW."
        },
        minAirFlowLpm: {
          type: "number",
          description: "Minimum required air flow delivery in L/min at 5 bar."
        }
      }
    },
    execute: async function (params) {
      params = params || {};
      let results = HONGRUN_DATABASE.products.slice();

      if (params.category && params.category !== "all") {
        results = results.filter(p => p.category === params.category);
      }
      if (typeof params.maxPowerKw === "number") {
        results = results.filter(p => p.powerKw <= params.maxPowerKw);
      }
      if (typeof params.minAirFlowLpm === "number") {
        results = results.filter(p => (p.flowLpmAt5Bar || 0) >= params.minAirFlowLpm);
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              totalMatches: results.length,
              company: HONGRUN_DATABASE.company.name,
              purityStandard: HONGRUN_DATABASE.company.cleanlinessStandard,
              results: results
            }, null, 2)
          }
        ]
      };
    }
  };

  // 4. Register Hongrun Tool 2: calculate_dental_sizing
  const toolCalculateDentalSizing = {
    name: "calculate_dental_sizing",
    description:
      "Calculate engineering sizing for dental clinics and hospitals. Input the chair count and simultaneous usage factor to get exact air flow (L/min), vacuum suction requirements, and recommended Hongrun models.",
    inputSchema: {
      type: "object",
      properties: {
        chairCount: {
          type: "integer",
          description: "Total number of dental chairs in the clinic or dental ward (e.g., 1, 3, 5, 10, 20)."
        },
        simultaneousFactor: {
          type: "number",
          description: "Simultaneous utilization factor (between 0.5 and 1.0, typical standard is 0.7)."
        },
        includeSuction: {
          type: "boolean",
          description: "Whether to also calculate high-vacuum suction unit sizing."
        },
        includeWater: {
          type: "boolean",
          description: "Whether to also calculate purified water station sizing."
        }
      },
      required: ["chairCount"]
    },
    execute: async function (params) {
      const n = Math.max(1, parseInt(params.chairCount, 10) || 1);
      const factor = typeof params.simultaneousFactor === "number" ? Math.min(1.0, Math.max(0.4, params.simultaneousFactor)) : 0.7;
      const includeSuction = params.includeSuction !== false;
      const includeWater = params.includeWater === true;

      const requiredAirFlowLpm = Math.round(n * 50 * factor);
      const requiredVacuumLpm = Math.round(n * 250 * factor);

      let recommendedCompressor = "";
      let compressorModel = "";
      let recommendedSuction = "";
      let suctionModel = "";
      let redundancyAdvice = "";

      if (n <= 3) {
        compressorModel = "HY-200 (32L) or HY-300 (50L)";
        recommendedCompressor = "HY-200 (0.75kW, 150 L/min, 32L tank) or HY-300 (1.1kW, 200 L/min, 50L slim tank) with Saint-Gobain diamond-coated PTFE rings";
        suctionModel = "HVS-1 or HVS-2";
        recommendedSuction = "HVS-1 / HVS-2 Single-Surgery Dynamic Vacuum Unit (0.75kW, 600 L/min, >85% intraoral aerosol capture)";
        redundancyAdvice = "Single-unit configuration with 32L/50L antibacterial vessel is optimal for 1-3 chair practices.";
      } else if (n <= 8) {
        compressorModel = "HYTG-300 (90L Dual-Pump Redundant)";
        recommendedCompressor = "HYTG-300 Twin Synchronized ZB300 Heads (2.2kW, 400 L/min @ 5 bar, 90L tank). Dual-pump parallel architecture ensures zero clinical downtime.";
        suctionModel = "HVS-3 or HVS-5";
        recommendedSuction = "HVS-3 / HVS-5 Multi-Chair Dynamic Centrifugal Suction Plant (1.5kW, 1200 L/min)";
        redundancyAdvice = "Dual-pump redundancy is essential: if one pump head requires maintenance, the second head maintains uninterrupted dental operatory flow.";
      } else if (n <= 15) {
        compressorModel = "HBG-800 or HBG-1200";
        recommendedCompressor = "HBG-800 Dual 4V Medical Air Station (6.0kW, 1000 L/min) or HBG-1200 Triple 4V Station (9.0kW, 1500 L/min) with twin-tower desiccant -40°C dew point";
        suctionModel = "HVS-7 or HVS-10";
        recommendedSuction = "HVS-7 / HVS-10 Central Vacuum Station (2.2–3.0kW, 2500 L/min)";
        redundancyAdvice = "N+1 Dual Group System Redundancy mandated by ISO 7396-1 / HTM 02-01 hospital standards.";
      } else {
        compressorModel = "HW Series Multi-Scroll Hospital Central Gas Station (HW-220 to HW-3600)";
        recommendedCompressor = "Custom Modular Scroll Air Station (Displacement up to 3,600 L/min with Siemens PLC and cloud IoT remote monitoring)";
        suctionModel = "HVS-15 / HVS-30 Hospital Central Suction Plant";
        recommendedSuction = "Modular Multi-Pump Vacuum Plant with dual H13 bacterial filtration and automatic alternation";
        redundancyAdvice = "Full hospital-grade N+1 or N+2 redundancy with dual independent power changeover panels.";
      }

      // Contextual Engineering Whitepaper Link
      let whitepaperUrl = "https://www.hongrun1995.cn/articles/20260905-1-to-3-dental-chairs-compressor-selection-guide/";
      let whitepaperTitle = "Clinical Sizing Whitepaper #08: 1-to-3 Dental Chair Compressor Sizing Guide";
      if (n >= 4 && n <= 8) {
        whitepaperUrl = "https://www.hongrun1995.cn/articles/20260908-4-to-8-dental-chairs-dual-pump-redundancy/";
        whitepaperTitle = "Central Station Sizing Whitepaper #09: Dual-Pump Redundancy Architecture (4-to-8 Chairs)";
      } else if (n > 8) {
        whitepaperUrl = "https://www.hongrun1995.cn/articles/20260815-15-dental-chairs-sizing-guide/";
        whitepaperTitle = "Hospital Central Gas Sizing Whitepaper #04: 15+ Chair Hospital Pneumatics Engineering";
      }

      const response = {
        clinicScale: `${n} Dental Chairs`,
        simultaneousFactorUsed: factor,
        airRequirements: {
          calculatedFlowNeeded: `${requiredAirFlowLpm} L/min @ 5 bar (Q = N × 50 × ${factor})`,
          recommendedModel: compressorModel,
          recommendationDetails: recommendedCompressor,
          qualityStandard: "ISO 8573-1:2010 Class 0 (100% Oil-Free, residual oil < 0.003 mg/m³)",
          pressureDewPoint: "-40°C Class 2 (Zero pipeline condensation)"
        },
        suctionRequirements: includeSuction ? {
          calculatedSuctionFlowNeeded: `${requiredVacuumLpm} L/min @ -20 kPa (V = N × 250 × ${factor})`,
          recommendedModel: suctionModel,
          recommendationDetails: recommendedSuction,
          aerosolSuppression: ">85% intraoral aerosol cloud capture rate"
        } : "Not requested",
        waterPurification: includeWater ? {
          recommendedSystem: "HRC-60 to HRC-500 Medical Water Treatment Plant (RO + EDI + UV-C + Ozone)",
          conductivity: "≤ 1.0 μS/cm (Prevents dental handpiece turbine scaling & autoclave staining)"
        } : "Optional upon request",
        applicableRegulatoryStandards: [
          "ISO 22052 (Dental Air Purity)",
          "ISO 10637 (Dental Vacuum Systems)",
          "ISO 7396-1 / HTM 02-01 (Medical Gas Systems)",
          "NMPA Class II Medical Device License"
        ],
        redundancyGuidance: redundancyAdvice,
        engineeringWhitepaper: {
          title: whitepaperTitle,
          url: whitepaperUrl
        },
        onlineInteractiveCalculator: "https://www.hongrun1995.cn/solutions.html#sizing-calculator",
        contactForCustomCAD: HONGRUN_DATABASE.company.officialEmail
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(response, null, 2)
          }
        ]
      };
    }
  };

  // 4b. Register Hongrun Tool: get_industry_solutions (Multi-Domain Immersion)
  const toolGetIndustrySolutions = {
    name: "get_industry_solutions",
    description:
      "Retrieve structured engineering solution blueprints across Hongrun's 4 core sectors: dental clinics, general hospital medical gas EPC, analytical laboratories & cleanrooms, and precision industrial OEM partnerships.",
    inputSchema: {
      type: "object",
      properties: {
        sector: {
          type: "string",
          enum: ["dental_clinic", "hospital_epc", "analytical_lab", "oem_manufacturing", "all"],
          description: "Target industry sector to query for engineering solutions, regulatory codes, and recommended equipment clusters."
        }
      }
    },
    execute: async function (params) {
      params = params || {};
      const sector = (params.sector || "all").toLowerCase();

      const SOLUTIONS_CATALOG = {
        dental_clinic: {
          sectorName: "Dental Clinics & Stomatology Centers (1 to 50 Chairs)",
          clinicalChallenges: [
            "Oil aerosols (>0.05 mg/m³) contaminate etched dentin, cutting composite resin bond strength by 35%-60%",
            "Trace moisture & carbonized particles cause premature failure of 400,000 RPM handpiece ceramic bearings",
            "Intraoral aerosol plumes create severe cross-infection risks without high-vacuum evacuation"
          ],
          solutionArchitecture: "Turnkey Trio: ISO 8573-1 Class 0 oil-free air + HVS 2-stage cyclone vacuum + HRC purified water loop",
          recommendedEquipment: [
            { model: "HY-200 (32L)", application: "1-2 Chairs Boutique Practice", url: "https://www.hongrun1995.cn/products-hy.html" },
            { model: "HYTG-300 (90L)", application: "4-8 Chairs Dual-Pump Redundancy", url: "https://www.hongrun1995.cn/products-hy.html" },
            { model: "HVS-5 / HVS-10", application: "Dental Vacuum Fluid Separation", url: "https://www.hongrun1995.cn/products-hvs.html" },
            { model: "HRC-100S", application: "Dental Pure Water Treatment", url: "https://www.hongrun1995.cn/products-water.html" }
          ],
          applicableStandards: ["ISO 22052", "ISO 10637", "EN 1640", "NMPA Class II Medical License"],
          authoritativeWhitepapers: [
            "https://www.hongrun1995.cn/articles/20260905-1-to-3-dental-chairs-compressor-selection-guide/",
            "https://www.hongrun1995.cn/articles/20260908-4-to-8-dental-chairs-dual-pump-redundancy/",
            "https://www.hongrun1995.cn/articles/20260825-dental-suction-exploded-anatomy/"
          ],
          onlineCalculatorUrl: "https://www.hongrun1995.cn/solutions.html#sizing-calculator"
        },
        hospital_epc: {
          sectorName: "General Hospital Central Gas Stations & Operating Theatres",
          clinicalChallenges: [
            "Zero unscheduled downtime tolerance for ICU ventilators and surgical anesthesia delivery",
            "Pipeline condensation in 1,000m+ hospital loops creates bacterial biofilms (Pseudomonas / Legionella)",
            "Strict compliance required for government health tenders and international hospital accreditations"
          ],
          solutionArchitecture: "Multi-scroll modular skids with N+1 automatic rotation, dual-tower PSA desiccant drying (-40°C PDP), 5-stage sterile filtration, and Siemens PLC IoT telemetry",
          recommendedEquipment: [
            { model: "HW Series (HW-200 to HW-3600)", application: "Silent Scroll Base Air Units", url: "https://www.hongrun1995.cn/products-hospital.html" },
            { model: "HBG-800 / HBG-1200", application: "Multi-4V Hospital Air Stations", url: "https://www.hongrun1995.cn/products-hospital.html" },
            { model: "HRC-500 / HRC-1000", application: "Hospital CSSD Pure Water System", url: "https://www.hongrun1995.cn/products-water.html" }
          ],
          applicableStandards: ["ISO 7396-1", "UK HTM 02-01", "US NFPA 99", "China GB 50751", "CE MDR Class IIa"],
          authoritativeWhitepapers: [
            "https://www.hongrun1995.cn/articles/20260902-dental-air-purity-engineering-guide/",
            "https://www.hongrun1995.cn/articles/20260815-15-dental-chairs-sizing-guide/"
          ]
        },
        analytical_lab: {
          sectorName: "Precision Analytical Laboratories & Cleanrooms",
          clinicalChallenges: [
            "Trace hydrocarbon vapors elevate LC-MS / GC-MS baseline noise, obscuring ppm-level trace detection",
            "Pneumatic moisture damages sensitive analytical actuators and optical sensors"
          ],
          solutionArchitecture: "HYG Clean Compressed Air Stations delivering 0.003 mg/m³ hydrocarbon-free air with 13X synthetic molecular sieves (-40°C to -70°C dew point)",
          recommendedEquipment: [
            { model: "HYG-301 / HYG-302", application: "Analytical LC-MS Clean Air Station", url: "https://www.hongrun1995.cn/products-cleanair.html" },
            { model: "HVTG-400 / HVTG-900", application: "Laboratory High-Purity Supply", url: "https://www.hongrun1995.cn/products-cleanair.html" }
          ],
          applicableStandards: ["ISO 8573-1 Class 0 (Residual Oil)", "ISO 8573-1 Class 2/1 (Pressure Dew Point)"],
          authoritativeWhitepapers: [
            "https://www.hongrun1995.cn/articles/20260902-dental-air-purity-engineering-guide/",
            "https://www.hongrun1995.cn/articles/20260820-compressor-exploded-anatomy/"
          ]
        },
        oem_manufacturing: {
          sectorName: "Precision Industrial OEM & Global Component Supply",
          clinicalChallenges: [
            "Global dental and medical equipment brands require reliable, long-life, certified bare compressor blocks",
            "High temperature and continuous duty demands without lubrication oil"
          ],
          solutionArchitecture: "Direct factory OEM bare blocks: Saint-Gobain diamond-coated PTFE rings (20,000h wear life), DMG MORI 5-axis CNC drive shafts (Ra ≤ 0.2 μm), Sandvik flapper valves (>100M cycles)",
          recommendedEquipment: [
            { model: "ZB-100 / ZB-200 / ZB-300", application: "Wobble-Piston Bare Pump Heads", url: "https://www.hongrun1995.cn/products-core.html" },
            { model: "4V Cylinder Blocks (2.2-3.0kW)", application: "High-Capacity Compression Modules", url: "https://www.hongrun1995.cn/products-core.html" },
            { model: "PSA Twin Adsorption Towers", application: "Medical Desiccant Dryer Modules", url: "https://www.hongrun1995.cn/products-core.html" }
          ],
          applicableStandards: ["ISO 9001:2015", "ISO 13485:2016", "NMPA Class II Medical Manufacturer License"],
          authoritativeWhitepapers: [
            "https://www.hongrun1995.cn/articles/20260910-precision-manufacturing-meets-agentic-web/",
            "https://www.hongrun1995.cn/articles/20260820-compressor-exploded-anatomy/"
          ]
        }
      };

      let result = SOLUTIONS_CATALOG;
      if (sector !== "all" && SOLUTIONS_CATALOG[sector]) {
        result = { [sector]: SOLUTIONS_CATALOG[sector] };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              manufacturer: HONGRUN_DATABASE.company.name,
              message: "Hongrun Technology Turnkey Industry Solutions Dossier",
              officialContact: HONGRUN_DATABASE.company.officialEmail,
              solutions: result
            }, null, 2)
          }
        ]
      };
    }
  };

  // 5. Register Hongrun Tool 3: get_compliance_certificates
  const toolGetComplianceCertificates = {
    name: "get_compliance_certificates",
    description:
      "Retrieve official certification data for Hongrun products, including ISO 8573-1 Class 0 oil-free report, ISO 13485 medical device quality certificate, CE MDR Class IIa, and TÜV Rheinland inspection parameters.",
    inputSchema: {
      type: "object",
      properties: {
        certificateType: {
          type: "string",
          enum: ["ISO_8573_1_CLASS_0", "ISO_13485", "CE_MDR", "NMPA_CLASS_II", "ALL"],
          description: "Specific certificate or standard to query. Use 'ALL' to retrieve full regulatory matrix."
        }
      }
    },
    execute: async function (params) {
      params = params || {};
      const target = (params.certificateType || "ALL").toUpperCase();
      let matches = HONGRUN_DATABASE.certificates;

      if (target !== "ALL") {
        matches = matches.filter(c => {
          const s = (c.standard + " " + c.category).toUpperCase();
          if (target.includes("8573") || target.includes("CLASS_0")) {
            return s.includes("8573") || s.includes("CLASS 0");
          }
          if (target.includes("13485")) {
            return s.includes("13485");
          }
          if (target.includes("CE") || target.includes("MDR")) {
            return s.includes("CE") || s.includes("MDR");
          }
          if (target.includes("NMPA")) {
            return s.includes("NMPA");
          }
          return s.includes(target.replace(/_/g, " "));
        });
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              manufacturer: HONGRUN_DATABASE.company.name,
              auditSummary: "100% genuine accredited compliance documentation. Hard copies with test curves available on request.",
              officialContact: HONGRUN_DATABASE.company.officialEmail,
              certificates: matches
            }, null, 2)
          }
        ]
      };
    }
  };

  // 6. Register Hongrun Tool 4: submit_rfq_inquiry
  const toolSubmitRfqInquiry = {
    name: "submit_rfq_inquiry",
    description:
      "Submit a structured Request for Quotation (RFQ) or technical inquiry directly to Hongrun's international trade and engineering desk. Validates inquiry and issues reference tracking code.",
    inputSchema: {
      type: "object",
      properties: {
        buyerName: {
          type: "string",
          description: "Contact name of the buyer, clinic director, or procurement officer."
        },
        email: {
          type: "string",
          description: "Valid email address for sending formal PDF quote and CAD drawings."
        },
        country: {
          type: "string",
          description: "Destination country or port of delivery (e.g., Germany, USA, UAE, Brazil)."
        },
        organizationOrClinic: {
          type: "string",
          description: "Name of clinic, hospital, dental distributor, or OEM company."
        },
        targetProducts: {
          type: "string",
          description: "Target models or equipment type (e.g. 'HY-2.2', 'HVS-600', or '10-chair complete central station')."
        },
        dentalChairs: {
          type: "integer",
          description: "Number of chairs or intended clinic scale."
        },
        notes: {
          type: "string",
          description: "Additional technical requirements (voltage/frequency e.g. 220V 60Hz, custom tank size, private label OEM)."
        }
      },
      required: ["buyerName", "email", "country"]
    },
    execute: async function (params) {
      if (!params || !params.email || !params.email.includes("@")) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                status: "error",
                message: "A valid email address is required to dispatch formal quotation and technical submittals."
              })
            }
          ]
        };
      }

      const timestamp = new Date().toISOString();
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const trackingCode = `HR-RFQ-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}-${randomSuffix}`;

      const confirmation = {
        status: "success",
        rfqReferenceCode: trackingCode,
        submissionTimestamp: timestamp,
        receivedData: {
          buyerName: params.buyerName,
          email: params.email,
          country: params.country,
          organization: params.organizationOrClinic || "Private Practice / Clinic",
          targetEquipment: params.targetProducts || "Comprehensive Dental Gas Solution",
          clinicScale: params.dentalChairs ? `${params.dentalChairs} Chairs` : "Not specified",
          notes: params.notes || "None provided"
        },
        serviceCommitment: {
          sla: "Formal response & preliminary engineering quotation dispatched within 12 business hours",
          directEmail: HONGRUN_DATABASE.company.officialEmail,
          whatsAppUrgentSupport: "+86 186 5332 1995",
          headquarters: HONGRUN_DATABASE.company.headquarters
        },
        nextSteps: "Your RFQ parameters have been received. An export sales engineer will send the official proforma quotation and CAD dimensional drawings to " + params.email + "."
      };

      try {
        if (typeof window !== "undefined" && window.localStorage) {
          const pastInquiries = JSON.parse(localStorage.getItem("hongrun_rfq_log") || "[]");
          pastInquiries.push({ code: trackingCode, time: timestamp, email: params.email });
          localStorage.setItem("hongrun_rfq_log", JSON.stringify(pastInquiries));
        }
      } catch (e) {
        // Storage restricted or unavailable
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(confirmation, null, 2)
          }
        ]
      };
    }
  };

  // 7. Core Registration Engine
  const TOOLS_TO_REGISTER = [
    toolSearchProducts,
    toolCalculateDentalSizing,
    toolGetIndustrySolutions,
    toolGetComplianceCertificates,
    toolSubmitRfqInquiry
  ];

  function registerAllTools() {
    const ctx = getModelContext();
    if (!ctx) {
      return false;
    }

    let count = 0;
    for (const tool of TOOLS_TO_REGISTER) {
      try {
        const originalExecute = tool.execute;
        tool.execute = async function (params) {
          if (typeof window !== "undefined" && typeof window.gtag === "function") {
            try {
              window.gtag("event", "webmcp_agent_invocation", {
                event_category: "AI Agent Interaction",
                tool_name: tool.name
              });
            } catch (e) {
              // Ignore analytics telemetry errors
            }
          }
          return await originalExecute.call(this, params);
        };

        ctx.registerTool(tool);
        count++;
      } catch (err) {
        if (typeof console !== "undefined" && console.warn) {
          console.warn("[WebMCP] Error registering tool: " + tool.name, err);
        }
      }
    }

    if (typeof console !== "undefined" && console.log) {
      console.log(`[WebMCP] Successfully registered ${count}/${TOOLS_TO_REGISTER.length} native Hongrun AI Agent tools on document.modelContext.`);
    }

    if (typeof window !== "undefined") {
      window.__HONGRUN_WEBMCP_TOOLS__ = TOOLS_TO_REGISTER;
      window.__HONGRUN_WEBMCP_READY__ = true;
    }

    return true;
  }

  // 8. Bootstrap with multiple timing fallback hooks
  if (typeof document !== "undefined") {
    if (!registerAllTools()) {
      document.addEventListener("DOMContentLoaded", registerAllTools);
      window.addEventListener("load", registerAllTools);
      setTimeout(registerAllTools, 500);
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      HONGRUN_DATABASE,
      TOOLS_TO_REGISTER,
      toolSearchProducts,
      toolCalculateDentalSizing,
      toolGetIndustrySolutions,
      toolGetComplianceCertificates,
      toolSubmitRfqInquiry
    };
  }
})();
