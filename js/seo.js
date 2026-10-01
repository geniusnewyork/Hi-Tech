/**
 * HI-TECH Mobile Hub — SEO & Structured Data Helper
 * 
 * Injects and updates Schema.org LocalBusiness structured data
 * dynamically from SHOP_CONFIG to ensure perfect SEO integrity.
 * Strictly avoids fake ratings, fake reviewCounts or unconfirmed opening hours.
 */

const SeoController = (function() {
  function init() {
    updateStructuredData();
  }

  function updateStructuredData() {
    if (typeof SHOP_CONFIG === "undefined") return;

    let scriptTag = document.getElementById("schema-local-business");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "schema-local-business";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const currentUrl = window.location.href.split("#")[0].split("?")[0];
    const baseUrl = SHOP_CONFIG.website || currentUrl;

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${baseUrl}#localbusiness`,
      "name": SHOP_CONFIG.name,
      "alternateName": "HI TECH Mobile Hansi",
      "description": "HI-TECH Mobile Hub in Hansi, Haryana — explore mobile phones, accessories, repair services, exchange options and contact us directly on WhatsApp.",
      "url": baseUrl,
      "telephone": SHOP_CONFIG.phone,
      "image": `${baseUrl}assets/images/social/og-image.svg`,
      "logo": `${baseUrl}assets/logo/logo.svg`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": SHOP_CONFIG.city,
        "addressRegion": SHOP_CONFIG.state,
        "addressCountry": SHOP_CONFIG.country
      },
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
      "sameAs": [
        SHOP_CONFIG.instagram,
        SHOP_CONFIG.facebook,
        SHOP_CONFIG.youtube
      ].filter(url => Boolean(url && url.length > 5))
    };

    if (SHOP_CONFIG.maps && SHOP_CONFIG.maps.length > 5) {
      schemaData.hasMap = SHOP_CONFIG.maps;
    }

    scriptTag.textContent = JSON.stringify(schemaData, null, 2);
  }

  return {
    init,
    updateStructuredData
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = SeoController;
}
