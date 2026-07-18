# 🌾 Website Profil Gampong Dayah Langien

Website dokumentasi **Profil Gampong Dayah Langien** sekaligus dokumentasi **Program Kerja KKN Reguler R-XXIX-14 Universitas Syiah Kuala** yang dilaksanakan di **Gampong Dayah Langien, Kecamatan Bandar Baru, Kabupaten Pidie Jaya, Aceh**.

> Website ini dibuat sebagai **time capsule** (arsip digital) yang dapat dijadikan referensi oleh mahasiswa KKN pada periode berikutnya, sehingga informasi mengenai profil desa dan dokumentasi kegiatan tetap terdokumentasi dengan baik.

🌐 **Live Demo:**  
https://dayah-langien.vercel.app

---

# ✨ Tujuan Website

Website ini **bukan** dirancang sebagai website resmi desa yang memerlukan pembaruan berkala.

Tujuan utama website ini adalah:

- 📖 Mendokumentasikan profil Gampong Dayah Langien.
- 📸 Menyimpan dokumentasi kegiatan KKN R-XXIX-14.
- 🗂️ Menjadi arsip digital (*time capsule*) untuk kelompok KKN berikutnya.
- 💡 Menjadi referensi struktur website profil desa yang mudah dikembangkan.

---

# 🚀 Tech Stack

- ⚛️ React 19
- ⚡ Vite 8
- 🎨 Tailwind CSS v4
- 🎬 GSAP + @gsap/react
- ☁️ Vercel

---

# 📁 Struktur Folder

```text
src/
│
├── assets/
│   └── foto/
│       ├── tim/
│       ├── kegiatan/
│       └── desa/
│
├── sections/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TentangDesa.jsx
│   ├── SejarahDesa.jsx
│   ├── Potensi.jsx
│   ├── SaranaPrasarana.jsx
│   ├── Kebencanaan.jsx
│   ├── StrukturGampong.jsx
│   ├── Galeri.jsx
│   ├── Kontak.jsx
│   ├── TentangKKN.jsx
│   └── Footer.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 📦 Instalasi

Clone repository kemudian jalankan:

```bash
npm install
```

Menjalankan mode development:

```bash
npm run dev
```

Build untuk production:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

---

# 🖼️ Menambahkan Foto

1. Simpan foto pada folder yang sesuai.

```text
src/assets/foto/desa/
src/assets/foto/tim/
src/assets/foto/kegiatan/
```

2. Import gambar.

```javascript
import fotoDesa from "../assets/foto/desa/contoh.jpg";
```

3. Tambahkan pada data array atau komponen yang menggunakan gambar tersebut.

---

# ⚠️ Optimasi Gambar

Sebelum mengunggah foto, lakukan kompresi terlebih dahulu.

Rekomendasi:

- https://squoosh.app
- https://tinypng.com

Ukuran ideal gambar:

- **300–500 KB** per foto

Tujuannya agar website tetap ringan dan cepat dimuat.

---

# 📌 Catatan untuk Kelompok KKN Selanjutnya

Beberapa bagian website masih dapat dikembangkan, antara lain:

- 📷 Galeri foto desa.
- 🏢 Foto setiap sarana dan prasarana.
- 👤 Foto Keuchik dan Sekretaris Gampong pada bagian Struktur Pemerintahan.

Apabila terdapat perubahan data desa, silakan sesuaikan informasi berikut:

- Profil desa
- Data geografis
- Data demografi
- Sejarah desa
- Potensi desa
- Struktur pemerintahan

Website menggunakan konsep **modular component**, sehingga setiap section berada pada file yang terpisah di folder `sections/`.

Untuk menambah atau menghapus section, cukup mengubah urutan render pada file:

```text
src/App.jsx
```

---

# 🎨 Kustomisasi Tema

Seluruh warna utama menggunakan skema **Navy** dan **Gold**.

Konfigurasi tema berada pada:

```text
src/index.css
```

menggunakan fitur **@theme** milik Tailwind CSS v4.

---

# 👨‍💻 Kelompok KKN Reguler R-XXIX-14

### Dosen Pembimbing Lapangan

- Trisda Kurniawan, S.P., M.P.
- Edy Miswar, S.Si., M.Si.

### Mahasiswa

| Nama | Program Studi |
|------|---------------|
| Reyan Andrea | Informatika |
| Ghinaya Ananda | Perencanaan Wilayah dan Kota |
| Dara Nabila | Ilmu Pemerintahan |
| Gusni Sapriyanti | Proteksi Tanaman |
| Shaifa Rahmadina | Ilmu Keperawatan |
| Eka Ramadani | Peternakan |
| Mursalin | Pendidikan Sejarah |

---

# 📄 Lisensi

Website ini dibuat untuk keperluan dokumentasi kegiatan **KKN Reguler R-XXIX-14 Universitas Syiah Kuala**.

Seluruh dokumentasi dapat digunakan sebagai referensi akademik maupun pengembangan website profil desa berikutnya dengan tetap mencantumkan sumber apabila diperlukan.

---

<div align="center">

**KKN Reguler R-XXIX-14 Universitas Syiah Kuala**

*Gampong Dayah Langien, Kecamatan Bandar Baru, Kabupaten Pidie Jaya, Aceh*

2026

</div>