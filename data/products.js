/**
 * HI-TECH Mobile Hub — Product Catalogue Data
 * 
 * Configurable data source for mobile phones & accessories.
 * No prices are invented. When price is null or priceVisible is false,
 * the UI displays "Ask Price" or "Check Availability" with direct WhatsApp triggers.
 */

const PRODUCTS_DATA = {
  // Mobile Phones Catalogue
  mobiles: [
    {
      id: "phone-apple-15pro",
      brand: "Apple",
      name: "Apple iPhone 15 Pro",
      tagline: "Titanium Design • A17 Pro Chip",
      description: "Super Retina XDR display with ProMotion, 48MP main camera system, Action button, USB-C. Authentic Indian bill & warranty support.",
      image: "assets/images/products/phone-apple.svg",
      price: null,
      oldPrice: null,
      priceVisible: false,
      availability: "Available in Shop",
      badge: "Flagship Choice",
      category: "featured",
      featured: true,
      specs: ["128GB / 256GB / 512GB", "A17 Pro Titanium", "48MP Pro Triple Camera", "Type-C Charging"]
    },
    {
      id: "phone-samsung-s24ultra",
      brand: "Samsung",
      name: "Samsung Galaxy S24 Ultra 5G",
      tagline: "Galaxy AI • 200MP Quad Telephoto",
      description: "Titanium armor frame, embedded S-Pen stylus, Snapdragon 8 Gen 3 for Galaxy, flat dynamic AMOLED 2X display. In-store demo available.",
      image: "assets/images/products/phone-samsung.svg",
      price: null,
      oldPrice: null,
      priceVisible: false,
      availability: "Available in Shop",
      badge: "AI Flagship",
      category: "featured",
      featured: true,
      specs: ["12GB RAM / 256GB / 512GB", "Snapdragon 8 Gen 3", "200MP Quad Camera", "5000mAh • 45W Fast"]
    },
    {
      id: "phone-oneplus-12r",
      brand: "OnePlus",
      name: "OnePlus 12R 5G",
      tagline: "Smooth Beyond Belief • 100W SUPERVOOC",
      description: "Snapdragon 8 Gen 2, 4th Gen LTPO 120Hz ProXDR display, 5500mAh largest OnePlus battery with 100W ultra-fast charging.",
      image: "assets/images/products/phone-oneplus.svg",
      price: null,
      oldPrice: null,
      priceVisible: false,
      availability: "Available in Shop",
      badge: "Best Seller",
      category: "popular",
      featured: true,
      specs: ["8GB/16GB RAM + 128/256GB", "Snapdragon 8 Gen 2", "50MP Sony IMX890 OIS", "5500mAh • 100W Charging"]
    },
    {
      id: "phone-vivo-v30pro",
      brand: "vivo",
      name: "vivo V30 Pro 5G",
      tagline: "ZEISS Professional Portrait Camera",
      description: "Co-engineered with ZEISS, Studio-Quality Aura Light portrait system, 50MP Sony IMX920 main sensor, ultra-slim 3D curved design.",
      image: "assets/images/products/phone-vivo.svg",
      price: null,
      oldPrice: null,
      priceVisible: false,
      availability: "Available in Shop",
      badge: "Camera Specialist",
      category: "popular",
      featured: true,
      specs: ["ZEISS Triple 50MP Cameras", "Dimensity 8200 4nm", "Smart Aura Light", "80W FlashCharge"]
    },
    {
      id: "phone-oppo-reno11pro",
      brand: "OPPO",
      name: "OPPO Reno 11 Pro 5G",
      tagline: "The Portrait Expert • 80W SUPERVOOC",
      description: "32MP Telephoto Portrait Camera, natural aesthetic 3D curved glass, MediaTek Dimensity 8200, ColorOS 14 fluid experience.",
      image: "assets/images/products/phone-oppo.svg",
      price: null,
      oldPrice: null,
      priceVisible: false,
      availability: "Available in Shop",
      badge: "Design Pick",
      category: "latest",
      featured: false,
      specs: ["32MP 2X Telephoto Portrait", "120Hz Curved AMOLED", "12GB RAM + 256GB Storage", "80W Flash Charge"]
    },
    {
      id: "phone-realme-12proplus",
      brand: "realme",
      name: "realme 12 Pro+ 5G",
      tagline: "64MP Periscope Telephoto • Luxury Watch Design",
      description: "Luxury watch fluted bezel crafted in collaboration with Ollivier Savéo, Snapdragon 7s Gen 2, Sony IMX890 OIS with 120X SuperZoom.",
      image: "assets/images/products/phone-realme.svg",
      price: null,
      oldPrice: null,
      priceVisible: false,
      availability: "Available in Shop",
      badge: "Periscope Zoom",
      category: "latest",
      featured: true,
      specs: ["64MP Periscope 3X Zoom", "Sony IMX890 OIS 50MP", "120Hz Curved Display", "67W SUPERVOOC"]
    },
    {
      id: "phone-xiaomi-redminote13pro",
      brand: "Xiaomi",
      name: "Redmi Note 13 Pro+ 5G",
      tagline: "200MP OIS Camera • 120W HyperCharge",
      description: "Flagship 200MP camera sensor with in-sensor 4x lossless zoom, IP68 water & dust resistance, 1.5K 120Hz curved AMOLED display.",
      image: "assets/images/products/phone-xiaomi.svg",
      price: null,
      oldPrice: null,
      priceVisible: false,
      availability: "Available in Shop",
      badge: "Value Master",
      category: "latest",
      featured: false,
      specs: ["200MP OIS Primary Camera", "IP68 Water Resistance", "120W HyperCharge In-Box", "MediaTek Dimensity 7200-Ultra"]
    },
    {
      id: "phone-apple-13",
      brand: "Apple",
      name: "Apple iPhone 13",
      tagline: "Superfast A15 Bionic • Cinematic Mode",
      description: "Super Retina XDR OLED display, durable flat-edge aerospace-grade aluminum, dual 12MP camera with sensor-shift OIS, Ceramic Shield front.",
      image: "assets/images/products/phone-apple.svg",
      price: null,
      oldPrice: null,
      priceVisible: false,
      availability: "Available in Shop",
      badge: "Evergreen Value",
      category: "popular",
      featured: false,
      specs: ["128GB / 256GB", "A15 Bionic 5G", "Dual 12MP with Sensor-Shift", "Ceramic Shield Glass"]
    },
    {
      id: "phone-samsung-a55",
      brand: "Samsung",
      name: "Samsung Galaxy A55 5G",
      tagline: "Metal Frame • Knox Vault Security",
      description: "Premium metallic frame with Gorilla Glass Victus+, 50MP OIS camera with Nightography, IP67 dust and water rating.",
      image: "assets/images/products/phone-samsung.svg",
      price: null,
      oldPrice: null,
      priceVisible: false,
      availability: "Available in Shop",
      badge: "Durable Pick",
      category: "popular",
      featured: false,
      specs: ["Metal Frame & Glass Back", "IP67 Water Resistance", "50MP OIS Camera", "4 Gen OS Updates"]
    }
  ],

  // Mobile Accessories Catalogue
  accessories: [
    {
      id: "acc-covers",
      name: "Mobile Covers & Cases",
      category: "Protection",
      description: "Shockproof armor cases, silicone matte covers, MagSafe magnetic covers, and luxury leather flip cases for all phone models.",
      image: "assets/images/products/acc-case.svg",
      price: null,
      availability: "Ready in Shop",
      badge: "Full Models Fit"
    },
    {
      id: "acc-chargers",
      name: "Fast Chargers & Adapters",
      category: "Charging",
      description: "Original & certified fast adapters: 20W PD, 33W, 67W, 80W, 100W, 120W GaN chargers compatible with Apple, Samsung, OnePlus, vivo, etc.",
      image: "assets/images/products/acc-charger.svg",
      price: null,
      availability: "Ready in Shop",
      badge: "Super Fast"
    },
    {
      id: "acc-cables",
      name: "Heavy-Duty Data Cables",
      category: "Charging",
      description: "Tangle-free braided Type-C to Type-C, USB to Type-C, Lightning, 60W/100W high-speed sync cables with reinforced alloy connectors.",
      image: "assets/images/products/acc-cable.svg",
      price: null,
      availability: "Ready in Shop",
      badge: "Braided & Tough"
    },
    {
      id: "acc-tempered",
      name: "9H Tempered Glass & Protectors",
      category: "Protection",
      description: "Edge-to-edge full glue tempered glass, matte gaming guards, privacy filters, UV curved glass, and lens protectors with free bubble-free fitting.",
      image: "assets/images/products/acc-tempered.svg",
      price: null,
      availability: "Ready in Shop",
      badge: "Free Installation"
    },
    {
      id: "acc-tws",
      name: "TWS True Wireless Earbuds",
      category: "Audio",
      description: "Crystal-clear calling earbuds, Active Noise Cancellation (ANC), punchy bass, long battery life, low-latency gaming modes from leading brands.",
      image: "assets/images/products/acc-tws.svg",
      price: null,
      availability: "Ready in Shop",
      badge: "Original Brands"
    },
    {
      id: "acc-earphones",
      name: "Neckbands & Wired Earphones",
      category: "Audio",
      description: "Magnetic sports Bluetooth neckbands, fast-charging audio bands, high-res 3.5mm and Type-C wired earphones with in-line microphone.",
      image: "assets/images/products/acc-earphones.svg",
      price: null,
      availability: "Ready in Shop",
      badge: "Deep Bass"
    },
    {
      id: "acc-powerbank",
      name: "High-Capacity Power Banks",
      category: "Power",
      description: "10,000mAh and 20,000mAh compact power banks featuring 22.5W two-way fast charge, digital LED percentage display, dual output ports.",
      image: "assets/images/products/acc-powerbank.svg",
      price: null,
      availability: "Ready in Shop",
      badge: "Travel Ready"
    },
    {
      id: "acc-smartwatch",
      name: "Smart Watches & Bands",
      category: "Wearables",
      description: "Bluetooth calling smartwatches, AMOLED displays, heart-rate and SpO2 tracking, multiple sports modes, durable metallic and silicon straps.",
      image: "assets/images/products/acc-watch.svg",
      price: null,
      availability: "Ready in Shop",
      badge: "BT Calling"
    }
  ]
};

// Export for module/script usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = PRODUCTS_DATA;
}
