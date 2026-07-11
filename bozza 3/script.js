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

  const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusable() {
    return Array.from(menu.querySelectorAll(focusableSelector)).filter(el => el.offsetParent !== null);
  }

  function openMenu() {
    btn.classList.add('open');
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', 'true');
    const first = getFocusable()[0];
    if (first) first.focus();
  }

  function closeMenu() {
    const wasOpen = btn.classList.contains('open');
    btn.classList.remove('open');
    menu.classList.remove('open');
    document.body.style.overflow = '';
    btn.setAttribute('aria-expanded', 'false');
    if (wasOpen) btn.focus();
  }

  function toggleMenu() {
    if (btn.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  btn.addEventListener('click', toggleMenu);

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      closeMenu();
    }
  });

  /* Focus trapping nel mobile menu */
  menu.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = getFocusable();
    if (focusable.length === 0) {
      e.preventDefault();
      btn.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  /* Chiusura con ESC */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && btn.classList.contains('open')) {
      closeMenu();
    }
  });

  /* Chiudi mobile menu al resize oltre 768px */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && btn.classList.contains('open')) {
      closeMenu();
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

/* ── SMOOTH SCROLL + SKIP-LINK FOCUS ── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
        /* Skip-link focus */
        if (this.classList.contains('skip-link')) {
          if (!target.hasAttribute('tabindex')) {
            target.setAttribute('tabindex', '-1');
          }
          target.focus({ preventScroll: true });
        }
      }
    });
  });
})();

/* ── BACK TO TOP ── */
(function initBackToTop() {
  if (!document.body) return;
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Torna in cima');
  btn.innerHTML = '&#8679;';
  btn.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: rgba(186, 163, 125, 0.9);
    color: #0a0a0a;
    font-size: 1.4rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  document.body.appendChild(btn);

  function toggle() {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.visibility = show ? 'visible' : 'hidden';
  }

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
