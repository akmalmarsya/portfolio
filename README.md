# Portofolio Digital - Akmal Rasya (Backend Developer)

Website portofolio profesional, modern, dan responsif dengan dukungan **Dual Theme (Dark & Light Mode)** yang dirancang khusus untuk personal branding sebagai **Backend Developer / Software Engineer**.

---

## 📁 Struktur Direktori

```text
portofolio/
├── index.html              # Halaman utama portofolio (Semantic HTML5 + Anti-FOUC Theme Script)
├── README.md               # Dokumentasi proyek & panduan deploy
└── assets/
    ├── css/
    │   └── style.css       # Desain Dual Theme (Dark & Light), Ultra-Responsif HP & Desktop
    └── js/
        └── main.js         # Theme toggle, filter proyek, drawer menu HP, copy email toast
```

---

## 📱 Responsivitas Mobile (Tampilan HP)

Website telah dioptimalkan secara mendalam untuk tampilan smartphone (HP):
- **Fluid Typography**: Menggunakan fungsi CSS `clamp()` sehingga ukuran heading dan teks menyesuaikan secara proporsional di layar HP kecil (360px) tanpa ada teks yang terpotong atau keluar batas.
- **Mobile Drawer Menu**: Navigasi hamburger mulus dengan tombol CTA *"Hubungi Saya"* yang mudah dijangkau satu tangan.
- **Terminal Code Window**: Kode PHP profil tertata rapi dan pas (*pixel-perfect*) tanpa scrollbar maupun teks terpotong.
- **Toast Notifikasi Presisi**: Pop-up notifikasi otomatis berada di tengah bawah layar HP.
- **Grid Fleksibel**: Grid kartu skill dan proyek otomatis beralih menjadi 1 kolom vertikal yang lapang di layar ponsel.

---

## ✉️ Informasi Kontak Resmi

- **Email:** `akmalrasya234@gmail.com`
- **GitHub:** `https://github.com/akmalmarsya/`
- **Student Page PENS:** `https://akmalrasya.it.student.pens.ac.id/`

---

## 🚀 Cara Membuka Website

### 1. Langsung Lewat Browser
Klik ganda (*double-click*) file `index.html` atau klik kanan > **Open with** > pilih browser (Google Chrome, Microsoft Edge, dll.).

### 2. Menggunakan Local Server (Opsional)
Jalankan di terminal/PowerShell:
```bash
python -m http.server 8000
```
Lalu buka [http://localhost:8000](http://localhost:8000).

---

## 🌐 Panduan Publikasi (Hosting Gratis)

### A. GitHub Pages
1. Jalankan perintah Git di folder `d:\Photos\portofolio`:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/akmalmarsya/portfolio.git
   git push -u origin main
   ```
2. Buka **Settings > Pages** pada repository GitHub, pilih source `Deploy from a branch`, branch `main`, folder `/ (root)`, lalu klik **Save**. Website Anda akan live di:
   `https://akmalmarsya.github.io/portfolio/`

### B. Student Page PENS
Unggah seluruh isi folder ini ke direktori web student page Anda di `akmalrasya.it.student.pens.ac.id`.
