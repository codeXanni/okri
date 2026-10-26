const KEY = 'pfom.recent.v1'
export function getRecent() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || '[]')
    return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []
  } catch { return [] }
}
export function pushRecent(id) {
  try {
    const next = [id, ...getRecent().filter((x) => x !== id)].slice(0, 6)
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch { /* ignore */ }
}
