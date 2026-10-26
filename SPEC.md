Status: ready-for-agent

# Prime Fresh Oil Mills: B2B quotation website

## Problem Statement

Prime Fresh Oil Mills is a real vegetable-oil manufacturer in Rajasthan. Its potential customers (edible oil brands, FMCG companies, private-label businesses) have no web presence through which to discover the mill, see what it makes and ask for a price. A buyer who lands on a generic or untrustworthy page will leave; a buyer who cannot find the hero product (Yellow Mustard Oil), a clear way to request a quotation, or a phone number will not enquire.

The mill's supplied assets are thin and uneven: a raster logo, eight product photos (seeds and cakes only), two dark vertical facility videos, one phone number and one email. There is no oil photograph, no confirmed address, and no confirmed certifications, capacities or prices, and none of these may be invented. The site must still look polished, premium and culturally rooted, and must be deliverable today (deadline Monday 26 October 2026, 11:59 PM IST) as a deployed frontend plus a 2 to 3 minute pitch video.

## Solution

A single-page, responsive React website that lets a B2B buyer discover the manufacturer, explore its products and request a quotation within a few clicks. The look is "luxury botanical with a Rajasthani heritage touch": deep green, gold, cream and sage as the main palette, with restrained maroon and terracotta accents; Cormorant serif display type over a clean sans body; jharokha (ogee arch) window frames, a faint jaali lattice, and thin painted-border dividers as refined accents.

The hero line is "From the land of valour, grace and royalty", with the supporting line "Pure yellow mustard oil, from Rajasthan". A persistent Request Quote button leads to an inline quotation form. The form does not submit data; it validates and shows a confirmation. Where the mill has not supplied a fact or photo, the site shows an explicit placeholder or an "illustrative" label and never an invented claim.

## User Stories

1. As a procurement manager at an edible oil brand, I want to see Yellow Mustard Oil presented as the hero product on arrival, so that I immediately know what this manufacturer is best at.
2. As a procurement manager, I want a Request Quote button visible in the header and the hero on every screen size, so that I can start an enquiry without searching.
3. As a procurement manager, I want the Request Quote button to stay reachable while I scroll (sticky header and a mobile bottom bar), so that I can enquire the moment I am convinced.
4. As an FMCG sourcing lead, I want a catalogue of the mill's oils, seeds and de-oiled cakes, so that I can see the full range available for bulk supply.
5. As an FMCG sourcing lead, I want to filter the catalogue by Oils, Seeds and De-oiled Cakes, so that I can reach the category I care about quickly.
6. As a buyer, I want each catalogue item to have its own "Request quote" action, so that I can ask about exactly that product.
7. As a buyer, I want clicking a product's quote action to scroll to the quote form with that product already selected, so that I do not retype it.
8. As a private-label business owner, I want a clear statement that the mill can produce oil for my own label, so that I know whether this is the right partner.
9. As a private-label business owner, I want to state my packaging preference (bulk, drums, jerry cans, retail packs) in the quote form, so that the mill can quote correctly.
10. As a buyer, I want to give company name, my name, company type, product, quantity with a unit, delivery location, phone, email and a free-text note, so that the mill has what it needs to respond.
11. As a buyer, I want the form to tell me which fields are missing or invalid before I submit, so that I do not lose my input to an unclear error.
12. As a buyer, I want a clear confirmation after I submit, so that I know the request was captured (frontend only, no data sent).
13. As a buyer, I want the form to keep what I typed when validation fails, so that I do not have to start over.
14. As a buyer, I want to see the mill's phone number and email without hunting, so that I can call or write directly.
15. As a buyer on a phone, I want to tap the phone number to call, so that I can reach the mill in one action.
16. As a buyer in India, I want a WhatsApp click-to-chat link with a prefilled greeting, so that I can message the mill the way most Indian B2B deals begin.
17. As a buyer, I want to see the mill's address, and where it is unconfirmed, a visibly marked placeholder, so that I am never misled about the location.
18. As a buyer, I want to know the mill is in Rajasthan, so that I can judge origin and logistics.
19. As a cautious buyer, I want to see real footage of the mill floor and storage, so that I trust this is a working manufacturer.
20. As a buyer on desktop, I want the portrait facility videos presented in a vertical player (not stretched to full width), so that they look intentional and sharp.
21. As a buyer, I want videos to be muted and not autoplay with sound, so that the page never surprises me.
22. As a buyer, I want a short explanation of how a quote request works (send requirement, response, samples and specs, quotation and supply), so that I know what happens after I submit.
23. As a buyer, I want pillars such as Rajasthan origin, mill-direct supply, private-label ready, and bulk and sample enquiries, so that I understand the offer without claims I cannot verify.
24. As a buyer, I want the site to avoid unverifiable numbers and certifications, so that I can trust what it does say.
25. As a buyer, I want images labelled "illustrative" where the product is a drawing and not a photograph, so that I am not deceived about what I will receive.
26. As a buyer, I want seed photographs labelled as raw material, so that I never mistake seeds for the finished oil.
27. As a visitor, I want a premium, calm visual identity (deep green, gold, cream, sage) consistent with the mill's logo, so that the brand feels established.
28. As a visitor, I want Rajasthani architectural touches (jharokha arch frames, jaali lattice, painted-border dividers) kept subtle, so that the site feels cultural and not themed or kitsch.
29. As a visitor, I want the mill's logo shown in the header and as the browser tab icon, so that I recognise the brand.
30. As a visitor on a phone, I want the layout, images and form to adapt to a narrow screen with no horizontal scrolling, so that I can use the site anywhere.
31. As a visitor on a phone, I want a collapsible menu with large tap targets, so that navigation is easy with a thumb.
32. As a visitor using a keyboard, I want visible focus states, logical tab order and labelled form fields, so that the site is usable without a mouse.
33. As a visitor using a screen reader, I want meaningful alt text, labelled controls and an announced form result, so that I can complete the enquiry.
34. As a visitor with low vision, I want text to meet contrast guidelines (gold used only for decoration or with dark text), so that I can read everything.
35. As a visitor on a slow connection, I want images sized and lazy-loaded, so that the page appears quickly.
36. As a visitor, I want smooth in-page navigation to Products, Who We Serve, The Mill, How It Works and Contact, so that I can orient myself on a single page.
37. As a visitor who prefers reduced motion, I want animations to be disabled or minimal, so that the site does not cause discomfort.
38. As an edible oil brand, FMCG company or private-label business, I want a section addressing each of these audiences directly, so that I see my own needs reflected.
39. As the mill owner, I want the pitch to be based only on facts I supplied, so that nothing on my site can embarrass me later.
40. As the mill owner, I want the unconfirmed items (address, certifications, capacities, prices, oil photographs) clearly flagged as to-be-confirmed, so that I know what to send to complete the site.
41. As the mill owner, I want visitors' quote requests to carry product, quantity, packaging and company type, so that my team can reply with a relevant quotation.
42. As the mill owner, I want a footer with contact details and a link back to the top, so that every visitor finds the contact route.
43. As an eCell evaluator, I want the site to show clear user understanding, a primary action (Request Quote) that is effortless, and deliberate design choices, so that I can score UX and product thinking.
44. As an eCell evaluator, I want the bonus ideas (WhatsApp click-to-chat, private-label explainer, how-it-works, sample and bulk enquiry fields) visible and explained, so that I can see what was identified beyond the brief.
45. As an eCell evaluator, I want a live public URL, so that I can open the site without setup.
46. As the submitter, I want the site and its design reasoning to be explainable in a 2 to 3 minute pitch video, so that the owner and evaluators understand the customer journey.

## Implementation Decisions

- The site is a single-page React application built with Vite. No backend; the quote form is client-side only and never transmits data.
- Page sections in order: sticky header, hero, trust pillars, products (hero product card plus a filterable catalogue), who we serve, the mill (facility videos), how it works, quote form, contact and footer. A mobile bottom bar keeps Request Quote and WhatsApp reachable.
- Content and catalogue data live in a single data module (contact details, navigation, pillars, products, audience, process steps, form option lists) so facts can be corrected in one place when the owner confirms them.
- The quote flow is shared state: a product's "Request quote" action sets the selected product, then scrolls to the form. The form validates required fields (name, company, email or phone, product, quantity) and shows an inline error per field and a success confirmation on valid submit.
- Visual system tokens: deep green `#064E3B`, gold `#E4B329`, cream `#FBF7ED`, sage `#B8C7B3`, near-black ink `#0B0902`, plus restrained accents of maroon and terracotta, and a dark gold (about `#8A6A00`) for any gold text on light backgrounds. Gold on white is 1.95:1, so gold is decorative or a button fill with dark label text only.
- Typography: Cormorant Garamond for display, Inter for body, with a Devanagari serif available for an optional accent line.
- Heritage motifs are shared components: a jharokha (ogee arch) frame that clips an image or illustration and draws a gold outline and inner outline; a diamond-and-dots divider; a faint jaali lattice used as a section background. Icons are inline SVG.
- Hero product imagery: because no oil photograph exists and relabelling seeds as oil is forbidden, the hero shows an SVG-drawn bottle (using the logo's drop motif) labelled "illustrative", beside the real yellow mustard seed photo labelled as raw material. Sesame and groundnut oils use illustrative tiles with a note that photography follows.
- Asset handling: the supplied logo is a JPG with no transparency, so it is shown on a white or cream badge; a cropped emblem is used for the favicon. The black mustard seed photo has its white frame cropped out. `Sesame_Seeds_Photo_1` is excluded (third-party logo and watermarks); `Sesame_Seeds_Photo_2` is the sesame image. Low-resolution images (about 400 to 500 px) are used only at card size in fixed-aspect boxes with cover fit.
- Videos: both clips are portrait 474x850, shown muted, with controls, no autoplay, in a vertical player with a poster frame. Worker consent is flagged as an open question.
- Facts policy: only these are asserted as fact: company name, Rajasthan origin (stated by the submitter, not in the supplied README), yellow mustard oil as the best-seller, sesame and groundnut as other named best-sellers, scope (edible seeds, oils, de-oiled cakes), phone, email. The address is a marked placeholder. No certifications, capacities, prices, years in operation, customer counts or "cold pressed" claims appear anywhere.
- Contact: phone `+91 90572 92529` with a tap-to-call link, a WhatsApp click-to-chat link with a prefilled greeting, and the supplied email.
- Accessibility baseline: semantic landmarks, labelled form controls, visible focus, keyboard-operable filter tabs and menu, meaningful alt text, `prefers-reduced-motion` respected, and contrast checked for every text and background pair.
- Deployment: a static build published to a public URL (host to be chosen by the submitter, for example Netlify, Vercel or GitHub Pages).

## Testing Decisions

- A good test exercises only what a visitor can see and do, through the rendered page, and does not assert on component structure, state variables or CSS.
- There is one test seam: the fully rendered application, tested with Vitest and React Testing Library, using accessible roles and labels to find elements.
- Behaviours covered: Request Quote is present in the header and hero; the catalogue shows every product and each filter tab narrows it correctly; a product's quote action selects that product in the form; submitting an incomplete form shows field errors and keeps entered values; submitting a valid form shows the confirmation and makes no network request; phone, email, WhatsApp link and the marked address placeholder are present; no excluded asset (`Sesame_Seeds_Photo_1`) is referenced; no forbidden claim text (certification, capacity, price, customer count) appears.
- Visual quality (responsiveness, contrast, motif rendering) is verified manually in a browser at phone and desktop widths rather than by automated tests.
- Prior art: none; the repository has no existing tests.
- The seam was proposed to the submitter during the conversation; no objection was recorded, but explicit confirmation was not given.

## Out of Scope

- Any backend, database, email delivery or real form submission.
- Authentication, accounts, payments, carts, or an admin interface.
- Real product photography of oils, packaging or bottles (to be supplied by the mill).
- Confirmed address, map embed, certifications (such as FSSAI), capacities, prices, grades or lead times (none supplied).
- Multi-language support beyond an optional Devanagari accent line.
- Editing, retouching or relabelling the supplied logo; vectorising it; adding or removing the words "MUSTARD OIL".
- Producing the pitch video itself and the design-explanation write-up (separate deliverables, informed by this spec).

## Further Notes

- Deadline: Monday 26 October 2026, 11:59 PM IST. Submission needs a live URL, a public 2 to 3 minute pitch video URL, a design explanation, and optionally a list of additional features.
- The reference mock-up (a "NATURAVITA" homepage) is a style reference only; none of its name, copy, statistics or "cold pressed" wording is reused.
- Full asset analysis, palette values, contrast ratios, image-by-image notes and open questions are in `asset.md` at the project root.
- Open questions for the mill owner: the factory address and town; authoritative logo file and a vector version; rights to the stock-style product photos; consent to show workers on video; whether Hindi is wanted; a business contact name and WhatsApp availability.
- Work in progress at the time of writing: the Vite project exists with the data module, the motif components and the entry files written; the application sections and the stylesheet remain to be built.

## Addendum: imagery and story direction (decided later in the conversation)

- The submitter asked for a less generic, more cinematic site: a Rajasthan landscape treatment, falling mustard blossoms and leaves in the hero, a field-to-bottle story, and the farmers' side of the business.
- Extra photographs come from Wikimedia Commons under CC BY or CC BY-SA licences (mustard-field and farming scenes, Hawa Mahal, Jaisalmer Fort). They are credited in a "Photo credits" list in the footer. They are atmosphere only: captions never claim they show the mill's own farmers or fields.
- New sections: field-to-bottle journey (four chapters in jharokha frames), a "window onto the mill" heritage band, and a Jaisalmer landscape band with a skyline silhouette leading into the footer.
- The submitter said copyrighted images from the web would be acceptable. Freely licensed sources were used instead, because the site must be publicly deployed for submission.

## Addendum 2: oils are the product; per-oil process page

- Oil is the primary business. Seeds and de-oiled cakes are no longer quotable catalogue items or options in the quote form. They appear only as steps in an oil's process (raw material in, by-product out).
- The catalogue is "Our Oils" (yellow mustard, sesame, groundnut). Each oil has a landing page at `#/oil/<id>` (hash routing, so it deploys on any static host) showing a visual process timeline: seed, storage (real warehouse clip), pressing (real processing-floor clip), oil and cake, then a quote call to action. The quote form is prefilled with that oil.
- Steps after pressing (filtering, quality checks, packing) are not confirmed by the mill, so the page says they are being confirmed and will be added.
- Open question for the owner: are seeds a real second line of business that should be quotable? If yes, restore them as a separate "Raw materials" section.
