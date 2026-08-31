# Business Requirements Document (BRD)
## Resindo Medika — resindo.com

**Versi Dokumen:** 1.0  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Business Analysis  
**Status:** Draft

---

## 1. Ringkasan Bisnis (Business Summary)

### 1.1 Profil Perusahaan
- **Nama Perusahaan:** PT Resindo Medika
- **Brand:** Resindo Medika
- **Domain:** resindo.com
- **Industri:** Klinik Gangguan Tidur & Distribusi Alat Kesehatan
- **Merek Didistribusikan:** ResMed, SOMNOmedics
- **Lokasi Kantor:** Lt.5, Jl. Gatot Subroto No.Kav. 23, Jakarta Selatan
- **Jam Operasional:** Senin–Jumat, 08.00–16.30 WIB
- **Kontak:** +62 (858) 8000 8259
- **Founder:** Alexander Ecker

### 1.2 Visi Bisnis
Menjadi klinik gangguan tidur terpercaya di Indonesia yang menggabungkan keahlian medis dengan teknologi modern untuk memberikan diagnosis akurat dan terapi personal bagi setiap pasien.

### 1.3 Misi Bisnis
1. Memberikan diagnosis gangguan tidur yang akurat menggunakan peralatan berstandar internasional.
2. Menyediakan akses mudah ke terapi CPAP/BiPAP berkualitas dari brand premium (ResMed).
3. Memberikan pelayanan personal — pasien bukan sekadar nomor antrian.
4. Mendidik masyarakat tentang pentingnya kesehatan tidur.
5. Bekerja sama dengan penyedia asuransi untuk aksesibilitas layanan.

---

## 2. Kebutuhan Bisnis (Business Needs)

### 2.1 Kebutuhan Utama

| ID | Kebutuhan | Urgensi | Dampak Bisnis |
|----|-----------|---------|---------------|
| BN-01 | Platform digital untuk menampilkan profil klinik & dokter | Tinggi | Membangun trust & credibility |
| BN-02 | Sistem booking konsultasi online | Tinggi | Mengurangi waktu respons, meningkatkan CSAT |
| BN-03 | Blog edukatif tentang sleep apnea | Sedang | SEO, brand awareness, edukasi pasien |
| BN-04 | Katalog produk digital | Sedang | Mempercepat proses seleksi produk |
| BN-05 | Bilingual support (ID & EN) | Sedang | Menjangkau expat & internasional pasien |
| BN-06 | Integrasi asuransi info | Sedang | Mengurangi hambatan biaya untuk pasien |

### 2.2 Kebutuhan Stakeholder

| Stakeholder | Kebutuhan | Kepuasan yang Diharapkan |
|-------------|-----------|-------------------------|
| **Founder (Alexander Ecker)** | Representasi profesional klinik | Website yang mencerminkan kualitas layanan |
| **Dokter / Tenaga Medis** | Profil terpampang, jadwal praktik | Pasien datang dengan informasi lengkap |
| **Pasien** | Informasi jelas, mudah booking | Booking online tanpa telepon |
| **Tim Sales/Marketing** | Leads berkualitas dari website | 100+ booking/bulan |
| **Mitra Asuransi** | Info cakupan layanan | Verifikasi asuransi mudah |
| **Konten Writer** | CMS untuk blog | Publish artikel mudah |

---

## 3. Analisis Stakeholder

### 3.1 Peta Stakeholder

```
                    Tinggi Pengaruh
                         │
          ┌──────────────┼──────────────┐
          │   FOUNDER    │   DOKTER     │
          │   (Keep      │   (Keep      │
          │   Satisfied) │   Satisfied) │
Tinggi    │              │              │
Kepentingan├──────────────┼──────────────┤
          │   MARKETING  │   PASIEN     │
          │   (Manage    │   (Manage    │
          │   Closely)   │   Closely)   │
          │              │              │
          └──────────────┼──────────────┘
                         │
                    Rendah Pengaruh
```

### 3.2 Rincian Stakeholder

| Stakeholder | Peran | Kepentingan | Pengaruh | Strategi Komunikasi |
|-------------|-------|-------------|---------|---------------------|
| Alexander Ecker | Founder & Approver | Tinggi | Tinggi | Briefing mingguan |
| Marketing Manager | Champion | Tinggi | Tinggi | Rapat sprint 2x/minggu |
| Dokter Spesialis | Medical Advisor | Tinggi | Tinggi | Review konten medis |
| Tim CS/Receptionis | User | Sedang | Sedang | Training SOP booking |
| Pasien | Beneficiary | Tinggi | Sedang | Survei kepuasan |
| Mitra Asuransi | Partner | Sedang | Sedang | Info sharing berkala |

---

## 4. Analisis Bisnis Saat Ini (As-Is Analysis)

### 4.1 Proses Bisnis Saat Ini
```
PASIEN ALAMI MASALAH TIDUR
        │
        ▼
CARI INFORMASI DI INTERNET
        │
        ▼
HUBUNGI VIA TELEPON/WA ← (Response time bervariasi)
        │
        ▼
DATANG KE KLINIK (Gatot Subroto)
        │
        ▼
KONSULTASI DENGAN DOKTER
        │
        ▼
SLEEP STUDY (In-Lab atau Home)
        │
        ▼
DIAGNOSA & REKOMENDASI TERAPI
        │
        ▼
TRIAL/RENTAL/BELI CPAP
        │
        ▼
SERVIS & KALIBRASI BERKALA
```

### 4.2 Peta Masalah
| No | Masalah | Dampak | Root Cause |
|----|---------|--------|------------|
| 1 | Booking hanya via telepon | Response time lambat | Tidak ada form online |
| 2 | Tidak ada info jadwal dokter online | Pasien datang tanpa jadwal | Belum ada fitur scheduling |
| 3 | Blog tidak terintegrasi dengan layanan | Low conversion dari konten | CMS terpisah |
| 4 | Tidak ada info asuransi online | Pasien ragu karena biaya | Belum ada partner asuransi page |
| 5 | Bilingual belum lengkap | Kehilangan pasien expat | Konten EN terbatas |

---

## 5. Analisis Bisnis Tujuan (To-Be Analysis)

### 5.1 Proses Bisnis Tujuan
```
PASIEN ALAMI MASALAH TIDUR
        │
        ▼
KUNJUNGI RESINDO.COM ← (Edukasi lengkap, bilingual)
        │
        ▼
BACA BLOG/ARTIKEL ← (Awareness & trust building)
        │
        ▼
CEK LAYANAN & ASURANSI ← (Informasi lengkap)
        │
        ▼
BOOKING KONSULTASI ONLINE ← (Form atau WhatsApp)
        │
        ├── Lanjut booking → Jadwal dikonfirmasi via WA
        │
        └── Butuh info → Chat WhatsApp langsung
                │
                ▼
KONSULTASI PERDANA ← (Special offer tersedia)
        │
        ▼
SLEEP STUDY (In-Lab atau Home)
        │
        ▼
DIAGNOSA & REKOMENDASI
        │
        ▼
TRIAL/RENTAL/BELI CPAP ← (Coba sebelum beli)
        │
        ▼
BIMBINGAN PENGGUNAAN ← (Mask fitting, therapy review)
        │
        ▼
MONITORING BERKALA ← (Therapy data review)
        │
        ▼
SERVIS & KALIBRASI ← (Tanpa reservasi)
```

### 5.2 Target Kinerja Bisnis

| Metrik | Saat Ini (Estimasi) | Target 6 Bulan | Target 12 Bulan |
|--------|---------------------|---------------|----------------|
| Booking online per bulan | 10–20 (telepon) | 100 | 200 |
| Leads dari website | N/A | 150/bulan | 300/bulan |
| Response time inquiry | 2–4 jam | < 1 jam | < 30 menit |
| Blog readers | N/A | 5.000/bulan | 10.000/bulan |
| Patient satisfaction (NPS) | 4.4 | 4.6 | 4.8 |
| New patient per bulan | Baseline | +40% | +80% |

---

## 6. Kebutuhan Regulasi & Kepatuhan

| ID | Regulasi | Persyaratan | Status |
|----|----------|-------------|--------|
| REG-01 | UU PDP No. 27/2022 | Consent data pribadi, hak hapus | Perlu implementasi |
| REG-02 | Permenkes No. 20/2019 | Pemasaran alat kesehatan | Sudah comply |
| REG-03 | Konsil Kedokteran | Profil dokter harus terverifikasi | Sudah comply |
| REG-04 | Pedoman IKP | Iklan kesehatan tidak menyesatkan | Perlu review konten |
| REG-05 | Hukum Kesehatan | Informed consent untuk sleep study | Sudah comply |

---

## 7. Model Bisnis & Revenue Stream

### 7.1 Alur Pendapatan
```
WEBSITE (Informasi + Edukasi + Trust)
        │
        ├── Blog (Free content) → SEO traffic → Awareness
        │
        ├── Booking Konsultasi (Free / Special Offer)
        │       │
        │       ▼
        │   KONSULTASI DOKTER ← (Rp 300–500rb)
        │       │
        │   ┌───┴───┐
        │   │       │
        │   ▼       ▼
        │ SLEEP   REKOMENDASI
        │ STUDY   LANGSUNG
        │ (Rp 3–5jt)  │
        │         │
        │         ▼
        │     BELI/SEWA CPAP ← (Rp 10–30jt)
        │         │
        │         ▼
        │     SERVIS & KALIBRASI ← (Recurring)
        │
        └── Direct inquiry via WhatsApp
```

### 7.2 Estimasi Revenue Impact

| Revenue Stream | Saat Ini | Target 12 Bulan | Kenaikan |
|----------------|---------|----------------|----------|
| Konsultasi Dokter | Baseline | +50% | Dari booking online |
| Sleep Study | Baseline | +40% | Dari awareness meningkat |
| Penjualan CPAP | Baseline | +35% | Dari leads digital |
| Sewa/Trial CPAP | Baseline | +60% | Dari promo trial |
| Servis & Kalibrasi | Baseline | +30% | Dari reminder & follow-up |
| **Total** | **Baseline** | **+42%** | **Dari digital channel** |

---

## 8. Analisis ROI

### 8.1 Investasi
| Item | Biaya | Waktu |
|------|-------|-------|
| Pengembangan website | Rp 113–176 juta | 3–6 bulan |
| Maintenance tahunan | Rp 20–30 juta/tahun | Ongoing |
| Marketing digital | Rp 8–15 juta/bulan | Ongoing |

### 8.2 Return (Estimasi 12 Bulan)
| Benefit | Estimasi Nilai |
|---------|---------------|
| Kenaikan revenue konsultasi | Rp 100–200 juta |
| Kenaikan revenue CPAP | Rp 200–400 juta |
| Pengurangan biaya CS (telepon) | Rp 30–50 juta |
| Pengurangan customer acquisition cost | Rp 75–150 juta |
| **Total Benefit** | **Rp 405–800 juta** |

### 8.3 ROI Calculation
- **Investasi Year 1:** Rp 230–366 juta
- **Return Year 1:** Rp 405–800 juta
- **ROI:** 76%–118%
- **Payback Period:** 5–8 bulan

---

## 9. Rencana Implementasi

### 9.1 Timeline

```
Bulan 1-2: ████████████ Core Development
  ├── Redesign homepage
  ├── Halaman layanan
  ├── Form booking
  ├── Bilingual system
  └── Integrasi WhatsApp

Bulan 3-4: ████████████ Content & Features
  ├── Blog/CMS
  ├── Katalog produk
  ├── Testimoni
  └── FAQ interaktif

Bulan 5-6: ████████████ Growth & Optimization
  ├── SEO optimization
  ├── A/B testing
  ├── Analytics dashboard
  └── CRM integration
```

---

## 10. Analisis Risiko Bisnis

| ID | Risiko | Probabilitas | Dampak | Mitigasi | Owner |
|----|--------|-------------|--------|----------|-------|
| BR-01 | Rendahnya booking online | Sedang | Tinggi | Promosi via WA, email reminder | Marketing |
| BR-02 | Artikel medis kontroversial | Rendah | Tinggi | Review dokter sebelum publish | Medical |
| BR-03 | Website down saat jam operasional | Sedang | Sedang | CDN, backup, monitoring | IT |
| BR-04 | Inkonsistensi konten bilingual | Sedang | Sedang | Translation workflow | Content |
| BR-05 | Pasien lebih suka telepon | Sedang | Rendah | Tetap sediakan nomor telepon | CS |

---

## 11. Strategi Diferensiasi

### 11.1 Keunggulan Kompetitif
| Aspek | Resindo Medika | Kompetitor |
|-------|---------------|------------|
| Dokter Spesialis | ✅ (Alexander Ecker) | Tidak selalu ada |
| Google Reviews | 4.4 (1000+) | Tidak ada data |
| Brand ResMed & SOMNOmedics | ✅ Distributor resmi | Philips / BMC |
| Bilingual (ID & EN) | ✅ | ID only |
| Asuransi Diterima | ✅ | Tidak semua |
| Servis Tanpa Reservasi | ✅ | Tersedia |
| Rental & Trial | ✅ | Tersedia |
| Trust Signals | Rating + Reviews + Doctor Profile | Terbatas |

### 11.2 Positioning
**"Klinik gangguan tidur terpercaya di Jakarta dengan dokter spesialis, peralatan modern, dan pelayanan personal — dari diagnosis hingga terapi jangka panjang."**

---

## 12. Kriteria Keterimaan Bisnis

| No | Kriteria | Metrik | Minimum |
|----|----------|--------|---------|
| 1 | Website accessible | Uptime | 99.5% |
| 2 | Booking system functional | Completion rate | > 80% |
| 3 | Leads terkualifikasi | Jumlah/bulan | 100 (6 bulan) |
| 4 | WhatsApp response time | Rata-rata | < 1 jam |
| 5 | Patient satisfaction | Rating Google | ≥ 4.5 |
| 6 | SEO ranking | "klinik sleep apnea Jakarta" | Top 5 |
| 7 | Mobile usability | Mobile-friendly test | Pass 100% |
| 8 | Bilingual completeness | All pages ID+EN | 100% |

---

## 13. Dokumen Pendukung

- [ ] Product Requirements Document (PRD)
- [ ] Functional Requirements Document (FRD)
- [ ] Technical Requirements Document (TRD)
- [ ] UI/UX Design Specification
- [ ] Content Strategy (ID & EN)
- [ ] SEO Strategy Plan
- [ ] Security & Privacy Assessment
- [ ] Testing Plan

---

## 14. Persetujuan (Approval)

| Role | Nama | Tanggal | Tanda Tangan |
|------|------|---------|-------------|
| Product Owner | _____________ | ___/___/2026 | _____________ |
| Founder (Alexander Ecker) | _____________ | ___/___/2026 | _____________ |
| Project Manager | _____________ | ___/___/2026 | _____________ |
| Medical Advisor | _____________ | ___/___/2026 | _____________ |
| IT Lead | _____________ | ___/___/2026 | _____________ |
