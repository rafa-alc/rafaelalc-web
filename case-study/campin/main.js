const CAMPIN_APP_URL = "/campin";
const CAMPIN_REPO_URL = "https://github.com/rafa-alc/camping-app";
const CONTACT_EMAIL = "hello@rafaelalc.dev";
const GITHUB_URL = "https://github.com/rafa-alc";
const LINKEDIN_URL = "https://www.linkedin.com/in/rafa-alcocer/";

const STORAGE_KEYS = {
  language: "portfolio-language",
  theme: "portfolio-theme",
};

const CONTENT = {
  es: {},
  en: {},
};

CONTENT.es = {
  seo: {
    title: "CampIn — Case study | Rafa Alcocer",
    description:
      "Case study de CampIn, una herramienta web de planificación de escapadas de camping centrada en claridad, organización y continuidad de uso.",
  },
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
  footer: {
    role: "Full-Stack Developer",
  },
  hero: {
    eyebrow: "Case study",
    title: "CampIn",
    subtitle:
      "Planificación de escapadas de camping con una experiencia centrada en claridad, organización y continuidad de uso.",
    text:
      "CampIn es una herramienta web diseñada para transformar una preparación normalmente dispersa y poco reutilizable en un flujo más claro, contextual y fácil de retomar. El proyecto parte de una idea sencilla: preparar un viaje no debería sentirse como improvisar una lista cada vez, sino como seguir una herramienta útil pensada para uso real.",
    metaLine1: "Producto · UX/UI · Frontend architecture · Full implementation",
    metaLine2: "React · TypeScript · Tailwind · Zustand · Supabase",
    buttons: {
      app: "Ver app",
      code: "Ver código",
    },
    imageAlt: "Vista principal de CampIn con checklist y resumen de progreso",
  },
  challenge: {
    title: "El reto",
    paragraphs: [
      "Preparar una escapada de camping parece una tarea simple, pero en la práctica suele derivar en listas genéricas, olvidos frecuentes y una sensación constante de tener que empezar desde cero. Muchas soluciones funcionan como checklists poco flexibles o como listas improvisadas sin continuidad real.",
      "El reto de CampIn era convertir ese proceso en una experiencia más guiada, más útil y más reutilizable, sin caer en una interfaz densa ni en complejidad innecesaria.",
    ],
    imageAlt: "Pantalla de configuración y planificación del viaje en CampIn",
  },
  goals: {
    title: "Qué quería resolver",
    lead:
      "El proyecto no buscaba crear una checklist “bonita”, sino una herramienta pequeña con lógica de producto.",
    items: [
      "Reducir incertidumbre durante la preparación",
      "Adaptar la lista al contexto real del viaje",
      "Aportar continuidad entre una salida y otra",
    ],
    closing:
      "La clave era que la experiencia ayudara de verdad a preparar mejor el viaje, no solo a marcar casillas.",
  },
  role: {
    title: "Mi rol",
    text:
      "Desarrollé CampIn de forma individual, encargándome de la dirección del producto, la UX/UI, la arquitectura frontend y la implementación completa. Además de construir funcionalidades, gran parte del trabajo consistió en decidir qué simplificar, qué eliminar y qué merecía estructura real para que el producto tuviera sentido más allá de una demo funcional.",
  },
  process: {
    title: "Proceso de evolución",
    intro:
      "El proyecto pasó por varias iteraciones, pero una de las más importantes fue entender que la experiencia necesitaba menos complejidad visible y más claridad.",
    blocks: [
      {
        title: "Validación del MVP",
        text:
          "La primera fase sirvió para validar el núcleo del producto: contexto del viaje, checklist base, categorías y sensación inicial de progreso. Esta versión confirmó que la idea tenía potencial, pero también dejó claro que la experiencia todavía no era lo bastante natural.",
      },
      {
        title: "Reset de UX",
        text:
          "Durante la iteración detecté que la interfaz se estaba acercando demasiado a un pequeño task manager. Para devolver el foco al problema real, hice un giro importante: pasé a una checklist vertical más clara, eliminé el estado in_progress, reduje ruido visual y traté los elementos excluidos como una adaptación lógica del viaje.",
      },
      {
        title: "Consolidación como producto",
        text:
          "Con una UX más enfocada, reforcé la continuidad del producto mediante viajes guardados, duplicado como plantilla, custom items, autenticación y persistencia cloud. A partir de ahí, CampIn empezó a comportarse menos como una prueba funcional y más como una base de producto real.",
      },
    ],
    images: [
      "Detalle de checklist de viaje en CampIn",
      "Vista intermedia del flujo de preparación en CampIn",
      "Vista adicional del producto CampIn durante la planificación",
    ],
  },
  solution: {
    title: "La solución",
    intro:
      "CampIn organiza la preparación del viaje alrededor de un flujo compacto, contextual y fácil de retomar.",
    items: [
      {
        title: "Setup contextual",
        text:
          "Antes de generar la checklist, el usuario define variables básicas como personas, duración, alojamiento o mascota. Con esa base, la app construye una lista más ajustada al caso real.",
      },
      {
        title: "Checklist simplificada",
        text:
          "La experiencia principal se apoya en tres estados: todo, done y not needed. Reducir la lógica visible hizo la interacción más rápida y clara.",
      },
      {
        title: "Adaptación sin fricción",
        text:
          "Los elementos marcados como no necesarios no desaparecen: se apartan a una sección recuperable. Eso permite adaptar la lista al viaje sin romper la sensación de control.",
      },
      {
        title: "Continuidad real",
        text:
          "Guardar, reabrir, duplicar o reutilizar viajes convierte CampIn en una herramienta práctica para uso recurrente, no en una checklist aislada.",
      },
    ],
  },
  decisions: {
    title: "Decisiones de producto clave",
    items: [
      {
        title: "Checklist-first",
        text:
          "Elegí una checklist vertical en lugar de una estructura tipo tablero porque resultaba más coherente con el objetivo real del producto.",
      },
      {
        title: "Not needed como adaptación",
        text:
          "Excluir un elemento debía sentirse como personalización del viaje, no como una fricción o una excepción incómoda.",
      },
      {
        title: "Persistencia híbrida",
        text:
          "La app funciona en local para reducir barrera de entrada y añade persistencia cloud cuando el usuario inicia sesión.",
      },
      {
        title: "Gamificación ligera",
        text:
          "Los puntos y logros actúan como refuerzo de progreso, pero sin competir con la utilidad principal del producto.",
      },
    ],
  },
  technical: {
    title: "Base técnica",
    text:
      "A nivel técnico, construí CampIn con una arquitectura orientada a iterar rápido sin perder orden interno.",
    items: [
      "React + TypeScript para una base robusta y escalable",
      "Zustand para estado global y lógica de viaje",
      "Tailwind para velocidad y consistencia UI",
      "Supabase para autenticación y persistencia cloud",
      "Catálogo normalizado en categorías, pools e ítems para mantener la checklist de forma más limpia",
    ],
    closing:
      "La intención no era solo que la app funcionara, sino que pudiera evolucionar sin romperse a medida que el producto maduraba.",
  },
  result: {
    title: "Resultado",
    text:
      "CampIn terminó convirtiéndose en una herramienta más sólida que una demo funcional: una experiencia centrada en preparación contextual, continuidad de uso y organización reutilizable. El valor del proyecto no está solo en la implementación, sino en cómo varias decisiones de UX, estructura y alcance fueron mejorando el producto iteración tras iteración.",
    highlight:
      "Pequeño producto, pero con enfoque real de uso, simplificación consciente y base técnica preparada para crecer.",
    imageAlt: "Vista pulida de la interfaz de CampIn",
  },
  learnings: {
    title: "Aprendizajes",
    items: [
      "Simplificar puede mejorar más que añadir",
      "Una buena UX también depende de decisiones de sistema",
      "La continuidad cambia mucho el valor percibido del producto",
      "La motivación funciona mejor cuando acompaña a la utilidad",
    ],
    closing:
      "Este proyecto reforzó mi forma de trabajar: detectar fricción real, traducirla a una estructura usable, iterar con criterio y construir solo lo que aporta valor claro.",
  },
  finalCta: {
    title: "Explora el proyecto",
    text:
      "Puedes ver la aplicación en funcionamiento o revisar el código para entender cómo trasladé estas decisiones de producto a una implementación real.",
    buttons: {
      app: "Abrir app",
      code: "Ver código",
    },
  },
};

CONTENT.en = {
  seo: {
    title: "CampIn — Case study | Rafa Alcocer",
    description:
      "Case study of CampIn, a web tool for planning camping trips with a focus on clarity, organization, and continuity of use.",
  },
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
  footer: {
    role: "Full-Stack Developer",
  },
  hero: {
    eyebrow: "Case study",
    title: "CampIn",
    subtitle:
      "Camping trip planning with an experience centered on clarity, organization, and continuity of use.",
    text:
      "CampIn is a web tool designed to turn a preparation process that is usually scattered and hard to reuse into a flow that feels clearer, more contextual, and easier to pick up again. The project starts from a simple idea: preparing a trip should not feel like improvising a new list every time, but like using a practical tool built for real use.",
    metaLine1: "Product · UX/UI · Frontend architecture · Full implementation",
    metaLine2: "React · TypeScript · Tailwind · Zustand · Supabase",
    buttons: {
      app: "View app",
      code: "View code",
    },
    imageAlt: "Main CampIn view showing checklist and progress summary",
  },
  challenge: {
    title: "The challenge",
    paragraphs: [
      "Preparing a camping getaway may sound simple, but in practice it often turns into generic lists, frequent forgotten items, and the constant feeling of starting from scratch. Many solutions behave either like rigid checklists or improvised lists with no real continuity.",
      "CampIn aimed to turn that process into something more guided, more useful, and more reusable, without falling into a dense interface or unnecessary complexity.",
    ],
    imageAlt: "CampIn trip setup and planning screen",
  },
  goals: {
    title: "What I wanted to solve",
    lead:
      "The goal was not to build a “nice-looking” checklist, but a small tool with actual product logic behind it.",
    items: [
      "Reduce uncertainty during trip preparation",
      "Adapt the list to the real context of the trip",
      "Add continuity between one getaway and the next",
    ],
    closing:
      "The key was making the experience genuinely help users prepare better, not just tick boxes.",
  },
  role: {
    title: "My role",
    text:
      "I developed CampIn on my own, taking care of product direction, UX/UI, frontend architecture, and full implementation. Beyond building features, a big part of the work was deciding what to simplify, what to remove, and what deserved real structure so the product would make sense beyond being a functional demo.",
  },
  process: {
    title: "Evolution process",
    intro:
      "The project went through several iterations, but one of the most important lessons was realizing that the experience needed less visible complexity and more clarity.",
    blocks: [
      {
        title: "MVP validation",
        text:
          "The first phase was about validating the core of the product: trip context, base checklist, categories, and an initial sense of progress. This version confirmed the idea had potential, but also made it clear that the experience still was not natural enough.",
      },
      {
        title: "UX reset",
        text:
          "During iteration I noticed the interface was getting too close to a small task manager. To bring the focus back to the actual problem, I made a major shift: I moved to a clearer vertical checklist, removed the in_progress state, reduced visual noise, and treated excluded items as a logical adaptation of the trip.",
      },
      {
        title: "Product consolidation",
        text:
          "With a more focused UX, I reinforced product continuity through saved trips, template duplication, custom items, authentication, and cloud persistence. From that point on, CampIn started behaving less like a functional experiment and more like a real product foundation.",
      },
    ],
    images: [
      "CampIn trip checklist detail",
      "Intermediate CampIn preparation flow view",
      "Additional CampIn product view during planning",
    ],
  },
  solution: {
    title: "The solution",
    intro:
      "CampIn structures trip preparation around a compact, contextual flow that is easy to return to.",
    items: [
      {
        title: "Contextual setup",
        text:
          "Before generating the checklist, the user defines basic variables such as number of people, duration, accommodation, or pet. With that context, the app builds a list that better matches the real trip.",
      },
      {
        title: "Simplified checklist",
        text:
          "The main experience relies on three states: todo, done, and not needed. Reducing visible logic made the interaction faster and clearer.",
      },
      {
        title: "Low-friction adaptation",
        text:
          "Items marked as not needed do not disappear; they move into a recoverable section. This allows the list to adapt to the trip without breaking the feeling of control.",
      },
      {
        title: "Real continuity",
        text:
          "Saving, reopening, duplicating, or reusing trips turns CampIn into a practical recurrent-use tool rather than a one-off checklist.",
      },
    ],
  },
  decisions: {
    title: "Key product decisions",
    items: [
      {
        title: "Checklist-first",
        text:
          "I chose a vertical checklist instead of a board-like structure because it was more coherent with the real goal of the product.",
      },
      {
        title: "Not needed as adaptation",
        text:
          "Excluding an item needed to feel like trip customization, not like friction or an awkward exception.",
      },
      {
        title: "Hybrid persistence",
        text:
          "The app works locally to reduce entry friction and adds cloud persistence when the user signs in.",
      },
      {
        title: "Light gamification",
        text:
          "Points and achievements act as progress reinforcement without competing with the product’s main utility.",
      },
    ],
  },
  technical: {
    title: "Technical foundation",
    text:
      "From a technical point of view, I built CampIn with an architecture designed to iterate quickly without losing internal order.",
    items: [
      "React + TypeScript for a robust and scalable base",
      "Zustand for global state and trip logic",
      "Tailwind for UI speed and consistency",
      "Supabase for authentication and cloud persistence",
      "A normalized catalog with categories, pools, and items to keep checklist logic cleaner",
    ],
    closing:
      "The goal was not only to make the app work, but to let it evolve without breaking as the product matured.",
  },
  result: {
    title: "Result",
    text:
      "CampIn ended up becoming something more solid than a functional demo: an experience centered on contextual preparation, continuity of use, and reusable organization. The value of the project is not only in the implementation, but also in how several UX, structure, and scope decisions improved the product iteration after iteration.",
    highlight:
      "A small product, but one built with real-use logic, conscious simplification, and a technical base ready to grow.",
    imageAlt: "Polished CampIn interface view",
  },
  learnings: {
    title: "Learnings",
    items: [
      "Simplifying can improve more than adding",
      "Good UX also depends on system-level decisions",
      "Continuity changes the perceived value of a product dramatically",
      "Motivation works better when it supports utility",
    ],
    closing:
      "This project reinforced the way I like to work: detect real friction, translate it into a usable structure, iterate with intention, and build only what adds clear value.",
  },
  finalCta: {
    title: "Explore the project",
    text:
      "You can view the live application or review the code to see how these product decisions were translated into a real implementation.",
    buttons: {
      app: "Open app",
      code: "View code",
    },
  },
};

const header = document.querySelector("[data-header]");
const skipLink = document.querySelector("[data-skip-link]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const langButtons = document.querySelectorAll("[data-lang-button]");
const desktopNavLinks = document.querySelectorAll("[data-nav]");
const mobileNavLinks = document.querySelectorAll("[data-mobile-nav]");
const footerRole = document.querySelector("[data-footer-role]");
const footerContactList = document.querySelector("[data-footer-contact]");
const caseStudyRoot = document.querySelector("[data-case-study-root]");
const descriptionMeta = document.querySelector('meta[name="description"]');

const initialLanguage = getInitialLanguage();
const initialTheme = getInitialTheme();

let currentLanguage = initialLanguage;
let currentTheme = initialTheme;
let mobileMenuOpen = false;
let linkTargetObserver;

applyTheme(currentTheme);
applyLanguage(currentLanguage);
syncLinkTargets();
observeLinkTargets();
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

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuOpen = false;
      renderMenuState();
    });
  });

  handleHeaderScroll();
  renderMenuState();
}

function applyLanguage(language) {
  const copy = CONTENT[language];
  document.documentElement.lang = language;
  document.title = copy.seo.title;
  descriptionMeta?.setAttribute("content", copy.seo.description);

  if (skipLink) {
    skipLink.textContent = copy.skipLink;
  }

  desktopNavLinks.forEach((link) => {
    const key = link.getAttribute("data-nav");
    if (key && copy.nav[key]) {
      link.textContent = copy.nav[key];
    }
  });

  mobileNavLinks.forEach((link) => {
    const key = link.getAttribute("data-mobile-nav");
    if (key && copy.nav[key]) {
      link.textContent = copy.nav[key];
    }
  });

  if (footerRole) {
    footerRole.textContent = copy.footer.role;
  }

  langButtons.forEach((button) => {
    const buttonLanguage = button.getAttribute("data-lang-button");
    const isActive = buttonLanguage === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderCaseStudyContent(copy);
  renderFooterContact(language);
  updateThemeToggleLabel();
  renderMenuState();
  syncLinkTargets();
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

function renderCaseStudyContent(copy) {
  if (!caseStudyRoot) {
    return;
  }

  caseStudyRoot.innerHTML = `
    <section class="section case-study-section case-study-hero">
      <div class="container case-study-shell case-study-hero-layout">
        <div class="case-study-hero-copy">
          <p class="eyebrow">${copy.hero.eyebrow}</p>
          <h1>${copy.hero.title}</h1>
          <p class="case-study-lead">${copy.hero.subtitle}</p>
          <p class="section-copy section-copy-wide">${copy.hero.text}</p>
          <div class="case-study-meta">
            <p>${copy.hero.metaLine1}</p>
            <p>${copy.hero.metaLine2}</p>
          </div>
          <div class="button-row case-study-actions">
            <a class="button button-primary" href="${CAMPIN_APP_URL}">${copy.hero.buttons.app}</a>
            <a class="button button-secondary" href="${CAMPIN_REPO_URL}">${copy.hero.buttons.code}</a>
          </div>
        </div>

        <div class="case-study-hero-media">
          <article class="project-preview">
            <div class="preview-toolbar">
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
              <span class="preview-title">CampIn</span>
            </div>
            <div class="case-study-preview-body">
              <figure class="preview-stage case-study-media-frame">
                <img
                  class="preview-image preview-image-main"
                  src="../../assets/campIn-1.png"
                  alt="${copy.hero.imageAlt}"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section case-study-section">
      <div class="container case-study-shell">
        <div class="section-heading section-heading-compact">
          <h2>${copy.challenge.title}</h2>
        </div>
        <div class="case-study-grid">
          <div class="case-study-copy">
            ${renderParagraphs(copy.challenge.paragraphs)}
          </div>
          <figure class="case-study-media">
            <img
              src="../../assets/campIn-2.png"
              alt="${copy.challenge.imageAlt}"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>

    <section class="section case-study-section">
      <div class="container case-study-shell">
        <div class="section-heading section-heading-compact">
          <h2>${copy.goals.title}</h2>
        </div>
        <div class="case-study-copy">
          <p class="case-study-lead">${copy.goals.lead}</p>
          <ul class="case-study-bullet-list">
            ${renderBullets(copy.goals.items)}
          </ul>
          <p class="section-copy">${copy.goals.closing}</p>
        </div>
      </div>
    </section>

    <section class="section case-study-section">
      <div class="container case-study-shell">
        <div class="section-heading section-heading-compact">
          <h2>${copy.role.title}</h2>
        </div>
        <p class="section-copy section-copy-wide">${copy.role.text}</p>
      </div>
    </section>

    <section class="section case-study-section">
      <div class="container case-study-shell case-study-process">
        <div class="section-heading section-heading-compact">
          <h2>${copy.process.title}</h2>
        </div>
        <p class="section-copy section-copy-wide">${copy.process.intro}</p>
        <div class="case-study-process-list">
          ${copy.process.blocks
            .map(
              (block) => `
                <article class="case-study-process-item">
                  <h3>${block.title}</h3>
                  <p>${block.text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="case-study-media-strip">
          <figure class="case-study-media-card">
            <img
              src="../../assets/campIn-2.png"
              alt="${copy.process.images[0]}"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure class="case-study-media-card">
            <img
              src="../../assets/campIn-3.png"
              alt="${copy.process.images[1]}"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure class="case-study-media-card">
            <img
              src="../../assets/campIn-4.png"
              alt="${copy.process.images[2]}"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>

    <section class="section case-study-section">
      <div class="container case-study-shell">
        <div class="section-heading section-heading-compact">
          <h2>${copy.solution.title}</h2>
        </div>
        <p class="section-copy section-copy-wide">${copy.solution.intro}</p>
        <div class="case-study-card-grid">
          ${renderInfoCards(copy.solution.items)}
        </div>
      </div>
    </section>

    <section class="section case-study-section">
      <div class="container case-study-shell">
        <div class="section-heading section-heading-compact">
          <h2>${copy.decisions.title}</h2>
        </div>
        <div class="case-study-card-grid">
          ${renderInfoCards(copy.decisions.items)}
        </div>
      </div>
    </section>

    <section class="section case-study-section">
      <div class="container case-study-shell case-study-technical">
        <div class="section-heading section-heading-compact">
          <h2>${copy.technical.title}</h2>
        </div>
        <p class="section-copy section-copy-wide">${copy.technical.text}</p>
        <ul class="case-study-bullet-list">
          ${renderBullets(copy.technical.items)}
        </ul>
        <p class="section-copy">${copy.technical.closing}</p>
      </div>
    </section>

    <section class="section case-study-section">
      <div class="container case-study-shell">
        <div class="section-heading section-heading-compact">
          <h2>${copy.result.title}</h2>
        </div>
        <div class="case-study-grid">
          <div class="case-study-copy">
            <p class="section-copy section-copy-wide">${copy.result.text}</p>
            <p class="case-study-highlight">${copy.result.highlight}</p>
          </div>
          <figure class="case-study-media">
            <img
              src="../../assets/campIn-3.png"
              alt="${copy.result.imageAlt}"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>

    <section class="section case-study-section">
      <div class="container case-study-shell">
        <div class="section-heading section-heading-compact">
          <h2>${copy.learnings.title}</h2>
        </div>
        <ul class="case-study-bullet-list">
          ${renderBullets(copy.learnings.items)}
        </ul>
        <p class="section-copy">${copy.learnings.closing}</p>
      </div>
    </section>

    <section class="section case-study-section">
      <div class="container case-study-shell">
        <div class="case-study-final-cta">
          <h2>${copy.finalCta.title}</h2>
          <p class="section-copy section-copy-wide">${copy.finalCta.text}</p>
          <div class="button-row case-study-actions">
            <a class="button button-primary" href="${CAMPIN_APP_URL}">${copy.finalCta.buttons.app}</a>
            <a class="button button-secondary" href="${CAMPIN_REPO_URL}">${copy.finalCta.buttons.code}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooterContact(language) {
  if (!footerContactList) {
    return;
  }

  const items = getFooterContactItems(language);
  footerContactList.innerHTML = items
    .map((item) => {
      const icon = getContactIcon(item.label);

      return `
        <a class="contact-link" href="${item.href}" aria-label="${item.ariaLabel}" title="${item.ariaLabel}">
          <span class="contact-link-icon" aria-hidden="true">${icon}</span>
        </a>
      `;
    })
    .join("");
}

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p class="section-copy">${paragraph}</p>`).join("");
}

function renderBullets(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderInfoCards(items) {
  return items
    .map(
      (item) => `
        <article class="info-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function getFooterContactItems(language) {
  if (language === "es") {
    return [
      {
        label: "Email",
        href: `mailto:${CONTACT_EMAIL}`,
        ariaLabel: "Email — Enviar email",
      },
      {
        label: "LinkedIn",
        href: LINKEDIN_URL,
        ariaLabel: "LinkedIn — Ver perfil",
      },
      {
        label: "GitHub",
        href: GITHUB_URL,
        ariaLabel: "GitHub — Ver perfil",
      },
    ];
  }

  return [
    {
      label: "Email",
      href: `mailto:${CONTACT_EMAIL}`,
      ariaLabel: "Email — Send email",
    },
    {
      label: "LinkedIn",
      href: LINKEDIN_URL,
      ariaLabel: "LinkedIn — View profile",
    },
    {
      label: "GitHub",
      href: GITHUB_URL,
      ariaLabel: "GitHub — View profile",
    },
  ];
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

function syncLinkTargets(root = document) {
  const scope =
    root instanceof HTMLAnchorElement ? [root] : root.querySelectorAll?.("a[href]") ?? [];

  scope.forEach((link) => {
    const openInNewTab = shouldOpenInNewTab(link);
    if (openInNewTab === null) {
      return;
    }

    if (!openInNewTab) {
      link.removeAttribute("target");
      link.removeAttribute("rel");
      return;
    }

    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer noopener");
  });
}

function shouldOpenInNewTab(link) {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) {
    return href ? false : null;
  }

  try {
    const url = new URL(href, window.location.origin);
    const isHttpLink = url.protocol === "http:" || url.protocol === "https:";
    if (!isHttpLink) {
      return false;
    }

    if (isCampInUrl(url)) {
      return true;
    }

    return url.origin !== window.location.origin;
  } catch {
    return null;
  }
}

function isCampInUrl(url) {
  const pathname = normalizePathname(url.pathname);
  return (
    pathname === "/campin" ||
    pathname.startsWith("/campin/") ||
    pathname === "/case-study/campin" ||
    pathname.startsWith("/case-study/campin/")
  );
}

function normalizePathname(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function observeLinkTargets() {
  if (linkTargetObserver) {
    return;
  }

  linkTargetObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.target instanceof HTMLAnchorElement) {
        syncLinkTargets(mutation.target);
        return;
      }

      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) {
          return;
        }

        if (node.matches("a[href]")) {
          syncLinkTargets(node);
        }

        syncLinkTargets(node);
      });
    });
  });

  linkTargetObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["href"],
  });
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
