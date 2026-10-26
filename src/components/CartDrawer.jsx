import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, X } from 'lucide-react'
import ProductMedia from './ProductMedia.jsx'
import EmptyState from './EmptyState.jsx'
import { getProduct, hasPrice } from '../data/products.js'
import { useCart } from '../lib/CartContext.jsx'
import { MAX_QTY } from '../lib/cart.js'

function Line({ line }) {
  const { setQty, remove } = useCart()
  const p = getProduct(line.productId)
  return (
    <li className="cline">
      <div className="cline__img"><ProductMedia product={p} eager /></div>
      <div className="cline__main">
        <p className="cline__name">{p.name}</p>
        <p className="cline__meta">{[line.packaging || 'Packaging to be confirmed', line.unit].filter(Boolean).join(' · ')}</p>
        <p className="cline__price">{hasPrice(p) ? `₹${(p.price * line.qty).toLocaleString('en-IN')}` : 'Price to be confirmed'}</p>
        <div className="qty" role="group" aria-label={`Quantity for ${p.name}`}>
          <button type="button" onClick={() => setQty(line.key, line.qty - 1)} disabled={line.qty <= 1} aria-label={`Decrease quantity of ${p.name}`}><Minus size={14} aria-hidden="true" /></button>
          <input type="number" inputMode="numeric" min="1" max={MAX_QTY} value={line.qty} onChange={(e) => setQty(line.key, e.target.value)} aria-label={`${p.name} quantity`} />
          <button type="button" onClick={() => setQty(line.key, line.qty + 1)} disabled={line.qty >= MAX_QTY} aria-label={`Increase quantity of ${p.name}`}><Plus size={14} aria-hidden="true" /></button>
        </div>
      </div>
      <button type="button" className="iconbtn cline__rm" onClick={() => remove(line.key)} aria-label={`Remove ${p.name}`}><Trash2 size={18} aria-hidden="true" /></button>
    </li>
  )
}

export default function CartDrawer() {
  const { open, closeCart, lines, summary } = useCart()
  const panel = useRef(null)
  const opener = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    opener.current = document.activeElement
    document.body.classList.add('no-scroll')
    panel.current?.querySelector('[data-autofocus]')?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') { closeCart(); return }
      if (e.key !== 'Tab') return
      const f = panel.current.querySelectorAll('a[href],button:not([disabled]),input')
      if (!f.length) return
      const first = f[0]; const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('no-scroll')
      opener.current?.focus?.()
    }
  }, [open, closeCart])

  return (
    <div className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <div className="drawer__scrim" onClick={closeCart} />
      <aside ref={panel} className="drawer__panel" role="dialog" aria-modal="true" aria-label="Shopping cart" inert={!open}>
        <header className="drawer__head">
          <h2>Your Cart</h2>
          <button type="button" className="iconbtn" data-autofocus onClick={closeCart} aria-label="Close cart"><X size={22} aria-hidden="true" /></button>
        </header>
        {lines.length === 0 ? (
          <div className="drawer__empty">
            <EmptyState title="Your cart is empty" action={<Link className="btn btn--primary" to="/products" onClick={closeCart}>Explore Products</Link>}>
              Add oils, seeds or cakes to build an enquiry for the mill.
            </EmptyState>
          </div>
        ) : (
          <>
            <ul className="drawer__lines">{lines.map((l) => <Line key={l.key} line={l} />)}</ul>
            <footer className="drawer__foot">
              <div className="sum">
                <span>Subtotal</span>
                <strong>{summary.complete ? `₹${summary.subtotal.toLocaleString('en-IN')}` : 'To be confirmed'}</strong>
              </div>
              {!summary.complete && <p className="note">Prices have not been published for these products. The mill will confirm pricing when it replies, so no total is shown.</p>}
              <Link className="btn btn--primary btn--block" to="/checkout" onClick={closeCart}>Checkout</Link>
              <Link className="btn btn--ghost btn--block" to="/quote?from=cart" onClick={closeCart}>Request Bulk Quantity for these items</Link>
              <button type="button" className="linkbtn" onClick={closeCart}>Continue Shopping</button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
