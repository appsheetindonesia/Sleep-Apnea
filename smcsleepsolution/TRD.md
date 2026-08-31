# Technical Requirements Document (TRD)
## SMC Sleep Solution — smcsleepsolution.com

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
│               Frontend (Next.js / Vite)              │
│     SSR/SSG Pages + React SPA (Screening App)        │
│     Hosting: Vercel / Netlify / Cloudflare Pages     │
└──────────────────────┬──────────────────────────────┘
                       │ REST API
┌──────────────────────▼──────────────────────────────┐
│              Backend (Node.js / Express)              │
│        or (Python / FastAPI / Django)                 │
│        Hosting: VPS / Railway / Render               │
└───────┬──────────────┬──────────────┬───────────────┘
        │              │              │
┌───────▼──┐  ┌───────▼──┐  ┌───────▼──────────────┐
│Database  │  │ WhatsApp │  │ Email Service        │
│PostgreSQL│  │ Business │  │ (SMTP / SendGrid)    │
│(Supabase)│  │ API      │  │                      │
└──────────┘  └──────────┘  └──────────────────────┘
```

### 1.2 Technology Stack

| Layer | Technology | Alasan |
|-------|-----------|--------|
| **Frontend** | Next.js 14+ (App Router) | SSR/SSG untuk SEO, React ecosystem |
| **Styling** | Tailwind CSS + shadcn/ui | Rapid development, konsisten |
| **Backend** | Node.js (Express/NestJS) | TypeScript full-stack, ecosystem besar |
| **Database** | PostgreSQL (Supabase) | Reliable, gratis tier, built-in auth |
| **ORM** | Prisma | Type-safe, migration tool |
| **Hosting FE** | Vercel | Zero-config deploy, edge functions |
| **Hosting BE** | Railway / Render | Simple deploy, auto-scaling |
| **CDN** | Cloudflare | Performance, security, DDoS protection |
| **Analytics** | Google Analytics 4 + Plausible | Tracking + privacy-friendly |
| **WhatsApp** | WhatsApp Business API (via Twilio/360dialog) | Official API |

---

## 2. Database Schema

### 2.1 Entity Relationship Diagram
```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   users      │     │  screenings  │     │  products    │
│──────────────│     │──────────────│     │──────────────│
│ id (PK)      │◄────│ user_id (FK) │     │ id (PK)      │
│ email        │     │ id (PK)      │     │ name         │
│ name         │     │ stopbang_score│     │ category     │
│ phone        │     │ ess_score    │     │ brand        │
│ age          │     │ risk_level   │     │ description  │
│ gender       │     │ answers (JSON)│     │ image_url    │
│ height_cm    │     │ status       │     │ specs (JSON) │
│ weight_kg    │     │ created_at   │     │ is_active    │
│ neck_cm      │     │ updated_at   │     │ created_at   │
│ created_at   │     └──────────────┘     └──────────────┘
└──────────────┘
```

### 2.2 Tabel Users
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    age INTEGER NOT NULL CHECK (age >= 18 AND age <= 100),
    gender VARCHAR(20) NOT NULL CHECK (gender IN ('laki-laki', 'perempuan')),
    height_cm DECIMAL(5,1) NOT NULL CHECK (height_cm >= 100 AND height_cm <= 250),
    weight_kg DECIMAL(5,1) NOT NULL CHECK (weight_kg >= 30 AND weight_kg <= 300),
    neck_cm DECIMAL(4,1) CHECK (neck_cm >= 20 AND neck_cm <= 60),
    blood_pressure VARCHAR(10),
    consent_given BOOLEAN NOT NULL DEFAULT FALSE,
    consent_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2.3 Tabel Screenings
```sql
CREATE TABLE screenings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    -- STOP-BANG answers
    sb_snoring BOOLEAN NOT NULL,
    sb_tired BOOLEAN NOT NULL,
    sb_observed BOOLEAN NOT NULL,
    sb_pressure BOOLEAN NOT NULL,
    sb_bmi BOOLEAN NOT NULL, -- auto-calculated
    sb_age BOOLEAN NOT NULL, -- auto-calculated
    sb_neck BOOLEAN NOT NULL, -- auto-calculated
    sb_gender BOOLEAN NOT NULL, -- auto-calculated
    -- Calculated scores
    stopbang_score INTEGER NOT NULL CHECK (stopbang_score >= 0 AND stopbang_score <= 8),
    ess_score INTEGER NOT NULL CHECK (ess_score >= 0 AND ess_score <= 21),
    risk_level VARCHAR(20) NOT NULL CHECK (risk_level IN ('rendah', 'sedang', 'tinggi')),
    -- ESS detailed answers (JSON)
    ess_answers JSONB NOT NULL,
    -- Full answers for audit
    all_answers JSONB NOT NULL,
    -- Follow-up status
    status VARCHAR(20) DEFAULT 'baru' CHECK (status IN ('baru', 'dihubungi', 'konsultasi', 'selesai')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_screenings_risk ON screenings(risk_level);
CREATE INDEX idx_screenings_status ON screenings(status);
CREATE INDEX idx_screenings_created ON screenings(created_at DESC);
```

### 2.4 Tabel Products
```sql
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('CPAP', 'BiPAP', 'Masker', 'Aksesoris')),
    brand VARCHAR(100) NOT NULL DEFAULT 'Philips Respironics',
    description TEXT,
    image_url TEXT,
    specs JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 3. API Design

### 3.1 REST API Endpoints

#### Screening
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/api/screening` | Submit screening baru | No |
| GET | `/api/screening/:id` | Get detail screening | Admin |
| GET | `/api/screenings` | List semua screening | Admin |
| PATCH | `/api/screening/:id/status` | Update status follow-up | Admin |
| GET | `/api/screenings/stats` | Statistik screening | Admin |

#### Products
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/api/products` | List produk | No |
| GET | `/api/products/:id` | Detail produk | No |
| POST | `/api/products` | Tambah produk | Admin |
| PUT | `/api/products/:id` | Update produk | Admin |
| DELETE | `/api/products/:id` | Hapus produk | Admin |

#### Admin Auth
| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/api/admin/login` | Login admin | No |
| POST | `/api/admin/logout` | Logout | Admin |
| GET | `/api/admin/me` | Get current admin | Admin |

### 3.2 API Request/Response Examples

#### POST `/api/screening`
```json
// Request
{
  "name": "Budi Santoso",
  "email": "budi@email.com",
  "phone": "081234567890",
  "age": 45,
  "gender": "laki-laki",
  "height_cm": 170,
  "weight_kg": 85,
  "neck_cm": 42,
  "blood_pressure": "140/90",
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

// Response 201
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
      "whatsapp_message": "Halo, saya telah melakukan screening..."
    }
  }
}
```

#### GET `/api/screenings` (Admin)
```json
// Response 200
{
  "success": true,
  "data": {
    "total": 156,
    "page": 1,
    "per_page": 20,
    "stats": {
      "total": 156,
      "rendah": 45,
      "sedang": 68,
      "tinggi": 43,
      "this_month": 28
    },
    "items": [
      {
        "id": "uuid-xxx",
        "user_name": "Budi Santoso",
        "user_email": "budi@email.com",
        "user_phone": "081234567890",
        "stopbang_score": 8,
        "ess_score": 13,
        "risk_level": "tinggi",
        "status": "baru",
        "created_at": "2026-08-30T10:00:00Z"
      }
    ]
  }
}
```

---

## 4. Frontend Architecture

### 4.1 Project Structure
```
smcsleepsolution/
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── icons/
│   │   └── og-image.png
│   └── robots.txt
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Homepage
│   │   ├── screening/
│   │   │   └── page.tsx            # Screening app
│   │   ├── products/
│   │   │   ├── page.tsx            # Product listing
│   │   │   └── [id]/page.tsx       # Product detail
│   │   ├── services/
│   │   │   └── page.tsx            # Services page
│   │   └── admin/
│   │       ├── layout.tsx          # Admin layout
│   │       ├── page.tsx            # Dashboard
│   │       └── screenings/
│   │           └── page.tsx        # Screening list
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Risks.tsx
│   │   │   └── PSG.tsx
│   │   ├── screening/
│   │   │   ├── StepWrapper.tsx     # Multi-step container
│   │   │   ├── StepPersonalInfo.tsx
│   │   │   ├── StepStopBang.tsx
│   │   │   ├── StepESS.tsx
│   │   │   ├── StepResults.tsx
│   │   │   └── ProgressBar.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ProductModal.tsx
│   │   └── shared/
│   │       ├── WhatsAppButton.tsx
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── SEOHead.tsx
│   ├── lib/
│   │   ├── api.ts                  # API client
│   │   ├── utils.ts                # Helper functions
│   │   ├── constants.ts            # App constants
│   │   └── scoring.ts              # STOP-BANG + ESS calculator
│   ├── hooks/
│   │   ├── useScreening.ts         # Screening state management
│   │   └── useWhatsApp.ts          # WhatsApp integration
│   └── types/
│       ├── screening.ts            # TypeScript types
│       └── product.ts
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

### 4.2 Screening App State Management
```typescript
// State structure for multi-step screening
interface ScreeningState {
  step: 1 | 2 | 3 | 4 | 5 | 6;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    age: number;
    gender: 'laki-laki' | 'perempuan';
    heightCm: number;
    weightKg: number;
    neckCm: number;
    bloodPressure: string;
  };
  stopbang: {
    snoring: boolean | null;
    tired: boolean | null;
    observed: boolean | null;
    pressure: boolean | null;
  };
  ess: {
    reading: 0 | 1 | 2 | 3;
    watchingTv: 0 | 1 | 2 | 3;
    publicPlace: 0 | 1 | 2 | 3;
    passenger: 0 | 1 | 2 | 3;
    lyingAfternoon: 0 | 1 | 2 | 3;
    sittingTalking: 0 | 1 | 2 | 3;
    afterMeal: 0 | 1 | 2 | 3;
  };
  results: {
    stopbangScore: number;
    essScore: number;
    riskLevel: 'rendah' | 'sedang' | 'tinggi';
  } | null;
  consent: boolean;
}
```

### 4.3 Scoring Logic
```typescript
// src/lib/scoring.ts

export function calculateStopBang(
  answers: { snoring: boolean; tired: boolean; observed: boolean; pressure: boolean },
  age: number,
  neckCm: number,
  gender: string,
  bmi: number
): { score: number; details: Record<string, boolean> } {
  const details = {
    snoring: answers.snoring,           // Q1: 0 or 1
    tired: answers.tired,               // Q2: 0 or 1
    observed: answers.observed,         // Q3: 0 or 1
    pressure: answers.pressure,         // Q4: 0 or 1
    bmi: bmi > 35,                       // Q5: auto
    age: age > 50,                       // Q6: auto
    neck: gender === 'laki-laki' ? neckCm > 40 : neckCm > 38, // Q7: auto
    gender: gender === 'laki-laki',      // Q8: auto
  };

  const score = Object.values(details).filter(Boolean).length;
  return { score, details };
}

export function calculateESS(answers: Record<string, number>): number {
  return Object.values(answers).reduce((sum, val) => sum + val, 0);
}

export function getRiskLevel(stopbangScore: number): 'rendah' | 'sedang' | 'tinggi' {
  if (stopbangScore <= 2) return 'rendah';
  if (stopbangScore <= 4) return 'sedang';
  return 'tinggi';
}

export function getESSInterpretation(essScore: number): string {
  if (essScore <= 10) return 'Normal';
  if (essScore <= 14) return 'Kantuk Berlebihan';
  return 'Kantuk Sangat Berlebihan';
}

export function getRecommendation(
  riskLevel: string,
  essInterpretation: string
): { text: string; action: string; priority: string } {
  // Logic sesuai tabel rekomendasi di FRD
  // ...
}
```

---

## 5. Backend Architecture

### 5.1 Project Structure (NestJS)
```
backend/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── config/
│   │   ├── database.config.ts
│   │   ├── whatsapp.config.ts
│   │   └── app.config.ts
│   ├── modules/
│   │   ├── screening/
│   │   │   ├── screening.module.ts
│   │   │   ├── screening.controller.ts
│   │   │   ├── screening.service.ts
│   │   │   ├── screening.dto.ts
│   │   │   └── screening.entity.ts
│   │   ├── product/
│   │   │   ├── product.module.ts
│   │   │   ├── product.controller.ts
│   │   │   ├── product.service.ts
│   │   │   └── product.entity.ts
│   │   ├── admin/
│   │   │   ├── admin.module.ts
│   │   │   ├── admin.controller.ts
│   │   │   ├── admin.service.ts
│   │   │   └── auth.guard.ts
│   │   └── whatsapp/
│   │       ├── whatsapp.module.ts
│   │       └── whatsapp.service.ts
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

### 5.2 Screening Service Logic
```typescript
// screening.service.ts

@Injectable()
export class ScreeningService {
  constructor(
    private prisma: PrismaService,
    private whatsappService: WhatsAppService,
  ) {}

  async createScreening(dto: CreateScreeningDto): Promise<ScreeningResult> {
    // 1. Validate input
    this.validateInput(dto);

    // 2. Check duplicate email (30 days cooldown)
    await this.checkCooldown(dto.email);

    // 3. Calculate scores
    const bmi = dto.weightKg / ((dto.heightCm / 100) ** 2);
    const { score: stopbangScore, details } = this.calculateStopBang(dto, bmi);
    const essScore = this.calculateESS(dto.ess);
    const riskLevel = this.getRiskLevel(stopbangScore);

    // 4. Save user (upsert)
    const user = await this.prisma.user.upsert({
      where: { email: dto.email },
      update: { /* ... */ },
      create: { /* ... */ },
    });

    // 5. Save screening
    const screening = await this.prisma.screening.create({
      data: {
        userId: user.id,
        stopbangScore,
        essScore,
        riskLevel,
        allAnswers: dto as any,
        essAnswers: dto.ess,
        // STOP-BANG individual answers
        sbSnoring: dto.stopbang.snoring,
        sbTired: dto.stopbang.tired,
        sbObserved: dto.stopbang.observed,
        sbPressure: dto.stopbang.pressure,
        sbBmi: bmi > 35,
        sbAge: dto.age > 50,
        sbNeck: details.neck,
        sbGender: dto.gender === 'laki-laki',
      },
    });

    // 6. Generate recommendation
    const recommendation = this.getRecommendation(riskLevel, essScore);

    // 7. Send notification if high risk
    if (riskLevel === 'tinggi') {
      await this.notifyAdmin(screening, user);
    }

    return {
      id: screening.id,
      stopbangScore,
      essScore,
      riskLevel,
      recommendation,
    };
  }
}
```

---

## 6. WhatsApp Integration

### 6.1 WhatsApp Business API Flow
```
User klik "Chat Kami"
       │
       ▼
Frontend construct URL:
https://wa.me/628XXXXXXXXXX?text={encoded_message}
       │
       ▼
WhatsApp Business Chat terbuka
       │
       ▼
Admin menerima & membalas
       │
       ▼
(Optional) Backend log inquiry
```

### 6.2 WhatsApp Configuration
```typescript
// whatsapp.config.ts
export const whatsappConfig = {
  phoneNumber: process.env.WHATSAPP_PHONE_NUMBER, // 628XXXXXXXXXX
  businessName: 'SMC Sleep Solution',
  templates: {
    general: 'Halo SMC Sleep Solution, saya ingin bertanya tentang layanan Anda.',
    screeningHigh: (name: string, score: number) =>
      `Halo, saya ${name} telah melakukan screening Sleep Apnea. ` +
      `Hasil skor STOP-BANG saya ${score}/8 (RISIKO TINGGI). ` +
      `Saya ingin segera booking Sleep Test.`,
    screeningMedium: (name: string, score: number) =>
      `Halo, saya ${name} telah melakukan screening Sleep Apnea. ` +
      `Hasil skor STOP-BANG saya ${score}/8 (RISIKO SEDANG). ` +
      `Saya ingin konsultasi.`,
    screeningLow: (name: string, score: number) =>
      `Halo, saya ${name} telah melakukan screening Sleep Apnea. ` +
      `Hasil skor STOP-BANG saya ${score}/8 (risiko rendah). ` +
      `Mohon tips kesehatan tidur.`,
    product: (productName: string) =>
      `Halo, saya tertarik dengan ${productName}. Mohon informasi harga dan ketersediaan.`,
    service: 'Halo, saya ingin menjadwalkan servis/kalibrasi alat CPAP saya.',
    rental: 'Halo, saya ingin menyewa alat CPAP. Mohon informasi.',
  },
};
```

---

## 7. SEO & Performance

### 7.1 SEO Configuration
```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      ],
    },
  ],
};
```

### 7.2 Meta Tags Strategy
```typescript
// Per-page SEO metadata
const seoConfig = {
  home: {
    title: 'SMC Sleep Solution — Solusi Sleep Apnea Indonesia',
    description: 'Distributor resmi Philips Respironics. Screening Sleep Apnea gratis, layanan diagnostik tidur, servis & kalibrasi CPAP/BiPAP.',
    keywords: ['sleep apnea', 'CPAP', 'BiPAP', 'Philips Respironics', 'distributor CPAP Indonesia'],
    ogImage: '/og-home.png',
  },
  screening: {
    title: 'Screening Sleep Apnea Gratis — SMC Sleep Solution',
    description: 'Lakukan skrining risiko Sleep Apnea gratis dalam 5 langkah. Evaluasi STOP-BANG dan ESS.',
    ogImage: '/og-screening.png',
  },
};
```

### 7.3 Performance Targets
| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | ≥ 90 | Lighthouse CI |
| LCP | < 2.5s | Web Vitals |
| FID | < 100ms | Web Vitals |
| CLS | < 0.1 | Web Vitals |
| FCP | < 1.8s | Web Vitals |
| TTI | < 3.5s | Lighthouse |
| Bundle Size (initial) | < 150KB gzipped | Next.js build |

### 7.4 Image Optimization
```typescript
// Optimized image component
import Image from 'next/image';

<Image
  src="/images/products/dreamstation-cpap.webp"
  alt="CPAP Auto DreamStation Philips Respironics"
  width={400}
  height={300}
  priority={false} // Above the fold: priority={true}
  placeholder="blur"
  blurDataURL={blurPlaceholder}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## 8. Security

### 8.1 Security Measures
| Layer | Measure | Detail |
|-------|---------|--------|
| Transport | HTTPS/TLS 1.3 | Semua komunikasi terenkripsi |
| Frontend | CSP Headers | Content Security Policy untuk mencegah XSS |
| Backend | Rate Limiting | 100 requests/minute per IP untuk API screening |
| Backend | Input Validation | Zod schema validation untuk semua input |
| Backend | SQL Injection | Prisma ORM parameterized queries |
| Database | Encryption at rest | PostgreSQL encryption |
| Auth (Admin) | JWT + HttpOnly Cookie | Token expiration 24 jam |
| Auth (Admin) | bcrypt password hash | Cost factor 12 |
| Data | Pseudonymization | Email di-hash untuk analytics |
| CORS | Whitelist | Hanya domain smcsleepsolution.com |
| Headers | Security Headers | X-Frame-Options, HSTS, etc. |

### 8.2 Rate Limiting
```typescript
// Rate limit configuration
const rateLimitConfig = {
  screening: {
    windowMs: 60 * 1000,  // 1 minute
    max: 5,                // 5 submissions per minute
    message: 'Terlalu banyak percobaan. Silakan coba lagi dalam 1 menit.',
  },
  api: {
    windowMs: 60 * 1000,
    max: 100,
    message: 'Rate limit exceeded.',
  },
};
```

---

## 9. Deployment

### 9.1 CI/CD Pipeline
```
Code Push → GitHub Actions → 
  ├── Lint + Type Check
  ├── Unit Tests
  ├── Build
  ├── Deploy to Staging
  └── (Manual Approval) → Deploy to Production
```

### 9.2 Environment Variables
```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/smcsleep

# Next.js
NEXT_PUBLIC_API_URL=https://api.smcsleepsolution.com
NEXT_PUBLIC_WHATSAPP_PHONE=628XXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Backend
JWT_SECRET=your-jwt-secret
WHATSAPP_API_KEY=your-whatsapp-api-key
SMTP_HOST=smtp.example.com
SMTP_USER=noreply@smcsleepsolution.com
SMTP_PASS=your-smtp-password

# Admin
ADMIN_DEFAULT_EMAIL=admin@smcsleepsolution.com
ADMIN_DEFAULT_PASSWORD=changeme
```

### 9.3 Monitoring & Logging
| Tool | Purpose | Free Tier |
|------|---------|-----------|
| Vercel Analytics | Web Vitals, traffic | ✅ |
| Google Analytics 4 | User behavior | ✅ |
| Sentry | Error tracking | ✅ (5K events/mo) |
| UptimeRobot | Uptime monitoring | ✅ (50 monitors) |
| Plausible Analytics | Privacy-friendly analytics | Self-hosted |

---

## 10. Testing Strategy

### 10.1 Testing Pyramid
```
        /  E2E Tests  \          ← 10% (Playwright/Cypress)
       / Integration Tests \     ← 30% (Jest + Supertest)
      /    Unit Tests         \  ← 60% (Jest + Testing Library)
```

### 10.2 Key Test Cases

| Module | Test Type | Case |
|--------|-----------|------|
| Screening Scoring | Unit | Hitung STOP-BANG score (0-8) |
| Screening Scoring | Unit | Hitung ESS score (0-21) |
| Screening Scoring | Unit | Kategorisasi risiko (rendah/sedang/tinggi) |
| Screening Scoring | Unit | Rekomendasi berdasarkan kombinasi risiko + ESS |
| API Screening | Integration | POST screening valid → 201 |
| API Screening | Integration | POST screening invalid → 400 |
| API Screening | Integration | POST screening email duplicate → 429 |
| API Screening | Integration | GET screening list (admin auth) |
| WhatsApp URL | Unit | Generate correct wa.me URL |
| WhatsApp URL | Unit | Encode pre-filled message |
| Homepage | E2E | Load homepage < 3s |
| Screening Flow | E2E | Complete 6-step screening |
| Admin Login | E2E | Login → Dashboard → View screening |

---

## 11. Scalability Considerations

### 11.1 Current Capacity
| Resource | Spec | Capacity |
|----------|------|----------|
| Frontend (Vercel) | Edge Functions | 100K requests/day |
| Backend (Railway) | 512MB RAM | 50 concurrent users |
| Database (Supabase) | Free tier | 500MB, 50K rows |
| WhatsApp API | 360dialog | 1000 conversations/month |

### 11.2 Scaling Triggers
| Metric | Current Limit | Action When Hit |
|--------|--------------|-----------------|
| Screening submissions | 1000/month (DB limit) | Upgrade Supabase plan |
| Concurrent users | 50 | Upgrade backend RAM |
| WhatsApp messages | 1000/month | Upgrade API plan |
| Storage (images) | 1GB | Move to S3/R2 |

---

## 12. Migration & Rollback Plan

### 12.1 Database Migration
```bash
# Create migration
npx prisma migrate dev --name add_screening_table

# Apply to production
npx prisma migrate deploy

# Rollback (manual - create reverse migration)
npx prisma migrate dev --name revert_screening
```

### 12.2 Feature Flags
```typescript
// Gradual rollout
const featureFlags = {
  screeningV2: process.env.ENABLE_SCREENING_V2 === 'true',
  blogModule: process.env.ENABLE_BLOG === 'true',
  patientPortal: process.env.ENABLE_PATIENT_PORTAL === 'true',
};
```

---

## 13. Technology Decision Records

### ADR-001: Next.js vs WordPress
- **Decision:** Next.js
- **Reason:** SEO performance, React ecosystem, modern DX, better for screening app interactivity
- **Trade-off:** Higher dev skill requirement vs WordPress

### ADR-002: PostgreSQL vs MongoDB
- **Decision:** PostgreSQL (Supabase)
- **Reason:** Structured data, ACID compliance for screening data, type-safe with Prisma
- **Trade-off:** Less flexible schema vs MongoDB

### ADR-003: WhatsApp Business API vs WhatsApp Link
- **Decision:** Simple wa.me link (Phase 1), Official API (Phase 2)
- **Reason:** Cost-effective MVP, can upgrade later
- **Trade-off:** No automation initially vs full API
