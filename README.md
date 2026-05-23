# Nyeri Art Studio — Website

A complete, professional website for **Nyeri Art Studio**, a print shop and branding studio based in Nyeri Town, Kenya, serving the entire Mt. Kenya region and delivering countrywide.

## Live Site

**https://vsmw2dwwhtepy.kimi.page**

---

## Features

### Pages
| Page | Path | Description |
|------|------|-------------|
| **Home** | `/` | Hero, service group cards, trending products, areas served, testimonials, CTA |
| **Services** | `/services` | 6 creatively grouped service collections with expandable details, equipment showcase |
| **Shop (Catalog)** | `/catalog` | Full product catalog with search, filters, trending section, quantity selector, quick-view modal |
| **Custom Order** | `/custom` | File upload (JPG/PNG/PDF/AI/CDR/PSD/EPS/SVG), service selection, customization options, WhatsApp order submission |
| **About** | `/about` | Story, mission/vision, values, equipment, stats, areas served |
| **Contact** | `/contact` | Contact form, Google Maps embed, WhatsApp/phone/email, social links, delivery areas |

### Key Features
- **Currency Converter** — 10 currencies (KES, USD, EUR, GBP, TZS, UGX, RWF, NGN, ZAR, INR) with live conversion
- **Product Search & Filter** — Search by name, description, tags; filter by category and subcategory
- **Trending Products Section** — Highlighted for TikTok, Instagram, and Facebook traffic
- **Quantity Selector** — +/- controls with unit display (pcs, sq ft, metres, etc.)
- **File Upload** — Accepts 8 formats, up to 5 files, max 10MB each
- **WhatsApp Integration** — Floating button + order-via-WhatsApp on every product
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, Schema.org structured data, keyword-rich content
- **Mobile First** — Fully responsive, touch-friendly, optimized for mobile users
- **Areas Served** — All 10 Mt. Kenya counties with key towns for local SEO

---

## Tech Stack

- **React 19** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **shadcn/ui** (UI components)
- **React Router** (client-side routing)
- **Lucide React** (icons)

---

## Folder Structure

```
├── public/
│   └── images/              # AI-generated product & service images
├── src/
│   ├── components/          # Navbar, Footer, WhatsAppButton
│   ├── pages/               # Home, Services, Catalog, Custom, About, Contact
│   ├── data/                # Products, counties (SEO content)
│   ├── hooks/               # useCurrency (multi-currency support)
│   ├── App.tsx              # Router & layout
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles + custom animations
├── index.html               # SEO meta tags, structured data
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## Customization Guide

### 1. Update Contact Information

Edit these files to add YOUR actual details:

**`src/components/Navbar.tsx`** (Line ~35, ~90, ~110)
- Phone number: Replace `0712 345 678` with your number
- WhatsApp link: Replace `254712345678` with your WhatsApp number

**`src/components/Footer.tsx`** (Lines throughout)
- Phone number, email, address
- Social media links (Facebook, Instagram, Twitter)

**`src/pages/ContactPage.tsx`** (Lines throughout)
- Phone number, WhatsApp link, email, physical address
- Google Maps embed (replace with your exact location)

**`src/components/WhatsAppButton.tsx`**
- WhatsApp number in the href

### 2. Update Google Maps Location

**`src/pages/ContactPage.tsx`** (~line 150)
- Replace the iframe `src` with your Google Maps embed URL
- Replace the `maps.app.goo.gl` link with your exact location link

To get your embed:
1. Go to Google Maps, find your shop
2. Click Share → Embed a map → Copy HTML
3. Replace the iframe src

### 3. Update Prices

**`src/data/products.ts`**
- Each product has a `priceKES` field
- Update these with your actual prices
- The currency converter automatically converts to other currencies

### 4. Add/Remove Products

**`src/data/products.ts`**
- Follow the existing Product interface structure
- Add images to `public/images/` and reference them
- Set `trending: true` for products you want in the trending section

### 5. Update SEO Meta Tags

**`index.html`**
- Update `og:url` with your actual domain
- Update `twitter:image` if you host images elsewhere
- Modify keywords as needed

**Each page file** also has `<title>` and `<meta name="description">` tags.

### 6. Update Counties/Towns

**`src/data/counties.ts`**
- Add or remove counties and towns as your service area changes
- The data feeds both the Areas Served section and SEO content

### 7. Update Images

Replace images in `public/images/` with your own:
- `hero.jpg` — Main hero banner
- `service-*.jpg` — Service category images
- `catalog-*.jpg` — Product catalog images

Recommended: 1200x800px minimum, compressed JPEG.

### 8. Currency Exchange Rates

**`src/hooks/useCurrency.ts`**
- The `rate` field represents KES per 1 unit of that currency
- Update rates periodically from a forex source like xe.com or cbk.go.ke

### 9. Change Brand Colors

**`src/index.css`** and **component files**
- The primary color is `emerald-600` (#059669)
- Replace all `emerald-*` classes with your preferred color
- Common alternatives: `blue-*`, `orange-*`, `rose-*`, `violet-*`

### 10. Deploy to Your Own Domain

**For Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**For Netlify:**
Drag the `dist/` folder to Netlify Drop, or use:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**For GitHub Pages:**
1. Push the repo to GitHub
2. Go to Settings → Pages
3. Set source to GitHub Actions
4. Use a Vite-to-GitHub-Pages workflow

---

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Tips for Viral Success

1. **Post regularly on TikTok/Reels** showing the printing process — behind-the-scenes content performs well
2. **Share the `/catalog` link** on Instagram Stories and TikTok bios for instant product browsing
3. **Use the trending products section** to promote seasonal items (Valentine's mugs, graduation hoodies, etc.)
4. **WhatsApp Business** — Connect your WhatsApp Business account for auto-replies and catalog features
5. **Google Business Profile** — Create/claim your listing at google.com/business with the same address and phone
6. **Local SEO** — Register on business directories: YellowPages Kenya, KenyaBusinessDirectory, etc.
7. **Facebook/Instagram Shop** — Sync your catalog with Meta Commerce Manager

---

## License

This website was created for Nyeri Art Studio. All rights reserved.
