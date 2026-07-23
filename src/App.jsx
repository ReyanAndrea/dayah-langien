import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './admin/ProtectedRoute'
import Login from './admin/Login'
import Dashboard from './admin/Dashboard'

import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import TentangDesa from './sections/TentangDesa'
import SejarahDesa from './sections/SejarahDesa'
import Potensi from './sections/Potensi'
import SaranaPrasarana from './sections/SaranaPrasarana'
import Kebencanaan from './sections/Kebencanaan'
import StrukturGampong from './sections/StrukturGampong'
import Galeri from './sections/Galeri'
import Kontak from './sections/Kontak'
import TentangKKN from './sections/TentangKKN'
import Footer from './sections/Footer'

function PublicSite() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TentangDesa />
      <SejarahDesa />
      <Potensi />
      <SaranaPrasarana />
      <Kebencanaan />
      <StrukturGampong />
      <Galeri />
      <Kontak />
      <TentangKKN />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PublicSite />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App
