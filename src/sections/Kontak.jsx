import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const kontak = [
  {
    label: 'Keuchik Gampong',
    nama: 'M. Adam',
    value: '0852-8854-8302',
  },
  {
    label: 'Sekretaris Desa',
    nama: 'Mukhtar',
    value: '0822-1978-1513',
  },
  {
    label: 'Lokasi',
    nama: 'Gampong Dayah Langien',
    value: 'Kec. Bandar Baru, Kab. Pidie Jaya, Aceh',
  },
]

export default function Kontak() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.kontak-card', {
        scrollTrigger: {
          trigger: '.kontak-grid',
          start: 'top 80%',
        },
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
    <section
      ref={sectionRef}
      id="kontak"
      className="relative py-24 bg-navy-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Hubungi Kami
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Kontak
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Informasi kontak Gampong Dayah Langien, Kecamatan Bandar Baru,
            Kabupaten Pidie Jaya.
          </p>
        </div>

        <div className="kontak-grid grid sm:grid-cols-3 gap-5">
          {kontak.map((item) => (
            <div
              key={item.label}
              className="kontak-card bg-navy-800/60 border border-navy-300/10 hover:border-gold-500/30 rounded-xl p-6 text-center transition-colors"
            >
              <span className="inline-block text-xs font-medium text-gold-500 uppercase tracking-wide mb-3">
                {item.label}
              </span>
              <h4 className="font-heading text-base font-semibold text-white mb-1">
                {item.nama}
              </h4>
              <p className="text-sm text-navy-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
