/**
 * ScentStation Laundry – script.js
 * Optimized: single scroll listener, cached DOM refs, no duplicate handlers.
 */

/* ─── CONFIG ─────────────────────────────────────────────────────────────── */
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz1tkqLYxqb0rQd8fyvFAoBFAtDhDQd-BA0w9hZiT_Juvqh1y8CabWixbmxSUAFogeC/exec';

/* ─── CACHED DOM REFS ────────────────────────────────────────────────────── */
const heroSection     = document.getElementById('hero');
const leadForm        = document.getElementById('leadForm');
const namaInput       = document.getElementById('nama');
const igInput         = document.getElementById('instagram');
const consentCheckbox = document.getElementById('privacyConsent');
const submitBtn       = document.getElementById('submitBtn');
const namaError       = document.getElementById('namaError');
const igError         = document.getElementById('instagramError');
const consentError    = document.getElementById('consentError');

const thankyouOverlay  = document.getElementById('thankyouOverlay');
const thankyouName     = document.getElementById('thankyouName');
const closeThankyou    = document.getElementById('closeThankyou');
const closeThankyouBtn = document.getElementById('closeThankyouBtn');

const privacyOverlay  = document.getElementById('privacyOverlay');
const openPrivacyBtns = document.querySelectorAll('#openPrivacyPolicy, #openPrivacyFooter');
const closePrivacy    = document.getElementById('closePrivacy');
const closePrivacyBtn = document.getElementById('closePrivacyBtn');
const privacyDateEl   = document.getElementById('privacyDate');

const navbar          = document.getElementById('navbar');
const backToTopBtn    = document.getElementById('backToTop');
const themeToggleBtn  = document.getElementById('themeToggle');

/* ─── 1. PRIVACY POLICY DATE ─────────────────────────────────────────────── */
if (privacyDateEl) {
  const d = new Date();
  privacyDateEl.textContent =
    `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
}

/* ─── 2. INSTAGRAM @ STRIP ───────────────────────────────────────────────── */
igInput.addEventListener('input', function () {
  if (this.value.startsWith('@')) this.value = this.value.replace(/^@+/, '');
});
igInput.addEventListener('paste', () => {
  setTimeout(() => { igInput.value = igInput.value.replace(/^@+/, ''); }, 0);
});

/* ─── 3. FORM VALIDATION ─────────────────────────────────────────────────── */
function showError(input, el, msg) { input.classList.add('is-error'); el.textContent = msg; el.classList.add('visible'); }
function clearError(input, el)     { input.classList.remove('is-error'); el.classList.remove('visible'); }

namaInput.addEventListener('input',  () => clearError(namaInput, namaError));
igInput.addEventListener('input',    () => clearError(igInput, igError));
consentCheckbox.addEventListener('change', () => {
  if (consentCheckbox.checked) consentError.classList.remove('visible');
});

function validateForm() {
  let ok = true;
  if (!namaInput.value.trim())  { showError(namaInput, namaError, 'Nama wajib diisi.'); ok = false; }
  else clearError(namaInput, namaError);
  if (!igInput.value.trim())    { showError(igInput, igError, 'Username Instagram wajib diisi.'); ok = false; }
  else clearError(igInput, igError);
  if (!consentCheckbox.checked) { consentError.classList.add('visible'); ok = false; }
  else consentError.classList.remove('visible');
  return ok;
}

/* ─── 4. POPUP HELPERS ───────────────────────────────────────────────────── */
function openPopup(overlay) {
  overlay.removeAttribute('hidden');
  requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('active')));
  document.body.style.overflow = 'hidden';
  const first = overlay.querySelector('button,[href],input,[tabindex]');
  if (first) setTimeout(() => first.focus(), 50);
}
function closePopup(overlay) {
  overlay.classList.remove('active');
  overlay.addEventListener('transitionend', function h() {
    overlay.setAttribute('hidden', '');
    overlay.removeEventListener('transitionend', h);
  });
  document.body.style.overflow = '';
}

thankyouOverlay.addEventListener('click', e => { if (e.target === thankyouOverlay) closePopup(thankyouOverlay); });
privacyOverlay.addEventListener('click',  e => { if (e.target === privacyOverlay)  closePopup(privacyOverlay); });
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (!thankyouOverlay.hasAttribute('hidden')) closePopup(thankyouOverlay);
  if (!privacyOverlay.hasAttribute('hidden'))  closePopup(privacyOverlay);
});
closeThankyou.addEventListener('click',    () => closePopup(thankyouOverlay));
closeThankyouBtn.addEventListener('click', () => closePopup(thankyouOverlay));
openPrivacyBtns.forEach(b => b.addEventListener('click', e => { e.preventDefault(); openPopup(privacyOverlay); }));
closePrivacy.addEventListener('click',    () => closePopup(privacyOverlay));
closePrivacyBtn.addEventListener('click', () => closePopup(privacyOverlay));

/* ─── 5. FORM SUBMIT → GOOGLE SHEETS ────────────────────────────────────── */
leadForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  if (!validateForm()) return;

  submitBtn.disabled = true;
  const orig = submitBtn.textContent;
  submitBtn.textContent = 'Mengirim...';

  const nama      = namaInput.value.trim();
  const instagram = igInput.value.trim();
  const timestamp = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ nama, instagram, timestamp }).toString(),
    });
  } catch (err) {
    console.warn('Submission error:', err);
  } finally {
    thankyouName.textContent = nama;
    openPopup(thankyouOverlay);
    leadForm.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = orig;
  }
});

/* ─── 6. SCROLL TO HERO (all #hero anchors + legacy onclick) ────────────── */
function scrollToHero() {
  heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => namaInput.focus(), 600);
}
// Global alias for any onclick="scrollToForm(event)" still in HTML
window.scrollToForm = function (e) { if (e) e.preventDefault(); scrollToHero(); };

document.querySelectorAll('a[href="#hero"]').forEach(link => {
  link.addEventListener('click', e => { e.preventDefault(); scrollToHero(); });
});

/* ─── 7. SINGLE SCROLL LISTENER (navbar + back-to-top) ──────────────────── */
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  // navbar
  if (navbar) navbar.classList.toggle('scrolled', y > 20);
  // back to top
  if (backToTopBtn) backToTopBtn.classList.toggle('visible', y > 400);
}, { passive: true });

backToTopBtn && backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── 8. FADE-UP SCROLL ANIMATIONS ──────────────────────────────────────── */
(function () {
  const els = document.querySelectorAll(
    '.value-card,.aroma-card,.pricing-card,.reward-card,.section-header,.area-radius-card'
  );
  els.forEach(el => el.classList.add('fade-up'));

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
})();

/* ─── 9. DARK / LIGHT MODE ───────────────────────────────────────────────── */
(function () {
  if (!themeToggleBtn) return;
  if (localStorage.getItem('ssl-theme') === 'dark') document.body.classList.add('dark-mode');
  themeToggleBtn.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('ssl-theme', dark ? 'dark' : 'light');
  });
})();
