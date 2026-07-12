import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fotoReyan from '../assets/foto/tim/tim-01-reyan-andrea.jpeg'

gsap.registerPlugin(ScrollTrigger)

const dpl = [
  { nama: 'Trisda Kurniawan, S.P., M.P.', peran: 'Dosen Pembimbing Lapangan (DPL) 1' },
  { nama: 'Edy Miswar, S.Si., M.Si.', peran: 'DPL 2 / Koordinator Kecamatan' },
]

const anggota = [
  { nama: 'Reyan Andrea', nim: '2208107010014', prodi: 'Informatika', fakultas: 'FMIPA', foto: fotoReyan },
  { nama: 'Ghinaya Ananda', nim: '2304110010039', prodi: 'Perencanaan Wilayah dan Kota', fakultas: 'Fakultas Teknik' },
  { nama: 'Dara Nabila', nim: '2310104010077', prodi: 'Ilmu Pemerintahan', fakultas: 'FISIP' },
  { nama: 'Gusni Sapriyanti', nim: '2305109010032', prodi: 'Proteksi Tanaman', fakultas: 'Fakultas Pertanian' },
  { nama: 'Shaifa Rahmadina', nim: '2312101010123', prodi: 'Ilmu Keperawatan', fakultas: 'Keperawatan' },
  { nama: 'Eka Ramadani', nim: '2305104010026', prodi: 'Peternakan', fakultas: 'Pertanian' },
  { nama: 'Mursalin', nim: '2206101020006', prodi: 'Pendidikan Sejarah', fakultas: 'KIP' },
]

function getInitials(nama) {
  return nama
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function TimAnggota() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.dpl-card', {
        scrollTrigger: { trigger: '.dpl-grid', start: 'top 85%' },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.anggota-profile-card', {
        scrollTrigger: { trigger: '.anggota-profile-grid', start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="tim-anggota" className="relative py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            KKN R-XXIX-14
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Tim KKN
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Kelompok R-XXIX-14 Gampong Dayah Langien, di bawah bimbingan
            Dosen Pembimbing Lapangan dari LPPM Universitas Syiah Kuala.
          </p>
        </div>

        {/* DPL */}
        <div className="dpl-grid grid sm:grid-cols-2 gap-5 mb-20 max-w-2xl mx-auto">
          {dpl.map((d) => (
            <div
              key={d.nama}
              className="dpl-card bg-navy-800/60 border border-gold-500/20 rounded-xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-3">
                <span className="font-heading text-lg font-bold text-gold-500">
                  {getInitials(d.nama)}
                </span>
              </div>
              <h4 className="font-heading text-base font-semibold text-white mb-1">
                {d.nama}
              </h4>
              <p className="text-xs text-navy-300">{d.peran}</p>
            </div>
          ))}
        </div>

        {/* Anggota */}
        <div className="anggota-profile-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {anggota.map((a) => (
            <div
              key={a.nim}
              className="anggota-profile-card group relative rounded-2xl overflow-hidden bg-navy-800 border border-navy-300/10 hover:border-gold-500/40 transition-colors duration-300"
            >
              {/* Foto / Monogram area */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {a.foto ? (
                  <img
                    src={a.foto}
                    alt={a.nama}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-gold-500)_1px,_transparent_1px)] [background-size:16px_16px]" />
                    <span className="font-heading text-4xl font-bold text-gold-500/80 relative z-10">
                      {getInitials(a.nama)}
                    </span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />

                {/* Nama & prodi di atas overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-heading text-base font-semibold text-white leading-tight mb-1">
                    {a.nama}
                  </h4>
                  <p className="text-xs text-gold-500 font-medium">{a.prodi}</p>
                </div>
              </div>

              {/* Detail bawah */}
              <div className="px-4 py-3 flex items-center justify-between border-t border-navy-300/10">
                <span className="text-xs text-navy-300">{a.fakultas}</span>
                <span className="text-xs text-navy-300 font-mono">{a.nim}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}