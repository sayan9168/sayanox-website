// Navigation and subtle scroll-linked depth.
(function () {
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  const art = document.querySelector('.hero-art');
  const cards = document.querySelectorAll('.feature-card, .code-block, .eco-card, .creator-card');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let ticking = false;

  function update() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    if (!reducedMotion.matches) {
      if (art) {
        art.style.setProperty('--art-y', `${Math.min(window.scrollY * 0.12, 80)}px`);
        art.style.setProperty('--spin', `${Math.min(window.scrollY * 0.04, 40)}deg`);
      }
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight));
          card.style.setProperty('--depth-y', `${progress * 8}px`);
          card.style.setProperty('--depth-rotate', `${progress * 2}deg`);
        }
      });
    } else {
      if (art) { art.style.removeProperty('--art-y'); art.style.removeProperty('--spin'); }
      cards.forEach(card => { card.style.removeProperty('--depth-y'); card.style.removeProperty('--depth-rotate'); });
    }
    ticking = false;
  }
  function scheduleUpdate() {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', scheduleUpdate);
  update();

  if (menuToggle && navLinks) {
    function setMenu(open) {
      navLinks.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    }
    menuToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
  }
})();
