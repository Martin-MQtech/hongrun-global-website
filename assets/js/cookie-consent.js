/**
 * Hongrun Technology — GDPR Cookie Consent & Google Consent Mode v2 Module
 * Lightweight, accessible, zero-dependency consent banner compliant with EU GDPR and Google Consent Mode v2
 */
(function() {
  const CONSENT_KEY = "hr_cookie_consent_v1";

  // Google Consent Mode v2 initialization
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }

  const storedConsent = localStorage.getItem(CONSENT_KEY);

  if (storedConsent === "accepted") {
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted"
    });
  } else if (storedConsent === "essential") {
    gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied"
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
        box-sizing: border-box !important;
        transform: translateY(0);
        transition: transform 0.3s ease;
      }
      #hr-cookie-banner.hr-cookie-closing {
        transform: translateY(115%) !important;
      }
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
        #hr-cookie-banner .hr-cookie-copy {
          align-items: center;
        }
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
        #hr-cookie-banner .hr-cookie-actions {
          width: auto;
        }
      }
      #hr-cookie-essential {
        padding: 6px 14px;
        border-radius: 8px;
        border: 1px solid #475569;
        background-color: transparent;
        color: #e2e8f0;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s ease, border-color 0.2s ease;
      }
      #hr-cookie-essential:hover {
        background-color: #1e293b;
        border-color: #64748b;
      }
      #hr-cookie-accept {
        padding: 7px 16px;
        border-radius: 8px;
        border: 1px solid #0284c7;
        background-color: #0ea5e9;
        color: #ffffff;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(14, 165, 233, 0.35);
        transition: background-color 0.2s ease;
      }
      #hr-cookie-accept:hover {
        background-color: #0284c7;
      }
      html.hr-cookie-open #floating-whatsapp-btn {
        bottom: 84px !important;
      }
      @media (max-width: 767px) {
        html.hr-cookie-open #floating-whatsapp-btn {
          bottom: 162px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function mountConsentBanner() {
    if (localStorage.getItem(CONSENT_KEY)) return;
    if (document.getElementById("hr-cookie-banner")) return;

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
            Hongrun Technology uses cookies to ensure technical documentation integrity, support RFQ engineering inquiries, and evaluate anonymous site traffic in compliance with EU GDPR. Learn more in our 
            <a href="/privacy-policy.html" class="text-sky-400 underline hover:text-white font-medium">Privacy Policy</a>.
          </p>
        </div>
        <div class="hr-cookie-actions">
          <button id="hr-cookie-essential" type="button">
            Essential Only
          </button>
          <button id="hr-cookie-accept" type="button">
            Accept All
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);
    document.documentElement.classList.add("hr-cookie-open");

    document.getElementById("hr-cookie-accept").addEventListener("click", function() {
      localStorage.setItem(CONSENT_KEY, "accepted");
      gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted"
      });
      closeBanner();
    });

    document.getElementById("hr-cookie-essential").addEventListener("click", function() {
      localStorage.setItem(CONSENT_KEY, "essential");
      gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied"
      });
      closeBanner();
    });

    function closeBanner() {
      document.documentElement.classList.remove("hr-cookie-open");
      banner.classList.add("hr-cookie-closing");
      setTimeout(() => {
        banner.remove();
      }, 320);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountConsentBanner);
  } else {
    mountConsentBanner();
  }
})();
