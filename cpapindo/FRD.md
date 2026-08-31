# Functional Requirements Document (FRD)
## CPAPINDO — cpapindo.com

**Versi Dokumen:** 1.0  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Business Analysis  
**Status:** Draft

---

## 1. Pendahuluan

### 1.1 Tujuan Dokumen
Dokumen ini mendefinisikan kebutuhan fungsional website cpapindo.com secara rinci, mencakup modul e-commerce (Shopify), layanan sleep diagnostic, personalized therapy, dan integrasi pendukung.

### 1.2 Ruang Lingkup
- Modul Homepage & Navigation
- Modul E-commerce (Shopify Native + Custom)
- Modul Sleep Test Services (HST & PSG)
- Modul Therapy Services
- Modul Blog/Articles
- Modul WhatsApp Integration
- Modul Customer Account

---

## 2. Modul Homepage

### 2.1 Hero Carousel

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-HC-01 | Banner Slides | Carousel 10 kategori: Bundle Deal, Travel AutoCPAP, Auto CPAP & BiPAP, BiPAP & Ventilator, Oksigen, Masker, Parts Masker, Filter, Humidification, Tube | P0 |
| FR-HC-02 | Auto-rotate | Auto-rotate setiap 5 detik | P0 |
| FR-HC-03 | Manual Navigation | Arrow kiri/kanan + dots indicator | P0 |
| FR-HC-04 | CTA per Slide | Setiap slide ada tombol "Shop Now" ke collection terkait | P0 |
| FR-HC-05 | Mobile Swipe | Swipe support di mobile | P0 |

### 2.2 Personalized Therapy Section

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-PT-01 | Headline | "Personalized Therapy" | P0 |
| FR-PT-02 | Subtext | "Auto CPAP is not a One Size Fit All Device. A customized setting is required for each user to achieve optimal result." | P0 |
| FR-PT-03 | CTA | "Read More >>>" → halaman personalized therapy | P0 |
| FR-PT-04 | Visual | Ilustrasi/gambar setting CPAP | P1 |

### 2.3 Mask Fitting Section

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-MF-01 | Headline | "Mask Fitting" | P0 |
| FR-MF-02 | Subtext | "Our Sleep Therapists assess facial anatomy, sleeping habits, breathing pattern, and comfort preferences before recommending." | P0 |
| FR-MF-03 | CTA | "Read More >>>" → halaman mask fitting | P0 |

### 2.4 Therapy Data Review Section

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-TD-01 | Headline | "Therapy Data Review & Adjustment" | P0 |
| FR-TD-02 | Subtext | "Regular review of therapy data to monitor progress, identify issues early, ensure treatment remains effective and comfortable." | P0 |
| FR-TD-03 | CTA | "Read More >>>" → halaman therapy review | P0 |

### 2.5 Technical Support Section

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-TS-01 | Headline | "Technical Support" | P0 |
| FR-TS-02 | Subtext | "Send your device for regular performance check to ensure accurate, safe and reliable therapy delivery." | P0 |
| FR-TS-03 | CTA | "click" → halaman technical support / WhatsApp | P0 |

### 2.6 HST Promo Section

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-HST-01 | Question | "Should you book a Home Sleep Evaluation Test?" | P0 |
| FR-HST-02 | Description | Penjelasan pentingnya HST, OSA awareness | P0 |
| FR-HST-03 | CTA | "Read More...." → HST info page | P0 |
| FR-HST-04 | Booking CTA | Tombol "Book a Simple Home Sleep Evaluation Test" | P0 |

### 2.7 Featured Products

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| FR-FP-01 | Product Carousel | Carousel produk unggulan (BMC P6s, ResMed P10, etc.) | P0 |
| FR-FP-02 | Card Content | Gambar, nama, vendor, harga (Rp format) | P0 |
| FR-FP-03 | Pagination | "< 1 / of 11 >" navigasi | P0 |
| FR-FP-04 | CTA | Klik → product detail page | P0 |

---

## 3. Modul E-commerce (Shopify)

### 3.1 Product Listing (Collections)

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| PL-01 | Grid Layout | Grid 3 kolom (desktop), 2 (tablet), 1 (mobile) | P0 |
| PL-02 | Product Card | Gambar, nama, vendor badge, regular price, sale price | P0 |
| PL-03 | Harga Format | Format "Rp X.XXX.XXX" dengan thousand separator | P0 |
| PL-04 | Sale Badge | Label "Sale" jika ada compare_at_price | P1 |
| PL-05 | Sort Options | Default, Price (Low-High, High-Low), Best Selling | P1 |
| PL-06 | Filter | Filter by vendor (ResMed, BMC, Nox Medical, Yuwell) | P1 |
| PL-07 | Product Count | "X products" counter | P0 |
| PL-08 | Infinite Scroll / Pagination | Load more atau pagination | P1 |
| PL-09 | Quick View | Hover preview produk | P2 |

### 3.2 Product Detail Page

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| PD-01 | Image Gallery | Multiple gambar, thumbnail navigation, zoom | P0 |
| PD-02 | Product Title | Nama produk lengkap | P0 |
| PD-03 | Vendor Badge | "Vendor: ResMed" / "Vendor: BMC" etc. | P0 |
| PD-04 | Price | Regular price + Sale price (jika ada) | P0 |
| PD-05 | Variant Selection | Pilihan ukuran/warna (jika ada) | P0 |
| PD-06 | Quantity Selector | Pilih jumlah | P0 |
| PD-07 | Add to Cart | Tombol "Add to Cart" | P0 |
| PD-08 | Buy Now | Tombol "Buy It Now" (skip cart) | P0 |
| PD-09 | Description | Deskripsi produk lengkap (HTML) | P0 |
| PD-10 | Specifications | Spesifikasi teknis dalam table/list | P1 |
| PD-11 | Reviews | Rating bintang + review (jika ada) | P1 |
| PD-12 | Related Products | 4 produk terkait | P1 |
| PD-13 | Share Buttons | Share ke WhatsApp, Facebook, Copy Link | P1 |
| PD-14 | Ask via WhatsApp | Tombol "Tanya Produk ini" → WhatsApp | P0 |

### 3.3 Cart

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| CT-01 | Cart Drawer/Page | Slide-out cart atau halaman cart | P0 |
| CT-02 | Item List | Gambar, nama, variant, harga, quantity | P0 |
| CT-03 | Update Quantity | +/- button, manual input | P0 |
| CT-04 | Remove Item | Tombol hapus per item | P0 |
| CT-05 | Subtotal | Total per item + grand total | P0 |
| CT-06 | Shipping Estimate | Estimasi ongkir berdasarkan kota | P1 |
| CT-07 | Discount Code | Input kode voucher/diskon | P0 |
| CT-08 | Checkout Button | "Proceed to Checkout" | P0 |
| CT-09 | Continue Shopping | Tombol kembali ke collection | P0 |

### 3.4 Checkout

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| CK-01 | Contact Information | Email | P0 |
| CK-02 | Shipping Address | Nama, alamat, kota, kode pos, telepon | P0 |
| CK-03 | Shipping Method | JNE, J&T, GoSend, Grab | P0 |
| CK-04 | Payment Method | Credit Card, Bank Transfer, GoPay, OVO, Dana | P0 |
| CK-05 | Order Summary | Ringkasan item + total + ongkir | P0 |
| CK-06 | Place Order | Tombol "Complete Order" | P0 |
| CK-07 | Order Confirmation | Halaman terima kasih + nomor order | P0 |
| CK-08 | Email Confirmation | Email otomatis setelah order | P0 |
| CK-09 | WhatsApp Confirmation | Notifikasi WhatsApp ke customer | P1 |

### 3.5 Bundle Deals

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| BD-01 | Bundle Product Type | Shopify Bundle App atau custom | P0 |
| BD-02 | Bundle Pricing | Harga bundle < total satuan | P0 |
| BD-03 | Bundle Display | Tampilkan harga individual vs bundle | P0 |
| BD-04 | Bundle Examples | CPAP + Mask bundle: Rp 16.5jt (vs Rp 17jt satuan) | P0 |
| BD-05 | Bundle Discount | Diskon 5–15% dari harga satuan | P0 |

### 3.6 Product Review

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| RV-01 | Star Rating | Rating 1–5 bintang | P1 |
| RV-02 | Written Review | Text review + nama | P1 |
| RV-03 | Photo Review | Upload foto (opsional) | P2 |
| RV-04 | Review Moderation | Moderasi sebelum publish | P1 |
| RV-05 | Review Aggregation | Average rating di product card | P1 |

---

## 4. Modul Sleep Test Services

### 4.1 Home Sleep Test (HST) Info Page

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| HST-01 | Title | "Home Sleep Test" | P0 |
| HST-02 | Description | "An Overnight Home Sleep Testing (HST) designed to evaluate sleep for suspecting OSA at comfort of your own home." | P0 |
| HST-03 | RPSGT Info | "Data analysed in Singapore by experience Certified Registered Polysomnography Technologist by AASM" | P0 |
| HST-04 | RPSGT Definition | Penjelasan什么是RPSGT | P0 |
| HST-05 | Report Content | 6 parameter yang diukur: Breathing effort, Respiratory events, O2 saturation, Pulse rate, Position, Snoring | P0 |
| HST-06 | Process Flow | 5 langkah visual | P0 |
| HST-07 | Report Timeline | "Sleep Report will be ready in 7 working days" | P0 |

### 4.2 HST Process Flow

| Langkah | FR | Deskripsi | Prioritas |
|---------|-----|-----------|-----------|
| 1 | HST-P1 | Contact via WhatsApp/Email → "How do I book a Sleep Test" | P0 |
| 2 | HST-P2 | Schedule Date & Time → "On Sleep Test evening, Technical arrived at your home to set up (takes about 30mins)" | P0 |
| 3 | HST-P3 | Collection of Equipment & Data → "Technical will return the next morning to collect device" | P0 |
| 4 | HST-P4 | "Data will be sent for analysis in Singapore by RPSGT" | P0 |
| 5 | HST-P5 | "Report will be ready in 7 working days" | P0 |

### 4.3 HST Booking Form

| ID | FR | Field | Tipe | Validasi | Prioritas |
|----|-----|-------|------|----------|-----------|
| HB-01 | Nama Lengkap | text | wajib | P0 |
| HB-02 | Email | email | wajib | P0 |
| HB-03 | No. Telepon | tel | wajib | P0 |
| HB-04 | Alamat Lengkap (untuk teknisi) | textarea | wajib | P0 |
| HB-05 | Kota | text | wajib | P0 |
| HB-06 | Tanggal Test | date | wajib, minimal 3 hari | P0 |
| HB-07 | Jam Preferensi | radio | Sore (14-17), Malam (18-21) | P0 |
| HB-08 | Riwayat Medis | textarea | optional | P1 |
| HB-09 | Resume/Gambar | file | optional (max 5MB) | P2 |

### 4.4 In-Lab Sleep Diagnostic Pages

| ID | FR | Produk | Deskripsi | Prioritas |
|----|-----|--------|-----------|-----------|
| SL-01 | Nox A1s Page | Nox A1s Sleep Diagnostic System | Full PSG system, distributor eksklusif | P0 |
| SL-02 | Nox T3s Page | Nox T3s Level III | Portable sleep test | P1 |
| SL-03 | ApneaLink Air Page | ResMed ApneaLink Air Level III HST | Portable home screening | P1 |
| SL-04 | What is RPSGT | Halaman edukasi tentang RPSGT | "Why RPSGT is Important for my Sleep Test and CPAP" | P1 |
| SL-05 | Check Your Sleep | Produk: "1 Night Sleep Screening Test" | Rp produk, deskripsi, CTA | P0 |

---

## 5. Modul Therapy Services

### 5.1 Personalized Therapy

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| TH-01 | Halaman Info | Penjelasan "Why Auto CPAP needs personalized setting" | P0 |
| TH-02 | Problem Statement | "Auto CPAP is not a One Size Fit All Device" | P0 |
| TH-03 | Process | Cara personalized therapy dilakukan | P0 |
| TH-04 | CTA | Booking WhatsApp untuk personalized therapy | P0 |

### 5.2 Mask Fitting

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| MF-01 | Halaman Info | Penjelasan layanan mask fitting | P0 |
| MF-02 | Assessment Points | Facial anatomy, sleeping habits, breathing pattern, comfort preferences | P0 |
| MF-03 | Mask Options | Tampilkan semua tipe masker (Nasal, Nasal Pillow, Full Face) | P0 |
| MF-04 | CTA | Booking mask fitting via WhatsApp | P0 |

### 5.3 Therapy Data Review

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| TD-01 | Halaman Info | Penjelasan therapy data review & adjustment | P0 |
| TD-02 | Benefits | Monitor progress, identify issues early, ensure effective treatment | P0 |
| TD-03 | CTA | Booking review via WhatsApp | P0 |

### 5.4 Technical Support

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| TS-01 | Halaman Info | Penjelasan technical support | P0 |
| TS-02 | Service Types | Performance check, maintenance, cleaning | P0 |
| TS-03 | CTA | Booking service via WhatsApp | P0 |

---

## 6. Modul Blog

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| BG-01 | Article List | Daftar artikel dengan gambar, judul | P1 |
| BG-02 | Article Detail | Artikel lengkap dengan share buttons | P1 |
| BG-03 | Categories | Filter: Sleep Apnea, CPAP Tips, Health | P2 |
| BG-04 | Related Articles | 3 artikel terkait | P2 |

---

## 7. Modul WhatsApp Integration

### 7.1 Floating Action Button

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| WA-01 | Posisi | Pojok kanan bawah, fixed | P0 |
| WA-02 | Number | +62 811 1212 858 / +62 811 9113 330 | P0 |
| WA-03 | Animation | Pulse | P1 |

### 7.2 Pre-filled Messages

| Konteks | Template Pesan | Prioritas |
|---------|---------------|-----------|
| Umum | "Halo CPAPIndo, saya ingin bertanya tentang produk dan layanan Anda." | P0 |
| Produk | "Halo, saya tertarik dengan {nama_produk}. Mohon informasi harga dan spesifikasi." | P0 |
| Bundle | "Halo, saya tertarik dengan bundle deal {nama_bundle}. Mohon informasi." | P0 |
| HST | "Halo, saya ingin booking Home Sleep Test. Mohon informasi jadwal dan harga." | P0 |
| PSG | "Halo, saya ingin melakukan Sleep Diagnostic Test. Mohon informasi." | P0 |
| Mask Fitting | "Halo, saya ingin melakukan Mask Fitting. Mohon jadwal." | P0 |
| Service | "Halo, saya ingin servis/maintenance alat CPAP saya. Mohon informasi." | P0 |
| Personalized Therapy | "Halo, saya ingin konsultasi Personalized Therapy untuk alat CPAP saya." | P0 |

---

## 8. Modul Customer Account (Shopify)

| ID | FR | Deskripsi | Prioritas |
|----|-----|-----------|-----------|
| CA-01 | Register/Login | Email + password registration | P0 |
| CA-02 | Order History | Daftar pesanan sebelumnya | P0 |
| CA-03 | Order Detail | Detail pesanan + tracking | P0 |
| CA-04 | Reorder | "Buy Again" untuk repeat purchase | P1 |
| CA-05 | Addresses | Simpan beberapa alamat | P1 |
| CA-06 | Wishlist | Simpan produk favorit | P2 |
| CA-07 | Profile | Update data diri | P1 |

---

## 9. Aturan Bisnis (Business Rules)

| ID | Aturan | Deskripsi |
|----|--------|-----------|
| BR-01 | Harga Rp Format | Semua harga ditampilkan dalam format "Rp X.XXX.XXX" |
| BR-02 | Bundle Discount | Bundle harus lebih murah dari total satuan (min 5%) |
| BR-03 | HST Booking | Minimal 3 hari sebelum tanggal test |
| BR-04 | HST Coverage | HST hanya tersedia di area Jabodetabek (untuk teknisi) |
| BR-05 | Report Timeline | HST report ready in 7 working days |
| BR-06 | Free Shipping | Gratis ongkir untuk pembelian > Rp 5 juta (opsional) |
| BR-07 | Return Policy | Return dalam 7 hari untuk produk belum dipakai |
| BR-08 | Warranty | Garansi sesuai kebijakan manufacturer |
| BR-09 | Bundle Minimum | Bundle harus minimal 2 produk |
| BR-10 | Vendor Display | Setiap produk harus tampilkan vendor (ResMed/BMC/Nox/Yuwell) |

---

## 10. Skenario Penggunaan (Use Cases)

### UC-01: Pengunjung Membeli CPAP Bundle
```
Actor: Pengunjung
Precondition: Membuka homepage
Main Flow:
  1. Pengunjung melihat Bundle Deal section
  2. Pengunjung mengklik bundle "BMC M1 Mini + BMC P6s Nasal Pillow Mask"
  3. Sistem menampilkan product detail: harga bundle Rp 16.5jt (vs Rp 17jt satuan)
  4. Pengunjung mengklik "Add to Cart"
  5. Cart drawer terbuka, menampilkan item
  6. Pengunjung mengklik "Proceed to Checkout"
  7. Pengunjung mengisi alamat & memilih pengiriman
  8. Pengunjung memilih pembayaran (GoPay)
  9. Pengunjung mengklik "Complete Order"
  10. Sistem menampilkan order confirmation
  11. Sistem mengirim email + WhatsApp confirmation
Postcondition: Order tersimpan, customer ter-notifikasi
```

### UC-02: Pasien Booking Home Sleep Test
```
Actor: Pasien
Precondition: Membuka halaman HST
Main Flow:
  1. Pasien membaca penjelasan HST
  2. Pasien memahami proses 5 langkah
  3. Pasien mengklik "Book a Home Sleep Test"
  4. Form booking muncul
  5. Pasien mengisi: nama, telepon, alamat, tanggal
  6. Pasien submit form
  7. Sistem konfirmasi via WhatsApp
  8. Tim CPAPINDO menghubungi untuk konfirmasi jadwal
  9. Teknisi datang ke rumah (30 menit setup)
  10. Teknisi kembali pagi untuk mengambil alat
  11. Data dikirim ke Singapura untuk analisa RPSGT
  12. Report ready dalam 7 working days
Postcondition: HST completed, report delivered
```

### UC-03: Pengguna Repeat Purchase Filter
```
Actor: Repeat Customer (sudah punya akun)
Precondition: Login ke akun
Main Flow:
  1. Pengguna login
  2. Pengguna klik "Buy Again" di order history
  3. Sistem tampilkan item sebelumnya (filter, cushion)
  4. Pengguna pilih item yang ingin dibeli lagi
  5. Item masuk cart → checkout
Postcondition: Repeat order tersimpan
```

---

## 11. Aturan Error Handling

| Error | Pesan | Aksi |
|-------|-------|------|
| Cart kosong | "Your cart is empty" | Redirect ke collection |
| Stok habis | "Out of Stock" | Disable Add to Cart, notify "Available soon" |
| Payment gagal | "Payment failed. Please try again." | Retry button |
| HST date invalid | "Please select a date at least 3 days from now" | Highlight field |
| WhatsApp gagal | "Gagal membuka WhatsApp. Hubungi: +62 811 1212 858" | Tampilkan nomor |
| Shipping unavailable | "Shipping not available for this area" | Tampilkan alternatif |

---

## 12. Glossary

| Istilah | Definisi |
|---------|----------|
| HST | Home Sleep Test — pemeriksaan tidur di rumah |
| PSG | Polysomnography — pemeriksaan tidur lengkap di lab |
| RPSGT | Registered Polysomnographic Technologist |
| OSA | Obstructive Sleep Apnea |
| CPAP | Continuous Positive Airway Pressure |
| BiPAP | Bilevel Positive Airway Pressure |
| AHI | Apnea-Hypopnea Index |
| Nox A1s | Sistem diagnostik tidur dari Nox Medical |
| Bundle Deal | Paket bundling CPAP + Masker dengan harga diskon |
| Personalized Therapy | Kustomisasi setting CPAP untuk setiap pasien |
| Mask Fitting | Assessment untuk menentukan masker terbaik |
| Therapy Data Review | Monitoring dan optimasi data penggunaan CPAP |
