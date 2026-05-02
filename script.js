/* ===== PRELOADER ===== */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 1600);
});

/* ===== CUSTOM CURSOR ===== */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx - 5 + 'px'; cursor.style.top = my - 5 + 'px'; });
document.addEventListener('mousedown', () => { cursor.classList.add('clicked'); ring.classList.add('clicked'); });
document.addEventListener('mouseup', () => { cursor.classList.remove('clicked'); ring.classList.remove('clicked'); });
function animateRing() {
  rx += (mx - rx - 18) * 0.12;
  ry += (my - ry - 18) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

/* ===== PARTICLE CANVAS ===== */
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 1.5 + 0.3;
    this.dx = (Math.random() - 0.5) * 0.3;
    this.dy = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.4 + 0.1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,212,255,${this.alpha})`;
    ctx.fill();
  }
  update() {
    this.x += this.dx; this.y += this.dy;
    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
    this.draw();
  }
}
for (let i = 0; i < 80; i++) particles.push(new Particle());
function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
      if (d < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - d/120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => p.update());
  drawConnections();
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ===== NAVBAR ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNav();
});

/* ===== HAMBURGER ===== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  overlay.classList.toggle('show');
});
overlay.addEventListener('click', () => {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  overlay.classList.remove('show');
});
document.querySelectorAll('.menu-link').forEach(l => l.addEventListener('click', () => {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  overlay.classList.remove('show');
}));

/* ===== ACTIVE NAV ===== */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) cur = s.id; });
  links.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === '#' + cur); });
}

/* ===== TYPEWRITER ===== */
const roles = ['IT Professional', 'Web Developer', 'Repair Technician', 'Problem Solver'];
let rIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriterText');
function typewrite() {
  const w = roles[rIdx];
  if (!deleting) {
    tw.textContent = w.slice(0, ++cIdx);
    if (cIdx === w.length) { deleting = true; setTimeout(typewrite, 1800); return; }
  } else {
    tw.textContent = w.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
  }
  setTimeout(typewrite, deleting ? 60 : 100);
}
setTimeout(typewrite, 2000);

/* ===== INTERSECTION OBSERVER ===== */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    // Skill bars
    if (entry.target.classList.contains('skill-item')) {
      const bar = entry.target.querySelector('.skill-bar-fill');
      if (bar) setTimeout(() => bar.style.width = bar.dataset.width + '%', 200);
    }
    // Counters
    if (entry.target.classList.contains('stat-card')) {
      const counter = entry.target.querySelector('.counter');
      if (counter) animateCounter(counter);
    }
    io.unobserve(entry.target);
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .skill-item, .stat-card').forEach(el => io.observe(el));

/* ===== COUNTERS ===== */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  let cur = 0;
  const step = Math.ceil(target / 40);
  const t = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = cur + (target >= 100 ? '+' : '+');
    if (cur >= target) clearInterval(t);
  }, 40);
}

/* ===== SKILLS TABS ===== */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById('tab-' + btn.dataset.tab);
    panel.classList.add('active');
    // Trigger skill bar animations for newly visible panel
    panel.querySelectorAll('.skill-bar-fill').forEach(bar => {
      bar.style.width = '0%';
      setTimeout(() => bar.style.width = bar.dataset.width + '%', 100);
    });
  });
});

/* ===== LANGUAGE RINGS ===== */
const langObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.lang-fill').forEach(circle => {
      const pct = parseFloat(circle.dataset.pct);
      const circumference = 2 * Math.PI * 54;
      const offset = circumference * (1 - pct / 100);
      circle.style.strokeDasharray = circumference;
      setTimeout(() => { circle.style.strokeDashoffset = offset; }, 200);
    });
    // Animate percentage text
    const urduEl = document.getElementById('pct-urdu');
    const engEl = document.getElementById('pct-eng');
    if (urduEl && urduEl.textContent === '0%') animatePct(urduEl, 100);
    if (engEl && engEl.textContent === '0%') animatePct(engEl, 65);
    langObs.unobserve(entry.target);
  });
}, { threshold: 0.3 });
const langSec = document.getElementById('languages');
if (langSec) langObs.observe(langSec);

function animatePct(el, target) {
  let cur = 0;
  const t = setInterval(() => {
    cur = Math.min(cur + 2, target);
    el.textContent = cur + '%';
    if (cur >= target) clearInterval(t);
  }, 25);
}

/* ===== CONTACT FORM ===== */
function handleSubmit() {
  const btn = document.getElementById('submitBtn');
  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  if (!name || !email) { alert('Please fill in Name and Email.'); return; }
  btn.classList.add('loading');
  btn.textContent = 'Sending...';
  setTimeout(() => {
    btn.style.display = 'none';
    document.getElementById('formSuccess').classList.add('show');
    document.getElementById('fname').value = '';
    document.getElementById('femail').value = '';
    document.getElementById('fsubject').value = '';
    document.getElementById('fmessage').value = '';
  }, 1800);
}

/* ═══════════════════════════════════════════════════════
   ABOUT SECTION — 3D Mouse-Track Tilt Effect
═══════════════════════════════════════════════════════ */
(function init3DTilt() {
  const wrap = document.getElementById('about3d');
  if (!wrap) return;
  const card = wrap.querySelector('.about-3d-card');
  if (!card) return;

  const MAX_ROTATE = 14;   // max degrees of tilt
  const MAX_SHIFT  = 6;    // px shift for depth effect

  wrap.addEventListener('mousemove', e => {
    const rect  = wrap.getBoundingClientRect();
    const cx    = rect.left + rect.width  / 2;
    const cy    = rect.top  + rect.height / 2;
    const dx    = (e.clientX - cx) / (rect.width  / 2);  // -1 to 1
    const dy    = (e.clientY - cy) / (rect.height / 2);  // -1 to 1

    const rotY  =  dx * MAX_ROTATE;
    const rotX  = -dy * MAX_ROTATE;
    const shiftX = dx * MAX_SHIFT;
    const shiftY = dy * MAX_SHIFT;

    card.classList.add('tilting');
    card.style.transform =
      `rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(10px)`;

    // move glow to follow mouse
    const glow = wrap.querySelector('.about-3d-bg-glow');
    if (glow) {
      glow.style.transform =
        `translate(${shiftX * 2}px, ${shiftY * 2}px)`;
    }

    // parallax border offset
    const border = wrap.querySelector('.about-3d-border');
    if (border) {
      border.style.transform =
        `translate(${shiftX * 0.5}px, ${shiftY * 0.5}px)`;
    }
  });

  wrap.addEventListener('mouseleave', () => {
    card.classList.remove('tilting');
    card.style.transform = 'rotateY(4deg) rotateX(2deg)';
    const glow   = wrap.querySelector('.about-3d-bg-glow');
    const border = wrap.querySelector('.about-3d-border');
    if (glow)   glow.style.transform   = 'none';
    if (border) border.style.transform = 'none';
  });
})();

/* ═══════════════════════════════════════════════════════
   HERO IMAGE — Subtle mouse-parallax on the whole visual
═══════════════════════════════════════════════════════ */
(function heroParallax() {
  const heroSec = document.getElementById('hero');
  const imgWrap = document.querySelector('.hero-img-wrap');
  if (!heroSec || !imgWrap) return;

  heroSec.addEventListener('mousemove', e => {
    const rect = heroSec.getBoundingClientRect();
    const dx   = (e.clientX - rect.left)  / rect.width  - 0.5;
    const dy   = (e.clientY - rect.top)   / rect.height - 0.5;
    // gentle nudge — 10px max, doesn't fight the floating animation
    imgWrap.style.marginLeft = `${dx * 10}px`;
    imgWrap.style.marginTop  = `${dy * 6}px`;
  });

  heroSec.addEventListener('mouseleave', () => {
    imgWrap.style.marginLeft = '0';
    imgWrap.style.marginTop  = '0';
  });
})();
