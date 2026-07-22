import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const keuchik = { nama: 'M. ADAM', jabatan: 'KEUCHIK', foto: null }

const tuhaPeut = [
  { nama: 'KARIMUDDIN LEO', jabatan: 'KETUA' },
  { nama: 'TGK. M. JAFAR', jabatan: 'WAKIL KETUA' },
  { nama: 'WAHYU ORIZANI SUHENDRA, S.Pd', jabatan: 'ANGGOTA' },
  { nama: 'IDRIS', jabatan: 'ANGGOTA' },
  { nama: 'BAHAGIA', jabatan: 'ANGGOTA' },
]

const imumDusun = [
  { nama: 'TGK. DAHLAN', jabatan: 'IMUM DUSUN DAYAH' },
  { nama: 'TGK. M. TAHIR', jabatan: 'IMUM DUSUN BLANG BEUNOT' },
  { nama: 'TGK. SYUKRI', jabatan: 'IMUM DUSUN BLANG BILI' },
]

const operator = { nama: 'RAMADHANI, S.Pt', jabatan: 'OPERATOR', foto: null }
const sekdes = { nama: 'MUKHTAR, SP', jabatan: 'SEKRETARIS DESA', foto: null }

const kasiKaur = [
  { nama: 'SAFRIZAL, S.Pd', jabatan: 'KASI PEMERINTAHAN' },
  { nama: 'SUHAIMI', jabatan: 'KASI KESEJAHTERAAN & PELAYANAN' },
  { nama: 'MUHAMMAD RAZALI, S.Pd', jabatan: 'KAUR UMUM & PERENCANAAN' },
  { nama: 'FAHMI', jabatan: 'KAUR KEUANGAN' },
]

const kadusPemuda = [
  { nama: 'SULAIMAN RAMLI', jabatan: 'KADUS DAYAH' },
  { nama: 'NASRULLAH', jabatan: 'KADUS BLANG BEUNOT' },
  { nama: 'ARIF FINDA', jabatan: 'KADUS BLANG BILI' },
  { nama: 'ANDI MURSALIN', jabatan: 'KETUA PEMUDA' },
]

function getInitials(nama) {
  if (!nama) return ''
  return nama
    .replace(/,.*$/, '')
    .split(' ')
    .filter((w) => !['TGK.', 'S.Pd', 'S.Pt', 'SP'].includes(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function NodeCard({ nama, jabatan, foto, highlight }) {
  return (
    <div className={`org-card ${highlight ? 'ring-2 ring-gold-500/80 border-gold-400' : ''}`}>
      <div className="org-card-img">
        {foto ? (
          <img src={foto} alt={nama} className="w-full h-full object-cover" />
        ) : (
          <span className="font-heading text-xs font-bold text-gold-500">
            {getInitials(nama)}
          </span>
        )}
      </div>
      <div className="p-2 text-center flex-1 min-w-0">
        <p className="text-[10px] font-bold text-gold-500 uppercase leading-none truncate mb-1">
          {jabatan}
        </p>
        <p className="text-[11px] font-bold text-white leading-tight uppercase line-clamp-2">
          {nama}
        </p>
      </div>
    </div>
  )
}

function SideListCard({ title, items }) {
  return (
    <div className="w-56 bg-navy-800/80 border border-gold-500/30 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-navy-700/80 px-3 py-2 border-b border-gold-500/20 text-center">
        <p className="text-xs font-bold text-gold-500 uppercase tracking-wider">{title}</p>
      </div>
      <div className="divide-y divide-navy-600/50">
        {items.map((it) => (
          <div key={it.nama} className="px-3 py-2 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-navy-900/60 shrink-0 flex items-center justify-center text-[10px] font-bold text-gold-400 border border-navy-500/40">
              {getInitials(it.nama)}
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold text-gold-400 uppercase leading-none truncate">{it.jabatan}</p>
              <p className="text-[11px] font-semibold text-white leading-tight uppercase truncate">{it.nama}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function StrukturGampong() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.chart-wrapper', {
        scrollTrigger: { trigger: '.chart-wrapper', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="struktur-gampong" className="relative py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Struktur Gampong
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Bagan Struktur Pemerintahan
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto text-sm">
            Gampong Dayah Langien, Kecamatan Bandar Baru, Kabupaten Pidie Jaya
          </p>
        </div>

        <p className="text-center text-xs text-navy-300 mb-4 lg:hidden">
          Geser ke samping untuk melihat bagan lengkap
        </p>

        <div className="chart-wrapper overflow-x-auto pb-8 flex justify-center">
          <div className="min-w-[900px] flex flex-col items-center">

            {/* LEVEL 1: TOP (TUHA PEUT | KEUCHIK | IMUM DUSUN) */}
            <div className="relative flex items-center justify-between w-full max-w-[860px]">
              {/* Garis Putus-putus Kemitraan Kiri-Kanan */}
              <div className="absolute top-1/2 left-[220px] right-[220px] border-t-2 border-dashed border-gold-500 -translate-y-1/2 z-0" />

              <SideListCard title="Tuha Peut Gampong" items={tuhaPeut} />

              <div className="relative z-10">
                <NodeCard {...keuchik} highlight />
              </div>

              <SideListCard title="Imum Dusun" items={imumDusun} />
            </div>

            {/* LEVEL 2: OPERATOR & SEKDES */}
            <div className="relative w-[440px] pt-10">
              {/* Garis Vertikal Turun LANGSUNG Dari Bawah Keuchik ke Garis Horizontal */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-10 line-gold" />

              {/* Garis Horizontal Cabang 2 (Antara Operator & Sekdes) */}
              <div className="absolute top-10 left-[95px] right-[95px] h-0.5 line-gold" />

              {/* Garis Vertikal Turun ke Top Card Operator & Sekdes */}
              <div className="absolute top-10 left-[95px] w-0.5 h-4 line-gold" />
              <div className="absolute top-10 right-[95px] w-0.5 h-4 line-gold" />

              <div className="pt-4 flex justify-between">
                <NodeCard {...operator} />
                <NodeCard {...sekdes} />
              </div>

              {/* Garis Vertikal Turun DARI SEKDES (Kanan) SAJA Ke Level Berikutnya */}
              <div className="absolute bottom-0 right-[95px] translate-y-full w-0.5 h-10 line-gold" />
            </div>

            {/* SPACING KARENA GARIS TURUN SEKDES */}
            <div className="h-10" />

            {/* LEVEL 3: 4 KASI & KAUR */}
            <div className="relative w-[840px]">
              {/* Garis Horizontal Atas menghubungkan 4 Kasi/Kaur */}
              <div className="absolute top-0 left-[95px] right-[95px] h-0.5 line-gold" />

              {/* Garis Vertikal Masuk ke Masing-masing 4 Card */}
              <div className="absolute top-0 left-[95px] w-0.5 h-4 line-gold" />
              <div className="absolute top-0 left-[311px] w-0.5 h-4 line-gold" />
              <div className="absolute top-0 right-[311px] w-0.5 h-4 line-gold" />
              <div className="absolute top-0 right-[95px] w-0.5 h-4 line-gold" />

              <div className="pt-4 flex justify-between">
                {kasiKaur.map((item) => (
                  <NodeCard key={item.jabatan} {...item} />
                ))}
              </div>

              {/* Garis Vertikal Keluar dari Bawah Masing-masing 4 Card Kasi/Kaur */}
              <div className="absolute bottom-0 left-[95px] translate-y-full w-0.5 h-8 line-gold" />
              <div className="absolute bottom-0 left-[311px] translate-y-full w-0.5 h-8 line-gold" />
              <div className="absolute bottom-0 right-[311px] translate-y-full w-0.5 h-8 line-gold" />
              <div className="absolute bottom-0 right-[95px] translate-y-full w-0.5 h-8 line-gold" />
            </div>

            {/* SPACING DARI KASI KE KADUS */}
            <div className="h-8" />

            {/* LEVEL 4: 4 KADUS & KETUA PEMUDA */}
            <div className="relative w-[840px]">
              {/* Garis Horizontal Bawah penyambung ke Level 4 */}
              <div className="absolute top-0 left-[95px] right-[95px] h-0.5 line-gold" />

              {/* Garis Vertikal Masuk ke Masing-masing 4 Card Terbawah */}
              <div className="absolute top-0 left-[95px] w-0.5 h-4 line-gold" />
              <div className="absolute top-0 left-[311px] w-0.5 h-4 line-gold" />
              <div className="absolute top-0 right-[311px] w-0.5 h-4 line-gold" />
              <div className="absolute top-0 right-[95px] w-0.5 h-4 line-gold" />

              <div className="pt-4 flex justify-between">
                {kadusPemuda.map((item) => (
                  <NodeCard key={item.jabatan} {...item} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
