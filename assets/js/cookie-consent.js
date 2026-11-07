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

  function mountConsentBanner() {
    if (localStorage.getItem(CONSENT_KEY)) return;
    if (document.getElementById("hr-cookie-banner")) return;

    const banner = document.createElement("div");
    banner.id = "hr-cookie-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Cookie Consent Notice");
    banner.className = "fixed bottom-0 left-0 right-0 z-[90] bg-slate-900/95 backdrop-blur-md border-t border-slate-700 text-slate-200 px-4 py-3 sm:py-4 shadow-2xl transition-transform duration-300 transform translate-y-0";
    banner.innerHTML = `
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div class="flex items-center gap-3 text-slate-300">
          <i class="fa-solid fa-shield-halved text-sky-400 text-lg shrink-0" aria-hidden="true"></i>
          <p class="leading-relaxed">
            Hongrun Technology uses cookies to ensure technical documentation integrity, support RFQ engineering inquiries, and evaluate anonymous site traffic in compliance with EU GDPR. Learn more in our 
            <a href="/privacy-policy.html" class="text-sky-400 underline hover:text-white font-medium">Privacy Policy</a>.
          </p>
        </div>
        <div class="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
          <button id="hr-cookie-essential" type="button" class="px-3.5 py-1.5 rounded-lg border border-slate-600 hover:bg-slate-800 text-slate-300 font-medium transition text-xs">
            Essential Only
          </button>
          <button id="hr-cookie-accept" type="button" class="px-4 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-bold transition shadow-sm text-xs">
            Accept All
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

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
      banner.classList.add("translate-y-full");
      setTimeout(() => {
        banner.remove();
      }, 350);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountConsentBanner);
  } else {
    mountConsentBanner();
  }
})();
