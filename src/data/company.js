// Single source of truth for company facts. Only owner-confirmed details are real;
// anything unconfirmed is flagged so the UI can label it instead of inventing it.
export const COMPANY = {
  name: 'Prime Fresh Oil Mills',
  phone: '+91 90572 92529',
  phoneHref: 'tel:+919057292529',
  whatsappNumber: '919057292529',
  email: 'Puneet2garg@gmail.com',
  // Not confirmed by the owner. Never render as if real; see ADDRESS_NOTE.
  address: null,
  region: 'Rajasthan, India',
}

export const ADDRESS_NOTE = 'Registered address to be confirmed by the mill.'

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Our Products' },
  { to: '/manufacturing', label: 'Manufacturing & Quality' },
  { to: '/contact', label: 'Contact' },
]

export const HIGHLIGHTS = [
  { icon: 'Factory', title: 'Vegetable oil manufacturer', text: 'You deal with the mill directly.' },
  { icon: 'LayoutGrid', title: 'Oils, seeds & cakes', text: 'Mustard, sesame and groundnut lines.' },
  { icon: 'Package', title: 'Retail & bulk enquiries', text: 'From trial lots to regular supply.' },
  { icon: 'Tag', title: 'Private-label enquiries', text: 'Tell us your pack. The mill will confirm.' },
]

export const AUDIENCES = [
  { title: 'Edible oil brands', text: 'Mustard, sesame and groundnut oil from a manufacturer you can speak to directly.' },
  { title: 'FMCG companies', text: 'Bulk supply conversations built around your volumes, packaging and schedule.' },
  { title: 'Distributors & wholesalers', text: 'Share the quantities you move and the pack formats you need.' },
  { title: 'Private-label businesses', text: 'Oil for your own label. Send the pack and quantity and the mill will respond.' },
]

export const STEPS = [
  { n: '01', title: 'Send your requirement', text: 'Product, quantity and packaging in one short form.' },
  { n: '02', title: 'The mill responds', text: 'By phone, WhatsApp or email.' },
  { n: '03', title: 'Samples & specifications', text: 'Discuss samples and specs for your product.' },
  { n: '04', title: 'Quotation & supply', text: 'Receive a quotation and agree supply terms.' },
]
