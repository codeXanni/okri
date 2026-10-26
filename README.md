# Prime Fresh Oil Mills website

React + Vite + React Router frontend. No backend: the cart, checkout and quote/contact forms are demos that prepare an enquiry for WhatsApp or email. Nothing is transmitted and no payment is taken.

## Run (from this folder, not its parent)
    npm install
    npm run dev       # http://localhost:5173
    npm test          # vitest
    npm run build     # outputs dist/

## Update content
- Company facts and contact: `src/data/company.js` (address is `null` until confirmed).
- Products, prices, pack sizes: `src/data/products.js`. Set `price` (number, INR) and `variants` (array of strings) per product; price UI, cart totals and price sorting switch on automatically.
- Add real oil photos by setting `photo` on the oil entries (they currently show a labelled illustration).

## Demo / unconfirmed
Prices, pack sizes, address, oil photographs, certifications and capacity are unconfirmed and shown as "on request". Mustard field photos are stock images (credited at /credits).

## Going live
- Orders/payments: connect `src/lib/enquiry.js#submitEnquiry` to a backend and use a payment provider (e.g. Razorpay).
- Quotes/contact: post the same payload to an API, email service or CRM.
- Deploy: Vercel, framework Vite, build `npm run build`, output `dist` (`vercel.json` handles route rewrites). Add a sitemap once the domain is known.
