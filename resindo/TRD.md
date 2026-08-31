# Technical Requirements Document (TRD)
## Resindo Medika — resindo.com

**Versi Dokumen:** 1.0  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Engineering  
**Status:** Draft

---

## 1. Arsitektur Sistem (System Architecture)

### 1.1 High-Level Architecture
```
┌─────────────────────────────────────────────────────┐
│                    CDN (Cloudflare)                   │
│              Static Assets + Edge Caching            │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│         Frontend (Next.js 14 - App Router)           │
│     SSR/SSG Pages + Bilingual (i18n)                 │
│     Hosting: Vercel                                   │
└──────────────────────┬──────────────────────────────┘
                       │ REST API
┌──────────────────────▼──────────────────────────────┐
│            Backend (Node.js + NestJS)                │
│     or (Laravel PHP - alternatif)                    │
│     Hosting: VPS / Railway                            │
└───────┬──────────────┬──────────────┬───────────────┘
        │              │              │
┌───────▼──┐  ┌───────▼──┐  ┌───────▼──────────────┐
│Database  │  │ WhatsApp │  │ Email Service        │
│PostgreSQL│  │ Business │  │ (SMTP / SendGrid)    │
│(Supabase)│  │ API      │  │                      │
└──────────┘  └──────────┘  └──────────────────────┘
        │
┌───────▼──────────────────────┐
│  Headless CMS (Optional)     │
│  Sanity / Strapi / Contentful│
│  for Blog Management         │
└──────────────────────────────┘
```

### 1.2 Technology Stack

| Layer | Technology | Alasan |
|-------|-----------|--------|
| **Frontend** | Next.js 14+ (App Router) | SSR/SSG, SEO, React, i18n support |
| **Styling** | Tailwind CSS + shadcn/ui | Konsisten, responsive, accessible |
| **i18n** | next-intl | Bilingual support (ID/EN) |
| **Backend** | NestJS (Node.js) | TypeScript, modular, scalable |
| **ORM** | Prisma | Type-safe, migration, PostgreSQL |
| **Database** | PostgreSQL (Supabase) | Reliable, free tier, real-time |
| **CMS** | Sanity (headless) | Blog management, real-time preview |
| **Hosting FE** | Vercel | Zero-config, edge functions, i18n |
| **Hosting BE** | Railway | Simple deploy, auto-scaling |
| **CDN** | Cloudflare | Performance, security |
| **WhatsApp** | WhatsApp Business API (360dialog) | Official API |
| **Analytics** | GA4 + Plausible | Tracking + privacy |
| **Email** | SendGrid | Transactional email |

---

## 2. Database Schema

### 2.1 Entity Relationship Diagram
```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  bookings    │     │  products    │     │  blog_posts  │
│──────────────│     │──────────────│     │──────────────│
│ id (PK)      │     │ id (PK)      │     │ id (PK)      │
│ full_name    │     │ name         │     │ title        │
│ email        │     │ category     │     │ slug         │
│ phone        │     │ brand        │     │ content      │
│ complaint    │     │ description  │     │ excerpt      │
│ visit_date   │     │ image_url    │     │ category     │
│ time_pref    │     │ specs (JSON) │     │ image_url    │
│ insurance    │     │ is_active    │     │ lang (id/en) │
│ notes        │     │ sort_order   │     │ author       │
│ status       │     │ created_at   │     │ published_at │
│ created_at   │     └──────────────┘     │ created_at   │
└──────────────┘                          └──────────────┘
```

### 2.2 Tabel Bookings
```sql
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    complaint VARCHAR(50) NOT NULL CHECK (complaint IN (
        'mendengkur', 'henti_napas', 'lelah', 
        'sulit_tidur', 'sering_terbangun', 'sakit_kepala', 'lainnya'
    )),
    visit_date DATE NOT NULL,
    time_preference VARCHAR(20) NOT NULL CHECK (time_preference IN ('pagi', 'siang', 'sore')),
    medical_history TEXT,
    insurance VARCHAR(255),
    notes TEXT,
    status VARCHAR(20) DEFAULT 'baru' CHECK (status IN (
        'baru', 'dikonfirmasi', 'selesai', 'batal'
    )),
    whatsapp_notified BOOLEAN DEFAULT FALSE,
    email_notified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_date ON bookings(visit_date DESC);
CREATE INDEX idx_bookings_created ON bookings(created_at DESC);
```

### 2.3 Tabel Products
```sql
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN (
        'Machine', 'Mask', 'Humidifier', 'Accessory', 'Diagnostic'
    )),
    brand VARCHAR(100) NOT NULL CHECK (brand IN ('ResMed', 'SOMNOmedics')),
    description TEXT,
    description_en TEXT,
    image_url TEXT,
    specs JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2.4 Tabel Blog Posts
```sql
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(500) NOT NULL,
    title_en VARCHAR(500),
    slug VARCHAR(500) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    content_en TEXT,
    excerpt TEXT,
    excerpt_en TEXT,
    category VARCHAR(100) NOT NULL CHECK (category IN (
        'CPAP Therapy', 'Sleep Health', 'Conditions & Risks'
    )),
    image_url TEXT,
    author VARCHAR(255),
    lang VARCHAR(5) DEFAULT 'id' CHECK (lang IN ('id', 'en')),
    published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_blog_published ON blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_category ON blog_posts(category);
CREATE INDEX idx_blog_lang ON blog_posts(lang);
```

---

## 3. API Design

### 3.1 REST API Endpoints

#### Bookings
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/api/bookings` | Submit booking baru | No |
| GET | `/api/bookings` | List semua booking | Admin |
| GET | `/api/bookings/:id` | Detail booking | Admin |
| PATCH | `/api/bookings/:id/status` | Update status | Admin |
| GET | `/api/bookings/stats` | Statistik booking | Admin |

#### Products
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/api/products` | List produk (filter by category, brand) | No |
| GET | `/api/products/:id` | Detail produk | No |
| POST | `/api/products` | Tambah produk | Admin |
| PUT | `/api/products/:id` | Update produk | Admin |
| DELETE | `/api/products/:id` | Hapus produk | Admin |

#### Blog
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/api/blog` | List artikel (filter by category, lang) | No |
| GET | `/api/blog/:slug` | Detail artikel | No |
| POST | `/api/blog` | Tambah artikel | Admin |
| PUT | `/api/blog/:id` | Update artikel | Admin |
| DELETE | `/api/blog/:id` | Hapus artikel | Admin |

#### Admin Auth
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/api/admin/login` | Login admin | No |
| POST | `/api/admin/logout` | Logout | Admin |
| GET | `/api/admin/me` | Current admin profile | Admin |

### 3.2 API Request/Response Examples

#### POST `/api/bookings`
```json
// Request
{
  "full_name": "Andi Pratama",
  "email": "andi@email.com",
  "phone": "081234567890",
  "complaint": "mendengkur",
  "visit_date": "2026-09-05",
  "time_preference": "pagi",
  "insurance": "BPJS Kesehatan",
  "notes": "Saya mendengkur keras dan istri saya sering terbangun."
}

// Response 201
{
  "success": true,
  "data": {
    "id": "uuid-xxx",
    "status": "baru",
    "whatsapp_message": "Terima kasih Andi! Booking Anda telah diterima...",
    "created_at": "2026-08-31T10:00:00Z"
  }
}
```

#### GET `/api/products?category=Machine&brand=ResMed`
```json
// Response 200
{
  "success": true,
  "data": {
    "total": 5,
    "items": [
      {
        "id": "uuid-xxx",
        "name": "ResMed AirSense 10 AutoSet",
        "category": "Machine",
        "brand": "ResMed",
        "description": "Automatic CPAP therapy device...",
        "image_url": "/images/products/airsense-10.webp",
        "specs": {
          "pressure_range": "4-20 cmH2O",
          "weight": "1.0 kg",
          "noise_level": "26.6 dBA"
        }
      }
    ]
  }
}
```

---

## 4. Frontend Architecture

### 4.1 Project Structure
```
resindo/
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── blog/
│   │   ├── team/
│   │   └── og-image.png
│   ├── locales/
│   │   ├── id.json              # Indonesian translations
│   │   └── en.json              # English translations
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── [locale]/            # i18n route
│   │   │   ├── layout.tsx       # Root layout with locale
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   └── page.tsx
│   │   │   ├── products/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── booking/
│   │   │   │   └── page.tsx
│   │   │   └── faq/
│   │   │       └── page.tsx
│   │   └── admin/
│   │       ├── layout.tsx
│   │       ├── page.tsx         # Dashboard
│   │       ├── bookings/
│   │       │   └── page.tsx
│   │       ├── products/
│   │       │   └── page.tsx
│   │       └── blog/
│   │           └── page.tsx
│   ├── components/
│   │   ├── ui/                  # shadcn/ui
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Conditions.tsx    # Interactive anatomy
│   │   │   ├── Testimonials.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   ├── BookingForm.tsx
│   │   │   └── FAQ.tsx
│   │   ├── booking/
│   │   │   ├── BookingWizard.tsx
│   │   │   └── BookingConfirmation.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogGrid.tsx
│   │   │   └── BlogContent.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ProductFilter.tsx
│   │   └── shared/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── LanguageSwitcher.tsx
│   │       ├── WhatsAppButton.tsx
│   │       └── SEOHead.tsx
│   ├── i18n/
│   │   ├── request.ts           # next-intl config
│   │   └── routing.ts
│   ├── lib/
│   │   ├── api.ts
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── hooks/
│   │   ├── useBooking.ts
│   │   └── useLanguage.ts
│   └── types/
│       ├── booking.ts
│       └── product.ts
├── messages/
│   ├── id.json
│   └── en.json
├── next-intl.config.js
├── next.config.js
└── package.json
```

### 4.2 Internationalization (i18n) Setup

```typescript
// next-intl.config.js
export default {
  locales: ['id', 'en'],
  defaultLocale: 'id',
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/services': '/services',
    '/products': '/products',
    '/blog': '/blog',
    '/booking': '/booking',
    '/faq': '/faq',
  }
};
```

```json
// messages/id.json
{
  "HomePage": {
    "hero": {
      "title": "Tidur Nyenyak Dimulai dari Sini",
      "subtitle": "Solusi Terpercaya untuk Sleep Apnea, Mendengkur & Gangguan Tidur di Jakarta",
      "cta_primary": "Tes Sleep Apnea",
      "cta_secondary": "Buat Janji Temu",
      "rating": "1,000+ ulasan di GOOGLE",
      "quick_response": "RESPONS CEPAT DARI TIM KAMI"
    },
    "services": {
      "title": "Layanan Kami",
      "rental": {
        "title": "Penyewaan & Trial Alat Terapi",
        "desc": "Coba alat terapi sebelum membeli. Program rental dan trial kami membantu menemukan alat yang tepat."
      },
      "service": {
        "title": "Servis, Maintenance & Kalibrasi",
        "desc": "Pastikan alat CPAP Anda selalu berfungsi optimal dengan layanan servis profesional."
      },
      "diagnostic": {
        "title": "Sleep Diagnostic Test",
        "desc": "Pemeriksaan tidur menyeluruh yang nyaman dan akurat menggunakan alat berstandar internasional."
      },
      "products": {
        "title": "Produk ResMed & SOMNOmedics",
        "desc": "Temukan alat terapi sleep apnea premium, masker, aksesoris dan alat diagnostik terbaik."
      }
    }
  }
}
```

```json
// messages/en.json
{
  "HomePage": {
    "hero": {
      "title": "Restful Sleep Starts Here",
      "subtitle": "Trusted Solutions for Sleep Apnea, Snoring & Sleep Disorders in Jakarta",
      "cta_primary": "Sleep Apnea Test",
      "cta_secondary": "Book Appointment",
      "rating": "1,000+ reviews on GOOGLE",
      "quick_response": "QUICK RESPONSE FROM OUR TEAM"
    }
  }
}
```

### 4.3 Interactive Anatomy Component

```typescript
// components/home/Conditions.tsx
// Ilustrasi anatomi saluran napas dengan label interaktif

interface AnatomyLabel {
  id: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  position: { x: number; y: number }; // percentage
}

const anatomyLabels: AnatomyLabel[] = [
  {
    id: 'soft-palate',
    title: { id: 'Langit-langit Lunak', en: 'Soft Palate' },
    description: {
      id: 'Melemas saat tidur dan bergetar (mendengkur) hingga menutup saluran napas.',
      en: 'Relaxes during sleep and vibrates (snoring) or closes off the airway.'
    },
    position: { x: 55, y: 25 }
  },
  {
    id: 'tongue',
    title: { id: 'Pangkal Lidah', en: 'Base of Tongue' },
    description: {
      id: 'Dapat jatuh ke belakang dan menyumbat saluran napas saat tidur.',
      en: 'Can fall back and block the airway during sleep.'
    },
    position: { x: 40, y: 40 }
  },
  // ... 4 labels lainnya
];
```

---

## 5. Backend Architecture

### 5.1 NestJS Project Structure
```
backend/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── config/
│   │   ├── database.config.ts
│   │   ├── whatsapp.config.ts
│   │   └── email.config.ts
│   ├── modules/
│   │   ├── booking/
│   │   │   ├── booking.module.ts
│   │   │   ├── booking.controller.ts
│   │   │   ├── booking.service.ts
│   │   │   ├── booking.dto.ts
│   │   │   └── booking.entity.ts
│   │   ├── product/
│   │   │   ├── product.module.ts
│   │   │   ├── product.controller.ts
│   │   │   └── product.service.ts
│   │   ├── blog/
│   │   │   ├── blog.module.ts
│   │   │   ├── blog.controller.ts
│   │   │   └── blog.service.ts
│   │   ├── admin/
│   │   │   ├── admin.module.ts
│   │   │   ├── admin.controller.ts
│   │   │   ├── admin.service.ts
│   │   │   └── auth.guard.ts
│   │   ├── whatsapp/
│   │   │   ├── whatsapp.module.ts
│   │   │   └── whatsapp.service.ts
│   │   └── email/
│   │       ├── email.module.ts
│   │       └── email.service.ts
│   ├── common/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── filters/
│   │   └── decorators/
│   └── prisma/
│       ├── prisma.module.ts
│       └── prisma.service.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── Dockerfile
├── docker-compose.yml
└── package.json
```

### 5.2 Booking Service Logic
```typescript
// booking.service.ts

@Injectable()
export class BookingService {
  constructor(
    private prisma: PrismaService,
    private whatsappService: WhatsAppService,
    private emailService: EmailService,
  ) {}

  async createBooking(dto: CreateBookingDto): Promise<BookingResult> {
    // 1. Validate input
    this.validateBooking(dto);

    // 2. Check date is not in the past
    if (new Date(dto.visit_date) < new Date()) {
      throw new BadRequestException('Tanggal tidak boleh di masa lalu');
    }

    // 3. Check date is not weekend
    const day = new Date(dto.visit_date).getDay();
    if (day === 0 || day === 6) {
      throw new BadRequestException('Hari libur tidak tersedia');
    }

    // 4. Save booking
    const booking = await this.prisma.booking.create({
      data: {
        fullName: dto.full_name,
        email: dto.email,
        phone: dto.phone,
        complaint: dto.complaint,
        visitDate: new Date(dto.visit_date),
        timePreference: dto.time_preference,
        medicalHistory: dto.medical_history,
        insurance: dto.insurance,
        notes: dto.notes,
        status: 'baru',
      },
    });

    // 5. Send WhatsApp notifications
    await this.whatsappService.notifyAdmin(booking);
    await this.whatsappService.sendConfirmation(booking);

    // 6. Send email confirmation
    await this.emailService.sendBookingConfirmation(booking);

    return {
      id: booking.id,
      status: booking.status,
      created_at: booking.created_at,
    };
  }

  async updateStatus(id: string, status: string, adminId: string): Promise<void> {
    const booking = await this.prisma.booking.update({
      where: { id },
      data: { status, updated_at: new Date() },
    });

    // Notify patient of status change
    if (status === 'dikonfirmasi') {
      await this.whatsappService.sendConfirmationUpdate(booking);
    }
  }
}
```

---

## 6. WhatsApp Integration

### 6.1 WhatsApp Configuration
```typescript
// whatsapp.config.ts
export const whatsappConfig = {
  phoneNumber: process.env.WHATSAPP_PHONE_NUMBER, // 6285880008259
  businessName: 'Resindo Medika',
  templates: {
    // Admin notification
    bookingNotification: (booking: Booking) => 
      `📋 *Booking Baru!*\n\n` +
      `Nama: ${booking.fullName}\n` +
      `Keluhan: ${this.getComplaintLabel(booking.complaint)}\n` +
      `Tanggal: ${booking.visitDate}\n` +
      `Jam: ${booking.timePreference}\n` +
      `Telepon: ${booking.phone}\n` +
      `Asuransi: ${booking.insurance || '-'}\n` +
      `Catatan: ${booking.notes || '-'}`,
    
    // Patient confirmation
    bookingConfirmation: (booking: Booking) =>
      `Terima kasih ${booking.fullName}! Booking Anda telah diterima.\n\n` +
      `📅 Tanggal: ${booking.visitDate}\n` +
      `🕐 Jam: ${booking.timePreference}\n` +
      `📍 Lt.5, Jl. Gatot Subroto No.Kav. 23, Jakarta Selatan\n\n` +
      `Tim kami akan menghubungi Anda untuk konfirmasi.\n` +
      `Hubungi: +62 (858) 8000 8259`,

    // Status update
    statusUpdate: (booking: Booking, newStatus: string) =>
      `Halo ${booking.fullName}, booking Anda telah ${newStatus}. ` +
      `Silakan hubungi kami jika ada pertanyaan.`,
    
    // General
    general: 'Halo Resindo Medika, saya ingin membuat janji konsultasi.',
    product: (name: string) => `Halo, saya tertarik dengan ${name}. Mohon informasi.`,
    service: 'Halo, saya ingin servis/kalibrasi alat CPAP.',
    insurance: 'Halo, saya ingin mengecek cakupan asuransi saya untuk sleep apnea.',
  },
};
```

---

## 7. Blog CMS Integration (Sanity)

### 7.1 Sanity Schema
```javascript
// sanity/schemas/blogPost.js
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (Indonesian)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'CPAP Therapy', value: 'cpap-therapy' },
          { title: 'Sleep Health', value: 'sleep-health' },
          { title: 'Conditions & Risks', value: 'conditions-risks' },
        ],
      },
    },
    {
      name: 'content',
      title: 'Content (Indonesian)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'contentEn',
      title: 'Content (English)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'excerpt',
      title: 'Excerpt (Indonesian)',
      type: 'text',
    },
    {
      name: 'excerptEn',
      title: 'Excerpt (English)',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'mainImage' },
  },
};
```

---

## 8. SEO & Performance

### 8.1 SEO Configuration
```typescript
// SEO per page (bilingual)
const seoConfig = {
  home: {
    id: {
      title: 'Resindo Medika — Klinik Gangguan Tidur Jakarta',
      description: 'Distributor resmi CPAP & terapi sleep apnea. Konsultasi gratis, servis & kalibrasi alat. ResMed & SOMNOmedics.',
      keywords: ['sleep apnea', 'CPAP', 'klinik tidur', 'Jakarta', 'ResMed'],
    },
    en: {
      title: 'Resindo Medika — Sleep Apnea Clinic Jakarta',
      description: 'Official distributor of CPAP & sleep apnea therapy. Free consultation, service & calibration. ResMed & SOMNOmedics.',
      keywords: ['sleep apnea', 'CPAP', 'sleep clinic', 'Jakarta', 'ResMed'],
    },
  },
};
```

### 8.2 Performance Targets
| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | ≥ 90 | Lighthouse CI |
| LCP | < 2.5s | Web Vitals |
| FID | < 100ms | Web Vitals |
| CLS | < 0.1 | Web Vitals |
| Initial Bundle | < 120KB gzipped | Next.js build |

### 8.3 Image Optimization
```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};
```

---

## 9. Security

### 9.1 Security Measures
| Layer | Measure | Detail |
|-------|---------|--------|
| Transport | HTTPS/TLS 1.3 | Semua komunikasi terenkripsi |
| Frontend | CSP Headers | Content Security Policy |
| Backend | Rate Limiting | 100 req/min per IP |
| Backend | Input Validation | Class-validator + Zod |
| Backend | SQL Injection | Prisma parameterized queries |
| Database | Encryption at rest | PostgreSQL encryption |
| Auth (Admin) | JWT + HttpOnly Cookie | Expiration 24 jam |
| CORS | Whitelist | Hanya resindo.com |
| Headers | Security Headers | HSTS, X-Frame-Options, etc. |

---

## 10. Deployment

### 10.1 CI/CD Pipeline
```
Code Push → GitHub Actions →
  ├── Lint + Type Check
  ├── Unit Tests
  ├── Build
  ├── Deploy to Staging
  └── (Manual) → Deploy to Production
```

### 10.2 Environment Variables
```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/resindo

# Next.js
NEXT_PUBLIC_API_URL=https://api.resindo.com
NEXT_PUBLIC_WHATSAPP_PHONE=6285880008259
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id

# Backend
JWT_SECRET=your-jwt-secret
WHATSAPP_API_KEY=your-whatsapp-key
SMTP_HOST=smtp.example.com
SMTP_USER=noreply@resindo.com
SMTP_PASS=your-smtp-password

# Sanity
SANITY_API_TOKEN=your-sanity-token
```

### 10.3 Monitoring
| Tool | Purpose | Free Tier |
|------|---------|-----------|
| Vercel Analytics | Web Vitals | ✅ |
| GA4 | User behavior | ✅ |
| Sentry | Error tracking | ✅ (5K/mo) |
| UptimeRobot | Uptime monitoring | ✅ (50 monitors) |
| Sanity Dashboard | CMS monitoring | ✅ |

---

## 11. Testing Strategy

### 11.1 Testing Pyramid
```
        /  E2E Tests  \          ← 10% (Playwright)
       / Integration Tests \     ← 30% (Jest + Supertest)
      /    Unit Tests         \  ← 60% (Jest + Testing Library)
```

### 11.2 Key Test Cases

| Module | Test Type | Case |
|--------|-----------|------|
| Booking Form | Unit | Validasi semua field wajib |
| Booking Form | Unit | Cek tanggal weekend ditolak |
| Booking Form | Unit | Cek tanggal lampau ditolak |
| Booking API | Integration | POST booking valid → 201 |
| Booking API | Integration | POST booking invalid → 400 |
| Blog API | Integration | GET artikel dengan filter lang |
| i18n | Unit | Toggle ID/EN mengubah konten |
| WhatsApp URL | Unit | Generate wa.me URL dengan pre-filled |
| Homepage | E2E | Load homepage < 3s |
| Booking Flow | E2E | Isi form → submit → konfirmasi |
| Blog Flow | E2E | Buka blog → filter → baca artikel |

---

## 12. Scalability Considerations

### 12.1 Current Capacity
| Resource | Spec | Capacity |
|----------|------|----------|
| Frontend (Vercel) | Edge | 100K req/day |
| Backend (Railway) | 512MB | 50 concurrent |
| Database (Supabase) | Free | 500MB, 50K rows |
| Sanity CMS | Free | 100K API requests/mo |
| WhatsApp API | 360dialog | 1000 conversations/mo |

### 12.2 Scaling Triggers
| Metric | Current Limit | Action |
|--------|--------------|--------|
| Bookings/month | 1000 | Upgrade DB |
| Concurrent users | 50 | Upgrade backend RAM |
| Blog posts | 500 | OK (Sanity handles) |
| WhatsApp messages | 1000/mo | Upgrade API plan |

---

## 13. Technology Decision Records

### ADR-001: NestJS vs Laravel
- **Decision:** NestJS
- **Reason:** TypeScript full-stack, modern architecture, microservices-ready
- **Trade-off:** Smaller community vs Laravel, but better DX

### ADR-002: Sanity vs Strapi for Blog
- **Decision:** Sanity
- **Reason:** Real-time preview, better i18n, hosted (less maintenance)
- **Trade-off:** Vendor lock-in vs self-hosted Strapi

### ADR-003: next-intl vs i18next
- **Decision:** next-intl
- **Reason:** Native Next.js App Router support, simpler API
- **Trade-off:** Less mature than i18next, but better integration
