import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { label: 'Jumlah Penduduk', value: '398', suffix: 'Jiwa' },
  { label: 'Jumlah KK', value: '131', suffix: 'Keluarga' },
  { label: 'Luas Wilayah', value: '2.35', suffix: 'km²' },
  { label: 'Jarak ke Kecamatan', value: '2.2', suffix: 'km' },
]

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

const fasilitas = [
  'SD Negeri 26 Bandar Baru',
  'TK Satu Atap Langien',
  'Puskesmas Lueng Putu',
  'Meunasah Dayah Langien',
  'Masjid Darussa\u2019adah Langien',
  'Balai Pertemuan Gampong',
]

export default function TentangDesa() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stat-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.potensi-card', {
        scrollTrigger: {
          trigger: '.potensi-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
      })

      gsap.from('.fasilitas-item', {
        scrollTrigger: {
          trigger: '.fasilitas-grid',
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
      id="tentang-desa"
      className="relative py-24 bg-navy-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Profil Gampong
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Tentang Dayah Langien
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Gampong Dayah Langien terletak di Kecamatan Bandar Baru, Kabupaten
            Pidie Jaya, Provinsi Aceh — sebuah desa pesisir dataran rendah
            yang berjarak sekitar 7 menit berkendara dari pusat kecamatan di
            Lueng Putu.
          </p>
        </div>

        {/* Stats */}
        <div className="stat-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card bg-navy-900/60 border border-navy-300/10 rounded-xl p-6 text-center"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold-500 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-navy-300 uppercase tracking-wide mb-1">
                {stat.suffix}
              </div>
              <div className="text-sm text-navy-100">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Potensi */}
        <div className="mb-20">
          <h3 className="font-heading text-2xl font-bold text-white mb-8 text-center">
            Potensi Desa
          </h3>
          <div className="potensi-grid grid sm:grid-cols-2 gap-5">
            {potensi.map((item) => (
              <div
                key={item.title}
                className="potensi-card bg-navy-900/40 border border-gold-500/10 hover:border-gold-500/30 rounded-xl p-6 transition-colors"
              >
                <h4 className="font-heading text-lg font-semibold text-gold-500 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-navy-100 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fasilitas */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-white mb-8 text-center">
            Sarana & Prasarana
          </h3>
          <div className="fasilitas-grid grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {fasilitas.map((item) => (
              <div
                key={item}
                className="fasilitas-item flex items-center gap-3 bg-navy-900/30 rounded-lg px-4 py-3"
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
