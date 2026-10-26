// Central catalogue. Every id/slug is stable. `variants` is empty and `price` is null
// because the mill has not supplied pack sizes or prices; the UI falls back to enquiry.
// Oil photos flagged `sample: true` are stand-in Creative Commons photographs (see /credits)
// until the mill supplies its own. A seed photo is never relabelled as oil.
export const CATEGORIES = [
  { id: 'oil', label: 'Oils' },
  { id: 'seed', label: 'Seeds' },
  { id: 'cake', label: 'De-oiled cakes' },
]

const seed = (id, slug, name, file, alt, blurb, extra = {}) => ({
  id, slug, name, category: 'seed', photo: `/img/${file}`, alt, blurb, price: null, variants: [], ...extra,
})

export const PRODUCTS = [
  {
    id: 'oil-ymo', slug: 'yellow-mustard-oil', name: 'Yellow Mustard Oil', category: 'oil', featured: true, hero: true,
    photo: '/img/oil-mustard.jpg', pos: '30% 55%', sample: true, alt: 'A glass jar of golden mustard oil beside a bowl of mustard seeds',
    blurb: "The mill's best-selling oil, made from yellow mustard seed.",
    description: "Yellow mustard oil is the mill's best-selling oil. It is available for retail-pack and bulk enquiries. Tell us the packaging and quantity you need and the mill will confirm availability, specifications and price.",
    price: null, variants: [], process: { seed: 'seed-ym', cake: 'cake-ym' },
  },
  {
    id: 'oil-so', slug: 'sesame-oil', name: 'Sesame Oil', category: 'oil', featured: true,
    photo: '/img/rj/oil-sesame.jpg', pos: 'center 75%', sample: true, alt: 'A glass bottle of sesame oil',
    blurb: 'Edible sesame oil for brand and bulk buyers.',
    description: 'Edible sesame oil is one of the mill’s named best-sellers. Request a quotation with your packaging and quantity and the mill will respond with availability and pricing.',
    price: null, variants: [], process: { seed: 'seed-se' },
  },
  {
    id: 'oil-go', slug: 'groundnut-oil', name: 'Groundnut Oil', category: 'oil', featured: true,
    photo: '/img/oil-groundnut.jpg', pos: 'center 55%', sample: true, alt: 'A bottle of groundnut oil',
    blurb: 'Edible groundnut oil for brand and bulk buyers.',
    description: 'Edible groundnut oil for brand and bulk buyers. Ask for a quotation and the mill will confirm availability, packaging and pricing.',
    price: null, variants: [], process: { seed: 'seed-go' },
  },
  seed('seed-ym', 'yellow-mustard-seeds', 'Yellow Mustard Seeds', 'Yellow_Mustard_Seeds.jpg', 'Yellow mustard seeds', 'Raw yellow mustard seed for bulk buyers.', { featured: true }),
  seed('seed-bm', 'black-mustard-seeds', 'Black Mustard Seeds', 'Black_Mustard_Seeds.jpg', 'Black mustard seeds', 'Raw black mustard seed for bulk buyers.'),
  seed('seed-se', 'sesame-seeds', 'Sesame Seeds', 'Sesame_Seeds_Photo_2.jpg', 'Hulled sesame seeds', 'Hulled sesame seed for bulk buyers.', { featured: true }),
  seed('seed-bs', 'black-sesame-seeds', 'Black Sesame Seeds', 'Black_Sesame_Seeds.jpg', 'Black sesame seeds', 'Black sesame seed for bulk buyers.'),
  seed('seed-go', 'groundnut-seeds', 'Groundnut Seeds', 'Groundnut_Seeds.jpg', 'Groundnut kernels', 'Groundnut kernels for bulk buyers.', { featured: true }),
  {
    id: 'cake-ym', slug: 'yellow-mustard-cake', name: 'Yellow Mustard Cake', category: 'cake',
    photo: '/img/Yellow_Mustard_Cake.jpg', alt: 'De-oiled yellow mustard cake', blurb: 'De-oiled cake left after yellow mustard oil is extracted.', price: null, variants: [],
  },
  {
    id: 'cake-bm', slug: 'black-mustard-cake', name: 'Black Mustard Cake', category: 'cake',
    photo: '/img/Black_Mustard_Cake.jpg', alt: 'De-oiled black mustard cake', blurb: 'De-oiled cake left after black mustard seed is pressed.', price: null, variants: [],
  },
]

export const CATEGORY_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]))
export const getProduct = (id) => PRODUCTS.find((p) => p.id === id)
export const getProductBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug)
export const hasPrice = (p) => typeof p?.price === 'number' && p.price > 0

export function relatedProducts(product, n = 4) {
  const same = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category)
  const rest = PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category)
  return [...same, ...rest].slice(0, n)
}
