# Deesha Industries — Website Change Request
### Targeted Revisions Only

---

> **IMPORTANT INSTRUCTION TO THE AGENT:**
> You are working on an **existing** HTML/CSS/JS website for Deesha Industries. Do **not** rebuild the site from scratch. Make only the **4 specific changes** listed below. All other sections, layout, colors, and functionality must remain exactly as-is. Apply changes surgically.

The live site for reference: `https://sportswear-new.netlify.app/`

---

## Change 1 — Hero Section: Replace Static Hero with a Full-Screen Slider

**What to remove:** The current static two-column hero (headline on the left, `[PRODUCT PHOTOGRAPHY]` placeholder block on the right).

**What to build:** A full-screen image/slide hero slider, modeled on the structure used by [enablinginternational.com](https://enablinginternational.com). Study that site's hero carefully — it uses a full-viewport slider with large background slides, overlaid text content centered or left-aligned, navigation arrows, and dot indicators.

### Exact Slider Specifications:

**HTML Structure to implement:**
```html
<section id="hero" class="hero-slider">
  <div class="slider-wrapper">

    <!-- Slide 1 -->
    <div class="slide active" style="background-color: #0D0D0D;">
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <span class="slide-eyebrow">Sialkot, Pakistan — Est. 2009</span>
        <h1 class="slide-headline">BUILT FOR<br>PERFORMANCE.<br>MADE FOR THE WORLD.</h1>
        <p class="slide-sub">Custom sportswear & activewear manufacturer. OEM, private label, and wholesale — shipped worldwide.</p>
        <div class="slide-ctas">
          <a href="#contact" class="btn btn-primary">Request a Quote</a>
          <a href="#products" class="btn btn-ghost">View Our Products</a>
        </div>
      </div>
      <!-- Placeholder image block (client replaces with real <img>) -->
      <div class="slide-bg-placeholder" data-label="SPORTSWEAR COLLECTION"></div>
    </div>

    <!-- Slide 2 -->
    <div class="slide" style="background-color: #111111;">
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <span class="slide-eyebrow">OEM & Private Label</span>
        <h1 class="slide-headline">YOUR BRAND.<br>OUR FACTORY.</h1>
        <p class="slide-sub">End-to-end OEM manufacturing with custom branding, low MOQs, and pre-production samples.</p>
        <div class="slide-ctas">
          <a href="#oem" class="btn btn-primary">Explore OEM</a>
          <a href="#contact" class="btn btn-ghost">Get in Touch</a>
        </div>
      </div>
      <div class="slide-bg-placeholder" data-label="OEM MANUFACTURING"></div>
    </div>

    <!-- Slide 3 -->
    <div class="slide" style="background-color: #0A0A0A;">
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <span class="slide-eyebrow">Global Delivery</span>
        <h1 class="slide-headline">QUALITY THAT<br>SHIPS WORLDWIDE.</h1>
        <p class="slide-sub">Strict multi-stage QC. Shipped via DHL, FedEx, UPS — from our facility in Sialkot to your doorstep.</p>
        <div class="slide-ctas">
          <a href="#process" class="btn btn-primary">Our Process</a>
          <a href="#quality" class="btn btn-ghost">Quality Assurance</a>
        </div>
      </div>
      <div class="slide-bg-placeholder" data-label="WORLDWIDE SHIPPING"></div>
    </div>

  </div><!-- /.slider-wrapper -->

  <!-- Prev / Next Arrows -->
  <button class="slider-arrow slider-prev" aria-label="Previous slide">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
  <button class="slider-arrow slider-next" aria-label="Next slide">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>

  <!-- Dot Indicators -->
  <div class="slider-dots">
    <button class="dot active" aria-label="Slide 1"></button>
    <button class="dot" aria-label="Slide 2"></button>
    <button class="dot" aria-label="Slide 3"></button>
  </div>

  <!-- Scroll indicator -->
  <div class="scroll-indicator">
    <span>SCROLL TO EXPLORE</span>
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="1" y="1" width="14" height="22" rx="7"/>
      <circle cx="8" cy="7" r="2" fill="currentColor" class="scroll-dot"/>
    </svg>
  </div>

</section>
```

**CSS Rules to add:**
```css
/* ── Hero Slider ── */
.hero-slider {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  background: #0D0D0D;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.8s ease;
  pointer-events: none;
}

.slide.active {
  opacity: 1;
  pointer-events: auto;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.2) 100%);
  z-index: 1;
}

.slide-bg-placeholder {
  position: absolute;
  inset: 0;
  background: #1A1A1A;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

.slide-bg-placeholder::after {
  content: attr(data-label);
  color: #444;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: 1px solid #333;
  padding: 12px 24px;
}

/* Red corner accents on placeholder */
.slide-bg-placeholder::before {
  content: '';
  position: absolute;
  top: 40px; right: 40px;
  width: 60px; height: 60px;
  border-top: 3px solid var(--color-accent);
  border-right: 3px solid var(--color-accent);
}

.slide-content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 60px;
  width: 100%;
}

.slide-eyebrow {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 20px;
}

.slide-headline {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(48px, 7vw, 96px);
  font-weight: 700;
  color: #fff;
  line-height: 0.95;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 28px;
  max-width: 700px;
}

.slide-sub {
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  color: #AAAAAA;
  max-width: 520px;
  line-height: 1.7;
  margin-bottom: 40px;
}

.slide-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Arrows */
.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  backdrop-filter: blur(4px);
}
.slider-arrow:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
}
.slider-prev { left: 32px; }
.slider-next { right: 32px; }

/* Dots */
.slider-dots {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  padding: 0;
}
.dot.active {
  background: var(--color-accent);
  transform: scale(1.3);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  right: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 10;
  color: rgba(255,255,255,0.4);
}
.scroll-indicator span {
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
}
.scroll-dot {
  animation: scrollBounce 1.5s ease-in-out infinite;
}
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* Mobile */
@media (max-width: 768px) {
  .slide-content { padding: 0 24px; }
  .slider-arrow { display: none; }
  .scroll-indicator { display: none; }
  .slider-dots { bottom: 24px; }
}
```

**JavaScript for the slider — add to your existing JS file:**
```javascript
// ── Hero Slider ──
(function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  function resetAuto() {
    clearInterval(timer);
    startAuto();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAuto(); }));

  // Touch/swipe support
  let touchStartX = 0;
  const sliderEl = document.querySelector('.hero-slider');
  if (sliderEl) {
    sliderEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
    sliderEl.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
    });
  }

  startAuto();
})();
```

---

## Change 2 — Remove All Emojis, Replace with Inline SVG Icons

**Find and remove every emoji** from the entire HTML file. This includes (but is not limited to): ⚡ 🌍 🎨 ✅ ⏱️ 💬 📍 📞 📧 ⏰ 🇺🇸 🇬🇧 🇨🇦 🇦🇺 🇩🇪 🇫🇷 🇳🇱 🇮🇪 🇪🇸 🇮🇹 🇧🇪 ✓ ★

Replace each with the appropriate inline SVG icon below. All SVGs must use `currentColor` for stroke/fill so they inherit CSS color. Size via class, not hardcoded attributes.

### Icon Replacements — "Why Deesha" Section:

Use these inline SVGs. Wrap each in `<span class="icon">...</span>`.

```html
<!-- Low MOQs — Layers icon -->
<svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
</svg>

<!-- Worldwide Shipping — Globe icon -->
<svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
</svg>

<!-- Custom Design — Pen tool icon -->
<svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
</svg>

<!-- Strict QC — Shield check icon -->
<svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
</svg>

<!-- Fast Lead Times — Clock icon -->
<svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
</svg>

<!-- Free Consultation — Message circle icon -->
<svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
</svg>
```

### Icon Replacements — Contact Section:

```html
<!-- Location pin -->
<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
</svg>

<!-- Phone/WhatsApp -->
<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
</svg>

<!-- Email -->
<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
</svg>

<!-- Clock/Hours -->
<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
</svg>
```

### Quality Section — Replace ✓ checkmarks:

Replace every `✓` in the quality checklist with this inline SVG:

```html
<svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12"/>
</svg>
```

### Testimonials — Replace ★★★★★ stars:

Replace the text stars with 5 inline SVG stars per testimonial:

```html
<div class="stars">
  <!-- Repeat this SVG x5 -->
  <svg viewBox="0 0 24 24" fill="var(--color-accent)" stroke="none" width="16" height="16">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
</div>
```

### Global Delivery — Replace flag emojis:

Remove all country flag emojis (🇺🇸 🇬🇧 etc.) from the shipping destination pills. Keep only the country name text inside each pill. The pills already have styling — just clean the text content.

### CSS to add for icons:
```css
.section-icon {
  width: 32px;
  height: 32px;
  color: var(--color-accent);
  display: block;
  margin-bottom: 16px;
}
.contact-icon {
  width: 20px;
  height: 20px;
  color: var(--color-accent);
  flex-shrink: 0;
}
.check-icon {
  width: 18px;
  height: 18px;
  color: var(--color-accent);
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}
.stars {
  display: flex;
  gap: 3px;
  margin-bottom: 12px;
}
```

---

## Change 3 — Center-Align the FAQ Section Title

In the FAQ section, find the section heading block (the `— FAQS` eyebrow label and `## Common Questions, Clear Answers` heading). Add `text-align: center` to the section header wrapper. The accordion items themselves should remain left-aligned — only the section label and headline above the accordion should be centered.

```css
/* Target the FAQ section header specifically */
#faqs .section-header,
#faqs .section-label,
#faqs h2 {
  text-align: center;
}
```

If there is no `.section-header` wrapper div around the FAQ title, wrap the eyebrow and `<h2>` in a `<div class="section-header">` and apply the style there.

---

## Change 4 — Update Font Families

### Update Google Fonts import:

Replace the existing `@import` or `<link>` for Google Fonts with:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Update CSS variables and font stacks:

Find and replace all font-family declarations in the CSS:

```css
/* Replace Barlow Condensed with Space Grotesk for all headings */
/* OLD: font-family: 'Barlow Condensed', sans-serif; */
/* NEW: */
h1, h2, h3, h4, h5, h6,
.slide-headline,
.slide-eyebrow,
.hero-headline,
.section-label {
  font-family: 'Space Grotesk', sans-serif;
}

/* Replace DM Sans with Inter for body text */
/* OLD: font-family: 'DM Sans', sans-serif; */
/* NEW: */
body,
p,
.slide-sub,
input,
textarea,
select,
button,
.nav-link {
  font-family: 'Inter', sans-serif;
}
```

Also update the CSS root / base styles:

```css
:root {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
}

body {
  font-family: var(--font-body);
}
```

**Note:** Space Grotesk is not a condensed font like Barlow Condensed was, so heading sizes may need a slight reduction. If any `h1` or hero headline feels too wide after the font swap, reduce font-size by approximately 10–15% for those specific elements only. Do not change layout — just adjust `font-size` where necessary to maintain visual balance.

---

## Summary Checklist for the Agent

Before delivering, verify each item:

- [ ] Hero is a 3-slide full-screen slider with auto-play (5s), prev/next arrows, dot indicators, and swipe support on mobile
- [ ] Slider uses fade transition between slides (not slide/push)
- [ ] All emojis removed from the entire document — zero emojis anywhere
- [ ] Every icon replaced with the exact inline SVG provided above
- [ ] FAQ section label and h2 are center-aligned; accordion items remain left-aligned
- [ ] Google Fonts updated to Space Grotesk + Inter
- [ ] All headings use Space Grotesk, all body text uses Inter
- [ ] Site is still fully responsive at 375px, 768px, and 1280px+
- [ ] No other sections, colors, or layout has been modified