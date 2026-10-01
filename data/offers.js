/**
 * HI-TECH Mobile Hub — Offers & Shop Updates Data
 * 
 * Truthful, real-world shop announcements and in-store promotions.
 * No fake price cuts or misleading discount figures.
 */

const OFFERS_DATA = [
  {
    id: "offer-01",
    title: "Complimentary Screen Guard on Smartphone Purchase",
    category: "Special Offers",
    badge: "In-Store Perk",
    date: "Current Season",
    active: true,
    description: "Purchase any smartphone at HI-TECH Mobile Hub and receive a premium 9H tempered glass screen protector with professional zero-bubble installation on us.",
    image: "assets/images/products/acc-tempered.svg",
    ctaText: "Claim on WhatsApp",
    whatsappMessage: "Hi HI-TECH Mobile Hub, I saw your free screen protector offer on smartphone purchase."
  },
  {
    id: "offer-02",
    title: "Latest 5G Flagships Now Available In Hansi",
    category: "New Arrivals",
    badge: "Fresh Stock",
    date: "Weekly Arrival",
    active: true,
    description: "Fresh sealed stock of latest Apple, Samsung Galaxy, and OnePlus series has arrived. Visit our store to experience live demo units before buying.",
    image: "assets/images/gallery/gallery-unboxing-desk.svg",
    ctaText: "Check Stock on WhatsApp",
    whatsappMessage: "Hi HI-TECH Mobile Hub, what new 5G models are currently in stock?"
  },
  {
    id: "offer-03",
    title: "Audio & Charging Essentials Combo Enquiry",
    category: "Accessories",
    badge: "Bundle Benefit",
    date: "Ongoing",
    active: true,
    description: "Get special bundle pricing when you pair your new device with a certified fast adapter and heavy-duty braided cable or protective case.",
    image: "assets/images/products/acc-charger.svg",
    ctaText: "Enquire on WhatsApp",
    whatsappMessage: "Hi HI-TECH Mobile Hub, I want to enquire about accessory combo packages."
  },
  {
    id: "offer-04",
    title: "Quick-Diagnosis Mobile Checkup Service",
    category: "Repair Updates",
    badge: "Express Care",
    date: "Daily Service",
    active: true,
    description: "Experiencing battery drain, charging jack looseness, or speaker crackling? Bring your device for an honest diagnostic assessment without unnecessary replacement costs.",
    image: "assets/images/gallery/gallery-repair-station.svg",
    ctaText: "Book Diagnosis",
    whatsappMessage: "Hi HI-TECH Mobile Hub, I want to bring my phone for a quick repair checkup."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = OFFERS_DATA;
}
