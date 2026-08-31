# Functional Requirements Document (FRD)
## Unified Sleep Healthcare Platform
### Gabungan & Penyempurnaan: SMC Sleep Solution × Resindo Medika × CPAPINDO

**Versi Dokumen:** 2.0 (Merged & Enhanced)  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Business Analysis  
**Status:** Final

---

## 1. Pendahuluan

### 1.1 Tujuan Dokumen
Dokumen ini mendefinisikan secara komprehensif semua kebutuhan fungsional Unified Sleep Healthcare Platform, menggabungkan fitur terbaik dari tiga website (smcsleepsolution.com, resindo.com, cpapindo.com) menjadi satu ekosistem terpadu.

### 1.2 Konvensi Penamaan
- **`MOD-XX`**: Module identifier (A=Education, B=Screening, C=Diagnosis, D=Consultation, E=E-commerce, F=Therapy, G=Retention, H=Admin)
- **`FR-XXX`**: Functional Requirement ID
- **Prioritas**: P0 (Must Have), P1 (Should Have), P2 (Nice to Have)

### 1.2 Ringkasan Modul

| Module | Nama | Source | Total FRs |
|--------|------|--------|-----------|
| A | Education & Awareness | All | 25 |
| B | Screening & Assessment | SMC | 30 |
| C | Diagnosis Services | CPAPINDO + SMC | 25 |
| D | Consultation & Clinic | Resindo | 20 |
| E | E-commerce | CPAPINDO | 35 |
| F | Therapy Services | CPAPINDO + Resindo | 20 |
| G | Retention & Support | All | 15 |
| H | Admin Panel | All | 30 |
| **Total** | | | **200** |

---

## 2. Module A: Education & Awareness

### A1: Homepage

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| A1-01 | **Hero Interaktif** | Statistik Indonesia (40% mendengkur, 10% berisiko OSA), animated counter | P0 |
| A1-02 | **Dual CTA** | "Mulai Screening Gratis" + "Buat Janji Konsultasi" | P0 |
| A1-03 | **Trust Signals** | Google Reviews (4.5+, 1000+ reviews), Certified Doctors, RPSGT Badge, Brand Logos (Philips, ResMed, Nox, BMC) | P0 |
| A1-04 | **Quick Response** | "RESPONS CEPAT TIM KAMI" badge | P0 |
| A1-05 | **Interactive Anatomy** | Ilustrasi anatomi saluran napas (6 label: Soft Palate, Tongue, Airway, Trachea, Nasal, Blood O2) — klik untuk detail | P0 |
| A1-06 | **6 Layanan** | Grid: Screening, Diagnosis, Konsultasi, E-commerce, Therapy, Support | P0 |
| A1-07 | **Personalized Therapy** | "Auto CPAP bukan one-size-fits-all" showcase | P0 |
| A1-08 | **Bundle Deals** | Carousel paket bundling dengan harga diskon | P0 |
| A1-09 | **Featured Products** | Produk unggulan per brand dengan vendor badge | P0 |
| A1-10 | **Blog Preview** | 3 artikel terbaru dengan kategori | P0 |
| A1-11 | **Testimoni** | Slider testimoni pasien dengan rating Google | P0 |
| A1-12 | **Special Offer** | Banner "Penawaran Konsultasi Perdana" | P1 |
| A1-13 | **FAQ Accordion** | 6+ pertanyaan umum | P0 |
| A1-14 | **Booking Form** | Form booking konsultasi langsung di homepage | P0 |
| A1-15 | **WhatsApp FAB** | Floating button di semua halaman | P0 |
| A1-16 | **Language Toggle** | ID/EN switcher di header | P0 |
| A1-17 | **Office Info** | Alamat, telepon, jam operasional | P0 |
| A1-18 | **Maintenance Info** | "Servis tanpa reservasi: datang sebelum 10.00 → selesai hari sama" | P0 |

### A2: Blog/CMS

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| A2-01 | **Article List** | Grid card: gambar, judul, excerpt, kategori, tanggal, bahasa | P0 |
| A2-02 | **Article Detail** | Rich content dengan heading, paragraf, gambar, list, share buttons | P0 |
| A2-03 | **Category Filter** | CPAP Therapy, Sleep Health, Conditions & Risks | P1 |
| A2-04 | **Bilingual Content** | Semua artikel tersedia ID & EN (terpisah) | P0 |
| A2-05 | **Related Articles** | 3 artikel terkait di akhir artikel | P1 |
| A2-06 | **Author Info** | Profil author (dokter/RPSGT) | P1 |
| A2-07 | **Reading Time** | Estimasi waktu baca | P2 |
| A2-08 | **SEO Schema** | Article structured data untuk Google | P1 |
| A2-09 | **Share Buttons** | Share ke WhatsApp, Facebook, Twitter, Copy Link | P0 |
| A2-10 | **Search** | Pencarian artikel berdasarkan judul/konten | P2 |

### A3: Static Pages

| ID | Halaman | Deskripsi | Prioritas |
|----|---------|-----------|-----------|
| A3-01 | **About Us** | Profil platform, visi, misi, tim medis | P0 |
| A3-02 | **FAQ** | Pertanyaan umum dalam accordion | P0 |
| A3-03 | **Contact** | Form kontak + WhatsApp + telepon + alamat + peta | P0 |
| A3-04 | **Privacy Policy** | Kebijakan privasi PDP compliant | P0 |
| A3-05 | **Terms & Conditions** | Syarat & ketentuan | P0 |
| A3-06 | **Medical Disclaimer** | "Hasil screening bukan diagnosis medis" | P0 |

---

## 3. Module B: Screening & Assessment

### B1: Screening Wizard

| ID | Step | Field/Action | Tipe | Validasi | Prioritas |
|----|------|-------------|------|----------|-----------|
| B1-01 | 1: Data Diri | Nama Lengkap | text | wajib, min 2 char | P0 |
| B1-02 | 1: Data Diri | Email | email | wajib, format valid | P0 |
| B1-03 | 1: Data Diri | No. Telepon | tel | wajib, format 08xx/+62 | P0 |
| B1-04 | 1: Data Diri | Usia | number | wajib, 18-100 | P0 |
| B1-05 | 1: Data Diri | Jenis Kelamin | radio | wajib: Laki-laki/Perempuan | P0 |
| B1-06 | 1: Data Diri | Tinggi Badan | number(cm) | wajib, 100-250 | P0 |
| B1-07 | 1: Data Diri | Berat Badan | number(kg) | wajib, 30-300 | P0 |
| B1-08 | 1: Data Diri | Lingkar Leher | number(cm) | wajib, 20-60 | P0 |
| B1-09 | 1: Data Diri | Tekanan Darah | text | optional, format 120/80 | P1 |
| B1-10 | 1: Data Diri | Consent Checkbox | checkbox | wajib centang | P0 |
| B1-11 | 2: SB-Q1 | Apakah mendengkur keras? | Ya/Tidak | wajib | P0 |
| B1-12 | 3: SB-Q2 | Apakah sering kelelahan siang hari? | Ya/Tidak | wajib | P0 |
| B1-13 | 3: SB-Q3 | Pernah diamati berhenti napas? | Ya/Tidak | wajib | P0 |
| B1-14 | 3: SB-Q4 | Riwayat tekanan darah tinggi? | Ya/Tidak | wajib | P0 |
| B1-15 | 4: SB-Q5 | BMI > 35? | Auto | auto-calculated | P0 |
| B1-16 | 4: SB-Q6 | Usia > 50? | Auto | auto-calculated | P0 |
| B1-17 | 4: SB-Q7 | Lingkar leher > 40cm(♂)/38cm(♀)? | Auto | auto-calculated | P0 |
| B1-18 | 4: SB-Q8 | Laki-laki? | Auto | dari data diri | P0 |
| B1-19 | 5: ESS-1 | Membaca | 0-3 | wajib | P0 |
| B1-20 | 5: ESS-2 | Menonton TV | 0-3 | wajib | P0 |
| B1-21 | 5: ESS-3 | Duduk diam di tempat umum | 0-3 | wajib | P0 |
| B1-22 | 5: ESS-4 | Sebagai penumpang 1 jam | 0-3 | wajib | P0 |
| B1-23 | 5: ESS-5 | Berbaring di siang hari | 0-3 | wajib | P0 |
| B1-24 | 5: ESS-6 | Duduk bicara dengan seseorang | 0-3 | wajib | P0 |
| B1-25 | 5: ESS-7 | Setelah makan (tanpa alkohol) | 0-3 | wajib | P0 |

### B2: Scoring Engine

| ID | Function | Logic | Output |
|----|----------|-------|--------|
| B2-01 | `calculateStopBang()` | Sum of 8 boolean values (0 or 1 each) | Score: 0-8 |
| B2-02 | `calculateESS()` | Sum of 7 scenario scores (0-3 each) | Score: 0-21 |
| B2-03 | `getRiskLevel(sbScore)` | SB 0-2: rendah, SB 3-4: sedang, SB 5-8: tinggi | Risk level |
| B2-04 | `getESSInterpretation(essScore)` | ESS 0-10: Normal, 11-14: Berlebihan, 15-24: Sangat Berlebihan | Interpretation |
| B2-05 | `getRecommendation(risk, ess)` | Matrix lookup (see B3) | Recommendation object |
| B2-06 | `getWhatsAppMessage(name, score, risk)` | Template per risk level | Pre-filled message |

### B3: Recommendation Matrix

| Risiko STOP-BANG | ESS Normal (0-10) | ESS Berlebihan (11-14) | ESS Sangat Berlebihan (15-24) |
|-----------------|-------------------|----------------------|------------------------------|
| **Rendah (0-2)** | Tips kesehatan tidur | Disarankan konsultasi dokter | Sangat disarankan konsultasi |
| **Sedang (3-4)** | Disarankan konsultasi dokter | **Booking Sleep Test** | **Booking Sleep Test** |
| **Tinggi (5-8)** | **Booking Sleep Test** | **Booking Sleep Test + Konsultasi** | **PRIORITAS: Sleep Test + Konsultasi** |

### B4: Results Display

| ID | Component | Deskripsi | Prioritas |
|----|-----------|-----------|-----------|
| B4-01 | **STOP-BANG Score** | Gauge chart 0-8 dengan warna (hijau/kuning/merah) | P0 |
| B4-02 | **ESS Score** | Gauge chart 0-21 dengan interpretasi | P0 |
| B4-03 | **Risk Level** | Badge: Rendah (hijau), Sedang (kuning), Tinggi (merah) | P0 |
| B4-04 | **Recommendation** | Teks rekomendasi berdasarkan matrix | P0 |
| B4-05 | **CTA Buttons** | "Konsultasi Sekarang" + "Booking Sleep Test" → WhatsApp | P0 |
| B4-06 | **Print/Save** | Tombol print/save hasil screening | P2 |
| B4-07 | **Share Results** | Share hasil via WhatsApp | P1 |

### B5: Data Persistence

| ID | Function | Deskripsi | Prioritas |
|----|----------|-----------|-----------|
| B5-01 | Save Screening | POST data ke database (patient + screening) | P0 |
| B5-02 | Duplicate Check | Email yang sama tidak boleh screening >1x dalam 30 hari | P0 |
| B5-03 | Email Notification | Kirim hasil screening ke email pasien | P1 |
| B5-04 | Admin Notification | Notifikasi untuk risiko TINGGI | P0 |
| B5-05 | Analytics Event | Track screening completion untuk GA4 | P0 |

---

## 4. Module C: Diagnosis Services

### C1: Home Sleep Test (HST)

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| C1-01 | **HST Info Page** | Penjelasan HST, manfaat, target pasien | P0 |
| C1-02 | **Process Flow** | 5 langkah visual: Hubungi → Jadwal → Set-up → Collection → Report | P0 |
| C1-03 | **Setup Detail** | "Teknisi datang, set-up 30 menit, kembali pagi untuk collect" | P0 |
| C1-04 | **RPSGT Info** | "Data dianalisa di Singapura oleh RPSGT bersertifikat AASM" | P0 |
| C1-05 | **Report Parameters** | 6 parameter: Breathing effort, Respiratory events, O2 saturation, Pulse rate, Position, Snoring | P0 |
| C1-06 | **Report Timeline** | "Sleep Report ready in 7 working days" | P0 |
| C1-07 | **Booking Form** | Nama, telepon, email, alamat, kota, tanggal, jam, riwayat medis | P0 |
| C1-08 | **Coverage Info** | Area coverage untuk teknisi (Jabodetabek+) | P0 |
| C1-09 | **Pricing** | Harga HST (Rp 3-5 juta) | P0 |
| C1-10 | **CTA Booking** | "Book a Home Sleep Test" → form atau WhatsApp | P0 |

### C2: In-Lab Sleep Diagnostic

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| C2-01 | **PSG Tipe 1** | Full polysomnography in-lab | P0 |
| C2-02 | **PSG Tipe 2** | Portable comprehensive | P1 |
| C2-03 | **PSG Tipe 3** | Limited channel | P1 |
| C2-04 | **PSG Tipe 4** | Basic screening | P1 |
| C2-05 | **Parameter List** | 7 parameter: Kedalaman tidur, Sleep Apnea, Saturasi O₂, Posisi, Limb movement, Snoring, Heart Rate | P0 |
| C2-06 | **Booking Form** | Form booking PSG dengan pilihan tipe | P0 |
| C2-07 | **Siapa yang Perlu** | 7 kategori yang memerlukan pemeriksaan | P0 |

### C3: Diagnostic Equipment

| ID | Equipment | Brand | Deskripsi | Prioritas |
|----|-----------|-------|-----------|-----------|
| C3-01 | **Nox A1s** | Nox Medical | Full diagnostic system (exclusive distributor) | P0 |
| C3-02 | **Nox T3s** | Nox Medical | Level III portable sleep test | P1 |
| C3-03 | **ApneaLink Air** | ResMed | Level III HST device (FDA-approved) | P1 |
| C3-04 | **SOMNOcheck** | SOMNOmedics | Portable screening device | P2 |

---

## 5. Module D: Consultation & Clinic

### D1: Booking System

| ID | Fitur | Deskripsi | Validasi | Prioritas |
|----|-------|-----------|----------|-----------|
| D1-01 | **Booking Type** | Dropdown: Konsultasi, HST, PSG, Mask Fitting, Therapy Review, Service | wajib | P0 |
| D1-02 | **Nama Lengkap** | text | wajib | P0 |
| D1-03 | **Email** | email | wajib | P0 |
| D1-04 | **No. Telepon** | tel | wajib | P0 |
| D1-05 | **Keluhan Utama** | Quick select buttons + dropdown | wajib | P0 |
| D1-06 | **Tanggal Kunjungan** | date picker | wajib, minimal besok | P0 |
| D1-07 | **Jam Preferensi** | Radio: Pagi (08-10), Siang (10-12), Sore (13-16) | wajib | P0 |
| D1-08 | **Riwayat Medis** | textarea | optional | P1 |
| D1-09 | **Asuransi** | text (nama provider) | optional | P1 |
| D1-10 | **Catatan Tambahan** | textarea | optional | P2 |
| D1-11 | **Consent** | Checkbox informed consent | wajib centang | P0 |

### D2: Keluhan Quick Select Options

| Value | Label (ID) | Label (EN) | Ikon |
|-------|-----------|------------|------|
| mendengkur | Mendengkur keras | Loud snoring | 🔊 |
| henti_napas | Henti napas saat tidur | Breathing pauses | ⏸️ |
| lelah | Kelelahan di siang hari | Daytime fatigue | 😴 |
| sulit_tidur | Sulit tidur | Difficulty sleeping | 🛌 |
| sering_terbangun | Sering terbangun malam | Frequent waking | 🌙 |
| sakit_kepala | Sakit kepala pagi | Morning headaches | 🤕 |
| konsentrasi | Sulit berkonsentrasi | Poor concentration | 🧠 |
| lainnya | Lainnya | Other | 📝 |

### D3: Doctor Profile

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| D3-01 | **Doctor Cards** | Foto, nama, spesialisasi, pengalaman | P0 |
| D3-02 | **Specializations** | Sleep Medicine, Pulmonology, ENT | P0 |
| D3-03 | **Credentials** | Sertifikasi, pendidikan, publikasi | P1 |
| D3-04 | **Schedule** | Jadwal praktik (hari/jam) | P1 |
| D3-05 | **Languages** | Bahasa yang dikuasai (ID, EN, etc.) | P2 |

### D4: Insurance Support

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| D4-01 | **Insurance List** | Daftar asuransi yang bekerja sama | P1 |
| D4-02 | **Coverage Info** | Penjelasan cakupan untuk sleep apnea | P1 |
| D4-03 | **Verification Process** | "Hubungi kami untuk verifikasi asuransi Anda" | P0 |
| D4-04 | **BPJS Info** | Informasi untuk pasien BPJS | P1 |

### D5: Booking Confirmation

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| D5-01 | **WhatsApp to Admin** | Notifikasi booking ke admin | P0 |
| D5-02 | **WhatsApp to Patient** | Konfirmasi booking ke pasien | P0 |
| D5-03 | **Email Confirmation** | Email detail booking | P0 |
| D5-04 | **Calendar Invite** | Google Calendar invite (fase lanjutan) | P2 |
| D5-05 | **Reminder** | Reminder H-1 dan H-3 via WhatsApp | P1 |

---

## 6. Module E: E-commerce

### E1: Product Listing

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| E1-01 | **Product Grid** | Grid: gambar, nama, vendor badge, harga (Rp format) | P0 |
| E1-02 | **Vendor Badge** | Label: ResMed, Philips, BMC, Nox Medical, Yuwell | P0 |
| E1-03 | **Price Format** | "Rp X.XXX.XXX" dengan sale price & compare-at-price | P0 |
| E1-04 | **Sale Badge** | Label "Sale" jika ada diskon | P1 |
| E1-05 | **Category Navigation** | Tab/filter: All, Bundle, Travel, CPAP, BiPAP, Oksigen, Masker, Parts, Filter, Humidification, Tube, Sleep Test | P0 |
| E1-06 | **Search** | Pencarian produk berdasarkan nama | P1 |
| E1-07 | **Sort** | Default, Price Low-High, Price High-Low, Best Selling | P1 |
| E1-08 | **Product Count** | "X products" counter | P0 |
| E1-09 | **WhatsApp Tanya** | Tombol "Tanya" per produk → WhatsApp | P0 |

### E2: Product Detail

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| E2-01 | **Image Gallery** | Multiple gambar, thumbnail, zoom | P0 |
| E2-02 | **Product Title** | Nama lengkap | P0 |
| E2-03 | **Vendor** | "Vendor: ResMed" / "Vendor: BMC" etc. | P0 |
| E2-04 | **Price** | Regular + Sale price (jika ada) | P0 |
| E2-05 | **Variant** | Pilihan ukuran/warna (jika ada) | P0 |
| E2-06 | **Quantity** | Pilih jumlah | P0 |
| E2-07 | **Add to Cart** | Tombol "Add to Cart" | P0 |
| E2-08 | **Buy Now** | Tombol "Buy It Now" (skip cart) | P0 |
| E2-09 | **Description** | Deskripsi lengkap (HTML) | P0 |
| E2-10 | **Specifications** | Spesifikasi teknis dalam table | P1 |
| E2-11 | **Reviews** | Rating bintang + written review | P1 |
| E2-12 | **Related Products** | 4 produk terkait | P1 |
| E2-13 | **WhatsApp Ask** | "Tanya Produk ini" → WhatsApp | P0 |
| E2-14 | **Share** | Share ke WhatsApp, Facebook, Copy Link | P1 |

### E3: Bundle Deals

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| E3-01 | **Bundle Display** | Harga bundle vs total satuan (strikethrough) | P0 |
| E3-02 | **Bundle Discount** | Diskon 5-15% dari harga satuan | P0 |
| E3-03 | **Bundle Content** | Tampilkan semua item dalam bundle | P0 |
| E3-04 | **Bundle Examples** | CPAP + Mask: Rp 16.5jt (vs Rp 17jt satuan) | P0 |
| E3-05 | **Bundle CTA** | "Add Bundle to Cart" | P0 |

### E4: Cart & Checkout

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| E4-01 | **Cart Drawer/Page** | Slide-out cart atau halaman cart | P0 |
| E4-02 | **Item List** | Gambar, nama, variant, harga, quantity | P0 |
| E4-03 | **Update Quantity** | +/- button | P0 |
| E4-04 | **Remove Item** | Tombol hapus per item | P0 |
| E4-05 | **Subtotal** | Grand total | P0 |
| E4-06 | **Discount Code** | Input kode voucher | P0 |
| E4-07 | **Checkout** | Alamat → Pengiriman → Pembayaran → Konfirmasi | P0 |
| E4-08 | **Payment Options** | Credit Card, Bank Transfer, GoPay, OVO, Dana | P0 |
| E4-09 | **Shipping Options** | JNE, J&T, GoSend, Grab | P0 |
| E4-10 | **Order Confirmation** | Halaman terima kasih + nomor order | P0 |
| E4-11 | **Email Confirmation** | Email otomatis | P0 |
| E4-12 | **WhatsApp Confirmation** | Notifikasi WhatsApp | P1 |
| E4-13 | **Order Tracking** | Lacak status pesanan | P1 |

### E5: Product Categories

| Category | Products | Price Range |
|----------|----------|-------------|
| **Bundle Deal** | CPAP + Mask combos | Rp 16.5-26jt |
| **Travel AutoCPAP** | BMC M1 Mini, ResMed AirMini | Rp 15-21jt |
| **Auto CPAP** | BMC G3 A20, ResMed AirSense | Rp 14.5-21jt |
| **Auto BiPAP** | BMC G3 B25A, ResMed AirCurve | Rp 26jt+ |
| **BiPAP & Ventilator** | Advanced respiratory devices | Rp 30jt+ |
| **Oksigen** | AirSep concentrator | Rp 46.5jt |
| **Masker Nasal Pillow** | BMC P6s, ResMed P10, P30i | Rp 2-3jt |
| **Masker Nasal** | BMC N5A+, ResMed N20, N30i | Rp 2-3jt |
| **Masker Full Face** | BMC F5A+, F6s, ResMed F20 | Rp 2-3.5jt |
| **Parts Masker** | Cushion, Headgear, Frame | Rp 200rb-1jt |
| **Filter** | BMC, ResMed filters | Rp 41rb-200rb |
| **Humidification** | HumidX, Waterless | Rp 165rb-600rb |
| **Tube** | SlimLine, ClimateLine | Rp 150rb-300rb |
| **Sleep Test** | HST devices, screening | Rp 3-8jt |

---

## 7. Module F: Therapy Services

### F1: Personalized Therapy

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| F1-01 | **Info Page** | "Why Auto CPAP needs personalized setting" | P0 |
| F1-02 | **Problem Statement** | "Auto CPAP is not a One Size Fit All Device" | P0 |
| F1-03 | **Process** | Cara personalized therapy: Assessment → Setting → Review → Adjustment | P0 |
| F1-04 | **Benefits** | Kenapa personalisasi penting: comfort, compliance, efficacy | P0 |
| F1-05 | **CTA** | Booking WhatsApp untuk personalized therapy | P0 |

### F2: Mask Fitting

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| F2-01 | **Info Page** | Penjelasan layanan mask fitting | P0 |
| F2-02 | **Assessment Points** | Facial anatomy, sleeping habits, breathing pattern, comfort preferences | P0 |
| F2-03 | **Mask Types** | Nasal, Nasal Pillow, Full Face — dengan perbandingan | P0 |
| F2-04 | **Fitting Process** | Assessment → Rekomendasi → Trial → Final Selection | P0 |
| F2-05 | **CTA** | Booking mask fitting via WhatsApp | P0 |

### F3: Therapy Data Review

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| F3-01 | **Info Page** | "Therapy Data Review & Adjustment" | P0 |
| F3-02 | **Benefits** | Monitor progress, identify issues early, ensure effective treatment | P0 |
| F3-03 | **Review Frequency** | Rekomendasi: review setiap 3 bulan pertama, lalu 6 bulan | P0 |
| F3-04 | **Data Points** | AHI, leak, usage hours, compliance | P0 |
| F3-05 | **CTA** | Booking review via WhatsApp | P0 |

### F4: Technical Support

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| F4-01 | **Info Page** | Penjelasan technical support | P0 |
| F4-02 | **Service Types** | Performance check, maintenance, cleaning, kalibrasi | P0 |
| F4-03 | **Service Flow** | Datang → Set-up → Test → Report → Ambil | P0 |
| F4-04 | **Maintenance Schedule** | Rekomendasi servis berkala | P0 |
| F4-05 | **CTA** | Booking service via WhatsApp | P0 |

### F5: Rental & Trial

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| F5-01 | **Rental Program** | Sewa CPAP harian/mingguan/bulanan | P0 |
| F5-02 | **Trial Program** | Coba alat sebelum beli (7-14 hari) | P0 |
| F5-03 | **Rental Terms** | Syarat & ketentuan rental | P0 |
| F5-04 | **Pricing** | Harga rental per hari/minggu/bulan | P0 |
| F5-05 | **CTA** | Booking rental via WhatsApp | P0 |

---

## 8. Module G: Retention & Support

### G1: WhatsApp Integration

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| G1-01 | **Floating Button** | Pojok kanan bawah, fixed, pulse animation | P0 |
| G1-02 | **Pre-filled Messages** | 10+ template kontekstual (lihat G2) | P0 |
| G1-03 | **Multiple Numbers** | Primary + backup WhatsApp number | P0 |
| G1-04 | **Mobile Safe** | Tidak mengganggu konten di mobile | P0 |

### G2: Pre-filled Message Templates

| Konteks | Template |
|---------|----------|
| **General** | "Halo, saya ingin bertanya tentang layanan sleep healthcare Anda." |
| **Screening Low** | "Halo, saya telah melakukan screening. Hasil risiko RENDAH. Mohon tips kesehatan tidur." |
| **Screening Medium** | "Halo, saya telah melakukan screening. Hasil risiko SEDANG. Saya ingin konsultasi." |
| **Screening High** | "Halo, saya telah melakukan screening. Hasil risiko TINGGI. Saya ingin segera booking Sleep Test." |
| **Product** | "Halo, saya tertarik dengan [NAMA PRODUK]. Mohon informasi harga dan spesifikasi." |
| **Bundle** | "Halo, saya tertarik dengan bundle deal [NAMA BUNDLE]. Mohon informasi." |
| **HST** | "Halo, saya ingin booking Home Sleep Test. Mohon informasi jadwal dan harga." |
| **Consultation** | "Halo, saya ingin membuat janji konsultasi. Keluhan: [KELUHAN]." |
| **Mask Fitting** | "Halo, saya ingin melakukan Mask Fitting. Mohon jadwal yang tersedia." |
| **Therapy Review** | "Halo, saya ingin konsultasi Personalized Therapy untuk alat CPAP saya." |
| **Service** | "Halo, saya ingin servis/maintenance alat CPAP saya. Mohon informasi." |
| **Insurance** | "Halo, saya ingin mengecek cakupan asuransi saya untuk sleep apnea." |

### G3: Customer Account

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| G3-01 | **Register/Login** | Email + password | P0 |
| G3-02 | **Profile** | Update data diri | P1 |
| G3-03 | **Order History** | Daftar pesanan sebelumnya | P0 |
| G3-04 | **Order Detail** | Detail pesanan + tracking | P0 |
| G3-05 | **Reorder** | "Buy Again" untuk repeat purchase | P1 |
| G3-06 | **Screening History** | Riwayat screening sebelumnya | P1 |
| G3-07 | **Booking History** | Riwayat booking konsultasi/HST | P1 |
| G3-08 | **Addresses** | Simpan beberapa alamat | P1 |
| G3-09 | **Wishlist** | Simpan produk favorit | P2 |

### G4: Repeat Purchase Automation

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| G4-01 | **Filter Reminder** | Email/WA: "Filter sudah 30 hari, beli baru?" | P1 |
| G4-02 | **Cushion Reminder** | Email/WA: "Cushion sudah 3-6 bulan, ganti baru?" | P1 |
| G4-03 | **Tube Reminder** | Email/WA: "Tube sudah 6-12 bulan, ganti baru?" | P1 |
| G4-04 | **Service Reminder** | Email/WA: "Waktunya servis/kalibrasi alat" | P1 |
| G4-05 | **Therapy Review Reminder** | Email/WA: "Waktunya therapy data review" | P1 |

---

## 9. Module H: Admin Panel

### H1: Dashboard

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| H1-01 | **Overview Cards** | Total screening, bookings, orders, revenue | P0 |
| H1-02 | **Charts** | Grafik tren: screening/bulan, bookings/bulan, revenue/bulan | P0 |
| H1-03 | **Recent Activity** | 10 aktivitas terbaru | P0 |
| H1-04 | **High Priority Alerts** | Screening risiko TINGGI, booking baru, order baru | P0 |
| H1-05 | **Quick Actions** | Shortcut: Lihat screening, Lihat booking, Lihat order | P0 |

### H2: Screening Management

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| H2-01 | **List Screenings** | Tabel: nama, email, risiko, tanggal, status | P0 |
| H2-02 | **Filter** | Filter: risiko, tanggal, status follow-up | P0 |
| H2-03 | **Detail View** | Klik → detail lengkap jawaban + hasil | P0 |
| H2-04 | **Status Update** | Baru → Dihubungi → Konsultasi → Selesai | P0 |
| H2-05 | **Export CSV** | Export daftar responden ke CSV | P1 |
| H2-06 | **Bulk WhatsApp** | Kirim WhatsApp massal ke grup risiko tertentu | P2 |
| H2-07 | **Stats Dashboard** | Jumlah per hari/minggu/bulan, risiko breakdown | P0 |

### H3: Booking Management

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| H3-01 | **List Bookings** | Tabel: nama, jenis, tanggal, status | P0 |
| H3-02 | **Filter** | Filter: jenis booking, tanggal, status | P0 |
| H3-03 | **Detail View** | Detail booking + kontak pasien | P0 |
| H3-04 | **Status Update** | Baru → Dikonfirmasi → Selesai → Batal | P0 |
| H3-05 | **Calendar View** | Tampilan kalender untuk jadwal booking | P1 |
| H3-06 | **Export** | Export booking ke CSV | P1 |

### H4: Order Management

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| H4-01 | **Shopify Integration** | Sync orders dari Shopify | P0 |
| H4-02 | **Order List** | Tabel: order#, customer, total, status, date | P0 |
| H4-03 | **Order Detail** | Detail order + items + shipping | P0 |
| H4-04 | **Status Update** | Processing → Shipped → Delivered | P0 |

### H5: Content Management

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| H5-01 | **Blog CRUD** | Tambah, edit, hapus artikel (ID/EN) | P0 |
| H5-02 | **Rich Text Editor** | WYSIWYG editor dengan image upload | P0 |
| H5-03 | **Draft/Publish** | Status draft sebelum publish | P1 |
| H5-04 | **SEO Fields** | Title, description, OG image per artikel | P1 |
| H5-05 | **Schedule Publish** | Publish otomatis sesuai jadwal | P2 |

### H6: Product Management

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| H6-01 | **Shopify Sync** | Sync produk dari Shopify | P0 |
| H6-02 | **Product List** | Tabel: nama, vendor, kategori, harga, stok | P0 |
| H6-03 | **Inventory Alert** | Alert jika stok < threshold | P1 |

### H7: Report & Analytics

| ID | Fitur | Deskripsi | Prioritas |
|----|-------|-----------|-----------|
| H7-01 | **Screening Report** | Total, risiko breakdown, conversion rate | P0 |
| H7-02 | **Booking Report** | Total, jenis breakdown, conversion rate | P0 |
| H7-03 | **Revenue Report** | Revenue per kategori, per brand | P0 |
| H7-04 | **Traffic Report** | Visitors, pageviews, bounce rate | P1 |
| H7-05 | **WhatsApp Report** | Inquiries per hari, response time | P1 |
| H7-06 | **Export** | Export semua report ke CSV/Excel | P1 |

---

## 10. Aturan Bisnis (Business Rules)

| ID | Aturan | Deskripsi | Module |
|----|--------|-----------|--------|
| BR-01 | **Screening Age** | Hanya untuk usia 18+ tahun | B |
| BR-02 | **Screening Cooldown** | Email yang sama tidak boleh screening >1x dalam 30 hari | B |
| BR-03 | **Data Wajib** | Semua field wajib diisi sebelum lanjut | B, D |
| BR-04 | **BMI Auto** | BMI dihitung otomatis dari tinggi dan berat badan | B |
| BR-05 | **Disclaimer Medis** | Hasil screening BUKAN diagnosis medis, hanya indikasi risiko | B |
| BR-06 | **Booking Weekday** | Booking hanya untuk hari kerja (Senin-Jumat) | D |
| BR-07 | **Advance Booking** | Minimal 1 hari sebelum kunjungan | D |
| BR-08 | **Same-day Warning** | Jika pilih hari ini, tampilkan peringatan | D |
| BR-09 | **HST Coverage** | HST hanya tersedia di area Jabodetabek+ (untuk teknisi) | C |
| BR-10 | **HST Timeline** | Report ready in 7 working days | C |
| BR-11 | **Maintenance Walk-in** | Servis/kalibrasi tidak perlu booking, tanpa reservasi | F |
| BR-12 | **Maintenance Hours** | Datang sebelum 10.00 → selesai hari sama | F |
| BR-13 | **Bundle Discount** | Bundle harus lebih murah dari total satuan (min 5%) | E |
| BR-14 | **Price Format** | Semua harga dalam format "Rp X.XXX.XXX" | E |
| BR-15 | **Vendor Display** | Setiap produk harus tampilkan vendor | E |
| BR-16 | **Bahasa Default** | Default bahasa Indonesia | All |
| BR-17 | **Content Review** | Artikel medis harus di-review dokter sebelum publish | A |
| BR-18 | **Data Retention** | Data screening & booking disimpan 2 tahun | All |
| BR-19 | **HST Walk-in Time** | Datang sebelum 10.00 → ambil hari sama (paling lambat 16.00) | C |
| BR-20 | **HST Walk-in Late** | Datang setelah 10.00 → ambil keesokan harinya | C |

---

## 11. Skenario Penggunaan (Use Cases)

### UC-01: Pasien Baru — Dari Screening ke Terapi
```
ACTOR: Budi (45 tahun, mendengkur)
PRECONDITION: Membuka website

FLOW:
  1. Buka homepage
  2. Lihat statistik "40% penduduk Indonesia mendengkur"
  3. Klik "Mulai Screening Gratis"
  4. Isi data diri (nama, email, telepon, usia, dll)
  5. Jawab STOP-BANG (8 pertanyaan)
  6. Jawab ESS (7 skenario)
  7. Lihat hasil: Risiko TINGGI (SB=7, ESS=16)
  8. Klik "Konsultasi Sekarang"
  9. WhatsApp terbuka dengan pre-filled message
  10. Kirim pesan ke admin
  11. Admin menghubungi untuk jadwal konsultasi
  12. Datang ke klinik untuk konsultasi
  13. Dokter rekomendasikan Sleep Test
  14. Booking HST → Teknisi datang ke rumah
  15. Report ready: AHI = 25 (Moderate OSA)
  16. Dokter rekomendasikan CPAP
  17. Browse produk di e-commerce
  18. Pilih bundle deal: CPAP + Mask
  19. Checkout → Pembayaran → Shipping
  20. Alat dikirim → Setup mandiri
  21. Mask Fitting di klinik
  22. Therapy Data Review (3 bulan kemudian)
  23. Repeat purchase: filter, cushion
  24. Jadi loyal customer selama bertahun-tahun

SUCCESS CRITERIA:
  - Screening completion rate: > 70%
  - Screening → Consultation: > 8%
  - Consultation → Sleep Test: > 50%
  - Sleep Test → CPAP Purchase: > 70%
  - Customer Lifetime Value: > Rp 10 juta
```

### UC-02: Repeat Customer — Beli Ulang
```
ACTOR: Siti (sudah pakai CPAP 2 tahun)
PRECONDITION: Login ke akun

FLOW:
  1. Login ke akun
  2. Dapat email reminder: "Filter sudah 30 hari"
  3. Klik link → langsung ke halaman filter
  4. Atau klik "Buy Again" di order history
  5. Pilih filter yang dibutuhkan
  6. Add to cart → Checkout
  7. Selesai

ALTERNATIVE:
  - Booking mask fitting untuk ganti tipe masker
  - Booking therapy data review untuk optimasi setting
  - Booking servis/kalibrasi alat
```

### UC-03: B2B — Dokter Rujukan
```
ACTOR: Dr. Ahmad (Dokter Paru)
PRECONDITION: Mencari partner rujukan

FLOW:
  1. Buka website
  2. Lihat daftar produk dengan spesifikasi
  3. Lihat profil dokter spesialis
  4. Lihat ketersediaan layanan
  5. Hubungi via WhatsApp untuk partnership
  6. Dapat akses B2B portal (harga grosir)
  7. Rujukan pasien ke platform
  8. Follow-up terapi pasien via platform
  9. Long-term partnership terjalin
```

---

## 12. Aturan Error Handling

| Error | Pesan (ID) | Pesan (EN) | Aksi |
|-------|-----------|------------|------|
| Field wajib kosong | "[Field] wajib diisi" | "[Field] is required" | Highlight merah |
| Email invalid | "Format email tidak valid" | "Invalid email format" | Highlight merah |
| Telepon invalid | "Nomor telepon tidak valid" | "Invalid phone number" | Highlight merah |
| Usia < 18 | "Screening hanya untuk usia 18+" | "Screening for 18+ only" | Disable tombol |
| Tanggal weekend | "Hari libur tidak tersedia" | "Weekend not available" | Disable tanggal |
| Tanggal lampau | "Tanggal tidak boleh masa lalu" | "Date cannot be in past" | Disable tanggal |
| HST date < 3 hari | "Pilih tanggal minimal 3 hari dari sekarang" | "Select date at least 3 days from now" | Highlight field |
| Stok habis | "Stok habis" | "Out of Stock" | Disable Add to Cart |
| Server error | "Terjadi kesalahan. Coba lagi." | "An error occurred. Try again." | Tombol retry |
| WhatsApp gagal | "Gagal buka WhatsApp. Hubungi: [nomor]" | "Failed to open WhatsApp. Call: [number]" | Tampilkan nomor |

---

## 13. Glossary

| Istilah | Definisi | Module |
|---------|----------|--------|
| **Sleep Apnea** | Gangguan tidur menyebabkan napas berhenti berulang kali | All |
| **OSA** | Obstructive Sleep Apnea — tipe paling umum | All |
| **CPAP** | Continuous Positive Airway Pressure | E, F |
| **BiPAP** | Bilevel Positive Airway Pressure | E, F |
| **APAP** | Automatic Positive Airway Pressure | E, F |
| **PSG** | Polysomnography — pemeriksaan tidur menyeluruh | C |
| **HST** | Home Sleep Test — pemeriksaan tidur di rumah | C |
| **RPSGT** | Registered Polysomnographic Technologist | C |
| **AHI** | Apnea-Hypopnea Index — ukuran keparahan | C |
| **STOP-BANG** | Kuesioner 8 pertanyaan skrining | B |
| **ESS** | Epworth Sleepiness Scale — tingkat kantuk | B |
| **Personalized Therapy** | Kustomisasi setting CPAP | F |
| **Mask Fitting** | Assessment untuk masker terbaik | F |
| **Therapy Data Review** | Monitoring data penggunaan CPAP | F |
| **Bundle Deal** | Paket bundling dengan diskon | E |
| **Screening** | Skrining awal risiko sleep apnea | B |
| **Follow-up** | Tindak lanjut terhadap leads | H |
| **LTV** | Customer Lifetime Value | G |
| **NPS** | Net Promoter Score | All |
