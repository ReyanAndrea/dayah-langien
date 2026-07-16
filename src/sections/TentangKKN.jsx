import kegiatan01 from '../assets/foto/kegiatan/kegiatan01.jpg'
import kegiatan02 from '../assets/foto/kegiatan/kegiatan02.jpg'
import kegiatan03 from '../assets/foto/kegiatan/kegiatan03.jpg'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import fotoReyan from '../assets/foto/tim/tim-01-reyan-andrea.jpeg'
import fotoGhina from '../assets/foto/tim/tim-02-ghina.jpg'
import fotoDara from '../assets/foto/tim/tim-03-dara.jpg'
import fotoGusni from '../assets/foto/tim/tim-04-gusni.jpg'
import fotoEka from '../assets/foto/tim/tim-05-eka.jpg'
import fotoShaifa from '../assets/foto/tim/tim-06-shaifa.jpg'
import fotoMursalin from '../assets/foto/tim/tim-07-mursalin.jpg'

const dokumentasi = [
  { src: kegiatan01, caption: 'Dokumentasi kegiatan 1' },
  { src: kegiatan02, caption: 'Dokumentasi kegiatan 2' },
  { src: kegiatan03, caption: 'Dokumentasi kegiatan 3' },
]

const dpl = [
  { nama: 'Trisda Kurniawan, S.P., M.P.', peran: 'DPL 1' },
  { nama: 'Edy Miswar, S.Si., M.Si.', peran: 'DPL 2 / Kosi' },
]

const anggota = [
  { nama: 'Reyan Andrea', nim: '2208107010014', prodi: 'Informatika', foto: fotoReyan },
  { nama: 'Ghinaya Ananda', nim: '2304110010039', prodi: 'Perencanaan Wilayah dan Kota', foto: fotoGhina },
  { nama: 'Dara Nabila', nim: '2310104010077', prodi: 'Ilmu Pemerintahan', foto: fotoDara },
  { nama: 'Gusni Sapriyanti', nim: '2305109010032', prodi: 'Proteksi Tanaman', foto: fotoGusni },
  { nama: 'Shaifa Rahmadina', nim: '2312101010123', prodi: 'Ilmu Keperawatan', foto: fotoShaifa },
  { nama: 'Eka Ramadani', nim: '2305104010026', prodi: 'Peternakan', foto: fotoEka },
  { nama: 'Mursalin', nim: '2206101020006', prodi: 'Pendidikan Sejarah', foto: fotoMursalin },
]

const programAnggota = [
  { nama: 'Reyan Andrea', kegiatan: ['Sistem Informasi Website Profil Gampong', 'Modul Informasi Kebencanaan pada Website', 'Pelatihan Dasar Microsoft Word untuk Anak-anak'] },
  { nama: 'Ghinaya Ananda', kegiatan: ['Peta Administrasi Wilayah Gampong (ArcGIS)', 'Peta Jalur Evakuasi Bencana', 'Sosialisasi Cara Membaca Peta Evakuasi'] },
  { nama: 'Dara Nabila', kegiatan: ['Papan Informasi Pengelolaan Sampah & Kebersihan', 'Pendampingan Administrasi Data Kependudukan'] },
  { nama: 'Gusni Sapriyanti', kegiatan: ['Perangkap Feromon Seks (Pengendalian Hama)', 'Penanaman Tanaman Refugia', 'Edukasi Serangga Sahabat & Musuh Tanaman'] },
  { nama: 'Shaifa Rahmadina', kegiatan: ['Sosialisasi 6 Langkah Cuci Tangan Pakai Sabun', 'Edukasi Gizi Seimbang "Isi Piringku"'] },
  { nama: 'Eka Ramadani', kegiatan: ['Biosekuriti Peternakan', 'Penyuntikan Vitamin Ternak Ruminansia', 'Penanaman TOGA'] },
  { nama: 'Mursalin', kegiatan: ['Lomba Permainan Tradisional', 'Edukasi Kebencanaan untuk Anak-anak'] },
]

const kegiatanBersama = [
  'Pengajian Mingguan di Meunasah',
  'Gotong Royong Meunasah',
  'Jalan Pagi Bersama Warga',
  'Pendampingan Pemasaran UMKM Desa',
  'Partisipasi dalam Kegiatan Posyandu',
]

const fases = [
  { tanggal: '27 Juni 2026', label: 'Survei Lokasi', desc: 'Survei DPL ke Gampong Dayah Langien untuk pemetaan awal kondisi desa.' },
  { tanggal: '8 - 14 Juli', label: 'Minggu 1', desc: 'Pembukaan KKN dan dimulainya program utama tiap anggota.' },
  { tanggal: '15 - 21 Juli', label: 'Minggu 2', desc: 'Pengembangan program utama & pelaksanaan program penunjang.' },
  { tanggal: '22 - 28 Juli', label: 'Minggu 3', desc: 'Kolaborasi dengan BPBD/Kecamatan, gotong royong, dan pendampingan UMKM.' },
  { tanggal: '29 Jul - 3 Agu', label: 'Minggu 4', desc: 'Simulasi evakuasi, evaluasi program, dan penyusunan laporan akhir.' },
]

function getInitials(nama) {
  return nama.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

const tabs = [
  { key: 'tim', label: 'Tim' },
  { key: 'program', label: 'Program Kerja' },
  { key: 'dokumentasi', label: 'Dokumentasi' },
  { key: 'timeline', label: 'Timeline' },
]

export default function TentangKKN() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState('tim')
  const contentRef = useRef(null)

  useGSAP(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.4,
      ease: 'power2.out',
    })
  }, { dependencies: [activeTab], scope: sectionRef })

  return (
    <section ref={sectionRef} id="tentang-kkn" className="relative py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Di Balik Website Ini
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            KKN R-XXIX-14
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Website ini didokumentasikan oleh Kelompok KKN Reguler R-XXIX-14
            Universitas Syiah Kuala selama bertugas di Gampong Dayah Langien,
            Juli-Agustus 2026.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === t.key
                ? 'bg-gold-500 text-navy-900'
                : 'text-navy-100 border border-navy-300/20 hover:border-gold-500/40'
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div ref={contentRef}>
          {activeTab === 'tim' && (
            <div>
              <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto">
                {dpl.map((d) => (
                  <div key={d.nama} className="bg-navy-900/60 border border-gold-500/20 rounded-xl p-5 text-center">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-2">
                      <span className="font-heading text-sm font-bold text-gold-500">{getInitials(d.nama)}</span>
                    </div>
                    <h4 className="font-heading text-sm font-semibold text-white">{d.nama}</h4>
                    <p className="text-xs text-navy-300">{d.peran}</p>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {anggota.map((a) => (
                  <div key={a.nim} className="group relative rounded-2xl overflow-hidden bg-navy-900 border border-navy-300/10 hover:border-gold-500/40 transition-colors">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      {a.foto ? (
                        <img src={a.foto} alt={a.nama} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 flex items-center justify-center">
                          <span className="font-heading text-3xl font-bold text-gold-500/80">{getInitials(a.nama)}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h4 className="font-heading text-sm font-semibold text-white leading-tight">{a.nama}</h4>
                        <p className="text-xs text-gold-500">{a.prodi}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'program' && (
            <div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                {programAnggota.map((org) => (
                  <div key={org.nama} className="bg-navy-900/60 border border-navy-300/10 hover:border-gold-500/30 rounded-xl p-6 transition-colors">
                    <h4 className="font-heading text-base font-semibold text-white mb-3">{org.nama}</h4>
                    <ul className="space-y-2">
                      {org.kegiatan.map((k) => (
                        <li key={k} className="flex items-start gap-2 text-sm text-navy-100 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-6 text-center">Kegiatan Bersama Kelompok</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {kegiatanBersama.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-navy-900/40 rounded-lg px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                    <span className="text-sm text-navy-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'dokumentasi' && (
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {dokumentasi.map((item, i) => (
                <div key={i} className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/60 transition-colors duration-300 flex items-end p-4">
                    <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="max-w-3xl mx-auto relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500 via-gold-500/50 to-transparent" />
              <div className="space-y-8">
                {fases.map((fase) => (
                  <div key={fase.label} className="relative">
                    <span className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-gold-500 ring-4 ring-navy-800" />
                    <span className="inline-block text-xs font-medium text-gold-500 bg-gold-500/10 rounded-full px-3 py-1 mb-2">{fase.tanggal}</span>
                    <h4 className="font-heading text-base font-semibold text-white mb-1">{fase.label}</h4>
                    <p className="text-sm text-navy-100 leading-relaxed">{fase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
