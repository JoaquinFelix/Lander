# Lander — página de venta de fraccionamientos

La especificación funcional está en `README.md` (en español). Léela antes de
cambios de contenido o estructura; este archivo solo cubre lo que no se deduce
del código.

## Sin toolchain

- No hay `package.json`, build, tests, lint ni dependencias. Prohibido npm, CDN,
  frameworks o paso de build: la página debe abrir con doble clic en
  `src/index.html` (`file://`).
- No hay backend. Las citas se validan en cliente, se envían por `wa.me` con el
  número del desarrollo y se respaldan en `localStorage`.

## Mapa del código

- `src/index.html`: shell estático (header, hero, amenidades, galería, nosotros,
  proceso, contacto, footer), sprite SVG con los íconos `#ico-*` y los
  `<dialog>` (`#ficha-modelo`, `#ai-panel`).
- `src/app.js`: IIFE única, ~1.1k líneas. `DESARROLLOS` es la fuente de verdad y
  alimenta las tarjetas de desarrollo, chips, tabs, carrusel de modelos, ficha
  técnica y los selects del buscador y del formulario.
- `src/styles.css`: tokens en `:root`, modo oscuro vía
  `prefers-color-scheme` (no hay toggle) y mobile-first con breakpoints
  `max-width` 1024 / 900 / 640.
- `src/assets/`: copias locales del sitio actual. No enlazar imágenes remotas.

## Al agregar o editar contenido

- Todo dato comercial vive en `DESARROLLOS` (`slug`, `ciudad`, `estado`,
  `situacion: "disponible" | "vendido"`, `whatsapp` solo dígitos con lada 52,
  `amenidades`, `modelos`). `ACTIVOS` se deriva: lo marcado `disponible` aparece
  solo en buscador, tabs y formulario de cita.
- `modelo()` arma las rutas: `assets/modelos/<slug>/<id>.webp` (tarjeta),
  `<id>-1.webp` (fachada) y `<id>-2.webp` (planta). Slugs en minúsculas con
  guiones; si falta el archivo la imagen sale rota.
- Los desarrollos vendidos van sin `modelos` y sin CTA de cita: son prueba
  social.
- Ícono nuevo = `<symbol id="ico-x">` en el sprite de `index.html` +
  `icono("ico-x")` en JS.
- El hero (4 slides) y la galería (4 fotos) están escritos en el HTML, no en JS:
  cambiar esas imágenes implica editar `index.html` y `src/assets/hero|galeria`.

## Reglas que ya se rompieron una vez

- Precio siempre "Precio a consultar". No inventar cifras ni mensualidades.
- `--brand-strong` (#759423) da 3.49:1 sobre blanco: no sirve para texto
  pequeño. Para eso está `--brand-text` (#5A7617 en claro, `#A6CE3A` en oscuro).
- El logo es un lockup vertical 665×389 (1.71:1, raster dentro del SVG): se
  dimensiona por `height`, nunca por `width`. En oscuro se cambia a
  `logo-white.svg` con `<picture><source media="(prefers-color-scheme: dark)">`.
- Dots del hero, tabs y chips son botones en `role="group"` con
  `aria-pressed` / `aria-current`; el CSS depende de esos atributos, no volver a
  `role="tablist"` / `aria-selected`.
- Para ocultar bloques usa el atributo `hidden`: existe
  `[hidden] { display: none !important }` porque varios bloques tienen
  `display: flex/grid`.
- Claves de `localStorage` versionadas: `lander.citas.v1` y
  `lander.asistenteInteres.v1`. Si cambia el esquema, sube la versión.
- El "Asistente IA" es una puerta falsa a propósito: solo captura contacto y
  enlaza a WhatsApp. No implementes respuestas salvo que lo pidan.

## Verificación

- No hay suite. Abre `src/index.html` y revisa consola limpia, imágenes rotas y
  overflow horizontal en 360 / 390 / 768 / 1440; después los flujos buscador →
  ficha → cita y el panel del asistente.
- Captura sin servidor:
  `chrome --headless=new --screenshot=out.png --window-size=390,900 "file:///C:/ruta/src/index.html"`
  (Chrome está en `C:\Program Files\Google\Chrome\Application\chrome.exe`).
- Los scripts Node bajo `C:\Users\Acer` se ejecutan como ESM (`"type": "module"`
  en `C:\Users\Acer\package.json`): usa extensión `.cjs`.
