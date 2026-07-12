import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const fases = [
  {
    tanggal: '27 Juni 2026',
    label: 'Survei Lokasi',
    desc: 'Survei DPL ke Gampong Dayah Langien bersama Keuchik dan Sekdes untuk pemetaan awal kondisi desa, potensi, dan permasalahan.',
  },
  {
    tanggal: '8 - 14 Juli 2026',
    label: 'Minggu 1 - Pembukaan & Program Utama',
    desc: 'Serah terima mahasiswa KKN, dimulainya program utama tiap anggota: pembangunan website desa, pemetaan ArcGIS, dan program bidang masing-masing.',
  },
  {
    tanggal: '15 - 21 Juli 2026',
    label: 'Minggu 2 - Pengembangan & Penunjang',
    desc: 'Pengembangan modul kebencanaan pada website, pelaksanaan program penunjang seperti edukasi kesehatan, pertanian, dan literasi anak-anak.',
  },
  {
    tanggal: '22 - 28 Juli 2026',
    label: 'Minggu 3 - Kolaborasi & Kemitraan',
    desc: 'Kegiatan bermitra dengan BPBD/Kecamatan Bandar Baru, gotong royong rutin, pengajian mingguan, dan pendampingan UMKM desa.',
  },
  {
    tanggal: '29 Juli - 3 Agustus 2026',
    label: 'Minggu 4 - Penutupan',
    desc: 'Simulasi jalur evakuasi bencana di sekolah, evaluasi program kerja, dan persiapan laporan akhir KKN.',
  },
]

export default function Timeline() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.timeline-line', {
        scrollTrigger: {
          trigger: '.timeline-wrapper',
          start: 'top 75%',
          end: 'bottom 80%',
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none',
      })

      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: '.timeline-wrapper',
          start: 'top 75%',
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative py-24 bg-navy-800"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Perjalanan KKN
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Timeline
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Alur pelaksanaan KKN Reguler R-XXIX-14 di Gampong Dayah Langien,
            dari survei awal hingga penutupan program, Juli-Agustus 2026.
          </p>
        </div>

        <div className="timeline-wrapper relative pl-8 md:pl-10">
          <div className="timeline-line absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500 via-gold-500/50 to-transparent" />

          <div className="space-y-10">
            {fases.map((fase) => (
              <div key={fase.label} className="timeline-item relative">
                <span className="absolute -left-8 md:-left-10 top-1 w-3 h-3 rounded-full bg-gold-500 ring-4 ring-navy-800" />
                <span className="inline-block text-xs font-medium text-gold-500 bg-gold-500/10 rounded-full px-3 py-1 mb-2">
                  {fase.tanggal}
                </span>
                <h4 className="font-heading text-lg font-semibold text-white mb-2">
                  {fase.label}
                </h4>
                <p className="text-sm text-navy-100 leading-relaxed">
                  {fase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}