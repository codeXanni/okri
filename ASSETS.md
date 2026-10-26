# Prime Fresh Oil Mills - Brand and Asset Document (eCell Qualification Challenge 01)

Scope: every file in `/Users/nitinmishra/Documents/proj` was analysed locally (no web). Sources are cited in square brackets: [PDF p.N] = `eCellQualificationRound.pdf`, [README] = `README_START_HERE.txt`, [CSV] = `MEDIA_INDEX.csv`, otherwise the asset file name.
Convention: **OBS** = directly observed or measured. **INF** = inference or recommendation.
Method notes: the PDF text was extracted with PDFKit and pages were rendered and viewed. Image dimensions came from `sips`. Colours were sampled from real pixels (Swift/AppKit, 3-bit-per-channel binning, averaged per bin). Video metadata came from AVFoundation and `mdls`, and 6 frames per video were extracted and viewed. ffmpeg, ffprobe, PIL and poppler were not installed, so Swift was used instead. WCAG contrast was calculated by formula. Font identification is visual only.

---

## 1. Summary

- **Task [PDF p.1-3]:** build a frontend-only website for Prime Fresh Oil Mills (a real vegetable-oil manufacturer). The audience is edible-oil brands, FMCG companies and private-label businesses seeking bulk or manufacturing partners. Deadline **Monday, 26 October 2026, 11:59 PM IST**. A 2-3 minute pitch video is also required. Today is 26 Oct 2026, so the deadline is the same day.
- **Assets supplied:** 1 logo (JPG), 8 product photos (seeds and de-oiled cakes), 2 short vertical facility videos, plus a README and a CSV index. Total about 4.5 MB.
- **Brand look (OBS):** a golden-yellow and forest-green circular emblem (flower, oil drop, wheat or seed sprigs) over a bold green all-caps sans wordmark on white. The palette is natural, agricultural and warm. Gold is about #E4B329 and green is about #037245.
- **Main strengths:** a usable, recognisable logo. Clean white-background shots of yellow mustard seeds and sesame, which suit a catalogue grid. Real facility footage is a credibility asset.
- **Main risks:**
  - The logo is a raster JPG (no transparency, no vector).
  - Image quality, framing and background are inconsistent. Several are low resolution (400-500 px).
  - `Sesame_Seeds_Photo_1.jpg` carries a third-party "DNA हिंदी" logo and a yellow frame, and appears to carry faint stock-site watermarks.
  - **No yellow mustard oil photo exists, although it is the hero product [PDF p.1].** The README forbids relabelling a seed photo as oil.
  - No address is confirmed. No certifications, capacities or prices are given. The videos are dark, shaky and portrait.
  - The README says the logo contains "MUSTARD OIL", but the file as supplied does not visibly show those words (see 3.1).
- **Confirmed facts [README]:**
  - Company: Prime Fresh Oil Mills.
  - Bestselling oil: yellow mustard oil.
  - Other bestsellers: groundnut seeds, and sesame seeds and oil.
  - Scope: edible seeds, oils and de-oiled cakes.
  - Phone: +91 90572 92529.
  - Email: Puneet2garg@gmail.com.

---

## 2. File inventory

| # | Path (under `Prime_Fresh_Oil_Mills_eCell_Labeled_Assets/` unless noted) | Type | Pixels | Size (bytes) | Notes |
|---|---|---|---|---|---|
| 0 | `/Users/nitinmishra/Documents/proj/eCellQualificationRound.pdf` | PDF, 3 pages, A4 (595.28x841.89 pt) | - | 396,237 | Brief and rules. Text-only, with emoji headings. |
| 1 | `README_START_HERE.txt` | text | - | 1,362 | Confirmed details and limitations |
| 2 | `MEDIA_INDEX.csv` | CSV | - | 1,370 | Maps labelled filenames to original WhatsApp filenames |
| 3 | `01_Branding/Prime_Fresh_Oil_Mills_Original_Logo.jpg` | JPEG, RGB, no alpha, 72 dpi | 1171x807 | 151,792 | Logo, white background |
| 4 | `02_Product_Images/Yellow_Mustard_Seeds.jpg` | JPEG | 1000x1000 | 122,309 | Top-down pile on white. Hero ingredient. |
| 5 | `02_Product_Images/Black_Mustard_Seeds.jpg` | JPEG | 1080x1434 (3:4 portrait) | 699,185 | Wooden scoop, warm. Has a white frame. |
| 6 | `02_Product_Images/Sesame_Seeds_Photo_1.jpg` | JPEG | 1200x900 (4:3) | 199,545 | Heaped hulled sesame. Third-party logo and frame. |
| 7 | `02_Product_Images/Sesame_Seeds_Photo_2.jpg` | JPEG | 1600x1600 | 223,927 | Scattered sesame on white. Best quality of the set. |
| 8 | `02_Product_Images/Black_Sesame_Seeds.jpg` | JPEG | 500x500 | 26,737 | Pile on off-white. Low resolution. |
| 9 | `02_Product_Images/Groundnut_Seeds.jpg` | JPEG | 500x500 | 57,620 | Full-frame groundnut kernels. Low resolution. |
| 10 | `02_Product_Images/Yellow_Mustard_Cake.jpg` | JPEG | 400x400 | 25,746 | Cake flakes on white. Lowest resolution. |
| 11 | `02_Product_Images/Black_Mustard_Cake.jpg` | JPEG | 500x254 (about 2:1) | 22,788 | Cake flakes, cropped, soft. |
| 12 | `03_Facility_Videos/Warehouse_Storage_Bags.mp4` | MP4 H.264 + AAC | 474x850 portrait, about 29.8 fps | 1,796,029 | 8.92 s, about 1.35 Mbps video, audio 256 kbps |
| 13 | `03_Facility_Videos/Facility_Oil_Processing_Equipment.mp4` | MP4 H.264 + AAC | 474x850 portrait, about 27.8 fps | 1,470,794 | 7.31 s, about 1.35 Mbps video, audio 256 kbps |

Non-content files: `.DS_Store` x3 (ignore).
OBS: the README says "8 labeled product photos". The folder holds 8 JPGs, but the CSV has 9 rows. The ninth row is the logo, so there are 9 image rows plus 2 videos (11 rows total).

---

## 3. Brand: logo analysis

File: `01_Branding/Prime_Fresh_Oil_Mills_Original_Logo.jpg` (1171x807, aspect about 1.45:1, 151.8 KB, 72 dpi, sRGB, no alpha).

### 3.1 What it shows (OBS)

- A **circular emblem** on a plain white background, centred above a one-line wordmark. The emblem is about 650 px in diameter.
- **Rings:** two concentric thin gold circles form the outer border. The outer ring is slightly heavier and the inner ring is thinner. The inner ring has gaps at the bottom, where the sprigs overlap it.
- **Flower:** a stylised five-petal flower in gold at the top centre (around x600, y170). It has a darker gold petal outline or veining, a small central cluster of stamens with dotted tips, and two fine antennae-like stamens. It is likely a mustard blossom (**INF**: mustard flowers are yellow, which fits the hero product, but the flower is not labelled).
- **Leaves:** four green leaves flank the flower, two on each side. They are mid-green gradient shapes with light central veins, arranged symmetrically and angling outward and upward.
- **Oil drop:** a large gold teardrop in the centre of the emblem (about 170 px wide, 260 px tall). It has a white curved highlight on its left edge and a subtle inner shine. A thinner gold inner arc or loop encircles the drop's upper half, like a ring that "holds" the drop.
- **Sprigs:** two green wheat- or grain-like sprigs curve up from the lower left and lower right inside the ring. They are thin, tapering and symmetrical, and cross the inner ring edge. They are lighter and greyer than the leaves, with muted green and grey-green strokes.
- **Wordmark:** "PRIME FRESH OIL MILLS" in a single line, all caps, below the emblem. It is bold, slightly wide and geometric sans-serif, in forest green. The letterforms are open and uniform in stroke, and look like Montserrat, Poppins or Gotham Bold (**INF**, not confirmed). Tracking is slightly open.
- **No "MUSTARD OIL" text is visible in this file.** [README] says the original logo included those words and that the owner wants them removed. OBS: the file as supplied does not show them. The ink bounding box is x36-1158, y12-783, so the wordmark nearly touches the left, right and bottom edges. The text may have been cropped out earlier, or the README may describe a different variant. **Open question: confirm with the owner which file is authoritative.** The README also says not to imply the original was already edited. Either way, treat this JPG as the only logo available and make no claim about "MUSTARD OIL".
- Whitespace: the top margin is about 12 px and the bottom margin is about 24 px. The tight crop is not suitable for use without added padding.

### 3.2 Palette extracted from pixels

| Role | HEX | RGB | Where | Source |
|---|---|---|---|---|
| Primary - Brand gold | **#E4B329** (range #E3B325-#E6B427) | 228,179,41 | Drop, flower, rings. About 4.5% of pixels as the top non-white bin. | OBS: centre and ring samples |
| Primary - Brand green | **#037245** (wordmark sampled #007341 / #006E3E) | 3,114,69 | Wordmark text, darkest greens. | OBS |
| Secondary - Leaf green | **#5F963E** (#5E8744 on right leaf) | 95,150,62 | Leaves and sprigs. | OBS |
| Accent - Light gold / cream | **#FCF5D1** | 252,245,209 | Highlights and drop shine. | OBS (bin) |
| Accent - Olive gold | **#D5B24C** / **#DAB035** | 213,178,76 | Anti-aliased gold edges and petal detail. | OBS |
| Neutral - White | **#FEFDFD** (about #FFFFFF) | 254,253,253 | Background, 83% of pixels. | OBS |
| Neutral - Wheat grey-green | **#A2B69C** | 162,182,156 | Thin sprig tips. | OBS |

INF (suggested working palette for the website): gold #E4B329, deep green #037245 (or #00703C), leaf green #5F963E, cream #FCF5D1, ink near-black #0B0902 or a very dark green, white #FFFFFF.

### 3.3 Contrast ratios (calculated, WCAG formula)

| Pair | Ratio | Verdict |
|---|---|---|
| Green #037245 on white | 6.0:1 | Passes AA for normal text (4.5) and AAA for large text |
| Green #00703C on white | 6.2:1 | Passes AA |
| Gold #E4B329 on white | **1.95:1** | **Fails** for text and for non-text UI (3:1). Decorative use only. |
| Green #037245 on gold #E4B329 | 3.1:1 | Fails for body text. Borderline for large text. |
| Near-black #0B0902 on gold #E4B329 | 10.2:1 | Passes. Use dark text on gold buttons. |
| Green #037245 on cream #FCF5D1 | 5.5:1 | Passes AA |
| Near-black on white | about 19.9:1 | Passes |
| Darker gold #8A6A00 on white | 5.1:1 | Passes. A candidate "text gold" (INF). |

INF: do not set white text on gold. Use dark green or near-black text on gold, or use a gold-filled button with dark label. The quote CTA should be a high-contrast colour (e.g. green fill with white text at 6:1, or gold with near-black text at 10:1).

### 3.4 Flaws and risks

- Raster JPG at 1171x807. Gold rings and the fine sprigs show mild JPEG compression noise. It will look soft if used above about 600 px wide on retina displays.
- **No transparency.** The off-white background (#FFFEFF, not pure white) will show as a faint box on any tinted or dark section. Use it on a white or near-white surface or place it in a white badge.
- The thin gold ring (about 3-5 px) will disappear at favicon or small sizes. The thin sprigs and flower detail will also be lost below about 120 px.
- The aspect ratio (1.45:1) is not square, so a separate square mark (the circular emblem only) must be cropped for favicon, app icon and social avatar.
- The wordmark touches the left and right image edges, which gives no safe margin.
- No vector source (SVG/AI/PDF) was provided. Request one from the owner. If unavailable, tracing is a possible fallback but changes the original.
- Emblem has many fine details, so a simplified one-colour version would be needed for stamps, packaging and footers.

### 3.5 Suggested usage (INF)

- Header: crop the emblem and wordmark with 12-16 px padding on a white bar. A lockup of emblem (about 40-48 px) next to live-text "Prime Fresh Oil Mills" is a good alternative when the full lockup is too tall.
- Favicon and social avatar: crop the circle plus drop and flower only, on a white square.
- Hero or footer: place on white or cream cards. On a dark green footer, use a white circular badge behind the emblem.
- Keep a clear space of about 0.25x emblem height. Do not recolour, stretch, or add effects. Do not add "MUSTARD OIL" back in, and do not imply the logo has been edited [README].

---

## 4. Product images

Quality is rated on pixel size and visible softness. "Dominant colours" come from pixel binning. Where a bin's share of white is stated, the rest is the subject. Percentages are of sampled pixels.

### 4.1 `Yellow_Mustard_Seeds.jpg` - hero ingredient, priority 1

- **Shows (OBS):** an irregular top-down heap of roughly 800-1000 round yellow mustard seeds with scattered seeds around the edges. The pile fills about 85-90% of the frame, centred slightly right.
- **Composition and lighting:** flat-lay, overhead, soft even lighting with little shadow. Seeds look slightly glossy. Edges are sharp. A few seeds at the left and top edges are separated.
- **Background:** pure white (#FEFDFD, 48% of pixels). Clean and cutout-friendly.
- **Dominant colours:** #FCCC50, #FBD16E, #F5B00A, #F5B22F, #FCC931. Saturated yellow-amber, matching the logo gold but a little brighter and more orange.
- **Quality:** 1000x1000, 122 KB. Good for a card or hero section. May be soft at full-width hero scale. A few edge pixels show slight halo from cutout.
- **Usability:** best visual match to the brand gold. Use for the catalogue and as a supporting image in the hero (**not** as the oil product). Could be placed beside a bottle mock-up only if clearly labelled as seeds.

### 4.2 `Black_Mustard_Seeds.jpg`

- **Shows (OBS):** close-up, shallow depth of field. Dark brown-grey mustard seeds spilling from a carved wooden scoop onto a wooden surface. Seeds are in sharp focus in the centre and foreground. The scoop and the rest blur to the top and right.
- **Composition:** portrait, diagonal flow from top-right to bottom-left. Warm and rustic.
- **Background and frame:** there is a thick white border (about 108 px left and right, about 75 px top, about 55 px bottom) around the photograph. The white frame makes the actual photo about 860x1300.
- **Dominant colours:** #E8CA96, #EBD1A6, #CDAB74, #B38B53 (wood), #2B1307, #170601 (seeds and shadows). Warm tan and chocolate brown.
- **Quality:** 1080x1434, 699 KB. Highest visual quality and the most "premium" mood of the set. Needs cropping to remove the white border.
- **Usability:** hero/lifestyle banner candidate (after crop), "Black mustard" card, general section image. It is a stock-style photo, so check the origin and licence (**open question**, section 9).

### 4.3 `Sesame_Seeds_Photo_1.jpg`

- **Shows (OBS):** a large heap of hulled, off-white sesame seeds filling the whole frame, with dark shadow background visible at the upper edges.
- **Overlays (OBS):** a **"DNA हिंदी" logo** (yellow rectangle with black "DNA" and "हिंदी") at top right, a **thick yellow/orange L-shaped frame** along the top and left edges, and faint diagonal stock-style watermarks on the seeds (visible as pale text across the pile).
- **Dominant colours:** #E8D2AF, #D0AC71, #D2B68B, #E4C694, #F1E5D0, with shadows #120603. Cream and beige.
- **Quality:** 1200x900, 200 KB, sharp, but contaminated by branding.
- **Usability (INF):** **do not use as is.** It shows another publisher's logo and watermarks, which is a copyright or credibility risk. Crop heavily or exclude. Use `Sesame_Seeds_Photo_2.jpg` instead.

### 4.4 `Sesame_Seeds_Photo_2.jpg`

- **Shows (OBS):** hulled sesame seeds scattered across a bright white surface, a dense cluster centre-right and loose seeds spreading left and downward. Hard light from upper right casts crisp short shadows to the lower left of seeds.
- **Background:** near-white (#FBFBFA, 57%). Slight tonal variation.
- **Dominant colours:** #FBECCE, #F5D6AC, #F3CA92, #FBE3B7, #CB9350, #E9B473. Pale cream to light tan.
- **Quality:** 1600x1600, 224 KB. High resolution and the cleanest overall. The cluster is off-centre and cropped at the right edge, which is fine for a card with text on the left.
- **Usability:** primary sesame image. It has a natural empty area on the left for text overlay.

### 4.5 `Black_Sesame_Seeds.jpg`

- **Shows (OBS):** a mound of black sesame seeds, top-down, centred, with scattered seeds. Seeds are matte, dark charcoal.
- **Background:** off-white, light grey tinge (#FEFDFD 60%) with a faint bluish edge shadow. Looks like a catalogue cutout.
- **Dominant colours:** #504B4E, #322D31, #110C10, #6E6A6B. Neutral charcoal.
- **Quality:** 500x500, 27 KB. Visibly low resolution. Seed detail is soft. Contains slight compression blocks.
- **Usability:** acceptable at card size (up to about 300 px). Do not enlarge past about 500 px.

### 4.6 `Groundnut_Seeds.jpg`

- **Shows (OBS):** full-frame field of groundnut (peanut) kernels with a reddish-pink skin, with no background and no scoop. Many kernels at different angles. Kernel skins show a pale pink to rose-brown tone, some with white tips.
- **Dominant colours:** #D0948A, #EDB4A8, #B4736A, #CC8977, #E8A896, #92524B. Salmon-pink and rose-brown. This is the only image with no white.
- **Quality:** 500x500, 58 KB. Sharp enough at small size and noticeably low resolution above 500 px. Even, flat lighting.
- **Usability:** the dense texture works as a catalogue tile or as a pattern, but its pink cast is cooler than the golden brand palette. Use a neutral border or slight warm grade to blend. A bestseller per [README].

### 4.7 `Yellow_Mustard_Cake.jpg`

- **Shows (OBS):** irregular dried slabs and flakes of de-oiled mustard cake in golden brown, laid out on white. Rough, fibrous surface with lighter glare patches.
- **Dominant colours:** #CC9330, #D9A64B, #E5B154, #E8B76B, #F0CA90. Mustard-gold and caramel.
- **Quality:** 400x400, 26 KB. Lowest-resolution file. Slightly blurry. Pieces cut off at the left and bottom edges.
- **Usability:** acceptable as a small catalogue tile. Looks like a stock-catalogue photo. Its colour is in harmony with the logo gold.

### 4.8 `Black_Mustard_Cake.jpg`

- **Shows (OBS):** a pile of dark brown-olive cake chunks and flakes, partly sitting in a bowl or container (rim visible at the lower left). The cutout is rough with a white halo at the left.
- **Dominant colours:** #0B0902 (deep shadow, 11%), #AB946E, #32280E, #53492E, #8E764F, #483510. Earthy olive-brown.
- **Quality:** 500x254, about 2:1 wide crop, 23 KB. Soft and upscaled-looking, with a bright white top edge. The lowest quality for its size.
- **Usability:** small catalogue tile only. Needs a consistent crop (for example centre-crop to square, which loses the pile edges). Consider whether to use it at all.

### 4.9 Product-image set: cross-cutting observations

| Issue | Detail |
|---|---|
| Inconsistent backgrounds | 5 white or off-white (Yellow Mustard Seeds, Sesame 2, Black Sesame, Yellow Cake, Black Cake), 2 full-frame photos (Groundnut, Sesame 1), 1 framed (Black Mustard Seeds) |
| Inconsistent aspect ratios | 1:1, 3:4, 4:3, about 2:1. Use CSS `object-fit: cover` and fixed aspect boxes. |
| Resolution | Two are 1000+ px square or better. Four are 400-500 px. |
| Branding or watermark | `Sesame_Seeds_Photo_1.jpg` (DNA हिंदी logo, frame, watermarks) |
| Missing products | **Yellow mustard oil** (hero), sesame oil, groundnut oil, packaging, bottles, drums, jerry cans, certificates |
| Origin | [CSV] maps all files to WhatsApp attachments. [CSV] "Label basis" is "Owner chat caption / visual inspection". The images look like internet or catalogue stock photos (**INF**), so licensing is unconfirmed. |

### 4.10 Combined palette derived from product images (OBS bins, INF grouping)

| Name | HEX | From | Role (INF) |
|---|---|---|---|
| Mustard yellow | #F5B00A / #FCC931 | Yellow Mustard Seeds | Bright accent, highlights, badges |
| Seed gold | #FCCC50 / #FBD16E | Yellow Mustard Seeds | Soft fill, hover state |
| Cake gold | #CC9330 / #D9A64B | Yellow Mustard Cake | Mid-tone gold, borders |
| Brand gold | #E4B329 | Logo | Primary accent |
| Sesame cream | #FBECCE / #F5D6AC | Sesame Photo 2 | Section backgrounds |
| Sesame beige | #E8D2AF / #D0AC71 | Sesame Photo 1 | Cards, soft dividers |
| Wood tan | #E8CA96 / #B38B53 | Black Mustard Seeds | Warm neutral, rustic |
| Groundnut rose | #D0948A / #B4736A | Groundnut | Minor accent for the groundnut card only |
| Seed brown | #2B1307 / #170601 | Black Mustard Seeds | Dark text or footer alternative |
| Charcoal | #322D31 / #504B4E | Black Sesame | Neutral dark |
| Olive-brown | #53492E / #483510 | Black Mustard Cake | Earth tone |
| Brand green | #037245 | Logo | Primary text, CTAs, footers |
| Leaf green | #5F963E | Logo | Secondary accent |

---

## 5. Facility videos

Both videos are portrait phone clips (**OBS**: 474x850, H.264 video, AAC audio, about 1.35 Mbps), forwarded via WhatsApp (**INF**: low resolution and compression match WhatsApp transcoding). Both were sampled at 6 evenly spaced frames.

### 5.1 `Warehouse_Storage_Bags.mp4`

- **Metadata (OBS):** 8.92 s, 474x850, about 29.8 fps, 1.80 MB, with 1 audio track. Audio content was not reviewed (**no audio analysis performed**).
- **Content (OBS):** a handheld walk-through of a large steel-framed warehouse with corrugated metal walls and rust-coloured roof trusses. In the foreground and left are tall stacks of brown jute sacks, some with red printing. Stacks of white woven poly bags (some with red print) sit to the right. A white drum or bin with partly legible lettering (reads like "...SKY DROP" in frame 2) sits by the sacks. In the background, workers in green and grey clothes tend small machines (green and red presses) and blue crates.
- **Light and quality:** dark upper half with bright overhead tube lights, which cause blown highlights and glare. Floor is a dusty beige. Later frames (4-6) show motion blur from fast panning. The first frames are the most stable.
- **Usability (INF):** shows scale and real storage of raw material. Good as a short looping background in a "Our facility" section or in the pitch video, if cropped or muted. Not suitable for a full-bleed desktop hero because of the portrait ratio and low resolution. A 9:16 card or modal player is a better fit. Lighting is poor, so consider a dark overlay with text.

### 5.2 `Facility_Oil_Processing_Equipment.mp4`

- **Metadata (OBS):** 7.31 s, 474x850, about 27.8 fps, 1.47 MB, 1 audio track.
- **Content (OBS):** a handheld pan across the processing floor of a similar shed. Frame 1 shows a plastic brown armchair and a large heap of seed or cake on the floor with blue drums on the left. Frames 2-3 show green and gold conical-hopper machines (small presses or expellers) on a concrete base with steel containers. Frames 4-6 show blue and red plastic basins with seed or cake, stainless-steel containers, blue crates, and a large red machine (a vintage-style expeller, **INF**) with a worker in a blue top and orange turban bending over it. A seated worker in green and another person sit nearby. A bright light flare appears in frame 6.
- **Light and quality:** better lit than the warehouse clip. Moderate motion blur in the later frames. Floor is cluttered, and a chair and loose items appear in frame 1, which is less "industrial-clean".
- **No finished oil, bottling or filling lines are visible.** Equipment looks small-scale (**INF**). Do not describe it as "state-of-the-art" or give capacity figures [README forbids inventing capacities].
- **Usability (INF):** supports authenticity (a real working mill). The most presentable segments are frames 2-3 (machines against the wall). Use a short trimmed clip, ideally with a poster frame from frame 2 or 3.

### 5.3 Video guidance (INF)

- Do not autoplay with sound. Use `muted playsinline loop` and a poster image.
- Provide a vertical (9:16) player or a blurred background fill on desktop.
- Add captions and no unsubstantiated claims. The worker faces are visible, so confirm the owner is fine with showing them.
- A short cut of the best 3-4 s of each clip is more effective than the raw footage.

---

## 6. PDF requirements (verbatim and mapped)

### 6.1 Brief [PDF p.1]

- Title: "eCell is Here! | Qualification Challenge 01". "Think you have what it takes to be part of eCell? We're looking for students who can do more than just write code. We want people who can understand real business problems, think from the customer's perspective, and build products that actually solve those problems."
- "Build a Website for Prime Fresh Oil Mills. Prime Fresh Oil Mills is a real vegetable oil manufacturer, and your challenge is to design and develop a website for their business."
- Audience: "Their potential customers include **edible oil brands, FMCG companies, and private-label businesses** looking for reliable manufacturing and bulk supply partners."
- Goal: "Your job is to build a website that helps these customers **discover the manufacturer, explore its products, and request a quotation**."
- Resources: "The manufacturer's branding, product catalog images, and other relevant media are in the Resources." Link: https://drive.google.com/drive/folders/1zrew1xe4xAXOevFGFDneJJdr-woxuumT?usp=sharing (the local folder appears to be a labelled copy of that).

### 6.2 Minimum requirements [PDF p.1]

1. "Showcase the manufacturer's hero product - **Yellow Mustard Oil**."
2. "Showcase the product catalog."
3. "Include a clearly visible **Request Quote** button and quotation form."
4. "Display the manufacturer's address and contact number."
5. "Build a responsive frontend that works well on desktop and mobile."

"**Only the frontend is required.** The quotation form does not need to submit data." "You're free to choose your technology, layout, design, and user experience. You can use AI tools too."

### 6.3 Evaluation [PDF p.1-2]

"We're not looking for the fanciest website. We're looking for the best thinkers." Three criteria:
1. **User Understanding & UX** - "How well do you understand your intended users, identify their primary actions, and design an experience that makes those actions effortless?"
2. **Aesthetics & Visual Design** - "Aesthetics matter. Your website should look polished, professional, and visually appealing. But good aesthetics aren't just about making something beautiful. Your typography, colors, imagery, layout, and overall visual identity should be thoughtfully curated to appeal to the manufacturer's intended customers."
3. **Product Thinking** - "How well do you translate a real business requirement into a useful, intuitive product? Are your design decisions deliberate, or are you simply putting together a generic website?"

### 6.4 Bonus [PDF p.2]

"What have we missed? We've intentionally kept the requirements minimal. A real business website might need important information or features that we haven't mentioned. Can you identify what's missing and build something that makes the website even more valuable to its customers?"

### 6.5 Pitch video [PDF p.2]

"Along with your website, you **must** submit a **2-3 minute pitch video**. Your pitch will be shared directly with the owner of Prime Fresh Oil Mills. Demonstrate your website, explain your design decisions, walk through the customer's journey, and show why your solution makes sense for their business."

### 6.6 Submission [PDF p.2-3]

1. **Live Website URL** - "A publicly accessible, deployed website."
2. **Pitch Video URL** - "A publicly accessible link to your 2-3 minute pitch."
3. **Design Explanation** - "Explain the reasoning behind your design decisions."
4. **Additional Features (Optional)** - "What did you identify and implement beyond the requirements?"

Submission form: https://docs.google.com/forms/d/e/1FAIpQLScnm9fRpThoW-rMgbZZSdJvJxyg3fncQmQpbZhGhH9-jRBD0g/viewform

**Deadline [PDF p.3]:** "Monday, 26 October 2026, 11:59 PM IST". Page 3 contains only the deadline and "Good luck!".

### 6.7 README constraints [README]

- Deadline repeated: Monday, 26 October 2026, 11:59 PM IST.
- The logo includes "MUSTARD OIL"; the owner asked for the words to be removed. The original is kept for reference. "Do not imply the original was already edited."
- No standalone yellow mustard oil bottle photo was provided. "Do not relabel a seed photo as oil."
- Business or factory address is NOT confirmed. "Use an explicitly marked placeholder."
- The WhatsApp business-registration screenshot was deliberately excluded. The source chat was not included.
- "Do not invent certifications, capacities, prices, specifications or factual claims."
- "Only frontend is required; quote form need not submit."

### 6.8 Requirement-to-asset mapping

| Requirement | Source | Asset available | Status and note |
|---|---|---|---|
| Hero product Yellow Mustard Oil | PDF p.1 | Only `Yellow_Mustard_Seeds.jpg` (seed, not oil) and `Yellow_Mustard_Cake.jpg` | **GAP.** No oil photo. Use seeds clearly labelled as raw material, or a tasteful CSS/SVG oil-drop graphic (reuse the logo drop motif, labelled as illustrative). Never present seeds as the oil. |
| Product catalog | PDF p.1 | 8 images (Yellow/Black mustard seeds, Yellow/Black mustard cake, Sesame x2, Black sesame, Groundnut) | Partly met. No oils beyond the hero. Sesame oil is a bestseller [README] with no photo. Sesame Photo 1 should not be used. |
| Request Quote button and form | PDF p.1 | Brand gold and green for the CTA | No asset needed. Form is frontend only. |
| Address and contact number | PDF p.1 | Phone +91 90572 92529, email Puneet2garg@gmail.com [README] | Phone met. **Address missing, so use a marked placeholder** [README]. |
| Responsive frontend | PDF p.1 | Images of mixed sizes, portrait videos | Need responsive image handling. |
| Branding | PDF p.1 | Logo JPG | Raster only. |
| Aesthetics | PDF p.2 | Logo palette and product photography | Palette derived above. |
| Facility proof / other media | PDF p.1 | 2 videos | Usable with caveats. |
| Pitch video | PDF p.2 | None provided | To be produced. |
| Live URL, design explanation | PDF p.2-3 | - | To be produced. |

---

## 7. Tone and mood (INF)

- **Mood:** natural, warm, honest, agricultural. Golden and green, rooted in "pure and fresh" food. The photography is utilitarian catalogue-style, with one rustic exception (black mustard in a wooden scoop).
- **Brand personality:** trustworthy, traditional, wholesome. B2B buyers also want reliability, scale and professionalism, which the assets do not yet communicate. The facility videos show a small-scale, hands-on mill.
- **Typography pairing (INF):** the logo wordmark suggests a bold geometric sans. Use Montserrat or Poppins for headings. Use a legible humanist sans (Inter, Source Sans or Noto Sans, which also supports Devanagari) for body. Consider Noto Sans Devanagari if Hindi labels are added.
- **Layout feel (INF):** generous white space, cream (#FCF5D1) section bands, green headers and footers, gold as a highlight, and photography on white tiles to hide the inconsistent backgrounds. B2B trust signals (process, certifications once confirmed, MOQ, logistics) should lead.
- **Language (INF):** plain, factual, B2B. Avoid superlatives. Do not state certifications, capacities or prices unless confirmed.

---

## 8. Quick-reference tokens (INF, for implementation)

```
--gold:        #E4B329;   /* logo gold; decorative only on white (1.95:1) */
--gold-text:   #8A6A00;   /* text-safe dark gold (5.1:1 on white) */
--green:       #037245;   /* primary, text/CTA (6.0:1 on white) */
--leaf:        #5F963E;   /* secondary accent */
--cream:       #FCF5D1;   /* section background */
--ink:         #0B0902;   /* body text; 10.2:1 on gold */
--seed-yellow: #F5B00A;   /* highlight from yellow mustard */
--white:       #FFFFFF;
```

---

## 9. Gaps and open questions

1. **Yellow mustard oil imagery:** none exists. Ask the owner for bottle, jerry can, drum or tanker photos, or decide on an illustrative treatment.
2. **Address:** unconfirmed. Use a clearly marked placeholder such as "[Factory address - to be confirmed]" [README].
3. **Logo:** which version is authoritative, given that the README mentions "MUSTARD OIL" and the supplied JPG does not show those words? Is there a vector (SVG/AI/PDF) file? What is the official font and colour spec?
4. **Image rights:** the product photos look like stock or catalogue images (**INF**). One has a third-party logo. Confirm usage rights or replace with the mill's own photography.
5. **Product facts:** no specifications, grades, packaging sizes, MOQ, prices, lead times, certifications (FSSAI etc.), capacity, years in operation, or location. None may be invented [README].
6. **Sesame oil and groundnut oil:** named as bestsellers [README] but no product shots.
7. **Contact person:** only an email address with a personal-looking name. Confirm a business contact name and WhatsApp availability.
8. **Videos:** do the owner and workers consent to publication? Are audio tracks clean (not reviewed)?
9. **Languages:** the customer base is B2B in India. Decide whether Hindi is needed (not requested [PDF]).
10. **Bonus ideas (INF, mapped to "What have we missed?" [PDF p.2]):** sample request, MOQ and bulk-pack info with placeholders, certifications section (placeholder, to be confirmed), logistics and delivery area, WhatsApp click-to-chat (the owner has a phone number), downloadable product catalogue or spec sheet, private-label process explainer, FAQ, trust section based on the facility videos, and a quote-form that captures product, quantity, packaging and company type.
11. **Deadline:** [PDF p.3] says 26 Oct 2026, 11:59 PM IST. Today (per session date) is 26 Oct 2026, so time is extremely limited.

---

## 10. Asset readiness at a glance

| Asset | Ready? | Action |
|---|---|---|
| Logo JPG | Usable with padding | Crop emblem variant, request vector |
| Yellow_Mustard_Seeds | Ready | Use in hero support and catalogue |
| Black_Mustard_Seeds | Needs crop | Remove the white border |
| Sesame_Seeds_Photo_2 | Ready | Primary sesame image |
| Sesame_Seeds_Photo_1 | **Do not use** | Third-party logo and watermarks |
| Black_Sesame_Seeds | Small only | At most 500 px |
| Groundnut_Seeds | Small only | Neutral treatment, 500 px |
| Yellow_Mustard_Cake | Small only | 400 px |
| Black_Mustard_Cake | Weak | Small tile only, or omit |
| Warehouse video | Usable | Trim, mute, poster, 9:16 player |
| Equipment video | Usable | Trim, mute, poster, 9:16 player |
