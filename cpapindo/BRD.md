# Business Requirements Document (BRD)
## CPAPINDO — cpapindo.com

**Versi Dokumen:** 1.0  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Business Analysis  
**Status:** Draft

---

## 1. Ringkasan Bisnis (Business Summary)

### 1.1 Profil Perusahaan
- **Nama Perusahaan:** PT Indo Medika Nusantara (IMN)
- **Brand:** CPAPINDO
- **Domain:** cpapindo.com
- **Platform:** Shopify (E-commerce)
- **Industri:** E-commerce Alat Kesehatan & Sleep Diagnostic Services
- **Merek Didistribusikan:** Nox Medical (eksklusif), ResMed, BMC, Yuwell
- **Lokasi:** L'Avenue Office Tower LT12B, Jl. Raya Pasar Minggu No.KAV 16, Pancoran, Jakarta Selatan 12780
- **Kontak:** +62 21 8066 7233 | WhatsApp: +62 811 1212 858 / +62 811 9113 330
- **Email:** imn@cpapindo.co.id
- **Jam Operasional:** Senin–Jumat, 09.00–18.00 WIB
- **Pengalaman:** 27 tahun di bidang sleep & respiratory healthcare

### 1.2 Visi Bisnis
Menjadi platform e-commerce dan sleep diagnostic center terdepan di Indonesia yang menggabungkan penjualan produk original dengan layanan klinis berstandar internasional — dari diagnosis hingga terapi personal.

### 1.3 Misi Bisnis
1. Menyediakan akses mudah ke produk CPAP, BiPAP, dan sleep diagnostic original dari brand terpercaya.
2. Memberikan layanan diagnostik tidur (HST & PSG) dengan standar internasional oleh RPSGT bersertifikat.
3. Menawarkan personalized therapy — karena "Auto CPAP is not a One Size Fit All Device."
4. Membangun ekosistem sleep healthcare yang terintegrasi: produk → diagnosis → terapi → support.
5. Melayaniboth end-consumer (B2C) dan profesional medis (B2B).

---

## 2. Kebutuhan Bisnis (Business Needs)

### 2.1 Kebutuhan Utama

| ID | Kebutuhan | Urgensi | Dampak Bisnis |
|----|-----------|---------|---------------|
| BN-01 | E-commerce yang fully functional | Tinggi | Core revenue stream |
| BN-02 | Bundle deal system | Tinggi | Meningkatkan AOV & conversion |
| BN-03 | HST booking online | Tinggi | Memperluas revenue diagnostik |
| BN-04 | Personalized therapy showcase | Sedang | Differentiated value proposition |
| BN-05 | Product review system | Sedang | Social proof → trust → conversion |
| BN-06 | Repeat purchase automation | Sedang | Customer retention & LTV |
| BN-07 | Marketplace integration | Sedang | Multi-channel sales |
| BN-08 | Content marketing (blog) | Sedang | SEO & education |

### 2.2 Kebutuhan Stakeholder

| Stakeholder | Kebutuhan | Kepuasan yang Diharapkan |
|-------------|-----------|-------------------------|
| **Founder/Director** | Revenue growth, brand authority | Revenue naik 50% dalam 12 bulan |
| **E-commerce Manager** | Tools untuk mengelola toko | Dashboard penjualan real-time |
| **Sleep Specialist (RPSGT)** | Platform untuk showcase keahlian | More patient referrals |
| **Customer Service** | Mengurangi beban tanya produk | 40% pengurangan inquiry repetitif |
| **Marketing** | Traffic & conversion tools | Conversion rate 3%+ |
| **Warehouse** | Manajemen stok akurat | Zero overselling |
| **B2B Partners (Klinik/Dokter)** | Harga grosir & catalog | Easy B2B ordering |

---

## 3. Analisis Stakeholder

### 3.1 Peta Stakeholder

```
                    Tinggi Pengaruh
                         │
          ┌──────────────┼──────────────┐
          │   FOUNDER    │   RPSGT      │
          │   (Keep      │   (Keep      │
          │   Satisfied) │   Satisfied) │
Tinggi    │              │              │
Kepentingan├──────────────┼──────────────┤
          │   E-COM MGR  │   CUSTOMER   │
          │   (Manage    │   (Manage    │
          │   Closely)   │   Closely)   │
          │              │              │
          └──────────────┼──────────────┘
                         │
                    Rendah Pengaruh
```

### 3.2 Rincian Stakeholder

| Stakeholder | Peran | Kepentingan | Pengaruh | Strategi |
|-------------|-------|-------------|---------|----------|
| Founder | Business Strategy | Tinggi | Tinggi | Briefing mingguan |
| E-commerce Manager | Daily Operations | Tinggi | Tinggi | Dashboard & tools |
| RPSGT Specialist | Medical Expertise | Tinggi | Tinggi | Collaboration |
| Marketing | Growth | Tinggi | Sedang | Sprint planning |
| CS Team | Customer Experience | Sedang | Sedang | Training & tools |
| Warehouse | Fulfilment | Sedang | Sedang | Inventory sync |

---

## 4. Analisis Bisnis Saat Ini (As-Is Analysis)

### 4.1 Proses Bisnis Saat Ini
```
PASIEN IDENTIFIKASI MASALAH TIDUR
        │
        ▼
KUNJUNGI CPAINDO.COM ← (E-commerce Shopify)
        │
        ├── Browse Produk → Add to Cart → Checkout
        │
        ├── Baca Bundle Deal → Pilih Paket → Checkout
        │
        └── Booking HST → Isi Form → Jadwal Teknisi
                │
                ▼
FULFILMENT
        │
        ├── Produk: Shipping (JNE/GoSend)
        │
        └── HST: Teknisi datang → Set up → Kembali pagi
                │
                ▼
POST-FULFILMENT
        │
        ├── Produk: Setup alat mandiri
        │
        └── HST: Data dikirim ke Singapura → Analisa RPSGT → Report 7 hari
                │
                ▼
REPEAT PURCHASE
        │
        ├── Beli filter, cushion, tubing
        │
        └── Booking servis/kalibrasi
```

### 4.2 Peta Masalah
| No | Masalah | Dampak | Root Cause |
|----|---------|--------|------------|
| 1 | Tidak ada bundle deal prominent | AOV rendah | Belum ada sistem bundling |
| 2 | HST booking manual via WA | Response time lambat | Tidak ada form online |
| 3 | Tidak ada product review | Trust rendah | Belum ada review system |
| 4 | Personalized therapy tidak ter-expose | Differentiation hilang | Konten tersembunyi |
| 5 | Repeat purchase tidak di-reminder | Lost revenue | Tidak ada automation |
| 6 | Tidak ada B2B portal | Kehilangan klien klinik | Belum dikembangkan |

---

## 5. Analisis Bisnis Tujuan (To-Be Analysis)

### 5.1 Proses Bisnis Tujuan
```
PASIEN IDENTIFIKASI MASALAH TIDUR
        │
        ▼
KUNJUNGI CPAINDO.COM ← (Enhanced UX)
        │
        ├── Lihat Bundle Deal → Checkout dengan diskon
        │
        ├── Lihat Personalized Therapy Info → Pahami pentingnya kustomisasi
        │
        ├── Booking HST Online → Form lengkap → Auto-schedule
        │
        └── Baca Blog → Education → Awareness
                │
                ▼
CHECKOUT & FULFILMENT
        │
        ├── Produk: Auto-shipping + tracking
        │
        └── HST: Teknisi → Set up → Data analysis → Report
                │
                ▼
THERAPY JOURNEY
        │
        ├── Mask Fitting → Temukan masker tepat
        │
        ├── Therapy Data Review → Optimalisasi setting
        │
        └── Technical Support → Maintenance berkala
                │
                ▼
REPEAT & RETENTION
        │
        ├── Auto-reminder: "Filter sudah 30 hari, beli baru?"
        │
        ├── Email marketing: tips + promo
        │
        └── Loyalty program (fase lanjutan)
```

### 5.2 Target Kinerja Bisnis

| Metrik | Saat Ini (Estimasi) | Target 6 Bulan | Target 12 Bulan |
|--------|---------------------|---------------|----------------|
| Monthly Revenue | Rp 200 juta | Rp 500 juta | Rp 1 miliar |
| Orders/Bulan | 50 | 200 | 400 |
| AOV | Rp 2 juta | Rp 3.5 juta | Rp 4 juta |
| HST Bookings | 10/bulan | 100/bulan | 200/bulan |
| Conversion Rate | 1% | 2.5% | 3.5% |
| Repeat Purchase | 10% | 30% | 40% |
| Organic Traffic | Baseline | +100% | +300% |

---

## 6. Kebutuhan Regulasi & Kepatuhan

| ID | Regulasi | Persyaratan | Status |
|----|----------|-------------|--------|
| REG-01 | UU PDP No. 27/2022 | Consent data, hak hapus | Perlu implementasi |
| REG-02 | Permenkes No. 20/2019 | Pemasaran alat kesehatan | Sudah comply |
| REG-03 | PCI-DSS | Keamanan pembayaran | Via Shopify |
| REG-04 | Pedoman IKP | Iklan kesehatan | Perlu review konten |
| REG-05 | AASM Standards | Sleep testing standards | Sudah comply (RPSGT) |
| REG-06 | BPOM | Pendaftaran alat kesehatan | Sudah dimiliki |

---

## 7. Model Bisnis & Revenue Stream

### 7.1 Revenue Streams
```
REVENUE MODEL
    │
    ├── 1. PRODUCT SALES (E-commerce)
    │   ├── CPAP Machines: Rp 14–46 juta
    │   ├── BiPAP Machines: Rp 26+ juta
    │   ├── Masks: Rp 2–3.5 juta
    │   ├── Accessories: Rp 41–600 ribu
    │   └── Bundle Deals: 5–15% discount vs satuan
    │
    ├── 2. SLEEP DIAGNOSTIC SERVICES
    │   ├── Home Sleep Test (HST): Rp 3–5 juta
    │   └── In-Lab PSG: Rp 5–8 juta
    │
    ├── 3. THERAPY SERVICES
    │   ├── Personalized Therapy Setup: Included / Rp 500rb
    │   ├── Mask Fitting: Included / Rp 300rb
    │   ├── Therapy Data Review: Rp 200–500rb/session
    │   └── Technical Support/Service: Rp 200–500rb
    │
    └── 4. REPEAT PURCHASE (Recurring)
        ├── Filter: Rp 41–200rb (bulanan)
        ├── Mask Cushion: Rp 200–500rb (3-6 bulan)
        ├── Tubing: Rp 150–300rb (6-12 bulan)
        └── HumidX: Rp 165rb (bulanan)
```

### 7.2 Estimasi Revenue Breakdown

| Revenue Stream | Saat Ini | Target 12 Bulan | % dari Total |
|----------------|---------|----------------|-------------|
| Product Sales | 60% | 50% | Rp 500 juta |
| Sleep Diagnostic | 20% | 25% | Rp 250 juta |
| Therapy Services | 10% | 15% | Rp 150 juta |
| Repeat Purchase | 10% | 10% | Rp 100 juta |
| **Total** | **100%** | **100%** | **Rp 1 miliar** |

---

## 8. Analisis ROI

### 8.1 Investasi
| Item | Biaya | Waktu |
|------|-------|-------|
| Shopify enhancement | Rp 60–95 juta | 2–3 bulan |
| Custom features/apps | Rp 50–80 juta | 3–4 bulan |
| Sleep test platform | Rp 25–40 juta | 2–3 bulan |
| Marketing digital | Rp 15–25 juta/bulan | Ongoing |
| **Total Year 1** | **Rp 315–505 juta** | |

### 8.2 Return (Estimasi 12 Bulan)
| Benefit | Estimasi |
|---------|---------|
| Revenue increase (product) | Rp 3.6 miliar |
| Revenue increase (diagnostic) | Rp 1.5 miliar |
| Revenue increase (therapy) | Rp 600 juta |
| Repeat purchase revenue | Rp 600 juta |
| **Total Return** | **Rp 6.3 miliar** |

### 8.3 ROI Calculation
- **Investasi Year 1:** Rp 315–505 juta
- **Return Year 1:** Rp 6.3 miliar
- **ROI:** 1,148%–1,900%
- **Payback Period:** < 2 bulan

---

## 9. Rencana Implementasi

### 9.1 Timeline

```
Bulan 1-2: ████████████ E-commerce Enhancement
  ├── Bundle deal system
  ├── Product review
  ├── Search optimization
  └── Payment/shipping improvement

Bulan 3-4: ████████████ Sleep Test Platform
  ├── HST booking form
  ├── Diagnostic info pages
  ├── Report delivery system
  └── RPSGT showcase

Bulan 5-6: ████████████ Therapy & Retention
  ├── Personalized therapy pages
  ├── Mask fitting booking
  ├── Repeat purchase automation
  └── Email marketing flow
```

---

## 10. Analisis Risiko Bisnis

| ID | Risiko | Probabilitas | Dampak | Mitigasi | Owner |
|----|--------|-------------|--------|----------|-------|
| BR-01 | Shopify fee naik | Rendah | Sedang | Evaluasi platform alternatif | Finance |
| BR-02 | Stok habis (overselling) | Sedang | Tinggi | Real-time inventory sync | Operations |
| BR-03 | Kompetitor undercut harga | Sedang | Sedang | Fokus value-added service | Marketing |
| BR-04 | HST service quality turun | Rendah | Tinggi | Quality assurance RPSGT | Medical |
| BR-05 | High return rate | Sedang | Sedang | Better product info + mask fitting | CS |
| BR-06 | Payment fraud | Rendah | Tinggi | Shopify fraud analysis | Tech |

---

## 11. Strategi Diferensiasi

### 11.1 Keunggulan Kompetitif
| Aspek | CPAPINDO | Kompetitor |
|-------|----------|------------|
| E-commerce Full | ✅ Shopify (138+ produk) | WhatsApp/Manual |
| Bundle Deals | ✅ Diskon paket | ❌ |
| RPSGT Certified | ✅ Analisa di Singapura | Tidak semua |
| Nox Medical Exclusive | ✅ Distributor eksklusif | ❌ |
| Personalized Therapy | ✅ Core feature | ❌ |
| Mask Fitting Service | ✅ Professional | ❌ |
| Therapy Data Review | ✅ Monitoring berkala | ❌ |
| Repeat Purchase System | ✅ Auto-reminder | ❌ |
| Multi-channel | ✅ Web + Tokopedia | Single channel |
| 27 Tahun Pengalaman | ✅ | Bervariasi |

### 11.2 Positioning
**"Satu-satunya platform di Indonesia yang menggabungkan e-commerce CPAP terlengkap dengan layanan sleep diagnostic berstandar internasional — karena Auto CPAP bukan one-size-fits-all."**

---

## 12. Kriteria Keterimaan Bisnis

| No | Kriteria | Metrik | Minimum |
|----|----------|--------|---------|
| 1 | Revenue bulanan | Rp | 500 juta (6 bulan) |
| 2 | Order completion rate | % | > 95% |
| 3 | HST booking conversion | % | > 5% dari traffic |
| 4 | Customer satisfaction | Rating | > 4.5/5 |
| 5 | Return rate | % | < 5% |
| 6 | Repeat purchase rate | % | > 30% (6 bulan) |
| 7 | Website uptime | % | 99.9% |
| 8 | SEO ranking | Position | Top 5 "CPAP Indonesia" |

---

## 13. Dokumen Pendukung

- [ ] Product Requirements Document (PRD)
- [ ] Functional Requirements Document (FRD)
- [ ] Technical Requirements Document (TRD)
- [ ] UI/UX Design Specification
- [ ] Content Strategy
- [ ] Marketing Plan
- [ ] Security & Privacy Assessment
- [ ] Testing Plan

---

## 14. Persetujuan (Approval)

| Role | Nama | Tanggal | Tanda Tangan |
|------|------|---------|-------------|
| Product Owner | _____________ | ___/___/2026 | _____________ |
| Founder/Director | _____________ | ___/___/2026 | _____________ |
| E-commerce Manager | _____________ | ___/___/2026 | _____________ |
| Sleep Specialist (RPSGT) | _____________ | ___/___/2026 | _____________ |
| IT Lead | _____________ | ___/___/2026 | _____________ |
