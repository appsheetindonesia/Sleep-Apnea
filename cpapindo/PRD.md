# Product Requirements Document (PRD)
## CPAPINDO — cpapindo.com

**Versi Dokumen:** 1.0  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Product Development  
**Status:** Draft

---

## 1. Ringkasan Eksekutif (Executive Summary)

CPAPINDO (cpapindo.com) adalah website e-commerce dan platform layanan kesehatan tidur yang dikembangkan oleh **PT Indo Medika Nusantara (IMN)**, distributor resmi dan eksklusif untuk **Nox Medical**, **ResMed**, **BMC**, dan **Yuwell** di Indonesia. Website ini berfungsi sebagai toko online (Shopify-based) untuk produk CPAP/BiPAP/masker, sekaligus portal layanan diagnostik tidur (Home Sleep Test, In-Lab PSG) dengan standar internasional.

CPAPINDO dipimpin oleh spesialis dengan **27 tahun pengalaman klinis** dalam sleep and respiratory healthcare, dan menawarkan analisa data sleep test yang dilakukan di **Singapura** oleh **Registered Polysomnographic Technologist (RPSGT)** bersertifikat.

---

## 2. Latar Belakang & Masalah (Background & Problem Statement)

### Masalah
- Pasien sleep apnea sulit menemukan one-stop solution untuk diagnostik + terapi + produk dalam satu platform.
- Tidak semua distributor alat kesehatan memiliki keahlian klinis dalam sleep diagnostics.
- Quality assurance data sleep test di Indonesia masih rendah — banyak analisa tanpa sertifikasi RPSGT.
- Pasien bingung memilih CPAP/BiPAP yang tepat karena banyak pilihan produk dari berbagai brand.
- Ketersediaan produk original (non-black market) sulit diverifikasi oleh konsumen.
- Proses Home Sleep Test rumit dan membutuhkan koordinasi teknisi yang andal.

### Solusi
CPAPINDO menyediakan:
1. **E-commerce** produk CPAP, BiPAP, masker, aksesoris dari brand terpercaya (138+ produk).
2. **Personalized Therapy** — kustomisasi CPAP untuk setiap pasien (bukan one-size-fits-all).
3. **Mask Fitting Service** — assessment facial anatomy, sleeping habits, comfort preferences.
4. **Therapy Data Review & Adjustment** — monitoring berkala untuk memastikan terapi efektif.
5. **Home Sleep Test (HST)** — pemeriksaan tidur di rumah dengan analisa RPSGT di Singapura.
6. **In-Lab Sleep Diagnostic** — menggunakan Nox A1s (distributor eksklusif Nox Medical).
7. **Technical Support** — servis, maintenance, performance check alat.

---

## 3. Tujuan Produk (Product Goals)

| ID | Tujuan | Metrik Keberhasilan |
|----|--------|---------------------|
| G-01 | Meningkatkan penjualan produk online | Rp 500 juta/bulan dalam 6 bulan |
| G-02 | Memperluas jangkauan layanan HST | 100 HST/bulan dalam 6 bulan |
| G-03 | Menjadi referensi utama Nox Medical & ResMed di Indonesia | Top of mind untuk sleep diagnostic |
| G-04 | Membangun ekosistem personalized therapy | 500 pasien active therapy/bulan |
| G-05 | Meningkatkan repeat purchase (aksesoris, filter) | 30% repeat rate dalam 6 bulan |

---

## 4. Pengguna Target (Target Users)

### Persona 1: Pasien Sleep Apnea (End Consumer)
- **Demografi:** Usia 30–65 tahun,男女
- **Kebutuhan:** Beli CPAP, masker, aksesoris, sleep test
- **Pain Point:** Tidak tahu alat mana yang cocok, harga mahal, butuh panduan

### Persona 2: Dokter / Klinik (B2B)
- **Demografi:** Dokter spesialis paru, THT, sleep medicine
- **Kebutuhan:** Beli alat untuk klinik, rujukan pasien untuk HST/PSG
- **Pain Point:** Butuh distributor terpercaya dengan support teknis

### Persona 3: Pengguna CPAP (Repeat Customer)
- **Demografi:** Sudah menggunakan CPAP
- **Kebutuhan:** Beli filter, masker cushion, tubing replacement, servis alat
- **Pain Point:** Sukar menemukan spare parts original

### Persona 4: Caregiver / Keluarga
- **Demografi:** Istri/anak yang membantu pasien
- **Kebutuhan:** Memahami cara penggunaan alat, maintenance
- **Pain Point:** Tidak paham teknis

---

## 5. Ruang Lingkup (Scope)

### In-Scope
1. **E-commerce** (Shopify): Katalog 138+ produk dengan checkout & pembayaran
2. **Homepage**: Bundle deals, personalized therapy info, HST promo, featured products
3. **Product Pages**: Detail produk, variant, harga, review
4. **Sleep Test Booking**: Form booking HST + PSG
5. **Service Pages**: Personalized therapy, mask fitting, therapy review, technical support
6. **Blog/Articles**: Edukasi sleep apnea
7. **WhatsApp Integration**: Customer support
8. **Payment Integration**: Bank transfer, credit card, e-wallet
9. **Shipping Integration**: JNE, J&T, GoSend, Grab

### Out-of-Scope
- Patient portal / dashboard
- Integrasi asuransi
- Aplikasi mobile native
- Marketplace (Tokopedia, Shopee) management

---

## 6. Kebutuhan Fungsional (Functional Requirements)

### 6.1 Homepage
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-01 | Hero Carousel | Bundle deals, Travel AutoCPAP, Auto CPAP & BiPAP, BiPAP & Ventilator, Oksigen, Masker, Parts, Filter, Humidification, Tube | P0 |
| FR-02 | Personalized Therapy Section | Penjelasan "Auto CPAP is not a One Size Fit All Device" + Read More | P0 |
| FR-03 | Mask Fitting Section | Deskripsi layanan mask fitting + Read More | P0 |
| FR-04 | Therapy Review Section | Deskripsi therapy data review & adjustment + Read More | P0 |
| FR-05 | Technical Support Section | Deskripsi technical support + click for service | P0 |
| FR-06 | HST Promo Section | "Should you book a Home Sleep Evaluation Test?" + Book Now | P0 |
| FR-07 | Featured Products | Carousel produk unggulan dengan harga | P0 |
| FR-08 | Bundle Deals Section | Paket bundling CPAP + Masker dengan harga spesial | P0 |

### 6.2 E-commerce (Shopify)

#### Product Listing
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-09 | Product Grid | Grid produk dengan gambar, nama, vendor, harga | P0 |
| FR-10 | Filter & Sort | Filter: kategori, vendor, harga. Sort: default, harga, nama | P0 |
| FR-11 | Pagination | Navigasi halaman produk | P0 |
| FR-12 | Search | Pencarian produk berdasarkan nama | P0 |
| FR-13 | Product Count | "138 products" counter | P0 |

#### Product Detail
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-14 | Product Images | Multiple gambar, zoom, gallery | P0 |
| FR-15 | Variant Selection | Pilihan ukuran/warna/variant jika ada | P0 |
| FR-16 | Price Display | Harga regular & sale price (Rp format) | P0 |
| FR-17 | Add to Cart | Tombol tambah ke keranjang | P0 |
| FR-18 | Vendor Badge | Label "ResMed", "BMC", "Nox Medical", "Yuwell" | P0 |
| FR-19 | Product Description | Deskripsi lengkap, spesifikasi | P0 |
| FR-20 | Related Products | Produk terkait/rekomendasi | P1 |

#### Cart & Checkout
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-21 | Shopping Cart | Keranjang belanja dengan jumlah item | P0 |
| FR-22 | Cart Update | Ubah jumlah, hapus item | P0 |
| FR-23 | Checkout Flow | Alamat → Pengiriman → Pembayaran → Konfirmasi | P0 |
| FR-24 | Payment Options | Bank transfer, credit card, e-wallet (GoPay, OVO, Dana) | P0 |
| FR-25 | Shipping Options | JNE, J&T, GoSend, Grab Express | P0 |
| FR-26 | Order Confirmation | Email + WhatsApp konfirmasi | P0 |
| FR-27 | Order Tracking | Lacak status pesanan | P1 |

### 6.3 Sleep Test Services

#### Home Sleep Test (HST)
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-28 | HST Info Page | Penjelasan HST, proses, manfaat | P0 |
| FR-29 | HST Booking Form | Form: nama, telepon, email, tanggal, alamat rumah | P0 |
| FR-30 | HST Process Flow | 5 langkah: Hubungi → Jadwal → Set-up → Analisa → Report | P0 |
| FR-31 | HST Report Info | "Sleep Report ready in 7 working days" | P0 |
| FR-32 | RPSGT Badge | Info analisa oleh RPSGT bersertifikat di Singapura | P0 |

#### In-Lab Sleep Diagnostic
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-33 | Nox A1s Page | Info sistem Nox A1s (distributor eksklusif) | P0 |
| FR-34 | Nox T3s Page | Info Level III sleep test system | P1 |
| FR-35 | Diagnostic Booking | Form booking sleep test in-lab | P0 |

### 6.4 Therapy Services
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-36 | Personalized Therapy | Detail: customized setting untuk setiap user | P0 |
| FR-37 | Mask Fitting | Detail: assessment facial anatomy, sleeping habits | P0 |
| FR-38 | Therapy Data Review | Detail: regular review, progress monitoring | P0 |
| FR-39 | Technical Support | Detail: performance check, maintenance | P0 |
| FR-40 | Service Booking | Form/WhatsApp untuk booking layanan | P0 |

### 6.5 Blog & Articles
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-41 | Article List | Daftar artikel dengan gambar & judul | P1 |
| FR-42 | Article Detail | Artikel lengkap dengan share buttons | P1 |
| FR-43 | Kategori | Filter artikel berdasarkan topik | P2 |

### 6.6 WhatsApp Integration
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-44 | Floating Button | WhatsApp FAB di semua halaman | P0 |
| FR-45 | Pre-filled Messages | Pesan otomatis berdasarkan konteks | P0 |
| FR-46 | Contact Info | WhatsApp: +62 811 1212 858 / +62 811 9113 330 | P0 |

---

## 7. Kebutuhan Non-Fungsional (Non-Functional Requirements)

| ID | Kategori | Persyaratan | Target |
|----|----------|-------------|--------|
| NFR-01 | Performa | Page load time | < 3 detik |
| NFR-02 | SEO | Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| NFR-03 | Responsivitas | Mobile-first | Berfungsi optimal di 320px–2560px |
| NFR-04 | Keamanan Pembayaran | PCI-DSS Compliance | Via Shopify Payments |
| NFR-05 | Keamanan Data | HTTPS + SSL | Semua halaman |
| NFR-06 | Ketersediaan | Uptime | 99.9% (Shopify SLA) |
| NFR-07 | Skalabilitas | Traffic spike | Handle flash sale tanpa down |
| NFR-08 | Browser | Cross-browser | Chrome, Firefox, Safari, Edge |
| NFR-09 | Bahasa | Indonesia | Default,部分 EN untuk konten medis |
| NFR-10 | Mobile App | Progressive Web App | Akses cepat di mobile |

---

## 8. Kebutuhan Desain & UX (Design & UX Requirements)

### 8.1 Desain Visual
- **Color Palette:** Biru (#0066cc), putih (#ffffff), abu (#f5f5f5), accent orange (#ff6600) untuk CTA
- **Typography:** Font sans-serif modern, mudah dibaca
- **Imagery:** Foto produk original, foto proses HST, infografis
- **Tone:** Profesional, trustworthy, medically authoritative

### 8.2 UX Patterns
- **Bundle Deal Prominence:** Tampilkan bundle deals di hero untuk meningkatkan AOV
- **Personalized Therapy Messaging:** Tekankan "bukan one-size-fit-all" untuk differentiate
- **RPSGT Authority:** Badge sertifikasi RPSGT untuk membangun trust
- **Singapore Analysis:** Highlight analisa di Singapura untuk quality assurance
- **Easy Reorder:** Shortcut untuk beli ulang filter/masker yang sudah habis

### 8.3 Product Categories Structure
```
Products (138+)
├── Bundle Deal
├── Travel AutoCPAP
├── Auto CPAP & BiPAP
├── BiPAP & Ventilator
├── Oksigen
├── Masker
│   ├── Nasal Pillow
│   ├── Nasal
│   └── Full Face
├── Parts Masker
├── Filter
├── Humidification
├── Tube
└── Sleep Test
    ├── Home Sleep Test
    └── In-Lab Diagnostic
```

---

## 9. Kebutuhan Integrasi (Integration Requirements)

| ID | Integrasi | Tipe | Prioritas |
|----|-----------|------|-----------|
| IR-01 | Shopify E-commerce | Produk, cart, checkout, pembayaran | P0 |
| IR-02 | Payment Gateway | Midtrans / Xendit | P0 |
| IR-03 | Shipping | JNE, J&T, GoSend, Grab | P0 |
| IR-04 | WhatsApp Business | Customer support & booking | P0 |
| IR-05 | Google Analytics 4 | Tracking | P0 |
| IR-06 | Facebook/Meta Pixel | Retargeting | P1 |
| IR-07 | Tokopedia Official Store | Marketplace sync | P1 |
| IR-08 | Email (Shopify) | Order confirmation, marketing | P0 |
| IR-09 | Review System | Product reviews | P1 |

---

## 10. Kebutuhan Data (Data Requirements)

### 10.1 Data Produk (Shopify Native)
```json
{
  "id": "gid://shopify/Product/xxx",
  "title": "string",
  "vendor": "string(ResMed|BMC|Nox Medical|Yuwell)",
  "product_type": "string",
  "variants": [{
    "price": "string(Rp format)",
    "compare_at_price": "string",
    "sku": "string",
    "inventory_quantity": "integer"
  }],
  "images": ["url"],
  "body_html": "string"
}
```

### 10.2 Data Home Sleep Test Booking
```json
{
  "id": "uuid",
  "nama_lengkap": "string",
  "email": "string",
  "no_telepon": "string",
  "alamat_rumah": "text",
  "kota": "string",
  "tanggal_test": "date",
  "jam_preferensi": "enum(pagi, sore, malam)",
  "riwayat_medis": "text(optional)",
  "status": "enum(baru, dijadwalkan, set_up, analisa, report, selesai)",
  "report_url": "string",
  "report_ready_at": "timestamp",
  "created_at": "timestamp"
}
```

### 10.3 Data Therapy Session
```json
{
  "id": "uuid",
  "patient_name": "string",
  "device_type": "enum(CPAP, BiPAP)",
  "device_brand": "string",
  "initial_settings": "json",
  "current_settings": "json",
  "therapy_data": "json(AHI, leak, usage_hours)",
  "notes": "text",
  "therapist": "string(RPSGT)",
  "last_review_at": "timestamp",
  "next_review_at": "timestamp"
}
```

---

## 11. Analisis Kompetitif (Competitive Analysis)

| Aspek | cpapindo.com | smcsleepsolution.com | resindo.com |
|-------|-------------|---------------------|-------------|
| **Platform** | Shopify (E-commerce) | Custom website | Custom website |
| **Brand** | Nox Medical, ResMed, BMC, Yuwell | Philips Respironics | ResMed, SOMNOmedics |
| **E-commerce** | ✅ Full checkout | ❌ WhatsApp only | ❌ Form booking |
| **Jumlah Produk** | 138+ | ~10 | ~20 |
| **Sleep Test** | HST (analisa Singapura) | PSG Tipe 1-4 | Sleep diagnostic test |
| **RPSGT Certified** | ✅ | ❌ | ✅ |
| **Personalized Therapy** | ✅ (Core feature) | ❌ | ✅ |
| **Mask Fitting** | ✅ | ❌ | ✅ |
| **Therapy Data Review** | ✅ | ❌ | ❌ |
| **Bundle Deals** | ✅ | ❌ | ❌ |
| **Marketplace** | ✅ (Tokopedia) | ❌ | ❌ |
| **Payment Online** | ✅ (Full) | ❌ | ❌ |
| **Blog** | ✅ | ❌ | ✅ |
| **Founder/Expert** | 27 tahun pengalaman | N/A | Alexander Ecker |

---

## 12. Roadmap & Milestone

### Fase 1: E-commerce Enhancement (Bulan 1–2)
- Optimasi product catalog & search
- Bundle deals & promo system
- Payment gateway optimization
- Shipping integration
- Product review system

### Fase 2: Sleep Test Platform (Bulan 3–4)
- HST booking system
- Sleep test info pages (Nox A1s, T3s, ApneaLink Air)
- Report delivery system
- RPSGT certification showcase

### Fase 3: Therapy Services (Bulan 5–6)
- Personalized therapy info pages
- Mask fitting booking
- Therapy data review booking
- Patient education content
- Repeat purchase automation

---

## 13. Estimasi Biaya & Sumber Daya

| Item | Estimasi Biaya | Sumber Daya |
|------|---------------|-------------|
| Shopify Plan (Advanced) | Rp 3.5 juta/bulan | Platform |
| Theme Customization | Rp 20–35 juta | 1 Shopify Developer |
| Custom Features (App) | Rp 40–60 juta | 1–2 Full-stack Developer |
| Sleep Test System | Rp 25–40 juta | 1 Backend Developer |
| UI/UX Enhancement | Rp 15–25 juta | 1 Designer |
| QA & Testing | Rp 10–15 juta | 1 QA |
| **Total Development** | **Rp 110–175 juta** | **4–6 orang** |
| **Monthly Operational** | **Rp 10–20 juta/bulan** | Hosting + apps |

---

## 14. Risiko & Mitigasi

| ID | Risiko | Probabilitas | Dampak | Mitigasi |
|----|--------|-------------|--------|----------|
| R-01 | Shopify downtime | Rendah | Tinggi | Shopify SLA 99.9%, status page |
| R-02 | Payment gateway error | Sedang | Tinggi | Multi-gateway, manual transfer |
| R-03 | Stok produk habis | Sedang | Sedang | Real-time inventory sync |
| R-04 | HST scheduling conflict | Sedang | Sedang | Kalender terintegrasi |
| R-05 | Kompetitor undercut price | Sedang | Sedang | Fokus value-added service |

---

## 15. Kriteria Keberhasilan (Success Criteria)

| Metrik | Target 3 Bulan | Target 6 Bulan | Target 12 Bulan |
|--------|---------------|---------------|----------------|
| Monthly Revenue | Rp 300 juta | Rp 500 juta | Rp 1 miliar |
| Orders/Bulan | 100 | 200 | 400 |
| HST Bookings | 30/bulan | 100/bulan | 200/bulan |
| Active Therapy Patients | 200 | 500 | 1000 |
| Repeat Purchase Rate | 15% | 30% | 40% |
| Average Order Value | Rp 3 juta | Rp 3.5 juta | Rp 4 juta |
| Customer Satisfaction | 4.5 | 4.6 | 4.7 |
| Website Conversion Rate | 1.5% | 2.5% | 3.5% |

---

## 16. Stakeholder & Governance

| Role | Tanggung Jawab |
|------|---------------|
| Product Owner | Prioritas fitur, approval desain |
| Founder/Director | Keputusan bisnis, approval budget |
| E-commerce Manager | Operasional toko, stok, promosi |
| Sleep Specialist (RPSGT) | Validasi konten medis, layanan sleep test |
| Shopify Developer | Implementasi & maintenance platform |
| Marketing Manager | Digital marketing, marketplace management |
| Customer Service | Layanan pelanggan, WhatsApp support |

---

## 17. Asumsi & Ketergantungan (Assumptions & Dependencies)

### Asumsi
1. Platform Shopify sudah aktif dengan plan Advanced.
2. Produk tersedia di gudang untuk fulfilment.
3. Tim RPSGT di Singapura tersedia untuk analisa data.
4. Payment gateway (Midtrans/Xendit) sudah terdaftar.
5. Akun marketplace Tokopedia sudah aktif.
6. WhatsApp Business API sudah terdaftar.

### Ketergantungan
1. Ketersediaan stock produk dari distributor.
2. Koneksi dengan tim analisa di Singapura.
3. Performa Shopify untuk high traffic events.
4. Ketersediaan teknisi HST di berbagai kota.
5. Rate limit WhatsApp API.

---

## 18. Lampiran (Appendices)

### A. Daftar Istilah Medis
| Istilah | Definisi |
|---------|----------|
| OSA | Obstructive Sleep Apnea |
| CPAP | Continuous Positive Airway Pressure |
| BiPAP | Bilevel Positive Airway Pressure |
| PSG | Polysomnography |
| HST | Home Sleep Test |
| RPSGT | Registered Polysomnographic Technologist |
| AHI | Apnea-Hypopnea Index |
| Nox A1s | Sistem diagnostik tidur dari Nox Medical |
| Nox T3s | Level III sleep test system dari Nox Medical |
| ApneaLink Air | Home sleep screening device dari ResMed |

### B. URL Kunci
- Homepage: https://www.cpapindo.com/
- Products: https://www.cpapindo.com/collections/all
- Home Sleep Test: https://www.cpapindo.com/pages/home-sleep-test
- Contact: https://www.cpapindo.com/pages/contact-us
- Articles: https://www.cpapindo.com/pages/articles-on-sleep-apnea
- Sleep Test Products: https://www.cpapindo.com/collections/sleep-test

### C. Informasi Kontak
- **Perusahaan:** PT Indo Medika Nusantara (IMN)
- **Brand:** CPAPINDO
- **Alamat:** L'Avenue Office Tower LT12B, Jl. Raya Pasar Minggu No.KAV 16, Pancoran, Jakarta Selatan 12780
- **Telepon:** +62 21 8066 7233
- **WhatsApp:** +62 811 1212 858 / +62 811 9113 330
- **Email:** imn@cpapindo.co.id
- **Jam Operasional:** Senin–Jumat, 09.00–18.00 WIB

### D. Regulasi Terkait
- Permenkes No. 20 tahun 2019 tentang Peralatan Medis
- UU No. 27 tahun 2022 tentang Pelindungan Data Pribadi (PDP)
- Pedoman AASM (American Academy of Sleep Medicine) untuk sleep testing
- Sertifikasi RPSGT (Board of Polysomnographic Technologists)
