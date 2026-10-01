# HI-TECH Mobile Hub — Official Business Website

Production-ready, ultra-fast, mobile-first website for **HI-TECH Mobile Hub**, located in **Hansi, Haryana, India**.

Designed from zero for high local conversion, physical shop visits, and frictionless direct WhatsApp and phone enquiries. 100% compatible with free static hosting platforms (GitHub Pages, Render Static Sites, Netlify, Vercel, Cloudflare Pages) without any server runtime, database, or paid API dependencies.

---

## 1. Project Overview & Business Details

- **Business Name**: HI-TECH Mobile Hub
- **Tagline**: *"Your Mobile, Our Priority"*
- **Location**: Hansi, Haryana, India
- **Primary Phone**: `+91 86077 77717`
- **WhatsApp**: `+91 86077 77717` ([wa.me/918607777717](https://wa.me/918607777717))
- **Instagram**: [https://www.instagram.com/hitechmobile77/](https://www.instagram.com/hitechmobile77/) (`@hitechmobile77`)
- **YouTube**: [https://www.youtube.com/@hitechmobile-i4e](https://www.youtube.com/@hitechmobile-i4e) (`HI-TECH Mobile`)
- **Facebook**: [https://www.facebook.com/share/19Yd49RPZF/?mibextid=wwXIfr](https://www.facebook.com/share/19Yd49RPZF/?mibextid=wwXIfr)

---

## 2. Key Features

- **Brand Design System**: Black (`#070709`), Rich Gold / Yellow (`#FFD400`, `#FFB800`), Crisp White, with subtle cyan accents.
- **Immediate Conversion Above the Fold**: Direct WhatsApp, Call, and Explore Services buttons visible instantly on hero without scrolling.
- **Sticky Header & Mobile Drawer**: Transparent on hero, solid backdrop-blur on scroll; fully keyboard-navigable drawer with ESC and outside-click close.
- **Trust Strip**: 5 genuine business pillars (Latest Mobiles, Accessories, Repair Service, Exchange, Direct WhatsApp).
- **8 Dedicated Service Cards**:
  1. Mobile Phones
  2. Mobile Accessories
  3. Mobile Repair
  4. Display / Screen Service
  5. Battery Service
  6. Charging / Software Issues
  7. Phone Exchange
  8. Upgrade Assistance
- **Dynamic Mobile Phones Catalogue**:
  - Filter by category: *All Mobiles*, *Featured Mobiles*, *Popular Brands*, *Latest Arrivals*.
  - Filter by brand: *All, Apple, Samsung, OnePlus, Xiaomi, vivo, OPPO, realme, Other*.
  - Live instant search bar.
  - Transparent pricing: Displays `"Ask Price"` and `"Check Availability"` with automated pre-filled WhatsApp enquiry links.
- **Mobile Accessories Showcase**: Covers, Fast Chargers, Braided Data Cables, 9H Tempered Glass, TWS Earbuds, Neckbands, Power Banks, Smartwatches.
- **Mobile Repair & Live WhatsApp Enquiry Form**: Validates customer details and opens a pre-formatted repair ticket in WhatsApp without pretending to be a database.
- **4-Step Phone Exchange Walkthrough**: Clear, realistic trade-in guidance.
- **Store Offers & Updates**: Truthful announcements without fake discounts or artificial timers.
- **Social Media Showcase**: Configured social cards for Instagram, YouTube, and Facebook.
- **Interactive Lightbox Gallery**: Masonry display of storefront, smartphone units, and repair workbench with fullscreen viewer, arrow controls, and ESC close.
- **Pulsing WhatsApp Floating Button** & **Mobile Sticky Bottom Action Bar** (`WHATSAPP`, `CALL`, `VISIT`) with iOS safe-area support.
- **Local SEO & Schema.org**: JSON-LD `LocalBusiness` structured data, Open Graph cards, Twitter metadata, `sitemap.xml`, and `robots.txt`.

---

## 3. Folder Structure

```text
hitech-mobile-hub/
├── index.html                   # Master semantic HTML5 document
├── 404.html                     # Custom 404 error page
├── robots.txt                   # Crawler directives
├── sitemap.xml                  # XML sitemap
├── site.webmanifest             # PWA metadata & theme configuration
├── README.md                    # Documentation
├── LICENSE                      # MIT License
├── render.yaml                  # Render Static Site blueprint
├── .github/
│   └── workflows/
│       └── pages.yml            # GitHub Pages automated deployment
├── assets/
│   ├── favicon/
│   │   └── favicon.svg          # High-resolution vector favicon
│   ├── logo/
│   │   ├── logo.svg             # Full brand horizontal logo
│   │   └── logo-icon.svg        # Compact app icon logo
│   ├── icons/                   # Standalone SVG icon set
│   └── images/
│       ├── hero/
│       │   └── hero-phone.svg   # Handcrafted retail smartphone centerpiece
│       ├── products/            # Vector phone models & accessory artwork
│       ├── services/            # 8 service illustrations
│       ├── gallery/             # High-res storefront & workbench visuals
│       └── social/              # Instagram, YouTube, Facebook & OG banners
├── css/
│   ├── variables.css            # Color tokens, typography clamps, spacing scale
│   ├── reset.css                # CSS reset
│   ├── base.css                 # Typography & accessibility helpers
│   ├── layout.css               # Header, mobile drawer, footer, sticky bars
│   ├── components.css           # Buttons, cards, badges, lightbox, inputs
│   ├── sections.css             # Section-specific layouts and rhythm
│   ├── responsive.css           # Breakpoints (320px to 1920px)
│   └── animations.css           # Transitions & prefers-reduced-motion support
├── js/
│   ├── config.js                # Central business configuration (SINGLE TRUTH)
│   ├── main.js                  # DOM orchestrator & runtime bootstrap
│   ├── navigation.js            # Sticky header & accessible mobile drawer
│   ├── whatsapp.js              # URL encoder & message builders
│   ├── products.js              # Mobiles & accessories DOM renderers
│   ├── filters.js               # Category, brand, and search filter logic
│   ├── gallery.js               # Gallery filter & accessible lightbox modal
│   ├── animations.js            # IntersectionObserver scroll reveal
│   ├── forms.js                 # Front-end repair enquiry validator & WhatsApp redirect
│   └── seo.js                   # Dynamic Schema.org injection
├── data/
│   ├── products.js              # Mobiles and accessories catalogue data
│   ├── services.js              # The 8 service items
│   ├── offers.js                # Shop updates and real promotional perks
│   └── gallery.js               # Photo gallery records & captions
└── optional/
    └── backend-plan.md          # Future REST API & Admin database roadmap
```

---

## 4. Local Testing & Development

Run the website locally using any standard static file server:

### Option A: Python Built-in Server (Recommended)
```bash
# Navigate to the project directory
cd hitech-mobile-hub

# Start local server on port 8000
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Option B: Node.js (npx serve or live-server)
```bash
npx serve .
```

---

## 5. How to Edit Business Information

All business phone numbers, WhatsApp links, social accounts, and location details are centralized in **one single file**:

📁 `js/config.js`

```javascript
const SHOP_CONFIG = {
  name: "HI-TECH Mobile Hub",
  tagline: "Your Mobile, Our Priority",
  city: "Hansi",
  state: "Haryana",
  country: "India",
  locationShort: "Hansi, Haryana",
  locationFull: "Hansi, Haryana, India",

  // Phone number (update here to change across entire site)
  phone: "+918607777717",
  phoneRaw: "918607777717",
  phoneDisplay: "+91 86077 77717",

  // WhatsApp
  whatsapp: "918607777717",

  // Social URLs
  instagram: "https://www.instagram.com/hitechmobile77/",
  facebook: "https://www.facebook.com/share/19Yd49RPZF/?mibextid=wwXIfr",
  youtube: "https://www.youtube.com/@hitechmobile-i4e",

  // Optional: Add Google Maps link when available
  maps: ""
};
```
> **Note**: You do not need to hunt down phone numbers or links in HTML files. Changing `SHOP_CONFIG` automatically propagates across the header, hero, footer, sticky bars, and Schema.org structured data!

---

## 6. How to Edit Products, Offers & Gallery

All dynamic content is cleanly decoupled in the `data/` directory:

### Adding or Updating a Phone (`data/products.js`)
Add a new object to `PRODUCTS_DATA.mobiles`:
```javascript
{
  id: "phone-new-model",
  brand: "Samsung",
  name: "Samsung Galaxy S25 5G",
  tagline: "Next-Gen Galaxy AI",
  description: "Dynamic AMOLED display, Snapdragon processor, pro-grade camera.",
  image: "assets/images/products/phone-samsung.svg",
  price: null,               // Set integer like 79999 or keep null for "Ask Price"
  priceVisible: false,       // Set true if you wish to display actual price
  availability: "Available in Shop",
  badge: "Latest Arrival",
  category: "latest",        // "featured", "popular", or "latest"
  featured: true,
  specs: ["8GB RAM", "256GB Storage", "50MP Triple Camera"]
}
```

### Adding an Announcement (`data/offers.js`)
Add a new record to `OFFERS_DATA`:
```javascript
{
  id: "offer-05",
  title: "Diwali Festive Upgrade Scheme",
  category: "Special Offers",
  badge: "Festive Deal",
  date: "October Special",
  active: true,
  description: "Special exchange bonuses and free protective combo on all smartphone purchases.",
  image: "assets/images/gallery/gallery-unboxing-desk.svg",
  ctaText: "Enquire on WhatsApp",
  whatsappMessage: "Hi HI-TECH Mobile Hub, I want to ask about the Diwali festive offers."
}
```

---

## 7. Deployment Instructions

### A. Deploy to GitHub Pages
1. Push this repository to GitHub.
2. In your repository on GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions** (the included `.github/workflows/pages.yml` will deploy automatically on push) OR choose **Deploy from a branch** and select `main` / `hitech-mobile-hub`.
4. Your site will be live at `https://<username>.github.io/<repository-name>/`.
> Because all asset paths use clean relative URLs (`css/...`, `assets/...`), the site works seamlessly from repository subpaths.

### B. Deploy to Render Static Site
1. Go to [Render Dashboard](https://dashboard.render.com/) and click **New +** > **Static Site**.
2. Connect your Git repository.
3. Configure settings:
   - **Name**: `hitech-mobile-hub`
   - **Branch**: `main`
   - **Build Command**: *(leave empty)*
   - **Publish Directory**: `hitech-mobile-hub` (or `.` if repo root)
4. Click **Create Static Site**.

### C. Deploy to Netlify / Vercel / Cloudflare Pages
- **Build command**: *(leave empty)*
- **Output / Publish directory**: `hitech-mobile-hub` (or `.`)

---

## 8. Custom Domain Setup

1. In your domain registrar (GoDaddy, Namecheap, Cloudflare), create a DNS `CNAME` record pointing to your hosting provider:
   - Host: `www`
   - Target: `<your-site>.github.io` or `<your-site>.onrender.com`
2. Add an `A` record pointing root `@` to the host's IP addresses.
3. In `js/config.js`, update `SHOP_CONFIG.website` with your live custom domain URL (e.g., `https://www.hitechmobilehub.com/`).

---

## 9. Performance & Accessibility Verification

- **Pure Vanilla JS**: Zero heavyweight frameworks (React/Vue/Angular), zero bloat.
- **Fast First Contentful Paint (FCP)**: Critical styles and responsive SVGs load instantaneously.
- **Keyboard & Screen Reader Accessible**: Proper ARIA landmark regions, focus indicators, keyboard traps, and `prefers-reduced-motion` compliance.
- **Clean Fallbacks**: Missing images gracefully fallback to styled vector device artwork.

---

## 10. License
Released under the [MIT License](LICENSE). &copy; 2026 HI-TECH Mobile Hub.
