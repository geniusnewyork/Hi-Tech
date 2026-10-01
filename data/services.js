/**
 * HI-TECH Mobile Hub — Services Data
 * 
 * Configurable list of services offered in Hansi, Haryana.
 * Each entry provides an icon, service number, title, description,
 * and a pre-configured WhatsApp enquiry text.
 */

const SERVICES_DATA = [
  {
    id: "service-01",
    num: "01",
    title: "Mobile Phones",
    shortTitle: "Smartphones",
    icon: "assets/images/services/service-mobiles.svg",
    description: "Explore the latest smartphones from Apple, Samsung, OnePlus, vivo, OPPO, realme, and Xiaomi. All devices are brand-sealed with genuine bills and warranty.",
    benefits: ["All Major Brands", "100% Sealed Units", "Hands-on Store Demo"],
    whatsappMessage: "Hi HI-TECH Mobile Hub, I want to enquire about purchasing a mobile phone."
  },
  {
    id: "service-02",
    num: "02",
    title: "Mobile Accessories",
    shortTitle: "Accessories",
    icon: "assets/images/services/service-accessories.svg",
    description: "Equip your device with verified accessories: shockproof covers, 9H tempered protectors, fast chargers, braided cables, TWS earbuds, and smartwatches.",
    benefits: ["Tested Quality", "Free Screen Guard Fit", "Broad Compatibility"],
    whatsappMessage: "Hi HI-TECH Mobile Hub, I want to enquire about mobile accessories."
  },
  {
    id: "service-03",
    num: "03",
    title: "Mobile Repair",
    shortTitle: "Repairing",
    icon: "assets/images/services/service-repair.svg",
    description: "Expert hardware and motherboard troubleshooting for all mobile phones. Accurate diagnosis, transparent pricing, and careful handling by trained technicians.",
    benefits: ["Precise Diagnosis", "Genuine Replacement Parts", "Fast Turnaround"],
    whatsappMessage: "Hi HI-TECH Mobile Hub, I need help with mobile repair service."
  },
  {
    id: "service-04",
    num: "04",
    title: "Display / Screen Service",
    shortTitle: "Screen Service",
    icon: "assets/images/services/service-display.svg",
    description: "Cracked glass, black screen, touchscreen unresponsiveness, or flickering lines. We provide high-quality OLED and LCD folder replacements.",
    benefits: ["Original Quality Display", "Proper Touch Calibration", "Glue Cleaning & Sealing"],
    whatsappMessage: "Hi HI-TECH Mobile Hub, I want to enquire about display/screen replacement."
  },
  {
    id: "service-05",
    num: "05",
    title: "Battery Service",
    shortTitle: "Battery Service",
    icon: "assets/images/services/service-battery.svg",
    description: "Fast draining, sudden shutdowns, swollen batteries, or slow charging issues. Get reliable battery replacements with genuine backup performance.",
    benefits: ["High-Capacity Cells", "Safe Installation", "Backup Verification"],
    whatsappMessage: "Hi HI-TECH Mobile Hub, I want to enquire about mobile battery replacement."
  },
  {
    id: "service-06",
    num: "06",
    title: "Charging / Software Issues",
    shortTitle: "Charging & OS",
    icon: "assets/images/services/service-charging.svg",
    description: "Loose charging pin, no charging detected, boot loop, forgotten pattern/PIN assistance, network bugs, and system update troubleshooting.",
    benefits: ["Jack & CC Board Fix", "Firmware Re-flash", "Data Protection Care"],
    whatsappMessage: "Hi HI-TECH Mobile Hub, I want to enquire about charging or software issues."
  },
  {
    id: "service-07",
    num: "07",
    title: "Phone Exchange",
    shortTitle: "Phone Exchange",
    icon: "assets/images/services/service-exchange.svg",
    description: "Upgrade your existing smartphone easily. Bring your device to our Hansi store for instant on-the-spot physical and functional evaluation.",
    benefits: ["Direct In-Store Inspection", "Fair Value Assessment", "Instant Trade Allowance"],
    whatsappMessage: "Hi HI-TECH Mobile Hub, I want to enquire about exchanging my old phone."
  },
  {
    id: "service-08",
    num: "08",
    title: "Upgrade Assistance",
    shortTitle: "Upgrade Help",
    icon: "assets/images/services/service-upgrade.svg",
    description: "Confused between models? Get honest, friendly guidance based on your usage, budget, and camera priorities, plus full data transfer help.",
    benefits: ["Unbiased Guidance", "Data & Contact Transfer", "Complete Setup Help"],
    whatsappMessage: "Hi HI-TECH Mobile Hub, I need advice on upgrading to a new smartphone."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = SERVICES_DATA;
}
