import { useEffect, useRef, useState } from 'react'

// Reveals once when scrolled into view. Without IntersectionObserver the content simply shows.
export default function Reveal({ as: Tag = 'div', dir = 'up', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(typeof IntersectionObserver === 'undefined')
  useEffect(() => {
    if (seen) return undefined
    const el = ref.current
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setSeen(true); io.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [seen])
  return (
    <Tag ref={ref} className={`reveal reveal--${dir}${seen ? ' is-in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
