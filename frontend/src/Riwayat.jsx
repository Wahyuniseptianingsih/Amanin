import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Riwayat() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/history')
      .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (!ok) {
          setError(data.error)
        } else {
          setData(data)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="shell">
      <aside className="sidebar">
        <Header />
        <p className="tagline">Riwayat pemeriksaan situs</p>
      </aside>

      <main className="main">
        <div className="main-inner">
          <button className="kembali" onClick={() => navigate('/beranda')}>
            ← periksa situs lain
          </button>

          {loading && <p className="subtitle">Memuat riwayat...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && data.length === 0 && (
            <p className="subtitle">Belum ada riwayat pemeriksaan</p>
          )}

          {data.length > 0 && (
            <table className="riwayat-table">
              <thead>
                <tr>
                  <th>Situs</th>
                  <th>Skor</th>
                  <th>Grade</th>
                  <th>Waktu</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => navigate(`/hasil?url=${encodeURIComponent(item.url)}`)}
                  >
                    <td>{item.url}</td>
                    <td>{item.skor}/100</td>
                    <td className={`grade-cell grade-${item.grade}`}>{item.grade}</td>
                    <td>{new Date(item.created_at).toLocaleString('id-ID')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  )
}

export default Riwayat