/* ===========================================================
   NETRA — interactions & animation
=========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hide'), 300);
  });
  setTimeout(() => preloader && preloader.classList.add('hide'), 2200); // fallback

  /* ---------- Icon library (small inline SVG paths reused across cards) ---------- */
  const ICONS = {
    eye: '<circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>',
    frame: '<circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><line x1="11" y1="12" x2="13" y2="12"/>',
    tag: '<path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.24L3 3v6.59a2 2 0 0 0 .59 1.41l9.59 9.59a2 2 0 0 0 2.82 0l4.59-4.59a2 2 0 0 0 0-2.82z"/><circle cx="7.5" cy="7.5" r="1"/>',
    spark: '<path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/>',
    truck: '<rect x="1" y="7" width="14" height="10" rx="1"/><path d="M15 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="1.6"/><circle cx="18" cy="19" r="1.6"/>',
    star: '<polygon points="12 2 15.1 8.6 22 9.3 17 14.1 18.2 21 12 17.6 5.8 21 7 14.1 2 9.3 8.9 8.6"/>',
    lens: '<circle cx="9" cy="12" r="6"/><circle cx="17" cy="12" r="4"/>',
    support: '<path d="M12 2a7 7 0 0 0-7 7v4a7 7 0 0 0 4 6.3M19 9v4a7 7 0 0 1-4 6.3"/><rect x="2" y="10" width="4" height="6" rx="1"/><rect x="18" y="10" width="4" height="6" rx="1"/>',
    gallery: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5-9 9"/>',
    check: '<polyline points="20 6 9 17 4 12"/>'
  };
  const svg = (path, size = 24) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${path}</svg>`;

  /* ---------- Palette for generated visuals (cycled) ---------- */
  const PALETTE = ['#0B1F3A', '#1E4FA3', '#274E8C', '#5DA9E9', '#132A52'];
  const gradFor = (i) => `linear-gradient(135deg, ${PALETTE[i % PALETTE.length]}, ${PALETTE[(i + 2) % PALETTE.length]})`;

  /* =========================================================
     RENDER: Why Choose Us
  ========================================================= */
  const whyGrid = document.getElementById('whyGrid');
  whyGrid.innerHTML = WHY_US.map((item) => `
    <div class="why-card reveal-up">
      <div class="why-icon">${svg(ICONS[item.icon], 24)}</div>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>
  `).join('');

  /* =========================================================
     RENDER: Frame filters + grid
  ========================================================= */
  const frameFilters = document.getElementById('frameFilters');
  const frameGrid = document.getElementById('frameGrid');
  frameFilters.innerHTML = FRAME_FILTERS.map((f, i) => `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${f}">${f}</button>`).join('');
  frameGrid.innerHTML = FRAMES.map((f, i) => `
    <div class="frame-card reveal-up" data-cat="${f.cat}">
      <div class="frame-visual" style="background:${gradFor(i)}">${svg(ICONS.frame, 44)}</div>
      <div class="frame-body">
        <h4>${f.name}</h4>
        <p>${f.desc}</p>
        <a href="#gallery" class="frame-link">View Gallery ${svg('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>', 14)}</a>
      </div>
    </div>
  `).join('');

  frameFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    frameFilters.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    frameGrid.querySelectorAll('.frame-card').forEach((card) => {
      card.classList.toggle('filtered-out', filter !== 'All' && card.dataset.cat !== filter);
    });
  });

  /* =========================================================
     RENDER: Sunglasses chips + horizontal gallery
  ========================================================= */
  const sunChips = document.getElementById('sunChips');
  sunChips.innerHTML = SUN_CHIPS.map((c, i) => `<button class="chip${i === 0 ? ' active' : ''}" data-chip="${c}">${c}</button>`).join('');
  const sunScroll = document.getElementById('sunScroll');
  sunScroll.innerHTML = SUN_ITEMS.map((s, i) => `
    <div class="sun-card reveal-scale">
      <div class="sun-icon">${svg(ICONS.frame, 30)}</div>
      <h4>${s.name}</h4>
      <p>${s.desc}</p>
    </div>
  `).join('');
  sunChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    sunChips.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    const idx = SUN_CHIPS.indexOf(chip.dataset.chip);
    const cards = sunScroll.querySelectorAll('.sun-card');
    if (cards[idx]) cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });

  /* =========================================================
     RENDER: Lens expanding cards
  ========================================================= */
  const lensGrid = document.getElementById('lensGrid');
  lensGrid.innerHTML = LENSES.map((l, i) => `
    <div class="lens-card reveal-up" data-idx="${i}">
      <span class="lens-num">0${i + 1}</span>
      <h4>${l.name}</h4>
      <p>${l.desc}</p>
    </div>
  `).join('');
  lensGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.lens-card');
    if (!card) return;
    card.classList.toggle('open');
  });

  /* =========================================================
     RENDER: Gallery masonry + filters
  ========================================================= */
  const galleryFilters = document.getElementById('galleryFilters');
  const masonryGrid = document.getElementById('masonryGrid');
  galleryFilters.innerHTML = GALLERY_FILTERS.map((f, i) => `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${f}">${f}</button>`).join('');
  masonryGrid.innerHTML = GALLERY_ITEMS.map((g, i) => `
    <div class="masonry-item" data-cat="${g.cat}">
      <div class="masonry-visual" style="height:${g.tall ? 280 : 190}px; background:${gradFor(i)}"></div>
      <div class="masonry-overlay">
        <small>${g.cat}</small>
        <strong>${g.name}</strong>
      </div>
    </div>
  `).join('');
  galleryFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    galleryFilters.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    masonryGrid.querySelectorAll('.masonry-item').forEach((item) => {
      item.classList.toggle('filtered-out', filter !== 'All' && item.dataset.cat !== filter);
    });
  });

  /* Lightbox */
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightboxContent');
  masonryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.masonry-item');
    if (!item) return;
    const name = item.querySelector('strong').textContent;
    const cat = item.querySelector('small').textContent;
    const bg = item.querySelector('.masonry-visual').style.background;
    lightboxContent.innerHTML = `
      <div style="background:${bg}; aspect-ratio:4/3; display:flex; align-items:flex-end; padding:24px; color:#fff;">
        <div><small style="font-family:'Space Grotesk',sans-serif; letter-spacing:.06em; color:#BFE0FA;">${cat}</small><h3 style="color:#fff;margin:4px 0 0;">${name}</h3></div>
      </div>`;
    lightbox.classList.add('open');
  });
  document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });

  /* =========================================================
     RENDER: Showcase
  ========================================================= */
  const showcaseGrid = document.getElementById('showcaseGrid');
  showcaseGrid.innerHTML = SHOWCASE.map((s, i) => `
    <div class="showcase-card reveal-up">
      <div class="showcase-bg" style="background:${gradFor(i)}"></div>
      <div class="showcase-info">
        <h4>${s.name}</h4>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join('');

  /* =========================================================
     RENDER: Testimonials slider
  ========================================================= */
  const testiTrack = document.getElementById('testiTrack');
  const testiDots = document.getElementById('testiDots');
  testiTrack.innerHTML = TESTIMONIALS.map((t) => `
    <div class="testi-card">
      <div class="testi-stars">${Array.from({ length: 5 }).map((_, i) => `<span style="animation-delay:${i * 0.08}s">${svg('<polygon points="12 2 15.1 8.6 22 9.3 17 14.1 18.2 21 12 17.6 5.8 21 7 14.1 2 9.3 8.9 8.6" fill="currentColor" stroke="none"/>', 18)}</span>`).join('')}</div>
      <p class="testi-quote">&ldquo;${t.text}&rdquo;</p>
      <div class="testi-name">${t.name}</div>
      <div class="testi-loc">${t.loc}</div>
    </div>
  `).join('');
  testiDots.innerHTML = TESTIMONIALS.map((_, i) => `<button data-i="${i}" class="${i === 0 ? 'active' : ''}"></button>`).join('');

  let testiIndex = 0;
  function goToTesti(i) {
    testiIndex = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    testiTrack.style.transform = `translateX(-${testiIndex * 100}%)`;
    testiDots.querySelectorAll('button').forEach((b, bi) => b.classList.toggle('active', bi === testiIndex));
  }
  testiDots.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn) goToTesti(parseInt(btn.dataset.i, 10));
  });
  let testiAuto = setInterval(() => goToTesti(testiIndex + 1), 5500);
  testiTrack.addEventListener('mouseenter', () => clearInterval(testiAuto));
  testiTrack.addEventListener('mouseleave', () => { testiAuto = setInterval(() => goToTesti(testiIndex + 1), 5500); });

  /* =========================================================
     RENDER: FAQ accordion
  ========================================================= */
  const faqAccordion = document.getElementById('faqAccordion');
  faqAccordion.innerHTML = FAQS.map((f) => `
    <div class="acc-item">
      <button class="acc-head">${f.q} ${svg('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>', 18)}</button>
      <div class="acc-body"><p>${f.a}</p></div>
    </div>
  `).join('');
  faqAccordion.addEventListener('click', (e) => {
    const head = e.target.closest('.acc-head');
    if (!head) return;
    const item = head.parentElement;
    const body = item.querySelector('.acc-body');
    const wasOpen = item.classList.contains('open');
    faqAccordion.querySelectorAll('.acc-item').forEach((i) => {
      i.classList.remove('open');
      i.querySelector('.acc-body').style.maxHeight = null;
    });
    if (!wasOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });

  /* =========================================================
     Nav: scroll state + mobile toggle
  ========================================================= */
  const nav = document.getElementById('siteNav');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('topBtn').classList.toggle('show', window.scrollY > 700);
  }, { passive: true });
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => navLinks.classList.remove('open')));

  document.getElementById('topBtn').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* =========================================================
     Cursor glow + magnetic buttons (desktop only)
  ========================================================= */
  const isFinePointer = window.matchMedia('(pointer:fine)').matches;
  const cursorGlow = document.getElementById('cursorGlow');
  if (isFinePointer) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.opacity = '1';
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('.magnetic').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* =========================================================
     Clarity slider (hero signature element)
  ========================================================= */
  const clarityFrame = document.querySelector('.clarity-frame');
  const clarityDivider = document.getElementById('clarityDivider');
  const claritySharp = document.getElementById('claritySharp');
  let dragging = false;

  function setClarity(percent) {
    percent = Math.max(4, Math.min(96, percent));
    clarityDivider.style.left = percent + '%';
    claritySharp.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    clarityDivider.setAttribute('aria-valuenow', Math.round(percent));
  }
  function updateFromEvent(clientX) {
    const rect = clarityFrame.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setClarity(percent);
  }
  clarityDivider.addEventListener('pointerdown', () => { dragging = true; });
  window.addEventListener('pointerup', () => { dragging = false; });
  window.addEventListener('pointermove', (e) => { if (dragging) updateFromEvent(e.clientX); });
  clarityFrame.addEventListener('click', (e) => updateFromEvent(e.clientX));
  clarityDivider.addEventListener('keydown', (e) => {
    const current = parseFloat(clarityDivider.style.left) || 50;
    if (e.key === 'ArrowLeft') setClarity(current - 5);
    if (e.key === 'ArrowRight') setClarity(current + 5);
  });
  // gentle auto demo sweep once, then stop (invites interaction without being annoying)
  let sweep = 50, dir = 1, sweeps = 0;
  const sweepTimer = setInterval(() => {
    if (dragging) return;
    sweep += dir * 0.6;
    if (sweep > 68 || sweep < 32) { dir *= -1; sweeps++; }
    setClarity(sweep);
    if (sweeps >= 2) clearInterval(sweepTimer);
  }, 30);

  /* =========================================================
     Animated counters (IntersectionObserver)
  ========================================================= */
  const counters = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => counterObserver.observe(c));

  /* =========================================================
     Generic scroll reveal (IntersectionObserver, GSAP-eased via CSS)
  ========================================================= */
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .why-card, .masonry-item');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay ? parseFloat(entry.target.dataset.delay) * 0.15 : 0;
        setTimeout(() => entry.target.classList.add('is-visible'), delay * 1000);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => revealObserver.observe(el));

  /* Stagger children slightly within grids for a nicer cascade */
  ['whyGrid', 'frameGrid', 'masonryGrid', 'showcaseGrid', 'lensGrid'].forEach((id) => {
    const grid = document.getElementById(id);
    if (!grid) return;
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = `${Math.min(i, 8) * 60}ms`;
    });
  });

  /* =========================================================
     GSAP ScrollTrigger: hero parallax + section-level polish
  ========================================================= */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#heroBg', {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.utils.toArray('.hero-float').forEach((el, i) => {
      gsap.to(el, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      });
    });
  }

  /* =========================================================
     Enquiry form: validation, localStorage, success + confetti
  ========================================================= */
  const form = document.getElementById('enquiryForm');
  const submitBtn = form.querySelector('.btn-submit');

  function validateField(field) {
    const input = field.querySelector('input, select, textarea');
    if (!input.hasAttribute('required')) return true;
    let valid = input.checkValidity();
    field.classList.toggle('invalid', !valid);
    return valid;
  }
  form.querySelectorAll('.field').forEach((field) => {
    const input = field.querySelector('input, select, textarea');
    input.addEventListener('blur', () => validateField(field));
    input.addEventListener('input', () => field.classList.remove('invalid'));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allValid = true;
    form.querySelectorAll('.field').forEach((field) => { if (!validateField(field)) allValid = false; });
    if (!allValid) return;

    submitBtn.classList.add('loading');
    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      requirement: form.requirement.value,
      product: form.product.value,
      message: form.message.value.trim(),
      date: new Date().toLocaleString()
    };

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      try {
        const existing = JSON.parse(localStorage.getItem('netra_enquiries') || '[]');
        existing.push(data);
        localStorage.setItem('netra_enquiries', JSON.stringify(existing));
      } catch (err) { /* storage unavailable — still show confirmation */ }

      document.getElementById('successSummary').innerHTML = `
        <div><span>Name</span><strong>${data.name}</strong></div>
        <div><span>Phone</span><strong>${data.phone}</strong></div>
        ${data.requirement ? `<div><span>Requirement</span><strong>${data.requirement}</strong></div>` : ''}
        ${data.product ? `<div><span>Product</span><strong>${data.product}</strong></div>` : ''}
      `;
      document.getElementById('successModal').classList.add('open');
      launchConfetti();
      form.reset();
      form.querySelectorAll('.field').forEach((f) => f.classList.remove('invalid'));
    }, 900);
  });

  document.getElementById('successClose').addEventListener('click', () => {
    document.getElementById('successModal').classList.remove('open');
  });

  /* Lightweight canvas confetti — no external library */
  function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const colors = ['#5DA9E9', '#1E4FA3', '#BFE0FA', '#FFD98A', '#ffffff'];
    const pieces = Array.from({ length: 90 }).map(() => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 1.4) * 12,
      size: 4 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.3
    }));
    let frame = 0;
    (function animate() {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        p.vy += 0.28;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      if (frame < 110) requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    })();
  }

  /* =========================================================
     Newsletter (no backend — friendly confirmation)
  ========================================================= */
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = newsletterForm.querySelector('button');
    const original = btn.innerHTML;
    btn.innerHTML = svg(ICONS.check, 16);
    newsletterForm.querySelector('input').value = '';
    setTimeout(() => { btn.innerHTML = original; }, 2200);
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
