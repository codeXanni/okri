import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { STEPS } from '../data/company.js'
import { useSeo } from '../lib/useSeo.js'

export default function Manufacturing() {
  useSeo({ title: 'Manufacturing & Quality', description: 'See footage from the Prime Fresh Oil Mills facility: oil processing equipment and warehouse storage.' })
  return (
    <>
      <section className="pagehead"><div className="wrap"><h1>From Manufacturing to Market</h1>
        <p className="lead">Real footage from the mill. The clips are silent, so press play when you are ready.</p></div></section>
      <section className="section"><div className="wrap videos">
        <Reveal as="figure">
          <video controls muted playsInline preload="none" poster="/img/posters/equipment.jpg" width="474" height="850"><source src="/video/Facility_Oil_Processing_Equipment.mp4" type="video/mp4" /></video>
          <figcaption>Oil processing equipment at the mill</figcaption>
        </Reveal>
        <Reveal as="figure" delay={100}>
          <video controls muted playsInline preload="none" poster="/img/posters/warehouse.jpg" width="474" height="850"><source src="/video/Warehouse_Storage_Bags.mp4" type="video/mp4" /></video>
          <figcaption>Stored bags in the mill warehouse</figcaption>
        </Reveal>
        <Reveal className="videos__text">
          <h2>What we can say today</h2>
          <p>The mill presses seed into oil and de-oiled cake. Beyond that, process details, capacity and quality certifications have not been supplied, so none are claimed here.</p>
          <p>Need specifications or documentation for your product? Ask in your quotation and the mill will tell you what it can provide.</p>
          <Link className="btn btn--primary" to="/quote">Discuss Your Requirements</Link>
        </Reveal>
      </div></section>
      <section className="section section--cream"><div className="wrap">
        <Reveal className="sechead"><div><p className="eyebrow">How a quotation works</p><h2>Four steps</h2></div></Reveal>
        <ol className="steps">{STEPS.map((s, i) => <Reveal as="li" key={s.n} delay={i * 80}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></Reveal>)}</ol>
      </div></section>
    </>
  )
}
