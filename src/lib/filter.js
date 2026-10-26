export function filterProducts(list, { q, category, sort }) {
  const term = q.trim().toLowerCase()
  const out = list.filter((p) => (!category || p.category === category) && (!term || p.name.toLowerCase().includes(term)))
  const by = {
    az: (a, b) => a.name.localeCompare(b.name),
    za: (a, b) => b.name.localeCompare(a.name),
    pl: (a, b) => (a.price ?? Infinity) - (b.price ?? Infinity),
    ph: (a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity),
  }[sort]
  return by ? [...out].sort(by) : out
}
