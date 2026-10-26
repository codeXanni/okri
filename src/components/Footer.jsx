import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import Logo from './Logo.jsx'
import { ADDRESS_NOTE, COMPANY, NAV } from '../data/company.js'
import { whatsappLink } from '../lib/enquiry.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <Logo inverse />
          <p>Vegetable oil manufacturer in {COMPANY.region}. Mustard, sesame and groundnut oils, edible seeds and de-oiled cakes for retail and bulk buyers.</p>
          <Link className="btn btn--gold btn--sm" to="/quote">Request a Quote</Link>
        </div>
        <nav aria-label="Footer">
          <h2>Explore</h2>
          <ul>
            {NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
            <li><Link to="/products">Product Catalog</Link></li>
            <li><Link to="/checkout">Shopping Cart &amp; Checkout</Link></li>
          </ul>
        </nav>
        <div>
          <h2>Contact</h2>
          <ul className="footer__contact">
            <li><Phone size={16} aria-hidden="true" /><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></li>
            <li><Mail size={16} aria-hidden="true" /><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            <li><MessageCircle size={16} aria-hidden="true" /><a href={whatsappLink('Hello Prime Fresh Oil Mills, I would like to make an enquiry.')} target="_blank" rel="noreferrer">WhatsApp enquiry</a></li>
            <li><MapPin size={16} aria-hidden="true" /><span>{ADDRESS_NOTE}</span></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__legal">
        <p>© Prime Fresh Oil Mills. All rights reserved.</p>
        <p><Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms</Link> · <Link to="/credits">Photo credits</Link></p>
      </div>
    </footer>
  )
}
