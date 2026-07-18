import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Cara nambah foto: import file foto di paling atas, lalu isi field `foto`
// Contoh:
// import fotoSD from '../assets/foto/desa/sarana-01-sdn26.jpg'
// lalu tambahin: foto: fotoSD,  di item yang sesuai

const fasilitas = [
  { nama: 'SD Negeri 26 Bandar Baru', kategori: 'Pendidikan', foto: null },
  { nama: 'TK Satu Atap Langien', kategori: 'Pendidikan', foto: null },
  { nama: 'Puskesmas Lueng Putu', kategori: 'Kesehatan', foto: null },
  { nama: 'Posyandu', kategori: 'Kesehatan', foto: null },
  { nama: 'Polindes / Polkesdes', kategori: 'Kesehatan', foto: null },
  { nama: 'Meunasah Dayah Langien', kategori: 'Ibadah', foto: null },
  { nama: 'Masjid Darussa\u2019adah Langien', kategori: 'Ibadah', foto: null },
  { nama: 'Balai Pertemuan Gampong', kategori: 'Umum', foto: null },
  { nama: 'Jalan Tuha Lada-Langien', kategori: 'Infrastruktur', foto: null },
]

export default function SaranaPrasarana() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.sarana-card', {
        scrollTrigger: { trigger: '.sarana-grid', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="sarana-prasarana" className="relative py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Fasilitas Gampong
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Sarana & Prasarana
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Fasilitas pendidikan, kesehatan, ibadah, dan infrastruktur yang
            mendukung kehidupan sehari-hari warga Gampong Dayah Langien.
          </p>
        </div>

        <div className="sarana-grid grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {fasilitas.map((f) => (
            <div key={f.nama} className="sarana-card bg-navy-800/60 border border-navy-300/10 hover:border-gold-500/30 rounded-xl overflow-hidden transition-colors">
              <div className="aspect-video bg-navy-700/50 flex items-center justify-center">
                {f.foto ? (
                  <img src={f.foto} alt={f.nama} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-navy-300">Foto belum ditambahkan</span>
                )}
              </div>
              <div className="p-4">
                <span className="inline-block text-xs font-medium text-gold-500 bg-gold-500/10 rounded-full px-3 py-1 mb-2">
                  {f.kategori}
                </span>
                <h4 className="font-heading text-sm font-semibold text-white">{f.nama}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
