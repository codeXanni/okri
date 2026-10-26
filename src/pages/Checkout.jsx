import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Mail, MessageCircle } from 'lucide-react'
import Field from '../components/Field.jsx'
import EmptyState from '../components/EmptyState.jsx'
import ProductMedia from '../components/ProductMedia.jsx'
import { getProduct, hasPrice } from '../data/products.js'
import { useCart } from '../lib/CartContext.jsx'
import { mailtoLink, orderMessage, whatsappLink } from '../lib/enquiry.js'
import { validateCustomer, validateDelivery } from '../lib/validation.js'
import { useSeo } from '../lib/useSeo.js'

const STEPS = ['Your details', 'Delivery', 'Review', 'Confirmation']

export default function Checkout() {
  useSeo({ title: 'Checkout', description: 'Review your cart and prepare your order enquiry for Prime Fresh Oil Mills.' })
  const { lines, summary, clear } = useCart()
  const [step, setStep] = useState(0)
  const [c, setC] = useState({ name: '', email: '', phone: '' })
  const [d, setD] = useState({ address: '', city: '', state: '', postal: '', notes: '' })
  const [errors, setErrors] = useState({})
  const [snapshot, setSnapshot] = useState(null)

  if (lines.length === 0 && !snapshot) {
    return <section className="section"><div className="wrap"><EmptyState title="Your cart is empty" action={<Link className="btn btn--primary" to="/products">Explore Products</Link>}>Add products to your cart before checking out.</EmptyState></div></section>
  }

  const next = () => {
    const errs = step === 0 ? validateCustomer(c) : step === 1 ? validateDelivery(d) : {}
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      if (step === 2) setSnapshot({ c, d, lines })
      setStep((s) => s + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  const sc = (k) => (e) => setC((s) => ({ ...s, [k]: e.target.value }))
  const sd = (k) => (e) => setD((s) => ({ ...s, [k]: e.target.value }))

  if (step === 3 && snapshot) {
    const text = orderMessage(snapshot.c, snapshot.d, snapshot.lines)
    return (
      <section className="section"><div className="wrap narrow">
        <div className="result" role="status">
          <CheckCircle2 size={36} aria-hidden="true" />
          <h1>Order enquiry prepared</h1>
          <p><strong>No order has been placed and no payment was taken.</strong> There is no server behind this demo checkout. Send the enquiry to the mill below and it will confirm pricing, availability and delivery.</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href={whatsappLink(text)} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /> Send on WhatsApp</a>
            <a className="btn btn--ghost" href={mailtoLink('Order enquiry', text)}><Mail size={18} aria-hidden="true" /> Send by Email</a>
          </div>
          <pre className="summary">{text}</pre>
          <button type="button" className="linkbtn" onClick={() => { clear(); setSnapshot(null); setStep(0) }}>Clear cart and start over</button>
        </div>
      </div></section>
    )
  }

  return (
    <>
      <section className="pagehead"><div className="wrap"><h1>Checkout</h1>
        <ol className="stepper" aria-label="Checkout progress">
          {STEPS.map((s, i) => <li key={s} className={i === step ? 'on' : i < step ? 'done' : ''} aria-current={i === step ? 'step' : undefined}><span>{i + 1}</span>{s}</li>)}
        </ol>
      </div></section>
      <section className="section section--tight"><div className="wrap checkout">
        <div>
          <p className="demo-note"><strong>Demo checkout.</strong> No payment details are collected and no order is placed. You will get an enquiry to send to the mill.</p>
          {step === 0 && (
            <fieldset className="form"><legend>Customer details</legend>
              <Field label="Full name" required error={errors.name}>{(a) => <input {...a} autoComplete="name" value={c.name} onChange={sc('name')} />}</Field>
              <Field label="Email address" required error={errors.email}>{(a) => <input {...a} type="email" autoComplete="email" value={c.email} onChange={sc('email')} />}</Field>
              <Field label="Phone number" required error={errors.phone}>{(a) => <input {...a} type="tel" autoComplete="tel" value={c.phone} onChange={sc('phone')} />}</Field>
            </fieldset>
          )}
          {step === 1 && (
            <fieldset className="form"><legend>Delivery information</legend>
              <Field label="Address" required error={errors.address}>{(a) => <input {...a} autoComplete="street-address" value={d.address} onChange={sd('address')} />}</Field>
              <div className="form__grid">
                <Field label="City" required error={errors.city}>{(a) => <input {...a} autoComplete="address-level2" value={d.city} onChange={sd('city')} />}</Field>
                <Field label="State" required error={errors.state}>{(a) => <input {...a} autoComplete="address-level1" value={d.state} onChange={sd('state')} />}</Field>
                <Field label="Postal code" required error={errors.postal}>{(a) => <input {...a} autoComplete="postal-code" value={d.postal} onChange={sd('postal')} />}</Field>
              </div>
              <Field label="Delivery notes">{(a) => <textarea {...a} rows="3" value={d.notes} onChange={sd('notes')} />}</Field>
            </fieldset>
          )}
          {step === 2 && (
            <div className="form"><h2 className="h-sm">Review your enquiry</h2>
              <p><strong>{c.name}</strong> · {c.email} · {c.phone}</p>
              <p>{d.address}, {d.city}, {d.state} {d.postal}{d.notes ? ` (${d.notes})` : ''}</p>
              <p className="muted">Delivery charges and taxes are not configured. The mill will confirm them with the quotation.</p>
            </div>
          )}
          <div className="form__nav">
            {step > 0 && <button type="button" className="btn btn--ghost" onClick={() => setStep((s) => s - 1)}>Back</button>}
            <button type="button" className="btn btn--primary" onClick={next}>{step === 2 ? 'Prepare Enquiry' : 'Continue'}</button>
          </div>
        </div>
        <aside className="ordersum" aria-label="Order summary">
          <h2>Order summary</h2>
          <ul>
            {lines.map((l) => {
              const p = getProduct(l.productId)
              return (
                <li key={l.key}>
                  <div className="cline__img"><ProductMedia product={p} /></div>
                  <div><p className="cline__name">{p.name}</p><p className="cline__meta">{l.qty} {l.unit} · {l.packaging || 'Packaging TBC'}</p></div>
                  <p>{hasPrice(p) ? `₹${(p.price * l.qty).toLocaleString('en-IN')}` : 'TBC'}</p>
                </li>
              )
            })}
          </ul>
          <div className="sum"><span>Subtotal</span><strong>{summary.complete ? `₹${summary.subtotal.toLocaleString('en-IN')}` : 'To be confirmed'}</strong></div>
          {!summary.complete && <p className="note">TBC = to be confirmed by the mill. Missing prices are never counted as zero.</p>}
          <Link className="textlink" to="/quote?from=cart">Request bulk quantity instead</Link>
        </aside>
      </div></section>
    </>
  )
}
