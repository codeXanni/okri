export default function ProductMedia({ product, eager = false, sizes = '(min-width:1024px) 25vw, 50vw', className = '' }) {
  return (
    <div className={`media ${className}`}>
      <img src={product.photo} alt={product.alt} style={product.pos ? { objectPosition: product.pos } : undefined} loading={eager ? 'eager' : 'lazy'} decoding="async" width="600" height="600" sizes={sizes} />
      {product.sample && <span className="media__tag">Sample photo</span>}
    </div>
  )
}
