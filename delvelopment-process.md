# Delvelopment Process

## 1. Qué es este proyecto

Este repositorio contiene mi portfolio personal.

La intención desde el principio no ha sido montar una aplicación compleja, sino una web clara, ligera y fácil de mantener. Por eso la base técnica es bastante directa:

- `index.html`
- `styles.css`
- `main.js`
- carpeta `assets/`
- una página de case study en `case-study/campin/`
- `vercel.json` para la parte de despliegue

Aquí no hay React, no hay router y tampoco una arquitectura pesada. En este caso no lo veía necesario. Para lo que tenía que hacer la web, una base estática bien organizada me parecía la mejor decisión.

## 2. Qué enfoque seguí para construirlo

Mi forma de pensar este proyecto fue bastante simple: antes de hablar de herramientas o de código, tenía que tener claro qué quería comunicar.

La web debía dejar claro:

- quién soy
- en qué estoy centrado
- cuál es mi proyecto principal
- cómo trabajo
- qué stack uso
- cómo contactarme

Con eso ya definido, la estructura salió de forma bastante natural: una home de una sola página, con scroll por secciones, y una página separada para el case study de CampIn.

## 3. Por qué preferí una base pequeña

Como el portfolio no necesitaba una lógica de aplicación compleja, preferí no añadir herramientas de más.

Meter un framework solo por “hacerlo más pro” me parecía un error. Habría añadido más peso técnico, más archivos y más decisiones, sin mejorar realmente el resultado.

Por eso me quedé con una separación muy clara:

- HTML para la estructura
- CSS para el sistema visual
- JavaScript para el comportamiento

## 4. Cómo está repartido el proyecto

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

La idea es que el HTML marque la estructura real de la página, no una versión vieja que luego haya que corregir desde JavaScript.

### `styles.css`

Aquí está toda la capa visual:

- colores
- tipografía
- espaciado
- responsive
- dark mode
- estilos del case study

Que todo esté en un solo CSS no me parece un problema aquí, porque el proyecto sigue siendo pequeño y fácil de recorrer.

### `main.js`

Aquí está la lógica de la home:

- idioma ES/EN
- tema claro/oscuro
- menú mobile
- control de enlaces
- preview manual de CampIn
- render de contenido que depende del idioma

En vez de duplicar la web en dos idiomas, preferí trabajar con un objeto `CONTENT` y renderizar desde ahí lo que cambia.

### `case-study/campin/index.html` y `case-study/campin/main.js`

Aquí vive la página del case study.

La separé de la home porque CampIn ya tenía suficiente contenido como para merecer un espacio propio. Aun así, quise que siguiera respirando el mismo lenguaje visual y la misma lógica general del portfolio.

## 5. La idea de “una sola fuente de verdad”

Una de las decisiones más importantes fue evitar que el proyecto tuviera varias versiones del mismo contenido a la vez.

Por ejemplo, no quería esto:

- texto antiguo en HTML
- texto nuevo que JS lo pisa
- estados viejos escondidos con CSS

Eso puede funcionar a nivel visual, pero por dentro deja una base confusa.

Lo que he intentado hacer es esto:

- si algo es estable, vive limpio en HTML
- si algo depende del idioma o del estado, lo controla JS
- si algo ya no existe, se elimina

Para mí esa parte era importante, porque un portfolio también habla de cómo ordeno el trabajo por dentro.

## 6. Cómo resolví el multidioma

El multidioma se resuelve con un objeto `CONTENT` en JavaScript.

La lógica es bastante simple:

1. guardar los textos en `CONTENT.es` y `CONTENT.en`
2. mirar si ya hay un idioma guardado en `localStorage`
3. si no lo hay, usar el idioma del navegador
4. aplicar el contenido correspondiente al cargar

Me gustó esta solución porque:

- evita duplicar páginas
- no necesita una librería extra
- hace que editar el contenido sea bastante sencillo

Para un portfolio de este tamaño, me parece una solución suficiente y limpia.

## 7. Cómo resolví el dark mode

El dark mode se apoya en una clase `dark` sobre `document.documentElement`.

La lógica es:

1. leer si hay un tema guardado en `localStorage`
2. si no lo hay, usar `prefers-color-scheme`
3. aplicar o quitar la clase `dark`
4. dejar que CSS haga el resto con variables

Me parecía la forma más ordenada de hacerlo, porque JavaScript solo gestiona el estado y CSS sigue controlando la presentación.

## 8. Cómo traté los enlaces

Aquí sí quise tener un poco de criterio, porque no todos los enlaces significan lo mismo.

No es lo mismo:

- un anchor interno como `#contact`
- una ruta interna como `/case-study/campin/`
- un enlace externo como GitHub o LinkedIn
- un `mailto:`

La lógica final distingue entre navegación interna y salida real del sitio. Eso me parecía importante para que la experiencia tenga sentido y no se comporte todo igual por inercia.

## 9. Cómo enfoqué el bloque de CampIn

CampIn es el proyecto con más peso dentro del portfolio, así que la home tenía que reflejarlo sin convertirse en otra aplicación metida dentro.

Por eso la solución fue esta:

- mostrar una preview real del proyecto
- dejar CTAs claros
- tener una página de case study aparte
- mantener la app real en su propia ruta

Así el recorrido queda más natural:

1. primero ves el portfolio
2. luego puedes entrar al case study
3. y si quieres, ya vas a la app

## 10. Por qué el case study va separado

El case study de CampIn no lo quise meter dentro de la home porque habría alargado demasiado la página y habría mezclado dos niveles de lectura distintos.

La home tiene que presentar.
El case study tiene que explicar.

Separarlo me permitió:

- mantener la home más limpia
- dar contexto real al proyecto
- explicar decisiones sin saturar la portada
- conservar una navegación clara

## 11. Herramientas que he usado y por qué

### HTML

Lo uso para la estructura semántica de la web.

Es la base para que el contenido tenga orden y para que la página se entienda bien tanto visualmente como a nivel de accesibilidad básica.

### CSS

Lo uso para toda la parte visual:

- layout
- responsive
- colores
- dark mode
- cards
- botones
- espaciado

En este proyecto CSS tiene bastante peso, porque gran parte del resultado depende de que la lectura y la jerarquía visual estén bien resueltas.

### JavaScript

Lo uso solo para lo que realmente necesita comportamiento:

- cambiar idioma
- cambiar tema
- abrir y cerrar el menú mobile
- gestionar enlaces
- controlar la preview de CampIn
- renderizar contenido que depende del idioma

He intentado no usar JavaScript para cosas que realmente pertenecen a HTML o CSS.

### `localStorage`

Lo uso para recordar:

- idioma seleccionado
- tema seleccionado

Es un detalle pequeño, pero mejora bastante la experiencia porque la web conserva la preferencia del usuario entre visitas.

### Git

Lo uso para versionar el proyecto.

Me sirve para:

- trabajar por cambios pequeños
- guardar el historial
- volver atrás si algo no sale bien
- entender mejor cómo evoluciona la web

### GitHub

Lo uso como repositorio remoto y como referencia de seguimiento del proyecto.

También me sirve para revisar cambios publicados y tener una versión accesible desde fuera del entorno local.

### Vercel

Lo uso para el despliegue.

En este proyecto es importante porque el portfolio y CampIn conviven dentro de una misma idea de navegación, y `vercel.json` ayuda a resolver esa parte de rutas.

### `vercel.json`

Este archivo sirve para definir reglas concretas de publicación en Vercel.

En este caso lo uso para gestionar la ruta `/campin` y hacer que el portfolio pueda apuntar a la app de CampIn de forma limpia, sin añadir una estructura más compleja dentro del propio repo.

### `node --check`

Lo he usado como comprobación rápida para validar la sintaxis de los archivos JS.

No sustituye a una suite de tests, pero en un proyecto estático como este es una forma útil de comprobar que no he roto la sintaxis al tocar `main.js` o el JS del case study.

## 12. Qué he preferido no usar

### React

No lo he usado dentro de este repo porque aquí no me aportaba una ventaja real.

Para una web estática con interacciones pequeñas, me parecía mejor mantener una base simple antes que sumar complejidad porque sí.

### Router

Tampoco he usado un router de SPA.

La navegación se resuelve bien con:

- anchors para secciones internas
- archivos HTML separados para páginas concretas

### Librerías de i18n

No las he usado porque el volumen de contenido todavía es manejable y el objeto `CONTENT` cubre bien esa necesidad.

### Tests automáticos

Ahora mismo el repo no tiene una suite de tests.

Eso hace que la validación dependa sobre todo de:

- revisión manual
- comprobación de sintaxis
- revisión visual

## 13. Cosas que intenté evitar

Durante la construcción intenté evitar sobre todo esto:

- duplicar contenido viejo y nuevo
- esconder cosas obsoletas con CSS o JS
- meter herramientas solo por aparentar más complejidad
- rehacer bloques enteros cuando bastaba con ordenarlos mejor
- añadir arquitectura sin necesidad real

Para mí, en un portfolio eso importa bastante. No solo por limpieza, sino porque también refleja criterio.

## 14. Qué me llevo de este proceso

Si tengo que resumir lo aprendido, diría esto:

- no siempre la mejor solución es la más sofisticada
- una base clara ahorra muchos problemas después
- limpiar legacy también forma parte del desarrollo
- pensar en una sola fuente de verdad ayuda mucho
- un portfolio no es solo diseño o código: también es estructura y criterio

## 15. Si retomara este proyecto más adelante

Si volviera a este repo dentro de unos meses, el orden que seguiría para entenderlo rápido sería:

1. `index.html` para ver la estructura de la home
2. `main.js` para revisar idioma, tema, enlaces y comportamiento
3. `styles.css` para entender el sistema visual
4. `case-study/campin/` para revisar la página del case study
5. `vercel.json` para ver cómo se resuelve la parte de rutas

Ese orden me parece útil porque va de lo general a lo concreto.

## 16. Resumen final

La lógica general con la que he construido este portfolio ha sido bastante clara:

- mantener la base simple
- separar bien estructura, estilos y comportamiento
- usar JavaScript solo cuando aporta algo real
- evitar duplicidades
- dejar una sola fuente de verdad por bloque
- priorizar claridad y mantenimiento por encima de complejidad innecesaria

En el fondo, esa es la idea principal de todo el proyecto.
