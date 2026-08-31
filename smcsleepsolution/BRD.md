# Business Requirements Document (BRD)
## SMC Sleep Solution — smcsleepsolution.com

**Versi Dokumen:** 1.0  
**Tanggal:** 31 Agustus 2026  
**Penulis:** Tim Business Analysis  
**Status:** Draft

---

## 1. Ringkasan Bisnis (Business Summary)

### 1.1 Profil Perusahaan
- **Nama Perusahaan:** PT SMC Global Distribusi
- **Brand:** SMC Sleep Solution
- **Domain:** smcsleepsolution.com
- **Industri:** Distribusi Alat Kesehatan — Sleep Apnea & Terapi Tidur
- **Merek Didistribusikan:** Philips Respironics (CPAP, BiPAP, Masker)
- **Lokasi:** Indonesia

### 1.2 Visi Bisnis
Menjadi distributor terpercaya dan solusi lengkap untuk Sleep Apnea di Indonesia, mulai dari edukasi → diagnostik → terapi → purna jual.

### 1.3 Misi Bisnis
1. Meningkatkan kesadaran masyarakat Indonesia tentang bahaya Sleep Apnea.
2. Menyediakan akses mudah ke layanan diagnostik tidur yang terstandarisasi.
3. Mendistribusikan produk CPAP/BiPAP Philips Respironics berkualitas tinggi.
4. Memberikan layanan purna jual komprehensif (servis, kalibrasi, sewa).

---

## 2. Kebutuhan Bisnis (Business Needs)

### 2.1 Kebutuhan Utama

| ID | Kebutuhan | Urgensi | Dampak Bisnis |
|----|-----------|---------|---------------|
| BN-01 | Platform digital untuk edukasi Sleep Apnea | Tinggi | Membangun brand awareness & trust |
| BN-02 | Sistem screening online yang mudah diakses | Tinggi | Mengkonversi pengunjung menjadi prospek |
| BN-03 | Katalog produk digital interaktif | Sedang | Mempercepat proses penjualan B2B |
| BN-04 | Saluran komunikasi langsung (WhatsApp) | Tinggi | Mengurangi waktu respons & meningkatkan CSAT |
| BN-05 | Tracking konversi dari digital | Sedang | Mengukur ROI investasi digital marketing |

### 2.2 Kebutuhan Stakeholder

| Stakeholder | Kebutuhan | Kepuasan yang Diharapkan |
|-------------|-----------|-------------------------|
| **Management** | Visibilitas pipeline leads dari website | Dashboard analytics bulanan |
| **Sales Team** | Prospek berkualitas (qualified leads) | 50+ leads/bulan dari screening |
| **Marketing** | Traffic organik & konten edukatif | Top 3 SEO untuk keyword target |
| **Customer Service** | Mengurangi beban telepon | 30% pengurangan inquiry via telepon |
| **Pasien** | Informasi yang mudah dipahami | Skor kepuasan > 4.5/5 |
| **Tenaga Medis** | Referensi produk yang akurat | Materi produk yang bisa diunduh |

---

## 3. Analisis Stakeholder

### 3.1 Peta Stakeholder

```
                    Tinggi Pengaruh
                         │
          ┌──────────────┼──────────────┐
          │   MANAGE     │   DOKTER     │
          │   (Keep      │   (Keep      │
          │   Satisfied) │   Satisfied) │
Tinggi    │              │              │
Kepentingan├──────────────┼──────────────┤
          │   SALES      │   PASIEN     │
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
| Direktur Utama | Approver | Tinggi | Tinggi | Briefing mingguan, dashboard |
| Marketing Manager | Champion | Tinggi | Tinggi | Rapat 2x/minggu, sprint review |
| Sales Manager | User | Tinggi | Sedang | Demo fitur, feedback session |
| Tim CS/Support | User | Sedang | Rendah | Training, SOP baru |
| Pasien/End User | Beneficiary | Tinggi | Sedang | Survei kepuasan, UX testing |
| Dokter Rujukan | Partner | Sedang | Tinggi | Konsultasi konten, co-branding |

---

## 4. Analisis Bisnis Saat Ini (As-Is Analysis)

### 4.1 Proses Bisnis Saat Ini
```
PASIEN KENALI GEJALA
        │
        ▼
CARI INFORMASI DI INTERNET ← (Kurangnya edukasi terstruktur)
        │
        ▼
HUBUNGI VIA TELEPON ← (Beban CS tinggi)
        │
        ▼
DATANG KE KLINIK/RUMAH SAKIT
        │
        ▼
DIAGNOSA (PSG)
        │
        ▼
DIREKOMENDASIKAN CPAP
        │
        ▼
BELI/SEWA CPAP
        │
        ▼
SERVIS & KALIBRASI BERKALA
```

### 4.2 Peta Masalah
| No | Masalah | Dampak | Root Cause |
|----|---------|--------|------------|
| 1 | Minimnya edukasi digital tentang Sleep Apnea | Prospek tidak aware | Tidak ada platform edukasi |
| 2 | Tidak ada screening online | Pasien tidak tahu risikonya | Belum dikembangkan |
| 3 | Katalog produk tidak interaktif | Proses penjualan lambat | Website statis |
| 4 | Komunikasi hanya via telepon | Response time lambat | Tidak ada chat integration |
| 5 | Tidak ada tracking digital | Tidak bisa ukur ROI marketing | Tidak ada analytics |

---

## 5. Analisis Bisnis Tujuan (To-Be Analysis)

### 5.1 Proses Bisnis Tujuan
```
PASIEN KENALI GEJALA
        │
        ▼
KUNJUNGI WEBSITE SMC ← (Edukasi interaktif & engaging)
        │
        ▼
LAKUKAN SCREENING ONLINE ← (STOP-BANG + ESS otomatis)
        │
        ▼
DAPAT HASIL RISIKO + REKOMENDASI ← (Personalisasi)
        │
        ├── Risiko Rendah → Tips kesehatan tidur
        │
        ├── Risiko Sedang → Disarankan konsultasi
        │
        └── Risiko Tinggi → Langsung booking + WhatsApp
                │
                ▼
KONSULTASI DENGAN DOKTER ← (Booking online)
                │
                ▼
DIAGNOSA (PSG/Home Sleep Test)
                │
                ▼
TERAPI CPAP/BiPAP ← (Rekomendasi produk personal)
                │
                ▼
MONITORING & PENDAMPINGAN ← (Follow-up via WhatsApp)
                │
                ▼
SERVIS & KALIBRASI BERKALA ← (Reminder otomatis)
```

### 5.2 Target Kinerja Bisnis

| Metrik | Saat Ini (Estimasi) | Target 6 Bulan | Target 12 Bulan |
|--------|---------------------|---------------|----------------|
| Leads per bulan | 10–20 (telepon) | 80 (digital) | 200 (digital) |
| Conversion screening→konsultasi | N/A | 5% | 8% |
| Response time inquiry | 2–4 jam | < 1 jam | < 30 menit |
| Customer acquisition cost | Rp 500rb | Rp 250rb | Rp 150rb |
| Customer lifetime value | Rp 5jt | Rp 7jt | Rp 10jt |
| Brand awareness (search volume) | Baseline | +50% | +150% |

---

## 6. Kebutuhan Regulasi & Kepatuhan

| ID | Regulasi | Persyaratan | Status |
|----|----------|-------------|--------|
| REG-01 | UU PDP No. 27/2022 | Consent untuk data pribadi, hak hapus data | Perlu implementasi |
| REG-02 | Permenkes No. 20/2019 | Label & pemasaran alat kesehatan | Perlu review konten |
| REG-03 | BPOM | Pendaftaran & label alat kesehatan | Sudah dimiliki (ijin distributor) |
| REG-04 | Pedoman IKP | Iklan kesehatan tidak boleh menyesatkan | Perlu review konten marketing |
| REG-05 | GDPR (jika target global) | Data protection untuk pengunjung asing | Fase lanjutan |

---

## 7. Model Bisnis & Revenue Stream

### 7.1 Alur Pendapatan
```
WEBSITE (Free)
    │
    ├── Screening Online (Free)
    │       │
    │       ▼
    │   Qualified Lead
    │       │
    ├───┬───┴───┬──────────┐
    │   │       │          │
    ▼   ▼       ▼          ▼
  Jual  Sewa  Servis    Konsultasi
  CPAP  CPAP  Kalibrasi  (Rujukan)
```

### 7.2 Estimasi Revenue Impact

| Revenue Stream | Saat Ini | Target 12 Bulan | Kenaikan |
|----------------|---------|----------------|----------|
| Penjualan CPAP | Baseline | +30% | Dari leads digital |
| Sewa CPAP | Baseline | +50% | Awareness meningkat |
| Servis & Kalibrasi | Baseline | +25% | Reminder & follow-up |
| **Total** | **Baseline** | **+35%** | **Dari digital channel** |

---

## 8. Analisis ROI

### 8.1 Investasi
| Item | Biaya | Waktu |
|------|-------|-------|
| Pengembangan website | Rp 92–155 juta | 3–6 bulan |
| Maintenance tahunan | Rp 15–25 juta/tahun | Ongoing |
| Marketing digital | Rp 5–10 juta/bulan | Ongoing |

### 8.2 Return (Estimasi 12 Bulan)
| Benefit | Estimasi Nilai |
|---------|---------------|
| Kenaikan revenue penjualan CPAP | Rp 150–300 juta |
| Pengurangan biaya CS (telepon) | Rp 20–40 juta |
| Pengurangan customer acquisition cost | Rp 50–100 juta |
| **Total Benefit** | **Rp 220–440 juta** |

### 8.3 ROI Calculation
- **Investasi Year 1:** Rp 170–265 juta (development + maintenance + marketing)
- **Return Year 1:** Rp 220–440 juta
- **ROI:** 29%–66%
- **Payback Period:** 7–10 bulan

---

## 9. Rencana Implementasi

### 9.1 Timeline

```
Bulan 1-2: ████████████ MVP Development
  ├── Desain UI/UX
  ├── Landing page
  ├── Screening tool
  └── Integrasi WhatsApp

Bulan 3-4: ████████████ Enhancement
  ├── Blog/artikel
  ├── Booking system
  └── Analytics setup

Bulan 5-6: ████████████ Optimization
  ├── SEO optimization
  ├── A/B testing
  ├── User feedback loop
  └── Performance tuning
```

### 9.2 Quick Wins (Minggu 1–2)
1. ✅ Optimasi WhatsApp Business (auto-reply, template pesan)
2. ✅ Google My Business setup/update
3. ✅ SEO audit & perbaikan on-page
4. ✅ Analytics tracking installation
5. ✅ Form screening MVP

---

## 10. Analisis Risiko Bisnis

| ID | Risiko | Probabilitas | Dampak | Mitigasi | Owner |
|----|--------|-------------|--------|----------|-------|
| BR-01 | Rendahnya traffic organik | Sedang | Tinggi | SEO strategy + paid ads | Marketing |
| BR-02 | Screening tidak digunakan | Rendah | Tinggi | UX testing + promosi | Product |
| BR-03 | Kompetitor (resindo/cpapindo) lebih advance | Sedang | Sedang | Fokus diferensiasi | Management |
| BR-04 | Regulasi alat kesehatan berubah | Rendah | Sedang | Monitoring berkala | Legal |
| BR-05 | Perubahan algoritma Google | Sedang | Sedang | Diversifikasi traffic source | Marketing |
| BR-06 | Keterbatasan budget marketing | Sedang | Sedang | Fokus organic + konten | Management |

---

## 11. Strategi Diferensiasi

### 11.1 Keunggulan Kompetitif
| Aspek | SMC Sleep Solution | Kompetitor |
|-------|-------------------|------------|
| Screening Online | ✅ GRATIS, 5 langkah mudah | ❌ Tidak ada / berbayar |
| Brand Philips Respironics | ✅ Distributor resmi | ResMed / BMC |
| Edukasi Mendalam | ✅ Konten terstruktur | Konten terbatas |
| Servis & Kalibrasi | ✅ In-house | Outsourced |
| Sewa CPAP | ✅ Tersedia | Tersedia |
| Personalized Follow-up | ✅ WhatsApp + data screening | Generic |

### 11.2 Positioning
**"Satu-satunya platform di Indonesia yang menyediakan screening Sleep Apnea GRATIS dengan rekomendasi langsung ke layanan diagnostik dan terapi CPAP Philips Respironics."**

---

## 12. Kriteria Keterimaan Bisnis

| No | Kriteria | Metrik | Minimum |
|----|----------|--------|---------|
| 1 | Website dapat diakses | Uptime | 99.5% |
| 2 | Screening tool berfungsi | Completion rate | > 70% |
| 3 | Leads terkualifikasi | Jumlah/bulan | 50 (6 bulan) |
| 4 | WhatsApp response time | Rata-rata | < 1 jam |
| 5 | User satisfaction | NPS Score | > 40 |
| 6 | SEO ranking | Keyword "sleep apnea Indonesia" | Top 10 |
| 7 | Mobile usability | Mobile-friendly test | Pass 100% |
| 8 | Legal compliance | Checklist PDP | 100% |

---

## 13. Dokumen Pendukung

- [ ] Product Requirements Document (PRD)
- [ ] Functional Requirements Document (FRD)
- [ ] Technical Requirements Document (TRD)
- [ ] UI/UX Design Specification
- [ ] Content Strategy Document
- [ ] SEO Strategy Plan
- [ ] Security & Privacy Assessment
- [ ] Testing Plan & Test Cases

---

## 14. Persetujuan (Approval)

| Role | Nama | Tanggal | Tanda Tangan |
|------|------|---------|-------------|
| Product Owner | _____________ | ___/___/2026 | _____________ |
| Business Sponsor | _____________ | ___/___/2026 | _____________ |
| Project Manager | _____________ | ___/___/2026 | _____________ |
| Medical Advisor | _____________ | ___/___/2026 | _____________ |
| IT Lead | _____________ | ___/___/2026 | _____________ |
