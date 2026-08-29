import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Intro() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <Header />
      <p className="subtitle">
Lindungi data kamu sebelum menjelajah      </p>

      <div className="about">
        <p>
          Jangan biarkan data sensitifmu terancam di situs yang tidak terenkripsi dengan benar. Amanin membedah header protokol, sertifikasi SSL, dan konten campuran sebuah domain, memberi kamu penilaian keamanan menyeluruh sebelum kamu mengunjunginya.
        </p>
      </div>

      <button className="mulai-btn" onClick={() => navigate('/beranda')}>
        Mulai periksa →
      </button>
    </div>
  )
}

export default Intro