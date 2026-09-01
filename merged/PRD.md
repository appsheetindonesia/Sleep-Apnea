# Product Requirements Document (PRD)
## Unified Sleep Healthcare Platform
### Gabungan & Penyempurnaan: SMC Sleep Solution × Resindo Medika × CPAPINDO

**Versi Dokumen:** 2.0 (Merged & Enhanced)  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Product Development  
**Status:** Final  
**Referensi:** smcsleepsolution.com, resindo.com, cpapindo.com

---

## 1. Ringkasan Eksekutif (Executive Summary)

### 1.1 Visi Platform
Membangun **Unified Sleep Healthcare Platform** — ekosistem digital terintegrasi pertama di Indonesia yang menggabungkan:
- **Edukasi & Screening** (dari SMC Sleep Solution)
- **Klinik & Konsultasi Dokter** (dari Resindo Medika)
- **E-commerce & Diagnostik** (dari CPAPINDO)

Platform ini menjembatani keseluruhan patient journey: **Awareness → Screening → Diagnosis → Terapi → Monitoring → Purna Jual** dalam satu ekosistem terpadu.

### 1.2 Latar Belakang Konsolidasi

| Aspek | SMC Sleep Solution | Resindo Medika | CPAPINDO | Platform Gabungan |
|-------|-------------------|----------------|----------|-------------------|
| **Brand Philips** | ✅ Distributor resmi | ❌ | ❌ | ✅ |
| **Brand ResMed** | ❌ | ✅ Distributor resmi | ✅ Distributor | ✅ |
| **Brand Nox Medical** | ❌ | ✅ SOMNOmedics | ✅ Eksklusif | ✅ |
| **Brand BMC/Yuwell** | ❌ | ❌ | ✅ Distributor | ✅ |
| **Screening Online** | ✅ STOP-BANG + ESS | ❌ | ❌ | ✅ |
| **Booking Konsultasi** | ❌ | ✅ Form + WhatsApp | ❌ | ✅ |
| **E-commerce** | ❌ | ❌ | ✅ Shopify | ✅ |
| **Blog/Artikel** | ❌ | ✅ Aktif | ✅ Aktif | ✅ |
| **Bilingual** | ❌ | ✅ ID/EN | ❌ | ✅ |
| **Dokter Spesialis** | ❌ | ✅ | ✅ RPSGT | ✅ |
| **Home Sleep Test** | ✅ PSG Tipe 1-4 | ✅ Sleep diagnostic | ✅ HST Singapura | ✅ |
| **Personalized Therapy** | ❌ | ❌ | ✅ Core feature | ✅ |
| **Mask Fitting** | ❌ | ✅ | ✅ | ✅ |
| **Bundle Deals** | ❌ | ❌ | ✅ | ✅ |
| **Asuransi** | ❌ | ✅ Diterima | ❌ | ✅ |

### 1.3 Unique Value Proposition
> **"Satu-satunya platform di Indonesia yang menyediakan perjalanan lengkap kesehatan tidur — dari screening gratis, konsultasi dokter spesialis, sleep diagnostic berstandar internasional, e-commerce produk original, hingga personalized therapy dan monitoring jangka panjang."**

---

## 2. Latar Belakang & Masalah (Background & Problem Statement)

### 2.1 Masalah Nasional
- **40% penduduk Indonesia mendengkur** tanpa menyadari risiko kesehatannya.
- **10% di antaranya berisiko mengalami Sleep Apnea** — namun < 1% mendapatkan diagnosis.
- Sleep Apnea yang tidak ditangani menyebabkan: hipertensi, diabetes, stroke, penyakit jantung, depresi, impotensi.
- Minimnya kesadaran masyarakat tentang bahaya gangguan tidur.
- Tidak ada **one-stop platform** yang mengintegrasikan edukasi → screening → diagnosis → terapi → purna jual.

### 2.2 Masalah Fragmentasi Pasar
| Masalah | Dampak | Solusi Platform |
|---------|--------|-----------------|
| Screening tidak tersedia secara online | Pasien tidak aware akan risikonya | Screening STOP-BANG + ESS gratis |
| Tidak ada klinik spesialis yang mudah diakses | Pasien bingung ke mana harus pergi | Booking konsultasi online |
| Produk CPAP/BiPAP sulit didapatkan yang original | Pasien membeli produk palsu | E-commerce dengan brand authorized |
| Tidak ada personalized therapy | Satu setting untuk semua pasien | Personalized CPAP setting |
| Monitoring terapi tidak ada | Pasien berhenti terapi tanpa sebab | Therapy data review berkala |
| Servis & kalibrasi sulit ditemukan | Alat tidak optimal | Service center terintegrasi |
| Informasi medis tidak terstandarisasi | Kesalahan informasi | Konten oleh dokter & RPSGT |

### 2.3 Solusi Unified Platform

```
┌─────────────────────────────────────────────────────────────┐
│                UNIFIED SLEEP HEALTHCARE PLATFORM              │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │EDUCATION │  │SCREENING │  │DIAGNOSIS │  │ THERAPY  │   │
│  │ & AWARE  │  │ (FREE)   │  │  (HST/   │  │ (CPAP/   │   │
│  │  (Blog)  │  │STOP-BANG │  │   PSG)   │  │  BiPAP)  │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘   │
│       │              │              │              │          │
│  ┌────▼──────────────▼──────────────▼──────────────▼────┐   │
│  │              PATIENT JOURNEY ENGINE                   │   │
│  │  Screening → Risk Assessment → Doctor Referral        │   │
│  │  → Sleep Test → Report → CPAP Selection → Therapy     │   │
│  │  → Mask Fitting → Data Review → Maintenance           │   │
│  └────┬──────────────┬──────────────┬──────────────┬────┘   │
│       │              │              │              │          │
│  ┌────▼─────┐  ┌────▼─────┐  ┌────▼─────┐  ┌────▼─────┐  │
│  │E-COMMERCE│  │ CLINIC   │  │ SUPPORT  │  │ RETENTION│  │
│  │ (Shopify)│  │ (Booking)│  │ (WhatsApp│  │ (Repeat  │  │
│  │          │  │          │  │  /WA API)│  │ Purchase)│  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                              │
│  Brands: Philips Respironics | ResMed | Nox Medical | BMC   │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Tujuan Produk (Product Goals)

### 3.1 Strategic Goals

| ID | Tujuan | Metrik | Timeline |
|----|--------|--------|----------|
| SG-01 | **Kesadaran Nasional** | 50.000+ kunjungan/bulan | 12 bulan |
| SG-02 | **Screening Adoption** | 1.000+ screening/bulan | 12 bulan |
| SG-03 | **Revenue Growth** | Rp 2 miliar/bulan | 18 bulan |
| SG-04 | **Patient Retention** | 40% repeat rate | 12 bulan |
| SG-05 | **Market Leadership** | Top 1 "sleep healthcare Indonesia" | 18 bulan |

### 3.2 Product Goals Breakdown

| ID | Goal | KPI | Target 6 Bulan | Target 12 Bulan |
|----|------|-----|---------------|----------------|
| PG-01 | Screening Tool Usage | Completions/bulan | 500 | 1.000 |
| PG-02 | Booking Konsultasi | Bookings/bulan | 200 | 500 |
| PG-03 | HST Bookings | HST/bulan | 100 | 300 |
| PG-04 | E-commerce Revenue | Revenue/bulan | Rp 800 juta | Rp 1.5 miliar |
| PG-05 | Blog Traffic | Organic visitors/bulan | 20.000 | 50.000 |
| PG-06 | WhatsApp Inquiries | Inquiries/bulan | 500 | 1.500 |
| PG-07 | Customer Satisfaction | NPS Score | > 50 | > 65 |
| PG-08 | Conversion Rate | Website conversion | 3% | 5% |

---

## 4. Pengguna Target (Target Users) — Consolidated Personas

### Persona 1: Pasien Sleep Apnea (Primary)
```
Nama:          Budi Santoso
Usia:          45 tahun
Pekerjaan:     Manajer
Gender:        Laki-laki
Lokasi:        Jakarta Selatan

SITUASI:
- Mendengkur keras, istri sering terbangun
- Sering mengantuk di siang hari saat meeting
- Tidak tahu ini sleep apnea

KEBUTUHAN:
- Informasi: Apa sleep apnea? Apa bahayanya?
- Screening: Apakah saya berisiko?
- Diagnosis: Sleep test di mana?
- Terapi: CPAP apa yang cocok?
- Support: Bagaimana cara pakainya?

PAIN POINTS:
- Tidak tahu harus mulai dari mana
- Takut biaya mahal
- Bingung dengan banyak pilihan alat
- Malu dengan kondisi mendengkur

JOURNEY:
Blog → Screening (STOP-BANG) → Hasil Risiko TINGGI
→ Booking Konsultasi → Sleep Test (HST/PSG)
→ Rekomendasi CPAP → Beli/SEWA → Mask Fitting
→ Therapy Review → Repeat Purchase (filter, cushion)
```

### Persona 2: Pasien Pengguna CPAP (Repeat Customer)
```
Nama:          Siti Rahayu
Usia:          52 tahun
Pekerjaan:     Guru
Gender:        Perempuan
Lokasi:        Bandung

SITUASI:
- Sudah menggunakan CPAP 2 tahun
- Rutin beli filter dan mask cushion
- Ingin ganti masker yang lebih nyaman

KEBUTUHAN:
- Beli ulang spare parts original
- Therapy data review (apakah setting masih optimal?)
- Mask fitting untuk tipe baru
- Servis & kalibrasi alat

PAIN POINTS:
- Spare parts original sulit ditemukan
- Tidak tahu kapan harus ganti filter
- Setting alat sudah tidak optimal

JOURNEY:
Reminder (email/WA) → Reorder filter
→ Mask fitting → Therapy review
→ Servis/kalibrasi → Repeat
```

### Persona 3: Tenaga Medis / Dokter (B2B)
```
Nama:          Dr. Ahmad Fauzi, Sp.P
Usia:          48 tahun
Pekerjaan:     Dokter Spesialis Paru
Lokasi:        Jakarta

SITUASI:
- Praktik di RS swasta
- Sering merujuk pasien sleep apnea
- Butuh distributor terpercaya

KEBUTUHAN:
- Daftar produk lengkap dengan spesifikasi
- Harga grosir / B2B
- Partner rujukan untuk sleep test
- Materi edukasi untuk pasien

PAIN POINTS:
- Sulit menemukan distributor resmi
- Tidak ada platform rujukan yang terintegrasi
- Butuh support teknis untuk pasien

JOURNEY:
Portal B2B → Katalog Produk
→ Order Grosir → Rujukan Pasien
→ Follow-up Terapi → Long-term Partnership
```

### Persona 4: Caregiver / Keluarga
```
Nama:          Rina (istri Budi)
Usia:          42 tahun
Pekerjaan:     Ibu Rumah Tangga
Lokasi:        Jakarta Selatan

SITUASI:
- Mendengar suami mendengker keras
- Khawatir dengan kesehatan suami
- Ingin membantu tapi tidak paham medis

KEBUTUHAN:
- Informasi dalam bahasa sederhana
- Cara membantu suami menggunakan CPAP
- Jadwal servis & maintenance
- Dukungan emosional

PAIN POINTS:
- Tidak paham istilah medis
- Bingung cara mengoperasikan alat
- Khawatir dengan biaya

JOURNEY:
Blog Edukasi → Screening untuk Suami
→ Booking Konsultasi → Pendampingan Terapi
→ Artikel Tips → FAQ → WhatsApp Support
```

---

## 5. Ruang Lingkup (Scope) — Consolidated

### 5.1 In-Scope (Full Feature Set)

#### Module A: Education & Awareness
| No | Fitur | Source | Prioritas |
|----|-------|--------|-----------|
| A1 | Homepage multisection interaktif | All | P0 |
| A2 | Blog/artikel edukatif (ID/EN) | Resindo + CPAPINDO | P0 |
| A3 | Interactive Sleep Apnea anatomy | Resindo | P0 |
| A4 | Video edukatif | New | P1 |
| A5 | FAQ interaktif | Resindo | P0 |

#### Module B: Screening & Assessment
| No | Fitur | Source | Prioritas |
|----|-------|--------|-----------|
| B1 | STOP-BANG Questionnaire (8 pertanyaan) | SMC | P0 |
| B2 | ESS (Epworth Sleepiness Scale) | SMC | P0 |
| B3 | Multi-step wizard (6 langkah) | SMC | P0 |
| B4 | Risk assessment engine | SMC | P0 |
| B5 | Personalized recommendation | New | P0 |
| B6 | Screening history & tracking | New | P1 |

#### Module C: Diagnosis Services
| No | Fitur | Source | Prioritas |
|----|-------|--------|-----------|
| C1 | Home Sleep Test (HST) booking | CPAPINDO | P0 |
| C2 | In-Lab PSG booking | SMC + Resindo | P0 |
| C3 | RPSGT analysis (Singapore) | CPAPINDO | P0 |
| C4 | Report delivery system | New | P0 |
| C5 | Nox A1s/T3s diagnostic info | CPAPINDO | P1 |
| C6 | ApneaLink Air info | CPAPINDO | P1 |

#### Module D: Consultation & Clinic
| No | Fitur | Source | Prioritas |
|----|-------|--------|-----------|
| D1 | Online booking konsultasi | Resindo | P0 |
| D2 | Dokter spesialis profile | Resindo | P0 |
| D3 | Insurance verification | Resindo | P1 |
| D4 | Same-day appointment | Resindo | P0 |
| D5 | Patient testimonial | Resindo | P0 |

#### Module E: E-commerce
| No | Fitur | Source | Prioritas |
|----|-------|--------|-----------|
| E1 | Product catalog (138+ produk) | CPAPINDO | P0 |
| E2 | Bundle deals system | CPAPINDO | P0 |
| E3 | Full checkout & payment | CPAPINDO | P0 |
| E4 | Product reviews | CPAPINDO | P1 |
| E5 | Multi-brand support | All | P0 |
| E6 | B2B portal (grosir) | New | P2 |

#### Module F: Therapy Services
| No | Fitur | Source | Prioritas |
|----|-------|--------|-----------|
| F1 | Personalized CPAP therapy | CPAPINDO | P0 |
| F2 | Mask fitting service | Resindo + CPAPINDO | P0 |
| F3 | Therapy data review | CPAPINDO | P0 |
| F4 | Technical support booking | All | P0 |
| F5 | Rental & trial program | SMC + Resindo | P0 |

#### Module G: Retention & Support
| No | Fitur | Source | Prioritas |
|----|-------|--------|-----------|
| G1 | WhatsApp Business integration | All | P0 |
| G2 | Repeat purchase automation | CPAPINDO | P1 |
| G3 | Email marketing (reminders) | New | P1 |
| G4 | Customer account dashboard | CPAPINDO | P1 |
| G5 | Loyalty program | New | P2 |

### 5.2 Out-of-Scope
- Aplikasi mobile native (fase lanjutan)
- Integrasi HIS/Rumah Sakit
- Pembayaran asuransi online
- Telemedicine / video consultation
- AI-based sleep analysis

---

## 6. Kebutuhan Fungsional (Functional Requirements) — Consolidated

### 6.1 Module A: Education & Awareness

#### A1: Homepage
| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| A1-01 | Hero Interaktif | Statistik Indonesia (40% mendengkur), CTA Screening + Booking | P0 |
| A1-02 | Trust Signals | Google Reviews 4.5+, Certified Doctors, RPSGT Badge, Brand Logos | P0 |
| A1-03 | Service Overview | 6 layanan: Screening, Diagnosis, Konsultasi, E-commerce, Therapy, Support | P0 |
| A1-04 | Personalized Therapy | "Auto CPAP bukan one-size-fits-all" showcase | P0 |
| A1-05 | Product Carousel | Bundle deals + produk unggulan per brand | P0 |
| A1-06 | Blog Preview | 3 artikel terbaru + kategori | P0 |
| A1-07 | Testimoni | Slider testimoni pasien dengan rating | P0 |
| A1-08 | FAQ Accordion | Pertanyaan umum tentang sleep apnea & layanan | P0 |
| A1-09 | WhatsApp FAB | Floating button di semua halaman | P0 |
| A1-10 | Language Toggle | ID/EN switcher | P0 |

#### A2: Blog/CMS
| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| A2-01 | Article List | Grid card: gambar, judul, excerpt, kategori, tanggal, bahasa | P0 |
| A2-02 | Article Detail | Rich content dengan share buttons, related articles | P0 |
| A2-03 | Kategori | CPAP Therapy, Sleep Health, Conditions & Risks | P1 |
| A2-04 | Bilingual | Semua artikel tersedia dalam ID & EN | P0 |
| A2-05 | SEO Schema | Article structured data untuk Google | P1 |

### 6.2 Module B: Screening & Assessment

#### B1: Screening Wizard
| ID | FR | Deskripsi | Validasi | Prioritas |
|----|-----|-----------|----------|-----------|
| B1-01 | Step 1: Data Diri | Nama, email, telepon, usia, jenis kelamin, tinggi, berat, lingkar leher, tekanan darah | Semua wajib | P0 |
| B1-02 | Step 2: STOP-BANG Q1 | Apakah mendengkur keras? (Ya/Tidak) | Wajib | P0 |
| B1-03 | Step 3: STOP-BANG Q2-Q4 | Kelelahan, Pengamatan, Tekanan Darah | Wajib | P0 |
| B1-04 | Step 4: STOP-BANG Q5-Q8 | BMI (auto), Usia (auto), Leher (auto), Gender (auto) | Auto-calculated | P0 |
| B1-05 | Step 5: ESS | 7 skenario kantuk (0-3 skala) | Semua wajib | P0 |
| B1-06 | Step 6: Hasil | Dashboard visual: STOP-BANG score, ESS score, Risk level, Rekomendasi | Auto-generated | P0 |
| B1-07 | WhatsApp Redirect | Tombol "Konsultasi Sekarang" → WhatsApp dengan pre-filled message | - | P0 |
| B1-08 | Data Persistence | Simpan screening di database untuk follow-up | - | P0 |
| B1-09 | Disclaimer | "Hasil screening BUKAN diagnosis medis" | - | P0 |

#### B2: Scoring Engine
| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| B2-01 | STOP-BANG Calculator | Hitung score 0-8 berdasarkan 8 parameter | P0 |
| B2-02 | ESS Calculator | Hitung score 0-21 berdasarkan 7 skenario | P0 |
| B2-03 | Risk Categorization | SB 0-2: Rendah, SB 3-4: Sedang, SB 5-8: Tinggi | P0 |
| B2-04 | ESS Interpretation | ESS 0-10: Normal, 11-14: Berlebihan, 15-24: Sangat Berlebihan | P0 |
| B2-05 | Recommendation Engine | Kombinasi risiko + ESS → rekomendasi tindak lanjut | P0 |

#### B3: Recommendation Matrix
| Risiko STOP-BANG | ESS Normal (0-10) | ESS Berlebihan (11-14) | ESS Sangat Berlebihan (15-24) |
|-----------------|-------------------|----------------------|------------------------------|
| **Rendah (0-2)** | Tips kesehatan tidur | Disarankan konsultasi | Sangat disarankan konsultasi |
| **Sedang (3-4)** | Disarankan konsultasi | **Booking Sleep Test** | **Booking Sleep Test** |
| **Tinggi (5-8)** | **Booking Sleep Test** | **Booking Sleep Test + Konsultasi** | **PRIORITAS: Sleep Test + Konsultasi** |

### 6.3 Module C: Diagnosis Services

#### C1: Home Sleep Test (HST)
| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| C1-01 | HST Info Page | Penjelasan HST, proses 5 langkah, parameter yang diukur | P0 |
| C1-02 | HST Booking Form | Nama, telepon, email, alamat, kota, tanggal, jam, riwayat medis | P0 |
| C1-03 | HST Process Flow | Hubungi → Jadwal → Set-up (30 menit) → Data Collection → Analisa → Report (7 hari) | P0 |
| C1-04 | RPSGT Certification | Info analisa oleh RPSGT bersertifikat AASM di Singapura | P0 |
| C1-05 | Report Parameters | 6 parameter: Breathing effort, Respiratory events, O2 saturation, Pulse rate, Position, Snoring | P0 |

#### C2: In-Lab Sleep Diagnostic
| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| C2-01 | PSG Tipe 1 (Full) | Comprehensive in-lab PSG | P0 |
| C2-02 | PSG Tipe 2 | Portable comprehensive | P1 |
| C2-03 | PSG Tipe 3 | Limited channel | P1 |
| C2-04 | PSG Tipe 4 | Basic screening | P1 |
| C2-05 | Nox A1s System | Full diagnostic system (exclusive distributor) | P0 |
| C2-06 | Nox T3s System | Level III portable | P1 |

### 6.4 Module D: Consultation & Clinic

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| D1-01 | Booking Form | Nama, email, telepon, keluhan, tanggal, jam, asuransi, catatan | P0 |
| D1-02 | Keluhan Quick Select | Tombol: Mendengkur, Henti Napas, Kelelahan, Sering Terbangun | P0 |
| D1-03 | Doctor Profile | Profil dokter spesialis dengan foto & kredensial | P0 |
| D1-04 | Insurance Info | Daftar asuransi yang diterima + cara klaim | P1 |
| D1-05 | Same-day Appointment | Cek ketersediaan jadwal hari ini | P0 |
| D1-06 | Booking Confirmation | Notifikasi via WhatsApp + Email | P0 |
| D1-07 | Maintenance Info | "Tanpa reservasi: datang sebelum 10.00 → selesai hari sama" | P0 |

### 6.5 Module E: E-commerce

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| E1-01 | Product Grid | Grid dengan gambar, nama, vendor badge, harga (Rp format) | P0 |
| E1-02 | Product Detail | Multiple gambar, variant, spesifikasi, vendor, harga | P0 |
| E1-03 | Bundle Deals | Paket bundling dengan diskon 5-15% vs harga satuan | P0 |
| E1-04 | Cart & Checkout | Full checkout flow dengan multiple payment | P0 |
| E1-05 | Vendor Badge | Label ResMed, Philips, BMC, Nox Medical, Yuwell | P0 |
| E1-06 | Product Review | Rating bintang + written review | P1 |
| E1-07 | Search & Filter | Cari produk, filter by vendor/kategori/harga | P1 |
| E1-08 | WhatsApp Tanya | Tombol "Tanya Produk" → WhatsApp dengan nama produk | P0 |

### 6.6 Module F: Therapy Services

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| F1-01 | Personalized Therapy | Custom setting CPAP untuk setiap pasien | P0 |
| F1-02 | Mask Fitting | Assessment facial anatomy, sleeping habits, breathing pattern | P0 |
| F1-03 | Therapy Data Review | Regular review untuk monitor progress & optimasi setting | P0 |
| F1-04 | Technical Support | Servis, maintenance, performance check | P0 |
| F1-05 | Rental & Trial | Coba alat sebelum beli, program sewa | P0 |
| F1-06 | Service Booking | Form/WhatsApp untuk booking layanan | P0 |

### 6.7 Module G: Retention & Support

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| G1-01 | WhatsApp Integration | Floating button + pre-filled messages kontekstual | P0 |
| G1-02 | Repeat Purchase Reminder | Email/WA reminder: "Filter sudah 30 hari, beli baru?" | P1 |
| G1-03 | Customer Account | Login, order history, re-order, saved addresses | P1 |
| G1-04 | Loyalty Points | Poin untuk setiap pembelian → diskon berikutnya | P2 |
| G1-05 | Multi-channel Support | WhatsApp, Telepon, Email, Live Chat | P0 |

---

## 7. Kebutuhan Non-Fungsional (Non-Functional Requirements)

| ID | Kategori | Persyaratan | Target | Source |
|----|----------|-------------|--------|--------|
| NFR-01 | Performa | Page load time | < 2.5 detik (3G) | All |
| NFR-02 | SEO | Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1 | All |
| NFR-03 | Responsivitas | Mobile-first design | 320px – 2560px | All |
| NFR-04 | Aksesibilitas | WCAG 2.1 Level AA | Semua elemen terakses | New |
| NFR-05 | Keamanan | HTTPS + Security Headers | TLS 1.3, CSP, HSTS | All |
| NFR-06 | Keamanan Data | PDP Compliance | Consent, hak hapus | All |
| NFR-07 | Ketersediaan | Uptime | 99.9% | All |
| NFR-08 | Skalabilitas | Auto-scaling | Handle 10x traffic spike | CPAPINDO |
| NFR-09 | Bilingual | ID & EN | Semua konten utama | Resindo |
| NFR-10 | Browser | Cross-browser | Chrome, Firefox, Safari, Edge | All |
| NFR-11 | Payment | PCI-DSS Level 1 | Via Shopify/Payment Gateway | CPAPINDO |
| NFR-12 | API Performance | Response time | < 500ms (95th percentile) | New |

---

## 8. Kebutuhan Desain & UX (Design & UX Requirements)

### 8.1 Desain Visual
- **Color Palette:** 
  - Primary: Biru medis (#1e40af) — trust & professionalism
  - Secondary: Hijau (#059669) — health & vitality
  - Accent: Oranye (#f97316) — CTA & urgency
  - Neutral: Putih (#ffffff), Abu (#f8fafc)
- **Typography:** Inter / Plus Jakarta Sans — modern, readable
- **Imagery:** Ilustrasi medis interaktif, foto produk original, foto klinik asli
- **Tone:** Profesional, edukatif, approachable — "Anda bukan sekadar nomor antrian"

### 8.2 UX Patterns
- **Progressive Disclosure:** Informasi ditampilkan bertahap (ringkas → detail)
- **Multi-step Wizard:** Screening 6 langkah dengan progress bar
- **Interactive Anatomy:** Ilustrasi anatomi saluran napas yang bisa di-klik
- **Trust Everywhere:** Logo brand, sertifikasi RPSGT, Google Reviews di setiap halaman
- **Sticky CTA:** WhatsApp button dan tombol booking selalu terlihat
- **Smart Recommendations:** Rekomendasi produk berdasarkan screening result

### 8.3 Information Architecture
```
HOME
├── Education
│   ├── Blog (ID/EN)
│   ├── Sleep Apnea Guide
│   └── FAQ
├── Screening (STOP-BANG + ESS)
│   ├── Step 1-5 Wizard
│   └── Results + Recommendation
├── Diagnosis
│   ├── Home Sleep Test
│   ├── In-Lab PSG (Tipe 1-4)
│   └── Nox A1s/T3s Info
├── Consultation
│   ├── Booking Form
│   ├── Doctor Profile
│   └── Insurance Info
├── Shop (E-commerce)
│   ├── All Products
│   ├── Bundle Deals
│   ├── By Brand (ResMed, Philips, BMC, Nox)
│   └── By Category (CPAP, BiPAP, Masker, Parts)
├── Therapy
│   ├── Personalized Therapy
│   ├── Mask Fitting
│   ├── Therapy Data Review
│   └── Technical Support
├── Rental & Trial
├── Customer Account
│   ├── Order History
│   ├── Screening History
│   └── Re-order
└── Contact
    ├── WhatsApp
    ├── Booking Form
    └── Office Info
```

---

## 9. Kebutuhan Integrasi (Integration Requirements)

| ID | Integrasi | Tipe | Prioritas | Source |
|----|-----------|------|-----------|--------|
| IR-01 | WhatsApp Business API | Chat & notifications | P0 | All |
| IR-02 | Shopify E-commerce | Produk, cart, checkout | P0 | CPAPINDO |
| IR-03 | Payment Gateway (Midtrans) | Pembayaran | P0 | CPAPINDO |
| IR-04 | Shipping (JNE/J&T/GoSend) | Pengiriman | P0 | CPAPINDO |
| IR-05 | Google Analytics 4 | Web analytics | P0 | All |
| IR-06 | Google Search Console | SEO monitoring | P0 | All |
| IR-07 | Meta Pixel | Retargeting | P1 | CPAPINDO |
| IR-08 | Sanity CMS | Blog management | P1 | Resindo |
| IR-09 | Email Service (SendGrid) | Transactional email | P0 | New |
| IR-10 | CRM (HubSpot/Salesforce) | Lead management | P2 | New |
| IR-11 | Google Calendar | Booking scheduling | P1 | Resindo |
| IR-12 | Tokopedia/Shopee | Marketplace sync | P1 | CPAPINDO |

---

## 10. Kebutuhan Data (Data Requirements)

### 10.1 Unified Data Model

```sql
-- Core entity: Patient (unified across all modules)
CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    -- Identity
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    -- Demographics
    date_of_birth DATE,
    gender VARCHAR(20) CHECK (gender IN ('laki-laki', 'perempuan')),
    -- Physical
    height_cm DECIMAL(5,1),
    weight_kg DECIMAL(5,1),
    neck_cm DECIMAL(4,1),
    blood_pressure VARCHAR(10),
    -- Calculated
    bmi DECIMAL(5,1) GENERATED ALWAYS AS (
        CASE WHEN height_cm > 0
        THEN weight_kg / ((height_cm/100.0) * (height_cm/100.0))
        ELSE NULL END
    ) STORED,
    -- Insurance
    insurance_provider VARCHAR(255),
    insurance_number VARCHAR(100),
    -- Consent
    consent_given BOOLEAN DEFAULT FALSE,
    consent_at TIMESTAMP WITH TIME ZONE,
    -- Meta
    source VARCHAR(50), -- 'screening', 'booking', 'ecommerce', 'referral'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Screening results
CREATE TABLE screenings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id),
    -- STOP-BANG
    sb_snoring BOOLEAN,
    sb_tired BOOLEAN,
    sb_observed BOOLEAN,
    sb_pressure BOOLEAN,
    sb_bmi BOOLEAN,
    sb_age BOOLEAN,
    sb_neck BOOLEAN,
    sb_gender BOOLEAN,
    stopbang_score INTEGER CHECK (stopbang_score >= 0 AND stopbang_score <= 8),
    -- ESS
    ess_answers JSONB,
    ess_score INTEGER CHECK (ess_score >= 0 AND ess_score <= 21),
    -- Assessment
    risk_level VARCHAR(20) CHECK (risk_level IN ('rendah', 'sedang', 'tinggi')),
    recommendation TEXT,
    -- Follow-up
    status VARCHAR(30) DEFAULT 'baru',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings (consultation, HST, PSG)
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id),
    booking_type VARCHAR(30) NOT NULL CHECK (booking_type IN (
        'consultation', 'hst', 'psg_tipe1', 'psg_tipe2', 'psg_tipe3', 'psg_tipe4',
        'mask_fitting', 'therapy_review', 'service', 'rental'
    )),
    scheduled_date DATE NOT NULL,
    scheduled_time VARCHAR(20),
    complaint VARCHAR(50),
    notes TEXT,
    status VARCHAR(30) DEFAULT 'baru',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sleep test reports
CREATE TABLE sleep_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id),
    booking_id UUID REFERENCES bookings(id),
    test_type VARCHAR(30) NOT NULL,
    -- Results
    ahi DECIMAL(5,1), -- Apnea-Hypopnea Index
    odi DECIMAL(5,1), -- Oxygen Desaturation Index
    min_spo2 INTEGER,
    avg_spo2 INTEGER,
    total_sleep_time INTEGER, -- minutes
    sleep_efficiency DECIMAL(5,1),
    -- Report
    report_url TEXT,
    analyzed_by VARCHAR(255), -- RPSGT name
    analyzed_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(30) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Therapy sessions
CREATE TABLE therapy_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id),
    device_type VARCHAR(20) NOT NULL,
    device_brand VARCHAR(100) NOT NULL,
    device_model VARCHAR(100),
    serial_number VARCHAR(100),
    -- Settings
    initial_settings JSONB,
    current_settings JSONB,
    mask_type VARCHAR(50),
    mask_size VARCHAR(20),
    -- Monitoring
    last_ahi DECIMAL(5,1),
    last_leak DECIMAL(5,1),
    last_usage_hours DECIMAL(5,1),
    compliance BOOLEAN,
    -- Schedule
    last_review_at TIMESTAMP WITH TIME ZONE,
    next_review_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 11. Analisis Kompetitif (Competitive Analysis)

### 11.1 Market Positioning Matrix

```
                    TINGGI LAYANAN KLINIS
                           │
              Resindo      │      Platform
              Medika       │      Gabungan ★
              (Klinik +    │      (Edukasi + Klinik
               Distributor)│       + E-commerce + Therapy)
                           │
LOW ──────────────────────┼──────────────────────── HIGH
DIGITAL                    │                    DIGITAL
                           │
              SMC Sleep    │      CPAPINDO
              Solution     │      (E-commerce +
              (Edukasi +   │       Diagnostik)
               Screening)  │
                           │
                    RENDAH LAYANAN KLINIS
```

### 11.2 Competitive Advantage

| Aspek | Platform Gabungan | Competitor A | Competitor B | Competitor C |
|-------|------------------|-------------|-------------|-------------|
| **Screening Tool** | ✅ STOP-BANG + ESS | ❌ | ❌ | ❌ |
| **E-commerce** | ✅ Full (multi-brand) | ❌ | ❌ | ✅ (single brand) |
| **Klinik + Dokter** | ✅ | ✅ | ❌ | ❌ |
| **Bilingual** | ✅ ID/EN | ❌ | ✅ | ❌ |
| **Bundle Deals** | ✅ | ❌ | ❌ | ✅ |
| **Personalized Therapy** | ✅ | ❌ | ❌ | ✅ |
| **Mask Fitting** | ✅ | ❌ | ✅ | ✅ |
| **Therapy Data Review** | ✅ | ❌ | ❌ | ✅ |
| **HST + PSG** | ✅ (Both) | ✅ | ✅ | ✅ |
| **RPSGT Certified** | ✅ | ❌ | ✅ | ✅ |
| **Asuransi** | ✅ | ❌ | ✅ | ❌ |
| **Repeat Purchase System** | ✅ | ❌ | ❌ | ✅ |
| **Multi-brand (4 brands)** | ✅ | 1 brand | 2 brands | 3 brands |
| **Patient Journey Tracking** | ✅ | ❌ | ❌ | ❌ |

---

## 12. Roadmap & Milestone

### Phase 1: Foundation (Bulan 1-3)
```
Month 1: ████ Design & Architecture
  ├── UI/UX design (all modules)
  ├── Database schema design
  ├── API architecture
  └── Tech stack selection

Month 2: ████ Core Development
  ├── Homepage + Navigation
  ├── Screening Tool (STOP-BANG + ESS)
  ├── Blog CMS (Sanity)
  └── WhatsApp Integration

Month 3: ████ E-commerce + Booking
  ├── Shopify theme customization
  ├── Product catalog
  ├── Bundle deals
  └── Booking system (consultation + HST)
```

### Phase 2: Enhancement (Bulan 4-6)
```
Month 4: ████ Diagnosis & Therapy
  ├── HST booking flow
  ├── Sleep report delivery
  ├── Personalized therapy pages
  └── Mask fitting booking

Month 5: ████ Retention & B2B
  ├── Customer account
  ├── Repeat purchase automation
  ├── Email marketing flows
  └── B2B portal (grosir)

Month 6: ████ Optimization
  ├── SEO deep optimization
  ├── A/B testing
  ├── Performance tuning
  └── Analytics dashboard
```

### Phase 3: Growth (Bulan 7-12)
```
Month 7-9:   Content & Community
  ├── Video edukatif
  ├── Patient community forum
  ├── Loyalty program
  └── Referral system

Month 10-12: Scale & Innovate
  ├── Mobile app (React Native)
  ├── AI-based recommendations
  ├── Telemedicine integration
  └── Multi-city expansion
```

---

## 13. Estimasi Biaya & Sumber Daya

### 13.1 Development Cost

| Item | Estimasi Biaya | Sumber Daya | Timeline |
|------|---------------|-------------|----------|
| UI/UX Design (All Modules) | Rp 35–50 juta | 1 Senior Designer | 2 bulan |
| Frontend Development | Rp 60–90 juta | 2 Frontend Developer | 4 bulan |
| Backend Development | Rp 50–75 juta | 2 Backend Developer | 4 bulan |
| Shopify Customization | Rp 30–45 juta | 1 Shopify Developer | 3 bulan |
| Screening Engine | Rp 20–30 juta | 1 Full-stack Developer | 2 bulan |
| CMS Setup (Sanity) | Rp 10–15 juta | 1 Backend Developer | 1 bulan |
| QA & Testing | Rp 15–25 juta | 1 QA Engineer | Ongoing |
| DevOps & Deployment | Rp 10–15 juta | 1 DevOps Engineer | 1 bulan |
| **Total Development** | **Rp 230–345 juta** | **8–10 orang** | **6 bulan** |

### 13.2 Operational Cost (Monthly)

| Item | Biaya/Bulan |
|------|------------|
| Shopify Advanced Plan | Rp 3.5 juta |
| Hosting (Backend + DB) | Rp 2–4 juta |
| WhatsApp Business API | Rp 1–2 juta |
| Email Service (SendGrid) | Rp 500rb–1 juta |
| CMS (Sanity) | Gratis–Rp 500rb |
| Domain + SSL | Rp 200rb/bulan |
| CDN (Cloudflare) | Gratis–Rp 500rb |
| Analytics Tools | Gratis |
| **Total Operational** | **Rp 8–12 juta/bulan** |

### 13.3 Marketing Cost (Monthly)

| Item | Biaya/Bulan |
|------|------------|
| Google Ads | Rp 5–10 juta |
| Meta Ads (FB/IG) | Rp 3–5 juta |
| Content Marketing | Rp 3–5 juta |
| SEO Tools (Ahrefs/SEMrush) | Rp 1–2 juta |
| **Total Marketing** | **Rp 12–22 juta/bulan** |

---

## 14. Risiko & Mitigasi

| ID | Risiko | Probabilitas | Dampak | Mitigasi | Owner |
|----|--------|-------------|--------|----------|-------|
| R-01 | Data pasien bocor | Rendah | KRITIS | Enkripsi, PDP compliance, audit berkala | Security |
| R-02 | Screening result salah interpretasi | Sedang | TINGGI | Disclaimer medis jelas, rujuk ke dokter | Medical |
| R-03 | E-commerce overselling | Sedang | SEDANG | Real-time inventory sync | Operations |
| R-04 | Website down saat traffic tinggi | Sedang | SEDANG | CDN, auto-scaling, monitoring | DevOps |
| R-05 | Kompetitor meniru fitur screening | Sedang | RENDAH | Terus tingkatkan UX & konten | Product |
| R-06 | Perubahan regulasi alat kesehatan | Rendah | SEDANG | Monitoring regulasi BPOM | Legal |
| R-07 | HST scheduling conflict | Sedang | SEDANG | Kalender terintegrasi, buffer time | Operations |
| R-08 | Payment gateway error | Sedang | TINGGI | Multi-gateway fallback | Tech |
| R-09 | Inkonsistensi konten bilingual | Sedang | RENDAH | CMS workflow dengan review | Content |
| R-10 | Keterbatasan budget marketing | Sedang | SEDANG | Fokus organic + content marketing | Management |

---

## 15. Kriteria Keberhasilan (Success Criteria)

### 15.1 KPI Dashboard

| KPI | Target 3 Bulan | Target 6 Bulan | Target 12 Bulan | Target 18 Bulan |
|-----|---------------|---------------|----------------|----------------|
| **Traffic** | | | | |
| Unique Visitors/bulan | 10.000 | 30.000 | 75.000 | 150.000 |
| Organic Traffic Share | 30% | 50% | 65% | 75% |
| **Screening** | | | | |
| Screening Completions/bulan | 200 | 500 | 1.000 | 2.000 |
| Screening→Consultation Rate | 5% | 8% | 12% | 15% |
| **Booking** | | | | |
| Consultation Bookings/bulan | 50 | 200 | 500 | 1.000 |
| HST Bookings/bulan | 30 | 100 | 300 | 500 |
| **Revenue** | | | | |
| E-commerce Revenue/bulan | Rp 300jt | Rp 800jt | Rp 1.5M | Rp 2.5M |
| Service Revenue/bulan | Rp 50jt | Rp 150jt | Rp 400jt | Rp 700jt |
| Total Revenue/bulan | Rp 350jt | Rp 950jt | Rp 1.9M | Rp 3.2M |
| **Engagement** | | | | |
| Bounce Rate | < 55% | < 45% | < 40% | < 35% |
| Avg Session Duration | > 2 min | > 3 min | > 4 min | > 5 min |
| Pages/Session | > 2.5 | > 3.5 | > 4.5 | > 5.5 |
| **Customer** | | | | |
| NPS Score | > 40 | > 55 | > 65 | > 75 |
| Repeat Purchase Rate | 10% | 25% | 40% | 50% |
| Customer LTV | Rp 5jt | Rp 8jt | Rp 12jt | Rp 18jt |

---

## 16. Stakeholder & Governance

### 16.1 Organizational Structure

```
                    ┌─────────────┐
                    │  STEERING   │
                    │  COMMITTEE  │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   PRODUCT   │
                    │    OWNER    │
                    └──────┬──────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
   ┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
   │  DESIGN &   │ │  ENGINEERING│ │  CONTENT &  │
   │     UX      │ │    TEAM     │ │  MARKETING  │
   └─────────────┘ └─────────────┘ └─────────────┘
```

### 16.2 Roles & Responsibilities

| Role | Responsibility | Person |
|------|---------------|--------|
| Steering Committee | Strategic decisions, budget approval | Management |
| Product Owner | Prioritas fitur, roadmap, stakeholder communication | TBD |
| Project Manager | Timeline, budget, risk management | TBD |
| UI/UX Designer | Desain visual, prototyping, usability testing | TBD |
| Frontend Developer | Implementasi UI, responsive, i18n | TBD |
| Backend Developer | API, database, integrasi | TBD |
| Shopify Developer | E-commerce, theme, apps | TBD |
| Content Writer | Blog, artikel, copywriting (ID/EN) | TBD |
| Medical Advisor | Validasi konten medis, screening algorithm | TBD |
| QA Engineer | Testing fungsional, performa, keamanan | TBD |
| Marketing Manager | SEO, SEM, social media, analytics | TBD |

---

## 17. Asumsi & Ketergantungan (Assumptions & Dependencies)

### 17.1 Asumsi
1. Brand partners (Philips, ResMed, Nox Medical, BMC) mendukung konsolidasi platform.
2. Budget development dan operational tersedia sesuai estimasi.
3. Tim pengembangan (8-10 orang) bisa di-recruit dalam 1 bulan.
4. Konten medis dari dokter & RPSGT tersedia untuk validasi.
5. WhatsApp Business API sudah terdaftar dan disetujui.
6. Shopify Advanced Plan sudah aktif.
7. Google Business Profile sudah diverifikasi.

### 17.2 Ketergantungan
1. Ketersediaan produk dari semua brand partners.
2. Responsivitas stakeholder untuk approval.
3. Ketersediaan foto/video produk beresolusi tinggi.
4. Tim analisa RPSGT di Singapura untuk HST.
5. Payment gateway (Midtrans) sudah terintegrasi.
6. Koneksi internet stabil untuk testing.

---

## 18. Lampiran (Appendices)

### A. Glossary Medis Lengkap

| Istilah | Definisi |
|---------|----------|
| **Sleep Apnea** | Gangguan tidur yang menyebabkan napas berhenti berulang kali |
| **OSA** | Obstructive Sleep Apnea — tipe paling umum, penyumbatan saluran napas |
| **CPAP** | Continuous Positive Airway Pressure — tekanan udara konstan |
| **BiPAP** | Bilevel Positive Airway Pressure — tekanan udara dua level |
| **APAP** | Automatic Positive Airway Pressure — tekanan otomatis |
| **PSG** | Polysomnography — pemeriksaan kualitas tidur menyeluruh |
| **HST** | Home Sleep Test — pemeriksaan tidur di rumah |
| **RPSGT** | Registered Polysomnographic Technologist |
| **AHI** | Apnea-Hypopnea Index — ukuran keparahan sleep apnea |
| **STOP-BANG** | Kuesioner 8 pertanyaan skrining risiko sleep apnea |
| **ESS** | Epworth Sleepiness Scale — pengukuran tingkat kantuk siang hari |
| **ODI** | Oxygen Desaturation Index |
| **SPO2** | Saturasi oksigen dalam darah |
| **Nox A1s** | Sistem diagnostik tidur dari Nox Medical |
| **Nox T3s** | Level III sleep test system dari Nox Medical |
| **Personalized Therapy** | Kustomisasi setting CPAP untuk setiap pasien |
| **Mask Fitting** | Assessment untuk menentukan masker terbaik |
| **Therapy Data Review** | Monitoring dan optimasi data penggunaan CPAP |

### B. Kompetensi Brand Partners

| Brand | Specialisasi | Products | Distributor Status |
|-------|-------------|----------|-------------------|
| **Philips Respironics** | CPAP, BiPAP, Masker | DreamStation, Amara, DreamWear | Authorized (SMC) |
| **ResMed** | CPAP, BiPAP, Diagnostic | AirSense, AirFit, ApneaLink | Authorized (Resindo, CPAPINDO) |
| **Nox Medical** | Sleep Diagnostic | Nox A1s, Nox T3s | Exclusive (CPAPINDO) |
| **BMC** | CPAP, BiPAP, Travel | G3, M1 Mini | Distributor (CPAPINDO) |
| **Yuwell** | Oxygen, CPAP | Concentrator, CPAP | Distributor (CPAPINDO) |
| **SOMNOmedics** | Diagnostic | SOMNOcheck | Authorized (Resindo) |

### C. Regulatory Compliance

| Regulasi | Persyaratan | Status |
|----------|-------------|--------|
| UU No. 27/2022 (PDP) | Consent data, hak hapus, enkripsi | Perlu implementasi |
| Permenkes No. 20/2019 | Pemasaran alat kesehatan | Sudah comply |
| BPOM | Pendaftaran alat kesehatan | Sudah dimiliki |
| Pedoman IKP | Iklan kesehatan tidak menyesatkan | Perlu review |
| AASM Standards | Sleep testing standards | Sudah comply |
| PCI-DSS | Keamanan pembayaran | Via Shopify |

### D. URL Strategy (Merged Platform)

| Halaman | URL | Source |
|---------|-----|--------|
| Homepage | / | All |
| Screening | /screening | SMC |
| Blog | /blog | Resindo + CPAPINDO |
| Products | /shop | CPAPINDO |
| Bundle Deals | /shop/bundles | CPAPINDO |
| HST | /services/home-sleep-test | CPAPINDO |
| PSG | /services/sleep-diagnostic | SMC |
| Consultation | /book/consultation | Resindo |
| Mask Fitting | /services/mask-fitting | Resindo + CPAPINDO |
| Therapy | /therapy | CPAPINDO |
| About | /about | Resindo |
| Contact | /contact | All |
| Account | /account | CPAPINDO |
