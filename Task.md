# 🏭 Deesha Industries — Website Development
### HTML + CSS + Vanilla JS

---

> ⚠️ **CRITICAL NOTE TO THE AGENT:**
> **DO NOT build a cookie-cutter template.** This is not a Bootstrap clone, a WordPress theme dump, or a generic agency website. The design must feel **purpose-built** for a Pakistani sportswear manufacturer competing in international markets. Every section, font pairing, spacing decision, and color call must feel intentional and specific to this brand. If your output looks like something you've generated 50 times before — start over. The client will know.

---

## 1. Project Overview

**Company:** Deesha Industries
**Type:** B2B Sportswear & Activewear Manufacturer
**Location:** Sialkot, Pakistan (Worldwide Delivery)
**Target Audience:** International buyers, sports brands, wholesalers, OEM/private label clients from USA, UK, Canada, Australia, Germany, France, Netherlands, and beyond.
**Deliverable:** A single-page, fully responsive landing website in pure **HTML, CSS, and minimal Vanilla JavaScript** (no frameworks, no jQuery).

---

## 2. Design Direction & Aesthetic

**Tone:** Industrial-precision meets athletic energy. Think clean editorial layouts with bold typographic hierarchy — not playful, not corporate-boring. Confident. Authoritative. Export-ready.

**Visual Language:**
- Dark, near-black sections contrasted with crisp white content areas — **not** an all-white site
- Sharp geometric accents (thin lines, precise borders, angular dividers)
- A strong, distinctive **accent color**: use a deep athletic red (`#C8102E`) as the primary brand accent — used sparingly but powerfully (CTA buttons, section labels, highlights)
- Background textures: subtle dark fabric/textile grain texture on hero and dark sections (use CSS `background-image` with SVG noise or a repeating CSS pattern — no external images needed)
- Typography: Pair **`Barlow Condensed`** (bold, uppercase) for headings with **`DM Sans`** for body text — import both from Google Fonts. Do NOT use Inter, Roboto, or Arial.

**Layout Style:**
- Full-width sections with controlled inner containers (max-width: 1280px)
- Generous vertical spacing between sections (`padding: 100px 0` minimum for major sections)
- Asymmetric grids where appropriate (e.g., 60/40 splits instead of 50/50)
- Section labels/eyebrows styled as: small uppercase red text with a short horizontal line to the left (e.g., `— OUR PRODUCTS`)
- Sticky navigation that transforms on scroll (transparent on top, dark + slight blur on scroll)

**Animations (CSS only, subtle):**
- Fade-up on scroll for section content (use `IntersectionObserver` in JS)
- Smooth hover states on all buttons and cards (scale + shadow)
- Underline-draw effect on nav links on hover
- Counter animation on stats section (vanilla JS)

---

## 3. Site Architecture (All on One Long Page + Separate Pages Linked)

### Main Page Sections (in order):

1. **Navigation**
2. **Hero**
3. **Why Choose Us (Value Props)**
4. **Products Grid**
5. **How We Work (Process)**
6. **OEM / Private Label**
7. **Stats / Social Proof**
8. **Global Shipping**
9. **Certifications & Quality**
10. **Testimonials**
11. **FAQ**
12. **Contact / Get Quote**
13. **Footer**

---

## 4. Section-by-Section Specifications

---

### 4.1 Navigation

- **Logo:** "DEESHA INDUSTRIES" in `Barlow Condensed` bold, white, with a small red accent dot or underscore. Left-aligned.
- **Nav Links (right-aligned):**
  - Products
  - OEM/Private Label
  - Our Process
  - Quality
  - About Us
  - Contact
- **CTA Button:** "Get a Quote" — solid red (`#C8102E`) button, white text, sharp corners (no border-radius or very minimal 2px)
- **Behavior:** Transparent background on page load. On scroll past 80px → dark background (`#0D0D0D`) with `backdrop-filter: blur(8px)`. Smooth CSS transition.
- **Mobile:** Hamburger menu with a full-screen overlay nav.

---

### 4.2 Hero Section

- **Height:** 100vh minimum
- **Background:** Full-width dark background (`#0D0D0D`) with a subtle repeating diagonal lines or textile weave pattern in CSS (use `repeating-linear-gradient` to simulate fabric texture)
- **Layout:** Two-column — Left: text content | Right: a styled placeholder block (a large rectangular frame with a bold label inside like `[PRODUCT PHOTOGRAPHY]` styled as a professional placeholder in a dark card with red corner accents — the client will swap with real photos)
- **Headline:** Large, bold, uppercase:
  ```
  BUILT FOR
  PERFORMANCE.
  MADE FOR THE WORLD.
  ```
  Font: `Barlow Condensed`, 96px on desktop, white. Line-height tight (0.95).
- **Subheadline:** `DM Sans`, 18px, light gray (`#AAAAAA`):
  > "Custom sportswear & activewear manufacturer in Sialkot, Pakistan. OEM, private label, and wholesale production — shipped worldwide."
- **CTAs:**
  - Primary: "Request a Quote" → red filled button
  - Secondary: "View Our Products" → ghost button (white border, white text)
- **Below the fold indicator:** A small animated scroll arrow or "Scroll to explore" text in tiny uppercase

---

### 4.3 Why Choose Us

- **Background:** White
- **Section label:** `— WHY DEESHA`
- **Headline:** "Precision Manufacturing, Global Standards"
- **Layout:** 4-column icon grid on desktop, 2-col on tablet, 1-col on mobile
- **Cards** (no box shadows — use a thin `1px solid #E0E0E0` border, clean white background):

| Icon | Title | Description |
|------|-------|-------------|
| ⚡ | Low MOQs | Start small and scale. We accommodate low minimum order quantities without compromising quality. |
| 🌍 | Worldwide Shipping | We ship via DHL, FedEx, UPS, and cargo freight to the USA, UK, Canada, Australia, and beyond. |
| 🎨 | Custom Design | Your designs, our expertise. Full OEM and private label capabilities with in-house design support. |
| ✅ | Strict QC | Multi-stage quality control ensures every unit meets your standards before it leaves our facility. |
| ⏱️ | Fast Lead Times | Efficient production pipelines mean your order moves from approval to delivery without delays. |
| 💬 | Free Consultation | Talk to our experts via WhatsApp, email, or call — free guidance from inquiry to delivery. |

- Use simple SVG icons (inline, drawn in CSS or inline SVG — no icon libraries)

---

### 4.4 Products Section

- **Background:** Very light gray (`#F5F5F5`)
- **Section label:** `— OUR PRODUCTS`
- **Headline:** "Everything You Need, Custom-Built"
- **Layout:** Masonry-inspired 3-column grid. Cards have:
  - A large styled placeholder image area (dark gray rectangle with category label centered in it)
  - Category name in bold
  - Short description
  - "Explore →" link in red
- **Product Categories:**

1. **Custom Sports Uniforms** — Football/Soccer Kits, Basketball Uniforms, Rugby Kits, Cricket Kits, Volleyball Uniforms, Ice Hockey, American Football, Baseball & Softball
2. **Activewear** — Compression Shirts & Leggings, Gym Wear, Performance Joggers, Muscle Tanks & Stringers, Workout Tees, Sleeveless Hoodies
3. **Women's Sportswear** — Soccer/Football Kits, Volleyball & Basketball Uniforms, Netball Uniforms, Padel Dresses, Yoga Sets, Sports Bras, Leggings
4. **Kids & Youth Wear** — Football Kits, Basketball Uniforms, Rugby Kits, Ice Hockey, Cricket Uniforms, School Teamwear
5. **Leisurewear** — Fleece Hoodies, Jogger Pants, Bomber Jackets, Varsity Jackets, Streetwear Tracksuits, Polo Shirts
6. **Accessories & Gloves** — Sports Gloves, Bags, Caps, Socks & more

- Add a "View All Products →" CTA button below the grid, centered, ghost style.

---

### 4.5 How We Work (Manufacturing Process)

- **Background:** `#0D0D0D` (dark)
- **Section label:** `— OUR PROCESS` (red, on dark)
- **Headline:** White — "From Concept to Delivery"
- **Layout:** Horizontal numbered timeline on desktop (with a thin horizontal red connecting line), stacked vertically on mobile
- **Steps:**

```
01. Pattern Making
Patterns crafted with accuracy to match your required sizes and designs. Each product gets a unique, precision-made pattern.

02. Pre-Production Sample
A physical sample is produced and shipped to you for approval before any bulk production begins.

03. Material & Fabric Sourcing
Fabric sourced from trusted suppliers, inspected on arrival, and stored in our controlled warehouse environment.

04. Cutting & Printing
Fabric panels are precision-cut and then undergo sublimation printing, screen printing, or embroidery as per your spec.

05. Sewing & Quality Check
Panels are assembled by skilled operators. Every unit undergoes multi-point inspection before moving forward.

06. Packing & Delivery
Items are pressed, tagged, and packed. Shipped via DHL, FedEx, UPS or cargo — tracked to your door.
```

- Each step: number in large red, title in white `Barlow Condensed`, description in gray `DM Sans`.

---

### 4.6 OEM / Private Label Section

- **Background:** White with a left-side dark panel (asymmetric split — 40% dark / 60% white on desktop)
- **Section label:** `— OEM & PRIVATE LABEL`
- **Headline:** "Your Brand. Our Factory."
- **Content:**
  > Deesha Industries is a full-service OEM and private label manufacturer. Whether you're launching a new sportswear brand or scaling an existing line, we provide end-to-end support — from design and development to finished goods.

  **We offer:**
  - Custom branding (labels, hang tags, packaging)
  - Design assistance and tech pack review
  - Flexible MOQs for startups and large brands alike
  - Confidential production — your designs stay yours
  - Samples before bulk

- Include a "Start Your OEM Project →" red CTA button

---

### 4.7 Stats / Social Proof

- **Background:** Red (`#C8102E`)
- **Layout:** 4 large stats in a row — white text on red
- **Stats (use counter animation triggered on scroll):**

| Stat | Label |
|------|-------|
| 15+ | Years of Manufacturing |
| 50+ | Countries Served |
| 200+ | Product Categories |
| 10,000+ | Orders Completed |

- Large numbers in `Barlow Condensed` 80px, white. Labels in `DM Sans` 14px, white/80% opacity.

---

### 4.8 Global Shipping

- **Background:** Light gray (`#F5F5F5`)
- **Section label:** `— GLOBAL DELIVERY`
- **Headline:** "We Ship to Your Doorstep, Anywhere"
- **Subtext:** "Reliable international shipping via DHL, FedEx, UPS, and freight cargo — with tracking from our factory to your door."
- **Layout:** A stylized world regions block — display destination countries as bold pill-shaped tags in a flowing flex-wrap layout:
  - 🇺🇸 USA &nbsp; 🇬🇧 United Kingdom &nbsp; 🇨🇦 Canada &nbsp; 🇦🇺 Australia &nbsp; 🇩🇪 Germany &nbsp; 🇫🇷 France &nbsp; 🇳🇱 Netherlands &nbsp; 🇮🇪 Ireland &nbsp; 🇪🇸 Spain &nbsp; 🇮🇹 Italy &nbsp; 🇧🇪 Belgium &nbsp; + Worldwide
- Shipping partners logos row: DHL, FedEx, UPS, Cargo (use styled text badges since no actual logos)

---

### 4.9 Certifications & Quality

- **Background:** White
- **Section label:** `— QUALITY ASSURANCE`
- **Headline:** "Manufacturing You Can Trust"
- **Content:**
  > Every garment leaving our facility passes through a strict multi-stage quality control process. Our facility in Sialkot — Pakistan's renowned sportswear manufacturing hub — adheres to international production standards.
- **Quality checkpoints listed as a 2-column checklist:**
  - ✓ Fabric inspection on receipt
  - ✓ Pattern accuracy check
  - ✓ Pre-production sample approval
  - ✓ In-line production inspection
  - ✓ Final garment quality check
  - ✓ Packing & carton inspection
- Add placeholders for certification badges (ISO, OEKO-TEX, etc.) as styled bordered boxes with label text.

---

### 4.10 Testimonials

- **Background:** `#0D0D0D`
- **Section label:** `— WHAT CLIENTS SAY`
- **Headline:** White — "Trusted by Brands Worldwide"
- **Layout:** 3 testimonial cards side by side (horizontal scroll on mobile)
- **Card style:** Dark gray background (`#1A1A1A`), white text, thin red left border, 5-star rating in red
- **Sample testimonials (placeholder — client to replace):**

> *"Deesha delivered exactly what we needed — top-quality sublimation jerseys with tight turnaround. Will reorder."*
> — **James T.**, Sports Brand Owner, UK

> *"From sample to bulk, their process was transparent and professional. Highly recommend for OEM orders."*
> — **Sarah K.**, Activewear Label, Australia

> *"Best price-to-quality ratio we've found in Pakistan. Communication was excellent throughout."*
> — **Mike R.**, Wholesale Buyer, USA

---

### 4.11 FAQ Section

- **Background:** White
- **Section label:** `— FAQS`
- **Headline:** "Common Questions, Clear Answers"
- **Accordion style** — click to expand/collapse (vanilla JS toggle). Clean, no bloat.
- **Questions:**

1. What is your minimum order quantity (MOQ)?
   > Our MOQ varies by product type. We accommodate small runs for startups and large bulk orders for established brands. Contact us for specific MOQs.

2. Do you offer custom branding and private label?
   > Yes. We offer full private label services including custom labels, hang tags, packaging, and confidential production.

3. Can I request a sample before bulk production?
   > Absolutely. We produce a pre-production sample for your approval before any bulk order begins.

4. What printing and decoration techniques do you offer?
   > We offer sublimation printing, screen printing, heat transfer, and embroidery depending on the product.

5. How long does production take?
   > Lead times vary by order size and complexity, but typically range from 3–6 weeks after sample approval.

6. Which countries do you ship to?
   > We ship worldwide including USA, UK, Canada, Australia, Germany, France, Netherlands, Ireland, and many more countries via DHL, FedEx, UPS, and cargo.

---

### 4.12 Contact / Get Quote Section

- **Background:** Light gray (`#F5F5F5`)
- **Section label:** `— GET IN TOUCH`
- **Headline:** "Ready to Start Your Order?"
- **Layout:** Two-column — Left: contact info | Right: quote request form

**Left Column — Contact Info:**
- 📍 Sialkot, Punjab, Pakistan
- 📞 WhatsApp: [Link to WhatsApp]
- 📧 Email: info@deeshaindustries.com *(placeholder — client to update)*
- ⏰ Mon–Sat, 9am–6pm PKT

**Right Column — Form Fields:**
- Full Name
- Company Name
- Email Address
- Phone / WhatsApp
- Country
- Product Category (dropdown: Sports Uniforms, Activewear, Women's Wear, Kids Wear, Leisurewear, Accessories, Other)
- Estimated Quantity
- Message / Requirements
- Submit Button: "Send Inquiry" — solid red

*Note: Form action should be `mailto:` or a simple placeholder — no backend needed. Add a `required` attribute to essential fields.*

---

### 4.13 Footer

- **Background:** `#0D0D0D`
- **Layout:** 4-column grid:
  - Col 1: Logo + short tagline + social links (WhatsApp, LinkedIn, Instagram, Facebook)
  - Col 2: Quick Links (Products, OEM, Process, Quality, About, Contact)
  - Col 3: Products (key categories listed)
  - Col 4: Contact details
- **Bottom bar:** Copyright line + "Proudly manufacturing in Sialkot, Pakistan"
- All text in light gray, red hover states on links

---

## 5. Technical Requirements

```
- Pure HTML5 + CSS3 + Vanilla JavaScript (NO frameworks)
- Single HTML file + linked external CSS file + linked external JS file
- Google Fonts import: Barlow Condensed + DM Sans
- Fully responsive: Mobile-first CSS, breakpoints at 768px and 1200px
- Smooth scroll behavior (CSS: scroll-behavior: smooth)
- IntersectionObserver for fade-up animations on scroll
- Sticky nav with scroll-triggered class change
- Mobile hamburger menu (CSS + JS)
- FAQ accordion (JS toggle)
- Stats counter animation (JS, triggered on scroll into view)
- All placeholder images: styled div elements with background color + centered label text (no broken img tags)
- No external CSS libraries (no Bootstrap, no Tailwind)
- No jQuery
- Semantic HTML (header, nav, main, section, article, footer, etc.)
- Meta tags: viewport, description, og:title for basic SEO
- Accessibility: alt text on all imgs, aria-labels on interactive elements, sufficient color contrast
```

---

## 6. Color Palette (CSS Variables)

```css
:root {
  --color-bg-dark: #0D0D0D;
  --color-bg-mid: #1A1A1A;
  --color-bg-light: #F5F5F5;
  --color-white: #FFFFFF;
  --color-accent: #C8102E;        /* Primary red */
  --color-accent-hover: #A00D24;  /* Darker red for hover */
  --color-text-primary: #0D0D0D;
  --color-text-muted: #777777;
  --color-text-on-dark: #AAAAAA;
  --color-border: #E0E0E0;
  --color-border-dark: #2A2A2A;
}
```

---

## 7. Typography Scale

```css
/* Headings — Barlow Condensed Bold, Uppercase */
h1: 80–96px (desktop), 48px (mobile)
h2: 52–64px (desktop), 36px (mobile)
h3: 32px

/* Body — DM Sans Regular */
body: 17px, line-height: 1.7
small/caption: 13px uppercase, letter-spacing: 0.08em
section-label: 12px, red, uppercase, letter-spacing: 0.15em
```

---

## 8. Final Reminders for the Agent

1. **No template feel.** Every design decision must feel custom and earned — not defaulted to. If you find yourself reaching for a pattern you've used before, reconsider.
2. **Placeholder images must look intentional.** Dark gray blocks with centered white type like `[FOOTBALL KIT PHOTOGRAPHY]` — styled with red corner accents using CSS pseudo-elements so they look like professional content placeholders, not broken images.
3. **The red accent should punch.** Use it only for CTAs, section labels, borders, and key highlights. Don't dilute it.
4. **Test the mobile experience.** The nav hamburger, the process timeline, and the product grid must all be genuinely usable on a 375px screen.
5. **Spacing is design.** Generous padding, purposeful whitespace between sections — this should never feel cramped or rushed.
6. **The hero must stop you.** It is the most important section. The headline, layout, and texture must immediately communicate "serious manufacturer, international quality."

---

*Prompt prepared for Deesha Industries | Sialkot, Pakistan*
*Reference sites: janleticsports.com (content), remington-sports.com (content), enablinginternational.com (UI)*