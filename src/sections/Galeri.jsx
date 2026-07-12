import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import kegiatan01 from '../assets/foto/kegiatan/kegiatan01.jpg'
import kegiatan02 from '../assets/foto/kegiatan/kegiatan02.jpg'
import kegiatan03 from '../assets/foto/kegiatan/kegiatan03.jpg'

gsap.registerPlugin(ScrollTrigger)

const galeri = [
  { src: kegiatan01, caption: 'gatauu dah ini ntah lg ngapain' },
  { src: kegiatan02, caption: 'ini juga gatau lagi ngapain ' },
  { src: kegiatan03, caption: 'ini juga gatau' },
]

export default function Galeri() {
  const sectionRef = useRef(null)
  const [activeImg, setActiveImg] = useState(null)

  useGSAP(
    () => {
      gsap.from('.galeri-item', {
        scrollTrigger: {
          trigger: '.galeri-grid',
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="galeri"
      className="relative py-24 bg-navy-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Dokumentasi
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Galeri Kegiatan
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Momen-momen selama pelaksanaan KKN R-XXIX-14 di Gampong Dayah
            Langien.
          </p>
        </div>

        {galeri.length > 0 ? (
          <div className="galeri-grid columns-2 md:columns-3 gap-4 space-y-4">
            {galeri.map((item, i) => (
              <div
                key={i}
                className="galeri-item break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setActiveImg(item)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/60 transition-colors duration-300 flex items-end p-4">
                  <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-navy-300">
            Belum ada foto ditambahkan.
          </p>
        )}
      </div>

      {/* Lightbox sederhana */}
      {activeImg && (
        <div
          className="fixed inset-0 z-50 bg-navy-900/95 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setActiveImg(null)}
        >
          <div className="max-w-3xl w-full">
            <img
              src={activeImg.src}
              alt={activeImg.caption}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center text-navy-100 mt-4">
              {activeImg.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
