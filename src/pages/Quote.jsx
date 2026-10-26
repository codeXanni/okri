import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2, Mail, MessageCircle } from 'lucide-react'
import Field from '../components/Field.jsx'
import { CUSTOMER_TYPES, PACKAGING, UNITS } from '../data/options.js'
import { PRODUCTS, getProductBySlug } from '../data/products.js'
import { useCart } from '../lib/CartContext.jsx'
import { describeLine, mailtoLink, quoteMessage, whatsappLink } from '../lib/enquiry.js'
import { validateQuote } from '../lib/validation.js'
import { useSeo } from '../lib/useSeo.js'

export default function Quote() {
  useSeo({ title: 'Request a Quote', description: 'Request a bulk quotation from Prime Fresh Oil Mills. Share your product, packaging and quantity requirements.' })
  const [params] = useSearchParams()
  const { lines } = useCart()
  const fromCart = params.get('from') === 'cart' && lines.length > 0
  const preset = getProductBySlug(params.get('product') || '')
  const [f, setF] = useState({
    name: '', company: '', email: '', phone: '', customerType: '', product: preset?.name || '', packaging: '', quantity: '', unit: 'Kg',
    use: '', location: '', message: '', privateLabel: '',
  })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(null)
  const items = fromCart ? lines : null
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }))
  const privateLabel = f.customerType === 'Private-label business'
  const payload = useMemo(() => ({ ...f, items }), [f, items])

  const submit = (e) => {
    e.preventDefault()
    const errs = validateQuote(payload)
    setErrors(errs)
    if (Object.keys(errs).length) {
      requestAnimationFrame(() => document.querySelector('.has-error input, .has-error select, .has-error textarea')?.focus())
      return
    }
    setDone(payload)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (done) {
    const text = quoteMessage(done)
    return (
      <section className="section"><div className="wrap narrow">
        <div className="result" role="status">
          <CheckCircle2 size={36} aria-hidden="true" />
          <h1>Your quotation request is ready</h1>
          <p><strong>It has not been sent yet.</strong> This website has no server connected, so nothing reaches the mill until you send it yourself with one of the buttons below.</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href={whatsappLink(text)} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /> Send on WhatsApp</a>
            <a className="btn btn--ghost" href={mailtoLink('Quotation request', text)}><Mail size={18} aria-hidden="true" /> Send by Email</a>
          </div>
          <pre className="summary">{text}</pre>
          <button type="button" className="linkbtn" onClick={() => setDone(null)}>Edit request</button>
        </div>
      </div></section>
    )
  }

  return (
    <>
      <section className="pagehead"><div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Request a Quote</span></nav>
        <h1>Request Bulk Quantity</h1>
        <p className="lead">For edible oil brands, FMCG companies, distributors, retailers and private-label businesses. Tell us what you need and the mill will respond with a quotation.</p>
      </div></section>
      <section className="section section--tight"><div className="wrap narrow">
        <p className="demo-note"><strong>Demo form.</strong> Submitting prepares your enquiry for WhatsApp or email. It is not transmitted to the company from this page.</p>
        <form className="form" onSubmit={submit} noValidate>
          <fieldset>
            <legend>Contact information</legend>
            <div className="form__grid">
              <Field label="Full name" required error={errors.name}>{(a) => <input {...a} autoComplete="name" value={f.name} onChange={set('name')} />}</Field>
              <Field label="Company or organization" required error={errors.company}>{(a) => <input {...a} autoComplete="organization" value={f.company} onChange={set('company')} />}</Field>
              <Field label="Business email" required error={errors.email}>{(a) => <input {...a} type="email" autoComplete="email" value={f.email} onChange={set('email')} />}</Field>
              <Field label="Contact number" required error={errors.phone}>{(a) => <input {...a} type="tel" autoComplete="tel" value={f.phone} onChange={set('phone')} />}</Field>
            </div>
          </fieldset>
          <fieldset>
            <legend>Business requirements</legend>
            <div className="form__grid">
              <Field label="Customer type" required error={errors.customerType}>
                {(a) => <select {...a} value={f.customerType} onChange={set('customerType')}><option value="">Select…</option>{CUSTOMER_TYPES.map((t) => <option key={t}>{t}</option>)}</select>}
              </Field>
              {items ? (
                <div className="field field--wide">
                  <p className="label">Products from your cart</p>
                  <ul className="cartlist">{items.map((l) => <li key={l.key}>{describeLine(l)}</li>)}</ul>
                  <Link className="textlink" to="/quote">Choose a different product instead</Link>
                </div>
              ) : (
                <>
                  <Field label="Product of interest" required error={errors.product}>
                    {(a) => <select {...a} value={f.product} onChange={set('product')}><option value="">Select…</option>{PRODUCTS.map((p) => <option key={p.id}>{p.name}</option>)}</select>}
                  </Field>
                  <Field label="Required package size" hint="Your preference. The mill confirms what it can supply.">
                    {(a) => <select {...a} value={f.packaging} onChange={set('packaging')}><option value="">Not specified</option>{PACKAGING.map((p) => <option key={p}>{p}</option>)}</select>}
                  </Field>
                  <Field label="Estimated quantity" required error={errors.quantity}>{(a) => <input {...a} type="number" min="0" step="any" inputMode="decimal" value={f.quantity} onChange={set('quantity')} />}</Field>
                  <Field label="Unit">{(a) => <select {...a} value={f.unit} onChange={set('unit')}>{UNITS.map((u) => <option key={u}>{u}</option>)}</select>}</Field>
                </>
              )}
              <Field label="Delivery location" required error={errors.location}>{(a) => <input {...a} autoComplete="address-level2" value={f.location} onChange={set('location')} />}</Field>
              <Field label="Intended use or business requirement">{(a) => <input {...a} value={f.use} onChange={set('use')} />}</Field>
            </div>
            <Field label="Additional message" className="field--wide">{(a) => <textarea {...a} rows="4" value={f.message} onChange={set('message')} />}</Field>
          </fieldset>
          {privateLabel && (
            <fieldset>
              <legend>Private-label details</legend>
              <Field label="Branding, packaging and labelling requirements" hint="The mill will confirm whether it can accommodate your requirements.">
                {(a) => <textarea {...a} rows="3" value={f.privateLabel} onChange={set('privateLabel')} />}
              </Field>
            </fieldset>
          )}
          {Object.keys(errors).length > 0 && <p className="err err--summary" role="alert">Please fix the highlighted fields. Your answers are kept.</p>}
          <button type="submit" className="btn btn--primary btn--lg">Prepare Quotation Request</button>
        </form>
      </div></section>
    </>
  )
}
