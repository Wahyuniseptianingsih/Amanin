import { Routes, Route } from 'react-router-dom'
import Intro from './Intro'
import Beranda from './Beranda'
import Hasil from './Hasil'
import Riwayat from './Riwayat'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/beranda" element={<Beranda />} />
      <Route path="/hasil" element={<Hasil />} />
      <Route path="/riwayat" element={<Riwayat />} />
    </Routes>
  )
}

export default App