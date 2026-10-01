/**
 * HI-TECH Mobile Hub — Master Application Orchestrator
 * 
 * Synchronizes centralized business configuration, initializes showroom modules,
 * binds digital visiting card & QR modals, and ensures zero uncaught runtime errors.
 */

document.addEventListener("DOMContentLoaded", function() {
  try {
    // 1. Populate dynamic content from SHOP_CONFIG
    applyConfigToDOM();

    // 2. Initialize Navigation & Sticky Header
    if (typeof NavigationController !== "undefined") {
      NavigationController.init();
    }

    // 3. Render Static Modules
    if (typeof ProductsRenderer !== "undefined") {
      if (typeof PRODUCTS_DATA !== "undefined") {
        ProductsRenderer.renderMobiles(PRODUCTS_DATA.mobiles);
        ProductsRenderer.renderAccessories();
      }
      if (typeof SERVICES_DATA !== "undefined") {
        ProductsRenderer.renderServices();
      }
      if (typeof OFFERS_DATA !== "undefined") {
        ProductsRenderer.renderOffers();
      }
    }

    // 4. Initialize Filters, Search & Sorter
    if (typeof FiltersController !== "undefined") {
      FiltersController.init();
    }

    // 5. Initialize Gallery & Lightbox Viewer
    if (typeof GalleryController !== "undefined") {
      GalleryController.init();
    }

    // 6. Initialize Repair Enquiry Form
    if (typeof FormsController !== "undefined") {
      FormsController.init();
    }

    // 7. Initialize Digital Visiting Card (vCard)
    if (typeof VCardController !== "undefined") {
      VCardController.init();
    }

    // 8. Initialize Vector QR System
    if (typeof QrController !== "undefined") {
      QrController.init();
    }

    // 9. Initialize Scroll Animations (prefers-reduced-motion respected)
    if (typeof AnimationsController !== "undefined") {
      AnimationsController.init();
    }

    // 10. Invalidate & Update Structured Data (Schema.org)
    if (typeof SeoController !== "undefined") {
      SeoController.init();
    }

    // 11. Load Analytics if configured
    initAnalytics();

    // Set copyright year dynamically
    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

  } catch (err) {
    console.error("HI-TECH Mobile Hub: initialization exception handled safely", err);
  }
});

/**
 * Propagates SHOP_CONFIG values to all matching DOM targets
 */
function applyConfigToDOM() {
  if (typeof SHOP_CONFIG === "undefined") return;

  // Phone numbers display
  const phoneDisplayElements = document.querySelectorAll(".cfg-phone-display");
  phoneDisplayElements.forEach(el => {
    el.textContent = SHOP_CONFIG.phone;
  });

  // Phone tel: links
  const phoneTelLinks = document.querySelectorAll(".cfg-phone-link");
  phoneTelLinks.forEach(el => {
    el.href = `tel:${SHOP_CONFIG.phoneRaw || SHOP_CONFIG.phone}`;
  });

  // WhatsApp click-to-chat links (general)
  const whatsappLinks = document.querySelectorAll(".cfg-whatsapp-link");
  whatsappLinks.forEach(el => {
    const customMsg = el.getAttribute("data-msg") || (SHOP_CONFIG.messages ? SHOP_CONFIG.messages.general : "Hello HI-TECH Mobile Hub");
    el.href = WhatsAppSystem.createUrl(customMsg, SHOP_CONFIG.whatsapp);
  });

  // Social Links
  const instaLinks = document.querySelectorAll(".cfg-instagram-link");
  instaLinks.forEach(el => {
    el.href = SHOP_CONFIG.instagram;
  });

  const fbLinks = document.querySelectorAll(".cfg-facebook-link");
  fbLinks.forEach(el => {
    el.href = SHOP_CONFIG.facebook;
  });

  const ytLinks = document.querySelectorAll(".cfg-youtube-link");
  ytLinks.forEach(el => {
    el.href = SHOP_CONFIG.youtube;
  });

  // Location text
  const locationElements = document.querySelectorAll(".cfg-location");
  locationElements.forEach(el => {
    el.textContent = SHOP_CONFIG.locationFull;
  });

  const locationShortElements = document.querySelectorAll(".cfg-location-short");
  locationShortElements.forEach(el => {
    el.textContent = SHOP_CONFIG.locationShort;
  });

  // Google Maps button setup
  const mapsBtn = document.getElementById("googleMapsBtn");
  const directionsFallback = document.getElementById("directionsFallback");

  const mapTargetUrl = SHOP_CONFIG.mapUrl || (SHOP_CONFIG.mapQuery ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP_CONFIG.mapQuery)}` : "");

  if (mapTargetUrl && mapTargetUrl.trim().length > 0) {
    if (mapsBtn) {
      mapsBtn.href = mapTargetUrl;
      mapsBtn.style.display = "inline-flex";
    }
    if (directionsFallback) {
      directionsFallback.style.display = "none";
    }
  } else {
    if (mapsBtn) {
      mapsBtn.style.display = "none";
    }
    if (directionsFallback) {
      directionsFallback.style.display = "block";
    }
  }
}

/**
 * Initializes Google Analytics / Meta Pixel only when IDs are explicitly provided.
 */
function initAnalytics() {
  if (typeof ANALYTICS === "undefined") return;

  if (ANALYTICS.googleAnalyticsId && ANALYTICS.googleAnalyticsId.trim().length > 0) {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ANALYTICS.googleAnalyticsId)}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", ANALYTICS.googleAnalyticsId);
  }
}
