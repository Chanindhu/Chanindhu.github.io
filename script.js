const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

const introLoader = $('#introLoader');
if (introLoader) {
  const completeIntro = () => document.body.classList.add('intro-complete');
  if (prefersReducedMotion) {
    completeIntro();
  } else {
    window.setTimeout(completeIntro, 2350);
    introLoader.addEventListener('click', completeIntro, { once: true });
  }
}


const projects = [
  {
    title: 'EduGuard — AI-Powered Academic Integrity Platform',
    year: '2026',
    badge: 'Flagship AI',
    featured: true,
    tags: ['featured', 'ai', 'ml', 'fullstack', 'backend'],
    search: 'EduGuard AI academic integrity plagiarism FastAPI React TypeScript PostgreSQL Celery Docker NLP reporting analytics',
    description: 'Academic integrity platform with document submission, plagiarism evidence review, AI-generated text risk analysis, role-based dashboards, reports, feedback, and analytics.',
    bullets: ['Built around real academic workflows, validation assets, and reviewer-facing reporting.', 'Shows AI product thinking across risk analysis, evidence handling, and dashboard design.'],
    tech: ['FastAPI', 'React', 'PostgreSQL', 'AI/NLP', 'Docker'],
    link: 'https://github.com/Chanindhu/eduguard-academic-integrity-platform'
  },
  {
    title: 'BLEVE Pressure Prediction — ML Project',
    year: '2026',
    badge: 'Machine Learning',
    featured: true,
    tags: ['featured', 'ai', 'ml', 'data'],
    search: 'BLEVE Pressure Prediction machine learning CatBoost XGBoost SVR neural networks feature engineering Kaggle prediction',
    description: 'Machine learning project for BLEVE peak pressure prediction using preprocessing, feature engineering, model comparison, and prediction output generation.',
    bullets: ['Compared multiple model families and prepared repeatable notebook-based ML workflows.', 'Focused on prediction quality, evaluation, and clear output preparation.'],
    tech: ['Python', 'CatBoost', 'XGBoost', 'SVR', 'Jupyter'],
    link: 'https://github.com/Chanindhu/bleve-pressure-prediction-ml'
  },
  {
    title: 'PitCrew Connect — AWS Cloud Deployment',
    year: '2026',
    badge: 'Cloud Deployment',
    featured: true,
    tags: ['featured', 'cloud', 'fullstack', 'backend'],
    search: 'PitCrew Connect AWS Cloud Deployment EC2 RDS MySQL VPC CloudWatch EBS ALB Auto Scaling PHP Apache',
    description: 'Vehicle service booking platform deployed on AWS using EC2, RDS MySQL, VPC, CloudWatch, EBS snapshots, Application Load Balancer, launch templates, and Auto Scaling.',
    bullets: ['Demonstrates cloud architecture, deployment planning, monitoring, and infrastructure documentation.', 'Connects application development with practical hosting and operational setup.'],
    tech: ['AWS', 'EC2', 'RDS', 'VPC', 'PHP'],
    link: 'https://github.com/Chanindhu/pitcrew-connect-cloud-deployment'
  },
  {
    title: 'ASP.NET Core Banking Platform',
    year: '2026',
    badge: 'Full Stack',
    featured: true,
    tags: ['featured', 'fullstack', 'backend'],
    search: 'ASP.NET Core Banking Platform REST API SQLite MVC transactions admin dashboard C#',
    description: 'Banking platform with RESTful APIs, SQLite persistence, account management, transactions, MVC web interface, user profiles, and admin features.',
    tech: ['ASP.NET Core', 'C#', 'SQLite', 'MVC'],
    link: 'https://github.com/Chanindhu/aspnet-core-banking-platform'
  },
  {
    title: 'P2P Job Swarm — Distributed .NET System',
    year: '2026',
    badge: 'Distributed Systems',
    featured: true,
    tags: ['featured', 'systems', 'backend'],
    search: 'P2P Job Swarm distributed .NET ASP.NET Core WPF SQLite IronPython SHA-256 Base64 dashboard',
    description: 'Peer-to-peer job processing system with job sharing, verification, dashboard monitoring, SQLite storage, Base64 encoding, and SHA-256 validation.',
    tech: ['.NET', 'WPF', 'SQLite', 'SHA-256'],
    link: 'https://github.com/Chanindhu/p2p-job-swarm-dotnet'
  },
  {
    title: 'Calorie Tracker — Android Mobile App',
    year: '2025',
    badge: 'Mobile App',
    featured: true,
    tags: ['featured', 'mobile', 'fullstack'],
    search: 'Calorie Tracker Android meal logging nutrition API Room Database camera daily goals mobile app Kotlin Java',
    description: 'Native Android calorie tracking app with meal logging, nutrition API lookup, Room database storage, camera image capture, and daily calorie goals.',
    tech: ['Android', 'Room', 'API', 'Camera'],
    link: 'https://github.com/Chanindhu/calorie-tracker-android'
  },
  {
    title: 'C pthread Sorting Simulator',
    year: '2025',
    badge: 'C Systems',
    featured: true,
    tags: ['featured', 'systems', 'c'],
    search: 'C pthread Sorting Simulator POSIX threads mutex condition variables shared memory swap tracking operating systems',
    description: 'Operating systems project using POSIX threads, mutexes, condition variables, and shared swap tracking to coordinate worker threads.',
    tech: ['C', 'pthreads', 'Mutex', 'Makefile'],
    link: 'https://github.com/Chanindhu/pthread-sorting-simulator'
  },
  {
    title: 'MKX Gaming Lobby WCF',
    year: '2025',
    badge: 'Systems',
    tags: ['systems', 'fullstack'],
    search: 'MKX Gaming Lobby WCF C# WPF duplex callback polling rooms public private messaging file sharing',
    description: 'C# WPF and WCF gaming lobby with room management, public/private messaging, file sharing, polling client, and duplex callback client.',
    tech: ['C#', 'WPF', 'WCF'],
    link: 'https://github.com/Chanindhu/mkx-gaming-lobby-wcf'
  },
  {
    title: 'Flask Web Security Lab',
    year: '2025',
    badge: 'Security',
    tags: ['security', 'fullstack'],
    search: 'Flask Web Security Lab CSRF DOM XSS vulnerabilities exploitation mitigation Python cybersecurity',
    description: 'Web security lab demonstrating CSRF and DOM-based XSS vulnerabilities, exploitation flows, and mitigation techniques using Flask.',
    tech: ['Flask', 'Python', 'CSRF', 'XSS'],
    link: 'https://github.com/Chanindhu/flask-web-security-lab'
  },
  {
    title: 'JavaFX Maze Game Engine',
    year: '2025',
    badge: 'Java / OOP',
    tags: ['java', 'oop', 'systems'],
    search: 'JavaFX Maze Game Engine DSL ANTLR dynamic Java plugins Jython Gradle internationalisation object oriented',
    description: 'JavaFX maze game engine with DSL-based map loading, ANTLR parsing, dynamic Java plugins, Jython scripts, and Gradle multi-project architecture.',
    tech: ['JavaFX', 'ANTLR', 'Jython', 'Gradle'],
    link: 'https://github.com/Chanindhu/javafx-maze-game-engine'
  },
  {
    title: 'Air Traffic Simulator Java',
    year: '2025',
    badge: 'Java Systems',
    tags: ['java', 'oop', 'systems'],
    search: 'Air Traffic Simulator JavaFX producer consumer blocking queue dispatcher animated grid threading concurrency',
    description: 'JavaFX air traffic simulation using producer-consumer threading, blocking queues, dispatcher logic, and animated grid-based flight visualisation.',
    tech: ['Java', 'JavaFX', 'Threads'],
    link: 'https://github.com/Chanindhu/air-traffic-simulator-java'
  },
  {
    title: 'Railway Network Simulator Java',
    year: '2025',
    badge: 'Java / OOP',
    tags: ['java', 'oop', 'systems'],
    search: 'Railway Network Simulator Java Observer State factories dependency injection logging Graphviz design patterns',
    description: 'Java railway network simulation using Observer, State, factories, dependency injection, logging, and Graphviz output.',
    tech: ['Java', 'OOP', 'Graphviz'],
    link: 'https://github.com/Chanindhu/railway-network-simulator-java'
  },
  {
    title: 'City Grid Planner Java',
    year: '2025',
    badge: 'Java / OOP',
    tags: ['java', 'oop'],
    search: 'City Grid Planner Java command line zoning constraints build validation cost calculation configurable build approaches',
    description: 'Command-line city planning simulator with grid parsing, zoning constraints, build validation, cost calculation, and configurable build approaches.',
    tech: ['Java', 'CLI', 'OOP'],
    link: 'https://github.com/Chanindhu/city-grid-planner-java'
  },
  {
    title: 'Connect Four Android',
    year: '2024',
    badge: 'Mobile',
    tags: ['mobile', 'java'],
    search: 'Connect Four Android native game AI mode custom settings player profiles avatars statistics mobile Java Kotlin',
    description: 'Native Android Connect Four game with two-player mode, AI mode, custom settings, player profiles, avatars, and gameplay statistics.',
    tech: ['Android', 'Java', 'Game Logic'],
    link: 'https://github.com/Chanindhu/connect-four-android'
  },
  {
    title: 'Airline Route Planner DSA',
    year: '2024',
    badge: 'Java / DSA',
    tags: ['java', 'oop', 'systems'],
    search: 'Airline Route Planner DSA Java BFS custom hash table linear probing heap sort algorithms data structures',
    description: 'Java command-line airline route planner using BFS, custom hash table, linear probing, heap sort, and data-structure focused design.',
    tech: ['Java', 'BFS', 'Hash Table'],
    link: 'https://github.com/Chanindhu/airline-route-planner-dsa'
  },
  {
    title: 'Numerology Analyzer Java',
    year: '2024',
    badge: 'Java',
    tags: ['java', 'oop'],
    search: 'Numerology Analyzer Java command line birth date validation Life Path Number generation detection tests',
    description: 'Java command-line numerology analyzer with birth-date validation, Life Path Number calculation, generation detection, and assertion-based tests.',
    tech: ['Java', 'CLI', 'Testing'],
    link: 'https://github.com/Chanindhu/numerology-analyzer-java'
  },
  {
    title: 'OnlyFit UX Case Study',
    year: '2025',
    badge: 'UX Case Study',
    tags: ['ux', 'security'],
    search: 'OnlyFit UX Case Study HCI fitness app prototype usability UI high fidelity screenshots user experience',
    description: 'Human-computer interaction case study for a fitness app prototype, including usability thinking, interface design, and high-fidelity screens.',
    tech: ['UX', 'HCI', 'Prototype'],
    link: 'https://github.com/Chanindhu/onlyfit-ux-case-study'
  }
];

const year = $('#year');
if (year) year.textContent = new Date().getFullYear();

const navToggle = $('.nav-toggle');
navToggle?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
$$('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

function createProjectCard(project) {
  const article = document.createElement('article');
  article.className = `project-card reveal tilt-card ${project.featured ? 'is-featured' : 'is-archive'}`;
  article.dataset.categories = project.tags.join(',');
  article.dataset.search = `${project.title} ${project.badge} ${project.search} ${project.tech.join(' ')}`;
  article.dataset.featured = String(Boolean(project.featured));

  const bullets = project.bullets?.length
    ? `<ul>${project.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>`
    : '';

  article.innerHTML = `
    <div class="card-head"><span class="badge ${project.featured ? '' : 'muted'}">${project.badge}</span><span>${project.year}</span></div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    ${bullets}
    <div class="tech-list">${project.tech.map((item) => `<span>${item}</span>`).join('')}</div>
    <a href="${project.link}" target="_blank" rel="noreferrer">View repository</a>
  `;
  return article;
}

const featuredRoot = $('#featuredProjects');
const archiveRoot = $('#archiveProjects');
projects.forEach((project) => {
  const card = createProjectCard(project);
  if (project.featured) featuredRoot?.appendChild(card);
  else archiveRoot?.appendChild(card);
});

const revealItems = () => $$('.reveal');
function setupReveal() {
  const items = revealItems();
  items.forEach((item, index) => item.style.setProperty('--delay', `${Math.min(index * 35, 280)}ms`));
  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    items.forEach((item) => item.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -42px 0px' });
  items.forEach((item) => observer.observe(item));
}
setupReveal();

const filterGroups = {
  all: null,
  featured: ['featured'],
  'ai-ml': ['ai', 'ml'],
  cloud: ['cloud'],
  fullstack: ['fullstack'],
  mobile: ['mobile'],
  systems: ['systems'],
  'java-oop': ['java', 'oop'],
  'security-ux': ['security', 'ux']
};

const filterButtons = $$('.filter-btn');
const searchInput = $('#projectSearch');
const projectCards = () => $$('.project-card');
const resultCount = $('#resultCount');
const emptyState = $('#emptyState');
const featuredTitle = $('.subsection-title:not(.archive-title)');
const archiveTitle = $('.archive-title');
let activeFilter = 'all';

function getCategorySet(card) {
  return new Set((card.dataset.categories || '').split(',').map((item) => item.trim().toLowerCase()).filter(Boolean));
}

function passesFilter(card) {
  const required = filterGroups[activeFilter];
  if (!required) return true;
  const categories = getCategorySet(card);
  return required.some((category) => categories.has(category));
}

function passesSearch(card) {
  const query = (searchInput?.value || '').trim().toLowerCase();
  if (!query) return true;
  const haystack = `${card.textContent} ${card.dataset.search || ''} ${card.dataset.categories || ''}`.toLowerCase();
  return haystack.includes(query);
}

function updateProjects() {
  let visible = 0;
  let visibleFeatured = 0;
  let visibleArchive = 0;
  projectCards().forEach((card) => {
    const show = passesFilter(card) && passesSearch(card);
    card.classList.toggle('is-hidden', !show);
    if (show) {
      visible += 1;
      if (card.dataset.featured === 'true') visibleFeatured += 1;
      else visibleArchive += 1;
    }
  });
  if (featuredTitle) featuredTitle.hidden = visibleFeatured === 0;
  if (archiveTitle) archiveTitle.hidden = visibleArchive === 0;
  if (resultCount) resultCount.textContent = `Showing ${visible} project${visible === 1 ? '' : 's'}`;
  if (emptyState) emptyState.hidden = visible > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter || 'all';
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    updateProjects();
  });
});
searchInput?.addEventListener('input', updateProjects);
updateProjects();

function headerAndProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
  $('#scrollProgress')?.style.setProperty('width', `${progress}%`);
  document.body.classList.toggle('has-scrolled', window.scrollY > 12);
}
headerAndProgress();
window.addEventListener('scroll', headerAndProgress, { passive: true });
window.addEventListener('resize', headerAndProgress, { passive: true });

if (!prefersReducedMotion && finePointer) {
  const spotlight = $('.cursor-spotlight');
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  window.addEventListener('pointermove', (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    document.body.classList.add('pointer-active');
  }, { passive: true });
  window.addEventListener('pointerleave', () => document.body.classList.remove('pointer-active'), { passive: true });

  const animateSpotlight = () => {
    currentX += (targetX - currentX) * 0.13;
    currentY += (targetY - currentY) * 0.13;
    if (spotlight) spotlight.style.transform = `translate3d(${currentX - 272}px, ${currentY - 272}px, 0)`;
    requestAnimationFrame(animateSpotlight);
  };
  animateSpotlight();
}

function bindInteractiveCards() {
  const interactive = $$('.tilt-card, .project-controls, .btn, .filter-btn, .contact-links a, .site-nav a, .brand');
  interactive.forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      element.style.setProperty('--mx', `${px}%`);
      element.style.setProperty('--my', `${py}%`);

      if (!prefersReducedMotion && finePointer && element.classList.contains('tilt-card')) {
        const rotateX = ((y / rect.height) - 0.5) * -5.5;
        const rotateY = ((x / rect.width) - 0.5) * 5.5;
        element.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      }
    }, { passive: true });

    element.addEventListener('pointerleave', () => {
      if (element.classList.contains('tilt-card')) element.style.transform = '';
    }, { passive: true });
  });
}
bindInteractiveCards();

if (!prefersReducedMotion && finePointer) {
  $$('.magnetic').forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    }, { passive: true });
    element.addEventListener('pointerleave', () => { element.style.transform = ''; }, { passive: true });
  });
}

function animateCounters() {
  const counters = $$('[data-count]');
  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    counters.forEach((counter) => { counter.textContent = counter.dataset.count; });
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count);
      const decimal = element.dataset.count.includes('.') ? 2 : 0;
      const duration = 1200;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        element.textContent = (target * eased).toFixed(decimal);
        if (t < 1) requestAnimationFrame(tick);
        else element.textContent = decimal ? target.toFixed(decimal) : String(target);
      };
      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  }, { threshold: 0.7 });
  counters.forEach((counter) => observer.observe(counter));
}
animateCounters();

function startConstellation() {
  const canvas = $('#constellation');
  if (!canvas || prefersReducedMotion) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let pointer = { x: null, y: null };
  let raf = 0;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.max(46, Math.min(92, Math.floor(width / 18)));
    particles = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: index % 8 === 0 ? 1.8 : 1.1,
      phase: Math.random() * Math.PI * 2
    }));
  }

  window.addEventListener('pointermove', (event) => {
    pointer = { x: event.clientX, y: event.clientY };
  }, { passive: true });
  window.addEventListener('pointerleave', () => { pointer = { x: null, y: null }; }, { passive: true });

  function draw(now) {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      if (pointer.x !== null) {
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 210 && dist > 0) {
          p.vx += (dx / dist) * 0.002;
          p.vy += (dy / dist) * 0.002;
        }
      }
      p.vx *= 0.995;
      p.vy *= 0.995;
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -30) p.x = width + 30;
      if (p.x > width + 30) p.x = -30;
      if (p.y < -30) p.y = height + 30;
      if (p.y > height + 30) p.y = -30;
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < 145) {
          const opacity = (1 - distance / 145) * 0.18;
          ctx.strokeStyle = `rgba(94, 230, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      const pulse = 1 + Math.sin(now * 0.0012 + p.phase) * 0.18;
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 12 * pulse);
      gradient.addColorStop(0, 'rgba(94, 230, 255, .82)');
      gradient.addColorStop(0.5, 'rgba(123, 140, 255, .24)');
      gradient.addColorStop(1, 'rgba(94, 230, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 4.2 * pulse, 0, Math.PI * 2);
      ctx.fill();
    });
    raf = requestAnimationFrame(draw);
  }

  resize();
  raf = requestAnimationFrame(draw);
  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    raf = requestAnimationFrame(draw);
  }, { passive: true });
}
startConstellation();
