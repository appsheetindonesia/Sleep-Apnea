# Technical Requirements Document (TRD)
## CPAPINDO — cpapindo.com

**Versi Dokumen:** 1.0  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Engineering  
**Status:** Draft

---

## 1. Arsitektur Sistem (System Architecture)

### 1.1 High-Level Architecture
```
┌─────────────────────────────────────────────────────┐
│              Shopify CDN + Edge Network               │
│           Global CDN, Image Optimization              │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│              Shopify Online Store 2.0                 │
│     Liquid Theme + Shopify Apps + Custom Sections     │
│     Hosting: Shopify (managed)                        │
└───────┬──────────────┬──────────────┬───────────────┘
        │              │              │
┌───────▼──┐  ┌───────▼──┐  ┌───────▼──────────────┐
│Shopify   │  │ Custom   │  │ External Services     │
│Payments  │  │ Backend  │  │ ├── WhatsApp API      │
│& Checkout│  │ (Node.js)│  │ ├── Email (SendGrid)  │
│          │  │ on VPS   │  │ ├── Analytics (GA4)   │
│          │  │          │  │ └── Meta Pixel        │
└──────────┘  └──────────┘  └──────────────────────┘
        │              │
┌───────▼──┐  ┌───────▼──────────────────────────┐
│Shopify   │  │ Sleep Test Booking System          │
│Admin     │  │ (Custom App / Webhook Handler)     │
│Dashboard │  │ ├── Booking Form                   │
│          │  │ ├── Notification (WA + Email)      │
│          │  │ └── Scheduling (Google Calendar)   │
└──────────┘  └───────────────────────────────────┘
```

### 1.2 Technology Stack

| Layer | Technology | Alasan |
|-------|-----------|--------|
| **E-commerce Platform** | Shopify (Advanced Plan) | Full e-commerce, payment, shipping built-in |
| **Theme** | Shopify Online Store 2.0 (Dawn base) | Modern, fast, section-based |
| **Custom Sections** | Liquid + JavaScript | Hero carousel, therapy sections |
| **Shopify Apps** | Bundle App, Review App, etc. | Extend functionality |
| **Custom Backend** | Node.js (Express) | Sleep test booking, notifications |
| **Database** | PostgreSQL (Supabase) | Sleep test bookings, therapy data |
| **Hosting (Custom)** | VPS (DigitalOcean/Hetzner) | Backend services |
| **WhatsApp** | WhatsApp Business API (360dialog) | Customer support |
| **Email** | Shopify Email + SendGrid | Transactional + marketing |
| **Analytics** | GA4 + Meta Pixel | Tracking + retargeting |
| **Payment** | Shopify Payments + Midtrans | Full payment options |
| **Shipping** | Shopify Shipping + Shipper.id | Multi-carrier |

---

## 2. Shopify Theme Architecture

### 2.1 Theme Structure
```
theme/
├── assets/
│   ├── carousel.js              # Hero carousel logic
│   ├── bundle-deal.js           # Bundle pricing display
│   ├── whatsapp-button.js       # WhatsApp FAB
│   ├── custom.css               # Custom styles
│   └── images/
│       ├── hero-banners/        # 10 carousel banners
│       ├── therapy-sections/    # Personalized therapy images
│       └── icons/
├── config/
│   ├── settings_schema.json     # Theme settings
│   └── settings_data.json       # Current settings
├── layout/
│   ├── theme.liquid             # Main layout
│   └── password.liquid
├── locales/
│   ├── id.json                  # Indonesian
│   └── en.json                  # English
├── sections/
│   ├── hero-carousel.liquid     # Custom hero carousel
│   ├── personalized-therapy.liquid
│   ├── mask-fitting.liquid
│   ├── therapy-data-review.liquid
│   ├── technical-support.liquid
│   ├── hst-promo.liquid
│   ├── featured-products.liquid
│   ├── bundle-deals.liquid
│   ├── product-reviews.liquid
│   └── whatsapp-fab.liquid
├── snippets/
│   ├── product-card.liquid      # Reusable product card
│   ├── vendor-badge.liquid      # Vendor label (ResMed/BMC)
│   ├── price-display.liquid     # Rp format price
│   ├── bundle-price.liquid      # Bundle vs individual price
│   └── seo-meta.liquid          # SEO meta tags
└── templates/
    ├── index.liquid             # Homepage
    ├── product.liquid           # Product detail
    ├── collection.liquid        # Collection listing
    ├── page.liquid              # Static pages (HST, Therapy)
    ├── blog.liquid              # Blog listing
    ├── article.liquid           # Blog article
    ├── cart.liquid              # Cart page
    ├── customers/               # Customer account
    └── page.hst-booking.liquid  # HST booking form
```

### 2.2 Custom Sections Detail

#### Hero Carousel Section
```liquid
<!-- sections/hero-carousel.liquid -->
<div class="hero-carousel" data-autoplay="5000">
  <div class="carousel-track">
    {% for block in section.blocks %}
      <div class="carousel-slide" {{ block.shopify_attributes }}>
        <img src="{{ block.settings.image | image_url: width: 1920 }}" 
             alt="{{ block.settings.title }}"
             loading="{% if forloop.first %}eager{% else %}lazy{% endif %}">
        <div class="slide-content">
          <h2>{{ block.settings.title }}</h2>
          <a href="{{ block.settings.link }}" class="btn-cta">
            {{ block.settings.cta_text | default: "Shop Now" }}
          </a>
        </div>
      </div>
    {% endfor %}
  </div>
  <button class="carousel-prev" aria-label="Previous">‹</button>
  <button class="carousel-next" aria-label="Next">›</button>
  <div class="carousel-dots">
    {% for block in section.blocks %}
      <button class="dot {% if forloop.first %}active{% endif %}" 
              data-index="{{ forloop.index0 }}"></button>
    {% endfor %}
  </div>
</div>

{% schema %}
{
  "name": "Hero Carousel",
  "settings": [
    {
      "type": "range",
      "id": "autoplay_speed",
      "label": "Autoplay Speed (ms)",
      "min": 3000,
      "max": 10000,
      "step": 1000,
      "default": 5000
    }
  ],
  "blocks": [
    {
      "type": "slide",
      "name": "Slide",
      "settings": [
        { "type": "image_picker", "id": "image", "label": "Image" },
        { "type": "text", "id": "title", "label": "Title" },
        { "type": "url", "id": "link", "label": "Link" },
        { "type": "text", "id": "cta_text", "label": "CTA Text", "default": "Shop Now" }
      ]
    }
  ],
  "max_blocks": 10
}
{% endschema %}
```

#### Vendor Badge Snippet
```liquid
<!-- snippets/vendor-badge.liquid -->
{% case product.vendor %}
  {% when 'ResMed' %}
    <span class="vendor-badge vendor-resmed">ResMed</span>
  {% when 'BMC' %}
    <span class="vendor-badge vendor-bmc">BMC</span>
  {% when 'Nox Medical' %}
    <span class="vendor-badge vendor-nox">Nox Medical</span>
  {% when 'Yuwell' %}
    <span class="vendor-badge vendor-yuwell">Yuwell</span>
  {% else %}
    <span class="vendor-badge vendor-other">{{ product.vendor }}</span>
{% endcase %}
```

#### Price Display Snippet (Rp Format)
```liquid
<!-- snippets/price-display.liquid -->
<span class="price" aria-label="Price">
  {% if product.compare_at_price > product.price %}
    <span class="price-compare">
      <span class="visually-hidden">Regular price</span>
      <s>{{ product.compare_at_price | money_without_trailing_zeros }}</s>
    </span>
    <span class="price-sale">
      <span class="visually-hidden">Sale price</span>
      {{ product.price | money_without_trailing_zeros }}
    </span>
  {% else %}
    <span class="price-regular">
      {{ product.price | money_without_trailing_zeros }}
    </span>
  {% endif %}
</span>
```

---

## 3. Database Schema (Custom Backend)

### 3.1 Entity Relationship Diagram
```
┌──────────────────┐     ┌──────────────────┐
│  hst_bookings    │     │  therapy_sessions │
│──────────────────│     │──────────────────│
│ id (PK)          │     │ id (PK)          │
│ full_name        │     │ patient_name     │
│ email            │     │ patient_email    │
│ phone            │     │ device_type      │
│ address          │     │ device_brand     │
│ city             │     │ settings (JSON)  │
│ test_date        │     │ therapy_data     │
│ time_preference  │     │ therapist        │
│ medical_history  │     │ next_review      │
│ status           │     │ created_at       │
│ report_url       │     └──────────────────┘
│ report_ready_at  │
│ created_at       │     ┌──────────────────┐
└──────────────────┘     │  notifications   │
                         │──────────────────│
                         │ id (PK)          │
                         │ type (enum)      │
                         │ recipient        │
                         │ message          │
                         │ channel (enum)   │
                         │ status           │
                         │ created_at       │
                         └──────────────────┘
```

### 3.2 Tabel HST Bookings
```sql
CREATE TABLE hst_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    test_date DATE NOT NULL,
    time_preference VARCHAR(20) NOT NULL CHECK (time_preference IN ('sore', 'malam')),
    medical_history TEXT,
    resume_url TEXT,
    status VARCHAR(30) DEFAULT 'baru' CHECK (status IN (
        'baru', 'dikonfirmasi', 'teknisi_dikirim', 'set_up_selesai',
        'pengambilan_data', 'data_terkirim', 'analisa', 'report_selesai', 'selesai'
    )),
    technician_id UUID,
    report_url TEXT,
    report_ready_at TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    whatsapp_notified BOOLEAN DEFAULT FALSE,
    email_notified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_hst_date ON hst_bookings(test_date);
CREATE INDEX idx_hst_status ON hst_bookings(status);
```

### 3.3 Tabel Therapy Sessions
```sql
CREATE TABLE therapy_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_name VARCHAR(255) NOT NULL,
    patient_email VARCHAR(255),
    patient_phone VARCHAR(20),
    device_type VARCHAR(20) NOT NULL CHECK (device_type IN ('CPAP', 'BiPAP', 'APAP')),
    device_brand VARCHAR(100) NOT NULL,
    device_model VARCHAR(100),
    initial_settings JSONB,
    current_settings JSONB,
    therapy_data JSONB,  -- { ahi: float, leak: float, usage_hours: float, compliance: boolean }
    mask_type VARCHAR(50),
    mask_size VARCHAR(20),
    comfort_score INTEGER CHECK (comfort_score >= 1 AND comfort_score <= 10),
    notes TEXT,
    therapist VARCHAR(255),
    last_review_at TIMESTAMP WITH TIME ZONE,
    next_review_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3.4 Tabel Notifications
```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type VARCHAR(50) NOT NULL, -- 'hst_booking', 'hst_reminder', 'therapy_review', 'order_confirmation'
    recipient VARCHAR(255) NOT NULL,
    channel VARCHAR(20) NOT NULL CHECK (channel IN ('whatsapp', 'email', 'sms')),
    subject VARCHAR(500),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
    sent_at TIMESTAMP WITH TIME ZONE,
    error_message TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 4. API Design

### 4.1 REST API Endpoints

#### HST Bookings
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/api/hst-bookings` | Submit HST booking | No |
| GET | `/api/hst-bookings` | List HST bookings | Admin |
| GET | `/api/hst-bookings/:id` | Detail HST booking | Admin |
| PATCH | `/api/hst-bookings/:id/status` | Update status | Admin |

#### Therapy Sessions
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/api/therapy-sessions` | Create therapy session | Admin |
| GET | `/api/therapy-sessions` | List therapy sessions | Admin |
| PATCH | `/api/therapy-sessions/:id` | Update therapy data | Admin |

#### Notifications
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/api/notifications/send` | Send notification | Admin |
| GET | `/api/notifications` | List notifications | Admin |

#### Shopify Webhooks
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/webhooks/orders/create` | Order created | Shopify HMAC |
| POST | `/webhooks/orders/paid` | Order paid | Shopify HMAC |
| POST | `/webhooks/orders/fulfilled` | Order fulfilled | Shopify HMAC |

### 4.2 API Request/Response Examples

#### POST `/api/hst-bookings`
```json
// Request
{
  "full_name": "Rina Wijaya",
  "email": "rina@email.com",
  "phone": "081234567890",
  "address": "Jl. Melati No. 10, RT 01/RW 05, Kel. Menteng, Kec. Menteng, Jakarta Pusat",
  "city": "Jakarta Pusat",
  "test_date": "2026-09-10",
  "time_preference": "malam",
  "medical_history": "Riwayat mendengkur keras, sering terbangun malam"
}

// Response 201
{
  "success": true,
  "data": {
    "id": "uuid-xxx",
    "status": "baru",
    "confirmation_message": "Booking HST Anda telah diterima. Tim kami akan menghubungi Anda untuk konfirmasi jadwal.",
    "whatsapp_number": "+628111212858",
    "created_at": "2026-08-31T10:00:00Z"
  }
}
```

#### POST `/webhooks/orders/create`
```json
// Shopify Webhook Payload
{
  "id": 123456789,
  "order_number": 1001,
  "email": "customer@email.com",
  "total_price": "16500000.00",
  "currency": "IDR",
  "line_items": [
    {
      "title": "BMC M1 Mini Travel Auto CPAP + BMC P6s Nasal Pillow Mask",
      "vendor": "BMC",
      "price": "16500000.00",
      "quantity": 1
    }
  ],
  "shipping_address": {
    "name": "Customer Name",
    "city": "Jakarta Selatan",
    "address1": "Jl. Example No. 1"
  }
}
```

---

## 5. Shopify Apps & Integrations

### 5.1 Required Shopify Apps

| App | Fungsi | Estimasi Biaya |
|-----|--------|---------------|
| **Bundler** | Bundle deal management | $14.99/bulan |
| **Judge.me** | Product reviews | $15/bulan |
| **Shipper.id** | Multi-carrier shipping Indonesia | Gratis / % per order |
| **WhatsApp Chat** | WhatsApp integration | Gratis / $9.99/bulan |
| **SEO Manager** | SEO optimization | $20/bulan |
| **Klaviyo** | Email marketing automation | Gratis hingga 250 contacts |
| **Google Channel** | GA4 + Google Shopping | Gratis |
| **Meta Channel** | Facebook/Instagram Pixel | Gratis |

### 5.2 Custom Shopify App (HST Booking)

```javascript
// Custom app: hst-booking-app
// Install via Shopify CLI or Partner Dashboard

// App Structure
hst-booking-app/
├── web/
│   ├── frontend/
│   │   ├── routes/
│   │   │   ├── HSTBooking.jsx    # Booking form
│   │   │   └── BookingStatus.jsx # Booking status
│   │   └── components/
│   │       ├── BookingForm.jsx
│   │       └── DatePicker.jsx
│   └── backend/
│       ├── routes/
│       │   ├── hstBookings.js
│       │   └── webhooks.js
│       ├── services/
│       │   ├── whatsappService.js
│       │   └── emailService.js
│       └── db/
│           └── prisma/
│               └── schema.prisma
└── shopify.app.toml
```

---

## 6. WhatsApp Integration

### 6.1 WhatsApp Configuration
```typescript
// whatsapp.config.ts
export const whatsappConfig = {
  phoneNumber: process.env.WHATSAPP_PHONE_NUMBER, // 628111212858
  secondaryNumber: '628119113330', // Backup number
  businessName: 'CPAPINDO',
  templates: {
    // HST Notifications
    hstBookingConfirmation: (booking) =>
      `Terima kasih ${booking.fullName}! Booking Home Sleep Test Anda telah diterima.\n\n` +
      `📅 Tanggal: ${booking.testDate}\n` +
      `🕐 Jam: ${booking.timePreference === 'malam' ? 'Sore/Malam' : 'Sore'}\n` +
      `📍 Alamat: ${booking.address}\n\n` +
      `Teknisi kami akan menghubungi Anda untuk konfirmasi.\n` +
      `Hubungi: +62 811 1212 858`,

    hstTechnicianDispatch: (booking) =>
      `Halo ${booking.fullName}, teknisi kami sedang dalam perjalanan ke alamat Anda untuk set-up Home Sleep Test.\n` +
      `Estimasi tiba: 30-60 menit.\n` +
      `Hubungi jika ada perubahan: +62 811 1212 858`,

    hstReportReady: (booking) =>
      `Halo ${booking.fullName}! Hasil Home Sleep Test Anda sudah selesai.\n\n` +
      `📄 Laporan bisa diunduh di: ${booking.reportUrl}\n\n` +
      `Silakan buat janji konsultasi untuk membahas hasil dengan dokter kami.\n` +
      `WhatsApp: +62 811 1212 858`,

    // Product Inquiries
    productInquiry: (productName) =>
      `Halo CPAPIndo, saya tertarik dengan ${productName}.\n` +
      `Mohon informasi harga, spesifikasi, dan ketersediaan.`,

    bundleInquiry: (bundleName) =>
      `Halo CPAPIndo, saya tertarik dengan bundle deal ${bundleName}.\n` +
      `Mohon informasi harga dan apa saja yang termasuk.`,

    // Service Inquiries
    maskFitting: 'Halo CPAPIndo, saya ingin melakukan Mask Fitting. Mohon jadwal yang tersedia.',
    therapyReview: 'Halo CPAPIndo, saya ingin konsultasi Personalized Therapy untuk alat CPAP saya.',
    technicalSupport: 'Halo CPAPIndo, saya ingin servis/maintenance alat CPAP saya.',
    general: 'Halo CPAPIndo, saya ingin bertanya tentang produk dan layanan Anda.',
  },
};
```

---

## 7. Sleep Test Booking Flow

### 7.1 Complete HST Booking Process
```
1. Customer fills HST booking form
       │
       ▼
2. Form submitted → Custom backend API
       │
       ├── Save to database (status: "baru")
       │
       ├── Send WhatsApp notification to admin
       │
       └── Send WhatsApp confirmation to customer
               │
               ▼
3. Admin reviews & confirms booking
       │
       ├── Update status: "dikonfirmasi"
       │
       └── Assign technician
               │
               ▼
4. Technician dispatched (H-1 day)
       │
       ├── Update status: "teknisi_dikirim"
       │
       └── WhatsApp notification to customer
               │
               ▼
5. Technician sets up equipment (evening)
       │
       └── Update status: "set_up_selesai"
               │
               ▼
6. Technician collects data (next morning)
       │
       └── Update status: "pengambilan_data"
               │
               ▼
7. Data sent to Singapore for RPSGT analysis
       │
       └── Update status: "data_terkirim"
               │
               ▼
8. RPSGT analysis in progress
       │
       └── Update status: "analisa"
               │
               ▼
9. Report ready (7 working days)
       │
       ├── Update status: "report_selesai"
       │
       ├── Generate report URL
       │
       └── WhatsApp notification to customer
               │
               ▼
10. Booking complete
        │
        └── Update status: "selesai"
```

---

## 8. SEO & Performance

### 8.1 SEO Configuration
```liquid
<!-- snippets/seo-meta.liquid -->
<title>{{ page_title }} — CPAPINDO | Distributor Resmi CPAP & Diagnostik Tidur</title>
<meta name="description" content="{{ page_description | default: 'Distributor resmi CPAP & sistem Diagnostik Tidur di Indonesia. Distributor eksklusif Nox Medical, serta perangkat ResMed, BMC & Yuwell.' }}">

<!-- Open Graph -->
<meta property="og:title" content="{{ page_title }}">
<meta property="og:description" content="{{ page_description }}">
<meta property="og:image" content="{{ page_image | default: settings.og_image | image_url }}">
<meta property="og:url" content="{{ canonical_url }}">
<meta property="og:type" content="website">

<!-- Structured Data (Product) -->
{% if template == 'product' %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{{ product.title }}",
  "description": "{{ product.description | strip_html | truncatewords: 50 }}",
  "image": "{{ product.featured_image | image_url }}",
  "brand": {
    "@type": "Brand",
    "name": "{{ product.vendor }}"
  },
  "offers": {
    "@type": "Offer",
    "price": "{{ product.price | money_without_currency | remove: ',' }}",
    "priceCurrency": "IDR",
    "availability": "{% if product.available %}https://schema.org/InStock{% else %}https://schema.org/OutOfStock{% endif %}"
  }
}
</script>
{% endif %}
```

### 8.2 Performance Targets
| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | ≥ 85 | Lighthouse |
| LCP | < 3.0s | Web Vitals |
| FID | < 100ms | Web Vitals |
| CLS | < 0.1 | Web Vitals |
| Shopify Speed Score | > 50 | Shopify Admin |

### 8.3 Image Optimization
```liquid
<!-- Responsive image with lazy loading -->
<img src="{{ product.featured_image | image_url: width: 600 }}"
     srcset="{{ product.featured_image | image_url: width: 300 }} 300w,
             {{ product.featured_image | image_url: width: 600 }} 600w,
             {{ product.featured_image | image_url: width: 900 }} 900w"
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     alt="{{ product.title }}"
     loading="lazy"
     width="600"
     height="450">
```

---

## 9. Security

### 9.1 Security Measures
| Layer | Measure | Detail |
|-------|---------|--------|
| Transport | HTTPS/TLS 1.3 | Shopify built-in SSL |
| Payment | PCI-DSS Level 1 | Via Shopify Payments |
| Checkout | Shopify Checkout | PCI compliant, fraud analysis |
| Webhooks | HMAC Verification | Verify Shopify webhook signatures |
| API | Rate Limiting | 50 req/sec (Shopify) + custom backend limits |
| Auth (Admin) | Shopify Staff Accounts | Role-based access |
| Data | Encryption at rest | Shopify + Supabase |
| Headers | Security Headers | Shopify built-in + custom CSP |
| Content | XSS Prevention | Liquid auto-escaping |

### 9.2 Shopify Webhook Security
```javascript
// Verify Shopify webhook HMAC
const crypto = require('crypto');

function verifyShopifyWebhook(data, hmacHeader) {
  const hash = crypto
    .createHmac('sha256', process.env.SHOPIFY_WEBHOOK_SECRET)
    .update(data, 'utf8')
    .digest('base64');
  return hash === hmacHeader;
}
```

---

## 10. Deployment

### 10.1 Shopify Theme Deployment
```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Login
shopify login

# Push theme
shopify theme push

# Push to draft
shopify theme push --unpublished

# Pull remote theme
shopify theme pull
```

### 10.2 Custom Backend Deployment
```yaml
# docker-compose.yml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - WHATSAPP_API_KEY=${WHATSAPP_API_KEY}
      - SHOPIFY_WEBHOOK_SECRET=${SHOPIFY_WEBHOOK_SECRET}
      - SENDGRID_API_KEY=${SENDGRID_API_KEY}
    restart: always
```

### 10.3 Environment Variables
```env
# Shopify
SHOPIFY_STORE_DOMAIN=cpapindo.myshopify.com
SHOPIFY_ACCESS_TOKEN=shpat_xxxx
SHOPIFY_WEBHOOK_SECRET=your-webhook-secret

# Custom Backend
DATABASE_URL=postgresql://user:pass@host:5432/cpapindo
JWT_SECRET=your-jwt-secret

# WhatsApp
WHATSAPP_API_KEY=your-360dialog-key
WHATSAPP_PHONE_NUMBER=628111212858

# Email
SENDGRID_API_KEY=SG.xxxx
SENDGRID_FROM=imn@cpapindo.co.id

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=xxxxxxxxxx
```

### 10.4 Monitoring
| Tool | Purpose | Free Tier |
|------|---------|-----------|
| Shopify Analytics | E-commerce metrics | ✅ (Built-in) |
| GA4 | Web analytics | ✅ |
| Shopify Flow | Order automation | ✅ (Built-in) |
| UptimeRobot | Uptime monitoring | ✅ (50 monitors) |
| Sentry | Error tracking (backend) | ✅ (5K/mo) |
| Meta Events Manager | Pixel tracking | ✅ |

---

## 11. Testing Strategy

### 11.1 Testing Pyramid
```
        /  E2E Tests  \          ← 10% (Playwright)
       / Integration Tests \     ← 30% (Jest + Shopify API)
      /    Unit Tests         \  ← 60% (Jest)
```

### 11.2 Key Test Cases

| Module | Test Type | Case |
|--------|-----------|------|
| Product Listing | E2E | Load collection, filter, sort |
| Product Detail | E2E | View product, select variant, add to cart |
| Cart & Checkout | E2E | Full checkout flow with test payment |
| Bundle Deal | Unit | Bundle price < sum of individual items |
| Bundle Deal | Unit | Correct discount calculation |
| HST Booking | Unit | Validate required fields |
| HST Booking | Unit | Date must be 3+ days from now |
| HST Booking | Integration | POST booking → save to DB + send WhatsApp |
| WhatsApp URL | Unit | Generate correct wa.me URL |
| Price Format | Unit | Rp format with thousand separator |
| Vendor Badge | Unit | Correct badge for each vendor |
| Webhook | Integration | Shopify order webhook → process correctly |
| SEO | E2E | Meta tags, structured data present |

---

## 12. Scalability Considerations

### 12.1 Current Capacity
| Resource | Spec | Capacity |
|----------|------|----------|
| Shopify | Advanced Plan | Unlimited products, 100K sessions/mo |
| Custom Backend | VPS 1GB RAM | 50 concurrent HST bookings |
| Database (Supabase) | Free | 500MB, 50K rows |
| WhatsApp API | 360dialog | 1000 conversations/mo |
| Storage | Shopify + Cloudflare | Unlimited images |

### 12.2 Scaling Triggers
| Metric | Current Limit | Action |
|--------|--------------|--------|
| HST Bookings | 500/month (DB) | Upgrade Supabase |
| WhatsApp messages | 1000/mo | Upgrade 360dialog |
| Shopify sessions | 100K/mo | Shopify handles auto-scale |
| Concurrent users | 50 (backend) | Upgrade VPS RAM |

---

## 13. Technology Decision Records

### ADR-001: Shopify vs Custom E-commerce
- **Decision:** Shopify
- **Reason:** Fast to market, PCI compliance built-in, managed hosting, rich app ecosystem
- **Trade-off:** Monthly fee + transaction fees vs full control

### ADR-002: Shopify Theme vs Headless Commerce
- **Decision:** Shopify Theme (not headless)
- **Reason:** Faster development, simpler deployment, Shopify checkout native
- **Trade-off:** Less frontend flexibility vs headless (Remix/Next.js)

### ADR-003: Custom Backend vs Shopify Extensions
- **Decision:** Custom Node.js backend alongside Shopify
- **Reason:** Sleep test booking needs custom workflow, not native Shopify
- **Trade-off:** Additional hosting cost vs limited Shopify extension capabilities

### ADR-004: Bundler App vs Custom Bundle
- **Decision:** Bundler App (Shopify)
- **Reason:** Proven app, handles discount logic, auto-updates
- **Trade-off:** Monthly fee vs development time for custom solution
