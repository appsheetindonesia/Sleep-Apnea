# Product Requirements Document (PRD)
## SMC Sleep Solution — smcsleepsolution.com

**Versi Dokumen:** 1.0  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Product Development  
**Status:** Draft

---

## 1. Ringkasan Eksekutif (Executive Summary)

SMC Sleep Solution (smcsleepsolution.com) adalah website korporat dan platform layanan kesehatan tidur yang dikembangkan oleh **PT SMC Global Distribusi**, distributor resmi **Philips Respironics** di Indonesia. Website ini bertujuan untuk meningkatkan kesadaran masyarakat tentang Sleep Apnea, menyediakan akses informasi produk CPAP/BiPAP, serta menawarkan layanan diagnostik tidur (Polysomnography) dan dukungan purna jual (servis, kalibrasi, sewa).

Website ini menargetkan pasien sleep apnea, tenaga medis, rumah sakit, dan klinik yang membutuhkan solusi diagnostik serta terapi gangguan tidur.

---

## 2. Latar Belakang & Masalah (Background & Problem Statement)

### Masalah
- **40% penduduk Indonesia mendengkur** tanpa menyadari risiko kesehatannya.
- **10% di antaranya berisiko mengalami Sleep Apnea** — gangguan tidur serius yang menyebabkan napas berhenti berulang kali.
- Sleep Apnea yang tidak ditangani dapat menyebabkan: hipertensi, diabetes melitus, stroke, penyakit jantung, depresi, impotensi, dan gangguan kesehatan ibu hamil.
- Minimnya kesadaran masyarakat dan akses terhadap layanan diagnostik tidur yang terstandarisasi.
- Sulitnya menemukan distributor resmi CPAP/BiPAP yang menyediakan layanan lengkap (diagnostik → terapi → purna jual).

### Solusi
Website smcsleepsolution.com menyediakan:
1. Platform informasi edukatif tentang Sleep Apnea dan gangguan tidur.
2. Aplikasi screening online (STOP-BANG & ESS) untuk evaluasi risiko.
3. Portal layanan: diagnostik tidur, servis/kalibrasi, dan sewa alat.
4. Katalog produk CPAP/BiPAP dan masker Philips Respironics.
5. Jalur komunikasi langsung via WhatsApp.

---

## 3. Tujuan Produk (Product Goals)

| ID | Tujuan | Metrik Keberhasilan |
|----|--------|---------------------|
| G-01 | Meningkatkan kesadaran Sleep Apnea | 10.000+ kunjungan/bulan dalam 6 bulan |
| G-02 | Mengkonversi pengunjung menjadi prospek layanan | 5% conversion rate dari screening tool |
| G-03 | Menjadi referensi utama distributor Philips Respironics di Indonesia | Top 3 ranking untuk keyword "distributor CPAP Indonesia" |
| G-04 | Menyediakan pengalaman informasi yang mudah diakses | Core Web Vitals "Good" di semua halaman |
| G-05 | Memperluas jangkauan layanan diagnostik | 200+ screening completion/bulan |

---

## 4. Pengguna Target (Target Users)

### Persona 1: Pasien Sleep Apnea
- **Demografi:** Usia 30–65 tahun, laki-laki lebih rentan
- **Kebutuhan:** Informasi gejala, cara diagnosis, opsi terapi
- **Pain Point:** Tidak tahu cara memulai, takut dengan alat medis, biaya

### Persona 2: Tenaga Medis / Dokter
- **Demografi:** Dokter umum, spesialis paru, spesialis THT
- **Kebutuhan:** Referensi produk, spesifikasi teknis, jadwal servis
- **Pain Point:** Sulit menemukan distributor terpercaya untuk rujukan pasien

### Persona 3: Rumah Sakit & Klinik
- **Demografi:** Fasilitas kesehatan di seluruh Indonesia
- **Kebutuhan:** Pembelian grosir, servis berkala, kalibrasi alat
- **Pain Point:** Downtime alat tinggi, kurangnya teknisi spesialis

### Persona 4: Caregiver / Keluarga Pasien
- **Demografi:** Istri/anak yang menjaga pasien
- **Kebutuhan:** Informasi untuk membantu penggunaan CPAP
- **Pain Point:** Tidak paham cara mengoperasikan alat

---

## 5. Ruang Lingkup (Scope)

### In-Scope
1. Landing page edukatif Sleep Apnea (multi-section)
2. Aplikasi screening online (STOP-BANG + ESS) — 5 langkah
3. Katalog produk CPAP, BiPAP, dan masker Philips Respironics
4. Halaman layanan: Diagnostik Tidur (PSG Tipe 1–4), Servis/Kalibrasi, Sewa
5. Formulir kontak & integrasi WhatsApp Business
6. Halaman Projects (portofolio distribusi)
7. Blog/artikel edukatif (fase lanjutan)
8. SEO on-page & performance optimization

### Out-of-Scope
- E-commerce langsung (checkout & pembayaran online)
- Patient portal / dashboard monitoring penggunaan alat
- Integrasi dengan sistem HIS/Rumah Sakit
- Aplikasi mobile native
- Pembayaran asuransi online

---

## 6. Kebutuhan Fungsional (Functional Requirements)

### 6.1 Landing Page
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-01 | Hero Section | Statistik Sleep Apnea Indonesia, CTA Screening & WhatsApp | P0 |
| FR-02 | Edukasi Sleep Apnea | Penjelasan gangguan tidur, jenis-jenis, dampak kesehatan | P0 |
| FR-03 | Katalog Produk | Carousel/grid produk CPAP, BiPAP, masker dengan gambar & deskripsi | P0 |
| FR-04 | Layanan SMC | 3 layanan utama: Diagnostik, Servis/Kalibrasi, Sewa | P0 |
| FR-05 | Produk & Ijin | Dokumen ijin distribusi alat kesehatan | P1 |
| FR-06 | Testimoni | Review dari pengguna/pasien | P1 |
| FR-07 | Footer & Kontak | Alamat, WhatsApp, jam operasional | P0 |

### 6.2 Screening Online (Aplikasi SMC)
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-08 | Formulir Data Diri | Nama, email, no. telepon, usia, jenis kelamin | P0 |
| FR-09 | STOP-BANG Questionnaire | 8 pertanyaan skrining risiko sleep apnea | P0 |
| FR-10 | ESS (Epworth Sleepiness Scale) | Evaluasi tingkat kantuk siang hari (7 skenario) | P0 |
| FR-11 | Multi-step Wizard | 6 langkah bertahap dengan progress indicator | P0 |
| FR-12 | Hasil Skrining | Hitungan risiko (Rendah/Sedang/Tinggi) + rekomendasi | P0 |
| FR-13 | Rekomendasi Tindak Lanjut | Link ke WhatsApp atau booking konsultasi | P0 |
| FR-14 | Penyimpanan Data | Simpan hasil screening di database untuk follow-up | P1 |

### 6.3 Katalog Produk
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-15 | Detail Produk | Gambar, nama, spesifikasi, jenis (CPAP/BiPAP/Masker) | P0 |
| FR-16 | Kategori Filter | Filter berdasarkan tipe produk | P1 |
| FR-17 | CTA WhatsApp | Tombol "Tanya Produk" langsung ke WhatsApp | P0 |

### 6.4 Integrasi WhatsApp
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-18 | Floating WhatsApp Button | Tombol chat WhatsApp yang selalu terlihat | P0 |
| FR-19 | Pre-filled Message | Pesan otomatis berdasarkan konteks (screening result, produk) | P1 |

---

## 7. Kebutuhan Non-Fungsional (Non-Functional Requirements)

| ID | Kategori | Persyaratan | Target |
|----|----------|-------------|--------|
| NFR-01 | Performa | Page load time | < 3 detik (3G) |
| NFR-02 | Performa | Lighthouse Performance Score | ≥ 90 |
| NFR-03 | SEO | Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| NFR-04 | Aksesibilitas | WCAG 2.1 Level AA | Semua elemen interaktif terakses |
| NFR-05 | Responsivitas | Mobile-first design | Berfungsi optimal di 320px–2560px |
| NFR-06 | Keamanan | HTTPS | Enkripsi semua komunikasi |
| NFR-07 | Keamanan | Data pribadi | Enkripsi data screening di database |
| NFR-08 | Ketersediaan | Uptime | 99.5% |
| NFR-09 | Kompatibilitas | Browser | Chrome, Firefox, Safari, Edge (2 versi terakhir) |
| NFR-10 | Internasionalisasi | Bahasa | Indonesia (default), English (fase lanjutan) |

---

## 8. Kebutuhan Desain & UX (Design & UX Requirements)

### 8.1 Desain Visual
- **Color Palette:** Kombinasi biru medis (#1a73e8), putih (#ffffff), abu-abu terang (#f5f5f5)
- **Typography:** Font sans-serif modern (Inter/Plus Jakarta Sans) untuk keterbacaan
- **Imagery:** Ilustrasi medis profesional, foto produk asli Philips Respironics
- **Tone:** Profesional, edukatif, approachable — bukan menakutkan

### 8.2 UX Patterns
- **Progressive Disclosure:** Informasi Sleep Apnea ditampilkan bertahap (ringkas → detail)
- **Multi-step Wizard:** Screening menggunakan langkah-langkah yang jelas dengan progress bar
- **Sticky CTA:** WhatsApp button dan tombol booking selalu terlihat
- **Trust Signals:** Logo Philips, ijin distribusi, sertifikasi medis

### 8.3 Wireframe Structure
```
Landing Page
├── Hero (Statistik + CTA)
├── Apa itu Sleep Apnea (Edukasi)
├── Tipe Gangguan Tidur
├── Bahaya Mendengkur
├── Produk Kami (Carousel)
├── Layanan SMC (3 kolom)
├── Polysomnografi (Info PSG)
├── Siapa yang Perlu Pemeriksaan
├── FAQ
└── Footer + WhatsApp FAB

Screening App
├── Step 1: Data Diri
├── Step 2: STOP-BANG (Snoring)
├── Step 3: Kelelahan & Pengamatan
├── Step 4: Tekanan Darah & BMI
├── Step 5: Usia, Leher, Jenis Kelamin
├── Step 6: ESS (Epworth Sleepiness Scale)
└── Hasil + Rekomendasi
```

---

## 9. Kebutuhan Integrasi (Integration Requirements)

| ID | Integrasi | Tipe | Prioritas |
|----|-----------|------|-----------|
| IR-01 | WhatsApp Business API | Chat & follow-up | P0 |
| IR-02 | Google Analytics 4 | Tracking kunjungan & konversi | P0 |
| IR-03 | Google Search Console | SEO monitoring | P0 |
| IR-04 | Database (PostgreSQL/MySQL) | Penyimpanan data screening | P1 |
| IR-05 | Email Service (SMTP) | Notifikasi hasil screening | P1 |
| IR-06 | CRM (fase lanjutan) | Manajemen prospek | P2 |

---

## 10. Kebutuhan Data (Data Requirements)

### 10.1 Data Screening
```json
{
  "id": "uuid",
  "nama_lengkap": "string",
  "email": "string",
  "no_telepon": "string",
  "usia": "integer",
  "jenis_kelamin": "enum(laki-laki, perempuan)",
  "tinggi_badan_cm": "float",
  "berat_badan_kg": "float",
  "lingkar_leher_cm": "float",
  "tekanan_darah": "string",
  "stop_bang_score": "integer(0-8)",
  "ess_score": "integer(0-24)",
  "risiko": "enum(rendah, sedang, tinggi)",
  "created_at": "timestamp",
  "status_followup": "enum(baru, dihubungi, konsultasi, selesai)"
}
```

### 10.2 Data Produk
```json
{
  "id": "uuid",
  "nama_produk": "string",
  "kategori": "enum(CPAP, BiPAP, Masker, Aksesoris)",
  "merek": "string",
  "deskripsi": "text",
  "spesifikasi": "json",
  "gambar_url": "string",
  "tersedia": "boolean"
}
```

---

## 11. Analisis Kompetitif (Competitive Analysis)

| Aspek | smcsleepsolution.com | resindo.com | cpapindo.com |
|-------|---------------------|-------------|-------------|
| Fokus | Edukasi + Distribusi Philips | Klinik + Distribusi ResMed | E-commerce + Diagnostik Nox Medical |
| Screening Tool | ✅ Online (STOP-BANG + ESS) | ❌ | ❌ (Home Sleep Test berbayar) |
| E-commerce | ❌ (CTA WhatsApp) | ❌ (Form booking) | ✅ (Shopify) |
| Blog/Artikel | ❌ (Fase lanjutan) | ✅ (Konsultasi blog) | ✅ (Artikel Sleep Apnea) |
| Integrasi Asuransi | ❌ | ✅ | ❌ |
| Brand Merek | Philips Respironics | ResMed, SOMNOmedics | ResMed, BMC, Yuwell, Nox Medical |

---

## 12. Roadmap & Milestone

### Fase 1: MVP (Bulan 1–2)
- Landing page multisection
- Screening tool (STOP-BANG + ESS)
- Katalog produk dasar
- Integrasi WhatsApp
- SEO on-page basic

### Fase 2: Enhancement (Bulan 3–4)
- Blog/artikel edukatif
- Formulir booking layanan
- Analytics dashboard (internal)
- Testimoni & review system
- Pencarian produk

### Fase 3: Growth (Bulan 5–6)
- Portal pasien (akun, riwayat screening)
- Integrasi CRM
- Multilingual (EN)
- Push notification untuk follow-up
- Formulir untuk tenaga medis / rumah sakit

---

## 13. Estimasi Biaya & Sumber Daya

| Item | Estimasi Biaya | Sumber Daya |
|------|---------------|-------------|
| Desain UI/UX | Rp 15–25 juta | 1 Desainer UI/UX |
| Pengembangan Frontend | Rp 30–50 juta | 1–2 Frontend Developer |
| Pengembangan Backend | Rp 20–35 juta | 1 Backend Developer |
| Screening App | Rp 15–25 juta | Full-stack Developer |
| QA & Testing | Rp 10–15 juta | 1 QA Engineer |
| Hosting & Domain | Rp 2–5 juta/tahun | Cloud hosting |
| **Total Estimasi** | **Rp 92–155 juta** | **4–6 orang** |

---

## 14. Risiko & Mitigasi

| ID | Risiko | Probabilitas | Dampak | Mitigasi |
|----|--------|-------------|--------|----------|
| R-01 | Data pribadi pasien bocor | Rendah | Tinggi | Enkripsi data, compliance GDPR/PDP |
| R-02 | Screening result salah interpretasi | Sedang | Tinggi | Disclaimer medis jelas, rujuk ke dokter |
| R-03 | Website down saat traffic tinggi | Sedang | Sedang | CDN, auto-scaling, monitoring |
| R-04 | Perubahan regulasi alat kesehatan | Rendah | Sedang | Monitoring regulasi BPOM |
| R-05 | Kompetitor meniru fitur screening | Sedang | Rendah | Terus tingkatkan UX & konten |

---

## 15. Kriteria Keberhasilan (Success Criteria)

| Metrik | Target 3 Bulan | Target 6 Bulan | Target 12 Bulan |
|--------|---------------|---------------|----------------|
| Unique Visitors/bulan | 3.000 | 10.000 | 25.000 |
| Screening Completion | 100/bulan | 300/bulan | 500/bulan |
| WhatsApp Inquiries | 50/bulan | 150/bulan | 300/bulan |
| Consultation Bookings | 20/bulan | 60/bulan | 120/bulan |
| Organic Traffic Share | 30% | 50% | 65% |
| Bounce Rate | < 60% | < 50% | < 45% |
| Average Session Duration | > 2 min | > 3 min | > 3.5 min |

---

## 16. Stakeholder & Governance

| Role | Tanggung Jawab |
|------|---------------|
| Product Owner | Menentukan prioritas fitur, approve roadmap |
| Project Manager | Mengelola timeline, budget, komunikasi tim |
| UI/UX Designer | Desain visual, wireframe, prototyping |
| Frontend Developer | Implementasi UI, responsive design |
| Backend Developer | API, database, integrasi WhatsApp |
| QA Engineer | Testing fungsional, performa, keamanan |
| Marketing | SEO, konten, analitik |
| Medical Advisor | Validasi konten medis, disclaimer |

---

## 17. Asumsi & Ketergantungan (Assumptions & Dependencies)

### Asumsi
1. Domain smcsleepsolution.com sudah aktif dan hosting tersedia.
2. Konten produk dan spesifikasi dari Philips Respironics tersedia.
3. Tim medis tersedia untuk validasi konten edukatif.
4. WhatsApp Business API sudah terdaftar dan disetujui.
5. Budget dan sumber daya tersedia sesuai estimasi.

### Ketergantungan
1. Ketersediaan tim pengembangan internal atau vendor.
2. Responsivitas stakeholder untuk approval desain & konten.
3. Ketersediaan foto produk beresolusi tinggi dari Philips.
4. Koneksi internet stabil untuk testing di berbagai jaringan.

---

## 18. Lampiran (Appendices)

### A. Daftar Istilah Medis
| Istilah | Definisi |
|---------|----------|
| Sleep Apnea | Gangguan tidur yang menyebabkan napas berhenti berulang kali |
| OSA (Obstructive Sleep Apnea) | Tipe paling umum, disebabkan penyumbatan saluran napas |
| CPAP | Continuous Positive Airway Pressure — terapi tekanan udara konstan |
| BiPAP | Bilevel Positive Airway Pressure — tekanan udara dua level |
| PSG (Polysomnography) | Pemeriksaan menyeluruh kualitas tidur |
| STOP-BANG | Kuesioner skrining risiko sleep apnea (8 pertanyaan) |
| ESS | Epworth Sleepiness Scale — pengukuran tingkat kantuk siang hari |
| AHI | Apnea-Hypopnea Index — ukuran keparahan sleep apnea |

### B. URL Kunci
- Homepage: https://smcsleepsolution.com/
- Screening: https://smcsleepsolution.com/screening/
- Produk: https://smcsleepsolution.com/projects/

### C. Regulasi Terkait
- Permenkes No. 20 tahun 2019 tentang Peralatan Medis
- BPOM: Pendaftaran alat kesehatan
- UU No. 27 tahun 2022 tentang Pelindungan Data Pribadi (PDP)
