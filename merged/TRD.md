# Technical Requirements Document (TRD)
## Unified Sleep Healthcare Platform
### Gabungan & Penyempurnaan: SMC Sleep Solution × Resindo Medika × CPAPINDO

**Versi Dokumen:** 2.0 (Merged & Enhanced)  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Engineering  
**Status:** Final

---

## 1. Arsitektur Sistem (System Architecture)

### 1.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CDN (Cloudflare)                          │
│              Static Assets + Edge Caching + DDoS Protection     │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                  FRONTEND (Next.js 14 - App Router)              │
│                                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ Education │ │Screening │ │ Diagnosis │ │  Clinic  │          │
│  │  & Blog   │ │  Wizard  │ │  Pages    │ │ Booking  │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │E-commerce│ │ Therapy  │ │ Retention │ │  Admin   │          │
│  │ (Hybrid) │ │  Pages   │ │  & Auth   │ │  Panel   │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                  │
│  i18n: next-intl (ID/EN)  │  UI: Tailwind + shadcn/ui          │
│  Hosting: Vercel (Edge)    │  State: React + Zustand             │
└────────────────────────────┬────────────────────────────────────┘
                             │ REST API + Webhooks
┌────────────────────────────▼────────────────────────────────────┐
│                  BACKEND (NestJS - Node.js)                      │
│                                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ Screening │ │ Booking  │ │  Sleep   │ │ Therapy  │          │
│  │  Module   │ │  Module  │ │  Report  │ │  Module  │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │  Auth    │ │ WhatsApp │ │  Email   │ │Analytics │          │
│  │  Module  │ │ Service  │ │ Service  │ │ Service  │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                  │
│  ORM: Prisma  │  Validation: Zod  │  Auth: JWT                  │
│  Hosting: VPS (DigitalOcean)  │  Port: 3001                     │
└───────┬──────────────┬───────────────┬──────────────┬───────────┘
        │              │               │              │
┌───────▼──────┐ ┌─────▼───────┐ ┌────▼─────┐ ┌────▼──────────┐
│  PostgreSQL  │ │   Shopify   │ │WhatsApp  │ │  Email SMTP   │
│  (Supabase)  │ │   Admin     │ │ Business │ │  (SendGrid)   │
│              │ │   API       │ │ API      │ │               │
│  Patients    │ │  Products   │ │(360dialog│ │  Transactional│
│  Screenings  │ │  Orders     │ │  )       │ │  Marketing    │
│  Bookings    │ │  Inventory  │ │          │ │               │
│  Reports     │ │  Customers  │ │          │ │               │
│  Therapy     │ │             │ │          │ │               │
└──────────────┘ └─────────────┘ └──────────┘ └───────────────┘
        │
┌───────▼──────┐
│  Headless    │
│  CMS         │
│  (Sanity)    │
│              │
│  Blog Posts  │
│  Pages       │
│  Media       │
└──────────────┘
```

### 1.2 Technology Stack — Consolidated

| Layer | Technology | Version | Alasan Pilihan |
|-------|-----------|---------|---------------|
| **Frontend Framework** | Next.js | 14+ (App Router) | SSR/SSG, SEO, React, i18n |
| **Styling** | Tailwind CSS + shadcn/ui | 3.4+ | Rapid development, accessible |
| **i18n** | next-intl | 3.x | Native App Router support |
| **State Management** | Zustand | 4.x | Lightweight, simple API |
| **Backend Framework** | NestJS | 10.x | TypeScript, modular, scalable |
| **ORM** | Prisma | 5.x | Type-safe, migrations, PostgreSQL |
| **Database** | PostgreSQL | 15+ | ACID, JSONB, full-text search |
| **Database Host** | Supabase | - | Free tier, real-time, auth |
| **CMS** | Sanity | - | Real-time, i18n, hosted |
| **E-commerce** | Shopify | Advanced | PCI, managed, checkout |
| **CDN** | Cloudflare | - | Performance, security, DDoS |
| **Frontend Host** | Vercel | - | Edge, zero-config, i18n |
| **Backend Host** | DigitalOcean VPS | - | Control, cost-effective |
| **WhatsApp** | 360dialog | - | Official API, Indonesia-focused |
| **Payment** | Midtrans | - | Best Indonesia coverage |
| **Email** | SendGrid | - | Reliable, templates |
| **Analytics** | GA4 + Plausible | - | Tracking + privacy |
| **Error Tracking** | Sentry | - | Real-time error monitoring |
| **Testing** | Jest + Playwright | - | Unit + E2E |
| **CI/CD** | GitHub Actions | - | Automated pipeline |

### 1.3 Architecture Decisions

| Decision | Choice | Alternatives Considered | Reason |
|----------|--------|------------------------|--------|
| Monolith vs Microservices | **Modular Monolith** | Microservices | Simpler deployment, good enough for scale |
| E-commerce: Custom vs Shopify | **Shopify (Hybrid)** | Custom checkout | PCI compliance, managed, faster |
| CMS: Sanity vs Strapi | **Sanity** | Strapi (self-hosted) | Real-time, i18n, less maintenance |
| Database: Supabase vs RDS | **Supabase** | AWS RDS | Free tier, built-in auth, real-time |
| Auth: Custom vs Clerk | **Custom JWT** | Clerk | Full control, no vendor lock-in |
| WhatsApp: Direct vs Twilio | **360dialog** | Twilio | Cost-effective for Indonesia |

---

## 2. Database Schema

### 2.1 Entity Relationship Diagram (Unified)

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    patients     │     │   screenings    │     │    bookings     │
│─────────────────│     │─────────────────│     │─────────────────│
│ id (PK)         │◄────│ patient_id (FK) │     │ id (PK)         │
│ full_name       │     │ id (PK)         │     │ patient_id (FK) │────┐
│ email (UNIQUE)  │     │ stopbang_score  │     │ booking_type    │    │
│ phone           │     │ ess_score       │     │ scheduled_date  │    │
│ date_of_birth   │     │ risk_level      │     │ scheduled_time  │    │
│ gender          │     │ ess_answers     │     │ status          │    │
│ height_cm       │     │ recommendation  │     │ complaint       │    │
│ weight_kg       │     │ status          │     │ notes           │    │
│ neck_cm         │     │ created_at      │     │ created_at      │    │
│ bmi (computed)  │     └─────────────────┘     └─────────────────┘    │
│ insurance       │                                                    │
│ consent_given   │     ┌─────────────────┐     ┌─────────────────┐    │
│ source          │     │  sleep_reports  │     │therapy_sessions │    │
│ created_at      │     │─────────────────│     │─────────────────│    │
└─────────────────┘     │ id (PK)         │     │ id (PK)         │    │
        │               │ patient_id (FK) │─────│ patient_id (FK) │────┘
        │               │ booking_id (FK) │     │ device_type     │
        │               │ test_type       │     │ device_brand    │
        │               │ ahi             │     │ current_settings│
        │               │ min_spo2        │     │ therapy_data    │
        │               │ report_url      │     │ last_review_at  │
        │               │ analyzed_by     │     │ next_review_at  │
        │               │ status          │     │ created_at      │
        │               └─────────────────┘     └─────────────────┘
        │
┌───────▼──────────────────────────┐     ┌─────────────────┐
│         notifications            │     │    products     │
│──────────────────────────────────│     │  (Shopify sync) │
│ id (PK)                          │     │─────────────────│
│ type                             │     │ id (PK)         │
│ recipient                        │     │ shopify_id      │
│ channel (whatsapp/email)         │     │ title           │
│ message                          │     │ vendor          │
│ status                           │     │ category        │
│ created_at                       │     │ price           │
└──────────────────────────────────┘     │ is_active       │
                                         └─────────────────┘
```

### 2.2 Complete SQL Schema

```sql
-- ==========================================
-- UNIFIED SLEEP HEALTHCARE PLATFORM SCHEMA
-- ==========================================

-- PATIENTS (Unified customer entity)
CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(20) CHECK (gender IN ('laki-laki', 'perempuan')),
    height_cm DECIMAL(5,1),
    weight_kg DECIMAL(5,1),
    neck_cm DECIMAL(4,1),
    blood_pressure VARCHAR(10),
    bmi DECIMAL(5,1) GENERATED ALWAYS AS (
        CASE WHEN height_cm > 0 
        THEN weight_kg / ((height_cm/100.0) * (height_cm/100.0))
        ELSE NULL END
    ) STORED,
    insurance_provider VARCHAR(255),
    insurance_number VARCHAR(100),
    consent_given BOOLEAN DEFAULT FALSE,
    consent_at TIMESTAMP WITH TIME ZONE,
    source VARCHAR(50) DEFAULT 'direct',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_patients_email ON patients(email);
CREATE INDEX idx_patients_phone ON patients(phone);
CREATE INDEX idx_patients_source ON patients(source);

-- SCREENINGS
CREATE TABLE screenings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
    -- STOP-BANG answers
    sb_snoring BOOLEAN NOT NULL,
    sb_tired BOOLEAN NOT NULL,
    sb_observed BOOLEAN NOT NULL,
    sb_pressure BOOLEAN NOT NULL,
    sb_bmi BOOLEAN NOT NULL,
    sb_age BOOLEAN NOT NULL,
    sb_neck BOOLEAN NOT NULL,
    sb_gender BOOLEAN NOT NULL,
    -- Scores
    stopbang_score INTEGER NOT NULL CHECK (stopbang_score >= 0 AND stopbang_score <= 8),
    ess_answers JSONB NOT NULL,
    ess_score INTEGER NOT NULL CHECK (ess_score >= 0 AND ess_score <= 21),
    -- Assessment
    risk_level VARCHAR(20) NOT NULL CHECK (risk_level IN ('rendah', 'sedang', 'tinggi')),
    recommendation TEXT,
    -- Follow-up
    status VARCHAR(30) DEFAULT 'baru',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_screenings_patient ON screenings(patient_id);
CREATE INDEX idx_screenings_risk ON screenings(risk_level);
CREATE INDEX idx_screenings_status ON screenings(status);
CREATE INDEX idx_screenings_created ON screenings(created_at DESC);
CREATE INDEX idx_screenings_patient_created ON screenings(patient_id, created_at DESC); -- for 30-day cooldown check

-- BOOKINGS (Unified: consultation, HST, PSG, mask fitting, etc.)
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
    booking_type VARCHAR(30) NOT NULL CHECK (booking_type IN (
        'consultation', 'hst', 'psg_tipe1', 'psg_tipe2', 'psg_tipe3', 'psg_tipe4',
        'mask_fitting', 'therapy_review', 'service', 'rental'
    )),
    scheduled_date DATE NOT NULL,
    scheduled_time VARCHAR(20),
    complaint VARCHAR(50),
    medical_history TEXT,
    insurance_provider VARCHAR(255),
    notes TEXT,
    status VARCHAR(30) DEFAULT 'baru' CHECK (status IN (
        'baru', 'dikonfirmasi', 'teknisi_dikirim', 'set_up_selesai',
        'pengambilan_data', 'data_terkirim', 'analisa', 'report_selesai',
        'selesai', 'batal'
    )),
    technician_id UUID,
    whatsapp_notified BOOLEAN DEFAULT FALSE,
    email_notified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_bookings_patient ON bookings(patient_id);
CREATE INDEX idx_bookings_type ON bookings(booking_type);
CREATE INDEX idx_bookings_date ON bookings(scheduled_date);
CREATE INDEX idx_bookings_status ON bookings(status);

-- SLEEP REPORTS
CREATE TABLE sleep_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id),
    booking_id UUID REFERENCES bookings(id),
    test_type VARCHAR(30) NOT NULL,
    -- Clinical Results
    ahi DECIMAL(5,1),              -- Apnea-Hypopnea Index
    odi DECIMAL(5,1),              -- Oxygen Desaturation Index
    min_spo2 INTEGER,              -- Minimum SpO2
    avg_spo2 INTEGER,              -- Average SpO2
    total_sleep_time INTEGER,      -- minutes
    sleep_efficiency DECIMAL(5,1), -- percentage
    rem_percentage DECIMAL(5,1),
    deep_sleep_percentage DECIMAL(5,1),
    -- Report
    report_url TEXT,
    raw_data_url TEXT,
    analyzed_by VARCHAR(255),      -- RPSGT name
    analyzed_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(30) DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_reports_patient ON sleep_reports(patient_id);
CREATE INDEX idx_reports_status ON sleep_reports(status);

-- THERAPY SESSIONS
CREATE TABLE therapy_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id),
    -- Device Info
    device_type VARCHAR(20) NOT NULL CHECK (device_type IN ('CPAP', 'BiPAP', 'APAP')),
    device_brand VARCHAR(100) NOT NULL,
    device_model VARCHAR(100),
    serial_number VARCHAR(100),
    purchase_date DATE,
    purchase_source VARCHAR(100),
    -- Settings
    initial_settings JSONB,        -- { pressure: 12, mode: 'auto', ramp: 5, etc. }
    current_settings JSONB,
    mask_type VARCHAR(50),         -- Nasal, Nasal Pillow, Full Face
    mask_size VARCHAR(20),
    -- Monitoring Data
    last_ahi DECIMAL(5,1),
    last_leak DECIMAL(5,1),
    last_usage_hours DECIMAL(5,1),
    compliance BOOLEAN,
    compliance_percentage DECIMAL(5,1),
    -- Schedule
    last_review_at TIMESTAMP WITH TIME ZONE,
    next_review_at TIMESTAMP WITH TIME ZONE,
    -- Notes
    therapist_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_therapy_patient ON therapy_sessions(patient_id);
CREATE INDEX idx_therapy_next_review ON therapy_sessions(next_review_at);

-- NOTIFICATIONS
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type VARCHAR(50) NOT NULL,
    recipient VARCHAR(255) NOT NULL,
    channel VARCHAR(20) NOT NULL CHECK (channel IN ('whatsapp', 'email', 'sms')),
    subject VARCHAR(500),
    message TEXT NOT NULL,
    metadata JSONB,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
    sent_at TIMESTAMP WITH TIME ZONE,
    error_message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_notifications_type ON notifications(type);
CREATE INDEX idx_notifications_status ON notifications(status);

-- PRODUCTS (Shopify sync cache)
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shopify_id VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(500) NOT NULL,
    vendor VARCHAR(100) NOT NULL,
    product_type VARCHAR(100),
    price DECIMAL(12,2),
    compare_at_price DECIMAL(12,2),
    sku VARCHAR(100),
    inventory_quantity INTEGER DEFAULT 0,
    image_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    synced_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_products_vendor ON products(vendor);
CREATE INDEX idx_products_type ON products(product_type);

-- ADMIN USERS
CREATE TABLE admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('superadmin', 'admin', 'editor', 'viewer')),
    is_active BOOLEAN DEFAULT TRUE,
    last_login_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 3. API Design

### 3.1 REST API Endpoints (Complete)

#### Screening Module
| Method | Endpoint | Description | Auth | Rate Limit |
|--------|----------|-------------|------|------------|
| POST | `/api/v1/screenings` | Submit screening | No | 5/min |
| GET | `/api/v1/screenings/:id` | Get screening detail | Admin | 100/min |
| GET | `/api/v1/screenings` | List screenings | Admin | 100/min |
| PATCH | `/api/v1/screenings/:id/status` | Update follow-up status | Admin | 100/min |
| GET | `/api/v1/screenings/stats` | Screening statistics | Admin | 100/min |

#### Booking Module
| Method | Endpoint | Description | Auth | Rate Limit |
|--------|----------|-------------|------|------------|
| POST | `/api/v1/bookings` | Create booking | No | 10/min |
| GET | `/api/v1/bookings/:id` | Get booking detail | Admin | 100/min |
| GET | `/api/v1/bookings` | List bookings | Admin | 100/min |
| PATCH | `/api/v1/bookings/:id/status` | Update status | Admin | 100/min |
| GET | `/api/v1/bookings/calendar` | Calendar view | Admin | 100/min |

#### Sleep Report Module
| Method | Endpoint | Description | Auth | Rate Limit |
|--------|----------|-------------|------|------------|
| POST | `/api/v1/reports` | Create report | Admin | 100/min |
| GET | `/api/v1/reports/:id` | Get report | Admin | 100/min |
| GET | `/api/v1/reports/patient/:patientId` | Patient reports | Admin | 100/min |
| PATCH | `/api/v1/reports/:id` | Update report | Admin | 100/min |

#### Therapy Module
| Method | Endpoint | Description | Auth | Rate Limit |
|--------|----------|-------------|------|------------|
| POST | `/api/v1/therapy-sessions` | Create session | Admin | 100/min |
| GET | `/api/v1/therapy-sessions` | List sessions | Admin | 100/min |
| PATCH | `/api/v1/therapy-sessions/:id` | Update session | Admin | 100/min |
| GET | `/api/v1/therapy-sessions/:id/data` | Get therapy data | Admin | 100/min |

#### Patient Module
| Method | Endpoint | Description | Auth | Rate Limit |
|--------|----------|-------------|------|------------|
| GET | `/api/v1/patients` | List patients | Admin | 100/min |
| GET | `/api/v1/patients/:id` | Get patient | Admin | 100/min |
| GET | `/api/v1/patients/:id/history` | Patient journey | Admin | 100/min |
| PATCH | `/api/v1/patients/:id` | Update patient | Admin | 100/min |

#### Product Module
| Method | Endpoint | Description | Auth | Rate Limit |
|--------|----------|-------------|------|------------|
| GET | `/api/v1/products` | List products | No | 100/min |
| GET | `/api/v1/products/:id` | Get product | No | 100/min |
| POST | `/api/v1/products/sync` | Sync from Shopify | Webhook | 10/min |

#### Notification Module
| Method | Endpoint | Description | Auth | Rate Limit |
|--------|----------|-------------|------|------------|
| POST | `/api/v1/notifications/send` | Send notification | Admin | 10/min |
| GET | `/api/v1/notifications` | List notifications | Admin | 100/min |

#### Admin Module
| Method | Endpoint | Description | Auth | Rate Limit |
|--------|----------|-------------|------|------------|
| POST | `/api/v1/admin/login` | Login | No | 5/min |
| POST | `/api/v1/admin/logout` | Logout | Admin | 100/min |
| GET | `/api/v1/admin/me` | Current admin | Admin | 100/min |
| GET | `/api/v1/admin/dashboard` | Dashboard stats | Admin | 100/min |

#### Webhook Endpoints
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/webhooks/shopify/orders` | Order created | HMAC |
| POST | `/webhooks/shopify/orders/paid` | Order paid | HMAC |
| POST | `/webhooks/shopify/orders/fulfilled` | Order fulfilled | HMAC |
| POST | `/webhooks/shopify/products` | Product updated | HMAC |

### 3.2 API Response Format

```typescript
// Standard success response
interface ApiResponse<T> {
  success: true;
  data: T;
  meta?: {
    total: number;
    page: number;
    per_page: number;
    total_pages: number;
  };
}

// Standard error response
interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, string[]>;
  };
}

// Example: POST /api/v1/screenings
// Request:
{
  "full_name": "Budi Santoso",
  "email": "budi@email.com",
  "phone": "081234567890",
  "age": 45,
  "gender": "laki-laki",
  "height_cm": 170,
  "weight_kg": 85,
  "neck_cm": 42,
  "consent": true,
  "stopbang": {
    "snoring": true,
    "tired": true,
    "observed": true,
    "pressure": true
  },
  "ess": {
    "reading": 2,
    "watching_tv": 1,
    "public_place": 2,
    "passenger": 3,
    "lying_afternoon": 2,
    "sitting_talking": 1,
    "after_meal": 2
  }
}

// Response 201:
{
  "success": true,
  "data": {
    "id": "uuid-xxx",
    "stopbang_score": 8,
    "ess_score": 13,
    "risk_level": "tinggi",
    "recommendation": {
      "text": "PRIORITAS: Segera lakukan Sleep Test dan konsultasi dengan dokter.",
      "action": "booking",
      "priority": "high",
      "whatsapp_message": "Halo, saya Budi telah melakukan screening..."
    }
  }
}
```

---

## 4. Frontend Architecture

### 4.1 Project Structure

```
unified-sleep-platform/
├── public/
│   ├── images/
│   │   ├── products/          # Synced from Shopify
│   │   ├── team/              # Doctor photos
│   │   ├── anatomy/           # Interactive anatomy SVGs
│   │   ├── icons/             # Custom icons
│   │   └── og/                # Open Graph images
│   ├── locales/
│   │   ├── id.json            # Indonesian translations
│   │   └── en.json            # English translations
│   └── robots.txt
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/           # i18n routing
│   │   │   ├── layout.tsx      # Root layout with providers
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── screening/
│   │   │   │   └── page.tsx    # Screening wizard
│   │   │   ├── shop/
│   │   │   │   ├── page.tsx    # Product listing
│   │   │   │   ├── bundles/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [handle]/
│   │   │   │       └── page.tsx # Product detail
│   │   │   ├── services/
│   │   │   │   ├── home-sleep-test/
│   │   │   │   ├── sleep-diagnostic/
│   │   │   │   ├── personalized-therapy/
│   │   │   │   ├── mask-fitting/
│   │   │   │   ├── therapy-data-review/
│   │   │   │   └── technical-support/
│   │   │   ├── book/
│   │   │   │   ├── consultation/
│   │   │   │   ├── hst/
│   │   │   │   └── psg/
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── faq/
│   │   │   ├── account/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── orders/
│   │   │   │   ├── screenings/
│   │   │   │   └── settings/
│   │   │   └── legal/
│   │   │       ├── privacy/
│   │   │       └── terms/
│   │   └── admin/
│   │       ├── layout.tsx
│   │       ├── page.tsx        # Dashboard
│   │       ├── screenings/
│   │       ├── bookings/
│   │       ├── reports/
│   │       ├── therapy/
│   │       ├── products/
│   │       ├── blog/
│   │       └── settings/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── InteractiveAnatomy.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── PersonalizedTherapy.tsx
│   │   │   ├── BundleDeals.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── BookingForm.tsx
│   │   │   └── TrustSignals.tsx
│   │   ├── screening/
│   │   │   ├── ScreeningWizard.tsx
│   │   │   ├── StepPersonalInfo.tsx
│   │   │   ├── StepStopBang.tsx
│   │   │   ├── StepESS.tsx
│   │   │   ├── StepResults.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── ScoreGauge.tsx
│   │   │   └── RecommendationCard.tsx
│   │   ├── shop/
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── BundleCard.tsx
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── VendorBadge.tsx
│   │   │   ├── PriceDisplay.tsx
│   │   │   └── ProductFilter.tsx
│   │   ├── booking/
│   │   │   ├── BookingForm.tsx
│   │   │   ├── BookingWizard.tsx
│   │   │   ├── DoctorCard.tsx
│   │   │   └── BookingConfirmation.tsx
│   │   ├── blog/
│   │   │   ├── ArticleGrid.tsx
│   │   │   ├── ArticleCard.tsx
│   │   │   └── ArticleContent.tsx
│   │   ├── therapy/
│   │   │   ├── PersonalizedTherapyPage.tsx
│   │   │   ├── MaskFittingPage.tsx
│   │   │   ├── TherapyReviewPage.tsx
│   │   │   └── TechnicalSupportPage.tsx
│   │   ├── services/
│   │   │   ├── HSTPage.tsx
│   │   │   ├── PSGPage.tsx
│   │   │   ├── HSTProcess.tsx
│   │   │   └── DiagnosticEquipment.tsx
│   │   └── shared/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── LanguageSwitcher.tsx
│   │       ├── WhatsAppButton.tsx
│   │       ├── SEOHead.tsx
│   │       ├── Breadcrumb.tsx
│   │       └── PageTransition.tsx
│   ├── lib/
│   │   ├── api.ts              # API client
│   │   ├── utils.ts            # Helper functions
│   │   ├── constants.ts        # App constants
│   │   ├── scoring.ts          # STOP-BANG + ESS calculator
│   │   ├── whatsapp.ts         # WhatsApp URL builder
│   │   ├── shopify.ts          # Shopify client
│   │   └── sanity.ts           # Sanity client
│   ├── hooks/
│   │   ├── useScreening.ts     # Screening state management
│   │   ├── useBooking.ts       # Booking state
│   │   ├── useCart.ts          # Cart state
│   │   ├── useLanguage.ts      # Language preference
│   │   └── useAnalytics.ts     # GA4 events
│   ├── stores/
│   │   ├── screeningStore.ts   # Zustand store for screening
│   │   ├── cartStore.ts        # Zustand store for cart
│   │   └── uiStore.ts          # UI state (modals, drawers)
│   └── types/
│       ├── screening.ts
│       ├── booking.ts
│       ├── product.ts
│       ├── patient.ts
│       └── therapy.ts
├── messages/
│   ├── id.json
│   └── en.json
├── next-intl.config.js
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 4.2 i18n Configuration

```typescript
// next-intl.config.js
export default {
  locales: ['id', 'en'],
  defaultLocale: 'id',
  pathnames: {
    '/': '/',
    '/screening': '/screening',
    '/shop': '/shop',
    '/shop/bundles': '/shop/bundles',
    '/services/home-sleep-test': '/services/home-sleep-test',
    '/services/personalized-therapy': '/services/personalized-therapy',
    '/blog': '/blog',
    '/about': '/about',
    '/contact': '/contact',
    '/faq': '/faq',
    '/account': '/account',
  }
};
```

### 4.3 Core Component Examples

```typescript
// components/screening/StepStopBang.tsx
'use client';

import { useScreening } from '@/hooks/useScreening';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Question {
  id: string;
  label: string;
  labelEn: string;
  key: 'snoring' | 'tired' | 'observed' | 'pressure';
}

const questions: Question[] = [
  { id: 'sb-q1', label: 'Apakah Anda mendengkur keras?', labelEn: 'Do you snore loudly?', key: 'snoring' },
  { id: 'sb-q2', label: 'Apakah Anda sering merasa kelelahan di siang hari?', labelEn: 'Do you often feel tired during the day?', key: 'tired' },
  { id: 'sb-q3', label: 'Pernahkah seseorang mengamati Anda berhenti bernapas saat tidur?', labelEn: 'Has anyone observed you stop breathing during sleep?', key: 'observed' },
  { id: 'sb-q4', label: 'Apakah Anda memiliki riwayat tekanan darah tinggi?', labelEn: 'Do you have a history of high blood pressure?', key: 'pressure' },
];

export function StepStopBang() {
  const { state, updateStopBang } = useScreening();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>STOP-BANG Questionnaire</CardTitle>
          <p className="text-sm text-muted-foreground">
            Jawab pertanyaan berikut dengan jujur untuk menilai risiko Sleep Apnea Anda.
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          {questions.map((q) => (
            <div key={q.id} className="space-y-3">
              <Label className="text-base font-medium">{q.label}</Label>
              <RadioGroup
                value={String(state.stopbang[q.key] ?? '')}
                onValueChange={(value) => updateStopBang(q.key, value === 'true')}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id={`${q.id}-yes`} />
                  <Label htmlFor={`${q.id}-yes`}>Ya</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id={`${q.id}-no`} />
                  <Label htmlFor={`${q.id}-no`}>Tidak</Label>
                </div>
              </RadioGroup>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Auto-calculated fields (BMI, Age, Neck, Gender) */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            ⚡ 4 pertanyaan berikut dihitung otomatis dari data diri Anda.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${state.stopbang.bmi ? 'bg-red-500' : 'bg-green-500'}`} />
              <span className="text-sm">BMI {state.personalInfo.bmi?.toFixed(1)} ({state.stopbang.bmi ? '> 35' : '≤ 35'})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${state.stopbang.age ? 'bg-red-500' : 'bg-green-500'}`} />
              <span className="text-sm">Usia {state.personalInfo.age} tahun ({state.stopbang.age ? '> 50' : '≤ 50'})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${state.stopbang.neck ? 'bg-red-500' : 'bg-green-500'}`} />
              <span className="text-sm">Lingkar leher {state.personalInfo.neckCm}cm</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${state.stopbang.gender ? 'bg-red-500' : 'bg-green-500'}`} />
              <span className="text-sm">{state.personalInfo.gender === 'laki-laki' ? 'Laki-laki' : 'Perempuan'}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## 5. Backend Architecture

### 5.1 NestJS Module Structure

```
backend/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── config/
│   │   ├── database.config.ts
│   │   ├── whatsapp.config.ts
│   │   ├── email.config.ts
│   │   ├── shopify.config.ts
│   │   └── sanity.config.ts
│   ├── modules/
│   │   ├── screening/
│   │   │   ├── screening.module.ts
│   │   │   ├── screening.controller.ts
│   │   │   ├── screening.service.ts
│   │   │   ├── screening.dto.ts
│   │   │   ├── scoring.engine.ts      # STOP-BANG + ESS calculator
│   │   │   └── recommendation.engine.ts
│   │   ├── booking/
│   │   │   ├── booking.module.ts
│   │   │   ├── booking.controller.ts
│   │   │   ├── booking.service.ts
│   │   │   └── booking.dto.ts
│   │   ├── patient/
│   │   │   ├── patient.module.ts
│   │   │   ├── patient.controller.ts
│   │   │   └── patient.service.ts
│   │   ├── sleep-report/
│   │   │   ├── report.module.ts
│   │   │   ├── report.controller.ts
│   │   │   └── report.service.ts
│   │   ├── therapy/
│   │   │   ├── therapy.module.ts
│   │   │   ├── therapy.controller.ts
│   │   │   └── therapy.service.ts
│   │   ├── product/
│   │   │   ├── product.module.ts
│   │   │   ├── product.controller.ts
│   │   │   ├── product.service.ts
│   │   │   └── shopify-sync.service.ts
│   │   ├── admin/
│   │   │   ├── admin.module.ts
│   │   │   ├── admin.controller.ts
│   │   │   ├── admin.service.ts
│   │   │   ├── auth.guard.ts
│   │   │   └── auth.service.ts
│   │   ├── notification/
│   │   │   ├── notification.module.ts
│   │   │   ├── notification.service.ts
│   │   │   ├── whatsapp.service.ts
│   │   │   └── email.service.ts
│   │   └── analytics/
│   │       ├── analytics.module.ts
│   │       └── analytics.service.ts
│   ├── common/
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── interceptors/
│   │   │   ├── logging.interceptor.ts
│   │   │   └── transform.interceptor.ts
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   ├── decorators/
│   │   │   ├── roles.decorator.ts
│   │   │   └── current-user.decorator.ts
│   │   └── pipes/
│   │       └── validation.pipe.ts
│   └── prisma/
│       ├── prisma.module.ts
│       └── prisma.service.ts
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── test/
│   ├── screening.e2e-spec.ts
│   ├── booking.e2e-spec.ts
│   └── jest-e2e.json
├── Dockerfile
├── docker-compose.yml
└── package.json
```

### 5.2 Scoring Engine

```typescript
// modules/screening/scoring.engine.ts

export interface StopBangInput {
  snoring: boolean;
  tired: boolean;
  observed: boolean;
  pressure: boolean;
  age: number;
  neckCm: number;
  gender: string;
  bmi: number;
}

export interface StopBangResult {
  score: number;
  details: Record<string, boolean>;
  riskLevel: 'rendah' | 'sedang' | 'tinggi';
}

export interface ESSInput {
  reading: number;
  watchingTv: number;
  publicPlace: number;
  passenger: number;
  lyingAfternoon: number;
  sittingTalking: number;
  afterMeal: number;
}

export interface ESSResult {
  score: number;
  interpretation: 'Normal' | 'Kantuk Berlebihan' | 'Kantuk Sangat Berlebihan';
}

export interface ScreeningResult {
  stopbang: StopBangResult;
  ess: ESSResult;
  overallRisk: 'rendah' | 'sedang' | 'tinggi';
  recommendation: Recommendation;
}

export class ScoringEngine {
  calculateStopBang(input: StopBangInput): StopBangResult {
    const details = {
      snoring: input.snoring,           // Q1
      tired: input.tired,               // Q2
      observed: input.observed,         // Q3
      pressure: input.pressure,         // Q4
      bmi: input.bmi > 35,              // Q5 (auto)
      age: input.age > 50,              // Q6 (auto)
      neck: input.gender === 'laki-laki' 
        ? input.neckCm > 40 
        : input.neckCm > 38,           // Q7 (auto)
      gender: input.gender === 'laki-laki', // Q8 (auto)
    };

    const score = Object.values(details).filter(Boolean).length;
    const riskLevel = this.getRiskLevel(score);

    return { score, details, riskLevel };
  }

  calculateESS(input: ESSInput): ESSResult {
    const score = 
      input.reading + input.watchingTv + input.publicPlace +
      input.passenger + input.lyingAfternoon + input.sittingTalking +
      input.afterMeal;

    const interpretation = this.getESSInterpretation(score);

    return { score, interpretation };
  }

  private getRiskLevel(score: number): 'rendah' | 'sedang' | 'tinggi' {
    if (score <= 2) return 'rendah';
    if (score <= 4) return 'sedang';
    return 'tinggi';
  }

  private getESSInterpretation(score: number): ESSResult['interpretation'] {
    if (score <= 10) return 'Normal';
    if (score <= 14) return 'Kantuk Berlebihan';
    return 'Kantuk Sangat Berlebihan';
  }

  getRecommendation(
    stopbang: StopBangResult, 
    ess: ESSResult
  ): Recommendation {
    // Matrix lookup based on risk level + ESS interpretation
    const matrix: Record<string, Record<string, Recommendation>> = {
      rendah: {
        Normal: { text: 'Tips kesehatan tidur', action: 'tips', priority: 'low' },
        'Kantuk Berlebihan': { text: 'Disarankan konsultasi dokter', action: 'consultation', priority: 'medium' },
        'Kantuk Sangat Berlebihan': { text: 'Sangat disarankan konsultasi dokter', action: 'consultation', priority: 'high' },
      },
      sedang: {
        Normal: { text: 'Disarankan konsultasi dokter', action: 'consultation', priority: 'medium' },
        'Kantuk Berlebihan': { text: 'Booking Sleep Test', action: 'sleep_test', priority: 'high' },
        'Kantuk Sangat Berlebihan': { text: 'Booking Sleep Test', action: 'sleep_test', priority: 'high' },
      },
      tinggi: {
        Normal: { text: 'Booking Sleep Test', action: 'sleep_test', priority: 'high' },
        'Kantuk Berlebihan': { text: 'Booking Sleep Test + Konsultasi', action: 'both', priority: 'urgent' },
        'Kantuk Sangat Berlebihan': { text: 'PRIORITAS: Sleep Test + Konsultasi', action: 'both', priority: 'urgent' },
      },
    };

    return matrix[stopbang.riskLevel][ess.interpretation];
  }
}
```

### 5.3 WhatsApp Service

```typescript
// modules/notification/whatsapp.service.ts

@Injectable()
export class WhatsAppService {
  private config: WhatsAppConfig;

  constructor(private http: HttpService) {
    this.config = {
      apiUrl: process.env.WHATSAPP_API_URL,
      apiKey: process.env.WHATSAPP_API_KEY,
      phoneNumber: process.env.WHATSAPP_PHONE_NUMBER,
      secondaryNumber: process.env.WHATSAPP_SECONDARY_NUMBER,
    };
  }

  // Screening notifications
  async sendScreeningConfirmation(patient: Patient, screening: Screening): Promise<void> {
    const message = this.getScreeningMessage(patient, screening);
    await this.send(patient.phone, message);
  }

  async notifyAdminHighRisk(patient: Patient, screening: Screening): Promise<void> {
    const message = `🚨 *SCREENING RISIKO TINGGI*\n\n` +
      `Nama: ${patient.full_name}\n` +
      `Email: ${patient.email}\n` +
      `Telepon: ${patient.phone}\n` +
      `STOP-BANG: ${screening.stopbang_score}/8\n` +
      `ESS: ${screening.ess_score}/21\n` +
      `Risiko: TINGGI\n\n` +
      `⚠️ Segera lakukan follow-up!`;
    
    await this.send(this.config.phoneNumber, message);
  }

  // Booking notifications
  async sendBookingConfirmation(patient: Patient, booking: Booking): Promise<void> {
    const message = `Terima kasih ${patient.full_name}! Booking Anda telah diterima.\n\n` +
      `📋 Jenis: ${this.getBookingTypeLabel(booking.booking_type)}\n` +
      `📅 Tanggal: ${booking.scheduled_date}\n` +
      `🕐 Jam: ${booking.scheduled_time || 'Fleksibel'}\n` +
      `📍 Lt.5, Jl. Gatot Subroto No.Kav. 23, Jakarta Selatan\n\n` +
      `Tim kami akan menghubungi Anda untuk konfirmasi.\n` +
      `Hubungi: +62 (858) 8000 8259`;
    
    await this.send(patient.phone, message);
  }

  // Product inquiry
  async sendProductInquiry(phone: string, productName: string): Promise<void> {
    const message = `Halo, saya tertarik dengan ${productName}.\n` +
      `Mohon informasi harga, spesifikasi, dan ketersediaan.`;
    
    await this.send(phone, message);
  }

  // HST notifications
  async sendHSTBookingConfirmation(patient: Patient, booking: Booking): Promise<void> {
    const message = `Terima kasih ${patient.full_name}! Booking Home Sleep Test Anda telah diterima.\n\n` +
      `📅 Tanggal: ${booking.scheduled_date}\n` +
      `📍 Alamat: ${booking.notes}\n\n` +
      `Teknisi kami akan menghubungi Anda untuk konfirmasi.\n` +
      `Hubungi: +62 811 1212 858`;
    
    await this.send(patient.phone, message);
  }

  async sendHSTReportReady(patient: Patient, report: SleepReport): Promise<void> {
    const message = `Halo ${patient.full_name}! Hasil Home Sleep Test Anda sudah selesai.\n\n` +
      `📄 Laporan bisa diunduh di: ${report.report_url}\n\n` +
      `Silakan buat janji konsultasi untuk membahas hasil dengan dokter kami.\n` +
      `WhatsApp: +62 811 1212 858`;
    
    await this.send(patient.phone, message);
  }

  // Repeat purchase reminders
  async sendFilterReminder(patient: Patient, therapy: TherapySession): Promise<void> {
    const message = `Halo ${patient.full_name}! ⏰\n\n` +
      `Filter CPAP Anda sudah waktunya diganti (30 hari).\n` +
      `Gunakan filter baru untuk menjaga kualitas terapi.\n\n` +
      `Beli sekarang: https://cpapindo.com/shop?filter=true`;
    
    await this.send(patient.phone, message);
  }

  private async send(phone: string, message: string): Promise<void> {
    try {
      await this.http.post(
        `${this.config.apiUrl}/messages`,
        {
          to: phone,
          type: 'text',
          text: { body: message },
        },
        {
          headers: {
            'Authorization': `Bearer ${this.config.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      ).toPromise();
    } catch (error) {
      console.error('WhatsApp send failed:', error);
      // Log to database for retry
    }
  }
}
```

---

## 6. Shopify Integration

### 6.1 Theme Architecture

```
shopify-theme/
├── assets/
│   ├── custom.js               # Custom JavaScript
│   ├── custom.css              # Custom styles
│   ├── hero-carousel.js       # Hero carousel logic
│   └── images/
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/
│   └── theme.liquid
├── locales/
│   ├── id.json
│   └── en.json
├── sections/
│   ├── hero-carousel.liquid
│   ├── personalized-therapy.liquid
│   ├── mask-fitting.liquid
│   ├── bundle-deals.liquid
│   ├── featured-products.liquid
│   └── testimonials.liquid
├── snippets/
│   ├── product-card.liquid
│   ├── vendor-badge.liquid
│   ├── price-display.liquid
│   └── seo-meta.liquid
└── templates/
    ├── index.liquid
    ├── product.liquid
    ├── collection.liquid
    └── page.liquid
```

### 6.2 Product Sync (Shopify → PostgreSQL)

```typescript
// modules/product/shopify-sync.service.ts

@Injectable()
export class ShopifySyncService {
  constructor(
    private prisma: PrismaService,
    private shopify: ShopifyService,
  ) {}

  async syncProducts(): Promise<SyncResult> {
    const shopifyProducts = await this.shopify.getAllProducts();
    let created = 0;
    let updated = 0;

    for (const product of shopifyProducts) {
      const existing = await this.prisma.product.findUnique({
        where: { shopifyId: product.id },
      });

      if (existing) {
        await this.prisma.product.update({
          where: { shopifyId: product.id },
          data: {
            title: product.title,
            vendor: product.vendor,
            productType: product.product_type,
            price: parseFloat(product.variants[0]?.price || '0'),
            compareAtPrice: parseFloat(product.variants[0]?.compare_at_price || '0'),
            sku: product.variants[0]?.sku,
            inventoryQuantity: product.variants[0]?.inventory_quantity || 0,
            imageUrl: product.images[0]?.src,
            syncedAt: new Date(),
          },
        });
        updated++;
      } else {
        await this.prisma.product.create({
          data: {
            shopifyId: product.id,
            title: product.title,
            vendor: product.vendor,
            productType: product.product_type,
            price: parseFloat(product.variants[0]?.price || '0'),
            compareAtPrice: parseFloat(product.variants[0]?.compare_at_price || '0'),
            sku: product.variants[0]?.sku,
            inventoryQuantity: product.variants[0]?.inventory_quantity || 0,
            imageUrl: product.images[0]?.src,
          },
        });
        created++;
      }
    }

    return { created, updated, total: shopifyProducts.length };
  }

  async syncInventory(): Promise<void> {
    const products = await this.prisma.product.findMany();
    for (const product of products) {
      const shopifyProduct = await this.shopify.getProduct(product.shopifyId);
      if (shopifyProduct) {
        await this.prisma.product.update({
          where: { id: product.id },
          data: {
            inventoryQuantity: shopifyProduct.variants[0]?.inventory_quantity || 0,
            syncedAt: new Date(),
          },
        });
      }
    }
  }
}
```

---

## 7. Security

### 7.1 Security Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    SECURITY LAYERS                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Layer 1: TRANSPORT                                     │
│  ├── HTTPS/TLS 1.3 (all connections)                    │
│  ├── HSTS (Strict-Transport-Security)                   │
│  └── Certificate pinning (mobile, future)               │
│                                                          │
│  Layer 2: APPLICATION                                    │
│  ├── CSP (Content Security Policy)                      │
│  ├── CORS (whitelist domains)                           │
│  ├── Rate limiting (per endpoint)                       │
│  ├── Input validation (Zod schemas)                     │
│  └── XSS prevention (auto-escaping)                     │
│                                                          │
│  Layer 3: AUTHENTICATION                                │
│  ├── JWT tokens (HttpOnly cookies)                      │
│  ├── Password hashing (bcrypt, cost 12)                 │
│  ├── Session management (24h expiry)                    │
│  └── Role-based access control (RBAC)                   │
│                                                          │
│  Layer 4: DATA                                          │
│  ├── Encryption at rest (PostgreSQL)                    │
│  ├── Parameterized queries (Prisma ORM)                 │
│  ├── PII pseudonymization (analytics)                   │
│  └── Data retention policies (2 years)                  │
│                                                          │
│  Layer 5: INFRASTRUCTURE                                │
│  ├── DDoS protection (Cloudflare)                       │
│  ├── WAF (Web Application Firewall)                     │
│  ├── IP whitelisting (admin panel)                      │
│  └── Regular security audits                            │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### 7.2 Security Headers

```typescript
// next.config.js
module.exports = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://js.stripe.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "img-src 'self' data: https: blob:",
            "font-src 'self' https://fonts.gstatic.com",
            "connect-src 'self' https://*.sanity.io https://*.shopify.com",
            "frame-src 'self' https://js.stripe.com",
          ].join('; '),
        },
      ],
    },
  ],
};
```

### 7.3 Rate Limiting

```typescript
// Rate limit configuration
export const rateLimitConfig = {
  screening: {
    windowMs: 60 * 1000,  // 1 minute
    max: 5,                // 5 submissions per minute per IP
    message: 'Terlalu banyak percobaan. Silakan coba lagi dalam 1 menit.',
  },
  booking: {
    windowMs: 60 * 1000,
    max: 10,
    message: 'Terlalu banyak booking. Silakan coba lagi.',
  },
  admin: {
    windowMs: 60 * 1000,
    max: 100,
    message: 'Rate limit exceeded.',
  },
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,                    // 5 login attempts per 15 min
    message: 'Terlalu banyak percobaan login. Akun dikunci 15 menit.',
  },
};
```

---

## 8. Deployment

### 8.1 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy Unified Platform

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm typecheck
      - run: pnpm test
      - run: pnpm build

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}

  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to VPS
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_KEY }}
          script: |
            cd /opt/unified-sleep-platform/backend
            git pull
            pnpm install
            pnpm prisma migrate deploy
            pnpm build
            pm2 restart unified-api

  deploy-shopify:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: shopify/theme-action@v2
        with:
          password: ${{ secrets.SHOPIFY_PASSWORD }}
          store: ${{ secrets.SHOPIFY_STORE }}
          theme-id: ${{ secrets.SHOPIFY_THEME_ID }}
          path: shopify-theme
```

### 8.2 Environment Variables

```env
# ============================================
# UNIFIED SLEEP HEALTHCARE PLATFORM
# Environment Variables
# ============================================

# --- Frontend (Next.js) ---
NEXT_PUBLIC_API_URL=https://api.unifiedsleep.com
NEXT_PUBLIC_WHATSAPP_PHONE=6285880008259
NEXT_PUBLIC_WHATSAPP_SECONDARY=628119113330
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=xxxxxxxxxx
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# --- Backend (NestJS) ---
DATABASE_URL=postgresql://user:pass@host:5432/unified_sleep
JWT_SECRET=your-jwt-secret-change-this
JWT_EXPIRY=24h

# --- WhatsApp (360dialog) ---
WHATSAPP_API_URL=https://waba.360dialog.io/v1
WHATSAPP_API_KEY=your-360dialog-api-key
WHATSAPP_PHONE_NUMBER=6285880008259
WHATSAPP_SECONDARY_NUMBER=628119113330

# --- Email (SendGrid) ---
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
SENDGRID_FROM=noreply@unifiedsleep.com
SENDGRID_TEMPLATE_SCREENING=d-xxxxxxxx
SENDGRID_TEMPLATE_BOOKING=d-xxxxxxxx
SENDGRID_TEMPLATE_REPORT=d-xxxxxxxx

# --- Shopify ---
SHOPIFY_STORE_DOMAIN=unifiedsleep.myshopify.com
SHOPIFY_ACCESS_TOKEN=shpat_xxxxxxxxxxxx
SHOPIFY_WEBHOOK_SECRET=your-webhook-secret

# --- Sanity CMS ---
SANITY_API_TOKEN=skxxxxxxxxxxxxxxxxxxx
SANITY_PROJECT_ID=your-project-id

# --- Payment (Midtrans) ---
MIDTRANS_SERVER_KEY=SB-Mid-server-xxxxxxxxxxxxx
MIDTRANS_CLIENT_KEY=SB-Mid-client-xxxxxxxxxxxxx
MIDTRANS_IS_PRODUCTION=false

# --- Analytics ---
SENTRY_DSN=https://xxxxxxxx@sentry.io/xxxxxxx
PLAUSIBLE_DOMAIN=unifiedsleep.com

# --- Admin ---
ADMIN_DEFAULT_EMAIL=admin@unifiedsleep.com
ADMIN_DEFAULT_PASSWORD=changeme-in-production
```

### 8.3 Docker Configuration

```dockerfile
# Dockerfile (Backend)
FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm prisma generate
RUN pnpm build

FROM base AS runner
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3001
CMD ["node", "dist/main.js"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3001:3001"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - JWT_SECRET=${JWT_SECRET}
      - WHATSAPP_API_KEY=${WHATSAPP_API_KEY}
      - SENDGRID_API_KEY=${SENDGRID_API_KEY}
      - SHOPIFY_ACCESS_TOKEN=${SHOPIFY_ACCESS_TOKEN}
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3001/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### 8.4 Monitoring & Observability

| Tool | Purpose | Free Tier | Configuration |
|------|---------|-----------|---------------|
| **Vercel Analytics** | Web Vitals, traffic | ✅ | Auto (Vercel) |
| **Google Analytics 4** | User behavior | ✅ | GA4 tag |
| **Sentry** | Error tracking | ✅ (5K events/mo) | DSN in env |
| **Plausible** | Privacy analytics | Self-hosted | Domain tag |
| **UptimeRobot** | Uptime monitoring | ✅ (50 monitors) | HTTP checks |
| **Grafana** | Custom dashboards | Self-hosted | Prometheus metrics |
| **Prometheus** | Metrics collection | Self-hosted | /metrics endpoint |

### 8.5 Health Check Endpoints

```typescript
// Backend health check
@Controller('health')
export class HealthController {
  @Get()
  async check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      services: {
        database: await this.checkDatabase(),
        shopify: await this.checkShopify(),
        whatsapp: await this.checkWhatsApp(),
        sanity: await this.checkSanity(),
      },
    };
  }

  private async checkDatabase(): Promise<string> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return 'healthy';
    } catch {
      return 'unhealthy';
    }
  }
}
```

---

## 9. Testing Strategy

### 9.1 Testing Pyramid

```
                    ┌───────────┐
                    │   E2E     │  10%
                    │(Playwright)│
                    ├───────────┤
                    │Integration│  30%
                    │(Jest+     │
                    │Supertest) │
                    ├───────────┤
                    │   Unit    │  60%
                    │  (Jest)   │
                    └───────────┘
```

### 9.2 Key Test Cases

| Module | Test Type | Case | Expected |
|--------|-----------|------|----------|
| **Screening** | Unit | STOP-BANG score calculation | Correct score 0-8 |
| **Screening** | Unit | ESS score calculation | Correct score 0-21 |
| **Screening** | Unit | Risk categorization | Correct risk level |
| **Screening** | Unit | Recommendation matrix | Correct recommendation |
| **Screening** | Unit | BMI calculation | Correct BMI from height/weight |
| **Screening** | Integration | POST screening valid | 201 + saved to DB |
| **Screening** | Integration | POST screening invalid | 400 + error message |
| **Screening** | Integration | Email duplicate (30 days) | 429 + cooldown message |
| **Booking** | Unit | Weekend date rejection | Error message |
| **Booking** | Unit | Past date rejection | Error message |
| **Booking** | Integration | POST booking valid | 201 + WhatsApp sent |
| **Booking** | Integration | Booking status update | 200 + status changed |
| **Products** | Unit | Vendor badge rendering | Correct badge per vendor |
| **Products** | Unit | Price format (Rp) | "Rp 16.500.000" |
| **Products** | Unit | Bundle discount calculation | Bundle < sum individual |
| **Products** | Integration | GET products list | 200 + product data |
| **Shopify** | Integration | Product sync | Products synced to DB |
| **WhatsApp** | Unit | URL generation | Correct wa.me URL |
| **WhatsApp** | Unit | Message template | Correct pre-filled message |
| **i18n** | Unit | Language toggle | Content changes ID/EN |
| **Auth** | Integration | Login valid | 200 + JWT token |
| **Auth** | Integration | Login invalid | 401 + error |
| **Auth** | Integration | Rate limit (5 attempts) | 429 + lockout |
| **Homepage** | E2E | Load < 3s | Lighthouse score > 90 |
| **Screening** | E2E | Complete 6-step flow | Results displayed |
| **Shop** | E2E | Browse → Add to Cart → Checkout | Order created |
| **Booking** | E2E | Fill form → Submit → Confirmation | Booking saved |
| **Blog** | E2E | Browse → Read article | Content displayed |

---

## 10. Scalability & Performance

### 10.1 Performance Targets

| Metric | Target | Tool | Current |
|--------|--------|------|---------|
| Lighthouse Performance | ≥ 90 | Lighthouse CI | - |
| LCP | < 2.5s | Web Vitals | - |
| FID | < 100ms | Web Vitals | - |
| CLS | < 0.1 | Web Vitals | - |
| FCP | < 1.8s | Web Vitals | - |
| TTI | < 3.5s | Lighthouse | - |
| Initial Bundle (gzipped) | < 150KB | Next.js build | - |
| API Response (p95) | < 500ms | Sentry Performance | - |
| Database Query (p95) | < 100ms | Prisma metrics | - |

### 10.2 Capacity Planning

| Resource | Current Spec | Capacity | Scale Trigger | Action |
|----------|-------------|----------|---------------|--------|
| Frontend (Vercel) | Edge Functions | 100K req/day | > 80K/day | Upgrade plan |
| Backend (VPS) | 2 vCPU, 4GB RAM | 100 concurrent | > 80 concurrent | Upgrade RAM |
| Database (Supabase) | Free tier | 500MB, 50K rows | > 400MB | Upgrade plan |
| Sanity CMS | Free tier | 100K API req/mo | > 80K/mo | Upgrade plan |
| WhatsApp API | 360dialog | 1000 conversations/mo | > 800/mo | Upgrade plan |
| Shopify | Advanced | Unlimited products | - | Already sufficient |

### 10.3 Caching Strategy

```typescript
// Caching layers
const cacheConfig = {
  // Static content (CDN level)
  static: {
    images: '30 days',
    fonts: '1 year',
    css: '1 year',
    js: '1 year',
  },
  
  // API responses (application level)
  api: {
    products: '5 minutes',      // Products change infrequently
    blog_posts: '10 minutes',   // Blog rarely changes
    screening_stats: '1 minute', // Stats need freshness
    booking_list: '30 seconds',  // Bookings need near-real-time
  },
  
  // Database queries (Prisma level)
  database: {
    patient_lookup: '5 minutes',
    product_list: '10 minutes',
  },
};
```

---

## 11. Technology Decision Records (ADR)

### ADR-001: Modular Monolith vs Microservices
- **Decision:** Modular Monolith
- **Context:** Single team, early stage, need fast iteration
- **Consequences:** Simpler deployment, easier debugging, but may need refactor at scale

### ADR-002: Shopify vs Custom E-commerce
- **Decision:** Shopify (Hybrid approach)
- **Context:** Need PCI compliance, fast to market, managed checkout
- **Consequences:** Monthly fees, but saves months of development and compliance work

### ADR-003: Next.js vs Remix vs Astro
- **Decision:** Next.js 14 (App Router)
- **Context:** Need SSR for SEO, React ecosystem, i18n support
- **Consequences:** Best SEO performance, good DX, but larger bundle than Astro

### ADR-004: Sanity vs Strapi vs Contentful
- **Decision:** Sanity
- **Context:** Need real-time preview, good i18n, hosted (less maintenance)
- **Consequences:** Vendor lock-in, but better developer experience and less ops burden

### ADR-005: Supabase vs AWS RDS vs PlanetScale
- **Decision:** Supabase
- **Context:** Need free tier, built-in auth potential, real-time subscriptions
- **Consequences:** PostgreSQL (good), but less control than self-hosted RDS

### ADR-006: NestJS vs Express vs Fastify
- **Decision:** NestJS
- **Context:** Need modular architecture, TypeScript, dependency injection, testing
- **Consequences:** Steeper learning curve, but better structure for large application

### ADR-007: Zustand vs Redux vs Jotai
- **Decision:** Zustand
- **Context:** Need simple state management, no boilerplate, good for React
- **Consequences:** Less ecosystem than Redux, but much simpler API

---

## 12. Appendices

### A. API Rate Limiting Summary

| Endpoint Category | Window | Max Requests | Action on Exceed |
|-------------------|--------|-------------|------------------|
| Screening (public) | 1 min | 5 | 429 + retry-after |
| Booking (public) | 1 min | 10 | 429 + retry-after |
| Auth (login) | 15 min | 5 | 429 + account lock |
| API (admin) | 1 min | 100 | 429 + retry-after |
| Shopify webhook | 1 min | 50 | 429 |
| Health check | 1 min | 10 | 200 |

### B. Database Index Strategy

| Table | Index | Purpose |
|-------|-------|---------|
| patients | email (unique) | Login, duplicate check |
| patients | phone | WhatsApp lookup |
| patients | source | Analytics |
| screenings | patient_id | Patient history |
| screenings | risk_level | Admin filter |
| screenings | status | Follow-up filter |
| screenings | created_at DESC | Recent first |
| bookings | patient_id | Patient history |
| bookings | booking_type | Admin filter |
| bookings | scheduled_date | Calendar view |
| bookings | status | Status filter |
| sleep_reports | patient_id | Patient history |
| sleep_reports | status | Report status |
| therapy_sessions | patient_id | Patient history |
| therapy_sessions | next_review_at | Reminder queries |
| products | shopify_id (unique) | Sync lookup |
| products | vendor | Filter by brand |
| products | product_type | Filter by category |

### C. Error Code Reference

| Code | HTTP Status | Description |
|------|-------------|-------------|
| SCREENING_001 | 400 | Invalid screening data |
| SCREENING_002 | 409 | Duplicate email (30-day cooldown) |
| SCREENING_003 | 422 | Age must be 18+ |
| BOOKING_001 | 400 | Invalid booking data |
| BOOKING_002 | 409 | Date not available |
| BOOKING_003 | 422 | Weekend not allowed |
| BOOKING_004 | 422 | Date must be in future |
| PRODUCT_001 | 404 | Product not found |
| PRODUCT_002 | 409 | Out of stock |
| AUTH_001 | 401 | Invalid credentials |
| AUTH_002 | 429 | Too many login attempts |
| AUTH_003 | 403 | Insufficient permissions |
| WHATSAPP_001 | 502 | WhatsApp API error |
| SHOPIFY_001 | 502 | Shopify sync error |
| GENERAL_001 | 500 | Internal server error |
| GENERAL_002 | 503 | Service temporarily unavailable |
