import { Link } from 'react-router-dom'
import { ArrowUpRight, ShoppingBag } from 'lucide-react'
import ProductMedia from './ProductMedia.jsx'
import Price from './Price.jsx'
import { CATEGORY_LABEL } from '../data/products.js'
import { useCart } from '../lib/CartContext.jsx'
import { defaultUnit } from '../lib/units.js'

export default function ProductCard({ product }) {
  const { add } = useCart()
  const href = `/products/${product.slug}`
  return (
    <article className="pcard">
      <Link to={href} className="pcard__media" aria-label={`View ${product.name}`} tabIndex={-1}>
        <ProductMedia product={product} />
      </Link>
      <div className="pcard__body">
        <p className="chip">{CATEGORY_LABEL[product.category]}</p>
        <h3><Link to={href}>{product.name}</Link></h3>
        <p className="pcard__blurb">{product.blurb}</p>
        <Price product={product} />
        <dl className="pcard__facts">
          <div><dt>Pack sizes</dt><dd>{product.variants.length ? product.variants.join(', ') : 'Confirmed on enquiry'}</dd></div>
        </dl>
        <div className="pcard__actions">
          <button type="button" className="btn btn--primary btn--sm" onClick={() => add({ productId: product.id, unit: defaultUnit(product), qty: 1 }, product.name)}>
            <ShoppingBag size={16} aria-hidden="true" /> Add to Cart
          </button>
          <Link className="btn btn--ghost btn--sm" to={href}>View Details <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <Link className="pcard__quote" to={`/quote?product=${product.slug}`}>Request Bulk Quantity</Link>
      </div>
    </article>
  )
}
