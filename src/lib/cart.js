import { getProduct, hasPrice } from '../data/products.js'

export const STORAGE_KEY = 'pfom.cart.v1'
export const MIN_QTY = 1
export const MAX_QTY = 99999

export const lineKey = (productId, packaging, unit) => `${productId}|${packaging || ''}|${unit || ''}`

export function clampQty(n) {
  const v = Math.floor(Number(n))
  if (!Number.isFinite(v)) return MIN_QTY
  return Math.min(MAX_QTY, Math.max(MIN_QTY, v))
}

export function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { productId, packaging = '', unit = '', qty = 1 } = action
      if (!getProduct(productId)) return state
      const key = lineKey(productId, packaging, unit)
      const found = state.find((l) => l.key === key)
      if (found) return state.map((l) => (l.key === key ? { ...l, qty: clampQty(l.qty + qty) } : l))
      return [...state, { key, productId, packaging, unit, qty: clampQty(qty) }]
    }
    case 'set':
      return state.map((l) => (l.key === action.key ? { ...l, qty: clampQty(action.qty) } : l))
    case 'remove':
      return state.filter((l) => l.key !== action.key)
    case 'clear':
      return []
    default:
      return state
  }
}

// Drops anything malformed or referring to a product that no longer exists.
export function sanitize(raw) {
  if (!Array.isArray(raw)) return []
  return raw
    .filter((l) => l && typeof l.productId === 'string' && getProduct(l.productId))
    .map((l) => {
      const packaging = typeof l.packaging === 'string' ? l.packaging : ''
      const unit = typeof l.unit === 'string' ? l.unit : ''
      return { key: lineKey(l.productId, packaging, unit), productId: l.productId, packaging, unit, qty: clampQty(l.qty) }
    })
}

export function loadCart() {
  try {
    return sanitize(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
  } catch {
    return []
  }
}

export function saveCart(lines) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  } catch {
    /* storage unavailable: cart still works for this visit */
  }
}

export const itemCount = (lines) => lines.reduce((n, l) => n + l.qty, 0)

// Prices are never invented: a null price is "to be confirmed", not zero.
export function summarize(lines) {
  let subtotal = 0
  let pricedLines = 0
  let unpricedLines = 0
  for (const l of lines) {
    const p = getProduct(l.productId)
    if (hasPrice(p)) { subtotal += p.price * l.qty; pricedLines += 1 } else unpricedLines += 1
  }
  return { subtotal, pricedLines, unpricedLines, complete: lines.length > 0 && unpricedLines === 0 }
}
