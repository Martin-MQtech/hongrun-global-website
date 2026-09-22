/**
 * Hongrun Technology — Universal Mobile Navigation Engine
 * Zero-dependency, accessible, mobile-first navigation drawer with SEO fallback and auto-mount
 */
(function() {
  // Inject robust CSS fallback for drawer transitions
  if (!document.getElementById("mobile-nav-style")) {
    const style = document.createElement("style");
    style.id = "mobile-nav-style";
    style.textContent = `
      #mobile-drawer.hidden { display: none !important; }
      #mobile-drawer:not(.hidden) { display: block !important; }
      #mobile-drawer-panel.translate-x-full { transform: translateX(100%) !important; }
      #mobile-drawer-panel.translate-x-0 { transform: translateX(0) !important; }
    `;
    document.head.appendChild(style);
  }

  const DRAWER_HTML = `
<div id="mobile-drawer" class="fixed inset-0 z-[100] hidden transition-opacity duration-300" aria-modal="true" role="dialog">
  <div id="mobile-drawer-backdrop" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
  <div class="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-10 flex flex-col justify-between overflow-y-auto transform translate-x-full transition-transform duration-300 ease-in-out" id="mobile-drawer-panel">
    <div>
      <div class="p-4 flex items-center justify-between border-b border-slate-200 bg-slate-100">
        <a href="/" class="flex items-center gap-2">
          <img src="/assets/images/logo_transparent.webp" alt="Hongrun Technology" class="h-10 w-auto object-contain">
        </a>
        <button id="mobile-drawer-close" type="button" class="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition" aria-label="Close Mobile Menu">
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>
      <nav class="p-4 space-y-1 text-sm font-medium text-slate-700 font-display">
        <a href="/" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-brand-blue transition">
          <i class="fa-solid fa-house text-slate-400 w-5"></i> Home
        </a>
        <a href="/about.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-brand-blue transition">
          <i class="fa-solid fa-building text-slate-400 w-5"></i> About Us (30 Years)
        </a>
        <div class="pt-1">
          <div class="flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <span>Products</span>
            <a href="/products.html" class="text-brand-blue text-[11px] font-semibold hover:underline">All Products &rarr;</a>
          </div>
          <div class="space-y-1 pl-2 border-l-2 border-slate-200 ml-3">
            <a href="/products-hy.html" class="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded">HY Dental Compressors (1–10 Chairs)</a>
            <a href="/products-hospital.html" class="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded">HW Hospital Scroll Systems</a>
            <a href="/products-hvs.html" class="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded">HVS Dental Suction Plants</a>
            <a href="/products-cleanair.html" class="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded">HYG/HVTG Clean Air (-40°C Dew Point)</a>
            <a href="/products-water.html" class="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded">HRC Pure Water &amp; Disinfection</a>
            <a href="/products-core.html" class="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded">Core Pump Heads &amp; Spares</a>
          </div>
        </div>
        <a href="/solutions.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-brand-blue transition mt-1">
          <i class="fa-solid fa-diagram-project text-slate-400 w-5"></i> Solutions &amp; Sizing
        </a>
        <a href="/news.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-brand-blue transition">
          <i class="fa-solid fa-newspaper text-slate-400 w-5"></i> News &amp; Whitepapers
        </a>
        <a href="/oem-partner.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-brand-blue transition">
          <i class="fa-solid fa-handshake text-slate-400 w-5"></i> OEM/ODM Cooperation
        </a>
        <a href="/contact.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-brand-blue/10 text-brand-blue font-bold transition mt-2">
          <i class="fa-solid fa-file-invoice text-brand-blue w-5"></i> Request a Quote
        </a>
      </nav>
    </div>
    <div class="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
      <a href="https://wa.me/8613964416725" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-lg text-xs font-bold transition shadow-sm">
        <i class="fa-brands fa-whatsapp text-sm"></i> WhatsApp: +86-13964416725
      </a>
      <a href="mailto:info@hongrun1995.cn" class="w-full flex items-center justify-center gap-2 border border-slate-300 hover:bg-white text-slate-700 py-2 px-4 rounded-lg text-xs font-medium transition">
        <i class="fa-solid fa-envelope text-slate-400"></i> info@hongrun1995.cn
      </a>
    </div>
  </div>
</div>`;

  function initMobileNav() {
    let drawer = document.getElementById("mobile-drawer");
    if (!drawer) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = DRAWER_HTML.trim();
      drawer = wrapper.firstElementChild;
      document.body.appendChild(drawer);
    }

    let btn = document.getElementById("mobile-menu-btn");
    if (!btn) {
      const headerOrNav = document.querySelector("nav .max-w-7xl, header .max-w-7xl, nav div.flex, header div.flex");
      if (headerOrNav) {
        btn = document.createElement("button");
        btn.id = "mobile-menu-btn";
        btn.type = "button";
        btn.className = "md:hidden p-2.5 rounded-lg text-slate-700 hover:text-brand-blue hover:bg-slate-300/40 focus:outline-none transition";
        btn.setAttribute("aria-label", "Open Mobile Menu");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", "mobile-drawer");
        btn.innerHTML = '<i id="mobile-menu-icon" class="fa-solid fa-bars text-xl"></i>';
        headerOrNav.appendChild(btn);
      }
    }

    const panel = document.getElementById("mobile-drawer-panel");
    const backdrop = document.getElementById("mobile-drawer-backdrop");
    const closeBtn = document.getElementById("mobile-drawer-close");

    if (!btn || !drawer || !panel) return;

    function openDrawer() {
      drawer.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "true");
      document.body.classList.add("overflow-hidden");
      requestAnimationFrame(() => {
        panel.classList.remove("translate-x-full");
        panel.classList.add("translate-x-0");
      });
    }

    function closeDrawer() {
      panel.classList.remove("translate-x-0");
      panel.classList.add("translate-x-full");
      btn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("overflow-hidden");
      setTimeout(() => {
        drawer.classList.add("hidden");
      }, 300);
    }

    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && !drawer.classList.contains("hidden")) {
        closeDrawer();
      }
    });

    drawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        closeDrawer();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileNav);
  } else {
    initMobileNav();
  }
})();
