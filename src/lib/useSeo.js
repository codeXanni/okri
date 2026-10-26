import { useEffect } from 'react'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute('content', content)
}

export function useSeo({ title, description, image = '/img/emblem.jpg' }) {
  useEffect(() => {
    const full = title ? `${title} | Prime Fresh Oil Mills` : 'Prime Fresh Oil Mills | Yellow Mustard Oil from Rajasthan'
    document.title = full
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
    }
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:image', `${window.location.origin}${image}`)
    setMeta('name', 'twitter:card', 'summary')
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = `${window.location.origin}${window.location.pathname}`
  }, [title, description, image])
}
