import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

function Hasil() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const url = searchParams.get('url')

  const [hasil, setHasil] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) return

    setLoading(true)
    setError(null)

    fetch(`http://localhost:4000/api/scan?url=${url}`)
      .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (!ok) {
          setError(data.error)
        } else {
          setHasil(data)
        }
      })
      .finally(() => setLoading(false))
  }, [url])

  return (
    <div className="app">
      <div className="brand">
        <span className="spinner">✦</span>
        <h1>Amanin</h1>
      </div>

      <button className="kembali" onClick={() => navigate('/')}>
        ← periksa situs lain
      </button>

      {loading && <p className="subtitle">Lagi meriksa {url}...</p>}
      {error && <p className="error">{error}</p>}

      {hasil && (
        <div className="laporan">
          <div className={`grade grade-${hasil.grade}`}>
            {hasil.grade}
          </div>
          <p className="skor">{hasil.skor}/100</p>
          <p className="hostname">{hasil.hostname}</p>

          <div className="detail">
            <h3>SSL / TLS</h3>
            <p>{hasil.ssl.ok ? 'Aman ✓' : 'Bermasalah ✕'}</p>
            <p>Diterbitkan oleh {hasil.ssl.issuer}, sisa {hasil.ssl.sisaHari} hari</p>
          </div>

          <div className="detail">
            <h3>Header Keamanan</h3>
            {hasil.headers.ditemukan.map((item) => (
              <p key={item}>✓ {item}</p>
            ))}
            {hasil.headers.hilang.map((item) => (
              <p key={item} className="kurang">✕ {item}</p>
            ))}
          </div>

          <div className="detail">
            <h3>Mixed Content</h3>
            <p>
              {hasil.mixedContent.jumlahDitemukan === 0
                ? 'Tidak ditemukan masalah ✓'
                : `Ditemukan ${hasil.mixedContent.jumlahDitemukan} resource HTTP ✕`}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hasil