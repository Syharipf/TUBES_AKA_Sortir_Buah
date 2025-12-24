# 📦 Aplikasi Analisis Kompleksitas Algoritma Sorting Buah

## 📌 Deskripsi Proyek

Proyek ini merupakan **Tugas Besar Mata Kuliah Analisis Kompleksitas Algoritma**  
Program Studi **Rekayasa Perangkat Lunak – Telkom University**.

## 👥 Tim Pengembang

| Nama                         | NIM            | GitHub |
|------------------------------|----------------|--------|
| Syarif                       | 103022300094   | @syharipf |
| Muhammad Raihan Hidayatulloh | 103022330167   | @Hansss22 |

---

Aplikasi ini adalah aplikasi berbasis web yang digunakan untuk menganalisis dan memvisualisasikan kinerja algoritma sorting, khususnya Merge Sort, dalam mengurutkan data buah berdasarkan total harga (berat × harga per kg).

Pengujian dilakukan menggunakan:
- Merge Sort Iteratif
- Merge Sort Rekursif

Tujuannya adalah membandingkan efisiensi waktu eksekusi (runtime) pada berbagai ukuran data.

---

## 🎯 Tujuan Pengembangan

- Memahami implementasi algoritma Merge Sort
- Menganalisis kompleksitas waktu O(n log n)
- Membandingkan performa iteratif vs rekursif
- Menerapkan konsep algoritma dalam studi kasus nyata
- Melatih visualisasi data menggunakan grafik

---

## 🖥️ Fitur Aplikasi

- Tabel hasil sorting data buah
- Pengelompokan rak buah:
  - Murah
  - Sedang
  - Mahal
- Grafik runtime algoritma
- Penyimpanan data menggunakan LocalStorage

---

## 🛠️ Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript (ES6)
- Chart.js
- LocalStorage

---

## 📁 Struktur Folder

    project-root/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── algoritma.js
    │   ├── analysis.js
    │   ├── app.js
    │   ├── data.js
    │   ├── display.js
    │   ├── input.js
    │   └── utils.js
    ├── pages/
    │   ├── analysis.html
    │   ├── display.html
    │   └── input.html
    ├── README.md
    └── index.html

---

## 🧭 Alur Aplikasi

### 1. Input Data
- Pengguna memasukkan jenis buah dan berat
- Data disimpan ke LocalStorage

### 2. Display
- Data diurutkan menggunakan Merge Sort
- Ditampilkan dalam bentuk tabel
- Dikelompokkan ke rak:
  - Murah
  - Sedang
  - Mahal

### 3. Analysis
- Runtime algoritma dihitung berdasarkan data yang tersedia
- Grafik runtime ditampilkan hanya jika data tersedia
- Waktu eksekusi ditampilkan dalam milidetik (ms)

---

## 📊 Algoritma yang Dianalisis

### Merge Sort
- Versi Iteratif
- Versi Rekursif

### Kompleksitas Waktu
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n)

### Perbedaan Utama
- Versi rekursif memiliki overhead pemanggilan fungsi
- Versi iteratif lebih efisien pada data besar

---

## ▶️ Cara Menjalankan Aplikasi

### Opsi 1: Online
Buka aplikasi melalui GitHub Pages:  
https://syharipf.github.io/Analisis-Sortir-Buah/index.html

### Opsi 2: Lokal
1. Clone atau unduh repository
2. Buka file index.html di browser
3. Masukkan data buah
4. Navigasi ke:
   - Display untuk melihat hasil sorting
   - Analysis untuk melihat runtime dan grafik

---

## ⚠️ Catatan Penting

- Grafik runtime tidak akan muncul jika belum ada data
- Semua perhitungan dilakukan di sisi client (browser)
- Data akan terhapus jika LocalStorage di-reset
- Tidak memerlukan server atau database

---

## 👨‍🎓 Konteks Akademik

Proyek ini dikembangkan sebagai bagian dari penilaian Tugas Besar pada mata kuliah:

Analisis Kompleksitas Algoritma  
Program Studi Rekayasa Perangkat Lunak  
Telkom University
