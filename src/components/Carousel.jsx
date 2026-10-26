import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Scroll-snap carousel: native touch swipe, arrow buttons, arrow keys, dot position. No autoplay.
export default function Carousel({ label, children }) {
  const track = useRef(null)
  const [index, setIndex] = useState(0)
  const [shown, setShown] = useState(1)
  const items = Array.isArray(children) ? children : [children]

  const [edge, setEdge] = useState({ start: true, end: false })

  // Position follows scroll progress so the last slide reads n / n even when several are visible at once.
  const onScroll = useCallback(() => {
    const t = track.current
    if (!t) return
    const max = t.scrollWidth - t.clientWidth
    const progress = max > 0 ? t.scrollLeft / max : 0
    const slideW = t.children[0].getBoundingClientRect().width + 20
    const visible = Math.max(1, Math.floor((t.clientWidth + 20) / slideW))
    setShown(visible)
    setIndex(Math.min(items.length - visible, Math.round(t.scrollLeft / slideW)))
    if (progress >= 0.99) setIndex(items.length - visible)
    setEdge({ start: t.scrollLeft <= 2, end: t.scrollLeft >= max - 2 })
  }, [items.length])

  useEffect(() => { onScroll() }, [onScroll])

  const go = (dir) => {
    const t = track.current
    const w = t.children[0].getBoundingClientRect().width + 20
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    t.scrollBy({ left: dir * w, behavior: reduce ? 'auto' : 'smooth' })
  }
  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
  }

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="carousel__track" ref={track} onScroll={onScroll} onKeyDown={onKey} tabIndex={0} aria-label={`${label}. Use left and right arrow keys to move.`}>
        {items.map((c, i) => <div className="carousel__slide" key={i} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${items.length}`}>{c}</div>)}
      </div>
      <div className="carousel__bar">
        <div className="carousel__dots" aria-hidden="true">
          {items.map((_, i) => <span key={i} className={i >= index && i < index + shown ? 'on' : ''} />)}
        </div>
        <p className="carousel__pos" aria-live="polite">{shown > 1 ? `${index + 1}–${index + shown}` : index + 1} / {items.length}</p>
        <div className="carousel__btns">
          <button type="button" className="iconbtn iconbtn--ring" onClick={() => go(-1)} disabled={edge.start} aria-label="Previous products"><ChevronLeft size={20} aria-hidden="true" /></button>
          <button type="button" className="iconbtn iconbtn--ring" onClick={() => go(1)} disabled={edge.end} aria-label="Next products"><ChevronRight size={20} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  )
}
