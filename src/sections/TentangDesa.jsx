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

const batasWilayah = [
  { arah: 'Utara', desa: 'Gampong Meunasah Sagoe' },
  { arah: 'Selatan', desa: 'Gampong Blang Iboih' },
  { arah: 'Barat', desa: 'Gampong Cut Langgien' },
  { arah: 'Timur', desa: 'Gampong Meunasah Baroh Cot' },
]

const topografi = [
  { label: 'Ketinggian', value: '0 - 55 mdpl' },
  { label: 'Tipe Iklim', value: 'Khatulistiwa (Af)' },
  { label: 'Suhu Rata-rata', value: '22°C' },
  { label: 'Curah Hujan/Tahun', value: '2.436 mm' },
]

export default function TentangDesa() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.stat-card', {
        scrollTrigger: { trigger: '.stat-grid', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
      gsap.from('.batas-card', {
        scrollTrigger: { trigger: '.batas-grid', start: 'top 85%' },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      })
      gsap.from('.topo-item', {
        scrollTrigger: { trigger: '.topo-grid', start: 'top 85%' },
        opacity: 0,
        x: -15,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="tentang-desa" className="relative py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Profil Gampong
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Tentang Dayah Langien
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Gampong Dayah Langien terletak di Kecamatan Bandar Baru, Kabupaten
            Pidie Jaya, Provinsi Aceh — dataran pesisir barat Pidie Jaya yang
            berjarak sekitar 7 menit berkendara dari pusat kecamatan di Lueng
            Putu. Desa ini memiliki kode pos 24184.
          </p>
        </div>

        {/* Stats */}
        <div className="stat-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card bg-navy-900/60 border border-navy-300/10 rounded-xl p-6 text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold-500 mb-1">{stat.value}</div>
              <div className="text-xs text-navy-300 uppercase tracking-wide mb-1">{stat.suffix}</div>
              <div className="text-sm text-navy-100">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Batas Wilayah */}
        <div className="mb-16">
          <h3 className="font-heading text-xl font-bold text-white mb-6 text-center">Batas Wilayah</h3>
          <div className="batas-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            {batasWilayah.map((b) => (
              <div key={b.arah} className="batas-card bg-navy-900/40 border border-gold-500/10 rounded-xl p-5 text-center">
                <span className="text-xs font-medium text-gold-500 uppercase tracking-wide">{b.arah}</span>
                <p className="text-sm text-navy-100 mt-2">{b.desa}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Topografi & Iklim */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white mb-6 text-center">Topografi & Iklim</h3>
          <div className="topo-grid grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {topografi.map((t) => (
              <div key={t.label} className="topo-item flex items-center gap-3 bg-navy-900/30 rounded-lg px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                <div>
                  <p className="text-xs text-navy-300">{t.label}</p>
                  <p className="text-sm text-white font-medium">{t.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
