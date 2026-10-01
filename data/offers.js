/**
 * HI-TECH Mobile Hub — Offers & In-Store Updates Data
 * 
 * Factual in-store benefits and seasonal announcements.
 * Supports status: 'active', 'upcoming', 'expired'.
 * Expired offers are automatically filtered out.
 */

const OFFERS_DATA = [
  {
    id: "offer-01",
    title: "Complimentary Screen Guard on Smartphone Purchase",
    category: "Special Offers",
    badge: "In-Store Perk",
    validity: "Active In Store",
    status: "active",
    active: true,
    description: "Purchase any new smartphone at HI-TECH Mobile Hub and get a free 9H tempered glass screen protector with professional zero-bubble installation.",
    image: "assets/images/products/acc-tempered.svg",
    ctaText: "Claim on WhatsApp",
    whatsappMessage: "Hello HI-TECH Mobile Hub, I would like to enquire about the free screen protector offer on smartphone purchase."
  },
  {
    id: "offer-02",
    title: "New 5G Flagships Stock Arrival",
    category: "New Arrivals",
    badge: "Fresh Stock",
    validity: "Weekly Stock Update",
    status: "active",
    active: true,
    description: "Fresh sealed units of latest Apple iPhone, Samsung Galaxy, and OnePlus devices arrived at our Hansi showroom. Hands-on physical demo available.",
    image: "assets/images/gallery/gallery-unboxing-desk.svg",
    ctaText: "Check Stock on WhatsApp",
    whatsappMessage: "Hello HI-TECH Mobile Hub, what new 5G models are currently in stock?"
  },
  {
    id: "offer-03",
    title: "Essential Fast-Charging & Audio Combo Enquiry",
    category: "Accessories",
    badge: "Bundle Benefit",
    validity: "Ongoing Offer",
    status: "active",
    active: true,
    description: "Special bundle options when pairing your smartphone with a high-wattage fast adapter, braided cable, or shockproof armor case.",
    image: "assets/images/products/acc-charger.svg",
    ctaText: "Enquire Combo",
    whatsappMessage: "Hello HI-TECH Mobile Hub, I want to enquire about accessory combo packages."
  },
  {
    id: "offer-04",
    title: "Express Mobile Diagnostic Checkup",
    category: "Repair Updates",
    badge: "Quick Care",
    validity: "Available Daily",
    status: "active",
    active: true,
    description: "Facing battery drain, mic crackle, or loose charging pin? Bring your phone for an honest checkup without unnecessary parts replacement.",
    image: "assets/images/gallery/gallery-repair-station.svg",
    ctaText: "Book Checkup",
    whatsappMessage: "Hello HI-TECH Mobile Hub, I want to bring my phone for a quick repair checkup."
  },
  {
    id: "offer-archive-sample",
    title: "Previous Model Clearance",
    category: "Archive",
    badge: "Concluded",
    validity: "Expired",
    status: "expired",
    active: false,
    description: "Older campaign archive entry for demonstration of status filtering.",
    image: "assets/images/products/phone-apple.svg",
    ctaText: "Expired",
    whatsappMessage: ""
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = OFFERS_DATA;
}
