# Website Profil Gampong Dayah Langien

Website dokumentasi profil desa dan program kerja KKN Reguler R-XXIX-14 Universitas Syiah Kuala di Gampong Dayah Langien, Kecamatan Bandar Baru, Kabupaten Pidie Jaya, Aceh.

**Live site:** https://dayah-langien-8v3vedpaq-reyanandreas-projects.vercel.app

## Tujuan

Website ini dibangun sebagai **dokumentasi "time capsule"** — bukan situs desa yang butuh maintenance rutin, melainkan referensi statis yang bisa dijadikan acuan oleh kelompok KKN periode berikutnya yang ditempatkan di gampong yang sama.

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (CSS-based theming via `@theme`, bukan `tailwind.config.js`)
- **GSAP** + `@gsap/react` (animasi scroll-trigger)
- Hosting: **Vercel**

## Struktur Folder
src/
├── assets/foto/
│   ├── tim/          # foto anggota KKN
│   ├── kegiatan/      # dokumentasi kegiatan KKN
│   └── desa/          # foto sarana-prasarana & suasana desa (belum terisi)
├── sections/           # 1 section = 1 komponen halaman
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TentangDesa.jsx
│   ├── SejarahDesa.jsx
│   ├── Potensi.jsx
│   ├── SaranaPrasarana.jsx
│   ├── Kebencanaan.jsx
│   ├── StrukturGampong.jsx
│   ├── Galeri.jsx        # foto desa (belum terisi)
│   ├── Kontak.jsx
│   ├── TentangKKN.jsx    # tab Tim & Dokumentasi kegiatan KKN
│   └── Footer.jsx
├── App.jsx              # urutan section dirender di sini
├── main.jsx              # entry point, registrasi GSAP ScrollTrigger
└── index.css             # import Tailwind + palette warna navy-gold

## Cara Menjalankan

```bash
npm install
npm run dev
```

## Cara Menambah Foto

1. Taro file foto di folder yang sesuai (`src/assets/foto/desa/`, dll)
2. Import di komponen terkait: `import namaFoto from '../assets/foto/desa/nama-file.jpg'`
3. Pasang ke field `foto`/`src` di data array komponen tersebut

**Penting:** compress foto sebelum upload (target di bawah 300-500 KB), pakai [squoosh.app](https://squoosh.app) atau [tinypng.com](https://tinypng.com) — foto besar bikin website lambat dimuat.

## Catatan untuk KKN Periode Selanjutnya

- Bagian **belum terisi**: foto Galeri desa, foto Sarana & Prasarana per fasilitas, foto Keuchik & Sekdes di Struktur Gampong
- Data profil desa (geografis, demografi, sejarah, potensi) diambil dari laporan survei DPL dan proposal KKN R-XXIX-14 — update sesuai kondisi terbaru kalau ada perubahan
- Struktur section modular (1 file = 1 section), gampang nambah/hapus section baru lewat `App.jsx`
- Warna tema (navy-gold) didefinisikan di `src/index.css` bagian `@theme`, ganti di situ kalau mau ubah skema warna

## Kelompok KKN R-XXIX-14

Dosen Pembimbing Lapangan: Trisda Kurniawan, S.P., M.P. & Edy Miswar, S.Si., M.Si.

Anggota: Reyan Andrea (Informatika), Ghinaya Ananda (PWK), Dara Nabila (Ilmu Pemerintahan), Gusni Sapriyanti (Proteksi Tanaman), Shaifa Rahmadina (Ilmu Keperawatan), Eka Ramadani (Peternakan), Mursalin (Pendidikan Sejarah)