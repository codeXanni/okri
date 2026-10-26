import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Field from '../components/Field.jsx'
import { ADDRESS_NOTE, COMPANY } from '../data/company.js'
import { mailtoLink, whatsappLink } from '../lib/enquiry.js'
import { validateContact } from '../lib/validation.js'
import { useSeo } from '../lib/useSeo.js'

export default function Contact() {
  useSeo({ title: 'Contact', description: 'Call, WhatsApp or email Prime Fresh Oil Mills for product, retail and bulk enquiries.' })
  const [f, setF] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }))
  const text = `Enquiry for Prime Fresh Oil Mills\nName: ${f.name}\nEmail: ${f.email}${f.phone ? `\nPhone: ${f.phone}` : ''}\n\n${f.message}`
  const submit = (e) => {
    e.preventDefault()
    const errs = validateContact(f)
    setErrors(errs)
    if (!Object.keys(errs).length) setDone(true)
  }
  return (
    <>
      <section className="pagehead"><div className="wrap"><h1>Contact Prime Fresh Oil Mills</h1><p className="lead">Speak to the mill directly about products, retail packs or bulk supply.</p></div></section>
      <section className="section section--tight"><div className="wrap contact">
        <div className="contact__info">
          <ul className="contact__list">
            <li><Phone size={20} aria-hidden="true" /><div><h2>Phone</h2><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></div></li>
            <li><Mail size={20} aria-hidden="true" /><div><h2>Email</h2><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div></li>
            <li><MessageCircle size={20} aria-hidden="true" /><div><h2>WhatsApp</h2><a href={whatsappLink('Hello Prime Fresh Oil Mills, I would like to make an enquiry.')} target="_blank" rel="noreferrer">Message the mill</a></div></li>
            <li><MapPin size={20} aria-hidden="true" /><div><h2>Address</h2><p>{ADDRESS_NOTE} No map is shown until it is.</p></div></li>
          </ul>
          <div className="contact__paths">
            <div><h3>General enquiry</h3><p>Use the form on this page.</p></div>
            <div><h3>Bulk quotation</h3><p>Share product, packaging and quantity.</p><Link className="btn btn--gold btn--sm" to="/quote">Request a Quote</Link></div>
          </div>
        </div>
        {done ? (
          <div className="result" role="status">
            <h2>Your message is ready</h2>
            <p><strong>It has not been sent yet.</strong> This site has no server connected. Send it with a button below.</p>
            <div className="hero__cta">
              <a className="btn btn--primary" href={whatsappLink(text)} target="_blank" rel="noreferrer">Send on WhatsApp</a>
              <a className="btn btn--ghost" href={mailtoLink('Website enquiry', text)}>Send by Email</a>
            </div>
            <button type="button" className="linkbtn" onClick={() => setDone(false)}>Edit message</button>
          </div>
        ) : (
          <form className="form" onSubmit={submit} noValidate>
            <h2 className="h-sm">Send an enquiry</h2>
            <p className="demo-note"><strong>Demo form.</strong> It prepares a message for WhatsApp or email and does not send it by itself.</p>
            <Field label="Name" required error={errors.name}>{(a) => <input {...a} autoComplete="name" value={f.name} onChange={set('name')} />}</Field>
            <Field label="Email" required error={errors.email}>{(a) => <input {...a} type="email" autoComplete="email" value={f.email} onChange={set('email')} />}</Field>
            <Field label="Phone" error={errors.phone}>{(a) => <input {...a} type="tel" autoComplete="tel" value={f.phone} onChange={set('phone')} />}</Field>
            <Field label="Message" required error={errors.message}>{(a) => <textarea {...a} rows="5" value={f.message} onChange={set('message')} />}</Field>
            <button type="submit" className="btn btn--primary">Prepare Message</button>
          </form>
        )}
      </div></section>
    </>
  )
}
