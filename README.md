# Amanin

Amanin adalah aplikasi web untuk mengecek tingkat keamanan sebuah situs sebelum diakses. Cukup masukkan alamat situs, dan Amanin akan memeriksa sertifikat SSL/TLS, header keamanan HTTP, serta potensi mixed content pada situs tersebut — lalu menampilkan hasilnya dalam bentuk skor 0-100 dan grade A sampai F yang mudah dipahami.

Project ini dibuat sebagai portofolio pribadi sekaligus sarana belajar full-stack development, mulai dari logika backend, desain antarmuka, hingga proses deployment.

## Latar Belakang

Di tengah maraknya situs phishing dan tidak aman, banyak pengguna internet awam yang kesulitan menilai apakah sebuah situs aman diakses atau tidak. Amanin hadir sebagai alat sederhana yang bisa dipakai siapa saja, tanpa perlu pengetahuan teknis, untuk mendapatkan gambaran cepat soal keamanan sebuah situs.

## Fitur

- **Cek Sertifikat SSL/TLS** — memverifikasi apakah sertifikat situs masih berlaku, siapa penerbitnya (Certificate Authority), dan berapa hari sisa masa berlakunya.
- **Cek Header Keamanan** — memeriksa keberadaan header HTTP penting seperti `Strict-Transport-Security`, `Content-Security-Policy`, `X-Frame-Options`, dan `X-Content-Type-Options`, yang berfungsi mencegah berbagai jenis serangan web.
- **Cek Mixed Content** — mendeteksi resource (gambar, script, dll) yang masih dimuat lewat HTTP pada halaman HTTPS, yang bisa menjadi celah keamanan.
- **Skor & Grade** — menggabungkan seluruh hasil pemeriksaan menjadi satu skor (0-100) dan grade (A-F), lengkap dengan legenda penjelasan arti tiap grade.
- **Riwayat Pemeriksaan** — setiap hasil pemeriksaan disimpan ke database untuk kebutuhan pencatatan dan analisis di kemudian hari.

## Tech Stack

**Frontend**
- React (Vite) — library UI dan build tool
- React Router — navigasi antar halaman (Intro, Beranda, Hasil)
- CSS custom — seluruh styling ditulis manual tanpa framework UI, dengan desain split-screen dan tema dark custom

**Backend**
- Node.js + Express — REST API
- PostgreSQL (Neon) — database untuk menyimpan riwayat pemeriksaan

**Konsep Teknis yang Diterapkan**
- Asynchronous programming (Promise, async/await, Promise.all untuk proses paralel)
- Regular expression untuk deteksi mixed content
- Environment variables untuk menyimpan kredensial sensitif
- CORS handling antara frontend dan backend
- Containerization dengan Docker

## Struktur Project

- **backend/**
  - **checks/**
    - `ssl.js` — pengecekan sertifikat SSL/TLS
    - `headers.js` — pengecekan header keamanan
    - `mixedContent.js` — pengecekan mixed content
  - `scoring.js` — logika penggabungan skor & grade
  - `db.js` — koneksi database
  - `server.js` — entry point API
  - `Dockerfile`
- **frontend/**
  - **src/**
    - `Intro.jsx` — halaman pembuka
    - `Beranda.jsx` — halaman input & form scan
    - `Hasil.jsx` — halaman hasil pemeriksaan
    - `Header.jsx` — komponen brand/logo
    - `App.css` — seluruh styling

## Cara Menjalankan di Lokal

Proyek ini terdiri dari dua bagian yang perlu dijalankan bersamaan di dua terminal berbeda: backend dan frontend.

### 1. Backend

Masuk ke folder backend dan install dependency:

`cd backend`
`npm install`

Buat file `.env` di dalam folder `backend`, isi dengan:

`DATABASE_URL=<connection_string_postgresql_kamu>`
`PORT=4000`

Jalankan server:

`npm run dev`

Backend akan berjalan di `http://localhost:4000`

### 2. Frontend

Buka terminal baru, lalu:

`cd frontend`
`npm install`
`npm run dev`

Frontend akan berjalan di `http://localhost:5173`

## Tentang Deployment

Backend project ini membutuhkan koneksi database dan environment variable, sehingga proses deployment sempat dieksplorasi ke beberapa platform (Render, Railway, dan Back4App Containers). Untuk saat ini, demo dijalankan secara lokal mengikuti langkah di atas. Tangkapan layar aplikasi dapat dilihat di bawah ini.

## Screenshot

<!-- Tempel screenshot atau GIF demo aplikasi di sini -->

## Rencana Pengembangan Selanjutnya

- Pengecekan blacklist/malware menggunakan Google Safe Browsing API
- Panel admin untuk melihat statistik dan riwayat pemeriksaan
- Deployment permanen ke hosting berbayar

## Kontak

Dibuat oleh Wahyuni Septianingsih
GitHub: [github.com/Wahyuniseptianingsih](https://github.com/Wahyuniseptianingsih)
