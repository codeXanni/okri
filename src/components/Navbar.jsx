import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { NAV } from '../data/company.js'
import { useCart } from '../lib/CartContext.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count, openCart } = useCart()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('no-scroll') }
  }, [open])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="wrap nav__row">
        <Logo />
        <nav id="primary-nav" className="nav__links" aria-label="Primary">
          {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}
          <NavLink to="/quote" className="btn btn--gold nav__quote-m">Request a Quote</NavLink>
        </nav>
        <div className="nav__tools">
          <NavLink to="/quote" className="btn btn--gold btn--sm nav__quote">Request a Quote</NavLink>
          <button type="button" className="iconbtn" onClick={openCart} aria-label={`Open cart, ${count} ${count === 1 ? 'item' : 'items'}`}>
            <ShoppingBag size={22} aria-hidden="true" />
            {count > 0 && <span className="badge" key={count}>{count > 99 ? '99+' : count}</span>}
          </button>
          <button type="button" className="iconbtn nav__burger" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="primary-nav" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
