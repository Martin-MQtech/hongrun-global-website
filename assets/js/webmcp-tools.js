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
      cleanlinessStandard: "ISO 8573-1 total-oil Class 0 for certified complete HW-200 through HW-3600 scroll units; other families use oil-free designs with model-specific documentation",
      measuredTotalOil: "<0.003 mg/m³ in TÜV report CN21HFR2 001 for certified complete HW-200 through HW-3600 scroll units (ISO Class 0 total-oil limit is 0.01 mg/m³)",
      measuredDewPoint: "Model- and configuration-specific; verify pressure dew point from the supplied documentation",
      officialEmail: "info@hongrun1995.cn",
      salesEmail: "martinchen@hongrun1995.cn",
      officialWebsite: "https://www.hongrun1995.cn"
    },
    products: [
      {
        model: "HY-100",
        category: "compressor",
        series: "HY Silent Point-of-Use Dental Series",
        powerKw: 0.55,
        powerHp: 0.75,
        flowLpmAt5Bar: 100,
        flowCfm: 3.53,
        maxPressureBar: 8.0,
        noiseDba: 52,
        tankVolumeL: 24,
        chairCapacity: "1 Dental Chair",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        pistonRing: "Saint-Gobain self-lubricating PTFE composite; service life depends on model, load, temperature, air quality and maintenance",
        tankCoating: "Model-specific receiver protection, drainage and maintenance",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HY-200",
        category: "compressor",
        series: "HY Silent Cabinet Dental Series",
        powerKw: 0.75,
        powerHp: 1.0,
        flowLpmAt5Bar: 150,
        flowCfm: 5.30,
        maxPressureBar: 8.0,
        noiseDba: 54,
        tankVolumeL: 38,
        chairCapacity: "1-2 Dental Chairs",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        pistonRing: "Saint-Gobain self-lubricating PTFE composite; service life depends on model, load, temperature, air quality and maintenance",
        tankCoating: "Model-specific receiver protection, drainage and maintenance",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HY-300",
        category: "compressor",
        series: "HY Silent Cabinet Dental Series",
        powerKw: 1.1,
        powerHp: 1.5,
        flowLpmAt5Bar: 200,
        flowCfm: 7.06,
        maxPressureBar: 8.0,
        noiseDba: 56,
        tankVolumeL: 50,
        chairCapacity: "2-3 Dental Chairs",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        pistonRing: "Saint-Gobain self-lubricating PTFE composite; service life depends on model, load, temperature, air quality and maintenance",
        tankCoating: "Model-specific receiver protection, drainage and maintenance",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HYT-200",
        category: "compressor",
        series: "HYT Dual-Pump Redundant Dental Series",
        powerKw: 1.5,
        powerHp: 2.0,
        flowLpmAt5Bar: 300,
        flowCfm: 10.59,
        maxPressureBar: 8.0,
        noiseDba: 58,
        tankVolumeL: 60,
        chairCapacity: "2-4 Dental Chairs",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        pistonRing: "Saint-Gobain self-lubricating PTFE composite; service life depends on model, load, temperature, air quality and maintenance",
        tankCoating: "Model-specific receiver protection, drainage and maintenance",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HYTG-300",
        category: "compressor",
        series: "HYTG Dual-Pump Redundant Series with Built-in Dryer",
        powerKw: 2.2,
        powerHp: 3.0,
        flowLpmAt5Bar: 400,
        flowCfm: 14.13,
        maxPressureBar: 8.0,
        noiseDba: 60,
        tankVolumeL: 90,
        chairCapacity: "3-5 Dental Chairs",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        pistonRing: "Saint-Gobain self-lubricating PTFE composite; service life depends on model, load, temperature, air quality and maintenance",
        tankCoating: "Model-specific receiver protection, drainage and maintenance",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HYT-400",
        category: "compressor",
        series: "HYT Multi-Head Clinic Central Series",
        powerKw: 3.3,
        powerHp: 4.5,
        flowLpmAt5Bar: 600,
        flowCfm: 21.19,
        maxPressureBar: 8.0,
        noiseDba: 62,
        tankVolumeL: 120,
        chairCapacity: "6-8 Dental Chairs",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        pistonRing: "Saint-Gobain self-lubricating PTFE composite; service life depends on model, load, temperature, air quality and maintenance",
        tankCoating: "Model-specific receiver protection, drainage and maintenance",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HY-400",
        category: "compressor",
        series: "HY Three-Head Clinic Central Series",
        powerKw: 2.25,
        flowLpmAt5Bar: 450,
        maxPressureBar: 8.0,
        tankVolumeL: 90,
        pistonHeads: "ZB200 × 3",
        voltage: "220V",
        dimensionsMm: "860 × 420 × 730",
        weightKg: 84,
        chairCapacity: "5-6 Dental Chairs (preliminary)",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HYT-500",
        category: "compressor",
        series: "HYT Quad-Head Clinic Central Series",
        powerKw: 4.4,
        flowLpmAt5Bar: 800,
        maxPressureBar: 8.0,
        tankVolumeL: 200,
        pistonHeads: "ZB300 × 4",
        voltage: "380V",
        dimensionsMm: "1700 × 410 × 825",
        weightKg: 142.5,
        chairCapacity: "9-10 Dental Chairs (preliminary)",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HY-500",
        category: "compressor",
        series: "HY Quad-Head Clinic Central Series",
        powerKw: 3.0,
        flowLpmAt5Bar: 600,
        maxPressureBar: 8.0,
        tankVolumeL: 120,
        pistonHeads: "ZB200 × 4",
        voltage: "380V",
        dimensionsMm: "1080 × 440 × 740",
        weightKg: 89,
        chairCapacity: "6-8 Dental Chairs (preliminary)",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "HYG-1000",
        category: "compressor",
        series: "HYG Five-Head Integrated Clean Air Station",
        powerKw: 5.5,
        flowLpmAt5Bar: 1000,
        maxPressureBar: 8.0,
        tankVolumeL: 200,
        pistonHeads: "ZB300 × 5",
        voltage: "380V",
        dimensionsMm: "1700 × 410 × 825",
        weightKg: 178,
        chairCapacity: "10+ Dental Chairs (engineering review)",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        url: "https://www.hongrun1995.cn/products-hy.html"
      },
      {
        model: "ZB-200",
        category: "compressor",
        series: "ZB Wobble-Piston Bare Pump Head (OEM/ODM)",
        powerKw: 0.75,
        powerHp: 1.0,
        flowLpmAt5Bar: 105,
        flowCfm: 3.71,
        maxPressureBar: 8.0,
        tankVolumeL: 0,
        chairCapacity: "Complete assembly sizing required",
        oilFreeGrade: "Bare pump head; the TÜV Class 0 certificate does not cover bare ZB components. Complete-system air quality requires model-specific testing.",
        pistonRing: "Saint-Gobain self-lubricating PTFE compound; service life depends on model, load, temperature, air quality and maintenance",
        tankCoating: "N/A (Bare Head)",
        url: "https://www.hongrun1995.cn/products-core.html"
      },
      {
        model: "HBG-800",
        category: "compressor",
        series: "HBG Medical Central Air Station (Multi-4V Redundant)",
        powerKw: 6.0,
        powerHp: 8.0,
        flowLpmAt5Bar: 1000,
        flowCfm: 35.31,
        maxPressureBar: 8.0,
        noiseDba: 64,
        tankVolumeL: 150,
        chairCapacity: "10-18 Dental Chairs / Hospital Gas Pipeline",
        oilFreeGrade: "Oil-free design; model-specific documentation required. TÜV Class 0 certificate scope is complete HW-200 through HW-3600 scroll units only.",
        pistonRing: "Saint-Gobain self-lubricating PTFE composite; service life depends on model, load, temperature, air quality and maintenance",
        tankCoating: "Model-specific receiver and dryer configuration; verify pressure dew point for the supplied system",
        url: "https://www.hongrun1995.cn/products-hospital.html"
      },
      {
        model: "HW-400",
        category: "compressor",
        series: "HW Medical Scroll Air Compressor Station",
        powerKw: 4.0,
        powerHp: 5.5,
        flowLpmAt5Bar: 400,
        flowCfm: 14.13,
        maxPressureBar: 8.0,
        noiseDba: 59,
        tankVolumeL: 200,
        chairCapacity: "Hospital / ICU project sizing required",
        oilFreeGrade: "TÜV total-oil Class 0 evidence for certified complete HW-200 through HW-3600 units; verify the supplied configuration and duty rating",
        pistonRing: "Contactless High-Precision Scroll Orbit",
        tankCoating: "Medical Grade 304 Stainless Steel Vessel",
        url: "https://www.hongrun1995.cn/products-hospital.html"
      },
      {
        model: "HVS-1",
        category: "suction",
        series: "HVS Dental Dynamic High-Vacuum Suction Unit",
        powerKw: 0.75,
        powerHp: 1.0,
        suctionFlowLpm: 300,
        vacuumMbar: -120,
        chairCapacity: "1 Dental Chair",
        separationType: "Two-stage Centrifugal Cyclone + Dynamic Fluid Separator",
        noiseDba: 68,
        drainType: "Automatic Pressure Drainage Valve",
        url: "https://www.hongrun1995.cn/products-hvs.html"
      },
      {
        model: "HVS-3",
        category: "suction",
        series: "HVS Dental Dynamic High-Vacuum Suction Unit",
        powerKw: 1.5,
        powerHp: 2.0,
        suctionFlowLpm: 1200,
        vacuumMbar: -160,
        chairCapacity: "2-3 Dental Chairs",
        separationType: "Two-stage Centrifugal Cyclone + Dynamic Fluid Separator",
        noiseDba: 69,
        drainType: "Continuous Dynamic Negative-Pressure Drain",
        url: "https://www.hongrun1995.cn/products-hvs.html"
      },
      {
        model: "HVS-5",
        category: "suction",
        series: "HVS Multi-Surgery High-Vacuum Suction Plant",
        powerKw: 1.9,
        powerHp: 2.5,
        suctionFlowLpm: 1800,
        vacuumMbar: -180,
        chairCapacity: "4-5 Dental Chairs",
        separationType: "Dual dynamic fluid separation; exhaust filtration is configuration-specific",
        noiseDba: 76,
        drainType: "Continuous Automated Drainage",
        url: "https://www.hongrun1995.cn/products-hvs.html"
      },
      {
        model: "HVS-10",
        category: "suction",
        series: "HVS Central Clinic / Hospital Vacuum Station",
        powerKw: 3.3,
        powerHp: 4.5,
        suctionFlowLpm: 3600,
        vacuumMbar: -220,
        chairCapacity: "8-10 Dental Chairs",
        separationType: "Dual Dynamic Separator + Inverter Variable Frequency Drive",
        noiseDba: 76,
        drainType: "Continuous automated drain; verify model-specific exhaust filtration",
        url: "https://www.hongrun1995.cn/products-hvs.html"
      },
      {
        model: "HRC-100S",
        category: "water",
        series: "CSSD & Dental Purified Water Treatment System",
        powerKw: 0.75,
        flowLpmAt5Bar: 100,
        conductivityUsCm: "Model-specific output target; validate against intended use and applicable water-quality requirements",
        tankVolumeL: 80,
        filtrationStages: "Configuration-specific sediment, carbon, RO, EDI and UV treatment stages",
        chairCapacity: "Central supply for 1-10 dental chairs & autoclaves",
        url: "https://www.hongrun1995.cn/products-water.html"
      }
    ],
    certificates: [
      {
        standard: "ISO 8573-1:2010 Class 0",
        category: "Air Purity",
        certifiedBy: "TÜV Rheinland LGA Products GmbH",
        certificateNo: "AK 50528335 0001 (Report CN21HFR2 001)",
        scope: "Complete Oil-Free Scroll Air Compressor Units (HW-200 to HW-3600), total oil purity Class 0 (Tested acc. ISO 8573-2:2018 & ISO 8573-5:2001)",
        holder: "Hongrun Compressor Technology Co., Ltd. (Direct Holder)",
        measuredOilContent: "<0.003 mg/m³ (Well below the 0.01 mg/m³ Class 0 threshold)",
        significance: "Documents total-oil purity within the certified complete-HW scope; installation validation and model-specific documentation remain required."
      },
      {
        standard: "ISO 13485:2016 / GB/T 42061-2022",
        category: "Medical Device Quality Management System",
        certifiedBy: "Shanghai POSI Certification Co., Ltd. (ANAB & IAF Accredited)",
        scope: "Development, production, and sales of dental electric oil-free air compressors, dental/oral electric suction systems, medical oil-free air compressors (sets), medical air-cooled oil-free air compressors, adsorption compressed air dryers, and medical ozone disinfectors.",
        certificateNo: "381210185R1M",
        validUntil: "2027-11-25",
        significance: "Premier international medical device quality standard audited under ANAB & IAF recognition."
      },
      {
        standard: "ISO 9001:2015",
        category: "Quality Management System",
        certifiedBy: "Shandong Guojian Certification Inspection Co., Ltd. (CNAS C169-M)",
        scope: "Design, development, production, and sales of medical oil-free air compressors and medical dental electric suction units.",
        certificateNo: "174Q240351R1M",
        validUntil: "2027-07-17"
      },
      {
        standard: "EU MDR (2017/745) Voluntary Verification of Conformity (VoC)",
        category: "European Medical Device Conformity",
        notifiedBody: "ICR Polska Sp. z o.o.",
        classification: "Medical Oil-Free Air Compressors & Dental Suction Units (EN 60601-1, EN ISO 10079-1)",
        certificateNo: "ICR/VC/HTT260619/A1 (Compressors) & ICR/VC/HTT251108 (Suction Units)",
        validUntil: "2031-06-28 / 2030-11-13"
      },
      {
        standard: "NMPA Class II Medical Device Registration (China)",
        category: "National Regulatory Approval",
        registrationNo: "鲁械注准 20182560199",
        status: "Class II registration within the listed device scope; verify the exact supplied model"
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
  function matchesChairCapacity(capacity, target) {
    if (!Number.isInteger(target) || target < 1 || typeof capacity !== "string") return true;
    const text = capacity.replace(/,/g, "");
    if (/sizing required|engineering review|assembly/i.test(text) && !/\d/.test(text)) return true;
    const range = text.match(/(\d+)\s*(?:-|–|to)\s*(\d+)/i);
    if (range) return target >= Number(range[1]) && target <= Number(range[2]);
    const plus = text.match(/(\d+)\s*\+/);
    if (plus) return target >= Number(plus[1]);
    const single = text.match(/(\d+)\s*(?:Dental\s*)?Chairs?/i);
    if (single) return target === Number(single[1]);
    return true;
  }

  const toolSearchProducts = {
    name: "search_products",
    description:
      "Search Hongrun's oil-free medical compressors, vacuum suction units, and pure water systems. Filter by category, chair count, power, or flow. TÜV total-oil Class 0 certification applies only to complete HW-200 through HW-3600 scroll units.",
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
      if (Number.isInteger(params.dentalChairs) && params.dentalChairs >= 1) {
        results = results.filter(p => matchesChairCapacity(p.chairCapacity, params.dentalChairs));
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
      "Calculate preliminary dental air and vacuum demand from chair count and a planning diversity factor, then return candidate catalogue models for engineering validation.",
    inputSchema: {
      type: "object",
      properties: {
        chairCount: {
          type: "integer",
          description: "Total number of dental chairs in the clinic or dental ward (e.g., 1, 3, 5, 10, 20)."
        },
        simultaneousFactor: {
          type: "number",
          description: "Project planning factor (0.4 to 1.0); 0.70 is the default planning assumption, not an ISO or NFPA requirement."
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

      if (n <= 2) {
        compressorModel = "HY-100 (24L) or HY-200 (38L)";
        recommendedCompressor = "HY-100 (0.55kW, 100 L/min, 24L) or HY-200 (0.75kW, 150 L/min, 38L); compare duty cycle, installed footprint, and model-specific documentation";
        suctionModel = "HVS-1 or HVS-3";
        recommendedSuction = "HVS-1 (0.75kW, ≥300 L/min) or HVS-3 (1.5kW, ≥1,200 L/min)";
        redundancyAdvice = "Select from the project calculation and verify the maintenance configuration.";
      } else if (n <= 5) {
        compressorModel = "HY-300 (50L) or HYTG-300 (90L)";
        recommendedCompressor = "HY-300 (1.1kW, 200 L/min, 50L) or HYTG-300 (2.2kW, 400 L/min, 90L, two ZB300 heads)";
        suctionModel = "HVS-3 or HVS-5";
        recommendedSuction = "HVS-3 (1.5kW, ≥1,200 L/min) or HVS-5 (1.9kW, ≥1,800 L/min)";
        redundancyAdvice = "Evaluate multi-head maintenance capacity and project redundancy requirements; do not infer full-flow operation during maintenance.";
      } else if (n <= 8) {
        compressorModel = "HYTG-300 (90L) or HYT-400 (120L) where one-head capacity is required";
        recommendedCompressor = "HYTG-300 provides 400 L/min total and about 200 L/min with one head unavailable; HYT-400 provides 600 L/min total and about 400 L/min with one head unavailable. The default eight-chair planning load is 280 L/min, so HYTG-300 does not cover that load in the one-head-out condition.";
        suctionModel = "HVS-5 or HVS-10";
        recommendedSuction = "HVS-5 (1.9kW, ≥1,800 L/min) or HVS-10 (3.3kW, ≥3,600 L/min)";
        redundancyAdvice = "Validate simultaneous demand, terminal vacuum, pipe losses, controls and remaining capacity; redundancy does not guarantee zero downtime.";
      } else if (n <= 16) {
        compressorModel = "HYT-500 (200L) or engineered central plant";
        recommendedCompressor = "HYT-500 (four 1.1kW ZB300 heads, 800 L/min, 200L) or an engineered HW central plant";
        suctionModel = "HVS-10 or HVS-15";
        recommendedSuction = "HVS-10 (3.3kW, ≥3,600 L/min) or HVS-15 (5.7kW, ≥5,100 L/min)";
        redundancyAdvice = "Engineering must validate system pressure, receiver sizing, redundancy, and model-specific air-quality documentation.";
      } else {
        compressorModel = "Engineered HW Series Hospital Central Gas Station (HW-200 to HW-3600 complete units)";
        recommendedCompressor = "Custom modular scroll plant using complete certified HW units where specified; total-oil Class 0 certificate AK 50528335 0001 applies to the certified HW unit scope";
        suctionModel = "HVS-20 to HVS-50 / engineered central plant";
        recommendedSuction = "Select from HVS-20, HVS-25, HVS-30, HVS-40, or HVS-50 using the validated central vacuum calculation";
        redundancyAdvice = "Design redundancy, controls, exhaust treatment, and power changeover to the project standard; a component certificate alone does not establish plant compliance.";
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
          qualityStandard: "Oil-free design with model-specific test documentation. TÜV ISO 8573-1 total-oil Class 0 certificate AK 50528335 0001 covers complete HW-200 through HW-3600 scroll units only.",
          pressureDewPoint: "Confirm the selected model/configuration; -40°C is a design target where a desiccant dryer is specified."
        },
        suctionRequirements: includeSuction ? {
          calculatedSuctionFlowNeeded: `${requiredVacuumLpm} L/min @ -20 kPa (V = N × 250 × ${factor})`,
          recommendedModel: suctionModel,
          recommendationDetails: recommendedSuction,
          aerosolSuppression: "Project-specific aerosol-control validation required; no fixed capture percentage is assumed"
        } : "Not requested",
        waterPurification: includeWater ? {
          recommendedSystem: "HRC-60, HRC-100S, HRC-300, HRC-500, HRC-1000, or HRC-2000 selected from required water demand",
          conductivity: "Model-specific output conductivity; confirm the selected configuration and applicable water-quality requirement."
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
            "Oil contamination can compromise resin bonding and precision handpiece performance",
            "Moisture and particles can damage pneumatic components and instruments",
            "Intraoral aerosol plumes require project-specific evacuation and infection-control measures"
          ],
          solutionArchitecture: "Turnkey trio: oil-free air with model-specific documentation, HVS cyclone vacuum, and HRC purified-water loop. TÜV total-oil Class 0 certification is limited to complete HW-200 through HW-3600 scroll units.",
          recommendedEquipment: [
            { model: "HY-200 (38L)", application: "1-2 Chairs Boutique Practice", url: "https://www.hongrun1995.cn/products-hy.html" },
            { model: "HYTG-300 (90L)", application: "4-8 chair candidate; about 200 L/min with one head out requires load validation", url: "https://www.hongrun1995.cn/products-hy.html" },
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
          solutionArchitecture: "Project-configured compressor skids with validated N+1/N+2 capacity, model-specific desiccant drying and filtration, and optional monitoring; pressure dew point and microbial control require installation-specific validation.",
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
            "Oil and volatile contaminants can elevate LC-MS / GC-MS baseline noise and interfere with trace detection",
            "Pneumatic moisture can damage sensitive analytical actuators and optical sensors"
          ],
          solutionArchitecture: "HYG clean compressed-air stations with desiccant drying; residual-oil and dew-point performance must be confirmed from the selected model's test documentation.",
          recommendedEquipment: [
            { model: "HYG-301 / HYG-400 / HYG-1000", application: "Analytical clean-air stations", url: "https://www.hongrun1995.cn/products-cleanair.html" },
            { model: "HVTG-900 / HVTG-1200 / HVTG-1600", application: "Laboratory high-volume supply", url: "https://www.hongrun1995.cn/products-cleanair.html" }
          ],
          applicableStandards: ["ISO 8573-1 (project-specific total-oil, particle and moisture classes)"],
          authoritativeWhitepapers: [
            "https://www.hongrun1995.cn/articles/20260902-dental-air-purity-engineering-guide/",
            "https://www.hongrun1995.cn/articles/20260820-compressor-exploded-anatomy/"
          ]
        },
        oem_manufacturing: {
          sectorName: "Precision Industrial OEM & Global Component Supply",
          clinicalChallenges: [
            "Global dental and medical equipment brands require reliable, documented bare compressor blocks",
            "High-temperature and continuous-duty applications require model-specific validation without lubrication oil"
          ],
          solutionArchitecture: "Direct-factory OEM bare blocks using self-lubricating PTFE components and precision CNC manufacturing. Component life depends on model, load, temperature, air quality and maintenance; certification applies to the complete supplied assembly, not to bare components.",
          recommendedEquipment: [
            { model: "ZB-100 / ZB-200 / ZB-300", application: "Wobble-Piston Bare Pump Heads", url: "https://www.hongrun1995.cn/products-core.html" },
            { model: "4V Cylinder Blocks (2.2-3.0kW)", application: "High-Capacity Compression Modules", url: "https://www.hongrun1995.cn/products-core.html" },
            { model: "PSA Twin Adsorption Towers", application: "Medical Desiccant Dryer Modules", url: "https://www.hongrun1995.cn/products-core.html" }
          ],
          applicableStandards: ["ISO 13485:2016", "ISO 9001:2015", "CE MDR (EU 2017/745) within supplied scope", "NMPA Class II registration within supplied device scope"],
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
      "Retrieve official certification data for Hongrun products, including ISO 8573-1 Class 0 oil-free report, ISO 13485:2016 medical device quality certificate, ISO 9001:2015 QMS, CE MDR (EU 2017/745), and TÜV Rheinland inspection parameters.",
    inputSchema: {
      type: "object",
      properties: {
        certificateType: {
          type: "string",
          enum: ["ISO_8573_1_CLASS_0", "ISO_13485", "ISO_9001_QMS", "CE_MDR", "NMPA_CLASS_II", "ALL"],
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
          if (target.includes("9001") || target.includes("QMS")) {
            return s.includes("9001") || s.includes("QUALITY");
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
              auditSummary: "Certification data is provided for scope review; document copies and test curves are supplied after request verification.",
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
          description: "Target models or equipment type (e.g. 'HY-200', 'HYTG-300', 'HVS-5', or '10-chair complete central station')."
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
      const email = typeof params?.email === "string" ? params.email.trim() : "";
      const buyerName = typeof params?.buyerName === "string" ? params.buyerName.trim() : "";
      const country = typeof params?.country === "string" ? params.country.trim() : "";
      const invalid = function(message) {
        return { content: [{ type: "text", text: JSON.stringify({ status: "error", message, retryable: false }, null, 2) }] };
      };
      if (!buyerName || !country || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return invalid("A contact name, country, and valid email address are required.");
      }
      if (params.dentalChairs !== undefined && (!Number.isInteger(params.dentalChairs) || params.dentalChairs < 1 || params.dentalChairs > 1000)) {
        return invalid("dentalChairs must be a whole number between 1 and 1000.");
      }

      const timestamp = new Date().toISOString();
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const trackingCode = `HR-RFQ-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}-${randomSuffix}`;
      const payload = {
        ticket_id: trackingCode,
        buyer_name: buyerName,
        email: email,
        country: country,
        organization: typeof params.organizationOrClinic === "string" ? params.organizationOrClinic.trim() : "Private Practice / Clinic",
        target_products: typeof params.targetProducts === "string" ? params.targetProducts.trim() : "Comprehensive Dental Gas Solution",
        dental_chairs: Number.isInteger(params.dentalChairs) ? params.dentalChairs : "",
        notes: typeof params.notes === "string" ? params.notes.trim() : "",
        submitted_at: timestamp,
        source_page: typeof window !== "undefined" ? window.location.href : "WebMCP",
        lead_source: "webmcp-agent",
        _subject: "WebMCP Engineering RFQ " + trackingCode
      };

      const controller = new AbortController();
      const timeout = setTimeout(function() { controller.abort(); }, 20000);
      try {
        const response = await fetch("https://formspree.io/f/mqazkndr", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        if (!response.ok) throw new Error("Form service returned HTTP " + response.status);

        const confirmation = {
          status: "success",
          rfqReferenceCode: trackingCode,
          submissionTimestamp: timestamp,
          receivedData: {
            buyerName: buyerName,
            email: email,
            country: country,
            organization: payload.organization,
            targetEquipment: payload.target_products,
            clinicScale: payload.dental_chairs ? `${payload.dental_chairs} Chairs` : "Not specified",
            notes: payload.notes || "None provided"
          },
          directEmail: HONGRUN_DATABASE.company.officialEmail,
          whatsAppSupport: "+86 139 6441 6725",
          headquarters: HONGRUN_DATABASE.company.headquarters,
          nextSteps: "The inquiry desk confirmed receipt and will review your requirements before following up at the email address provided."
        };
        return { content: [{ type: "text", text: JSON.stringify(confirmation, null, 2) }] };
      } catch (err) {
        console.error("[WebMCP] RFQ transmission failed:", err);
        return {
          content: [{
            type: "text",
            text: JSON.stringify({
              status: "error",
              message: "The inquiry service did not confirm delivery. No success receipt was issued.",
              retryable: true,
              rfqAttemptReference: trackingCode,
              fallback: {
                email: HONGRUN_DATABASE.company.officialEmail,
                whatsapp: "+86 139 6441 6725"
              }
            }, null, 2)
          }]
        };
      } finally {
        clearTimeout(timeout);
      }
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
          if (typeof window !== "undefined" && window.hrCookieConsent && window.hrCookieConsent.getState() === "accepted" && typeof window.gtag === "function") {
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
      window.HongrunEngineering = {
        database: HONGRUN_DATABASE,
        tools: TOOLS_TO_REGISTER,
        searchProducts: (params) => toolSearchProducts.execute(params),
        calculateDentalSizing: (params) => toolCalculateDentalSizing.execute(params),
        getIndustrySolutions: (params) => toolGetIndustrySolutions.execute(params),
        getComplianceCertificates: (params) => toolGetComplianceCertificates.execute(params),
        submitRfqInquiry: (params) => toolSubmitRfqInquiry.execute(params)
      };
    }

    return true;
  }

  // 8. Expose global HongrunEngineering immediately for standard browsers
  if (typeof window !== "undefined") {
    window.HongrunEngineering = window.HongrunEngineering || {
      database: HONGRUN_DATABASE,
      tools: TOOLS_TO_REGISTER,
      searchProducts: (params) => toolSearchProducts.execute(params),
      calculateDentalSizing: (params) => toolCalculateDentalSizing.execute(params),
      getIndustrySolutions: (params) => toolGetIndustrySolutions.execute(params),
      getComplianceCertificates: (params) => toolGetComplianceCertificates.execute(params),
      submitRfqInquiry: (params) => toolSubmitRfqInquiry.execute(params)
    };
  }

  // 9. Bootstrap with multiple timing fallback hooks
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
