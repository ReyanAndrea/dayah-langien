import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const dampak = [
  { label: 'Gampong Terdampak', value: '43', suffix: 'di Kec. Bandar Baru' },
  { label: 'KK Terdampak', value: '1.604', suffix: 'kepala keluarga' },
  { label: 'Pemadaman Listrik', value: '~1', suffix: 'minggu' },
  { label: 'Jaringan Telekomunikasi Hilang', value: '~1', suffix: 'minggu' },
]

export default function Kebencanaan() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.dampak-card', {
        scrollTrigger: { trigger: '.dampak-grid', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
      gsap.from('.narasi-block', {
        scrollTrigger: { trigger: '.narasi-wrapper', start: 'top 80%' },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="kebencanaan" className="relative py-24 bg-navy-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Kesiapsiagaan Bencana
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Pasca Siklon Tropis Senyar
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Akhir November 2025, Siklon Tropis Senyar tumbuh di Selat Malaka
            — fenomena langka secara klimatologis — memicu banjir bandang
            dan tanah longsor meluas di Aceh, termasuk Kabupaten Pidie Jaya.
          </p>
        </div>

        <div className="dampak-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {dampak.map((d) => (
            <div key={d.label} className="dampak-card bg-navy-900/60 border border-navy-300/10 rounded-xl p-5 text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-gold-500 mb-1">{d.value}</div>
              <div className="text-xs text-navy-300 mb-1">{d.suffix}</div>
              <div className="text-xs text-navy-100">{d.label}</div>
            </div>
          ))}
        </div>

        <div className="narasi-wrapper narasi-block bg-navy-900/40 border border-navy-300/10 rounded-xl p-7">
          <p className="text-sm text-navy-100 leading-relaxed mb-4">
            Dibanding gampong lain di Kecamatan Bandar Baru, Gampong Dayah
            Langien relatif tidak terlalu parah — ketinggian air banjir yang
            merendam pemukiman hanya sekitar betis orang dewasa, sehingga
            tidak menyebabkan kerusakan rumah yang parah atau pengungsian
            skala besar.
          </p>
          <p className="text-sm text-navy-100 leading-relaxed mb-4">
            Meski begitu, aktivitas sosial-ekonomi warga tetap terganggu:
            pemadaman listrik total akibat robohnya tower transmisi 150 KV
            di ruas Arun-Bireuen, hilangnya jaringan telekomunikasi, akses
            jalan yang sempat terganggu, serta kecemasan warga yang
            mengingatkan pada pengalaman tsunami 2004.
          </p>
          <p className="text-sm text-navy-100 leading-relaxed">
            Pengalaman ini menyoroti pentingnya kesiapsiagaan menghadapi
            bencana hidrometeorologi di masa mendatang — menjadi salah satu
            latar belakang program kerja kelompok KKN R-XXIX-14 di gampong
            ini.
          </p>
        </div>
      </div>
    </section>
  )
}
