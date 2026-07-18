import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const potensi = [
  {
    title: 'Pertanian & Perkebunan',
    desc: 'Padi dan palawija menjadi komoditas utama, didukung lahan subur dataran rendah pesisir (0-55 mdpl).',
  },
  {
    title: 'Peternakan',
    desc: 'Pemeliharaan sapi, kambing, dan unggas skala kecil-menengah sebagai sumber pendapatan tambahan warga.',
  },
  {
    title: 'Pendidikan Islam',
    desc: 'Pondok Pesantren Darussa\u2019adah (YPI Darussa\u2019adah Aceh Cabang Langien), salah satu jaringan dayah terbesar di Aceh.',
  },
  {
    title: 'Kearifan Lokal',
    desc: 'Nilai-nilai keislaman dan adat istiadat khas Aceh yang masih kuat dijunjung masyarakat.',
  },
]

export default function Potensi() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.potensi-card', {
        scrollTrigger: { trigger: '.potensi-grid', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="potensi" className="relative py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Ekonomi & Kearifan Lokal
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Potensi Desa
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Gampong Dayah Langien memiliki karakteristik desa pedesaan di
            dataran rendah pesisir, dengan potensi utama dari sektor
            pertanian, perkebunan, dan kearifan lokal masyarakat Aceh.
          </p>
        </div>

        <div className="potensi-grid grid sm:grid-cols-2 gap-5">
          {potensi.map((item) => (
            <div key={item.title} className="potensi-card bg-navy-900/40 border border-gold-500/10 hover:border-gold-500/30 rounded-xl p-6 transition-colors">
              <h4 className="font-heading text-lg font-semibold text-gold-500 mb-2">{item.title}</h4>
              <p className="text-sm text-navy-100 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
