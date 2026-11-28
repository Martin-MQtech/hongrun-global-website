/**
 * Hongrun Technology — Consent-Gated Analytics & Cookie Preferences
 * Google Analytics is not requested or configured until the visitor accepts analytics.
 */
(function() {
  "use strict";

  const CONSENT_KEY = "hr_cookie_consent_v1";
  const GA_ID = "G-25BF91Y6Q1";
  let consent = "essential";
  let analyticsRequested = false;

  try {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (saved === "accepted" || saved === "essential") consent = saved;
  } catch (err) {
    // Storage can be disabled; the site remains usable and no analytics is loaded.
  }

  // Remove plaintext inquiry backups created by earlier versions of the site.
  ["hr_oem_leads", "hr_rfq_leads", "hr_catalog_downloads", "hongrun_rfq_log"].forEach(function(key) {
    try { localStorage.removeItem(key); } catch (err) {}
  });

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  const consentValues = function(granted) {
    return {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: granted ? "granted" : "denied"
    };
  };

  // Google Consent Mode v2 defaults are set before any Google tag is requested.
  gtag("consent", "default", consentValues(consent === "accepted"));

  function requestAnalytics() {
    if (analyticsRequested) return;
    analyticsRequested = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    script.onload = function() {
      if (consent !== "accepted") return;
      gtag("js", new Date());
      gtag("config", GA_ID, { send_page_view: true, allow_google_signals: false, allow_ad_personalization_signals: false });
    };
    document.head.appendChild(script);
  }

  function setConsent(value) {
    consent = value;
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (err) {
      // Consent still applies for this page view when browser storage is unavailable.
    }
    gtag("consent", "update", consentValues(value === "accepted"));
    if (value === "accepted") requestAnalytics();
  }

  window.hrCookieConsent = {
    getState: function() { return consent; },
    setConsent: setConsent
  };

  function track(eventName, params) {
    if (consent !== "accepted") return;
    gtag("event", eventName, params || {});
  }

  function bindConversionTracking() {
    const path = window.location.pathname;
    const oemProfiles = {
      "oem-daisy.html": { prefix: "oem_daisy", category: "Daisy Wang OEM Lead", whatsapp: "WhatsApp Daisy Direct" },
      "oem-tina.html": { prefix: "oem_tina", category: "Tina Liu OEM Lead", whatsapp: "WhatsApp Tina Direct" },
      "oem-jason.html": { prefix: "oem_jason", category: "Jason Li OEM Lead", whatsapp: "WhatsApp Jason Direct" },
      "oem-steven.html": { prefix: "oem_steven", category: "Steven Yang OEM Lead", whatsapp: "WhatsApp Steven Direct" },
      "oem-henry.html": { prefix: "oem_henry", category: "Henry Xing OEM Lead", whatsapp: "WhatsApp Henry Direct" },
      "oem-partner.html": { prefix: "oem", category: "OEM Lead", whatsapp: "WhatsApp OEM Chat" }
    };
    const filename = path.substring(path.lastIndexOf("/") + 1);
    const oem = oemProfiles[filename];

    document.addEventListener("click", function(event) {
      const link = event.target.closest && event.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      if (oem) {
        if (href.indexOf("mailto:") === 0) {
          track(oem.prefix + "_email_click", { event_category: oem.category, event_label: href });
        } else if (href.indexOf("wa.me") !== -1 || href.indexOf("whatsapp") !== -1) {
          track(oem.prefix + "_whatsapp_click", { event_category: oem.category, event_label: oem.whatsapp });
        } else if (href.toLowerCase().indexOf(".pdf") !== -1) {
          track(oem.prefix + "_dossier_download", { event_category: oem.category + " Asset", event_label: href });
        }
        return;
      }

      if (href.indexOf("mailto:") === 0) {
        track("contact_email_click", { event_category: "B2B Lead", event_label: href });
      } else if (href.indexOf("wa.me") !== -1 || href.indexOf("whatsapp") !== -1) {
        track("whatsapp_click", { event_category: "B2B Lead", event_label: "WhatsApp Chat Initiation" });
      } else if (href.indexOf("contact.html") !== -1) {
        const ctaSource = link.getAttribute("data-cta-source") ||
          (link.closest("nav") ? "navbar" :
          (link.closest("footer") ? "footer" :
          (link.closest("#hero, .hero-slide, header") ? "hero_cta" : "product_content")));
        track("inquire_button_click", {
          event_category: "B2B Engagement",
          event_label: filename === "index.html" && path.indexOf("dentech-china-2026") !== -1
            ? "DenTech 2026 VIP Booking"
            : href,
          cta_source: ctaSource
        });
      }
    });
  }

  function injectCookieStyles() {
    if (document.getElementById("hr-cookie-style")) return;
    const style = document.createElement("style");
    style.id = "hr-cookie-style";
    style.textContent = `
      #hr-cookie-banner {
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        top: auto !important;
        width: 100% !important;
        max-width: 100vw !important;
        z-index: 9990 !important;
        background-color: rgba(15, 23, 42, 0.96) !important;
        -webkit-backdrop-filter: blur(12px);
        backdrop-filter: blur(12px);
        border-top: 1px solid #334155 !important;
        color: #e2e8f0 !important;
        box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.28) !important;
        box-sizing: border-box;
        transform: translateY(0);
        transition: transform 0.3s ease;
      }
      #hr-cookie-banner.hr-cookie-closing { transform: translateY(115%) !important; }
      #hr-cookie-banner .hr-cookie-inner {
        max-width: 80rem;
        margin: 0 auto;
        padding: 12px 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        font-size: 12px;
        line-height: 1.5;
        box-sizing: border-box;
      }
      @media (min-width: 768px) {
        #hr-cookie-banner .hr-cookie-inner {
          flex-direction: row;
          align-items: center;
          padding: 14px 24px;
        }
      }
      #hr-cookie-banner .hr-cookie-copy {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        color: #cbd5e1;
      }
      @media (min-width: 768px) {
        #hr-cookie-banner .hr-cookie-copy { align-items: center; }
      }
      #hr-cookie-banner .hr-cookie-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        flex-shrink: 0;
        width: 100%;
      }
      @media (min-width: 768px) {
        #hr-cookie-banner .hr-cookie-actions { width: auto; }
      }
      #hr-cookie-essential, #hr-cookie-accept {
        padding: 7px 14px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      #hr-cookie-essential {
        border: 1px solid #475569;
        background-color: transparent;
        color: #e2e8f0;
      }
      #hr-cookie-essential:hover { background-color: #1e293b; border-color: #64748b; }
      #hr-cookie-accept {
        border: 1px solid #0284c7;
        background-color: #0ea5e9;
        color: #ffffff;
      }
      #hr-cookie-accept:hover { background-color: #0284c7; }
      #hr-cookie-essential:focus-visible, #hr-cookie-accept:focus-visible {
        outline: 3px solid #7dd3fc;
        outline-offset: 2px;
      }
      html.hr-cookie-open #floating-whatsapp-btn { bottom: 84px !important; }
      @media (max-width: 767px) {
        html.hr-cookie-open #floating-whatsapp-btn { bottom: 162px !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function mountConsentBanner() {
    if (consent === "accepted") {
      requestAnalytics();
      return;
    }
    if (consent === "essential" && document.getElementById("hr-cookie-banner")) return;
    injectCookieStyles();

    const banner = document.createElement("div");
    banner.id = "hr-cookie-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Cookie Consent Notice");
    banner.innerHTML = `
      <div class="hr-cookie-inner">
        <div class="hr-cookie-copy">
          <i class="fa-solid fa-shield-halved text-sky-400 text-lg shrink-0" aria-hidden="true"></i>
          <p>
            Essential storage keeps this site working. With your permission, Google Analytics measures anonymous site traffic; inquiry details are never sent to Analytics. Learn more in our
            <a href="/privacy-policy.html" class="text-sky-400 underline hover:text-white font-medium">Privacy Policy</a>.
          </p>
        </div>
        <div class="hr-cookie-actions">
          <button id="hr-cookie-essential" type="button">Essential Only</button>
          <button id="hr-cookie-accept" type="button">Accept Analytics</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);
    document.documentElement.classList.add("hr-cookie-open");

    document.getElementById("hr-cookie-accept").addEventListener("click", function() {
      setConsent("accepted");
      closeBanner();
    });
    document.getElementById("hr-cookie-essential").addEventListener("click", function() {
      setConsent("essential");
      closeBanner();
    });

    function closeBanner() {
      document.documentElement.classList.remove("hr-cookie-open");
      banner.classList.add("hr-cookie-closing");
      setTimeout(function() { banner.remove(); }, 320);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      bindConversionTracking();
      mountConsentBanner();
    });
  } else {
    bindConversionTracking();
    mountConsentBanner();
  }
})();
