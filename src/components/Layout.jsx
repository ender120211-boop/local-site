import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Heart, Menu, ShoppingBag, X } from 'lucide-react'
import { useApp } from '../store/AppContext'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { cart, favorites, toast } = useApp()
  const location = useLocation()

  const close = () => setOpen(false)
  const nav = [['Templates', '/catalog'], ['About', '/about'], ['FAQ', '/faq'], ['Contact', '/contact']]

  return (
    <div className="app-shell">
      <header className="header">
        <Link className="logo" to="/" onClick={close} aria-label="LOCAL SITE home">
          LOCAL<span>SITE</span>
        </Link>
        <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <NavLink key={href} to={href} onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="icon-button" to="/favorites" aria-label="Favorites">
            <Heart size={20} />
            {favorites.length > 0 && <span className="count">{favorites.length}</span>}
          </Link>
          <Link className="icon-button" to="/cart" aria-label="Cart">
            <ShoppingBag size={20} />
            {cart.length > 0 && <span className="count">{cart.length}</span>}
          </Link>
          <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <main key={location.pathname}><Outlet /></main>
      <footer className="footer">
        <div>
          <Link className="logo footer-logo" to="/">LOCAL<span>SITE</span></Link>
          <p>Premium website templates for ambitious local businesses.</p>
        </div>
        <div className="footer-links">
          <Link to="/catalog">Templates</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/license">License & Terms</Link>
        </div>
        <p className="copyright">© 2026 LOCAL SITE</p>
      </footer>
      {toast && <div className="toast" role="status">{toast}</div>}
    </div>
  )
}
