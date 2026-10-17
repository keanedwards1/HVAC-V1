# HVAC conversion site — design specs

Status: multi-page visual refresh / readability pass complete

## Product direction

This is a mobile-first lead-generation page for a local HVAC contractor. The main conversion is a phone call; the secondary conversion is a short service request form. The page should feel operational, local, and trustworthy—not like a generic home-services template.

## Visual system

- **Tone:** Calm competence with a little urgency. Use utility language, short sentences, and concrete assurances.
- **Primary ink:** `#292A28` graphite for readable body copy and navigation.
- **Surface:** `#F4F1E9` bone background, with `#FFFDF8` cards.
- **Action color:** `#F27A21` orange for calls, forms, and urgent service moments.
- **Palette rule:** orange and white are the visual identity. Use graphite only as readable ink; do not introduce red, blue, peach, or additional orange shades.
- **Support neutral:** warm white surfaces with graphite text. Dark full-bleed sections are replaced by orange with white type.
- **Type:** Sora for large, direct headings; Inter for readable UI, body copy, utility labels, zip codes, and technical details.
- **Shape language:** Consistent 8px corners, quiet borders, large image blocks, and long-form spacing. No decorative gradients or dense card ornament.
- **Imagery:** Hero, interior pages, and service cards use distinct free-stock photography from Unsplash/Pixabay. The service-area map uses a live Google Maps embed centered on the current city. Decorative image laser/glint effects are intentionally removed. Replace stock photography with approved local team and job photos before launch if available.
- **Brand mark:** Header and footer use the custom hand-drawn Northline service van badge in graphite, warm paper, and the single orange accent.
- **Readability:** 18px is the minimum rendered text size across the site. Headings remain substantially larger, with generous line height and spacing. Keep utility labels short rather than shrinking them.

## Page architecture

The site now has dedicated routes plus a conversion-focused home page:

- `/` — home / emergency conversion page
- `/services` — service overview
- `/services/ac-repair` — AC repair detail page
- `/services/ac-installation` — AC installation detail page
- `/services/heating-repair` — heating repair detail page
- `/services/furnace-installation` — furnace installation detail page
- `/services/heat-pump-services` — heat pump detail page
- `/services/ductless-mini-split` — ductless mini-split detail page
- `/services/indoor-air-quality` — indoor air quality detail page
- `/services/system-replacement` — system replacement detail page
- `/maintenance-plan` — VIP maintenance page
- `/financing` — financing and rebate page
- `/service-areas` — locations hub
- `/service-areas/austin`, `/service-areas/round-rock`, `/service-areas/cedar-park` — city landing pages
- `/about` — company page
- `/about/our-team` — team page
- `/about/reviews` — customer proof page
- `/contact` — request-service page
- `/emergency-service` — high-intent emergency landing page
- `/blog` — local SEO content hub
- `/blog/[article-slug]` — article pages
- `/legal/privacy-policy` and `/legal/terms-of-service` — legal pages

Each page shares the same header, call-first navigation, lead form, footer, and mobile action bar. The home page also includes the full funnel: hero, trust strip, services, transparency proof, replacement offer, reviews, service area, and final CTA.

## Content tokens to replace before launch

The current page intentionally keeps these values configurable or clearly marked as placeholders:

- `[Brand Name]` → current visual placeholder: Northline Heating & Air Conditioning
- `[City Name]` → defaults to Austin; try `?city=San-Marcos` to preview dynamic insertion
- `(555) 019-2831` → replace with the tracked business phone number
- `License #[123456]` → replace with the real state license number
- `123 Service Road · {city}, TX` → replace with the real address
- Service-area cities and zip codes → replace with verified coverage
- Google rating, review count, testimonials, certifications, financing, rebate, and warranty claims → verify with the contractor before publishing

## Interaction and behavior

- All primary CTAs scroll to the lead form or call `tel:` directly.
- The lead form is front-end only in this pass and shows a success state. Wire it to the selected CRM/form endpoint later.
- The city is read from the URL query string: `?city=Austin`, `?city=Round-Rock`, etc.
- The calculator is interactive and updates without a page refresh.
- Mobile breakpoint is approximately 720px; the mobile call bar stays fixed above the bottom edge.
- Motion is restrained: image glint, image scan, hover lift, and the live service dot are disabled under `prefers-reduced-motion`.
- All anchor navigation is native HTML and keyboard reachable.

## Technical baseline

- Next.js App Router with TypeScript and React.
- Vercel-compatible scripts: `bun run dev`, `bun run build`, `bun run start`.
- No runtime UI dependency beyond React/Next; the first pass is intentionally lean.
- Local-business JSON-LD is present in `app/page.tsx`; replace the placeholder values before launch.
- Project images live in `public/images/`; source notes are in `public/images/README.md`. The only remaining external asset is the Google Fonts import in `app/globals.css`; self-host fonts if the sub-1s mobile target becomes strict.

## Launch checklist

- Connect form submit to CRM / email / SMS follow-up.
- Replace all placeholder identity, phone, license, address, cities, zips, reviews, rebates, warranties, and financing claims.
- Add verified real job photos with descriptive alt text.
- Add analytics events for phone taps, form start, form submit, and financing CTA.
- Confirm legal copy, privacy policy, accessibility, and TCPA/SMS consent language.
- Add real map embed or static map service after service-area data is finalized.
- Run Lighthouse and mobile device QA after real assets are added.
