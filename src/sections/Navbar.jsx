import { useState, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang Desa', href: '#tentang-desa' },
  { label: 'Sejarah', href: '#sejarah-desa' },
  { label: 'Kebencanaan', href: '#kebencanaan' },
  { label: 'Struktur Gampong', href: '#struktur-gampong' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
  { label: 'KKN R-XXIX-14', href: '#tentang-kkn' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { y: -80, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', delay: 0.2, clearProps: 'transform' }
      )
    },
    { scope: navRef, dependencies: [] }
  )

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900/90 backdrop-blur-md shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-heading text-xl font-bold text-white">
          Dayah <span className="text-gold-500">Langien</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-navy-100 hover:text-gold-500 transition-colors whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-navy-900/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMobileOpen(false)} className="text-sm font-medium text-navy-100 hover:text-gold-500 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
