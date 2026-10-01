/**
 * HI-TECH Mobile Hub — Central Business Configuration
 * 
 * Single source of truth for all business contact details, locations,
 * social channels, and contextual WhatsApp enquiry templates.
 */

const SHOP_CONFIG = {
  // Business Identity
  name: "HI-TECH Mobile Hub",
  legalName: "HI-TECH Mobile Hub",
  tagline: "Your Mobile, Our Priority",
  description: "Mobile phones, genuine accessories, repair services and upgrade options in Hansi, Haryana.",

  // Location
  city: "Hansi",
  state: "Haryana",
  country: "India",
  locationShort: "Hansi, Haryana",
  locationFull: "Hansi, Haryana, India",

  // Contacts
  phone: "+91 86077 77717",
  phoneRaw: "+918607777717",
  phoneDigits: "918607777717",
  whatsapp: "918607777717",

  // Social Media Links (Official & Verified)
  instagram: "https://www.instagram.com/hitechmobile77/",
  instagramHandle: "@hitechmobile77",

  facebook: "https://www.facebook.com/share/19Yd49RPZF/?mibextid=wwXIfr",

  youtube: "https://www.youtube.com/@hitechmobile-i4e",
  youtubeChannelName: "HI-TECH Mobile",

  // Google Maps Search Query & URL (Configurable)
  mapQuery: "HI-TECH Mobile Hub Hansi Haryana",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=HI-TECH+Mobile+Hub+Hansi+Haryana",

  // Canonical Website URL (leave empty for automatic detection)
  website: "",

  // Standard Contextual WhatsApp Message Templates
  messages: {
    general: "Hello HI-TECH Mobile Hub, I found your website and would like some information.",
    product: (productName) => `Hello HI-TECH Mobile Hub, I am interested in ${productName}. Please share price and availability.`,
    repair: "Hello HI-TECH Mobile Hub, I need help with mobile repair/service.",
    accessories: (category) => `Hello HI-TECH Mobile Hub, I am looking for ${category || 'mobile accessories'}. Please share available options.`,
    exchange: "Hello HI-TECH Mobile Hub, I want to know about phone exchange/upgrade options.",
    location: "Hello HI-TECH Mobile Hub, can you please share your exact shop location and directions in Hansi?"
  }
};

// Analytics config (Disabled by default, zero tracking unless ID provided)
const ANALYTICS = {
  googleAnalyticsId: "",
  metaPixelId: ""
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { SHOP_CONFIG, ANALYTICS };
}
