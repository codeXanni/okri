import { Link } from 'react-router-dom'
import { ArrowRight, Factory, LayoutGrid, Package, Tag, Phone } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Carousel from '../components/Carousel.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductMedia from '../components/ProductMedia.jsx'
import { AUDIENCES, HIGHLIGHTS, STEPS } from '../data/company.js'
import { PRODUCTS, getProduct } from '../data/products.js'
import { getRecent } from '../lib/recent.js'
import { useSeo } from '../lib/useSeo.js'

const ICONS = { Factory, LayoutGrid, Package, Tag }
const hero = getProduct('oil-ymo')

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__a" style={{ '--i': 0 }}>Yellow Mustard Oil · Rajasthan</p>
          <h1 id="hero-title" className="hero__a" style={{ '--i': 1 }}>Golden mustard oil, <em>straight from the mill.</em></h1>
          <p className="lead hero__a" style={{ '--i': 2 }}>Discover Yellow Mustard Oil from Prime Fresh Oil Mills. Explore our oils, seeds and cakes for everyday use, business supply and bulk enquiries.</p>
          <div className="hero__cta hero__a" style={{ '--i': 3 }}>
            <Link className="btn btn--primary btn--lg" to="/products">Explore Our Products <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className="btn btn--ghost btn--lg" to="/quote">Request Bulk Quantity</Link>
          </div>
        </div>
        <div className="hero__visual">
          <span className="featured-label">Featured Product</span>
          <Link to={`/products/${hero.slug}`} className="hero__photo" aria-label="View Yellow Mustard Oil"><ProductMedia product={hero} eager className="media--hero" sizes="(min-width:900px) 40vw, 100vw" /></Link>
          <figure className="hero__seed">
            <img src="/img/Yellow_Mustard_Seeds.jpg" alt="Yellow mustard seeds, the raw material" width="160" height="160" />
            <figcaption>Raw material:<br />yellow mustard seed</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

function Highlights() {
  return (
    <section className="highlights" aria-label="Business highlights">
      <ul className="wrap highlights__row">
        {HIGHLIGHTS.map((h, i) => {
          const Icon = ICONS[h.icon]
          return (
            <Reveal as="li" key={h.title} delay={i * 80}>
              <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
              <div><h2>{h.title}</h2><p>{h.text}</p></div>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}

function Featured() {
  const featured = PRODUCTS.filter((p) => p.featured)
  const recent = getRecent().map(getProduct).filter(Boolean).slice(0, 4)
  return (
    <section className="section" aria-labelledby="feat-title">
      <div className="wrap">
        <Reveal className="sechead">
          <div>
            <p className="eyebrow">Catalog</p>
            <h2 id="feat-title">Explore Our Products</h2>
            <p className="muted">Find the right oil products for your requirements.</p>
          </div>
          <Link className="textlink" to="/products">View All Products <ArrowRight size={16} aria-hidden="true" /></Link>
        </Reveal>

        <Reveal className="spotlight">
          <div className="spotlight__media"><ProductMedia product={hero} /></div>
          <div className="spotlight__copy">
            <p className="chip chip--gold">Best-selling oil</p>
            <h3>Yellow Mustard Oil</h3>
            <p>{hero.description}</p>
            <div className="hero__cta">
              <Link className="btn btn--primary" to={`/products/${hero.slug}`}>View Product</Link>
              <Link className="btn btn--ghost" to={`/quote?product=${hero.slug}`}>Request Bulk Quantity</Link>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Carousel label="Featured products">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </Carousel>
        </Reveal>

        {recent.length > 0 && (
          <div className="recent">
            <h3>Recently viewed</h3>
            <ul>{recent.map((p) => <li key={p.id}><Link to={`/products/${p.slug}`}>{p.name}</Link></li>)}</ul>
          </div>
        )}
      </div>
    </section>
  )
}

const WHY = [
  { t: 'A range across three seeds', d: 'Mustard, sesame and groundnut: oils, raw seeds and de-oiled cakes from one mill.' },
  { t: 'Retail and bulk enquiries', d: 'Single packs or regular supply. Tell us the quantity and the mill will respond.' },
  { t: 'Packaging, discussed with you', d: 'Share the pack format you need. The mill confirms what it can supply.' },
  { t: 'A direct line to the mill', d: 'Phone, WhatsApp or email. No middle layer between you and the manufacturer.' },
]

function Why() {
  return (
    <section className="section section--cream why" aria-labelledby="why-title">
      <div className="wrap why__grid">
        <Reveal dir="left" className="why__photo">
          <img src="/img/rj/mustard-bloom.jpg" alt="A field of flowering mustard in Rajasthan" loading="lazy" width="800" height="450" />
          <p className="why__cap">Mustard in bloom. Stock photograph; see photo credits.</p>
        </Reveal>
        <div>
          <Reveal><p className="eyebrow">Why Prime Fresh Oil Mills</p><h2 id="why-title">A manufacturer you can speak to directly</h2></Reveal>
          <ol className="why__list">
            {WHY.map((w, i) => (
              <Reveal as="li" key={w.t} dir="right" delay={i * 90} className={i % 2 ? 'shift' : ''}>
                <span className="why__n" aria-hidden="true">0{i + 1}</span>
                <div><h3>{w.t}</h3><p>{w.d}</p></div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Mill() {
  return (
    <section className="section" aria-labelledby="mill-title">
      <div className="wrap mill">
        <Reveal className="mill__copy">
          <p className="eyebrow">Manufacturing &amp; Quality</p>
          <h2 id="mill-title">From Manufacturing to Market</h2>
          <p>Prime Fresh Oil Mills is a working vegetable oil manufacturer. The footage alongside was shot at the mill: oil processing equipment and stored bags in the warehouse.</p>
          <p className="muted">Capacity, certifications and specifications are not published here until the mill confirms them. Ask us for the details you need.</p>
          <div className="hero__cta">
            <Link className="btn btn--primary" to="/quote">Discuss Your Requirements <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className="btn btn--ghost" to="/manufacturing">See the Mill</Link>
          </div>
        </Reveal>
        <Reveal dir="right" className="mill__pics">
          <img src="/img/posters/equipment.jpg" alt="Oil processing equipment at the mill" loading="lazy" width="474" height="850" />
          <img src="/img/posters/warehouse.jpg" alt="Bags stored in the mill warehouse" loading="lazy" width="474" height="850" />
        </Reveal>
      </div>
    </section>
  )
}

function B2B() {
  return (
    <section className="b2b" aria-labelledby="b2b-title">
      <div className="wrap b2b__grid">
        <Reveal>
          <p className="eyebrow eyebrow--gold">For businesses</p>
          <h2 id="b2b-title">Looking for a Reliable Oil Manufacturing Partner?</h2>
          <p className="lead">Share your product, packaging, and quantity requirements with Prime Fresh Oil Mills to start a business enquiry.</p>
          <Link className="btn btn--gold btn--xl" to="/quote">Request a Quote <ArrowRight size={20} aria-hidden="true" /></Link>
        </Reveal>
        <ul className="b2b__aud">
          {AUDIENCES.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 80} dir="right"><h3>{a.title}</h3><p>{a.text}</p></Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="section" aria-labelledby="steps-title">
      <div className="wrap">
        <Reveal className="sechead"><div><p className="eyebrow">How it works</p><h2 id="steps-title">From enquiry to supply in four steps</h2></div></Reveal>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="finale" aria-labelledby="fin-title">
      <Reveal className="wrap finale__in">
        <h2 id="fin-title">Let&rsquo;s Discuss Your Oil Requirements</h2>
        <div className="hero__cta hero__cta--center">
          <Link className="btn btn--gold btn--lg" to="/products">Browse Products</Link>
          <Link className="btn btn--outline-light btn--lg" to="/contact"><Phone size={18} aria-hidden="true" /> Contact Our Team</Link>
        </div>
      </Reveal>
    </section>
  )
}

export default function Home() {
  useSeo({ description: 'Prime Fresh Oil Mills, Rajasthan: yellow mustard oil, sesame and groundnut oils, edible seeds and de-oiled cakes for retail and bulk buyers. Request a quotation.' })
  return (
    <>
      <Hero /><Highlights /><Featured /><Why /><Mill /><B2B /><Steps /><FinalCta />
    </>
  )
}
