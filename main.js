const SITE_DOMAIN = "rafaelalc.dev";
const CAMPIN_APP_URL = "/campin";
const CAMPIN_REPO_URL = "https://github.com/rafa-alc/camping-app";
const CAMPIN_CASE_STUDY_URL = "";
const CONTACT_EMAIL = `hello@${SITE_DOMAIN}`;
const GITHUB_URL = "https://github.com/rafa-alc";
const LINKEDIN_URL = "";

const STORAGE_KEYS = {
  language: "portfolio-language",
  theme: "portfolio-theme",
};

const STACK_ITEMS = [
  { key: "react", name: "React" },
  { key: "typescript", name: "TypeScript" },
  { key: "vite", name: "Vite" },
  { key: "tailwind", name: "Tailwind CSS" },
  { key: "zustand", name: "Zustand" },
  { key: "supabase", name: "Supabase" },
];

const CAMPIN_PREVIEW_SLIDES = [
  { src: "./assets/campIn-1.png" },
  { src: "./assets/campIn-2.png" },
  { src: "./assets/campIn-3.png" },
  { src: "./assets/campIn-4.png" },
];

const CONTENT = {
  es: {
    skipLink: "Saltar al contenido",
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
      training: "Formación",
      contact: "Contacto",
    },
    mobileMenu: {
      open: "Menú",
      close: "Cerrar",
    },
    theme: {
      currentLight: "Tema actual: claro.",
      currentDark: "Tema actual: oscuro.",
      toggleToLight: "Cambiar a modo claro",
      toggleToDark: "Cambiar a modo oscuro",
    },
    hero: {
      eyebrow: "Full-Stack Developer",
      headline: "Frontend, producto y desarrollo estructurado.",
      body:
        "Construyo experiencias web claras, usables y cuidadas, con especial atención a la estructura, la iteración y la calidad visual.",
      primaryCta: "Ver CampIn",
      secondaryCta: "Contacto",
      tertiaryCta: "GitHub",
      stack: "React · TypeScript · Vite · Tailwind · Zustand · Supabase",
    },
    featured: {
      label: "Proyecto destacado",
      title: "CampIn",
      summary:
        "Planificación de escapadas de camping con una experiencia centrada en claridad, organización y continuidad de uso.",
      description:
        "CampIn está planteado como un producto web orientado a facilitar la preparación de viajes de camping mediante flujos claros, persistencia de viajes y una interfaz pensada para reducir fricción.",
      previewCta: "Abrir app ↗",
      highlights: [
        "Checklists contextuales orientadas a planificación real",
        "Persistencia y continuidad entre sesiones",
        "Estructura UI pensada como producto, no como simple práctica",
        "Desarrollo iterativo con foco en claridad UX",
      ],
      stack: "React · TypeScript · Tailwind · Zustand · Supabase",
      buttons: {
        app: "Abrir app",
        code: "Ver código",
        caseStudy: "Caso de estudio",
      },
      caseStudyNote: "Próximamente",
      previewGalleryLabel: "Capturas de CampIn",
      previewImageLabel: "Captura de CampIn",
    },
    about: {
      label: "Sobre mí",
      title: "Sobre mí",
      body:
        "Estoy reorientando mi carrera hacia el desarrollo web con foco en frontend, producto y construcción estructurada. Me interesa crear interfaces claras, cuidadas y útiles, con atención al detalle y criterio real de ejecución.",
    },
    howIWork: {
      label: "Cómo trabajo",
      title: "Cómo trabajo",
      cards: [
        {
          title: "Desarrollo estructurado",
          text: "Defino bloques, orden y alcance antes de empujar el proyecto más de la cuenta.",
        },
        {
          title: "UI con propósito",
          text: "Busco claridad, jerarquía y una experiencia que ayude al usuario a moverse con naturalidad.",
        },
        {
          title: "Iteración real",
          text: "Trabajo por capas, refinando lo importante sin complicar demasiado las primeras versiones.",
        },
        {
          title: "Ejecución limpia",
          text: "Valoro consistencia, mantenibilidad y reducción de ruido técnico y visual.",
        },
      ],
    },
    stack: {
      label: "Stack",
      title: "Stack",
      items: STACK_ITEMS,
    },
    training: {
      label: "Formación",
      title: "Formación",
      items: [
        "Full-Stack Developer — Codecademy",
        "Experto Universitario en Desarrollo Backend — TECH",
        "Estudios adicionales en Desarrollo de Aplicaciones Multiplataforma",
        "English — professional working proficiency",
      ],
    },
    contact: {
      label: "Contacto",
      title: "Contacto",
      body: "Disponible para oportunidades junior en desarrollo web.",
      items: [
        { label: "Email", value: "Enviar email", href: `mailto:${CONTACT_EMAIL}` },
        {
          label: "GitHub",
          value: "Ver perfil",
          href: GITHUB_URL,
        },
        {
          label: "LinkedIn",
          value: LINKEDIN_URL ? "Ver perfil" : "Perfil pendiente",
          href: LINKEDIN_URL,
        },
      ],
    },
    footer: {
      copy: "Rafa Alcocer © 2026",
      role: "Full-Stack Developer",
    },
  },
  en: {
    skipLink: "Skip to content",
    nav: {
      projects: "Projects",
      about: "About",
      training: "Training",
      contact: "Contact",
    },
    mobileMenu: {
      open: "Menu",
      close: "Close",
    },
    theme: {
      currentLight: "Current theme: light.",
      currentDark: "Current theme: dark.",
      toggleToLight: "Switch to light mode",
      toggleToDark: "Switch to dark mode",
    },
    hero: {
      eyebrow: "Full-Stack Developer",
      headline: "Frontend, product thinking, and structured development.",
      body:
        "I build clean, usable web experiences with strong attention to structure, iteration, and visual clarity.",
      primaryCta: "View CampIn",
      secondaryCta: "Contact",
      tertiaryCta: "GitHub",
      stack: "React · TypeScript · Vite · Tailwind · Zustand · Supabase",
    },
    featured: {
      label: "Featured project",
      title: "CampIn",
      summary:
        "Camping trip planning with a product-oriented experience focused on clarity, organization, and continuity of use.",
      description:
        "CampIn is designed as a web product that helps users prepare camping trips through clear flows, trip persistence, and an interface built to reduce friction.",
      previewCta: "Open app ↗",
      highlights: [
        "Contextual checklists for real trip planning",
        "Persistence and continuity across sessions",
        "UI structure shaped as a product, not a practice exercise",
        "Iterative development with focus on UX clarity",
      ],
      stack: "React · TypeScript · Tailwind · Zustand · Supabase",
      buttons: {
        app: "Open app",
        code: "View code",
        caseStudy: "Case study",
      },
      caseStudyNote: "Coming soon",
      previewGalleryLabel: "CampIn screenshots",
      previewImageLabel: "CampIn screenshot",
    },
    about: {
      label: "About",
      title: "About",
      body:
        "I’m transitioning into web development with a strong focus on frontend, product thinking, and structured execution. I care about building interfaces that feel clear, intentional, and genuinely useful.",
    },
    howIWork: {
      label: "How I work",
      title: "How I work",
      cards: [
        {
          title: "Structured development",
          text: "I define blocks, scope, and order before pushing the project too far.",
        },
        {
          title: "UI with purpose",
          text: "I care about clarity, hierarchy, and interfaces that help users move naturally.",
        },
        {
          title: "Iterative product thinking",
          text: "I build in layers, refining what matters most without overcomplicating early versions.",
        },
        {
          title: "Clean execution",
          text: "I value consistency, maintainability, and reducing both technical and visual noise.",
        },
      ],
    },
    stack: {
      label: "Stack",
      title: "Stack",
      items: STACK_ITEMS,
    },
    training: {
      label: "Training",
      title: "Training",
      items: [
        "Full-Stack Developer — Codecademy",
        "University Expert in Backend Development — TECH",
        "Additional studies in Multiplatform Application Development",
        "English — professional working proficiency",
      ],
    },
    contact: {
      label: "Contact",
      title: "Contact",
      body: "Open to junior opportunities in web development.",
      items: [
        { label: "Email", value: "Send email", href: `mailto:${CONTACT_EMAIL}` },
        {
          label: "GitHub",
          value: "View profile",
          href: GITHUB_URL,
        },
        {
          label: "LinkedIn",
          value: LINKEDIN_URL ? "View profile" : "Profile pending",
          href: LINKEDIN_URL,
        },
      ],
    },
    footer: {
      copy: "Rafa Alcocer © 2026",
      role: "Full-Stack Developer",
    },
  },
};

const externalLinks = {
  github: GITHUB_URL,
  linkedin: LINKEDIN_URL,
  campinApp: CAMPIN_APP_URL,
  campinRepo: CAMPIN_REPO_URL,
  campinCaseStudy: CAMPIN_CASE_STUDY_URL,
};

CONTENT.es.footer.copy = "© 2026";
CONTENT.en.footer.copy = "© 2026";

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const langButtons = document.querySelectorAll("[data-lang-button]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const howIWorkList = document.querySelector("[data-how-i-work-list]");
const stackList = document.querySelector("[data-stack-list]");
const trainingList = document.querySelector("[data-training-list]");
const footerContactList = document.querySelector("[data-footer-contact]");
const highlightsList = document.querySelector("[data-featured-highlights]");
const campinPreviewMain = document.querySelector("[data-campin-preview-main]");
const campinPreviewThumbs = document.querySelectorAll("[data-preview-index]");
const campinPreviewThumbsContainer = document.querySelector("[data-campin-preview-thumbnails]");
const caseStudySlot = document.querySelector("[data-case-study-slot]");
const caseStudyNote = document.querySelector(".case-study-note");

const initialLanguage = getInitialLanguage();
const initialTheme = getInitialTheme();

let currentLanguage = initialLanguage;
let currentTheme = initialTheme;
let mobileMenuOpen = false;
let currentCampinSlide = 0;

applyTheme(currentTheme);
applyLanguage(currentLanguage);
syncExternalLinks();
attachEvents();

function attachEvents() {
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  window.addEventListener("resize", handleResize);
  document.addEventListener("keydown", handleKeydown);

  menuToggle?.addEventListener("click", () => {
    mobileMenuOpen = !mobileMenuOpen;
    renderMenuState();
  });

  themeToggle?.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
    localStorage.setItem(STORAGE_KEYS.theme, currentTheme);
  });

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.getAttribute("data-lang-button");
      if (!nextLanguage || nextLanguage === currentLanguage) {
        return;
      }

      currentLanguage = nextLanguage;
      applyLanguage(currentLanguage);
      localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuOpen = false;
      renderMenuState();
    });
  });

  campinPreviewThumbs.forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.getAttribute("data-preview-index"));
      if (Number.isNaN(nextIndex) || nextIndex === currentCampinSlide) {
        return;
      }

      currentCampinSlide = nextIndex;
      renderCampinPreview(currentLanguage);
    });
  });

  handleHeaderScroll();
  renderMenuState();
}

function applyLanguage(language) {
  const copy = CONTENT[language];
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key) {
      return;
    }

    const value = readNestedValue(copy, key);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  langButtons.forEach((button) => {
    const buttonLanguage = button.getAttribute("data-lang-button");
    const isActive = buttonLanguage === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderHighlights(copy.featured.highlights);
  renderHowIWork(copy.howIWork.cards);
  renderStack(copy.stack.items);
  renderTraining(copy.training.items);
  renderFooterContact(copy.contact.items);
  renderCaseStudy(copy.featured);
  renderCampinPreview(language);

  updateThemeToggleLabel();
  renderMenuState();
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  updateThemeToggleLabel();
}

function updateThemeToggleLabel() {
  if (!themeToggle) {
    return;
  }

  const themeCopy = CONTENT[currentLanguage].theme;
  const isDark = currentTheme === "dark";
  const ariaLabel = isDark
    ? `${themeCopy.currentDark} ${themeCopy.toggleToLight}`
    : `${themeCopy.currentLight} ${themeCopy.toggleToDark}`;

  themeToggle.innerHTML = `<span class="theme-toggle-icon" aria-hidden="true">${getThemeIcon(
    currentTheme,
  )}</span>`;
  themeToggle.setAttribute("aria-label", ariaLabel);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("title", ariaLabel);
}

function getThemeIcon(theme) {
  if (theme === "dark") {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3.75V5.5"></path>
        <path d="M12 18.5v1.75"></path>
        <path d="M5.46 5.46l1.24 1.24"></path>
        <path d="M17.3 17.3l1.24 1.24"></path>
        <path d="M3.75 12H5.5"></path>
        <path d="M18.5 12h1.75"></path>
        <path d="M5.46 18.54l1.24-1.24"></path>
        <path d="M17.3 6.7l1.24-1.24"></path>
        <circle cx="12" cy="12" r="4.25"></circle>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.2 14.2A8.25 8.25 0 0 1 9.8 3.8a8.6 8.6 0 1 0 10.4 10.4Z"></path>
    </svg>
  `;
}

function renderHighlights(items) {
  if (!highlightsList) {
    return;
  }

  highlightsList.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderHowIWork(cards) {
  if (!howIWorkList) {
    return;
  }

  howIWorkList.innerHTML = cards
    .map(
      (card) => `
        <article class="info-card">
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderStack(items) {
  if (!stackList) {
    return;
  }

  stackList.innerHTML = items
    .map(
      (item) => `
        <article class="stack-card">
          <div class="stack-card-icon" aria-hidden="true">${getTechnologyIcon(item.key)}</div>
          <h3 class="stack-card-title">${item.name}</h3>
        </article>
      `,
    )
    .join("");
}

function renderTraining(items) {
  if (!trainingList) {
    return;
  }

  trainingList.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderFooterContact(items) {
  if (!footerContactList) {
    return;
  }

  footerContactList.innerHTML = items
    .map((item) => {
      const hasHref = Boolean(item.href);
      const isExternal = hasHref && item.href.startsWith("http");
      const rel = isExternal ? ' rel="noreferrer noopener" target="_blank"' : "";
      const ariaLabel = `${item.label} — ${item.value}`;
      const icon = getContactIcon(item.label);

      if (hasHref) {
        return `
          <a class="contact-link" href="${item.href}"${rel} aria-label="${ariaLabel}" title="${ariaLabel}">
            <span class="contact-link-icon" aria-hidden="true">${icon}</span>
          </a>
        `;
      }

      return `
        <span class="contact-link is-link-disabled" role="img" aria-label="${ariaLabel}" title="${ariaLabel}">
          <span class="contact-link-icon" aria-hidden="true">${icon}</span>
        </span>
      `;
    })
    .join("");
}

function renderCaseStudy(featuredCopy) {
  if (!caseStudySlot || !caseStudyNote) {
    return;
  }

  if (CAMPIN_CASE_STUDY_URL) {
    caseStudySlot.innerHTML = `
      <a
        class="button button-secondary"
        href="${CAMPIN_CASE_STUDY_URL}"
        target="_blank"
        rel="noreferrer noopener"
      >
        ${featuredCopy.buttons.caseStudy}
      </a>
    `;
    caseStudyNote.hidden = true;
    return;
  }

  caseStudySlot.innerHTML = `
    <button type="button" class="button button-secondary is-disabled" disabled>
      ${featuredCopy.buttons.caseStudy}
    </button>
  `;
  caseStudyNote.hidden = false;
}

function renderCampinPreview(language) {
  if (!campinPreviewMain || campinPreviewThumbs.length === 0) {
    return;
  }

  const previewCopy = CONTENT[language].featured;
  const currentSlide = CAMPIN_PREVIEW_SLIDES[currentCampinSlide] ?? CAMPIN_PREVIEW_SLIDES[0];

  campinPreviewMain.src = currentSlide.src;
  campinPreviewMain.alt = `${previewCopy.previewImageLabel} ${currentCampinSlide + 1}`;

  if (campinPreviewThumbsContainer) {
    campinPreviewThumbsContainer.setAttribute("aria-label", previewCopy.previewGalleryLabel);
  }

  campinPreviewThumbs.forEach((button, index) => {
    const isActive = index === currentCampinSlide;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-label", `${previewCopy.previewImageLabel} ${index + 1}`);
  });
}

function renderMenuState() {
  if (!mobileMenu || !menuToggle) {
    return;
  }

  const menuCopy = CONTENT[currentLanguage].mobileMenu;
  mobileMenu.hidden = !mobileMenuOpen;
  mobileMenu.dataset.open = String(mobileMenuOpen);
  menuToggle.setAttribute("aria-expanded", String(mobileMenuOpen));
  menuToggle.textContent = mobileMenuOpen ? menuCopy.close : menuCopy.open;
  document.body.classList.toggle("menu-open", mobileMenuOpen);
}

function syncExternalLinks() {
  document.querySelectorAll("[data-external-link]").forEach((node) => {
    const key = node.getAttribute("data-external-link");
    if (!key) {
      return;
    }

    const href = externalLinks[key];
    if (!href) {
      node.removeAttribute("href");
      node.removeAttribute("target");
      node.removeAttribute("rel");
      node.setAttribute("aria-disabled", "true");
      node.setAttribute("tabindex", "-1");
      node.classList.add("is-link-disabled");
      return;
    }

    node.setAttribute("href", href);
    node.classList.remove("is-link-disabled");
    node.removeAttribute("aria-disabled");
    node.removeAttribute("tabindex");

    if (!href.startsWith("http")) {
      node.removeAttribute("target");
      node.removeAttribute("rel");
    }
  });
}

function getTechnologyIcon(key) {
  const icons = {
    react: `
      <svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="32" rx="11" ry="28" stroke="#5E93B3" stroke-width="3.4"></ellipse>
        <ellipse cx="32" cy="32" rx="11" ry="28" stroke="#5E93B3" stroke-width="3.4" transform="rotate(60 32 32)"></ellipse>
        <ellipse cx="32" cy="32" rx="11" ry="28" stroke="#5E93B3" stroke-width="3.4" transform="rotate(120 32 32)"></ellipse>
        <circle cx="32" cy="32" r="5.5" fill="#5E93B3"></circle>
      </svg>
    `,
    typescript: `
      <svg viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#3178C6"></rect>
        <path d="M22 24h20v5h-7v21h-6V29h-7v-5Zm22.7 0c5 0 8.3 2.5 8.8 6.8h-6c-.3-1.6-1.4-2.4-3.1-2.4-1.7 0-2.8.7-2.8 1.9 0 1 1 1.6 4.4 2.3 5.2 1.1 7.9 3 7.9 7.2 0 4.8-4 8-9.8 8-5.8 0-9.5-2.8-10-7.6h6.2c.4 1.9 1.8 2.8 3.9 2.8 1.9 0 3.2-.8 3.2-2.1 0-1.1-.8-1.7-3.8-2.4-5.6-1.3-8.3-2.9-8.3-7.2 0-4.6 3.8-7.3 9.4-7.3Z" fill="#fff"></path>
      </svg>
    `,
    vite: `
      <svg viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="vite-gradient" x1="18" y1="10" x2="44" y2="52" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C7DFF"></stop>
            <stop offset="1" stop-color="#A960FF"></stop>
          </linearGradient>
          <linearGradient id="vite-core" x1="28" y1="18" x2="40" y2="46" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFD15B"></stop>
            <stop offset="1" stop-color="#FFB100"></stop>
          </linearGradient>
        </defs>
        <path d="M34 8 18 14.5 22.4 48 34 56l11.6-8L50 14.5 34 8Z" fill="url(#vite-gradient)"></path>
        <path d="M37 16 27.5 33.8h8.1l-3.1 13.2 11-20.1h-8.4L37 16Z" fill="url(#vite-core)"></path>
      </svg>
    `,
    tailwind: `
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M18 26.5c3-7.2 7.5-10.5 13.7-10.5 9.1 0 10.3 6.8 14.8 8.7 3 1.2 6.5.5 10.5-2.2-3 7.2-7.5 10.5-13.7 10.5-9.1 0-10.3-6.8-14.8-8.7-3-1.2-6.5-.5-10.5 2.2Z" fill="#38BDF8"></path>
        <path d="M8 41.5C11 34.3 15.5 31 21.7 31c9.1 0 10.3 6.8 14.8 8.7 3 1.2 6.5.5 10.5-2.2-3 7.2-7.5 10.5-13.7 10.5-9.1 0-10.3-6.8-14.8-8.7-3-1.2-6.5-.5-10.5 2.2Z" fill="#38BDF8"></path>
      </svg>
    `,
    zustand: `
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M18 42c0-10 6-17 14-17 2.7 0 4.8.8 6.7 2.1 1.6-1.6 3.8-2.6 6.8-2.6 5.2 0 9.5 3.8 9.5 9.4 0 2.9-1 5.3-2.8 7.2v7.9H18V42Z" fill="#8B5E3C"></path>
        <circle cx="28" cy="34" r="2.4" fill="#FCFBF8"></circle>
        <circle cx="44" cy="34" r="2.4" fill="#FCFBF8"></circle>
        <path d="M28 42c2 2 5 3 8 3s6-.9 8-3" stroke="#FCFBF8" stroke-width="2.6" stroke-linecap="round"></path>
        <path d="M23.5 26 19 20M40 24l3-5 5 2" stroke="#8B5E3C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `,
    supabase: `
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M38.8 10c1.8 0 2.8 2 1.7 3.5L28 32h8.7c1.7 0 2.8 1.8 1.9 3.3L28.2 53.1c-1.4 2.4-5 .9-4.2-1.8l5.3-17.4h-7.8c-1.8 0-2.9-2-1.8-3.6L35 11.1c.8-1 2-1.1 3.8-1.1Z" fill="#3ECF8E"></path>
        <path d="M39 10.2c1.4 0 2.3 1.5 1.5 2.8L31 27.5h5.8c1.7 0 2.8 1.8 1.9 3.3L28.2 49.2l10.7-35.7c.2-.7-.3-1.5-1.1-1.5H35l.8-1.1c.8-.5 1.8-.7 3.2-.7Z" fill="#2C9C69"></path>
      </svg>
    `,
    nodejs: `
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M32 8 50 18.2v27.6L32 56 14 45.8V18.2L32 8Z" stroke="#3C873A" stroke-width="3.2" fill="rgba(60,135,58,0.08)"></path>
        <path d="M26 24h4.5c4.8 0 7.5 2.7 7.5 8 0 5.3-2.7 8-7.5 8H26V24Zm4.2 12.2c2.2 0 3.6-1.3 3.6-4.2 0-2.9-1.4-4.2-3.6-4.2h-.5v8.4h.5Zm12.3 3.8c-2.6 0-4.8-1.1-6.1-3.2l3.3-2.3c.7 1.1 1.5 1.8 2.7 1.8 1.4 0 2.2-.6 2.2-1.6 0-1.1-.9-1.5-2.9-2.4-3-.9-5-2.2-5-5.1 0-2.6 2-4.6 5.2-4.6 2.3 0 3.9.8 5.1 2.8l-3.1 2c-.7-1.1-1.4-1.5-2-1.5-.9 0-1.5.6-1.5 1.3 0 .9.6 1.3 2.5 2.1 3.2 1.1 5.4 2.2 5.4 5.3 0 3.1-2.4 5-5.8 5Z" fill="#3C873A"></path>
      </svg>
    `,
  };

  return icons[key] || "";
}

function getContactIcon(label) {
  const icons = {
    Email: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.8"></rect>
        <path d="m5.5 8 6.5 5 6.5-5"></path>
      </svg>
    `,
    GitHub: `
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2.2a7.8 7.8 0 0 0-2.47 15.2c.4.08.54-.17.54-.38v-1.34c-2.2.48-2.66-.93-2.66-.93-.36-.9-.88-1.14-.88-1.14-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.7 1.2 1.84.86 2.3.66.07-.52.28-.87.5-1.07-1.76-.2-3.62-.88-3.62-3.9 0-.86.3-1.57.81-2.12-.08-.2-.35-1.02.08-2.12 0 0 .67-.22 2.2.81a7.5 7.5 0 0 1 4 0c1.52-1.03 2.2-.8 2.2-.8.43 1.1.16 1.92.08 2.11.5.55.8 1.26.8 2.12 0 3.03-1.86 3.7-3.64 3.9.29.24.54.72.54 1.46v2.17c0 .21.14.47.55.38A7.8 7.8 0 0 0 10 2.2Z"></path>
      </svg>
    `,
    LinkedIn: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.2 8.4a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM4.7 9.8h3v9.5h-3V9.8Zm4.9 0h2.8V11c.4-.7 1.4-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.9v5h-3v-4.4c0-1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3v4.5h-3V9.8Z"></path>
      </svg>
    `,
  };

  return icons[label] || "";
}


function handleHeaderScroll() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

function handleResize() {
  if (window.innerWidth > 896 && mobileMenuOpen) {
    mobileMenuOpen = false;
    renderMenuState();
  }
}

function handleKeydown(event) {
  if (event.key === "Escape" && mobileMenuOpen) {
    mobileMenuOpen = false;
    renderMenuState();
    menuToggle?.focus();
  }
}

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(STORAGE_KEYS.language);
  if (savedLanguage === "es" || savedLanguage === "en") {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();
  return browserLanguage.startsWith("es") ? "es" : "en";
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readNestedValue(source, path) {
  return path.split(".").reduce((value, key) => {
    if (value && typeof value === "object" && key in value) {
      return value[key];
    }

    return undefined;
  }, source);
}
