/**
 * HI-TECH Mobile Hub — Gallery Data
 * 
 * Showcase items for "Inside HI-TECH Mobile Hub" with categorized tags,
 * high-resolution assets, captions, and lightbox integration.
 */

const GALLERY_DATA = [
  {
    id: "gal-01",
    title: "Official Storefront & Showroom",
    category: "Shop",
    image: "assets/images/gallery/gallery-shop-front.svg",
    thumbnail: "assets/images/gallery/gallery-shop-front.svg",
    caption: "The retail showcase at HI-TECH Mobile Hub, Hansi. Clean, well-lit display counters for comfortable browsing.",
    alt: "HI-TECH Mobile Hub storefront and glass display counters in Hansi Haryana"
  },
  {
    id: "gal-02",
    title: "Official Brand Reference & Visual Identity",
    category: "Shop",
    image: "assets/images/gallery/gallery-brand-poster.svg",
    thumbnail: "assets/images/gallery/gallery-brand-poster.svg",
    caption: "HI-TECH Mobile Hub official brand visual identity: Mobiles, Accessories, Repairing & Exchange.",
    alt: "HI-TECH Mobile Hub Hansi official brand poster and service pillars"
  },
  {
    id: "gal-03",
    title: "Multi-Brand Smartphone Display",
    category: "Mobiles",
    image: "assets/images/gallery/gallery-mobiles-display.svg",
    thumbnail: "assets/images/gallery/gallery-mobiles-display.svg",
    caption: "Latest smartphones from Apple, Samsung, OnePlus, vivo, OPPO and Xiaomi available for in-person evaluation.",
    alt: "Display plinth of latest smartphones at HI-TECH Mobile Hub"
  },
  {
    id: "gal-04",
    title: "100% Sealed Pack Stock & Unboxing",
    category: "Mobiles",
    image: "assets/images/gallery/gallery-unboxing-desk.svg",
    thumbnail: "assets/images/gallery/gallery-unboxing-desk.svg",
    caption: "Every smartphone is delivered factory-sealed with official GST invoice and manufacturer warranty support.",
    alt: "Sealed retail phone boxes on the customer verification desk"
  },
  {
    id: "gal-05",
    title: "Accessories Wall & Protective Gear",
    category: "Accessories",
    image: "assets/images/gallery/gallery-accessories-wall.svg",
    thumbnail: "assets/images/gallery/gallery-accessories-wall.svg",
    caption: "Wide collection of certified chargers, fast braided cables, armor cases, MagSafe covers, and earphones.",
    alt: "Wall display of phone covers, chargers, tempered glass and earbuds"
  },
  {
    id: "gal-06",
    title: "Precision Mobile Repair & Diagnosis Station",
    category: "Repair",
    image: "assets/images/gallery/gallery-repair-station.svg",
    thumbnail: "assets/images/gallery/gallery-repair-station.svg",
    caption: "ESD-safe mobile repair workbench equipped for precision screen replacement, battery testing, and IC repairs.",
    alt: "Mobile repair workbench with precision tools, multimeter and phone assembly"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = GALLERY_DATA;
}
