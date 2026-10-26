import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import ProductMedia from '../components/ProductMedia.jsx'
import Price from '../components/Price.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import NotFound from './NotFound.jsx'
import { CATEGORY_LABEL, getProduct, getProductBySlug, hasPrice, relatedProducts } from '../data/products.js'
import { COMPANY } from '../data/company.js'
import { PACKAGING } from '../data/options.js'
import { useCart } from '../lib/CartContext.jsx'
import { MAX_QTY, clampQty } from '../lib/cart.js'
import { getRecent, pushRecent } from '../lib/recent.js'
import { UNITS, defaultUnit } from '../lib/units.js'
import { useSeo } from '../lib/useSeo.js'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  if (!product) return <NotFound />
  return <Detail key={product.id} product={product} />
}

function Detail({ product }) {
  useSeo({ title: product.name, description: `${product.name} from Prime Fresh Oil Mills. ${product.blurb} Request pricing and packaging.`, image: product.photo || '/img/emblem.jpg' })
  const { add, openCart } = useCart()
  const [packaging, setPackaging] = useState('')
  const [unit, setUnit] = useState(defaultUnit(product))
  const [qty, setQty] = useState(1)
  const [recent] = useState(() => getRecent().filter((id) => id !== product.id).map(getProduct).filter(Boolean).slice(0, 4))
  const [shot, setShot] = useState(0)

  useEffect(() => {
    pushRecent(product.id)
  }, [product.id])

  const extras = ['seed', 'cake'].map((k) => product.process?.[k] && getProduct(product.process[k])).filter(Boolean)
  const shots = [{ product, caption: product.name }, ...extras.map((p) => ({ product: p, caption: `${p.category === 'seed' ? 'Raw material' : 'By-product'}: ${p.name}` }))]
  const current = shots[shot]
  const submit = (e) => {
    e.preventDefault()
    add({ productId: product.id, packaging, unit, qty }, product.name)
  }

  return (
    <>
      <section className="pagehead pagehead--slim">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/products">Our Products</Link><span aria-hidden="true">/</span><span aria-current="page">{product.name}</span>
          </nav>
        </div>
      </section>
      <section className="section section--tight">
        <div className="wrap pdp">
          <div className="pdp__gallery">
            <div className="pdp__main"><ProductMedia product={current.product} eager sizes="(min-width:1024px) 50vw, 100vw" /></div>
            <p className="pdp__cap">{current.caption}</p>
            {shots.length > 1 && (
              <ul className="pdp__thumbs">
                {shots.map((s, i) => (
                  <li key={s.product.id}>
                    <button type="button" aria-pressed={i === shot} aria-label={`Show ${s.caption}`} onClick={() => setShot(i)}><ProductMedia product={s.product} /></button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="pdp__info">
            <p className="chip">{CATEGORY_LABEL[product.category]}</p>
            <h1>{product.name}</h1>
            <Price product={product} large />
            <p>{product.description || product.blurb}</p>

            <form className="pdp__form" onSubmit={submit}>
              <div className="field">
                <label htmlFor="pack">Preferred packaging</label>
                <select id="pack" value={packaging} onChange={(e) => setPackaging(e.target.value)}>
                  <option value="">Not specified</option>
                  {PACKAGING.map((p) => <option key={p}>{p}</option>)}
                </select>
                <p className="hint">Your preference. The mill confirms the pack sizes it can supply.</p>
              </div>
              <div className="pdp__row">
                <div className="field">
                  <label htmlFor="qty">Quantity</label>
                  <div className="qty qty--lg">
                    <button type="button" onClick={() => setQty((q) => clampQty(q - 1))} disabled={qty <= 1} aria-label="Decrease quantity"><Minus size={16} aria-hidden="true" /></button>
                    <input id="qty" type="number" inputMode="numeric" min="1" max={MAX_QTY} value={qty} onChange={(e) => setQty(clampQty(e.target.value))} />
                    <button type="button" onClick={() => setQty((q) => clampQty(q + 1))} disabled={qty >= MAX_QTY} aria-label="Increase quantity"><Plus size={16} aria-hidden="true" /></button>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="unit">Unit</label>
                  <select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>{UNITS.map((u) => <option key={u}>{u}</option>)}</select>
                </div>
              </div>
              <div className="pdp__actions">
                <button type="submit" className="btn btn--primary btn--lg"><ShoppingBag size={18} aria-hidden="true" /> Add to Cart</button>
                <Link className="btn btn--ghost btn--lg" to={`/quote?product=${product.slug}`}>Request Bulk Quantity</Link>
              </div>
              <button type="button" className="linkbtn" onClick={openCart}>Open cart</button>
            </form>

            <h2 className="h-sm">Specifications</h2>
            <table className="spec">
              <tbody>
                <tr><th scope="row">Type</th><td>{CATEGORY_LABEL[product.category]}</td></tr>
                <tr><th scope="row">Pack sizes</th><td>{product.variants.length ? product.variants.join(', ') : 'To be confirmed by the mill'}</td></tr>
                <tr><th scope="row">Price</th><td>{hasPrice(product) ? `₹${product.price}` : 'To be confirmed by the mill'}</td></tr>
                <tr><th scope="row">Availability</th><td>Confirm with the mill</td></tr>
                <tr><th scope="row">Made by</th><td>Prime Fresh Oil Mills, {COMPANY.region}</td></tr>
              </tbody>
            </table>
            <Link className="textlink" to="/products"><ArrowLeft size={16} aria-hidden="true" /> Back to catalog</Link>
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="wrap">
          <Reveal className="sechead"><div><h2>Related products</h2></div></Reveal>
          <div className="grid">{relatedProducts(product).map((p) => <ProductCard key={p.id} product={p} />)}</div>
          {recent.length > 0 && <div className="recent"><h3>Recently viewed</h3><ul>{recent.map((p) => <li key={p.id}><Link to={`/products/${p.slug}`}>{p.name}</Link></li>)}</ul></div>}
        </div>
      </section>
    </>
  )
}
