<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NETRA — The Art of Seeing | Premium Optical Showroom, Pune</title>
<meta name="description" content="NETRA is Pune's premium optical showroom — computerised eye testing, luxury frames, prescription lenses and after-sales care.">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,500&family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- ============ PRELOADER ============ -->
<div class="preloader" id="preloader">
  <div class="preloader-mark">
    <svg width="56" height="28" viewBox="0 0 56 28" fill="none">
      <circle cx="14" cy="14" r="11" stroke="currentColor" stroke-width="2"/>
      <circle cx="42" cy="14" r="11" stroke="currentColor" stroke-width="2"/>
      <line x1="25" y1="14" x2="31" y2="14" stroke="currentColor" stroke-width="2"/>
    </svg>
  </div>
</div>

<!-- ============ CURSOR GLOW (desktop only, decorative) ============ -->
<div class="cursor-glow" id="cursorGlow" aria-hidden="true"></div>

<!-- ============ NAVBAR ============ -->
<header class="nav" id="siteNav">
  <div class="nav-inner">
    <a href="#top" class="brand">
      <span class="brand-mark" aria-hidden="true">
        <svg width="34" height="18" viewBox="0 0 56 28" fill="none">
          <circle cx="14" cy="14" r="11" stroke="currentColor" stroke-width="2"/>
          <circle cx="42" cy="14" r="11" stroke="currentColor" stroke-width="2"/>
          <line x1="25" y1="14" x2="31" y2="14" stroke="currentColor" stroke-width="2"/>
        </svg>
      </span>
      <span class="brand-text">NETRA</span>
    </a>

    <nav class="nav-links" id="navLinks">
      <a href="#collections">Frames</a>
      <a href="#sunglasses">Sunglasses</a>
      <a href="#lenses">Lenses</a>
      <a href="#gallery">Gallery</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="nav-actions">
      <a href="#enquiry" class="btn btn-primary btn-sm">Book Enquiry</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<main id="top">

  <!-- ============ HERO ============ -->
  <section class="hero" id="hero">
    <div class="hero-bg" id="heroBg" aria-hidden="true"></div>
    <div class="hero-grain" aria-hidden="true"></div>

    <div class="hero-inner">
      <p class="eyebrow reveal-up">Pune's Atelier of Optics — Est. 2011</p>
      <h1 class="hero-title" id="heroTitle">
        <span class="line">See the world</span>
        <span class="line"><em>in sharper</em> light.</span>
      </h1>
      <p class="hero-sub reveal-up" data-delay="1">Bespoke eyewear, precision lens craft, and a showroom experience built for people who notice detail.</p>

      <div class="hero-cta reveal-up" data-delay="2">
        <a href="#collections" class="btn btn-primary magnetic">Explore Collection</a>
        <a href="#enquiry" class="btn btn-ghost magnetic">Book Enquiry</a>
        <a href="tel:+919999999999" class="btn btn-icon magnetic" aria-label="Call Now">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Now
        </a>
      </div>

      <!-- SIGNATURE ELEMENT: Clarity Slider -->
      <div class="clarity" id="clarity" data-delay="3">
        <div class="clarity-frame">
          <div class="clarity-pane clarity-blur" aria-hidden="true">
            <svg viewBox="0 0 400 180" preserveAspectRatio="none">
              <rect width="400" height="180" fill="#0B1F3A"/>
              <rect x="20" y="80" width="30" height="100" fill="#1E4FA3"/>
              <rect x="60" y="50" width="24" height="130" fill="#1E4FA3"/>
              <rect x="95" y="95" width="40" height="85" fill="#274E8C"/>
              <rect x="150" y="30" width="26" height="150" fill="#1E4FA3"/>
              <rect x="190" y="70" width="34" height="110" fill="#274E8C"/>
              <rect x="235" y="45" width="22" height="135" fill="#1E4FA3"/>
              <rect x="268" y="90" width="46" height="90" fill="#274E8C"/>
              <rect x="325" y="60" width="28" height="120" fill="#1E4FA3"/>
              <rect x="362" y="100" width="24" height="80" fill="#274E8C"/>
              <circle cx="330" cy="35" r="18" fill="#5DA9E9"/>
            </svg>
          </div>
          <div class="clarity-pane clarity-sharp" id="claritySharp" aria-hidden="true">
            <svg viewBox="0 0 400 180" preserveAspectRatio="none">
              <rect width="400" height="180" fill="#0B1F3A"/>
              <rect x="20" y="80" width="30" height="100" fill="#5DA9E9"/>
              <rect x="60" y="50" width="24" height="130" fill="#5DA9E9"/>
              <rect x="95" y="95" width="40" height="85" fill="#8FC6F2"/>
              <rect x="150" y="30" width="26" height="150" fill="#5DA9E9"/>
              <rect x="190" y="70" width="34" height="110" fill="#8FC6F2"/>
              <rect x="235" y="45" width="22" height="135" fill="#5DA9E9"/>
              <rect x="268" y="90" width="46" height="90" fill="#8FC6F2"/>
              <rect x="325" y="60" width="28" height="120" fill="#5DA9E9"/>
              <rect x="362" y="100" width="24" height="80" fill="#8FC6F2"/>
              <circle cx="330" cy="35" r="18" fill="#FFF3D6"/>
              <g stroke="#0B1F3A" stroke-width="1" opacity="0.5">
                <line x1="20" y1="80" x2="50" y2="80"/><line x1="60" y1="50" x2="84" y2="50"/>
              </g>
            </svg>
          </div>
          <div class="clarity-divider" id="clarityDivider" role="slider" aria-label="Drag to compare blurred and corrected vision" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0">
            <span class="clarity-handle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8s-9-3.6-9-8 4-8 9-8 9 3.6 9 8z"/></svg>
            </span>
          </div>
          <span class="clarity-label clarity-label-left">Before</span>
          <span class="clarity-label clarity-label-right">With NETRA lenses</span>
        </div>
        <p class="clarity-caption">Drag the lens — this is the difference the right prescription makes.</p>
      </div>
    </div>

    <div class="hero-float hero-float-1 glass">
      <strong>15+</strong><span>Years Trusted</span>
    </div>
    <div class="hero-float hero-float-2 glass">
      <strong>12,000+</strong><span>Happy Customers</span>
    </div>

    <a href="#about" class="scroll-indicator" aria-label="Scroll down">
      <span class="scroll-mouse"><span class="scroll-dot"></span></span>
    </a>
  </section>

  <!-- ============ ABOUT ============ -->
  <section class="section about" id="about">
    <div class="container about-grid">
      <div class="about-visual reveal-left">
        <div class="about-panel">
          <svg viewBox="0 0 300 340" width="100%" height="100%">
            <defs>
              <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#1E4FA3"/>
                <stop offset="1" stop-color="#0B1F3A"/>
              </linearGradient>
            </defs>
            <rect width="300" height="340" rx="24" fill="url(#aboutGrad)"/>
            <g transform="translate(60,150)" stroke="#BFE0FA" stroke-width="3" fill="none">
              <circle cx="0" cy="0" r="34"/>
              <circle cx="120" cy="0" r="34"/>
              <line x1="34" y1="0" x2="86" y2="0"/>
              <line x1="-34" y1="-6" x2="-52" y2="-16"/>
              <line x1="154" y1="-6" x2="172" y2="-16"/>
            </g>
          </svg>
          <span class="about-badge glass">Since 2011</span>
        </div>
      </div>

      <div class="about-copy">
        <p class="eyebrow reveal-up">About the showroom</p>
        <h2 class="reveal-up">Where Pune comes<br>to see clearly.</h2>
        <p class="reveal-up">NETRA was founded on a simple belief — eyewear should be precise, personal, and built to last. Every visit begins with a proper computerised eye test, not a guess, and every pair leaves our workshop checked by hand.</p>
        <p class="reveal-up">Two decades of combined optometry experience sit behind our counter. Our advisors are trained to read faces, not just prescriptions — matching frame, lens and finish to how you actually live.</p>

        <div class="stat-grid reveal-up">
          <div class="stat">
            <span class="stat-num" data-count="15" data-suffix="+">0</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat">
            <span class="stat-num" data-count="12000" data-suffix="+">0</span>
            <span class="stat-label">Happy Customers</span>
          </div>
          <div class="stat">
            <span class="stat-num" data-count="500" data-suffix="+">0</span>
            <span class="stat-label">Frames Available</span>
          </div>
          <div class="stat">
            <span class="stat-num" data-count="40" data-suffix="+">0</span>
            <span class="stat-label">Lens Options</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ WHY CHOOSE US ============ -->
  <section class="section why" id="why">
    <div class="container">
      <p class="eyebrow center reveal-up">Why NETRA</p>
      <h2 class="center reveal-up">Eight reasons people don't<br>go anywhere else.</h2>

      <div class="why-grid" id="whyGrid">
        <!-- filled by JS-friendly static markup -->
      </div>
    </div>
  </section>

  <!-- ============ COLLECTIONS (FRAMES) ============ -->
  <section class="section collections" id="collections">
    <div class="container">
      <p class="eyebrow center reveal-up">Frame Collections</p>
      <h2 class="center reveal-up">A shape and finish<br>for every face.</h2>

      <div class="filter-bar reveal-up" id="frameFilters"></div>
      <div class="card-grid" id="frameGrid"></div>
    </div>
  </section>

  <!-- ============ SUNGLASSES ============ -->
  <section class="section sunglasses" id="sunglasses">
    <div class="container">
      <p class="eyebrow center reveal-up">Sunglasses</p>
      <h2 class="center reveal-up">Statement pieces for<br>every kind of light.</h2>

      <div class="chip-row reveal-up" id="sunChips"></div>

      <div class="hscroll" id="sunScroll"></div>
    </div>
  </section>

  <!-- ============ LENSES ============ -->
  <section class="section lenses" id="lenses">
    <div class="container">
      <p class="eyebrow center reveal-up">Lens Craft</p>
      <h2 class="center reveal-up">Ten ways to see<br>exactly as you need to.</h2>

      <div class="lens-grid" id="lensGrid"></div>
    </div>
  </section>

  <!-- ============ GALLERY ============ -->
  <section class="section gallery-section" id="gallery">
    <div class="container">
      <p class="eyebrow center reveal-up">Gallery</p>
      <h2 class="center reveal-up">Inside the showroom.</h2>

      <div class="filter-bar reveal-up" id="galleryFilters"></div>
      <div class="masonry" id="masonryGrid"></div>
    </div>
  </section>

  <!-- ============ PORTFOLIO SHOWCASE ============ -->
  <section class="section showcase" id="showcase">
    <div class="container">
      <p class="eyebrow center reveal-up">Our Work</p>
      <h2 class="center reveal-up">Curated by category.</h2>
      <div class="showcase-grid" id="showcaseGrid"></div>
    </div>
  </section>

  <!-- ============ TESTIMONIALS ============ -->
  <section class="section testimonials" id="testimonials">
    <div class="container">
      <p class="eyebrow center reveal-up">Testimonials</p>
      <h2 class="center reveal-up">Trusted across Pune.</h2>

      <div class="testi-track-wrap reveal-up">
        <div class="testi-track" id="testiTrack"></div>
        <div class="testi-dots" id="testiDots"></div>
      </div>
    </div>
  </section>

  <!-- ============ FAQ ============ -->
  <section class="section faq" id="faq">
    <div class="container container-narrow">
      <p class="eyebrow center reveal-up">FAQ</p>
      <h2 class="center reveal-up">Good to know.</h2>
      <div class="accordion" id="faqAccordion"></div>
    </div>
  </section>

  <!-- ============ ENQUIRY ============ -->
  <section class="section enquiry" id="enquiry">
    <div class="enquiry-blobs" aria-hidden="true">
      <span class="blob blob-1"></span><span class="blob blob-2"></span>
    </div>
    <div class="container enquiry-grid">
      <div class="enquiry-left reveal-left">
        <p class="eyebrow">Get in touch</p>
        <h2>Let's find your<br>perfect pair.</h2>
        <p class="enquiry-copy">Tell us what you're looking for and one of our optometrists will call you back — usually within the hour, during business hours.</p>

        <ul class="enquiry-info">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span><strong>Mon – Sun</strong> · 10:30 AM – 9:00 PM</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+91 99999 99999 <em>(placeholder)</em></span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span>WhatsApp: +91 99999 99999 <em>(placeholder)</em></span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Shop 4, FC Road, Pune <em>(placeholder address)</em></span>
          </li>
        </ul>

        <a href="#" class="btn btn-ghost btn-light">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Open in Google Maps
        </a>
      </div>

      <div class="enquiry-right reveal-right">
        <form class="enquiry-form glass" id="enquiryForm" novalidate>
          <div class="field">
            <input type="text" id="f-name" name="name" placeholder=" " required>
            <label for="f-name">Full Name</label>
            <span class="field-error">Please enter your name</span>
          </div>
          <div class="field">
            <input type="tel" id="f-phone" name="phone" placeholder=" " required pattern="[0-9+\-\s]{7,15}">
            <label for="f-phone">Phone Number</label>
            <span class="field-error">Please enter a valid phone number</span>
          </div>
          <div class="field">
            <input type="email" id="f-email" name="email" placeholder=" ">
            <label for="f-email">Email</label>
            <span class="field-error">Please enter a valid email</span>
          </div>
          <div class="field field-select">
            <select id="f-requirement" name="requirement" required>
              <option value="" disabled selected></option>
              <option>Eye Test</option>
              <option>New Frame</option>
              <option>Lens Replacement</option>
              <option>Sunglasses</option>
              <option>Repair / Service</option>
            </select>
            <label for="f-requirement">Requirement</label>
            <span class="field-error">Please select a requirement</span>
          </div>
          <div class="field field-select">
            <select id="f-product" name="product">
              <option value="" disabled selected></option>
              <option>Metal Frames</option>
              <option>Titanium Frames</option>
              <option>Sunglasses</option>
              <option>Kids Collection</option>
              <option>Premium Collection</option>
              <option>Not sure yet</option>
            </select>
            <label for="f-product">Product Interested In</label>
          </div>
          <div class="field field-full">
            <textarea id="f-message" name="message" rows="3" placeholder=" "></textarea>
            <label for="f-message">Message</label>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-submit">
            <span class="btn-submit-text">Send Enquiry</span>
            <span class="btn-submit-spinner" aria-hidden="true"></span>
          </button>
          <p class="form-note">This form is currently in demo mode — your details are stored on this device only and shown to you below, ready for a future backend.</p>
        </form>
      </div>
    </div>
  </section>

  <!-- ============ CONTACT ============ -->
  <section class="section contact" id="contact">
    <div class="container contact-grid">
      <div class="map-placeholder">
        <div class="map-grid" aria-hidden="true"></div>
        <div class="map-pin">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <span class="map-note">Map placeholder — connect Google Maps embed with your real address</span>
      </div>

      <div class="contact-details">
        <h3>Visit the Showroom</h3>
        <p><strong>Address</strong><br>Shop 4, Ground Floor, FC Road, Pune, Maharashtra <em>(placeholder)</em></p>
        <p><strong>Hours</strong><br>Mon – Sun, 10:30 AM – 9:00 PM</p>
        <p><strong>Phone</strong><br>+91 99999 99999 <em>(placeholder)</em></p>
        <p><strong>Email</strong><br>hello@netraoptics.example <em>(placeholder)</em></p>
        <div class="social-row">
          <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
        </div>
      </div>
    </div>
  </section>

</main>

<!-- ============ FOOTER ============ -->
<footer class="footer">
  <div class="container footer-top">
    <div class="footer-brand">
      <a href="#top" class="brand">
        <span class="brand-mark" aria-hidden="true">
          <svg width="34" height="18" viewBox="0 0 56 28" fill="none">
            <circle cx="14" cy="14" r="11" stroke="currentColor" stroke-width="2"/>
            <circle cx="42" cy="14" r="11" stroke="currentColor" stroke-width="2"/>
            <line x1="25" y1="14" x2="31" y2="14" stroke="currentColor" stroke-width="2"/>
          </svg>
        </span>
        <span class="brand-text">NETRA</span>
      </a>
      <p>Pune's atelier of optics. Precision eyewear, made personal.</p>
      <form class="newsletter" id="newsletterForm">
        <input type="email" placeholder="Your email" required>
        <button type="submit" aria-label="Subscribe">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </form>
    </div>

    <div class="footer-col">
      <h4>Collections</h4>
      <a href="#collections">Metal Frames</a>
      <a href="#collections">Titanium</a>
      <a href="#sunglasses">Sunglasses</a>
      <a href="#collections">Kids Collection</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <a href="#about">About Us</a>
      <a href="#why">Why NETRA</a>
      <a href="#gallery">Gallery</a>
      <a href="#faq">FAQ</a>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <a href="#enquiry">Book Enquiry</a>
      <a href="#contact">Visit Us</a>
      <a href="tel:+919999999999">Call Now</a>
      <a href="#contact">WhatsApp</a>
    </div>
  </div>

  <div class="container footer-bottom">
    <p>&copy; <span id="year"></span> NETRA Opticals, Pune. All rights reserved.</p>
    <div class="social-row">
      <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
      <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
    </div>
  </div>
</footer>

<!-- ============ STICKY BUTTONS ============ -->
<a href="#" class="sticky-btn sticky-whatsapp" id="whatsappBtn" aria-label="WhatsApp Enquiry">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
</a>
<a href="tel:+919999999999" class="sticky-btn sticky-call" id="callBtn" aria-label="Call Now">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
</a>
<button class="sticky-btn sticky-top" id="topBtn" aria-label="Back to top">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
</button>

<!-- ============ LIGHTBOX ============ -->
<div class="lightbox" id="lightbox">
  <button class="lightbox-close" id="lightboxClose" aria-label="Close">&times;</button>
  <div class="lightbox-content" id="lightboxContent"></div>
</div>

<!-- ============ SUCCESS MODAL ============ -->
<div class="success-modal" id="successModal">
  <canvas id="confettiCanvas"></canvas>
  <div class="success-card glass">
    <span class="success-check">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
    <h3>Enquiry received</h3>
    <p>Thank you — our team will call you back shortly. Here's a copy of what you sent:</p>
    <div class="success-summary" id="successSummary"></div>
    <button class="btn btn-primary" id="successClose">Done</button>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="data.js"></script>
<script src="script.js"></script>
</body>
</html>
