# Functional Requirements Document (FRD)
## Resindo Medika — resindo.com

**Versi Dokumen:** 1.0  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Business Analysis  
**Status:** Draft

---

## 1. Pendahuluan

### 1.1 Tujuan Dokumen
Dokumen ini mendefinisikan kebutuhan fungsional website resindo.com secara rinci, mencakup perilaku sistem, aturan bisnis, input/output, dan skenario penggunaan untuk setiap modul.

### 1.2 Ruang Lingkup
- Modul Homepage (multisection)
- Modul Bilingual System (ID/EN)
- Modul Booking Konsultasi
- Modul Katalog Produk
- Modul Blog/CMS
- Modul Integrasi WhatsApp
- Modul Admin Panel

---

## 2. Modul Homepage

### 2.1 Hero Section

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-H-01 | Headline | "Restful Sleep Starts Here" (EN) / "Tidur Nyenyak Dimulai dari Sini" (ID) | P0 |
| FR-H-02 | Sub-headline | "Trusted Solutions for Sleep Apnea, Snoring & Sleep Disorders in Jakarta" | P0 |
| FR-H-03 | CTA Primary | "Sleep Apnea Test" → booking form / sleep test page | P0 |
| FR-H-04 | CTA Secondary | "Book Appointment" → booking form | P0 |
| FR-H-05 | Trust Badge | "4.4 — 1,000+ reviews on GOOGLE" | P0 |
| FR-H-06 | Quick Response | "QUICK RESPONSE FROM OUR TEAM" badge | P0 |
| FR-H-07 | Doctor Profile | Foto & nama Alexander Ecker (Founder) | P0 |

### 2.2 Section About

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-A-01 | Deskripsi Klinik | Penjelasan tentang Resindo Medika — sleep disorder clinic | P0 |
| FR-A-02 | Pendekatan Medis | "accurate diagnosis and the right therapy" | P0 |
| FR-A-03 | CTA About | Tombol "About Us" → halaman about | P0 |
| FR-A-04 | Office Hours | Jam operasional: Senin-Jumat 08.00-16.30 WIB | P0 |

### 2.3 Section Layanan (Services)

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-S-01 | Card Layout | 4 card layanan dalam grid 2x2 | P0 |
| FR-S-02 | Rental & Trial | Deskripsi: "Try devices before you buy" + CTA | P0 |
| FR-S-03 | Service/Maintenance | Deskripsi: "Professional servicing & calibration" + CTA | P0 |
| FR-S-04 | Sleep Diagnostic | Deskripsi: "Thorough sleep study with international standards" + CTA | P0 |
| FR-S-05 | Products | Deskripsi: "ResMed & SOMNOmedics premium devices" + CTA | P0 |
| FR-S-06 | CTA "View All" | Tombol "View All Services" → halaman layanan | P0 |

### 2.4 Section Keunggulan (Why Choose Us)

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-W-01 | Authorized Badge | "Authorized Service Provider & Distributor" | P0 |
| FR-W-02 | 6 Keunggulan | Grid: Thorough Exam, Personalized Care, Flexible Scheduling, Specialist Doctors, Modern Technology, Long-Term Solutions | P0 |
| FR-W-03 | Asuransi Info | "We work with health insurance providers" | P0 |

### 2.5 Section Kondisi yang Ditangani (Conditions)

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-C-01 | Interactive Anatomy | Ilustrasi anatomi saluran napas (6 label: Soft Palate, Tongue, Airway Narrowing, Trachea, Nasal Passage, Blood Oxygen) | P0 |
| FR-C-02 | Gejala Utama | 5 gejala: Loud Snoring, Pauses in Breathing, Morning Headaches, Daytime Fatigue, Poor Concentration | P0 |
| FR-C-03 | CTA | "See More Conditions" → halaman kondisi | P1 |

### 2.6 Section Testimoni

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-T-01 | Slider | Carousel testimoni pasien | P0 |
| FR-T-02 | Rating Display | "4.8 Customer Rating" + "Based on Google reviews" | P0 |
| FR-T-03 | Review Source | "80+ reviews on Google" | P0 |
| FR-T-04 | Detail Review | Nama, kondisi (Sleep Problem, Sleep Apnea, Terapi CPAP), review text | P0 |

### 2.7 Section Special Offer

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-O-01 | Banner | "New Patient Special Offer" | P1 |
| FR-O-02 | CTA | Tombol langsung ke booking form | P1 |

### 2.8 Section Blog Preview

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-B-01 | 3 Artikel Terbaru | Card: gambar, judul, kategori, tanggal | P1 |
| FR-B-02 | CTA | "Read All" → halaman blog | P1 |

### 2.9 Section Booking Form (Konsultasi)

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-F-01 | Form Fields | Nama, email, telepon, keluhan (dropdown), tanggal, jam preferensi, asuransi (opsional), catatan | P0 |
| FR-F-02 | Gejala Quick Select | Tombol cepat: Mendengkur, Henti Napas, Kelelahan, Sering Terbangun | P0 |
| FR-F-03 | Submit | Simpan booking + konfirmasi via WhatsApp | P0 |
| FR-F-04 | Validasi | Semua field wajib terisi, format email & telepon valid | P0 |
| FR-F-05 | Success Message | "Terima kasih! Tim kami akan menghubungi Anda dalam 1×24 jam." | P0 |

### 2.10 FAQ Section

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-FQ-01 | Accordion | FAQ items yang bisa di-expand | P0 |
| FR-FQ-02 | Asuransi | "Do you accept health insurance?" — Jawaban: Ya, bekerja sama dengan asuransi swasta | P0 |
| FR-FQ-03 | Pemilihan Layanan | "How do I know which service is right?" — Rekomendasi konsultasi awal | P0 |
| FR-FQ-04 | Same-day Appointment | "Can I get an appointment today?" — Usaha jadwal hari yang sama | P0 |
| FR-FQ-05 | First Visit | "What to expect on first visit?" — Diskusi riwayat tidur → rekomendasi pemeriksaan | P0 |
| FR-FQ-06 | CTA More FAQ | "See More Questions" → expand atau halaman FAQ | P1 |

### 2.11 Footer

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-FT-01 | Phone | +62 (858) 8000 8259 | P0 |
| FR-FT-02 | Address | Lt.5, Jl. Gatot Subroto No.Kav. 23, Jakarta Selatan | P0 |
| FR-FT-03 | Office Hours | Senin-Jumat, 08.00-16.30 WIB | P0 |
| FR-FT-04 | Social Media | Instagram, Facebook, LinkedIn | P1 |
| FR-FT-05 | WhatsApp FAB | Floating button di semua halaman | P0 |
| FR-FT-06 | Maintenance Info | Info servis tanpa reservasi | P0 |

---

## 3. Modul Bilingual System

### 3.1 Language Switcher

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| BL-01 | Toggle Button | Tombol ID/EN di header navigasi | P0 |
| BL-02 | Active State | Bahasa aktif di-highlight | P0 |
| BL-03 | URL Structure | /id/ dan /en/ prefix untuk semua halaman | P0 |
| BL-04 | Default | Bahasa Indonesia (default jika tidak ada prefix) | P0 |
| BL-05 | Persist | Bahasa dipilih tersimpan di localStorage | P1 |
| BL-06 | Auto-detect | Deteksi browser language untuk redirect | P2 |

### 3.2 Content Translation

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| BL-07 | UI Translation | Semua label navigasi, tombol, pesan error dalam 2 bahasa | P0 |
| BL-08 | SEO Meta | Title, description, OG tags dalam 2 bahasa | P0 |
| BL-09 | Blog Content | Artikel bisa ditulis dalam 2 bahasa (terpisah) | P1 |
| BL-10 | hreflang Tags | Implementasi hreflang untuk SEO | P0 |

### 3.3 Contoh Konten Bilingual

**Homepage Headline:**
- ID: "Tidur Nyenyak Dimulai dari Sini"
- EN: "Restful Sleep Starts Here"

**Gejala Sleep Apnea:**
- ID: "Mendengkur Keras" → EN: "Loud Snoring"
- ID: "Henti Napas Saat Tidur" → EN: "Pauses in Breathing"
- ID: "Sakit Kepala Pagi" → EN: "Morning Headaches"
- ID: "Lelah di Siang Hari" → EN: "Daytime Fatigue"
- ID: "Sulit Berkonsentrasi" → EN: "Poor Concentration"

---

## 4. Modul Booking Konsultasi

### 4.1 Form Fields

| ID | FR | Field | Tipe | Validasi | Prioritas |
|----|-----|-------|------|----------|-----------|
| BK-01 | Nama Lengkap | text | wajib, min 2 karakter | P0 |
| BK-02 | Email | email | wajib, format valid | P0 |
| BK-03 | No. Telepon | tel | wajib, format 08xx/+62 | P0 |
| BK-04 | Keluhan Utama | dropdown | wajib | P0 |
| BK-05 | Tanggal Kunjungan | date | wajib, minimal besok | P0 |
| BK-06 | Jam Preferensi | radio | Pagi (08-10), Siang (10-12), Sore (13-16) | P0 |
| BK-07 | Riwayat Medis | textarea | optional, max 500 karakter | P1 |
| BK-08 | Asuransi | text | optional | P1 |
| BK-09 | Catatan Tambahan | textarea | optional, max 300 karakter | P2 |

### 4.2 Keluhan Dropdown Options

| Value | Label (ID) | Label (EN) |
|-------|-----------|------------|
| mendengkur | Mendengkur keras | Loud snoring |
| henti_napas | Henti napas saat tidur | Breathing pauses |
| lelah | Kelelahan di siang hari | Daytime fatigue |
| sulit_tidur | Sulit tidur | Difficulty sleeping |
| sering_terbangun | Sering terbangun malam | Frequent waking |
| sakit_kepala | Sakit kepala pagi | Morning headaches |
| lainnya | Lainnya | Other |

### 4.3 Alur Booking

```
Form Submitted
    │
    ├── Validasi Sukses
    │       │
    │       ├─── Simpan ke Database (status: "baru")
    │       │
    │       ├─── Kirim WhatsApp ke Admin (notifikasi)
    │       │
    │       ├─── Kirim Konfirmasi ke Pasien (WhatsApp)
    │       │
    │       └─── Tampilkan Success Message
    │
    └── Validasi Gagal
            │
            └── Tampilkan Error Messages
```

### 4.4 WhatsApp Notification Templates

**Ke Admin:**
```
📋 Booking Baru!
Nama: {nama}
Keluhan: {keluhan}
Tanggal: {tanggal}
Jam: {jam}
Telepon: {telepon}
Asuransi: {asuransi}
```

**Ke Pasien (Konfirmasi):**
```
Terima kasih {nama}! Booking Anda telah diterima.
📅 Tanggal: {tanggal}
🕐 Jam: {jam}
📍 Alamat: Lt.5, Jl. Gatot Subroto No.Kav. 23, Jakarta Selatan

Tim kami akan menghubungi Anda untuk konfirmasi. Jika ada pertanyaan, hubungi kami di +62 (858) 8000 8259.
```

---

## 5. Modul Katalog Produk

### 5.1 Daftar Produk

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| PR-01 | Grid Layout | Grid 3 kolom (desktop), 2 (tablet), 1 (mobile) | P0 |
| PR-02 | Kategori Filter | Filter: Semua, Machines, Masks, Humidifiers, Accessories | P1 |
| PR-03 | Brand Badge | Label "ResMed" atau "SOMNOmedics" di setiap produk | P0 |
| PR-04 | Gambar Produk | Lazy loading, placeholder, aspect ratio tetap | P0 |
| PR-05 | Detail Produk | Nama, brand, deskripsi singkat | P0 |
| PR-06 | CTA Tanya | "Tanya Produk" → WhatsApp dengan nama produk | P0 |

### 5.2 Kategori Produk

| Kategori | Contoh Produk |
|----------|--------------|
| Machines | ResMed AirSense 10/11, BiPAP, Ventilator |
| Masks | AirFit P10, N20, F20 series |
| Humidifiers | HumidAir, ClimateLineAir |
| Accessories | Filter, Tubing, Mask Cushion, Headgear |
| Diagnostic | SOMNOmedics SOMNOcheck, Nox A1s |

---

## 6. Modul Blog

### 6.1 Daftar Artikel

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| BL-01 | Grid View | Card layout: gambar, judul, excerpt, kategori, tanggal, bahasa | P1 |
| BL-02 | Filter Kategori | CPAP Therapy, Sleep Health, Conditions & Risks | P1 |
| BL-03 | Pagination | 9 artikel per halaman | P2 |
| BL-04 | Search | Pencarian artikel berdasarkan judul/konten | P2 |

### 6.2 Detail Artikel

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| BL-05 | Rich Content | Artikel dengan heading, paragraf, gambar, list | P1 |
| BL-06 | Share Buttons | Share ke WhatsApp, Facebook, Twitter, Copy Link | P1 |
| BL-07 | Related Articles | 3 artikel terkait di akhir artikel | P2 |
| BL-08 | Author Info | Info author (dokter/staff) | P2 |
| BL-09 | Reading Time | Estimasi waktu baca | P2 |
| BL-10 | SEO Schema | Article structured data untuk Google | P1 |

### 6.3 Contoh Artikel

| Judul | Kategori | Bahasa |
|-------|----------|--------|
| Masker CPAP Bocor: 7 Penyebab dan Cara Mengatasinya | CPAP Therapy | ID, EN |
| Diet dan Olahraga untuk Mengatasi Sleep Apnea | Sleep Health | ID, EN |
| Sleep Apnea pada Diabetesi: Mengapa Gula Darah Sulit Terkontrol? | Conditions & Risks | ID |

---

## 7. Modul Integrasi WhatsApp

### 7.1 Floating Action Button

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| WA-01 | Posisi | Pojok kanan bawah, fixed position | P0 |
| WA-02 | Icon | Logo WhatsApp | P0 |
| WA-03 | Pulse Animation | Animasi untuk menarik perhatian | P1 |
| WA-04 | Mobile Safe | Tidak mengganggu konten di mobile | P0 |

### 7.2 Pre-filled Messages

| Konteks | Template Pesan | Prioritas |
|---------|---------------|-----------|
| Umum | "Halo Resindo Medika, saya ingin membuat janji konsultasi." | P0 |
| Booking | "Halo, saya ingin booking konsultasi pada tanggal {tanggal}. Keluhan: {keluhan}." | P0 |
| Produk | "Halo, saya tertarik dengan produk {nama_produk}. Mohon informasi." | P0 |
| Servis | "Halo, saya ingin menjadwalkan servis/kalibrasi alat CPAP saya." | P0 |
| Asuransi | "Halo, saya ingin mengecek cakupan asuransi saya untuk sleep apnea." | P1 |

---

## 8. Modul Admin Panel

### 8.1 Dashboard

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| ADM-01 | Statistik | Total booking, booking baru, selesai, batal | P0 |
| ADM-02 | Grafik | Grafik booking per minggu/bulan | P1 |
| ADM-03 | Recent Activity | 10 booking terbaru | P0 |

### 8.2 Manajemen Booking

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| ADM-04 | List Booking | Tabel: nama, keluhan, tanggal, status | P0 |
| ADM-05 | Filter | Filter: status, tanggal, keluhan | P0 |
| ADM-06 | Detail | Klik → detail lengkap booking | P0 |
| ADM-07 | Update Status | Baru → Dikonfirmasi → Selesai → Batal | P0 |
| ADM-08 | Export | Export booking ke CSV | P1 |

### 8.3 Manajemen Blog

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| ADM-09 | CRUD Artikel | Tambah, edit, hapus artikel | P1 |
| ADM-10 | Rich Text Editor | Editor untuk konten artikel | P1 |
| ADM-11 | Image Upload | Upload gambar artikel | P1 |
| ADM-12 | Draft/Publish | Status draft sebelum publish | P1 |
| ADM-13 | Bilingual Editor | Edit konten ID dan EN secara terpisah | P1 |

### 8.4 Manajemen Produk

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| ADM-14 | CRUD Produk | Tambah, edit, hapus produk | P1 |
| ADM-15 | Kategori | Manajemen kategori | P2 |

---

## 9. Aturan Bisnis (Business Rules)

| ID | Aturan | Deskripsi |
|----|--------|-----------|
| BR-01 | Booking Hours | Booking hanya untuk hari kerja (Senin-Jumat) |
| BR-02 | Advance Booking | Minimal 1 hari sebelum kunjungan |
| BR-03 | Same-day Warning | Jika pilih hari ini, tampilkan peringatan |
| BR-04 | Servis Tanpa Reservasi | Layanan servis/kalibrasi tidak perlu booking |
| BR-05 | Special Offer | Hanya untuk pasien baru (first-time) |
| BR-06 | Asuransi | Info asuransi hanya sebagai reference, verifikasi di klinik |
| BR-07 | Maintenance Schedule | Datang sebelum 10.00 → selesai hari sama |
| BR-08 | Bahasa Default | Default bahasa Indonesia |
| BR-09 | Content Review | Artikel medis harus di-review dokter sebelum publish |
| BR-10 | Data Retention | Data booking disimpan 2 tahun |

---

## 10. Skenario Penggunaan (Use Cases)

### UC-01: Pasien Booking Konsultasi Online
```
Actor: Pasien
Precondition: Membuka homepage atau halaman booking
Main Flow:
  1. Pasien mengisi form booking (nama, email, telepon, keluhan, tanggal)
  2. Sistem validasi input
  3. Sistem menyimpan booking dengan status "baru"
  4. Sistem mengirim notifikasi WhatsApp ke admin
  5. Sistem mengirim konfirmasi ke pasien via WhatsApp
  6. Sistem menampilkan success message
Alternative Flow:
  2a. Validasi gagal → tampilkan error, minta perbaikan
  4a. WhatsApp gagal → tetap simpan, admin cek manual
Postcondition: Booking tersimpan, admin & pasien ter-notifikasi
```

### UC-02: Admin Mengelola Booking
```
Actor: Admin
Precondition: Login ke admin panel
Main Flow:
  1. Admin membuka daftar booking
  2. Sistem menampilkan daftar dengan status dan highlight booking baru
  3. Admin mengklik booking baru
  4. Admin melihat detail: nama, keluhan, tanggal, kontak
  5. Admin menghubungi pasien untuk konfirmasi
  6. Admin mengupdate status menjadi "dikonfirmasi"
Postcondition: Status booking terupdate
```

### UC-03: Pengunjung Membaca Blog
```
Actor: Pengunjung
Precondition: Membuka halaman blog
Main Flow:
  1. Pengunjung melihat daftar artikel
  2. Pengunjung memfilter berdasarkan kategori
  3. Pengunjung mengklik artikel
  4. Sistem menampilkan artikel lengkap
  5. Pengunjung membaca dan bisa share
Postcondition: N/A
```

---

## 11. Aturan Error Handling

| Error | Pesan (ID) | Pesan (EN) | Aksi |
|-------|-----------|------------|------|
| Field wajib kosong | "[Field] wajib diisi" | "[Field] is required" | Highlight merah |
| Email invalid | "Format email tidak valid" | "Invalid email format" | Highlight merah |
| Telepon invalid | "Nomor telepon tidak valid" | "Invalid phone number" | Highlight merah |
| Tanggal lampau | "Tanggal tidak boleh di masa lalu" | "Date cannot be in the past" | Disable tanggal |
| Server error | "Terjadi kesalahan. Silakan coba lagi." | "An error occurred. Please try again." | Tombol retry |
| WhatsApp gagal | "Gagal membuka WhatsApp" | "Failed to open WhatsApp" | Tampilkan nomor |

---

## 12. Glossary

| Istilah | Definisi |
|---------|----------|
| OSA | Obstructive Sleep Apnea |
| CPAP | Continuous Positive Airway Pressure |
| BiPAP | Bilevel Positive Airway Pressure |
| PSG | Polysomnography |
| HST | Home Sleep Test |
| RPSGT | Registered Polysomnographic Technologist |
| Rental | Penyewaan alat CPAP |
| Trial | Mencoba alat sebelum membeli |
| Kalibrasi | Pengaturan presisi tekanan alat CPAP |
| Authorized Service Provider | Service center resmi dari brand |
