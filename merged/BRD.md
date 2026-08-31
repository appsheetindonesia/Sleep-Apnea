# Business Requirements Document (BRD)
## Unified Sleep Healthcare Platform
### Gabungan & Penyempurnaan: SMC Sleep Solution × Resindo Medika × CPAPINDO

**Versi Dokumen:** 2.0 (Merged & Enhanced)  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Business Analysis  
**Status:** Final  
**Referensi:** smcsleepsolution.com, resindo.com, cpapindo.com

---

## 1. Ringkasan Bisnis (Business Summary)

### 1.1 Visi Bisnis Konsolidasi
Membangun **Unified Sleep Healthcare Platform** — ekosistem digital terpadu pertama di Indonesia yang menggabungkan edukasi, screening, diagnostik, klinik, e-commerce, dan personalized therapy dalam satu platform. Platform ini menjembatani tiga entitas bisnis (SMC Sleep Solution, Resindo Medika, CPAPINDO) menjadi satu kekuatan pasar yang terintegrasi.

### 1.2 Profil Entitas yang Digabung

| Entitas | Core Business | Brand Partner | Digital Platform | Revenue Stream |
|---------|--------------|---------------|-----------------|----------------|
| **PT SMC Global Distribusi** | Edukasi + Distribusi | Philips Respironics | Custom website | Distribusi, Servis |
| **PT Resindo Medika** | Klinik + Distributor | ResMed, SOMNOmedics | Custom website | Konsultasi, Terapi |
| **PT Indo Medika Nusantara (IMN)** | E-commerce + Diagnostik | Nox Medical, BMC, Yuwell | Shopify | E-commerce, HST |

### 1.3 Model Bisnis Gabungan

```
┌─────────────────────────────────────────────────────────────┐
│           UNIFIED SLEEP HEALTHCARE BUSINESS MODEL            │
│                                                              │
│  REVENUE STREAMS:                                            │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ 1. PRODUCTS │  │ 2. SERVICES │  │ 3. RETENTION│         │
│  │   (45%)     │  │   (35%)     │  │   (20%)     │         │
│  │             │  │             │  │             │         │
│  │ • CPAP      │  │ • Sleep Test│  │ • Repeat    │         │
│  │ • BiPAP     │  │   (HST/PSG) │  │   Purchase  │         │
│  │ • Masker    │  │ • Konsultasi│  │ • Loyalty   │         │
│  │ • Parts     │  │ • Therapy   │  │ • Annual    │         │
│  │ • Bundle    │  │ • Service   │  │   Service   │         │
│  │   Deals     │  │ • Rental    │  │ • Education │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                              │
│  TARGET MARKET SIZES:                                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ TAM: 40% x 270 juta = 108 juta (pendengkur)         │   │
│  │ SAM: 10% x 108 juta = 10.8 juta (berisiko OSA)      │   │
│  │ SOM: 0.1% x 10.8 juta = 108.000 pasien aktif        │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Kebutuhan Bisnis (Business Needs)

### 2.1 Strategic Business Needs

| ID | Kebutuhan | Urgensi | Dampak Revenue | ROI Estimasi |
|----|-----------|---------|---------------|-------------|
| SBN-01 | **One-stop platform** untuk sleep healthcare | KRITIS | +40% customer acquisition | 200%+ |
| SBN-02 | **Screening funnel** untuk mengkonversi awareness → leads | TINGGI | +25% conversion rate | 300%+ |
| SBN-03 | **E-commerce multi-brand** untuk semua produk | TINGGI | +50% product revenue | 150%+ |
| SBN-04 | **Digital booking** untuk semua layanan | TINGGI | -30% response time | 250%+ |
| SBN-05 | **Personalized therapy** sebagai differentiator | SEDANG | +35% customer LTV | 180%+ |
| SBN-06 | **Repeat purchase system** untuk retensi | SEDANG | +30% repeat rate | 400%+ |
| SBN-07 | **Content marketing** untuk SEO & edukasi | SEDANG | +100% organic traffic | 500%+ |
| SBN-08 | **Bilingual support** (ID/EN) | RENDAH | +15% international patients | 120%+ |

### 2.2 Operational Business Needs

| ID | Kebutuhan | Saat Ini | Target |
|----|-----------|---------|--------|
| OBN-01 | Centralized customer data | Fragmented (3 system) | 1 unified CRM |
| OBN-02 | Real-time inventory | Manual tracking | Auto-sync |
| OBN-03 | Automated notifications | Manual WA | Automated WA + Email |
| OBN-04 | Analytics dashboard | Per-platform | Unified dashboard |
| OBN-05 | Content management | Hardcoded | Headless CMS |
| OBN-06 | Multi-payment support | Limited | Full payment options |
| OBN-07 | Shipping integration | Manual | Multi-carrier auto |

---

## 3. Analisis Stakeholder

### 3.1 Stakeholder Map (Consolidated)

```
                    TINGGI PENGARUH
                         │
          ┌──────────────┼──────────────┐
          │  Management  │  Medical     │
          │  (3 Founders)│  Advisors    │
          │  [KEEP       │  (Dokter +   │
          │  SATISFIED]  │   RPSGT)     │
Tinggi    │              │  [KEEP       │
Kepentingan│              │  SATISFIED]  │
          ├──────────────┼──────────────┤
          │  E-commerce  │  End Users   │
          │  Manager     │  (Pasien)    │
          │  [MANAGE     │  [MANAGE     │
          │  CLOSELY]    │  CLOSELY]    │
          │              │              │
          └──────────────┼──────────────┘
                         │
                    RENDAH PENGARUH
```

### 3.2 Detailed Stakeholder Analysis

| Stakeholder | Organisasi | Peran | Kepentingan | Pengaruh | Komunikasi |
|-------------|-----------|-------|-------------|---------|------------|
| Direktur SMC | PT SMC Global | Brand Philips owner | Tinggi | Tinggi | Briefing mingguan |
| Alexander Ecker | PT Resindo Medika | Founder & Medical Lead | Tinggi | Tinggi | Briefing mingguan |
| Director IMN | PT Indo Medika Nusantara | E-commerce & Diagnostic Lead | Tinggi | Tinggi | Briefing mingguan |
| Medical Team | Multi-organisasi | Validasi konten & prosedur | Tinggi | Sedang | Review berkala |
| E-commerce Manager | Platform | Operasional toko | Tinggi | Sedang | Daily standup |
| Marketing Team | Platform | Digital marketing | Tinggi | Sedang | Sprint planning |
| CS Team | Platform | Customer service | Sedang | Sedang | Training |
| IT Team | Platform | Development & ops | Sedang | Sedang | Sprint review |
| Brand Partners | Philips/ResMed/etc | Product supply | Sedang | Tinggi | Quarterly review |
| Patients | End users | Consumer | Tinggi | Sedang | Survei kepuasan |

---

## 4. Analisis Bisnis (Business Analysis)

### 4.1 As-Is: Fragmented Ecosystem
```
CURRENT STATE (FRAGMENTED)
═══════════════════════════

Customer Journey (BROKEN):
┌─────────┐    ┌─────────┐    ┌─────────┐
│ SMC     │    │ Resindo │    │CPAPINDO │
│Website  │    │Website  │    │Website  │
│         │    │         │    │         │
│•Edukasi │    │•Klinik  │    │•E-commerce│
│•Screening│   │•Booking │    │•HST     │
│•Philips │    │•ResMed  │    │•Nox/BMC │
└─────────┘    └─────────┘    └─────────┘
     │              │              │
     └──────┬───────┘              │
            │                      │
    ┌───────▼──────┐      ┌───────▼──────┐
    │   CONFUSED   │      │   FRAGMENTED │
    │   CUSTOMER   │      │    DATA      │
    │   (3 URLs)   │      │  (3 Systems) │
    └──────────────┘      └──────────────┘

PROBLEMS:
❌ Customer harus buka 3 website berbeda
❌ Data pasien tidak terhubung
❌ Tidak ada patient journey tracking
❌ Duplicate content & marketing effort
❌ Inconsistent brand experience
❌ Higher customer acquisition cost
❌ Lower customer lifetime value
```

### 4.2 To-Be: Unified Ecosystem
```
FUTURE STATE (UNIFIED)
═══════════════════════

Customer Journey (SEAMLESS):
┌──────────────────────────────────────────┐
│       UNIFIED SLEEP HEALTHCARE           │
│            PLATFORM                      │
│                                          │
│  ┌────────┐ ┌────────┐ ┌────────┐      │
│  │EDUCATE │→│SCREEN │→│DIAGNOSE│      │
│  │(Blog)  │ │(FREE)  │ │(HST/   │      │
│  │        │ │        │ │ PSG)   │      │
│  └────────┘ └────────┘ └───┬────┘      │
│                             │            │
│  ┌────────┐ ┌────────┐ ┌───▼────┐      │
│  │RETAIN  │←│THERAPY │←│TREAT  │      │
│  │(Repeat)│ │(CPAP)  │ │(Consult│      │
│  │        │ │        │ │+ Shop) │      │
│  └────────┘ └────────┘ └────────┘      │
│                                          │
│  UNIFIED DATA: Single customer view      │
│  UNIFIED BRAND: Consistent experience    │
│  UNIFIED MARKETING: One CAC, higher LTV  │
└──────────────────────────────────────────┘

BENEFITS:
✅ Single customer journey (awareness → retention)
✅ Unified customer data (single view)
✅ Cross-sell & upsell opportunities
✅ Higher conversion rates
✅ Lower customer acquisition cost
✅ Higher customer lifetime value
✅ Better SEO (one domain authority)
✅ Consistent brand experience
```

### 4.3 Revenue Model Comparison

| Metric | As-Is (3 Separate) | To-Be (Unified) | Improvement |
|--------|-------------------|----------------|-------------|
| **Revenue Streams** | 3 separate | 1 unified | +Cross-sell |
| **Customer Acquisition Cost** | Rp 500rb/pasien | Rp 200rb/pasien | -60% |
| **Customer Lifetime Value** | Rp 5 juta | Rp 12 juta | +140% |
| **Avg Order Value** | Rp 2.5 juta | Rp 4 juta | +60% |
| **Repeat Purchase Rate** | 15% | 40% | +167% |
| **Conversion Rate** | 1.5% | 4% | +167% |
| **Organic Traffic** | 15K/bulan total | 75K/bulan | +400% |

---

## 5. Financial Analysis

### 5.1 Revenue Projections (18 Months)

| Revenue Stream | Month 6 | Month 12 | Month 18 | % of Total |
|----------------|---------|----------|----------|-----------|
| **Product Sales** | | | | |
| CPAP Machines | Rp 200jt | Rp 500jt | Rp 800jt | 30% |
| BiPAP Machines | Rp 50jt | Rp 150jt | Rp 250jt | 10% |
| Masks & Parts | Rp 80jt | Rp 200jt | Rp 350jt | 13% |
| Bundle Deals | Rp 70jt | Rp 150jt | Rp 250jt | 9% |
| **Service Revenue** | | | | |
| Sleep Test (HST/PSG) | Rp 100jt | Rp 400jt | Rp 700jt | 22% |
| Consultation | Rp 50jt | Rp 150jt | Rp 300jt | 9% |
| Therapy Services | Rp 30jt | Rp 100jt | Rp 200jt | 6% |
| **Recurring** | | | | |
| Repeat Purchase | Rp 20jt | Rp 100jt | Rp 200jt | 6% |
| **TOTAL** | **Rp 600jt** | **Rp 1.75M** | **Rp 3.05M** | **100%** |

### 5.2 Cost Structure

| Cost Category | Month 1-3 | Month 4-6 | Month 7-12 | Month 13-18 |
|---------------|-----------|-----------|------------|-------------|
| Development | Rp 120jt | Rp 80jt | Rp 40jt | Rp 30jt |
| Infrastructure | Rp 15jt | Rp 25jt | Rp 35jt | Rp 45jt |
| Marketing | Rp 30jt | Rp 45jt | Rp 60jt | Rp 75jt |
| Operations | Rp 15jt | Rp 25jt | Rp 35jt | Rp 45jt |
| **Total Cost** | **Rp 180jt** | **Rp 175jt** | **Rp 170jt** | **Rp 195jt** |

### 5.3 Profitability Analysis

| Metric | Month 6 | Month 12 | Month 18 |
|--------|---------|----------|----------|
| Revenue | Rp 600jt | Rp 1.75M | Rp 3.05M |
| Cost | Rp 175jt | Rp 170jt | Rp 195jt |
| **Gross Profit** | **Rp 425jt** | **Rp 1.58M** | **Rp 2.86M** |
| **Gross Margin** | **71%** | **90%** | **94%** |
| **ROI** | **243%** | **929%** | **1,467%** |
| **Payback Period** | **3 bulan** | - | - |

---

## 6. Market Analysis

### 6.1 Market Size (Indonesia)

```
TOTAL ADDRESSABLE MARKET (TAM)
════════════════════════════════
Population:                    270 juta
Pendengkur (40%):              108 juta
Berisiko OSA (10%):            10.8 juta
Diagnosed (<1%):               < 108.000

SERVICEABLE ADDRESSABLE MARKET (SAM)
════════════════════════════════════
Urban population (30%):         81 juta
Pendengkur urban:               32.4 juta
Berisiko OSA urban:             3.24 juta
Bisa diakses digital (50%):     1.62 juta

SERVICEABLE OBTAINABLE MARKET (SOM)
═══════════════════════════════════
Year 1 target:                  108.000 pasien
Year 2 target:                  324.000 pasien
Year 3 target:                  810.000 pasien
```

### 6.2 Market Trends

| Trend | Dampak | Strategi |
|-------|--------|----------|
| Digital health adoption naik | Lebih banyak pasien cari online | Dominasi digital presence |
| Telemedicine booming | Ekspektasi akses mudah | Siapkan telemedicine (fase lanjutan) |
| Health consciousness naik | Demand edukasi kesehatan | Content marketing kuat |
| E-commerce health products | Shift ke online purchasing | E-commerce integration |
| Insurance coverage expanding | Lebih banyak pasien mampu | Partner asuransi |
| Government health program | program JKN/BPJS | Optimasi untuk BPJS |

---

## 7. Kebutuhan Regulasi & Kepatuhan

### 7.1 Regulatory Landscape

| ID | Regulasi | Persyaratan Utama | Dampak Platform | Prioritas |
|----|----------|-------------------|----------------|-----------|
| REG-01 | **UU PDP No. 27/2022** | Consent, hak hapus, enkripsi, DPO | Semua data pasien | KRITIS |
| REG-02 | **Permenkes No. 20/2019** | Pemasaran alat kesehatan | Konten produk | TINGGI |
| REG-03 | **Pedoman IKP** | Iklan kesehatan tidak menyesatkan | Copywriting | TINGGI |
| REG-04 | **Hukum Kedokteran** | Informed consent untuk layanan medis | Booking flow | TINGGI |
| REG-05 | **AASM Standards** | Standar sleep testing internasional | HST/PSG process | TINGGI |
| REG-06 | **PCI-DSS** | Keamanan data pembayaran | E-commerce checkout | TINGGI |
| REG-07 | **BPOM** | Pendaftaran alat kesehatan | Sudah dimiliki | SEDANG |

### 7.2 Compliance Implementation Plan

| Area | Action Items | Timeline | Owner |
|------|-------------|----------|-------|
| PDP | Privacy policy, consent mechanism, data retention | Month 1-2 | Legal + Tech |
| Medical | Disclaimer di semua konten medis, informed consent | Month 1-2 | Medical + Content |
| E-commerce | Terms & conditions, refund policy | Month 2-3 | Legal + Ops |
| Marketing | Review semua konten marketing untuk kepatuhan | Ongoing | Marketing + Legal |
| Security | Penetration testing, vulnerability assessment | Month 3-4 | Security + Tech |

---

## 8. Competitive Strategy

### 8.1 Porter's Five Forces

```
THREAT OF NEW ENTRANTS: MODERATE
├── Capital requirement: Medium (Rp 200-300jt)
├── Brand relationship: High barrier
├── Medical expertise: High barrier
└── Digital platform: Medium barrier

BARGAINING POWER OF SUPPLIERS: MODERATE
├── Brand exclusivity: Some (Nox Medical)
├── Multiple brands: Reduce dependency
└── Authorized distributor: Reduces supplier power

BARGAINING POWER OF BUYERS: HIGH
├── Price sensitivity: High
├── Switching cost: Low
└── Information availability: High (internet)

THREAT OF SUBSTITUTES: LOW
├── CPAP is gold standard for OSA
├── No effective alternative for moderate-severe OSA
└── Surgery has limited applicability

COMPETITIVE RIVALRY: MODERATE
├── Few specialized competitors
├── Differentiation opportunities: High
└── Geographic concentration: Jakarta-centric
```

### 8.2 Competitive Moat Strategy

| Moat Type | Strategy | Implementation |
|-----------|----------|----------------|
| **Brand** | Unified brand authority | Consistent content + medical endorsements |
| **Network** | Doctor & hospital partnerships | Referral program + B2B portal |
| **Data** | Patient journey data | Personalized recommendations |
| **Switching Cost** | Therapy data lock-in | Continuous monitoring + data review |
| **Economies of Scale** | Bulk purchasing from brands | Better margins → lower prices |
| **Content** | SEO dominance | 500+ articles, video, interactive tools |

---

## 9. Strategic Roadmap

### 9.1 Phase 1: Foundation (Month 1-6)

```
MONTH 1-2: SETUP & DESIGN
├── Team assembly (8-10 people)
├── UI/UX design (all modules)
├── Database schema design
├── API architecture
├── Brand guidelines unification
└── Content strategy

MONTH 3-4: CORE DEVELOPMENT
├── Homepage + Navigation
├── Screening Tool (STOP-BANG + ESS)
├── Blog CMS (Sanity)
├── WhatsApp Integration
├── Shopify theme customization
├── Product catalog
└── Booking system

MONTH 5-6: LAUNCH & OPTIMIZE
├── Bundle deals
├── HST booking flow
├── SEO optimization
├── Analytics setup
├── Beta testing
└── Public launch
```

### 9.2 Phase 2: Growth (Month 7-12)

```
MONTH 7-9: CONTENT & RETENTION
├── 100+ blog articles
├── Video edukatif
├── Customer account
├── Repeat purchase automation
├── Email marketing flows
└── Loyalty program

MONTH 10-12: SCALE & B2B
├── B2B portal (grosir)
├── Marketplace integration
├── Multi-city expansion
├── Advanced analytics
├── A/B testing program
└── Partnership program
```

### 9.3 Phase 3: Innovation (Month 13-18)

```
MONTH 13-15: MOBILE & AI
├── Mobile app (React Native)
├── AI-based product recommendation
├── Chatbot untuk screening
└── Predictive analytics

MONTH 16-18: ECOSYSTEM
├── Telemedicine integration
├── Insurance integration
├── Patient community
├── Doctor marketplace
└── International expansion (SEA)
```

---

## 10. Risk Analysis & Mitigation

### 10.1 Risk Matrix

```
                    TINGGI DAMPAK
                         │
     ┌───────────────────┼───────────────────┐
     │                   │                   │
     │  R-03 (Payment)   │  R-01 (Data       │
     │  R-07 (Scheduling)│   Breach)         │
     │                   │  R-08 (Platform    │
     │  PROB: SEDANG     │   Down)           │
     │                   │  PROB: RENDAH     │
SEDANG├───────────────────┼───────────────────┤SEDANG
PROB  │                   │                   │ PROB
     │  R-09 (Content)   │  R-05 (Competitor) │
     │  R-10 (Budget)    │  R-06 (Regulation) │
     │                   │  R-11 (Brand)     │
     │  PROB: SEDANG     │  PROB: RENDAH     │
     │                   │                   │
     └───────────────────┼───────────────────┘
                         │
                    RENDAH DAMPAK
```

### 10.2 Risk Register

| ID | Risk | Probability | Impact | Score | Mitigation | Owner | Status |
|----|------|-------------|--------|-------|------------|-------|--------|
| R-01 | Data pasien bocor | Rendah | KRITIS | 12 | Enkripsi, PDP compliance, audit | Security | Active |
| R-02 | Screening salah interpretasi | Sedang | TINGGI | 9 | Disclaimer, rujuk ke dokter | Medical | Active |
| R-03 | Payment gateway error | Sedang | TINGGI | 9 | Multi-gateway, manual fallback | Tech | Active |
| R-04 | Stok produk habis | Sedang | SEDANG | 6 | Real-time inventory, safety stock | Ops | Active |
| R-05 | Kompetitor meniru | Sedang | RENDAH | 4 | Terus inovasi, first-mover advantage | Product | Monitor |
| R-06 | Regulasi berubah | Rendah | SEDANG | 4 | Monitoring berkala, adaptasi cepat | Legal | Monitor |
| R-07 | Scheduling conflict | Sedang | SEDANG | 6 | Kalender terintegrasi, buffer time | Ops | Active |
| R-08 | Platform down | Rendah | TINGGI | 6 | CDN, auto-scaling, DR plan | DevOps | Active |
| R-09 | Konten tidak konsisten | Sedang | RENDAH | 4 | CMS workflow, editorial calendar | Content | Active |
| R-10 | Budget overrun | Sedang | SEDANG | 6 | Agile methodology, sprint review | PM | Active |
| R-11 | Brand partner tidak setuju | Rendah | TINGGI | 6 | Negotiation, value proposition | Management | Active |
| R-12 | Tim tidak tersedia | Sedang | TINGGI | 9 | Backup plan, contractor network | PM | Active |

---

## 11. Success Metrics & KPIs

### 11.1 Balanced Scorecard

```
FINANCIAL PERSPECTIVE
├── Revenue Growth: 50%+ YoY
├── Gross Margin: > 80%
├── Customer Acquisition Cost: < Rp 250rb
├── Customer Lifetime Value: > Rp 10 juta
└── LTV/CAC Ratio: > 40x

CUSTOMER PERSPECTIVE
├── NPS Score: > 65
├── Customer Satisfaction: > 4.5/5
├── Repeat Purchase Rate: > 40%
├── Net Revenue Retention: > 120%
└── Time to First Value: < 7 days

INTERNAL PROCESS PERSPECTIVE
├── Conversion Rate: > 4%
├── Average Order Value: > Rp 4 juta
├── Order Fulfillment Time: < 24 hours
├── Support Response Time: < 1 hour
└── System Uptime: > 99.9%

LEARNING & GROWTH PERSPECTIVE
├── Employee Satisfaction: > 4.0/5
├── Training Hours/Quarter: > 20 hours
├── Innovation Pipeline: 5+ features/quarter
├── Content Published: 20+ articles/month
└── SEO Ranking: Top 3 for target keywords
```

### 11.2 KPI Dashboard

| Category | KPI | M6 Target | M12 Target | M18 Target |
|----------|-----|-----------|------------|------------|
| **Traffic** | Unique Visitors | 30K | 75K | 150K |
| **Traffic** | Organic % | 50% | 65% | 75% |
| **Screening** | Completions | 500 | 1,000 | 2,000 |
| **Screening** | Conversion to Consult | 8% | 12% | 15% |
| **Booking** | Consultations | 200 | 500 | 1,000 |
| **Booking** | HST Tests | 100 | 300 | 500 |
| **Revenue** | Total Revenue | Rp 950jt | Rp 1.9M | Rp 3.2M |
| **Revenue** | E-commerce | Rp 400jt | Rp 1M | Rp 1.65M |
| **Revenue** | Services | Rp 280jt | Rp 650jt | Rp 1.2M |
| **Engagement** | Bounce Rate | < 45% | < 40% | < 35% |
| **Engagement** | Session Duration | > 3 min | > 4 min | > 5 min |
| **Customer** | NPS | > 55 | > 65 | > 75 |
| **Customer** | Repeat Rate | 25% | 40% | 50% |
| **Customer** | LTV | Rp 8jt | Rp 12jt | Rp 18jt |

---

## 12. Organizational Requirements

### 12.1 Team Structure (Unified)

```
┌─────────────────────────────────────────────────────┐
│                STEERING COMMITTEE                    │
│  (3 Founders + Medical Director)                    │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│                  PRODUCT OWNER                       │
└──────────────────────┬──────────────────────────────┘
                       │
       ┌───────────────┼───────────────┐
       │               │               │
┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
│   DESIGN    │ │ ENGINEERING │ │  CONTENT &  │
│    TEAM     │ │    TEAM     │ │  MARKETING  │
│             │ │             │ │             │
│ • UX/UI     │ │ • Frontend  │ │ • Writer    │
│   Designer  │ │   (2)       │ │   (ID/EN)   │
│             │ │ • Backend   │ │ • SEO       │
│             │ │   (2)       │ │   Specialist│
│             │ │ • Shopify   │ │ • Social    │
│             │ │   Dev (1)   │ │   Media     │
│             │ │ • QA (1)    │ │             │
└─────────────┘ └─────────────┘ └─────────────┘
```

### 12.2 Roles & Responsibilities Matrix (RACI)

| Activity | Product Owner | Design | Frontend | Backend | Content | Marketing | Medical |
|----------|:------------:|:------:|:--------:|:-------:|:-------:|:---------:|:-------:|
| Feature Prioritization | **A** | C | C | C | C | C | C |
| UI/UX Design | I | **A/R** | C | - | - | C | - |
| Frontend Development | I | C | **A/R** | C | - | - | - |
| Backend Development | I | - | C | **A/R** | - | - | - |
| Content Creation | I | - | - | - | **A/R** | C | **R** |
| SEO Strategy | I | - | C | C | C | **A/R** | - |
| Medical Validation | I | - | - | - | R | - | **A** |
| Deployment | **A** | - | R | R | - | - | - |

**R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed

---

## 13. Vendor & Technology Selection

### 13.1 Technology Stack Decision

| Decision | Options Evaluated | Selected | Reason |
|----------|------------------|----------|--------|
| **E-commerce** | Shopify vs WooCommerce vs Custom | Shopify | PCI compliance, managed, fast |
| **Frontend** | Next.js vs Nuxt vs Custom | Next.js | SSR/SSG, SEO, React ecosystem |
| **Backend** | NestJS vs Laravel vs Django | NestJS | TypeScript, modular, scalable |
| **CMS** | Sanity vs Strapi vs Contentful | Sanity | Real-time, i18n, hosted |
| **Database** | PostgreSQL vs MySQL vs MongoDB | PostgreSQL | ACID, full-text search, JSONB |
| **i18n** | next-intl vs i18next | next-intl | Native Next.js support |
| **WhatsApp** | Direct API vs Twilio vs 360dialog | 360dialog | Cost-effective, Indonesia-focused |
| **Payment** | Midtrans vs Xendit vs Stripe | Midtrans | Best Indonesia coverage |
| **Hosting** | Vercel vs Netlify vs Self-hosted | Vercel + VPS | FE: Vercel, BE: VPS |

### 13.2 Vendor Evaluation Matrix

| Criteria | Weight | Shopify | WooCommerce | Custom | Score |
|----------|--------|---------|-------------|--------|-------|
| Cost (3yr TCO) | 20% | 8 | 7 | 5 | Shopify |
| Time to Market | 20% | 9 | 6 | 4 | Shopify |
| PCI Compliance | 15% | 10 | 5 | 3 | Shopify |
| Customization | 15% | 6 | 7 | 10 | Custom |
| Scalability | 10% | 8 | 5 | 9 | Custom |
| Maintenance | 10% | 9 | 5 | 3 | Shopify |
| Ecosystem | 10% | 9 | 7 | 5 | Shopify |
| **Total** | **100%** | **8.1** | **6.1** | **5.4** | **Shopify** |

---

## 14. Change Management

### 14.1 Transition Plan (3 Entities → 1 Platform)

| Phase | Activity | Timeline | Risk | Mitigation |
|-------|----------|----------|------|------------|
| 1 | Stakeholder alignment | Week 1-2 | Misalignment | Executive workshop |
| 2 | Brand unification | Week 3-4 | Brand dilution | Co-branding strategy |
| 3 | Data migration | Month 2-3 | Data loss | Backup + validation |
| 4 | Content migration | Month 2-3 | SEO impact | 301 redirects |
| 5 | Customer communication | Month 3-4 | Confusion | Multi-channel announcement |
| 6 | Parallel running | Month 4-5 | Resource split | Clear boundaries |
| 7 | Full cutover | Month 5-6 | Downtime | Blue-green deployment |

### 14.2 Stakeholder Communication Plan

| Stakeholder | Frequency | Channel | Content |
|-------------|-----------|---------|---------|
| Steering Committee | Weekly | Meeting | Progress, blockers, decisions |
| Medical Team | Bi-weekly | Review | Content validation, protocols |
| E-commerce Team | Daily | Standup | Tasks, blockers |
| Marketing Team | Weekly | Sprint | Campaign performance |
| CS Team | Weekly | Training | New features, scripts |
| Brand Partners | Monthly | Report | Sales, marketing, feedback |
| Customers | Ongoing | Blog, WA, Email | Updates, education, promos |

---

## 15. Legal & Compliance Requirements

### 15.1 Legal Documents Required

| Document | Purpose | Timeline | Owner |
|----------|---------|----------|-------|
| Privacy Policy | PDP compliance | Month 1 | Legal |
| Terms & Conditions | Service agreement | Month 1 | Legal |
| Medical Disclaimer | Limit liability | Month 1 | Legal + Medical |
| Cookie Policy | GDPR/PDP compliance | Month 1 | Legal |
| Refund Policy | E-commerce standard | Month 2 | Legal + Ops |
| Content License | Blog/content ownership | Month 2 | Legal |
| Partner Agreement | Brand relationship | Month 2 | Management |
| Employment Contracts | Team hiring | Month 1 | HR |

---

## 16. Governance & Decision Making

### 16.1 Decision Rights

| Decision Type | Decision Maker | Consulted | Informed |
|---------------|---------------|-----------|----------|
| Strategic direction | Steering Committee | Product Owner | All |
| Feature prioritization | Product Owner | Medical, Marketing | Engineering |
| Technical architecture | Tech Lead | Product Owner | Engineering |
| Content approval | Medical Advisor | Content Writer | Marketing |
| Budget allocation | Steering Committee | Product Owner | Finance |
| Brand guidelines | Marketing Manager | Design | All |
| Medical protocols | Medical Director | Product Owner | All |

### 16.2 Meeting Cadence

| Meeting | Frequency | Duration | Participants | Purpose |
|---------|-----------|----------|--------------|---------|
| Daily Standup | Daily | 15 min | Eng + Design | Sync tasks |
| Sprint Planning | Bi-weekly | 2 hours | All dev | Plan sprint |
| Sprint Review | Bi-weekly | 1 hour | All | Demo & feedback |
| Sprint Retro | Bi-weekly | 1 hour | All dev | Improve process |
| Product Review | Weekly | 1 hour | PO + Medical | Content & feature review |
| Stakeholder Update | Weekly | 30 min | PO + Management | Progress report |
| Steering Committee | Monthly | 2 hours | All founders | Strategic decisions |

---

## 17. Appendices

### A. Business Glossary

| Term | Definition | Context |
|------|-----------|---------|
| **OSA** | Obstructive Sleep Apnea | Medical condition |
| **AHI** | Apnea-Hypopnea Index | Severity metric |
| **STOP-BANG** | Screening questionnaire | Risk assessment |
| **ESS** | Epworth Sleepiness Scale | Sleepiness assessment |
| **PSG** | Polysomnography | Sleep study |
| **HST** | Home Sleep Test | Portable sleep study |
| **RPSGT** | Registered Polysomnographic Technologist | Certified specialist |
| **LTV** | Customer Lifetime Value | Business metric |
| **CAC** | Customer Acquisition Cost | Business metric |
| **NPS** | Net Promoter Score | Satisfaction metric |
| **AOV** | Average Order Value | E-commerce metric |
| **Bundle Deal** | Product package with discount | Sales strategy |
| **Personalized Therapy** | Custom CPAP setting | Clinical differentiator |
| **Mask Fitting** | Assessment for optimal mask | Clinical service |
| **Therapy Data Review** | CPAP data monitoring | Retention strategy |

### B. Reference Documents
1. PRD (Product Requirements Document) — `merged/PRD.md`
2. FRD (Functional Requirements Document) — `merged/FRD.md`
3. TRD (Technical Requirements Document) — `merged/TRD.md`
4. Original PRDs: `smcsleepsolution/PRD.md`, `resindo/PRD.md`, `cpapindo/PRD.md`
5. Original BRDs: `smcsleepsolution/BRD.md`, `resindo/BRD.md`, `cpapindo/BRD.md`

### C. Approval Signatures

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Steering Committee | _____________ | ___/___/2026 | _____________ |
| Product Owner | _____________ | ___/___/2026 | _____________ |
| Medical Director | _____________ | ___/___/2026 | _____________ |
| Tech Lead | _____________ | ___/___/2026 | _____________ |
| Finance | _____________ | ___/___/2026 | _____________ |
