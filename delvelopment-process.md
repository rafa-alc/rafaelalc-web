# Delvelopment Process

## 1. Qué es este proyecto

Este proyecto es mi portfolio personal.

La idea principal no ha sido construir una aplicación compleja, sino una web clara, ligera y fácil de mantener. Por eso la base técnica es muy simple:

- `index.html`
- `styles.css`
- `main.js`
- carpeta `assets/`
- una página extra de case study en `case-study/campin/`
- `vercel.json` para la parte de despliegue

No hay React, no hay Vite dentro de este repo, no hay router y no hay sistema de componentes como en una SPA. La decisión aquí fue mantenerlo simple porque el portfolio no necesitaba más complejidad.

## 2. Qué lógica he seguido para construirlo

Yo lo entiendo así, explicado como lo pensaría un junior developer:

### Paso 1: primero definir el objetivo de la web

Antes de tocar código, lo importante era saber qué tenía que comunicar la página:

- quién soy
- qué hago
- cuál es mi proyecto principal
- cómo trabajo
- qué stack uso
- cómo contactarme

Eso hizo que la arquitectura fuera de una sola página principal, con scroll por secciones, más una página separada para el case study de CampIn.

### Paso 2: mantener una estructura pequeña

Como el repo ya era estático, la mejor decisión fue no meter un framework.

Si hubiera añadido React o un sistema más complejo, el proyecto habría ganado peso técnico sin necesidad real. En un portfolio, eso muchas veces empeora la mantenibilidad.

Por eso la lógica quedó así:

- HTML para la estructura base
- CSS para todo el sistema visual
- JavaScript para el comportamiento

## 3. Cómo está repartida la responsabilidad del código

### `index.html`

Aquí vive la estructura principal de la home:

- header
- hero
- bloque destacado de CampIn
- about
- how I work
- stack
- training
- contact
- footer

La idea es que el HTML defina la estructura semántica de la página y no una versión vieja que luego JavaScript tenga que “corregir”.

### `styles.css`

Aquí vive toda la capa visual:

- colores
- tipografía
- espaciado
- dark mode
- responsive
- estilos del case study

Lo bueno de tener un solo CSS en este caso es que el proyecto sigue siendo pequeño y se entiende rápido.

### `main.js`

Aquí vive la lógica de la home:

- idioma ES/EN
- tema claro/oscuro
- menú mobile
- links dinámicos
- carrusel manual de CampIn
- render de bloques que dependen del idioma

En vez de duplicar toda la web en español y en inglés, se usa un objeto `CONTENT` con las dos versiones del texto. Eso hace que cambiar contenido sea bastante más ordenado.

### `case-study/campin/index.html` y `case-study/campin/main.js`

Aquí vive la página del case study.

Se separó de la home porque ya tenía suficiente contenido propio como para merecer una página independiente. La lógica es parecida a la home:

- estructura HTML simple
- contenido renderizado desde JS
- soporte ES/EN
- soporte light/dark

## 4. Por qué usé una sola fuente de verdad

Una de las decisiones importantes fue evitar que el proyecto tuviera varias versiones del mismo contenido al mismo tiempo.

Por ejemplo, una mala práctica sería esta:

- dejar un texto viejo en el HTML
- luego cambiarlo con JavaScript
- luego esconder otro fallback con CSS

Eso funciona “visualmente”, pero ensucia mucho la base del proyecto.

La lógica correcta aquí fue:

- si un bloque es estático y estable, vive limpio en HTML
- si un bloque depende del idioma o de un estado, lo controla JS
- si una cosa ya no existe, se elimina

Esto hace que el proyecto sea más fácil de leer y menos confuso.

## 5. Cómo resolví el multidioma

El multidioma se resuelve con un objeto `CONTENT` en JavaScript.

La idea básica es:

1. Guardar todos los textos en `CONTENT.es` y `CONTENT.en`
2. Leer el idioma guardado en `localStorage`
3. Si no hay idioma guardado, usar el idioma del navegador
4. Aplicar el texto correcto al cargar la página

Ventajas de esta solución:

- no hace falta duplicar páginas
- no hace falta una librería de i18n
- es fácil editar textos

Para un portfolio estático, esto es suficiente y mantiene el código simple.

## 6. Cómo resolví el dark mode

El dark mode se apoya en una clase `dark` sobre `document.documentElement`.

La lógica es:

1. mirar si hay tema guardado en `localStorage`
2. si no lo hay, usar `prefers-color-scheme`
3. añadir o quitar la clase `dark`
4. hacer que CSS cambie colores usando variables

Esto es mejor que cambiar estilos uno a uno por JavaScript, porque:

- CSS sigue controlando la presentación
- JS solo cambia el estado
- el sistema es más limpio

## 7. Cómo resolví los enlaces

Aquí había una parte importante de lógica.

No todos los enlaces deben abrirse igual:

- anchors internos como `#contact` deben quedarse en la misma pestaña
- rutas internas como `/case-study/campin/` deben comportarse como navegación del sitio
- enlaces externos reales como GitHub o LinkedIn pueden abrirse en una nueva pestaña
- `mailto:` debe comportarse normal

La razón de separar esto es que no todos los links tienen el mismo significado.

Un enlace interno forma parte de la navegación del producto.
Un enlace externo te saca del producto.

## 8. Cómo resolví el bloque de CampIn

CampIn es el proyecto principal del portfolio, así que la lógica fue darle más peso sin convertir la home en otra app.

Por eso:

- en la home se muestra una preview visual
- hay CTAs claros
- existe una página de case study separada
- la app real va por su propia ruta

Esto deja tres niveles de profundidad:

1. home del portfolio
2. case study
3. app de CampIn

Eso es útil porque no todo visitante necesita llegar al mismo nivel de detalle.

## 9. Cómo resolví el case study

El case study se hizo como una página estática separada, no como una SPA dentro de la home.

La decisión tuvo sentido por varias razones:

- era más limpio semánticamente
- evitaba hacer la home demasiado larga
- permitía explicar el proyecto con más calma
- mantenía una navegación clara

También se decidió reutilizar el mismo estilo global del portfolio para que la página no pareciera otro producto distinto.

## 10. Qué herramientas he usado y por qué

### HTML

Se usa para la estructura semántica.

Es importante porque:

- da orden al contenido
- mejora accesibilidad básica
- hace que la página sea más entendible

### CSS

Se usa para:

- layout
- responsive
- colores
- dark mode
- cards
- botones
- tipografía

CSS aquí no es un detalle secundario: es parte clave de la experiencia visual del portfolio.

### JavaScript

Se usa para:

- cambiar idioma
- cambiar tema
- gestionar el menú mobile
- gestionar algunos enlaces
- cambiar la preview de CampIn
- renderizar contenido dinámico

La idea ha sido usar JavaScript solo donde aporta comportamiento real.

### `localStorage`

Se usa para recordar:

- idioma seleccionado
- tema seleccionado

Esto mejora la experiencia porque el usuario no tiene que volver a configurarlo en cada visita.

### Git

Se usa para versionar cambios.

Sirve para:

- guardar el historial del proyecto
- hacer commits pequeños
- poder volver atrás si algo falla
- entender cómo ha evolucionado la web

### GitHub

Se usa para:

- alojar el repositorio
- revisar cambios
- tener una copia remota
- publicar el trabajo

### Vercel

Se usa para el despliegue.

En este repo aparece también `vercel.json`, que sirve para definir reglas concretas de publicación. En este caso se usa para hacer `rewrites` de la ruta `/campin`, de forma que el portfolio pueda apuntar a la app de CampIn sin complicar la navegación.

### `vercel.json`

Sirve para configurar cómo Vercel interpreta ciertas rutas.

Aquí es útil porque:

- el portfolio vive en un sitio
- CampIn tiene una ruta propia
- las reglas de `rewrite` permiten controlar cómo se resuelven esas URLs

### `node --check`

Esta comprobación la he usado para validar la sintaxis de los archivos JS.

Sirve para comprobar algo muy concreto:

- que el archivo JavaScript no tenga errores de sintaxis

No sustituye a tests reales, pero para un proyecto estático sin test suite es una verificación útil y rápida.

## 11. Qué no se ha usado y por qué

### React

No se usa dentro de este repo.

La razón no es que React sea mala idea, sino que aquí no hacía falta. Para una web estática con interacciones pequeñas, usar React habría añadido complejidad innecesaria.

### Router

No se usa un router de SPA.

La navegación es suficiente con:

- anchors para secciones internas
- archivos HTML separados para páginas concretas

### Librerías de i18n

No se usan porque el contenido es manejable y un objeto `CONTENT` ya resuelve bien el problema.

### Tests automáticos

Ahora mismo el repo no tiene una suite de tests.

Eso significa que la verificación ha dependido sobre todo de:

- revisión manual
- comprobación de sintaxis
- validación visual

## 12. Qué intenté evitar durante la construcción

Estas han sido ideas que intenté evitar a propósito:

- duplicar contenido viejo y nuevo
- esconder cosas obsoletas con CSS o JS
- añadir herramientas solo porque “suenan profesionales”
- rehacer bloques enteros cuando bastaba con limpiar
- meter más arquitectura de la necesaria

Esto es importante porque un portfolio puede parecer sencillo por fuera, pero por dentro también debería ser sencillo.

## 13. Qué he aprendido de esta forma de construir

Lo explico de forma muy directa:

- no siempre la mejor solución es la más sofisticada
- una buena estructura evita muchos problemas después
- limpiar legacy también es desarrollo
- pensar en una sola fuente de verdad ahorra confusión
- un portfolio también necesita criterio de producto, no solo código

## 14. Si yo retomara este proyecto después

Si volviera a este repo dentro de unos meses, lo primero que miraría sería:

1. `index.html` para entender la estructura general
2. `main.js` para ver idioma, tema, links y renderizado
3. `styles.css` para el sistema visual
4. `case-study/campin/` para la página específica del proyecto
5. `vercel.json` para entender cómo se resuelve `/campin`

Ese orden me permitiría volver a entender el proyecto rápido, que es justo una de las cosas que quería conseguir con esta base limpia.

## 15. Resumen corto

La lógica de construcción de este portfolio ha sido esta:

- mantenerlo simple
- separar bien estructura, estilos y comportamiento
- usar JavaScript solo donde aporta valor real
- evitar duplicidades
- dejar una sola fuente de verdad por bloque
- priorizar claridad y mantenimiento por encima de “hacer más cosas”

Esa es, en realidad, la idea principal de todo el proceso.
