# HI-TECH MOBILE HUB — FUTURE BACKEND ARCHITECTURE PLAN

## Overview
This document outlines the phased roadmap for attaching an optional REST/GraphQL backend and Admin Dashboard to **HI-TECH Mobile Hub** without breaking static hosting or rewriting frontend presentation code.

---

## 1. Architectural Principles
1. **Zero UI Disruption**: The frontend data layer (`data/products.js`, `data/services.js`, `data/offers.js`, `data/gallery.js`) is decoupled from rendering logic (`js/products.js`, `js/gallery.js`). 
2. **Graceful Fallback**: If backend services become unavailable, the frontend can instantly fall back to bundled static JSON/JS cache.
3. **Stateless Authentication**: Admin endpoints use JWT (JSON Web Tokens) or session cookies with role-based access control.
4. **Lightweight & Low Maintenance**: Recommended stack is Node.js/Express, Go, or Python FastAPI paired with PostgreSQL / SQLite.

---

## 2. API Contract Specification

### Base URL
`https://api.hitechmobilehub.com/v1` or `/api/v1`

### A. Products API
- `GET /api/v1/products`
  - Query parameters: `?category=all&brand=Samsung&search=s24&limit=20`
  - Returns: Array of product records matching current `PRODUCTS_DATA.mobiles` schema.
- `GET /api/v1/products/:id`
  - Returns detailed product metadata.
- `POST /api/v1/admin/products` *(Auth Required)*
  - Create a new phone model or accessory.
- `PUT /api/v1/admin/products/:id` *(Auth Required)*
  - Update stock status, price visibility, badges.
- `DELETE /api/v1/admin/products/:id` *(Auth Required)*

### B. Offers & Announcements API
- `GET /api/v1/offers`
  - Returns active seasonal offers and shop updates matching `OFFERS_DATA`.
- `POST /api/v1/admin/offers` *(Auth Required)*
- `PUT /api/v1/admin/offers/:id` *(Auth Required)*

### C. Gallery API
- `GET /api/v1/gallery`
  - Query parameters: `?category=Shop`
  - Returns image items matching `GALLERY_DATA`.
- `POST /api/v1/admin/gallery` *(Auth Required)*
  - Handles Cloudinary / S3 / R2 image uploads.

### D. Enquiries & Repair Bookings API
- `POST /api/v1/enquiries/repair`
  - Body:
    ```json
    {
      "customerName": "Ramesh Kumar",
      "mobileNumber": "9812345678",
      "brand": "Samsung",
      "model": "Galaxy A52",
      "problem": "Display cracked",
      "source": "web"
    }
    ```
  - Dispatches automated WhatsApp notification or SMS via Twilio/Gupshup to store staff while saving lead to Admin database.

### E. Admin Authentication
- `POST /api/v1/auth/login`
  - Payload: `{ username, password }`
  - Response: `{ token, expiresAt, admin: { name, role } }`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/auth/logout`

---

## 3. Database Schema (PostgreSQL / SQLite)

```sql
-- Products Table
CREATE TABLE products (
    id VARCHAR(64) PRIMARY KEY,
    type VARCHAR(20) NOT NULL, -- 'mobile' or 'accessory'
    brand VARCHAR(64) NOT NULL,
    name VARCHAR(128) NOT NULL,
    tagline VARCHAR(255),
    description TEXT,
    image_url TEXT NOT NULL,
    price INTEGER DEFAULT NULL,
    price_visible BOOLEAN DEFAULT FALSE,
    availability VARCHAR(64) DEFAULT 'In Store',
    badge VARCHAR(64) DEFAULT '',
    category VARCHAR(32) DEFAULT 'featured',
    featured BOOLEAN DEFAULT FALSE,
    specs JSONB DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Offers Table
CREATE TABLE offers (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(128) NOT NULL,
    category VARCHAR(64) NOT NULL,
    badge VARCHAR(64),
    date_str VARCHAR(64),
    active BOOLEAN DEFAULT TRUE,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    cta_text VARCHAR(64) DEFAULT 'Claim on WhatsApp',
    whatsapp_message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Repair Enquiries Table
CREATE TABLE repair_enquiries (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(128) NOT NULL,
    mobile_number VARCHAR(20) NOT NULL,
    brand VARCHAR(64) NOT NULL,
    model VARCHAR(128) NOT NULL,
    problem TEXT NOT NULL,
    status VARCHAR(32) DEFAULT 'new', -- 'new', 'in_review', 'repaired', 'closed'
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 4. Frontend Integration Adapter

To connect the frontend to the backend later, simply replace `data/*.js` imports with a single API fetch wrapper:

```javascript
// Example in js/api-adapter.js
const API_URL = "https://api.hitechmobilehub.com/v1";

async function fetchProductsFromBackend() {
  try {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    ProductsRenderer.renderMobiles(data.mobiles);
  } catch (err) {
    console.warn("Using offline fallback static data:", err);
    ProductsRenderer.renderMobiles(PRODUCTS_DATA.mobiles);
  }
}
```

The UI components (`product-card`, `service-card`, `gallery-item`) require **no alterations**.
