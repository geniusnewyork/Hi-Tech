/**
 * HI-TECH Mobile Hub — Products, Accessories, Services & Offers UI Renderer
 * 
 * Truthful showroom presentation. Never invents prices or fake discounts.
 * Generates contextual WhatsApp enquiry links and handles missing image fallbacks.
 */

const ProductsRenderer = (function() {
  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /**
   * Renders the mobile phones catalogue into #mobilesGrid
   */
  function renderMobiles(items) {
    const container = document.getElementById("mobilesGrid");
    if (!container) return;

    if (!items || items.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p class="empty-state-title">No matching phone models found</p>
          <p class="empty-state-desc">We stock many unlisted models at our Hansi showroom. Message us on WhatsApp to check availability for any specific model.</p>
          <a href="${WhatsAppSystem.createUrl(WhatsAppSystem.getProductMessage('a specific phone model'))}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
            <span>💬 Ask Model on WhatsApp</span>
          </a>
        </div>
      `;
      return;
    }

    const cardsHtml = items.map(phone => {
      const askPriceUrl = WhatsAppSystem.createUrl(WhatsAppSystem.getProductMessage(phone.name));
      const checkAvailUrl = WhatsAppSystem.createUrl(WhatsAppSystem.getProductAvailabilityMessage(phone.name));

      const priceText = phone.priceVisible && phone.price ? `₹${phone.price.toLocaleString("en-IN")}` : "Ask for Price";
      const badgeHtml = phone.badge ? `<span class="product-badge">${escapeHTML(phone.badge)}</span>` : "";
      
      const specsHtml = phone.specs && phone.specs.length > 0
        ? `<ul class="product-specs">
            ${phone.specs.map(s => `<li>${escapeHTML(s)}</li>`).join("")}
           </ul>`
        : "";

      return `
        <article class="product-card" data-brand="${escapeHTML(phone.brand)}" data-id="${escapeHTML(phone.id)}">
          <div class="product-image-wrap">
            ${badgeHtml}
            <img src="${escapeHTML(phone.image)}" alt="${escapeHTML(phone.name)} available at HI-TECH Mobile Hub Hansi" loading="lazy" class="product-img" onerror="this.onerror=null; this.src='assets/images/products/phone-apple.svg';">
            <span class="product-brand-tag">${escapeHTML(phone.brand)}</span>
          </div>
          <div class="product-body">
            <h3 class="product-title">${escapeHTML(phone.name)}</h3>
            <p class="product-tagline">${escapeHTML(phone.tagline || "")}</p>
            <p class="product-desc">${escapeHTML(phone.description)}</p>
            ${specsHtml}
            <div class="product-pricing">
              <span class="price-label">Pricing:</span>
              <span class="price-val ${phone.priceVisible ? 'price-revealed' : 'price-enquire'}">${escapeHTML(priceText)}</span>
              <span class="stock-status">📍 ${escapeHTML(phone.availability || "Check In Store")}</span>
            </div>
            <div class="product-actions">
              <a href="${askPriceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-block" title="Enquire price for ${escapeHTML(phone.name)}">
                <span class="btn-icon">💬</span>
                <span>Ask for Price</span>
              </a>
              <a href="${checkAvailUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm btn-block" title="Check stock for ${escapeHTML(phone.name)}">
                <span>Check Availability</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    container.innerHTML = cardsHtml;
  }

  /**
   * Renders the accessories catalogue into #accessoriesGrid
   */
  function renderAccessories() {
    const container = document.getElementById("accessoriesGrid");
    if (!container || typeof PRODUCTS_DATA === "undefined" || !PRODUCTS_DATA.accessories) return;

    const cardsHtml = PRODUCTS_DATA.accessories.map(acc => {
      const askPriceUrl = WhatsAppSystem.createUrl(WhatsAppSystem.getAccessoriesMessage(acc.name));
      const badgeHtml = acc.badge ? `<span class="product-badge">${escapeHTML(acc.badge)}</span>` : "";

      return `
        <article class="accessory-card" data-id="${escapeHTML(acc.id)}">
          <div class="accessory-image-wrap">
            ${badgeHtml}
            <img src="${escapeHTML(acc.image)}" alt="${escapeHTML(acc.name)} at HI-TECH Mobile Hub" loading="lazy" class="accessory-img" onerror="this.onerror=null; this.src='assets/images/products/acc-tws.svg';">
          </div>
          <div class="accessory-body">
            <div class="accessory-header">
              <span class="accessory-category">${escapeHTML(acc.category)}</span>
              <span class="accessory-status">📍 Ready In Store</span>
            </div>
            <h3 class="accessory-title">${escapeHTML(acc.name)}</h3>
            <p class="accessory-desc">${escapeHTML(acc.description)}</p>
            <div class="accessory-footer">
              <div class="accessory-price-block">
                <span class="price-label">Price:</span>
                <span class="price-val price-enquire">Ask for Price</span>
              </div>
              <a href="${askPriceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                <span>Ask Availability</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    container.innerHTML = cardsHtml;
  }

  /**
   * Renders the 8 Service Cards into #servicesGrid
   */
  function renderServices() {
    const container = document.getElementById("servicesGrid");
    if (!container || typeof SERVICES_DATA === "undefined") return;

    const cardsHtml = SERVICES_DATA.map(serv => {
      const whatsappUrl = WhatsAppSystem.createUrl(serv.whatsappMessage || WhatsAppSystem.getRepairMessage());
      
      const benefitsHtml = serv.benefits && serv.benefits.length > 0
        ? `<ul class="service-benefits">
            ${serv.benefits.map(b => `<li><span class="benefit-bullet">✓</span> ${escapeHTML(b)}</li>`).join("")}
           </ul>`
        : "";

      return `
        <article class="service-card" data-id="${escapeHTML(serv.id)}">
          <div class="service-card-top">
            <span class="service-num">${escapeHTML(serv.num)}</span>
            <div class="service-icon-wrap">
              <img src="${escapeHTML(serv.icon)}" alt="${escapeHTML(serv.title)} icon" class="service-icon" loading="lazy">
            </div>
          </div>
          <h3 class="service-title">${escapeHTML(serv.title)}</h3>
          <p class="service-desc">${escapeHTML(serv.description)}</p>
          ${benefitsHtml}
          <div class="service-card-footer">
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="service-cta-link" title="Enquire about ${escapeHTML(serv.title)} on WhatsApp">
              <span>Enquire on WhatsApp</span>
              <span class="cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      `;
    }).join("");

    container.innerHTML = cardsHtml;
  }

  /**
   * Renders the Offers & Updates cards into #offersGrid
   */
  function renderOffers() {
    const container = document.getElementById("offersGrid");
    if (!container || typeof OFFERS_DATA === "undefined") return;

    // Filter only active or upcoming offers
    const validOffers = OFFERS_DATA.filter(o => o.status === "active" || o.active);

    if (validOffers.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p class="empty-state-title">New offers will be announced here</p>
          <p class="empty-state-desc">Visit our Hansi showroom or enquire on WhatsApp for today's in-store bundle perks and trade-in benefits.</p>
          <a href="${WhatsAppSystem.createUrl('Hello HI-TECH Mobile Hub, are there any ongoing store offers today?')}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
            <span>Ask Today's Perks</span>
          </a>
        </div>
      `;
      return;
    }

    const cardsHtml = validOffers.map(offer => {
      const whatsappUrl = WhatsAppSystem.createUrl(offer.whatsappMessage || "Hello HI-TECH Mobile Hub, I would like to know about your current in-store offers.");

      return `
        <article class="offer-card" data-id="${escapeHTML(offer.id)}">
          <div class="offer-image-wrap">
            <span class="offer-badge">${escapeHTML(offer.badge || "In-Store Perk")}</span>
            <img src="${escapeHTML(offer.image)}" alt="${escapeHTML(offer.title)}" class="offer-img" loading="lazy" onerror="this.onerror=null; this.src='assets/images/gallery/gallery-unboxing-desk.svg';">
          </div>
          <div class="offer-body">
            <div class="offer-meta">
              <span class="offer-category">${escapeHTML(offer.category)}</span>
              <span class="offer-date">${escapeHTML(offer.validity || "Active")}</span>
            </div>
            <h3 class="offer-title">${escapeHTML(offer.title)}</h3>
            <p class="offer-desc">${escapeHTML(offer.description)}</p>
            <div class="offer-footer">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-block">
                <span>${escapeHTML(offer.ctaText || "Claim on WhatsApp")}</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    container.innerHTML = cardsHtml;
  }

  return {
    renderMobiles,
    renderAccessories,
    renderServices,
    renderOffers
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = ProductsRenderer;
}
