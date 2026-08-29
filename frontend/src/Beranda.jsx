import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CyberAttackImg from './assets/Cyber_attack-cuate.svg'

function Beranda() {
  const [url, setUrl] = useState('')
  const navigate = useNavigate()

  function cekSitus() {
    if (!url) return
    navigate(`/hasil?url=${encodeURIComponent(url)}`)
  }

  return (
    <div className="app">
      <div className="brand">
        <span className="spinner">✦</span>
        <svg viewBox="0 0 120 120" className="radar-kecil">
          <circle cx="60" cy="60" r="50" className="radar-ring" />
          <circle cx="60" cy="60" r="32" className="radar-ring" />
          <circle cx="60" cy="60" r="14" className="radar-ring" />
          <line x1="60" y1="60" x2="60" y2="10" className="radar-sweep" />
        </svg>
        <h1>Amanin</h1>
      </div>

      <p className="subtitle">
        Masukin alamat situs, Amanin cek SSL, header keamanan, dan mixed content-nya buat kamu.
      </p>

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

      <div className="about">
        <h2>Kenapa perlu dicek?</h2>
        <p>
          Situs yang keliatan biasa aja bisa nyimpen celah yang nggak kelihatan
          mata telanjang — sertifikat kedaluwarsa, header yang bolong, sampai
          resource yang masih ditarik lewat jalur nggak aman. Amanin nyari semua
          itu dalam hitungan detik, biar kamu nggak asal percaya.
        </p>
      </div>
    </div>
  )
}

export default Beranda