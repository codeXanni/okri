import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import ProductMedia from '../components/ProductMedia.jsx'
import { AUDIENCES, COMPANY } from '../data/company.js'
import { CATEGORIES, PRODUCTS } from '../data/products.js'
import { useSeo } from '../lib/useSeo.js'

export default function About() {
  useSeo({ title: 'About Us', description: 'Prime Fresh Oil Mills is a vegetable oil manufacturer in Rajasthan producing mustard, sesame and groundnut oils, edible seeds and de-oiled cakes.' })
  return (
    <>
      <section className="pagehead"><div className="wrap"><h1>About Prime Fresh Oil Mills</h1>
        <p className="lead">A vegetable oil manufacturer in {COMPANY.region}, working with edible seeds, oils and de-oiled cakes.</p></div></section>
      <section className="section"><div className="wrap split">
        <Reveal><h2>Who we are</h2>
          <p>Prime Fresh Oil Mills makes edible oils from mustard, sesame and groundnut, and also handles the raw seeds and the de-oiled cakes left after extraction. Yellow mustard oil is the mill&rsquo;s best-selling oil.</p>
          <p className="muted">We publish only what the mill has confirmed. Founding year, capacity, certifications and customer references are not listed because none have been supplied.</p></Reveal>
        <Reveal dir="right"><img className="roundimg" src="/img/rj/mustard-close.jpg" alt="Mustard flowers in a field" loading="lazy" width="800" height="533" /></Reveal>
      </div></section>
      <section className="section section--cream"><div className="wrap">
        <Reveal className="sechead"><div><p className="eyebrow">Product portfolio</p><h2>Three seeds, three product types</h2></div></Reveal>
        <div className="portfolio">
          {CATEGORIES.map((c) => {
            const list = PRODUCTS.filter((p) => p.category === c.id)
            return (
              <Reveal key={c.id} className="portfolio__col">
                <h3>{c.label}</h3>
                <ul>{list.map((p) => <li key={p.id}><Link to={`/products/${p.slug}`}><span className="thumb"><ProductMedia product={p} /></span>{p.name}</Link></li>)}</ul>
              </Reveal>
            )
          })}
        </div>
      </div></section>
      <section className="section"><div className="wrap">
        <Reveal className="sechead"><div><p className="eyebrow">Who we serve</p><h2>Customer segments</h2></div></Reveal>
        <ul className="aud">{AUDIENCES.map((a, i) => <Reveal as="li" key={a.title} delay={i * 70}><h3>{a.title}</h3><p>{a.text}</p></Reveal>)}</ul>
      </div></section>
      <section className="section section--cream"><div className="wrap split">
        <Reveal><h2>Transparent business communication</h2><p>You speak to the mill itself. Prices, pack sizes, availability and specifications are confirmed in writing by the mill on enquiry.</p></Reveal>
        <Reveal dir="right" className="hero__cta"><Link className="btn btn--gold btn--lg" to="/quote">Request a Quote</Link><Link className="btn btn--ghost btn--lg" to="/contact">Contact Us</Link></Reveal>
      </div></section>
    </>
  )
}
