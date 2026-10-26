import { hasPrice } from '../data/products.js'

const fmt = (n) => `₹${n.toLocaleString('en-IN')}`

// Ecommerce-style price: struck-out MRP then selling price. Until the mill supplies prices,
// both are visible placeholders (never read as real amounts or added to totals).
export default function Price({ product, large = false }) {
  const real = hasPrice(product)
  const per = <span className="price__per"> / {product.category === 'oil' ? 'litre' : 'kg'}</span>
  const mrp = typeof product.mrp === 'number' && product.mrp > product.price ? product.mrp : null
  return (
    <p className={`price${large ? ' price--lg' : ''}${real ? '' : ' price--ph'}`}>
      {real ? (
        <>
          {mrp && <del aria-label={`Original price ${fmt(mrp)}`}>{fmt(mrp)}</del>}
          <strong>{fmt(product.price)}{per}</strong>
        </>
      ) : (
        <>
          <del aria-label="Original price placeholder">₹ XXX</del>
          <strong>₹ YYY{per}</strong>
          <small>Price placeholder</small>
        </>
      )}
    </p>
  )
}
