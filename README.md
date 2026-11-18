# Kaapi & Co. – café website (portfolio demo)

A one-page website for a fictional filter-coffee café in Bandra West, Mumbai.
Built with **Next.js 15 (App Router) + TypeScript**, styled with plain CSS.

**Features:** sticky responsive navbar with mobile menu · hero section · story/features ·
tabbed menu (Coffee / Breakfast / Bakes) · photo gallery (`next/image`) · reviews · reservation form with
validation and success state · opening hours, contact and an embedded Google Map ·
floating WhatsApp button · subtle scroll-in animations (switched off for visitors who prefer
reduced motion) · SEO metadata.

**Lighthouse (production build):** Performance 97–98 mobile / 100 desktop · Accessibility 100 ·
Best Practices 100 · SEO 100.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To check speed the way visitors get it, use a production build (`npm run dev` is slower on purpose):

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx      fonts + SEO title/description
  page.tsx        puts the sections together in order
  globals.css     all styles; colours are in :root at the top
  icon.svg        the browser-tab icon
components/       one file per section (Navbar, Hero, Menu, Gallery, Reserve…)
  WhatsAppButton.tsx   the floating chat button
  ScrollReveal.tsx     the scroll-in animations (add data-reveal to any element)
data/site.ts      ALL content: name, address, hours, menu, reviews, photos, WhatsApp, map
next.config.ts    which image hosts are allowed for photos
```

## Reusing it for a real client

1. Edit `data/site.ts`: name, contact details, hours, menu and reviews, plus:
   - `whatsapp.number`: country code + number, digits only (e.g. `919812345678`)
   - `map.query`: the business name as it appears on Google Maps, or its address
   - `gallery`: their photos. The first one is shown large. Use full `https://` URLs or files in `/public`
     (e.g. `"/gallery/front.jpg"`), and write a short `alt` description for each.
2. If the photos are hosted somewhere other than Unsplash, add that host to
   `images.remotePatterns` in `next.config.ts` (photos in `/public` need nothing).
3. Change the colours in the `:root` block at the top of `app/globals.css`. If you change `--accent`,
   set `--accent-text` to a shade dark enough for small text (4.5:1 contrast with the background).
4. Connect the form in `components/Reserve.tsx` to email (Resend), Supabase or WhatsApp.
5. Remove the "demo project" line in `components/Footer.tsx`.

## Deploy

Push to GitHub, then import the repo at vercel.com. It deploys automatically on every push.
