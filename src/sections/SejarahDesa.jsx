import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SejarahDesa() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.sejarah-block', {
        scrollTrigger: { trigger: '.sejarah-wrapper', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="sejarah-desa" className="relative py-24 bg-navy-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Asal-usul
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Sejarah Desa
          </h2>
        </div>

        <div className="sejarah-wrapper space-y-8">
          <div className="sejarah-block bg-navy-800/60 border border-navy-300/10 rounded-xl p-7">
            <h4 className="font-heading text-lg font-semibold text-gold-500 mb-3">
              Asal Nama "Langgien"
            </h4>
            <p className="text-sm text-navy-100 leading-relaxed">
              Nama "Langgien" atau "Langien" dalam tradisi penamaan di Aceh
              sering direkatkan dengan nama seorang pemuka agama, menandakan
              tempat kelahiran dan asal-usulnya — menunjukkan akar sejarah
              kuat gampong ini dalam perkembangan keislaman di Pidie Jaya.
            </p>
          </div>

          <div className="sejarah-block bg-navy-800/60 border border-gold-500/20 rounded-xl p-7">
            <h4 className="font-heading text-lg font-semibold text-gold-500 mb-3">
              Teungku Ahmad Khatib Langien
            </h4>
            <p className="text-sm text-navy-100 leading-relaxed mb-3">
              Gampong Dayah Langgien dikenal sebagai tempat kelahiran ulama
              kharismatik Aceh, Teungku Ahmad Khatib Langien (juga dikenal
              sebagai Syekh Muhammad Khatib Langgien atau Teungku Chiek Di
              Simpang), lahir di Cot Meuleuweuk, Gampong Lada, Langgien pada
              1176 H/1762 M dan wafat pada 1276 H/1859 M.
            </p>
            <p className="text-sm text-navy-100 leading-relaxed mb-3">
              Setelah menimba ilmu dari ayahnya, Teungku Malek Pahlawan, dan
              melanjutkan pendidikan di dayah, beliau melakukan pengembaraan
              (uzlah) hingga menetap di Gampong Simpang (kini sekitar Pasar
              Lueng Putu), mendirikan dayah dan mengajarkan ilmu agama —
              di sinilah beliau dikenal dengan nama Teungku Chiek Di Simpang.
            </p>
            <p className="text-sm text-navy-100 leading-relaxed">
              Beliau termasuk jaringan ulama tarekat Syattariyah di Aceh,
              dengan silsilah keilmuan yang menyebar hingga ke Teupin Raya
              melalui muridnya, Teungku Muhammad Ali Irsyad. Makam beliau di
              Teupin Raya masih terpelihara dan menjadi situs ziarah hingga
              kini.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
