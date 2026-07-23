import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const [foto, setFoto] = useState([])
  const [file, setFile] = useState(null)
  const [caption, setCaption] = useState('')
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { logout } = useAuth()

  const fetchFoto = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('galeri')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error) setFoto(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchFoto()
  }, [])

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!file) return

    setUploading(true)
    setError('')

    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from('galeri')
      .upload(fileName, file)

    if (uploadError) {
      setError('Gagal upload foto: ' + uploadError.message)
      setUploading(false)
      return
    }

    const { data: urlData } = supabase.storage
      .from('galeri')
      .getPublicUrl(fileName)

    const { error: insertError } = await supabase
      .from('galeri')
      .insert({ url: urlData.publicUrl, caption })

    if (insertError) {
      setError('Gagal simpan data: ' + insertError.message)
      setUploading(false)
      return
    }

    setFile(null)
    setCaption('')
    setUploading(false)
    fetchFoto()
  }

  const handleDelete = async (item) => {
    if (!confirm('Yakin mau hapus foto ini?')) return

    const fileName = item.url.split('/').pop()
    await supabase.storage.from('galeri').remove([fileName])
    await supabase.from('galeri').delete().eq('id', item.id)

    fetchFoto()
  }

  return (
    <div className="min-h-screen bg-navy-900">
      <div className="border-b border-navy-300/10 px-6 py-4 flex items-center justify-between">
        <h1 className="font-heading text-lg font-bold text-white">
          Dayah <span className="text-gold-500">Langien</span> — Admin
        </h1>
        <div className="flex items-center gap-4">
          <a href="/" className="text-xs text-navy-300 hover:text-gold-500 transition-colors">
            Lihat Website
          </a>
          <button
            onClick={logout}
            className="text-xs text-navy-300 hover:text-red-400 transition-colors"
          >
            Keluar
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="font-heading text-xl font-bold text-white mb-6">Kelola Galeri Desa</h2>

        <form
          onSubmit={handleUpload}
          className="bg-navy-800/60 border border-navy-300/10 rounded-xl p-6 mb-10 space-y-4"
        >
          <div>
            <label className="block text-xs text-navy-300 mb-1.5">Pilih Foto</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              required
              className="w-full text-sm text-navy-100 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-gold-500 file:text-navy-900 file:text-xs file:font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs text-navy-300 mb-1.5">Keterangan Foto</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Contoh: Suasana Meunasah Dayah Langien"
              className="w-full bg-navy-900 border border-navy-300/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-500/50"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={uploading}
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-sm rounded-lg px-5 py-2.5 transition-colors disabled:opacity-50"
          >
            {uploading ? 'Mengunggah...' : 'Unggah Foto'}
          </button>
        </form>

        <h3 className="font-heading text-base font-semibold text-white mb-4">
          Foto Tersimpan ({foto.length})
        </h3>

        {loading ? (
          <p className="text-sm text-navy-300">Memuat...</p>
        ) : foto.length === 0 ? (
          <p className="text-sm text-navy-300">Belum ada foto.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {foto.map((item) => (
              <div key={item.id} className="bg-navy-800/60 border border-navy-300/10 rounded-xl overflow-hidden">
                <img src={item.url} alt={item.caption} className="w-full aspect-video object-cover" />
                <div className="p-3 flex items-center justify-between gap-2">
                  <p className="text-xs text-navy-100 truncate">{item.caption || '(tanpa keterangan)'}</p>
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-xs text-red-400 hover:text-red-300 shrink-0"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
