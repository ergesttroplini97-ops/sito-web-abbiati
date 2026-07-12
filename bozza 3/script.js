/* =============================================
   STUDIO LEGALE ASSOCIATO ABBIATI — BOZZA 3
   script.js — Dark Luxury
   ============================================= */

'use strict';

/* ── NAVBAR ── */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const links = document.querySelectorAll('.navbar-links a, .mobile-menu a');
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── HAMBURGER ── */
(function initHamburger() {
  const btn  = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.classList.toggle('open');
    menu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    btn.setAttribute('aria-expanded', isOpen);
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      btn.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

/* ── FADE-IN ── */
(function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.children)
          .filter(c => c.classList.contains('fade-in'));
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.1}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ── SMOOTH SCROLL ── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();

/* ── LIGHTBOX GALLERIA SOCI ── */
(function initLightbox() {
  const thumbs = document.querySelectorAll('.socio-gallery img');
  if (!thumbs.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Immagine ingrandita');
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Chiudi">&times;</button><img alt="" />';
  document.body.appendChild(overlay);

  const big = overlay.querySelector('img');

  function open(src, alt) {
    big.src = src;
    big.alt = alt;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  thumbs.forEach(img => {
    img.addEventListener('click', () => open(img.src, img.alt));
  });

  overlay.addEventListener('click', e => {
    if (e.target !== big) close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });
})();

/* ── HERO ENTRANCE ── */
document.addEventListener('DOMContentLoaded', () => {
  const heroCenterContent = document.querySelector('.hero-center-content');
  if (heroCenterContent) {
    heroCenterContent.style.opacity = '0';
    heroCenterContent.style.transform = 'translateY(22px)';
    heroCenterContent.style.transition = 'opacity 1s ease 0.25s, transform 1s ease 0.25s';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      heroCenterContent.style.opacity = '1';
      heroCenterContent.style.transform = 'translateY(0)';
    }));
  }

  const pageHero = document.querySelector('.page-hero .container');
  if (pageHero && !heroCenterContent) {
    pageHero.style.opacity = '0';
    pageHero.style.transform = 'translateY(18px)';
    pageHero.style.transition = 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      pageHero.style.opacity = '1';
      pageHero.style.transform = 'translateY(0)';
    }));
  }
});
