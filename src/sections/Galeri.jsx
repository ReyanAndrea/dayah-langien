import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { supabase } from '../lib/supabase'

gsap.registerPlugin(ScrollTrigger)

export default function Galeri() {
  const sectionRef = useRef(null)
  const [activeImg, setActiveImg] = useState(null)
  const [galeri, setGaleri] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('galeri')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error) setGaleri(data)
        setLoading(false)
      })
  }, [])

  useGSAP(
    () => {
      if (galeri.length === 0) return
      gsap.from('.galeri-item', {
        scrollTrigger: { trigger: '.galeri-grid', start: 'top 80%' },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })
    },
    { scope: sectionRef, dependencies: [galeri] }
  )

  return (
    <section ref={sectionRef} id="galeri" className="relative py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">
            Dokumentasi
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Galeri Gampong
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto">
            Suasana, pemandangan, dan kehidupan sehari-hari warga Gampong
            Dayah Langien.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-navy-300 text-sm">Memuat galeri...</p>
        ) : galeri.length > 0 ? (
          <div className="galeri-grid columns-2 md:columns-3 gap-4 space-y-4">
            {galeri.map((item) => (
              <div
                key={item.id}
                className="galeri-item break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setActiveImg(item)}
              >
                <img
                  src={item.url}
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
          <p className="text-center text-navy-300 text-sm">
            Foto suasana desa akan ditambahkan di sini.
          </p>
        )}
      </div>

      {activeImg && (
        <div
          className="fixed inset-0 z-50 bg-navy-900/95 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setActiveImg(null)}
        >
          <div className="max-w-3xl w-full">
            <img src={activeImg.url} alt={activeImg.caption} className="w-full h-auto rounded-lg" />
            <p className="text-center text-navy-100 mt-4">{activeImg.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}
