import { COMPANY } from '../data/company.js'
import credits from '../data/photoCredits.json'
import { useSeo } from '../lib/useSeo.js'

function Page({ title, children }) {
  useSeo({ title })
  return <section className="section"><div className="wrap narrow prose"><h1>{title}</h1>{children}</div></section>
}

export function Privacy() {
  return (
    <Page title="Privacy Policy">
      <p>This website collects no personal data on its own servers. Forms you fill in stay in your browser until you choose to send them to Prime Fresh Oil Mills by WhatsApp or email.</p>
      <p>Your cart and recently viewed products are saved in your browser&rsquo;s local storage so they survive a refresh. Clear your browser data to remove them. No payment details are ever requested.</p>
      <p>Questions: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. This is a template; the company should review it before launch.</p>
    </Page>
  )
}
export function Terms() {
  return (
    <Page title="Terms">
      <p>Product information on this site is general. Prices, pack sizes, availability and specifications are confirmed by Prime Fresh Oil Mills in a written quotation.</p>
      <p>The cart and checkout are an enquiry tool. Submitting them does not create an order or a contract. This is a template; the company should review it before launch.</p>
    </Page>
  )
}
const STOCK = [
  { t: 'Mustard oil in a jar with mustard seeds (Kolkata)', by: 'Biswarup Ganguly', lic: 'CC BY 3.0', url: 'https://commons.wikimedia.org/wiki/File:Mustard_Oil_%26_Seeds_-_Kolkata_2003-10-31_00537.JPG' },
  { t: 'Groundnut oil', by: 'KISUMAR123', lic: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Groundnut_oil.jpg' },
]

export function Credits() {
  const rows = Object.values(credits).filter((c) => ['mustard-bloom.jpg', 'mustard-close.jpg', 'oil-sesame.jpg'].includes(c.file))
  return (
    <Page title="Photo credits">
      <p>Logo, seed, cake and facility media were supplied by Prime Fresh Oil Mills. Oil bottle photographs marked &ldquo;Sample photo&rdquo; and the mustard field photographs are stand-in stock images, to be replaced with the mill&rsquo;s own:</p>
      <ul>
        {STOCK.map((c) => <li key={c.t}><a href={c.url} target="_blank" rel="noreferrer">{c.t}</a> by {c.by}, {c.lic}</li>)}
        {rows.map((c) => <li key={c.file}><a href={c.page} target="_blank" rel="noreferrer">{c.title.replace('File:', '')}</a> by {c.artist}, {c.license}</li>)}
      </ul>
    </Page>
  )
}
