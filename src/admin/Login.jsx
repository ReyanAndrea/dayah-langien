import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await login(email, password)

    setLoading(false)

    if (error) {
      setError('Email atau password salah.')
      return
    }

    navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="font-heading text-2xl font-bold text-white mb-1">
            Dayah <span className="text-gold-500">Langien</span>
          </h1>
          <p className="text-sm text-navy-300">Panel Admin Gampong</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-navy-800/60 border border-navy-300/10 rounded-xl p-6 space-y-4"
        >
          <div>
            <label className="block text-xs text-navy-300 mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-navy-900 border border-navy-300/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-500/50"
              placeholder="email@contoh.com"
            />
          </div>

          <div>
            <label className="block text-xs text-navy-300 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-navy-900 border border-navy-300/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-500/50"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-sm rounded-lg py-2.5 transition-colors disabled:opacity-50"
          >
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>

        <p className="text-center text-xs text-navy-300 mt-6">
          <a href="/" className="hover:text-gold-500 transition-colors">
            ← Kembali ke website
          </a>
        </p>
      </div>
    </div>
  )
}
