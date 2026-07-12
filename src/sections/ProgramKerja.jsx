import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const anggota = [
  {
    nama: 'Reyan Andrea',
    prodi: 'Informatika',
    kegiatan: [
      'Sistem Informasi Website Profil Gampong',
      'Modul Informasi Kebencanaan pada Website',
      'Pelatihan Dasar Microsoft Word untuk Anak-anak',
    ],
  },
  {
    nama: 'Ghinaya Ananda',
    prodi: 'Perencanaan Wilayah dan Kota',
    kegiatan: [
      'Peta Administrasi Wilayah Gampong (ArcGIS)',
      'Peta Jalur Evakuasi Bencana',
      'Sosialisasi Cara Membaca Peta Evakuasi',
    ],
  },
  {
    nama: 'Dara Nabila',
    prodi: 'Ilmu Pemerintahan',
    kegiatan: [
      'Papan Informasi Pengelolaan Sampah & Kebersihan',
      'Pendampingan Administrasi Data Kependudukan',
      'Papan Informasi Kegiatan & Anggaran Desa',
    ],
  },
  {
    nama: 'Gusni Sapriyanti',
    prodi: 'Proteksi Tanaman',
    kegiatan: [
      'Perangkap Feromon Seks (Pengendalian Hama)',
      'Penanaman Tanaman Refugia',
      'Edukasi Serangga Sahabat & Musuh Tanaman',
    ],
  },
  {
    nama: 'Shaifa Rahmadina',
    prodi: 'Ilmu Keperawatan',
    kegiatan: [
      'Sosialisasi 6 Langkah Cuci Tangan Pakai Sabun',
      'Edukasi Gizi Seimbang "Isi Piringku"',
      'Permainan Edukatif Kesehatan Anak',
    ],
  },
  {
    nama: 'Eka Ramadani',
    prodi: 'Peternakan',
    kegiatan: [
      'Biosekuriti Peternakan',
      'Penyuntikan Vitamin Ternak Ruminansia',
      'Penanaman TOGA (Tanaman Obat Keluarga)',
    ],
  },
  {
    nama: 'Mursalin',
    prodi: 'Pendidikan Sejarah',
    kegiatan: [
      'Lomba Permainan Tradisional',
      'Edukasi Kebencanaan untuk Anak-anak',
    ],
  },
]

const kegiatanBersama = [
  'Pengajian Mingguan di Meunasah',
  'Gotong Royong Meunasah',
  'Jalan Pagi Bersama Warga',
  'Pendampingan Pemasaran UMKM Desa',
  'Partisipasi dalam Kegiatan Posyandu',
]

export default function ProgramKerja() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.anggota-card', {
        scrollTrigger: {
          trigger: '.anggota-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })

      gsap.from('.bersama-item', {
        scrollTrigger: {
          trigger: '.bersama-grid',
          start: 'top 85%',
        },
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="program-kerja"
      className="relative py-24 bg-navy-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            KKN R-XXIX-14
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Program Kerja
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Rangkaian program kerja Kelompok R-XXIX-14, bagian dari tema besar
            "Penguatan Kapasitas Masyarakat Penanggulangan Bencana di Desa
            Dayah Langien" pasca Siklon Tropis Senyar.
          </p>
        </div>

        {/* Per anggota */}
        <div className="anggota-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {anggota.map((org) => (
            <div
              key={org.nama}
              className="anggota-card bg-navy-800/60 border border-navy-300/10 hover:border-gold-500/30 rounded-xl p-6 transition-colors"
            >
              <h4 className="font-heading text-lg font-semibold text-white mb-1">
                {org.nama}
              </h4>
              <span className="inline-block text-xs font-medium text-gold-500 bg-gold-500/10 rounded-full px-3 py-1 mb-4">
                {org.prodi}
              </span>
              <ul className="space-y-2">
                {org.kegiatan.map((k) => (
                  <li
                    key={k}
                    className="flex items-start gap-2 text-sm text-navy-100 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Kegiatan bersama */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-white mb-8 text-center">
            Kegiatan Bersama Kelompok
          </h3>
          <div className="bersama-grid grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {kegiatanBersama.map((item) => (
              <div
                key={item}
                className="bersama-item flex items-center gap-3 bg-navy-800/30 rounded-lg px-4 py-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                <span className="text-sm text-navy-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
