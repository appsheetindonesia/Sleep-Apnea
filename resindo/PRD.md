# Product Requirements Document (PRD)
## Resindo Medika — resindo.com

**Versi Dokumen:** 1.0  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Product Development  
**Status:** Draft

---

## 1. Ringkasan Eksekutif (Executive Summary)

Resindo Medika (resindo.com) adalah website klinik dan platform layanan kesehatan tidur yang dikembangkan oleh **PT Resindo Medika**, distributor resmi dan authorized service provider **ResMed** serta **SOMNOmedics** di Indonesia. Website ini berfungsi sebagai portal informasi klinik gangguan tidur di Jakarta Selatan, platform booking konsultasi, katalog produk, serta blog edukatif kesehatan tidur.

Website ini menargetkan pasien sleep apnea, penderita insomnia, tenaga medis, dan mitra asuransi yang membutuhkan solusi diagnostik serta terapi gangguan tidur komprehensif.

---

## 2. Latar Belakang & Masalah (Background & Problem Statement)

### Masalah
- Sleep Apnea dan gangguan tidur lainnya masih dianggap "hanya mendengkur" oleh masyarakat umum.
- Pasien sering tidak tahu ke mana harus meminta bantuan untuk gangguan tidur.
- Sulitnya menemukan klinik spesialis gangguan tidur dengan peralatan modern dan dokter spesialis.
- Kurangnya informasi tentang opsi terapi (CPAP, BiPAP, rental, trial) sebelum membeli.
- Pasien bingung menghadapi proses klaim asuransi untuk pemeriksaan sleep apnea.
- Tidak ada platform digital yang mengintegrasikan konsultasi + diagnostik + terapi + purna jual dalam satu ekosistem.

### Solusi
Website resindo.com menyediakan:
1. Portal informasi klinik dengan profil dokter dan fasilitas.
2. Sistem booking konsultasi online via formulir dan WhatsApp.
3. Katalog produk ResMed & SOMNOmedics (mesin, masker, aksesoris).
4. Blog edukatif tentang sleep apnea, tips CPAP, dan kesehatan tidur.
5. Informasi layanan: rental/trial, servis/kalibrasi, sleep diagnostic test.
6. Verifikasi cakupan asuransi.
7. Testimoni pasien dan rating Google Reviews.

---

## 3. Tujuan Produk (Product Goals)

| ID | Tujuan | Metrik Keberhasilan |
|----|--------|---------------------|
| G-01 | Menjadi klinik rujukan utama sleep apnea di Jakarta | 100+ booking/bulan dalam 6 bulan |
| G-02 | Meningkatkan konversi kunjungan → konsultasi | 8% conversion rate dari website |
| G-03 | Membangun brand trust sebagai authorized service ResMed | 4.5+ rating Google Reviews |
| G-04 | Mendidik masyarakat tentang sleep apnea | 15.000+ kunjungan/bulan dalam 6 bulan |
| G-05 | Memperluas jangkauan pasien melalui digital | 200+ leads/bulan dari formulir & WhatsApp |

---

## 4. Pengguna Target (Target Users)

### Persona 1: Pasien Sleep Apnea
- **Demografi:** Usia 35–65 tahun, lebih banyak laki-laki
- **Kebutuhan:** Diagnosis akurat, opsi terapi, bimbingan penggunaan CPAP
- **Pain Point:** Tidak tahu harus ke mana, takut biaya mahal, bingung dengan alat

### Persona 2: Pasien dengan Masalah Tidur Lainnya
- **Demografi:** Usia 25–60 tahun,男女
- **Kebutuhan:** Konsultasi insomnia, sleep hygiene, Evaluasi kualitas tidur
- **Pain Point:** Sulit tidur, sering terbangun, lelah di siang hari

### Persona 3: Caregiver / Keluarga
- **Demografi:** Istri/anak yang mendampingi pasien
- **Kebutuhan:** Memahami cara membantu penggunaan alat, jadwal servis
- **Pain Point:** Tidak paham medis, butuh panduan praktis

### Persona 4: Tenaga Medis / Rujukan
- **Demografi:** Dokter umum, spesialis paru, spesialis THT
- **Kebutuhan:** Partner rujukan untuk pasien sleep apnea
- **Pain Point:** Butuh klinik terpercaya untuk rujukan

---

## 5. Ruang Lingkup (Scope)

### In-Scope
1. Homepage multisection (klinik, layanan, produk, testimoni, blog)
2. Halaman About Us (profil klinik, dokter, Alexander Ecker)
3. Halaman Layanan (4 layanan utama)
4. Halaman Produk (ResMed & SOMNOmedics)
5. Blog/artikel edukatif kesehatan tidur
6. Formulir booking konsultasi
7. Integrasi WhatsApp Business
8. FAQ interaktif
9. SEO on-page & analytics
10. Bilingual (Indonesia & English)

### Out-of-Scope
- E-commerce langsung (checkout online)
- Patient portal / dashboard
- Integrasi HIS/Rumah Sakit
- Aplikasi mobile native
- Pembayaran online

---

## 6. Kebutuhan Fungsional (Functional Requirements)

### 6.1 Homepage
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-01 | Hero Section | "Restful Sleep Starts Here" + CTA Booking & Sleep Test | P0 |
| FR-02 | Trust Signals | Rating 4.4 Google (1000+ reviews), Certified Doctors, Quick Response | P0 |
| FR-03 | About Section | Penjelasan klinik, pendiri Alexander Ecker | P0 |
| FR-04 | Services Grid | 4 layanan: Rental/Trial, Servis/Kalibrasi, Sleep Test, Produk | P0 |
| FR-05 | Why Choose Us | 6 keunggulan: Thorough Exam, Personalized Care, Flexible, Specialist, Modern Tech, Long-term | P0 |
| FR-06 | Conditions | Ilustrasi interaktif Sleep Apnea (anatomi saluran napas) | P0 |
| FR-07 | Testimoni | Slider testimoni pasien dengan rating Google | P0 |
| FR-08 | Blog Preview | 3 artikel terbaru | P1 |
| FR-09 | Consultation Form | Form booking dengan data pasien | P0 |
| FR-10 | FAQ | Accordion FAQ (asuransi, layanan, kunjungan pertama) | P0 |
| FR-11 | Special Offer | Banner penawaran konsultasi perdana | P1 |

### 6.2 Halaman Layanan
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-12 | Rental & Trial | Deskripsi program rental + trial alat terapi | P0 |
| FR-13 | Servis & Kalibrasi | Layanan servis, maintenance, kalibrasi (tanpa reservasi) | P0 |
| FR-14 | Sleep Diagnostic Test | Penjelasan sleep study in-lab dan home | P0 |
| FR-15 | Produk ResMed & SOMNOmedics | Katalog mesin, masker, aksesoris | P0 |
| FR-16 | CTA Booking | Setiap layanan ada tombol booking/WhatsApp | P0 |

### 6.3 Halaman Produk
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-17 | Kategori Produk | Filter: Machines, Masks, Humidifiers, Accessories | P1 |
| FR-18 | Detail Produk | Gambar, nama, spesifikasi, harga (opsional) | P0 |
| FR-19 | CTA Tanya | Tombol "Tanya Produk" → WhatsApp | P0 |

### 6.4 Blog
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-20 | Daftar Artikel | Grid/list artikel dengan kategori dan tanggal | P1 |
| FR-21 | Detail Artikel | Artikel lengkap dengan gambar, share buttons | P1 |
| FR-22 | Kategori | Filter: CPAP Therapy, Sleep Health, Conditions & Risks | P2 |

### 6.5 Booking & Komunikasi
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-23 | Form Booking | Nama, email, telepon, keluhan, tanggal kunjungan | P0 |
| FR-24 | WhatsApp Button | Floating button + pre-filled messages | P0 |
| FR-25 | Konfirmasi Booking | Notifikasi via email/WhatsApp setelah submit | P1 |

### 6.6 Bilingual Support
| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| FR-26 | Language Switcher | Toggle ID / EN di header | P0 |
| FR-27 | URL Prefix | /id/ untuk Indonesia, /en/ untuk English | P0 |
| FR-28 | Default Language | Bahasa Indonesia (default) | P0 |

---

## 7. Kebutuhan Non-Fungsional (Non-Functional Requirements)

| ID | Kategori | Persyaratan | Target |
|----|----------|-------------|--------|
| NFR-01 | Performa | Page load time | < 3 detik |
| NFR-02 | SEO | Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| NFR-03 | Responsivitas | Mobile-first design | Berfungsi optimal di 320px–2560px |
| NFR-04 | Aksesibilitas | WCAG 2.1 Level AA | Semua elemen terakses |
| NFR-05 | Keamanan | HTTPS + Security Headers | Enkripsi + CSP, HSTS |
| NFR-06 | Keamanan Data | PDP Compliance | Consent data pribadi |
| NFR-07 | Ketersediaan | Uptime | 99.5% |
| NFR-08 | Browser | Cross-browser | Chrome, Firefox, Safari, Edge |
| NFR-09 | Bilingual | ID & EN | Semua konten tersedia dalam 2 bahasa |
| NFR-10 | Maintenance | Jadwal servis | Info jadwal servis tanpa reservasi |

---

## 8. Kebutuhan Desain & UX (Design & UX Requirements)

### 8.1 Desain Visual
- **Color Palette:** Biru profesional (#1e40af), putih (#ffffff), abu terang (#f8fafc), accent hijau (#059669) untuk CTA
- **Typography:** Font modern sans-serif, besar dan mudah dibaca
- **Imagery:** Ilustrasi medis interaktif (anatomi sleep apnea), foto klinik asli
- **Tone:** Profesional, hangat, trustworthy — "Anda bukan sekadar nomor antrian"

### 8.2 UX Patterns
- **Interactive Anatomy:** Ilustrasi anatomi saluran napas yang menjelaskan Sleep Apnea secara visual
- **Doctor Profile:** Showcase dokter spesialis untuk membangun trust
- **Insurance Badge:** Logo asuransi yang bekerja sama
- **Patient Journey:** Visual flow dari konsultasi → diagnosis → terapi → purna jual

### 8.3 Informasi Maintenance & Kalibrasi (Khusus)
```
Datang sebelum pukul 10.00 → alat selesai hari yang sama (ambil paling lambat 16.00)
Datang setelah pukul 10.00 → alat diambil keesokan harinya
Pengambilan hari yang sama: datang antara 08.00-10.00
Tanpa perlu reservasi
```

---

## 9. Kebutuhan Integrasi (Integration Requirements)

| ID | Integrasi | Tipe | Prioritas |
|----|-----------|------|-----------|
| IR-01 | WhatsApp Business API | Chat & booking | P0 |
| IR-02 | Google Analytics 4 | Analytics | P0 |
| IR-03 | Google Business Profile | Reviews (4.4, 1000+) | P0 |
| IR-04 | Google Search Console | SEO monitoring | P0 |
| IR-05 | Email Service | Konfirmasi booking | P1 |
| IR-06 | CMS (Headless) | Blog management | P1 |
| IR-07 | CRM (fase lanjutan) | Manajemen pasien | P2 |

---

## 10. Kebutuhan Data (Data Requirements)

### 10.1 Data Booking Konsultasi
```json
{
  "id": "uuid",
  "nama_lengkap": "string",
  "email": "string",
  "no_telepon": "string",
  "keluhan_utama": "enum(mendengkur, henti_napas, lelah, sulit_tidur, lainnya)",
  "tanggal_kunjungan": "date",
  "jam_preferensi": "enum(pagi, siang, sore)",
  "riwayat_medis": "text(optional)",
  "asuransi": "string(optional)",
  "status": "enum(baru, dikonfirmasi, selesai, batal)",
  "created_at": "timestamp"
}
```

### 10.2 Data Produk
```json
{
  "id": "uuid",
  "nama_produk": "string",
  "kategori": "enum(Machine, Mask, Humidifier, Accessory)",
  "merek": "enum(ResMed, SOMNOmedics)",
  "deskripsi": "text",
  "spesifikasi": "json",
  "gambar_url": "string",
  "tersedia": "boolean"
}
```

### 10.3 Data Blog
```json
{
  "id": "uuid",
  "judul": "string",
  "slug": "string",
  "konten": "text(rich)",
  "excerpt": "text",
  "kategori": "enum(CPAP Therapy, Sleep Health, Conditions & Risks)",
  "gambar_url": "string",
  "author": "string",
  "published_at": "timestamp",
  "lang": "enum(id, en)"
}
```

---

## 11. Analisis Kompetitif (Competitive Analysis)

| Aspek | resindo.com | smcsleepsolution.com | cpapindo.com |
|-------|-------------|---------------------|-------------|
| Fokus | Klinik + Distributor | Edukasi + Distributor | E-commerce + Diagnostik |
| Brand | ResMed, SOMNOmedics | Philips Respironics | ResMed, BMC, Nox Medical |
| Dokter Spesialis | ✅ (Alexander Ecker) | ❌ | ✅ (RPSGT) |
| Booking Online | ✅ (Form) | ❌ (WhatsApp langsung) | ❌ |
| Blog/Artikel | ✅ (Active) | ❌ (Fase lanjutan) | ✅ (Active) |
| Bilingual | ✅ (ID & EN) | ❌ (ID only) | ❌ (EN dominant) |
| Asuransi | ✅ (Diterima) | ❌ | ❌ |
| Google Reviews | 4.4 (1000+) | N/A | N/A |
| Rental/Trial | ✅ | ✅ | ❌ |
| Servis Tanpa Reservasi | ✅ | ✅ | ✅ |

---

## 12. Roadmap & Milestone

### Fase 1: Core (Bulan 1–2)
- Redesign homepage dengan interactive anatomy
- Halaman layanan (4 layanan)
- Form booking konsultasi
- Integrasi WhatsApp
- Bilingual (ID & EN)
- SEO on-page

### Fase 2: Content & Trust (Bulan 3–4)
- Blog/artikel edukatif
- Katalog produk interaktif
- Testimoni system
- FAQ interaktif
- Special offers & promotions

### Fase 3: Growth (Bulan 5–6)
- Portal pasien (riwayat kunjungan)
- Integrasi CRM
- Online payment (fase lanjutan)
- Push notification booking reminder
- Analytics dashboard

---

## 13. Estimasi Biaya & Sumber Daya

| Item | Estimasi Biaya | Sumber Daya |
|------|---------------|-------------|
| Desain UI/UX | Rp 20–30 juta | 1 Desainer UI/UX |
| Pengembangan Frontend | Rp 35–55 juta | 1–2 Frontend Developer |
| Pengembangan Backend | Rp 25–40 juta | 1 Backend Developer |
| Bilingual System | Rp 10–15 juta | Full-stack Developer |
| Blog CMS | Rp 10–15 juta | Backend Developer |
| QA & Testing | Rp 10–15 juta | 1 QA Engineer |
| Hosting & Domain | Rp 3–6 juta/tahun | Cloud hosting |
| **Total Estimasi** | **Rp 113–176 juta** | **5–7 orang** |

---

## 14. Risiko & Mitigasi

| ID | Risiko | Probabilitas | Dampak | Mitigasi |
|----|--------|-------------|--------|----------|
| R-01 | Data pasien bocor | Rendah | Tinggi | Enkripsi, compliance PDP |
| R-02 | Booking tanpa konfirmasi | Sedang | Sedang | Auto-confirm via WhatsApp |
| R-03 | Artikel medis salah informasi | Rendah | Tinggi | Review oleh dokter sebelum publish |
| R-04 | Website down | Sedang | Sedang | CDN, backup, monitoring |
| R-05 | Inkonsistensi bilingual | Sedang | Rendang | CMS dengan translation workflow |

---

## 15. Kriteria Keberhasilan (Success Criteria)

| Metrik | Target 3 Bulan | Target 6 Bulan | Target 12 Bulan |
|--------|---------------|---------------|----------------|
| Unique Visitors/bulan | 5.000 | 15.000 | 30.000 |
| Booking Konsultasi | 30/bulan | 100/bulan | 200/bulan |
| WhatsApp Inquiries | 80/bulan | 200/bulan | 400/bulan |
| Blog Readers | 1.000/bulan | 5.000/bulan | 10.000/bulan |
| Google Reviews | 4.5 (1200+) | 4.6 (1500+) | 4.7 (2000+) |
| Bounce Rate | < 55% | < 45% | < 40% |

---

## 16. Stakeholder & Governance

| Role | Tanggung Jawab |
|------|---------------|
| Product Owner | Prioritas fitur, approval konten medis |
| Alexander Ecker (Founder) | Approval desain, validasi konten medis |
| Project Manager | Timeline, budget, komunikasi |
| UI/UX Designer | Desain visual, prototyping |
| Frontend Developer | Implementasi UI, responsive, bilingual |
| Backend Developer | API, database, integrasi |
| Content Writer | Blog/artikel (ID & EN) |
| Medical Advisor | Validasi konten medis |

---

## 17. Asumsi & Ketergantungan (Assumptions & Dependencies)

### Asumsi
1. Domain resindo.com aktif dan hosting tersedia.
2. Konten medis dari dokter tersedia untuk validasi artikel.
3. Tim bilingual (ID & EN) tersedia untuk konten.
4. WhatsApp Business API sudah terdaftar.
5. Foto klinik dan produk beresolusi tinggi tersedia.
6. Google Business Profile sudah diverifikasi (1000+ reviews).

### Ketergantungan
1. Ketersediaan tim pengembangan.
2. Approval konten dari founder/dokter.
3. Foto produk dari ResMed & SOMNOmedics.
4. Koneksi internet stabil untuk testing.

---

## 18. Lampiran (Appendices)

### A. Daftar Istilah Medis
| Istilah | Definisi |
|---------|----------|
| OSA | Obstructive Sleep Apnea — penyumbatan saluran napas saat tidur |
| CPAP | Continuous Positive Airway Pressure |
| BiPAP | Bilevel Positive Airway Pressure |
| APAP | Automatic Positive Airway Pressure |
| PSG | Polysomnography — pemeriksaan kualitas tidur menyeluruh |
| HST | Home Sleep Test — pemeriksaan tidur di rumah |
| RPSGT | Registered Polysomnographic Technologist |
| AHI | Apnea-Hypopnea Index |
| OSA | Obstructive Sleep Apnea |

### B. URL Kunci
- Homepage (ID): https://www.resindo.com/
- Homepage (EN): https://www.resindo.com/en/
- About: https://www.resindo.com/en/about/
- Services: https://www.resindo.com/en/services/
- Products: https://www.resindo.com/en/products/
- Blog: https://www.resindo.com/en/blog/

### C. Regulasi Terkait
- Permenkes No. 20 tahun 2019 tentang Peralatan Medis
- UU No. 27 tahun 2022 tentang Pelindungan Data Pribadi (PDP)
- Pedoman Ikatan Dokter Indonesia tentang Praktik Kedokteran

### D. Informasi Maintenance Tanpa Reservasi
- Datang sebelum pukul 10.00 → selesai hari yang sama (ambil paling lambat 16.00)
- Datang setelah pukul 10.00 → diambil keesokan harinya
- Pengambilan hari yang sama: 08.00–10.00
- Alamat: Lt.5, Jl. Gatot Subroto No.Kav. 23, Jakarta Selatan
