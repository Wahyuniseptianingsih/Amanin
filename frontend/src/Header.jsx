import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="brand">
      <span className="spinner">✦</span>
      <h1>Amanin</h1>
      <Link to="/riwayat" className="riwayat-link">Riwayat</Link>
    </div>
  )
}

export default Header