import { describe, expect, it } from 'vitest'
import { cartReducer, clampQty, sanitize, summarize } from './cart.js'
import { filterProducts } from './filter.js'
import { isEmail, isPhone, validateQuote } from './validation.js'
import { PRODUCTS } from '../data/products.js'

describe('cart', () => {
  it('merges identical lines and keeps variants separate', () => {
    let s = cartReducer([], { type: 'add', productId: 'oil-ymo', packaging: 'Drums', unit: 'Litres', qty: 2 })
    s = cartReducer(s, { type: 'add', productId: 'oil-ymo', packaging: 'Drums', unit: 'Litres', qty: 3 })
    s = cartReducer(s, { type: 'add', productId: 'oil-ymo', packaging: 'Jerry cans', unit: 'Litres', qty: 1 })
    expect(s.map((l) => l.qty)).toEqual([5, 1])
  })
  it('clamps invalid quantities and ignores unknown products', () => {
    expect(clampQty(-4)).toBe(1); expect(clampQty('abc')).toBe(1); expect(clampQty(2.9)).toBe(2)
    expect(cartReducer([], { type: 'add', productId: 'nope' })).toEqual([])
    expect(sanitize([{ productId: 'nope', qty: 1 }, { productId: 'oil-so', qty: 0 }])[0].qty).toBe(1)
  })
  it('never treats a missing price as zero', () => {
    const s = summarize([{ productId: 'oil-ymo', qty: 3 }])
    expect(s.complete).toBe(false); expect(s.subtotal).toBe(0); expect(s.unpricedLines).toBe(1)
  })
})

describe('validation', () => {
  it('checks email and phone', () => {
    expect(isEmail('a@b.co')).toBe(true); expect(isEmail('a@b')).toBe(false)
    expect(isPhone('+91 90572 92529')).toBe(true); expect(isPhone('12ab')).toBe(false)
  })
  it('requires core quote fields', () => {
    expect(Object.keys(validateQuote({}))).toEqual(expect.arrayContaining(['name', 'email', 'product', 'quantity']))
    expect(validateQuote({ name: 'A', company: 'B', email: 'a@b.co', phone: '9057292529', customerType: 'Distributor', items: [{}], location: 'X' })).toEqual({})
  })
})

describe('catalog', () => {
  it('has unique ids and slugs', () => {
    expect(new Set(PRODUCTS.map((p) => p.id)).size).toBe(PRODUCTS.length)
    expect(new Set(PRODUCTS.map((p) => p.slug)).size).toBe(PRODUCTS.length)
  })
  it('filters by name and category, sorts A-Z', () => {
    expect(filterProducts(PRODUCTS, { q: 'sesame', category: '', sort: 'featured' })).toHaveLength(3)
    expect(filterProducts(PRODUCTS, { q: '', category: 'cake', sort: 'az' }).map((p) => p.name)).toEqual(['Black Mustard Cake', 'Yellow Mustard Cake'])
    expect(filterProducts(PRODUCTS, { q: 'zzz', category: '', sort: 'featured' })).toEqual([])
  })
})
