import { COMPANY } from '../data/company.js'
import { getProduct } from '../data/products.js'

export function describeLine(l) {
  const p = getProduct(l.productId)
  const parts = [`${p?.name ?? l.productId} × ${l.qty}${l.unit ? ` ${l.unit}` : ''}`]
  if (l.packaging) parts.push(`packaging: ${l.packaging}`)
  return parts.join(', ')
}

export const whatsappLink = (text) => `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`
export const mailtoLink = (subject, body) => `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export function quoteMessage(f) {
  const lines = [
    'Quotation request for Prime Fresh Oil Mills',
    `Name: ${f.name}`,
    `Company: ${f.company} (${f.customerType})`,
    `Email: ${f.email}`,
    `Phone: ${f.phone}`,
    f.items?.length ? `Products:\n${f.items.map((l) => `- ${describeLine(l)}`).join('\n')}` : `Product: ${f.product}`,
    !f.items?.length && f.packaging ? `Packaging: ${f.packaging}` : '',
    !f.items?.length ? `Quantity: ${f.quantity} ${f.unit}` : '',
    `Delivery location: ${f.location}`,
    f.use ? `Intended use: ${f.use}` : '',
    f.privateLabel ? `Private-label notes: ${f.privateLabel}` : '',
    f.message ? `Message: ${f.message}` : '',
  ]
  return lines.filter(Boolean).join('\n')
}

export function orderMessage(customer, delivery, lines) {
  return [
    'Order enquiry for Prime Fresh Oil Mills (pricing to be confirmed)',
    `Name: ${customer.name}`,
    `Email: ${customer.email}`,
    `Phone: ${customer.phone}`,
    `Deliver to: ${[delivery.address, delivery.city, delivery.state, delivery.postal].join(', ')}`,
    delivery.notes ? `Notes: ${delivery.notes}` : '',
    `Items:\n${lines.map((l) => `- ${describeLine(l)}`).join('\n')}`,
  ].filter(Boolean).join('\n')
}

// Backend seam: replace the body with a fetch() to your API / CRM / email service.
export async function submitEnquiry(/* payload */) {
  return { delivered: false }
}
