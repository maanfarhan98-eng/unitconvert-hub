# UnitConvert Hub

> **Simple Conversions. Clear Results.**

UnitConvert Hub is a fast, clean, professional unit-conversion website designed for real users and optimized for Google Search. Built with React 19, TypeScript, Vite, and Tailwind CSS. Fully independent and ready for 1-click deployment on Vercel.

---

## 📋 Vercel Deployment Specifications

| Specification | Value |
|---|---|
| **Framework** | Vite (React SPA) |
| **Node.js Version** | Node.js 18+ (Node 20 or 22 recommended) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |
| **Routing Configuration** | Included in `vercel.json` (rewrites all paths to `/index.html`) |

### Step-by-Step Vercel Deployment

1. **Push to Git**: Push this project folder to your GitHub, GitLab, or Bitbucket account.
2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Select your repository and click **"Import"**.
3. **Framework Preset**: Vercel will automatically detect **Vite**.
4. **Environment Variables**: None are required for standard operation (free open exchange rates work out-of-the-box). You may optionally add `VITE_SITE_URL` with your custom production domain.
5. **Deploy**: Click **"Deploy"**. Your site will be live across Vercel's global edge network in under 45 seconds!

---

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Type-check and lint:
   ```bash
   npm run lint
   ```

4. Build production bundle:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 💰 Monetization & Verification Setup (AdSense, Adsterra, Analytics, GSC)

UnitConvert Hub is architected with dedicated non-intrusive ad zones that do not break the converter UX or trigger Cumulative Layout Shift (CLS).

### 1. Google Search Console Verification
Open `index.html` and add your verification meta tag inside `<head>`:
```html
<meta name="google-site-verification" content="QWD3dNM1XKZWlrRFBHRPxNyLUFcR6Z04bykL-RzAwl4" />
```
Alternatively, upload your Google HTML verification file directly into the `/public/` directory.

### 2. Google Analytics (GA4)
In `index.html`, add your GA4 tag directly before the closing `</head>` tag:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Google AdSense
1. Add the AdSense script to `<head>` in `index.html`:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
2. Open `src/components/AdSlot.tsx` and place your `<ins class="adsbygoogle" ...>` snippet into the designated slot component.

### 4. Adsterra or Other Ad Networks
Paste your popunder, banner script, or native banner code directly into the container in `src/components/AdSlot.tsx` or in `index.html`.

---

## 🧮 Available Converters

### Weight
- **Kilograms ↔ Pounds** (`/kilograms-to-pounds/` and `/pounds-to-kilograms/`)
- **Ounces ↔ Grams** (`/ounces-to-grams/` and `/grams-to-ounces/`)

### Length
- **Centimeters ↔ Inches** (`/centimeters-to-inches/` and `/inches-to-centimeters/`)
- **Feet ↔ Meters** (`/feet-to-meters/` and `/meters-to-feet/`)
- **Meters ↔ Kilometers** (`/meters-to-kilometers/` and `/kilometers-to-meters/`)

### Temperature
- **Celsius ↔ Fahrenheit** (`/celsius-to-fahrenheit/` and `/fahrenheit-to-celsius/`)

### Time
- **Minutes ↔ Hours** (`/minutes-to-hours/` and `/hours-to-minutes/`)
- **Seconds ↔ Minutes** (`/seconds-to-minutes/` and `/minutes-to-seconds/`)

### Volume
- **Liters ↔ Gallons** (`/liters-to-gallons/` and `/gallons-to-liters/`)
  - Explicit option to toggle between **US Liquid Gallon** (3.78541 L) and **Imperial Gallon** (4.54609 L).

### Currency
- **Live Currency Converter** (`/currency-converter/`)
  - Live rates for USD, EUR, GBP, CAD, AUD, JPY, CHF, CNY, INR, AED, SAR, and DJF.
  - Timestamp of data feed, inverse cross-rates table, swap button, and financial disclaimer.

---

## 🔍 SEO & Technical Architecture

- **Unique Metadata**: Every converter has an individual H1, SEO title, meta description, and primary/secondary keyword targeting.
- **Structured Data**: Injects Schema.org `WebApplication` and `FAQPage` JSON-LD schemas dynamically.
- **Canonical URLs**: Automatically updates `<link rel="canonical">` to prevent duplicate content flags.
- **XML Sitemap**: Pre-rendered `/sitemap.xml` covering all 25 indexable URLs.
- **Robots.txt**: Pre-configured at `/robots.txt`.
- **Keyboard-accessible search**: Press `Cmd+K` or `Ctrl+K` from anywhere to launch fast global calculator search.
