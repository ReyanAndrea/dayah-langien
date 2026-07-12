import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', {
        y: -20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-title',
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          '.hero-subtitle',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-cta',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.3'
        )
    },
    { scope: heroRef }
  )

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-900" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="hero-badge inline-block px-4 py-1.5 mb-6 text-sm font-medium text-gold-500 border border-gold-500/30 rounded-full bg-gold-500/5">
          KKN R-XXIX-14 - Universitas Syiah Kuala
        </span>

        <h1 className="hero-title font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Gampong <span className="text-gold-500">Dayah Langien</span>
        </h1>

        <p className="hero-subtitle font-body text-lg md:text-xl text-navy-100 max-w-2xl mx-auto mb-10">
          Kecamatan Bandar Baru, Pidie Jaya, Aceh, Dokumentasi program kerja
          dan profil gampong dari Kuliah Kerja Nyata Juli-Agustus 2026
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tentang-desa"
            className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-lg transition-colors"
          >
            Jelajahi Gampong
          </a>
          <a
            href="#program-kerja"
            className="px-8 py-3 border border-navy-300/30 hover:border-gold-500/50 text-white font-semibold rounded-lg transition-colors"
          >
            Lihat Program Kerja
          </a>
        </div>
      </div>
    </section>
  )
}
