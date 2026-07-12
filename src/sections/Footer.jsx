export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-300/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="font-heading text-lg font-bold text-white">
            Dayah <span className="text-gold-500">Langien</span>
          </span>
          <p className="text-xs text-navy-300 mt-1">
            Dokumentasi KKN Reguler R-XXIX-14 &middot; Universitas Syiah Kuala
            &middot; Juli-Agustus 2026
          </p>
        </div>

        <p className="text-xs text-navy-300">
          Dibuat sebagai referensi bagi KKN periode selanjutnya
        </p>
      </div>
    </footer>
  )
}