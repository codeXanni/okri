import { Link } from 'react-router-dom'
import EmptyState from '../components/EmptyState.jsx'
import { useSeo } from '../lib/useSeo.js'

export default function NotFound() {
  useSeo({ title: 'Page not found' })
  return (
    <section className="section"><div className="wrap">
      <EmptyState title="We couldn't find that page" action={<Link className="btn btn--primary" to="/products">Explore Products</Link>}>
        The link may be old, or the product may no longer be listed.
      </EmptyState>
    </div></section>
  )
}
