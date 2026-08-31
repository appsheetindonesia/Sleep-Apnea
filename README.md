<div align="center">

# 🏥 Sleep Apnea — Unified Healthcare Platform

**Ekosistem Digital Terintegrasi Pertama di Indonesia untuk Kesehatan Tidur**

[![GitHub Pages](https://img.shields.io/badge/🌐_Live-Sleep_Apnea-blue?style=for-the-badge&logo=github)](https://appsheetindonesia.github.io/Sleep-Apnea/)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)
[![PRD](https://img.shields.io/badge/docs-PRD%20%7C%20BRD%20%7C%20FRD%20%7C%20TRD-orange?style=for-the-badge)](merged/)

> **Satu-satunya platform di Indonesia yang menyediakan perjalanan lengkap kesehatan tidur — dari screening gratis, konsultasi dokter spesialis, sleep diagnostic berstandar internasional, e-commerce produk original, hingga personalized therapy dan monitoring jangka panjang.**

</div>

---

## 📋 Table of Contents

- [Tentang Project](#-tentang-project)
- [Masalah & Solusi](#-masalah--solusi)
- [Fitur Utama](#-fitur-utama)
- [Arsitektur Platform](#-arsitektur-platform)
- [Patient Journey](#-patient-journey)
- [Revenue Model](#-revenue-model)
- [Target Market](#-target-market)
- [Landing Page](#-landing-page)
- [Dokumentasi](#-dokumentasi)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Tim](#-tim)
- [License](#-license)

---

## 🎯 Tentang Project

### Latar Belakang

- **40%** penduduk Indonesia mendengkur tanpa menyadari risiko kesehatannya.
- **10%** di antaranya berisiko mengalami Sleep Apnea — namun **< 1%** mendapatkan diagnosis.
- **Tidak ada satu pun** platform di Indonesia yang mengintegrasikan edukasi → screening → diagnosis → terapi → purna jual dalam satu ekosistem.

### Konsolidasi 3 Brand

Platform ini menggabungkan kekuatan **3 perusahaan sleep healthcare** terkemuka:

| Brand | Fokus | Kekuatan |
|-------|-------|----------|
| **[smcsleepsolution.com](https://smcsleepsolution.com)** | Distributor Philips + Screening Online | STOP-BANG & ESS wizard, PSG Tipe 1-4 |
| **[resindo.com](https://resindo.com)** | Klinik + Dokter Spesialis | Dr. Alexander Ecker, 1000+ Google Reviews, bilingual |
| **[cpapindo.com](https://cpapindo.com)** | E-commerce + Diagnostik | 138+ produk, Nox Medical exclusive, RPSGT certified |

---

## 🔍 Masalah & Solusi

| Masalah | Dampak | Solusi Platform |
|---------|--------|-----------------|
| Screening tidak tersedia online | Pasien tidak aware risiko kesehatan | Screening STOP-BANG + ESS **gratis** dalam 5 langkah |
| Tidak ada klinik spesialis yang mudah diakses | Pasien bingung ke mana harus pergi | Booking konsultasi online via WhatsApp |
| Produk original sulit didapatkan | Pasien membeli produk palsu | E-commerce dengan authorized dealer |
| Tidak ada personalized therapy | Satu setting untuk semua pasien | Personalized CPAP setting |
| Monitoring terapi tidak ada | Pasien berhenti terapi tanpa sebab | Therapy data review berkala |

---

## ✨ Fitur Utama

### 🩺 Screening & Assessment
- **STOP-BANG Questionnaire** — 8 pertanyaan skrining Sleep Apnea
- **Epworth Sleepiness Scale (ESS)** — Tingkat kantuk harian
- **Auto Calculation** — BMI, usia, risiko leher otomatis
- **Risk Matrix** — Rekomendasi berdasarkan kombinasi skor

### 🏥 Diagnosis Services
- **Home Sleep Test (HST)** — Tes di rumah dengan peralatan portabel
- **PSG Tipe 1-4** — Polysomnography standar internasional
- **RPSGT Certified** — Analisa oleh technologist bersertifikat

### 👨‍⚕️ Consultation & Clinic
- **Booking Online** — Pilih dokter, tanggal, dan keluhan
- **Dokter Spesialis** — Dr. Alexander Ecker dan tim
- **Asuransi Diterima** — Klaim asuransi tersedia

### 🛒 E-commerce (138+ Produk)
| Brand | Kategori |
|-------|----------|
| **ResMed** | AirSense 11, AirFit F30i, N20, P10 |
| **Philips Respironics** | DreamStation 2, DreamWear, Amara |
| **Nox Medical** | Nox T3s, Nox A1s, Nox MR |
| **BMC/Yuwell** | G3, RESmart, Mask Series |

### 💊 Personalized Therapy
- Custom CPAP/BiPAP setting berdasarkan data diagnostic
- Mask fitting service (FCP, FFM, Nasal)
- Therapy data review berkala
- Rekomendasi perubahan setting

### 🔄 Retention & Support
- **WhatsApp Integration** — Reminder otomatis + support chat
- **Repeat Purchase** — Reorder consumables (filter, mask cushion)
- **Community** — Forum dan artikel edukasi

---

## 🏗️ Arsitektur Platform

```
┌─────────────────────────────────────────────────────────────┐
│                     CDN (Cloudflare)                         │
│           Static Assets + Edge Caching + DDoS Protection    │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│              FRONTEND (Next.js 14 - App Router)              │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │Education │ │Screening │ │Diagnosis │ │ Clinic   │      │
│  │  & Blog  │ │  Wizard  │ │  Pages   │ │ Booking  │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │E-commerce│ │ Therapy  │ │Retention │ │  Admin   │      │
│  │ (Hybrid) │ │  Pages   │ │  & Auth  │ │  Panel   │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                              │
│  i18n: next-intl (ID/EN)  │  UI: Tailwind + shadcn/ui     │
│  Hosting: Vercel (Edge)    │  State: React + Zustand        │
└──────────────────────────┬──────────────────────────────────┘
                           │ REST API + Webhooks
┌──────────────────────────▼──────────────────────────────────┐
│              BACKEND (NestJS - Node.js)                       │
│                                                              │
│  Screening │ Booking │ Sleep Report │ Therapy │ Auth Module  │
│  Module    │ Module  │ Module       │ Module  │              │
│                                                              │
│  ORM: Prisma  │  Validation: Zod  │  Auth: JWT              │
│  Hosting: VPS (DigitalOcean)  │  Port: 3001                  │
└─────────┬────────────┬───────────────┬────────────┬─────────┘
          │            │               │            │
┌─────────▼───┐ ┌──────▼──────┐ ┌─────▼────┐ ┌────▼────────┐
│ PostgreSQL  │ │   Shopify   │ │WhatsApp  │ │ Email SMTP  │
│ (Supabase)  │ │   Admin API │ │Business  │ │ (SendGrid)  │
│             │ │             │ │API (360D)│ │             │
│  Patients   │ │  Products   │ │          │ │ Transactional│
│  Screenings │ │  Orders     │ │  Notif   │ │ Marketing   │
│  Bookings   │ │  Inventory  │ │  Reminder│ │             │
└─────────────┘ └─────────────┘ └──────────┘ └─────────────┘
```

---

## 🔄 Patient Journey

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ AWARENESS│───▶│SCREENING │───▶│DIAGNOSIS │───▶│ THERAPY  │───▶│RETENTION │
│          │    │ (FREE)   │    │  (HST/   │    │ (CPAP/   │    │          │
│  Blog    │    │STOP-BANG │    │   PSG)   │    │  BiPAP)  │    │ Repeat   │
│  Social  │    │   ESS    │    │          │    │          │    │ Purchase │
│  SEO     │    │ 5 steps  │    │ RPSGT    │    │ Personal │    │ Support  │
└──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
```

---

## 💰 Revenue Model

| Revenue Stream | Target | Margin |
|----------------|--------|--------|
| **E-commerce Sales** | Rp 500 Juta/bulan | 30-40% |
| **Screening → Conversion** | 300 screening/bulan | ~25% convert |
| **Booking Consultation** | 100 booking/bulan | 20% fee |
| **Home Sleep Test** | 100 HST/bulan | 35% margin |
| **Personalized Therapy** | 50 client/bulan | 45% margin |
| **Service & Kalibrasi** | 20 service/bulan | 60% margin |

**Projected Profitability**: Bulan ke-18 → Gross margin **94%**

---

## 🎯 Target Market

| Metric | Angka |
|--------|-------|
| **TAM** (Total Addressable Market) | 108 Juta pendengkur di Indonesia |
| **SAM** (Serviceable) | 10.8 Juta dengan gejala Sleep Apnea |
| **SOM** (Target 3 tahun) | 108,000 pasien aktif |
| **Monthly Visitors** | 15,000/bulan (Year 1) |
| **Conversion Rate** | 2-5% screening → purchase |

---

## 🌐 Landing Page

Landing page responsif dengan fitur:

- ✅ **Screening Wizard** — 6-step STOP-BANG + ESS
- ✅ **Product Catalog** — Filter by brand, 8 produk featured
- ✅ **Bundle Deals** — Starter, Premium, Travel packages
- ✅ **Booking Form** — Complaint tags, date picker, WhatsApp redirect
- ✅ **Multi-language** — ID/EN toggle
- ✅ **Mobile-first** — Responsive 320px → 2560px
- ✅ **Scroll Animations** — Intersection Observer
- ✅ **WhatsApp FAB** — Pre-filled context messages

### Preview

```
landingpage/
├── index.html          (82 KB, 1,566 baris)
├── css/style.css       (48 KB, 2,432 baris)
├── js/app.js           (22 KB, 713 baris)
└── img/                (Icons & assets)
```

---

## 📚 Dokumentasi

### Per Website (Asli)

| Website | PRD | BRD | FRD | TRD |
|---------|-----|-----|-----|-----|
| [smcsleepsolution.com](smcsleepsolution/) | [PRD](smcsleepsolution/PRD.md) | [BRD](smcsleepsolution/BRD.md) | [FRD](smcsleepsolution/FRD.md) | [TRD](smcsleepsolution/TRD.md) |
| [resindo.com](resindo/) | [PRD](resindo/PRD.md) | [BRD](resindo/BRD.md) | [FRD](resindo/FRD.md) | [TRD](resindo/TRD.md) |
| [cpapindo.com](cpapindo/) | [PRD](cpapindo/PRD.md) | [BRD](cpapindo/BRD.md) | [FRD](cpapindo/FRD.md) | [TRD](cpapindo/TRD.md) |

### Unified Platform (Gabungan & Penyempurnaan)

| Dokumen | Sections | Content |
|---------|----------|---------|
| [PRD](merged/PRD.md) | **18 sections** | Executive summary, competitive analysis, SWOT, revenue projections |
| [BRD](merged/BRD.md) | **17 sections** | TAM/SAM/SOM, Porter's Five Forces, Balanced Scorecard, RACI |
| [FRD](merged/FRD.md) | **8 modules** | **200+ functional requirements**, use cases, business rules |
| [TRD](merged/TRD.md) | **12 sections** | Full tech architecture, DB schema, API spec, CI/CD, ADRs |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework (App Router) |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Component library |
| **next-intl** | Internationalization (ID/EN) |
| **Zustand** | State management |
| **Vercel** | Hosting & CDN |

### Backend
| Technology | Purpose |
|------------|---------|
| **NestJS** | Node.js framework |
| **Prisma** | ORM & database toolkit |
| **PostgreSQL** | Primary database (Supabase) |
| **Zod** | Schema validation |
| **JWT** | Authentication |
| **DigitalOcean** | VPS hosting |

### Integrations
| Service | Purpose |
|---------|---------|
| **Shopify Admin API** | Product & inventory sync |
| **WhatsApp Business API** | Chat, reminders, support |
| **SendGrid** | Transactional & marketing email |
| **Google Analytics** | Analytics & tracking |
| **Meta Pixel** | Ad tracking & retargeting |

### Design System
| Token | Value | Usage |
|-------|-------|-------|
| **Primary** | `#1E40AF` (Blue) | Trust & professionalism |
| **Secondary** | `#059669` (Green) | Health & vitality |
| **Accent** | `#F97316` (Orange) | CTA & urgency |
| **Font** | Plus Jakarta Sans | Clean, modern feel |

---

## 📁 Project Structure

```
Sleep-Apnea/
├── 📄 merged/                    # Unified platform documentation
│   ├── PRD.md                   # Product Requirements (18 sections)
│   ├── BRD.md                   # Business Requirements (17 sections)
│   ├── FRD.md                   # Functional Requirements (200+ FRs)
│   └── TRD.md                   # Technical Requirements (12 sections)
│
├── 📄 smcsleepsolution/          # SMC Sleep Solution documentation
│   ├── PRD.md / BRD.md / FRD.md / TRD.md
│
├── 📄 resindo/                   # Resindo Medika documentation
│   ├── PRD.md / BRD.md / FRD.md / TRD.md
│
├── 📄 cpapindo/                  # CPAPINDO documentation
│   ├── PRD.md / BRD.md / FRD.md / TRD.md
│
├── 🌐 landingpage/               # Static landing page
│   ├── index.html               # Main page (15 sections)
│   ├── css/style.css            # Styles (responsive, mobile-first)
│   ├── js/app.js                # Interactions & screening wizard
│   └── img/                     # Icons & assets
│
└── 📄 .gitignore
```

---

## 🗺️ Roadmap

### Phase 1: Foundation (Q4 2026)
- [x] Landing page with screening wizard
- [x] Full documentation (PRD/BRD/FRD/TRD)
- [ ] Backend API setup (NestJS + Prisma)
- [ ] Database schema implementation
- [ ] Authentication system

### Phase 2: Core Features (Q1 2027)
- [ ] Screening module (STOP-BANG + ESS)
- [ ] Product catalog (Shopify integration)
- [ ] Booking system (WhatsApp integration)
- [ ] Blog & education content

### Phase 3: Advanced (Q2 2027)
- [ ] Home Sleep Test ordering
- [ ] Personalized therapy module
- [ ] Admin dashboard
- [ ] Analytics & reporting

### Phase 4: Scale (Q3-Q4 2027)
- [ ] Mobile app (React Native)
- [ ] AI-powered screening
- [ ] Insurance integration
- [ ] Multi-region expansion

---

## 👥 Tim

| Role | Responsibility |
|------|----------------|
| **Product Owner** | Vision, roadmap, stakeholder management |
| **Tech Lead** | Architecture, code review, technical decisions |
| **Frontend Dev** | Next.js, React, UI/UX implementation |
| **Backend Dev** | NestJS, Prisma, API development |
| **UI/UX Designer** | Design system, wireframes, prototypes |
| **QA Engineer** | Testing, quality assurance |

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ for better sleep health in Indonesia**

[![Sleep Apnea Platform](https://img.shields.io/badge/Sleep_Apnea-Platform-blue?style=for-the-badge&logo=heartbeat)](https://appsheetindonesia.github.io/Sleep-Apnea/)

</div>
