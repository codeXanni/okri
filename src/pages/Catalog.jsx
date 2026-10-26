import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Reveal from '../components/Reveal.jsx'
import { CATEGORIES, PRODUCTS, hasPrice } from '../data/products.js'
import { useSeo } from '../lib/useSeo.js'
import { filterProducts } from '../lib/filter.js'

const anyPrice = PRODUCTS.some(hasPrice)
const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'az', label: 'Name: A–Z' },
  { id: 'za', label: 'Name: Z–A' },
  ...(anyPrice ? [{ id: 'pl', label: 'Price: Low to High' }, { id: 'ph', label: 'Price: High to Low' }] : []),
]

export default function Catalog() {
  useSeo({ title: 'Our Products', description: 'Browse yellow mustard oil, sesame oil, groundnut oil, edible seeds and de-oiled cakes from Prime Fresh Oil Mills.' })
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const category = CATEGORIES.some((c) => c.id === params.get('category')) ? params.get('category') : ''
  const sort = SORTS.some((s) => s.id === params.get('sort')) ? params.get('sort') : 'featured'

  const set = (k, v) => {
    const next = new URLSearchParams(params)
    if (v && !(k === 'sort' && v === 'featured')) next.set(k, v); else next.delete(k)
    setParams(next, { replace: true })
  }
  const items = useMemo(() => filterProducts(PRODUCTS, { q, category, sort }), [q, category, sort])
  const filtered = q || category || sort !== 'featured'

  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Our Products</span></nav>
          <h1>Our Products</h1>
          <p className="lead">Oils, edible seeds and de-oiled cakes from the mill. Prices and pack sizes are confirmed by the mill on enquiry.</p>
        </div>
      </section>
      <section className="section section--tight">
        <div className="wrap">
          <div className="toolbar">
            <div className="search">
              <Search size={18} aria-hidden="true" />
              <label className="sr" htmlFor="q">Search products by name</label>
              <input id="q" type="search" value={q} placeholder="Search products" onChange={(e) => set('q', e.target.value)} />
              {q && <button type="button" className="iconbtn" onClick={() => set('q', '')} aria-label="Clear search"><X size={16} aria-hidden="true" /></button>}
            </div>
            <div className="chips" role="group" aria-label="Filter by product type">
              <button type="button" className="fchip" aria-pressed={!category} onClick={() => set('category', '')}>All</button>
              {CATEGORIES.map((c) => <button type="button" key={c.id} className="fchip" aria-pressed={category === c.id} onClick={() => set('category', c.id)}>{c.label}</button>)}
            </div>
            <div className="sort">
              <label htmlFor="sort">Sort by</label>
              <select id="sort" value={sort} onChange={(e) => set('sort', e.target.value)}>
                {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </div>
          </div>
          <div className="toolbar__meta">
            <p aria-live="polite">{items.length} {items.length === 1 ? 'product' : 'products'}</p>
            {filtered && <button type="button" className="linkbtn" onClick={() => setParams({}, { replace: true })}>Clear filters</button>}
            {!anyPrice && <p className="muted">Price sorting appears once prices are published.</p>}
          </div>
          {items.length ? (
            <div className="grid">
              {items.map((p, i) => <Reveal key={p.id} delay={(i % 4) * 70}><ProductCard product={p} /></Reveal>)}
            </div>
          ) : (
            <EmptyState title="No products match" action={<button type="button" className="btn btn--primary" onClick={() => setParams({}, { replace: true })}>Clear filters</button>}>
              Try a different name, or clear the filters to see the full catalog.
            </EmptyState>
          )}
          <p className="catnote">Not seeing what you need? <Link to="/quote">Request a quotation</Link> and describe your requirement.</p>
        </div>
      </section>
    </>
  )
}
