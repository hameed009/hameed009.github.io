/* ===== PROJECT DATA =====
   Images: put files in assetes/projects/<id>/  ->  cover.jpg  (card image)  and  shot1.jpg ... shotN.jpg (preview gallery)
   Links: fill github / live when ready; empty ones are hidden automatically. */
const IMG = 'assetes/projects/';
const PROJECTS = [
{ id:'nexus', cat:'dotnet', icon:'fa-tower-cell', featured:true, status:['full','Full-stack'], shots:4, github:'', live:'',
  title:'Nexus Service Marketing System', tagline:'Telecom order, billing and equipment management for four teams in one system.',
  role:'Full-stack developer · Database design · Role-based access',
  problem:'A telecom service company handles customers, new connection orders, equipment, billing and payments across different teams. When this is spread over separate sheets and chats, orders get delayed and bills are hard to track.',
  solution:'Built Nexus, an ASP.NET Core MVC system that keeps the whole service cycle in one place. Customers place orders, accounts staff handle billing and payments, technical staff run feasibility checks, connections and equipment, and admins oversee everything.',
  features:['Separate Admin, Accounts, Technical and Customer areas with ASP.NET Core Identity roles','Order processing with address feasibility checks and connection setup','Billing, payment recording, discount schemes and customer account statements','Equipment and stock tracking for the technical team','Relational SQL Server database designed with EF Core code-first migrations','SMTP email service for notifications'],
  outcome:'A working multi-role system covering the full order-to-billing cycle. It has not been deployed or used in production yet.',
  stack:['C#','ASP.NET Core MVC','.NET 8','EF Core','SQL Server','Identity','Razor','JavaScript'] },
{ id:'giveaid', cat:'dotnet', icon:'fa-hand-holding-heart', status:['wip','In progress'], shots:4, github:'', live:'',
  title:'Give-Aid: Charity & Donation Platform', tagline:'A charity website connecting donors with causes, with an admin dashboard.',
  role:'Full-stack developer · Authentication · Database design',
  problem:'Donors need a clear place to find charitable causes, and charities need a simple way to present their work and manage the platform online.',
  solution:'Started building Give-Aid, an ASP.NET Core platform with public pages for causes and programmes, user accounts, and an admin dashboard for managing the site.',
  features:['Registration and login with ASP.NET Core Identity','Admin and User roles','Public pages for causes and programmes','SQL Server database with EF Core migrations','SMTP email service'],
  outcome:'Accounts, roles, database and email are finished. Donation processing and payments are the next step, so this project is marked In progress.',
  stack:['C#','ASP.NET Core MVC','Razor Pages','EF Core','SQL Server'] },
{ id:'lawbridge', cat:'react', icon:'fa-scale-balanced', featured:true, status:['full','Full-stack'], shots:4, github:'', live:'',
  title:'LawBridge AI: Legal Assistance Platform', tagline:'An AI assistant that explains legal issues in Pakistan and connects users with verified lawyers.',
  role:'Full-stack developer · API design · AI integration',
  problem:'Many people in Pakistan do not know which laws apply to their situation, how urgent it is, or what to do next, and finding a verified lawyer is hard.',
  solution:'Built LawBridge AI. Users describe a case and an AI assistant (Gemini API) explains related laws, urgency, next steps and documents needed. Lawyers register and are verified by admins, and users can manage cases and message lawyers. It is a guidance tool, not legal advice.',
  features:['AI case analysis with laws, urgency, next steps and required documents','Separate dashboards for users, lawyers and admins','Lawyer verification by admins','Messaging, notifications and case deadlines','Document uploads and PDF export','JWT login with hashed passwords'],
  outcome:'A working full-stack application with three role dashboards and an AI-assisted case flow. It has not been deployed yet.',
  stack:['React','TypeScript','Node.js','Express.js','SQLite','Gemini API','JWT'] },
{ id:'aureum', cat:'react', icon:'fa-gem', status:['wip','Checkout & admin in progress'], shots:4, github:'', live:'',
  title:'AUREUM: Luxury Watch E-Commerce', tagline:'A React storefront with a Node.js API and transaction-safe orders.',
  role:'Full-stack developer · REST API · Database design',
  problem:'Luxury watch buyers expect a polished way to browse, check details and order with confidence, while the store needs reliable stock and order handling.',
  solution:'Built AUREUM, a React storefront with an Express REST API on SQL Server. Orders are created inside a database transaction that checks stock, calculates prices and rolls back if anything fails.',
  features:['Product catalog with filtering, product details and reviews','Cart (saved in the browser) and wishlist','JWT authentication, bcrypt password hashing and admin-only routes','Transactional order creation with stock checks and rollback','Request validation and centralized error handling'],
  outcome:'The backend is the strongest part: API, authentication and order logic are complete. Checkout payment and the admin dashboard are not yet connected to the API and are the next steps.',
  stack:['React','Node.js','Express.js','SQL Server','Sequelize','JWT'] },
{ id:'carevia', cat:'php', icon:'fa-hospital', status:['full','Full-stack'], shots:4, github:'', live:'',
  title:'Carevia: Hospital Management System', tagline:'Online doctor search and appointment booking for patients, doctors and admins.',
  role:'Full-stack developer · Database design · Admin tools',
  problem:'Booking a doctor often means phone calls or waiting at the hospital, and staff have to manage appointments by hand.',
  solution:'Built Carevia, a PHP and MySQL hospital website where patients find doctors and book time slots online, doctors approve or reject appointments, and admins manage doctors and patients.',
  features:['Patient registration and login with hashed passwords and sessions','Doctor search and time-slot booking','Appointment approval or rejection by doctors','Admin pages to manage doctors (with photo uploads) and patients','Patient–doctor messaging and notifications'],
  outcome:'A working application with separate patient, doctor and admin sides. It has not been deployed yet.',
  stack:['PHP','MySQL','JavaScript','Bootstrap'] },
{ id:'luxelap', cat:'front', icon:'fa-laptop', status:['front','Frontend only'], shots:4, github:'', live:'',
  title:'LuxeLap: Pre-Owned Laptop Store', tagline:'A laptop storefront with WhatsApp inquiries and an admin panel.',
  role:'Frontend developer · UI design · JavaScript logic',
  problem:'Sellers of pre-owned laptops need a simple storefront where buyers can see specs and contact them directly, without a heavy platform.',
  solution:'Built LuxeLap, a storefront with product detail pages and WhatsApp links so customers message the seller about a specific laptop, plus customer accounts and an admin area.',
  features:['Product detail pages with specifications','Inquiry pop-up that generates a WhatsApp link','Registration, login and role-based redirects','Cart and wishlist','Admin pages to add, edit and delete products and track orders'],
  outcome:'A complete frontend prototype. All data is kept in browser Local Storage, so it demonstrates the workflows rather than a real backend.',
  stack:['HTML','CSS','JavaScript','Tailwind CSS'] },
{ id:'luxeinteriors', cat:'front', icon:'fa-couch', status:['front','Frontend only'], shots:4, github:'', live:'',
  title:'Luxe Interiors: Furniture Website', tagline:'A six-page furniture store with 32 products, filters and product comparison.',
  role:'Frontend developer · Responsive design',
  problem:'Furniture buyers want to browse many items, compare them and check totals before they decide.',
  solution:'Built a responsive furniture website where visitors filter by brand and category, open product pop-ups, compare items side by side and build a cart.',
  features:['Six responsive pages and 32 products','Brand and category filters','Product detail pop-ups','Shopping cart with quantity controls and totals','Side-by-side product comparison','Contact form validation'],
  outcome:'A finished frontend website. It has no backend, so cart and forms are client-side only.',
  stack:['HTML','CSS','JavaScript','Bootstrap 5','jQuery'] },
{ id:'chronos', cat:'front', icon:'fa-stopwatch', status:['front','Frontend only'], shots:4, github:'', live:'',
  title:'CHRONOS: Luxury Watch Website', tagline:'A dark-and-gold watch storefront with collection, cart and checkout pages.',
  role:'Frontend developer · UI design',
  problem:'A premium watch brand needs a storefront that feels as refined as the product it sells.',
  solution:'Designed a multi-page storefront with a premium dark-and-gold look, covering collection, product details, cart, wishlist, checkout, blog and contact.',
  features:['Category filters and product image switching','Cart with total calculation','Wishlist and checkout pages','Form validation','Scroll animations'],
  outcome:'A polished frontend design project. Checkout is simulated and there is no backend.',
  stack:['HTML','CSS','JavaScript','jQuery','Bootstrap 5'] },
{ id:'nectar', cat:'front', icon:'fa-leaf', status:['front','Frontend only'], shots:4, github:'', live:'',
  title:'NECTAR: Organic Grocery Website', tagline:'A five-page grocery store with search, filters, sorting and a saved cart.',
  role:'Frontend developer · JavaScript logic',
  problem:'Grocery shoppers need to find products quickly by searching and narrowing results by category, price and rating.',
  solution:'Built a responsive five-page grocery website with live search, filters, sorting and a cart that remembers items between visits.',
  features:['Product search and category, price and rating filters','Sorting','Cart with quantity control saved in Local Storage','Dark and light theme switch','Slider and scroll animations'],
  outcome:'A working frontend project. Checkout and the contact form are simulated.',
  stack:['HTML','CSS','JavaScript','Tailwind CSS','Swiper.js'] },
{ id:'portfolio', cat:'front', icon:'fa-user-circle', status:['front','Live site'], shots:4, github:'', live:'https://hameed009.github.io/',
  title:'Personal Portfolio Website', tagline:'This site, built in plain HTML, CSS and JavaScript.',
  role:'Designer · Frontend developer',
  problem:'Recruiters and clients need to quickly see who I am, what I have built and how to contact me.',
  solution:'Designed and built this single-page portfolio from scratch, with project case studies, skills, experience and a contact section.',
  features:['Project cards with case-study previews','Custom cursor, particle background and typewriter text','Animated skill bars and scroll reveals','Responsive layout for phones and desktops'],
  outcome:'Live on GitHub Pages.',
  stack:['HTML','CSS','JavaScript'] }
];

(function () {
  const e = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.dataset.all = '1';

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="pc g-${p.cat}${p.featured ? ' featured' : ''}" data-cat="${p.cat}" data-i="${i}" tabindex="0" role="button" aria-label="Open case study: ${e(p.title)}">
      <div class="pc-cover">
        <div class="pc-ph"><i class="fa ${p.icon}"></i></div>
        <img src="${IMG}${p.id}/cover.jpg" alt="${e(p.title)} cover" loading="lazy" onerror="this.remove()">
        <span class="proj-status ${p.status[0]}">${e(p.status[1])}</span>
      </div>
      <div class="pc-body">
        <h3 class="project-title">${e(p.title)}</h3>
        <p class="pc-tag">${e(p.tagline)}</p>
        <div class="project-tags">${p.stack.slice(0, 4).map(t => `<span class="tag">${e(t)}</span>`).join('')}${p.stack.length > 4 ? `<span class="tag more">+${p.stack.length - 4}</span>` : ''}</div>
        <span class="pc-cta">View case study <i class="fa fa-arrow-right"></i></span>
      </div>
    </article>`).join('');

  // filters
  const btns = document.querySelectorAll('.pf-btn');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.remove('active')); b.classList.add('active');
    const f = b.dataset.filter;
    grid.dataset.all = f === 'all' ? '1' : '';
    grid.querySelectorAll('.pc').forEach(c => { c.hidden = !(f === 'all' || c.dataset.cat === f); });
  }));

  // modal
  const m = document.createElement('div');
  m.className = 'pm'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-label', 'Project case study');
  m.innerHTML = '<div class="pm-bg"></div><div class="pm-dialog"><button class="pm-close" aria-label="Close case study"><i class="fa fa-xmark"></i></button><div class="pm-content"></div></div>';
  document.body.appendChild(m);
  const content = m.querySelector('.pm-content'), closeBtn = m.querySelector('.pm-close');
  let opener = null;

  const loadShots = p => Promise.all(Array.from({ length: p.shots }, (_, i) => new Promise(r => {
    const im = new Image(); im.onload = () => r(im.src); im.onerror = () => r(null); im.src = `${IMG}${p.id}/shot${i + 1}.jpg`;
  }))).then(a => a.filter(Boolean));

  function open(i, from) {
    const p = PROJECTS[i]; opener = from;
    const links = [p.live && `<a class="proj-btn primary" href="${e(p.live)}" target="_blank" rel="noopener"><i class="fa fa-arrow-up-right-from-square"></i> Live demo</a>`,
                   p.github && `<a class="proj-btn" href="${e(p.github)}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Source code</a>`].filter(Boolean).join('');
    content.innerHTML = `
      <div class="pm-gallery g-${p.cat}"><div class="pc-ph"><i class="fa ${p.icon}"></i><span>Screenshots coming soon</span></div></div>
      <div class="pm-info">
        <div class="pm-head"><span class="proj-status ${p.status[0]}">${e(p.status[1])}</span><h3>${e(p.title)}</h3><p>${e(p.tagline)}</p></div>
        <div class="pm-cols"><section><h4>Problem</h4><p>${e(p.problem)}</p></section><section><h4>Solution</h4><p>${e(p.solution)}</p></section></div>
        <section><h4>My role</h4><p>${e(p.role)}</p></section>
        <section><h4>Key features</h4><ul class="project-points">${p.features.map(f => `<li>${e(f)}</li>`).join('')}</ul></section>
        <section><h4>Outcome</h4><p>${e(p.outcome)}</p></section>
        <section><h4>Stack</h4><div class="project-tags">${p.stack.map(t => `<span class="tag">${e(t)}</span>`).join('')}</div></section>
        ${links ? `<div class="project-links">${links}</div>` : ''}
      </div>`;
    m.classList.add('open'); document.body.style.overflow = 'hidden'; m.querySelector('.pm-dialog').scrollTop = 0; closeBtn.focus();
    loadShots(p).then(list => {
      if (!list.length || !m.classList.contains('open')) return;
      const g = content.querySelector('.pm-gallery');
      g.classList.add('has-img');
      g.innerHTML = `<img class="pm-main" src="${list[0]}" alt="${e(p.title)} screenshot 1">` +
        (list.length > 1 ? `<div class="pm-thumbs">${list.map((s, k) => `<button class="${k ? '' : 'on'}" data-src="${s}" aria-label="Show screenshot ${k + 1}"><img src="${s}" alt=""></button>`).join('')}</div>` : '');
      g.querySelectorAll('.pm-thumbs button').forEach(b => b.addEventListener('click', () => {
        g.querySelector('.pm-main').src = b.dataset.src; g.querySelectorAll('.pm-thumbs button').forEach(x => x.classList.toggle('on', x === b));
      }));
    });
  }
  function close() { m.classList.remove('open'); document.body.style.overflow = ''; if (opener) opener.focus(); }

  grid.addEventListener('click', ev => { const c = ev.target.closest('.pc'); if (c) open(+c.dataset.i, c); });
  grid.addEventListener('keydown', ev => { if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.classList.contains('pc')) { ev.preventDefault(); open(+ev.target.dataset.i, ev.target); } });
  closeBtn.addEventListener('click', close);
  m.querySelector('.pm-bg').addEventListener('click', close);
  document.addEventListener('keydown', ev => {
    if (!m.classList.contains('open')) return;
    if (ev.key === 'Escape') close();
    if (ev.key === 'Tab') {
      const f = [...m.querySelectorAll('button, a[href]')]; if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
  });
})();
