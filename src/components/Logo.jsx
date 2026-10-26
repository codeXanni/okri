import { Link } from 'react-router-dom'

// Uses the supplied emblem untouched; the wordmark is live text so it stays sharp.
export default function Logo({ inverse = false }) {
  return (
    <Link to="/" className={`logo${inverse ? ' logo--inverse' : ''}`} aria-label="Prime Fresh Oil Mills, home">
      <img className="logo__mark" src="/img/emblem.jpg" alt="" width="44" height="44" />
      <span className="logo__word">PRIME FRESH<br />OIL MILLS</span>
    </Link>
  )
}
