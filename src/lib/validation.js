const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_CHARS = /^[+\d\s().-]+$/

export const isEmail = (v) => EMAIL.test(String(v).trim())
export function isPhone(v) {
  const s = String(v).trim()
  if (!PHONE_CHARS.test(s)) return false
  const digits = s.replace(/\D/g, '')
  return digits.length >= 8 && digits.length <= 15
}

const req = (v) => String(v ?? '').trim().length > 0

export function validateQuote(f) {
  const e = {}
  if (!req(f.name)) e.name = 'Enter your full name.'
  if (!req(f.company)) e.company = 'Enter your company or organization.'
  if (!req(f.email)) e.email = 'Enter your business email.'
  else if (!isEmail(f.email)) e.email = 'Enter a valid email, like name@company.com.'
  if (!req(f.phone)) e.phone = 'Enter a contact number.'
  else if (!isPhone(f.phone)) e.phone = 'Enter a valid phone number (8–15 digits, + allowed).'
  if (!req(f.customerType)) e.customerType = 'Choose your customer type.'
  if (!f.items?.length) {
    if (!req(f.product)) e.product = 'Choose a product of interest.'
    const qty = Number(f.quantity)
    if (!req(f.quantity)) e.quantity = 'Enter an estimated quantity.'
    else if (!Number.isFinite(qty) || qty <= 0) e.quantity = 'Quantity must be a number greater than 0.'
  }
  if (!req(f.location)) e.location = 'Enter a delivery location.'
  return e
}

export function validateCustomer(f) {
  const e = {}
  if (!req(f.name)) e.name = 'Enter your full name.'
  if (!req(f.email)) e.email = 'Enter your email address.'
  else if (!isEmail(f.email)) e.email = 'Enter a valid email, like name@example.com.'
  if (!req(f.phone)) e.phone = 'Enter your phone number.'
  else if (!isPhone(f.phone)) e.phone = 'Enter a valid phone number (8–15 digits, + allowed).'
  return e
}

export function validateDelivery(f) {
  const e = {}
  if (!req(f.address)) e.address = 'Enter the delivery address.'
  if (!req(f.city)) e.city = 'Enter the city.'
  if (!req(f.state)) e.state = 'Enter the state.'
  if (!req(f.postal)) e.postal = 'Enter the postal code.'
  else if (!/^[A-Za-z0-9 -]{3,10}$/.test(f.postal.trim())) e.postal = 'Enter a valid postal code.'
  return e
}

export function validateContact(f) {
  const e = {}
  if (!req(f.name)) e.name = 'Enter your name.'
  if (!req(f.email)) e.email = 'Enter your email.'
  else if (!isEmail(f.email)) e.email = 'Enter a valid email address.'
  if (f.phone && !isPhone(f.phone)) e.phone = 'Enter a valid phone number or leave it blank.'
  if (!req(f.message)) e.message = 'Write a short message.'
  return e
}
