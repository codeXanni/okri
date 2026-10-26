import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from 'react'
import { cartReducer, loadCart, saveCart, itemCount, summarize } from './cart.js'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(cartReducer, undefined, loadCart)
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => { saveCart(lines) }, [lines])
  useEffect(() => {
    if (!toast) return undefined
    const t = setTimeout(() => setToast(null), 3200)
    return () => clearTimeout(t)
  }, [toast])

  const add = useCallback((item, name) => {
    dispatch({ type: 'add', ...item })
    setToast({ id: Date.now(), text: `${name || 'Item'} added to your enquiry cart` })
  }, [])

  const value = useMemo(() => ({
    lines, count: itemCount(lines), summary: summarize(lines), open, toast,
    openCart: () => setOpen(true), closeCart: () => setOpen(false), dismissToast: () => setToast(null),
    add,
    setQty: (key, qty) => dispatch({ type: 'set', key, qty }),
    remove: (key) => dispatch({ type: 'remove', key }),
    clear: () => dispatch({ type: 'clear' }),
  }), [lines, open, toast, add])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
