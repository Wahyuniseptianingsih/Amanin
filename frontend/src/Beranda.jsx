import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CyberAttackImg from './assets/Cyber_attack-cuate.svg'
import Header from './Header'

function Beranda() {
  const [url, setUrl] = useState('')
  const navigate = useNavigate()

  function cekSitus() {
    if (!url) return
    navigate(`/hasil?url=${encodeURIComponent(url)}`)
  }

  return (
    <div className="shell">
      <aside className="sidebar">
        <Header />
        <p className="tagline">Cek keamanan sebuah situs</p>

        <div className="preview">
          <p className="preview-label">Cara pakai</p>
          <div className="preview-item">
            <span className="preview-no">1</span>
            <div>
              <p className="preview-title">Masukin alamat situs</p>
              <p className="preview-desc">Contoh: google.com</p>
            </div>
          </div>
          <div className="preview-item">
            <span className="preview-no">2</span>
            <div>
              <p className="preview-title">Klik tombol periksa</p>
              <p className="preview-desc">Atau tekan Enter</p>
            </div>
          </div>
          <div className="preview-item">
            <span className="preview-no">3</span>
            <div>
              <p className="preview-title">Lihat hasilnya</p>
              <p className="preview-desc">Skor dan detailnya langsung muncul</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="main-inner">
          <h2 className="main-heading">Yuk, cek dulu sebelum percaya</h2>
          <p className="main-sub">Masukin alamat situsnya di bawah ini.</p>

          <div className="urlbar">
            <span className="urlbar-proto">https://</span>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="google.com"
              onKeyDown={(e) => e.key === 'Enter' && cekSitus()}
            />
            <button onClick={cekSitus}>periksa</button>
          </div>

          <div className="hacker-scene">
            <img src={CyberAttackImg} className="hacker" alt="" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Beranda