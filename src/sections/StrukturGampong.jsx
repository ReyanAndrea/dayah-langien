import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Buat pasang foto Keuchik: import file foto di paling atas, lalu isi field `foto`
// Contoh:
// import fotoKeuchik from '../assets/foto/desa/keuchik-m-adam.jpg'
// lalu tambahin: foto: fotoKeuchik,  di item Keuchik di bawah

const pimpinan = [
  { nama: 'M. Adam', jabatan: 'Keuchik', foto: null },
  { nama: 'Mukhtar', jabatan: 'Sekretaris Gampong', foto: null },
]

const unitKerja = [
  {
    title: 'Perangkat Gampong',
    items: ['Kaur (Urusan)', 'Kasi (Seksi)', 'Kepala Dusun'],
  },
  {
    title: 'Tuha Peut Gampong',
    subtitle: 'Setara BPD',
    items: ['Menyepakati Qanun Gampong', 'Menampung aspirasi masyarakat', 'Mengawasi kinerja Keuchik'],
  },
  {
    title: 'Lembaga Adat',
    items: ['Imum Mukim', 'Imum Gampong', 'Tuha Lapan', 'Peuetua Peut', 'Keujruen Blang'],
  },
  {
    title: 'Lembaga Kemasyarakatan (LKG)',
    items: ['PKK', 'Karang Taruna', 'LPM', 'BUMG'],
  },
]

function getInitials(nama) {
  return nama.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
}

export default function StrukturGampong() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.pimpinan-card', {
        scrollTrigger: { trigger: '.pimpinan-grid', start: 'top 85%' },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
      gsap.from('.unit-card', {
        scrollTrigger: { trigger: '.unit-grid', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="struktur-gampong" className="relative py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Struktur Gampong
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Pengurus & Kelembagaan
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Pemerintahan Gampong Dayah Langien diselenggarakan oleh Pemerintah
            Gampong bersama Tuha Peut Gampong, memadukan sistem administrasi
            nasional dengan struktur adat dan keistimewaan Aceh.
          </p>
        </div>

        {/* Pimpinan utama */}
        <div className="pimpinan-grid grid sm:grid-cols-2 gap-5 mb-6 max-w-xl mx-auto">
          {pimpinan.map((p) => (
            <div
              key={p.nama}
              className="pimpinan-card bg-gradient-to-br from-navy-800 to-navy-800/60 border border-gold-500/30 rounded-xl overflow-hidden text-center"
            >
              <div className="aspect-square w-full overflow-hidden bg-navy-700/50 flex items-center justify-center">
                {p.foto ? (
                  <img src={p.foto} alt={p.nama} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/40 flex items-center justify-center">
                    <span className="font-heading text-lg font-bold text-gold-500">
                      {getInitials(p.nama)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h4 className="font-heading text-base font-semibold text-white mb-1">
                  {p.nama}
                </h4>
                <p className="text-xs text-gold-500 uppercase tracking-wide">
                  {p.jabatan}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Garis penghubung visual */}
        <div className="flex justify-center mb-6">
          <div className="w-px h-8 bg-gold-500/30" />
        </div>

        {/* Unit kerja */}
        <div className="unit-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {unitKerja.map((u) => (
            <div
              key={u.title}
              className="unit-card bg-navy-800/60 border border-navy-300/10 hover:border-gold-500/30 rounded-xl p-5 transition-colors"
            >
              <h4 className="font-heading text-sm font-semibold text-white mb-1">
                {u.title}
              </h4>
              {u.subtitle && (
                <p className="text-xs text-gold-500 mb-3">{u.subtitle}</p>
              )}
              <ul className="space-y-1.5 mt-2">
                {u.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-navy-100">
                    <span className="w-1 h-1 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
