/**
 * HI-TECH Mobile Hub — Global Configuration
 * 
 * Central truth for all business contact details, social links,
 * and analytics credentials. NEVER duplicate these values in code.
 * Modifying this file updates the entire website dynamically.
 */

const SHOP_CONFIG = {
  name: "HI-TECH Mobile Hub",
  tagline: "Your Mobile, Our Priority",
  city: "Hansi",
  state: "Haryana",
  country: "India",
  locationShort: "Hansi, Haryana",
  locationFull: "Hansi, Haryana, India",

  // Phone contacts (raw digits for tel: / wa.me and formatted string for UI)
  phone: "+918607777717",
  phoneRaw: "918607777717",
  phoneDisplay: "+91 86077 77717",

  // WhatsApp
  whatsapp: "918607777717",
  whatsappDefaultMsg: "Hi HI-TECH Mobile Hub, I want to enquire about your products/services.",

  // Official Social Media Handles & URLs
  instagram: "https://www.instagram.com/hitechmobile77/",
  instagramHandle: "@hitechmobile77",

  facebook: "https://www.facebook.com/share/19Yd49RPZF/?mibextid=wwXIfr",

  youtube: "https://www.youtube.com/@hitechmobile-i4e",
  youtubeChannelName: "HI-TECH Mobile",

  // Maps & Location
  // Leave empty if exact coordinates are unconfigured. The UI will show "Contact us for directions."
  maps: "",

  // Website root URL (for canonical and Open Graph metadata)
  website: ""
};

/**
 * Analytics Configuration
 * If empty, no tracker or external script is loaded, protecting privacy & performance.
 */
const ANALYTICS = {
  googleAnalyticsId: "",
  metaPixelId: ""
};

// Node / module compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SHOP_CONFIG, ANALYTICS };
}
