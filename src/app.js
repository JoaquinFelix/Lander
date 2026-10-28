/* ==========================================================================
   Lander · lógica de la página
   Sin dependencias. Todo el contenido se renderiza desde DESARROLLOS.
   ========================================================================== */

(() => {
  "use strict";

  const STORAGE = {
    citas: "lander.citas.v1",
    interesIA: "lander.asistenteInteres.v1",
    tema: "lander.tema.v1",
  };

  const CORPORATIVO = {
    telefono: "644 413 5278",
    whatsapp: "526444135278",
    correo: "info@lander.com.mx",
  };

  /* ---------- Datos ---------- */

  const modelo = (slug, id, nombre, specs) => ({
    id,
    nombre,
    slug,
    imagen: `assets/modelos/${slug}/${id}.webp`,
    galeria: [
      `assets/modelos/${slug}/${id}-1.webp`,
      `assets/modelos/${slug}/${id}-2.webp`,
    ],
    ...specs,
  });

  const DESARROLLOS = [
    {
      slug: "santa-maria-iv",
      nombre: "Misión Santa María IV",
      ciudad: "Navojoa",
      estado: "Sonora",
      situacion: "disponible",
      telefono: "644 115 2097",
      whatsapp: "526441152097",
      direccion: "Navojoa, Sonora.",
      descripcion:
        "Fraccionamiento residencial exclusivo en Navojoa: privadas con acceso controlado, caseta de vigilancia 24 horas, parque central y áreas verdes para toda la familia.",
      amenidades: [
        "Privada y acceso controlado",
        "Caseta de vigilancia 24 h",
        "Área de juegos",
        "Parque central",
        "Pasto sintético",
        "Bardas traseras",
      ],
      modelos: [
        modelo("santa-maria-iv", "asturias", "Asturias", {
          plantas: 2, construccion: 107.51, terreno: 135, recamaras: 3,
          banos: "2 1/2", cochera: null,
          extras: ["Vestidor", "Sala", "Comedor", "Cocina", "Cuarto de lavado", "Cochera"],
        }),
        modelo("santa-maria-iv", "valencia", "Valencia", {
          plantas: 2, construccion: 70.19, terreno: null, recamaras: 2,
          banos: "1 1/2", cochera: null,
          extras: ["Sala", "Comedor", "Cocina", "Cochera"],
        }),
        modelo("santa-maria-iv", "nuevavalencia", "Nueva Valencia", {
          plantas: 2, construccion: 86.65, terreno: null, recamaras: 2,
          banos: "1 1/2", cochera: null,
          extras: ["Sala", "Comedor", "Cocina", "Estancia"],
        }),
      ],
    },
    {
      slug: "mar-de-plata",
      nombre: "Mar de Plata",
      ciudad: "Hermosillo",
      estado: "Sonora",
      situacion: "disponible",
      telefono: "662 109 9603",
      whatsapp: "526624765703",
      direccion: "Calle Las Quintas y San Pedro y San Pablo, Hermosillo, Sonora.",
      descripcion:
        "Fraccionamiento moderno en Hermosillo con amplias áreas verdes, caseta de vigilancia con acceso automatizado y una ubicación privilegiada que equilibra comodidad y conectividad.",
      amenidades: [
        "Alberca y chapoteadero",
        "Cancha de pádel",
        "Cancha de usos múltiples",
        "Área social",
        "Juegos infantiles",
        "Áreas verdes",
        "Fogata",
      ],
      modelos: [
        modelo("mar-de-plata", "cordoba", "Córdoba", {
          plantas: 2, construccion: 122.05, terreno: 135, recamaras: 3,
          banos: "2 1/2", cochera: 2,
          extras: ["Vestidor", "Recibidor", "Vestíbulo", "Cuarto de lavado"],
        }),
        modelo("mar-de-plata", "gesell", "Gesell", {
          plantas: 2, construccion: 113.76, terreno: 135, recamaras: 3,
          banos: "2 1/2", cochera: 2,
          extras: ["Vestidor", "Vestíbulo", "Cuarto de lavado"],
        }),
        modelo("mar-de-plata", "santafe", "Santa Fe", {
          plantas: 2, construccion: 106.57, terreno: 135, recamaras: 3,
          banos: "2 1/2", cochera: 2,
          extras: ["Sala", "Comedor", "Cocina"],
        }),
        modelo("mar-de-plata", "turin", "Turín", {
          plantas: 2, construccion: 139.27, terreno: 150, recamaras: 3,
          banos: "3 1/2", cochera: 2,
          extras: ["Sala", "Comedor", "Cocina", "Vestidor", "Recibidor", "Cuarto de lavado"],
        }),
        modelo("mar-de-plata", "denali", "Denali", {
          plantas: 2, construccion: 152.11, terreno: 150, recamaras: 3,
          banos: "3 1/2", cochera: 2,
          extras: ["Sala", "Comedor", "Cocina", "Vestidor", "Recibidor", "Estancia", "Cuarto de lavado"],
        }),
      ],
    },
    {
      slug: "monte-de-calabria",
      nombre: "Monte de Calabria",
      ciudad: "Hermosillo",
      estado: "Sonora",
      situacion: "vendido",
      telefono: CORPORATIVO.telefono,
      whatsapp: CORPORATIVO.whatsapp,
      direccion: "Hermosillo, Sonora.",
      descripcion:
        "Desarrollo concluido en Hermosillo. Tranquilidad, seguridad y áreas de convivencia para disfrutar el entorno.",
      amenidades: [],
      modelos: [],
    },
    {
      slug: "san-marino-hermosillo",
      nombre: "San Marino Hermosillo",
      ciudad: "Hermosillo",
      estado: "Sonora",
      situacion: "vendido",
      telefono: CORPORATIVO.telefono,
      whatsapp: CORPORATIVO.whatsapp,
      direccion: "Hermosillo, Sonora.",
      descripcion:
        "Comunidad consolidada en Hermosillo. Un desarrollo entregado que sigue creciendo en plusvalía.",
      amenidades: [],
      modelos: [],
    },
    {
      slug: "san-marino-obregon",
      nombre: "San Marino",
      ciudad: "Cd. Obregón",
      estado: "Sonora",
      situacion: "disponible",
      telefono: "644 192 2299",
      whatsapp: "526441922299",
      direccion: "Cd. Obregón, Sonora.",
      descripcion:
        "Diseños arquitectónicos con belleza y funcionalidad, pensados para dar tranquilidad, seguridad y relajación a tu familia, con áreas de convivencia para disfrutar el entorno.",
      amenidades: [
        "Alberca",
        "Cancha de usos múltiples",
        "Área social",
        "Juegos infantiles",
        "Áreas verdes",
        "Fogata",
      ],
      modelos: [
        modelo("san-marino-obregon", "cantabria", "Cantabria", {
          plantas: 2, construccion: 126.89, terreno: 135, recamaras: 3,
          banos: "2 1/2", cochera: 2,
          extras: ["Vestidor", "Vestíbulo", "Cuarto de lavado"],
        }),
        modelo("san-marino-obregon", "palermo", "Palermo", {
          plantas: 2, construccion: 128.26, terreno: 135, recamaras: 3,
          banos: "2 1/2", cochera: 2,
          extras: ["Vestidor", "Vestíbulo", "Cuarto de lavado"],
        }),
        modelo("san-marino-obregon", "sanfrancisco", "San Francisco", {
          plantas: 2, construccion: 142.91, terreno: 180, recamaras: 3,
          banos: "2 1/2", cochera: 2,
          extras: ["Vestidor", "Vestíbulo", "Cuarto de lavado"],
        }),
      ],
    },
    {
      slug: "mision-del-prado",
      nombre: "Misión del Prado",
      ciudad: "Cd. Obregón",
      estado: "Sonora",
      situacion: "disponible",
      telefono: "644 688 5133",
      whatsapp: "526441959507",
      direccion: "Cd. Obregón, Sonora.",
      descripcion:
        "Comunidad con ambiente familiar, áreas deportivas y centro cultural. Reciclamos el agua que usas y conservamos parques con árboles transplantados.",
      amenidades: [
        "Fuentes de trabajo cercanas",
        "Ambiente familiar",
        "Reciclaje de agua",
        "Áreas deportivas",
        "Centro cultural",
        "Parques con árboles transplantados",
      ],
      modelos: [
        modelo("mision-del-prado", "asturias", "Asturias", {
          plantas: 2, construccion: 107.51, terreno: 135, recamaras: 3,
          banos: "2 1/2", cochera: 2,
          extras: ["Vestidor", "Sala", "Comedor", "Cocina", "Cuarto de lavado"],
        }),
        modelo("mision-del-prado", "valencia", "Valencia", {
          plantas: 2, construccion: 73.52, terreno: null, recamaras: 2,
          banos: "1 1/2", cochera: null,
          extras: ["Sala-comedor"],
        }),
        modelo("mision-del-prado", "nuevavalencia", "Nueva Valencia Plus", {
          plantas: 2, construccion: 87.68, terreno: null, recamaras: 2,
          banos: 2, cochera: null,
          extras: ["Sala", "Comedor", "Cocina", "Estancia"],
        }),
        modelo("mision-del-prado", "aranza", "Aranza", {
          plantas: 1, construccion: 64.78, terreno: null, recamaras: 3,
          banos: "1 1/2", cochera: null,
          extras: ["Sala-comedor", "Cocina"],
        }),
        modelo("mision-del-prado", "vizcaya", "Vizcaya", {
          plantas: 1, construccion: 46.64, terreno: null, recamaras: 2,
          banos: 1, cochera: null,
          extras: ["Sala-comedor", "Cocina"],
        }),
      ],
    },
    {
      slug: "las-misiones",
      nombre: "Las Misiones",
      ciudad: "Cd. Obregón",
      estado: "Sonora",
      situacion: "vendido",
      telefono: CORPORATIVO.telefono,
      whatsapp: CORPORATIVO.whatsapp,
      direccion: "Cd. Obregón, Sonora.",
      descripcion:
        "Uno de nuestros desarrollos más representativos en Cd. Obregón, hoy completamente vendido.",
      amenidades: [],
      modelos: [],
    },
  ];

  const ACTIVOS = DESARROLLOS.filter((d) => d.situacion === "disponible");

  /* ---------- Helpers ---------- */

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const nf = new Intl.NumberFormat("es-MX", { maximumFractionDigits: 2 });

  const m2 = (valor) => (valor ? `${nf.format(valor)} m²` : "—");

  const porSlug = (slug) => DESARROLLOS.find((d) => d.slug === slug);

  const icono = (id) =>
    `<svg class="icon" aria-hidden="true"><use href="#${id}"></use></svg>`;

  const soloDigitos = (texto) => String(texto || "").replace(/\D/g, "");

  function guardar(clave, registro) {
    try {
      const crudo = localStorage.getItem(clave);
      const previos = crudo ? JSON.parse(crudo) : [];
      const lista = Array.isArray(previos) ? previos : [];
      lista.push(registro);
      localStorage.setItem(clave, JSON.stringify(lista));
      return true;
    } catch {
      return false;
    }
  }

  function fechaLocalISO(fecha = new Date()) {
    const offset = fecha.getTimezoneOffset() * 60000;
    return new Date(fecha.getTime() - offset).toISOString().slice(0, 10);
  }

  function formatearFecha(iso) {
    if (!iso) return "";
    const [anio, mes, dia] = iso.split("-");
    return `${dia}/${mes}/${anio}`;
  }

  function enlaceWhatsApp(dev, texto) {
    const numero = dev ? dev.whatsapp : CORPORATIVO.whatsapp;
    return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  }

  /* ---------- Reel con flechas laterales ---------- */

  /* Enlaza un carril horizontal con sus flechas laterales: avance por grupos de
     fichas, snap al inicio y estado deshabilitado en los extremos. Devuelve la
     función que recalcula el estado, para volver a llamarla al repintar. */
  function conectarReel({ track, prev, next, porGrupo = 4 }) {
    const refrescar = () => {
      if (!track || !prev || !next) return;
      /* El snap de la primera ficha reposa sobre el padding del track, no en 0. */
      const margen = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      const max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= margen;
      next.disabled = track.scrollLeft >= max;
    };

    if (!track || !prev || !next) return refrescar;

    const desplazar = (grupos) => {
      const fichas = Array.from(track.children);
      if (!fichas.length) return;
      const inicio = track.getBoundingClientRect().left;
      const actual = fichas.reduce(
        (i, f, n) =>
          Math.abs(f.getBoundingClientRect().left - inicio) <
          Math.abs(fichas[i].getBoundingClientRect().left - inicio)
            ? n
            : i,
        0
      );
      const destino = Math.min(
        Math.max(actual + grupos * porGrupo, 0),
        fichas.length - 1
      );
      const alineada = fichas[destino].getBoundingClientRect().left - inicio;
      track.scrollBy({ left: alineada, behavior: "smooth" });
    };

    prev.addEventListener("click", () => desplazar(-1));
    next.addEventListener("click", () => desplazar(1));
    track.addEventListener("scroll", refrescar, { passive: true });
    window.addEventListener("resize", refrescar);
    refrescar();

    return refrescar;
  }

  /* ---------- Hero ---------- */

  function iniciarHero() {
    const slides = $$(".hero__slide");
    const dotsWrap = $("#hero-dots");
    if (!slides.length || !dotsWrap) return;

    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let actual = 0;
    let temporizador = null;

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Ir a la imagen ${i + 1} de ${slides.length}`);
      dot.setAttribute("aria-current", i === 0 ? "true" : "false");
      dot.addEventListener("click", () => {
        mostrar(i);
        reiniciar();
      });
      dotsWrap.appendChild(dot);
    });

    const dots = $$("button", dotsWrap);

    function mostrar(indice) {
      actual = (indice + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const activo = i === actual;
        slide.classList.toggle("is-active", activo);
        slide.setAttribute("aria-hidden", activo ? "false" : "true");
      });
      dots.forEach((dot, i) => dot.setAttribute("aria-current", i === actual ? "true" : "false"));
    }

    function iniciar() {
      if (reducido) return;
      detener();
      temporizador = window.setInterval(() => mostrar(actual + 1), 7000);
    }

    function detener() {
      if (temporizador) window.clearInterval(temporizador);
      temporizador = null;
    }

    function reiniciar() {
      detener();
      iniciar();
    }

    $("#hero-prev")?.addEventListener("click", () => {
      mostrar(actual - 1);
      reiniciar();
    });
    $("#hero-next")?.addEventListener("click", () => {
      mostrar(actual + 1);
      reiniciar();
    });

    const hero = $(".hero");
    hero?.addEventListener("mouseenter", detener);
    hero?.addEventListener("mouseleave", iniciar);
    hero?.addEventListener("focusin", detener);
    hero?.addEventListener("focusout", iniciar);
    hero?.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        mostrar(actual + 1);
        reiniciar();
      }
      if (e.key === "ArrowLeft") {
        mostrar(actual - 1);
        reiniciar();
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) detener();
      else iniciar();
    });

    mostrar(0);
    iniciar();
  }

  /* ---------- Tarjetas de desarrollo ---------- */

  function tarjetaDesarrollo(dev) {
    const vendido = dev.situacion === "vendido";
    const etiqueta = vendido ? "Vendido" : "Disponible";
    const claseBadge = vendido ? "badge badge--sold" : "badge";

    const tags = dev.amenidades
      .slice(0, 3)
      .map((a) => `<li class="tag">${a}</li>`)
      .join("");

    const accion = vendido
      ? '<span class="link-arrow link-arrow--muted">Proyecto concluido</span>'
      : `<button class="link-arrow" type="button" data-ver-modelos="${dev.slug}">
           Ver modelos ${icono("ico-arrow-right")}
         </button>`;

    return `
      <li class="dev-card">
        <div class="dev-card__media">
          <img src="assets/desarrollos/${dev.slug}.webp" alt="Desarrollo ${dev.nombre} en ${dev.ciudad}" loading="lazy" decoding="async" width="640" height="480">
          <span class="${claseBadge}">${etiqueta}</span>
        </div>
        <div class="dev-card__body">
          <p class="dev-card__place">${icono("ico-pin")} ${dev.ciudad} · ${dev.estado}</p>
          <h3>${dev.nombre}</h3>
          <p class="dev-card__desc">${dev.descripcion}</p>
          ${tags ? `<ul class="tags">${tags}</ul>` : ""}
          <div class="dev-card__footer">
            <span class="dev-card__models">${vendido ? "20 años de trayectoria" : `${dev.modelos.length} modelos`}</span>
            ${accion}
          </div>
        </div>
      </li>`;
  }

  function iniciarDesarrollos() {
    const track = $("#track-desarrollos");
    const chipsWrap = $("#chips-ciudad");
    if (!track || !chipsWrap) return;

    const status = $("#desarrollos-status");
    let filtroActual = "todos";
    let actualizarFlechas = () => {};

    const ciudades = [...new Set(DESARROLLOS.map((d) => d.ciudad))];
    const filtros = [
      { valor: "todos", texto: `Todos (${DESARROLLOS.length})` },
      ...ciudades.map((ciudad) => ({
        valor: ciudad,
        texto: `${ciudad} (${DESARROLLOS.filter((d) => d.ciudad === ciudad).length})`,
      })),
      {
        valor: "vendidos",
        texto: `Vendidos (${DESARROLLOS.filter((d) => d.situacion === "vendido").length})`,
      },
    ];

    chipsWrap.innerHTML = filtros
      .map(
        (f, i) =>
          `<button class="chip" type="button" data-filtro="${f.valor}" aria-pressed="${i === 0}">${f.texto}</button>`
      )
      .join("");

    /* Pinta todo el resultado del filtro en el carril y lo devuelve al inicio. */
    function pintar() {
      const lista = DESARROLLOS.filter((dev) => {
        if (filtroActual === "todos") return true;
        if (filtroActual === "vendidos") return dev.situacion === "vendido";
        return dev.ciudad === filtroActual;
      });

      track.innerHTML = lista.map(tarjetaDesarrollo).join("");
      if (status) {
        status.textContent = `Mostrando ${lista.length} ${
          lista.length === 1 ? "desarrollo" : "desarrollos"
        }.`;
      }
      track.scrollTo({ left: 0, behavior: "auto" });
      actualizarFlechas();
    }

    chipsWrap.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-filtro]");
      if (!chip) return;
      $$(".chip", chipsWrap).forEach((c) =>
        c.setAttribute("aria-pressed", c === chip ? "true" : "false")
      );
      filtroActual = chip.dataset.filtro;
      pintar();
    });

    actualizarFlechas = conectarReel({
      track,
      prev: $("#desarrollos-prev"),
      next: $("#desarrollos-next"),
    });

    track.addEventListener("click", (e) => {
      const boton = e.target.closest("[data-ver-modelos]");
      if (!boton) return;
      seleccionarDesarrollo(boton.dataset.verModelos);
      $("#modelos")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    pintar();
  }

  /* ---------- Catálogo de modelos ---------- */

  let desarrolloActivo = ACTIVOS[0].slug;

  function especificaciones(modeloActual) {
    const specs = [
      { icono: "ico-ruler", texto: m2(modeloActual.construccion) },
      { icono: "ico-home", texto: modeloActual.plantas ? `${modeloActual.plantas} ${modeloActual.plantas === 1 ? "planta" : "plantas"}` : "—" },
      { icono: "ico-bed", texto: `${modeloActual.recamaras} recámaras` },
    ];
    if (modeloActual.banos) {
      specs.push({ icono: "ico-bath", texto: `${modeloActual.banos} baños` });
    }
    if (modeloActual.cochera) {
      specs.push({ icono: "ico-car", texto: `Cochera ${modeloActual.cochera}` });
    }
    return specs;
  }

  function tarjetaModelo(dev, m) {
    const specs = especificaciones(m)
      .map((s) => `<li>${icono(s.icono)} ${s.texto}</li>`)
      .join("");

    return `
      <li class="model-card">
        <div class="model-card__media">
          <img src="${m.imagen}" alt="Modelo ${m.nombre} de ${dev.nombre}" loading="lazy" decoding="async" width="640" height="440">
          <span class="model-card__dev">${dev.nombre}</span>
        </div>
        <div class="model-card__body">
          <div class="model-card__top">
            <h3>${m.nombre}</h3>
            <p class="model-card__price">Precio a consultar<span>Según crédito</span></p>
          </div>
          <ul class="specs">${specs}</ul>
          <div class="model-card__actions">
            <button class="btn btn--outline" type="button" data-ficha="${dev.slug}:${m.id}">Ver ficha</button>
            <button class="btn btn--primary" type="button" data-agendar="${dev.slug}:${m.id}">Agendar</button>
          </div>
        </div>
      </li>`;
  }

  function iniciarModelos() {
    const tabsWrap = $("#tabs-desarrollo");
    const track = $("#track-modelos");
    const status = $("#modelos-status");
    if (!tabsWrap || !track) return;

    const tabs = [
      { slug: "todos", nombre: "Todos", total: ACTIVOS.reduce((n, d) => n + d.modelos.length, 0) },
      ...ACTIVOS.map((d) => ({ slug: d.slug, nombre: d.nombre, total: d.modelos.length })),
    ];

    tabsWrap.innerHTML = tabs
      .map(
        (t) => `
        <button class="tab" type="button" data-dev="${t.slug}"
          aria-pressed="${t.slug === desarrolloActivo ? "true" : "false"}"
          aria-controls="track-modelos">
          ${t.nombre}<small>${t.total} ${t.total === 1 ? "modelo" : "modelos"}</small>
        </button>`
      )
      .join("");

    function pintar() {
      const desarrollos =
        desarrolloActivo === "todos" ? ACTIVOS : [porSlug(desarrolloActivo)].filter(Boolean);

      const tarjetas = desarrollos.flatMap((dev) =>
        dev.modelos.map((m) => tarjetaModelo(dev, m))
      );

      track.innerHTML = tarjetas.join("");
      const total = desarrollos.reduce((n, d) => n + d.modelos.length, 0);
      if (status) {
        status.textContent = `Mostrando ${total} ${total === 1 ? "modelo" : "modelos"}${
          desarrolloActivo === "todos" ? " de nuestros desarrollos activos" : ` de ${porSlug(desarrolloActivo)?.nombre}`
        }.`;
      }
      track.scrollTo({ left: 0, behavior: "auto" });
      actualizarFlechas();
    }

    /* Las flechas del carrusel las maneja el reel compartido; aquí solo se
       recalculan al repintar. */
    const actualizarFlechas = conectarReel({
      track,
      prev: $("#modelos-prev"),
      next: $("#modelos-next"),
    });

    function activarTab(slug) {
      desarrolloActivo = slug;
      $$(".tab", tabsWrap).forEach((t) =>
        t.setAttribute("aria-pressed", t.dataset.dev === slug ? "true" : "false")
      );
      pintar();
    }

    tabsWrap.addEventListener("click", (e) => {
      const tab = e.target.closest("[data-dev]");
      if (tab) activarTab(tab.dataset.dev);
    });

    tabsWrap.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const lista = $$(".tab", tabsWrap);
      const actual = lista.findIndex((t) => t.getAttribute("aria-pressed") === "true");
      const siguiente = (actual + (e.key === "ArrowRight" ? 1 : -1) + lista.length) % lista.length;
      lista[siguiente].focus();
      activarTab(lista[siguiente].dataset.dev);
    });

    track.addEventListener("click", (e) => {
      const ficha = e.target.closest("[data-ficha]");
      if (ficha) {
        const [slug, id] = ficha.dataset.ficha.split(":");
        abrirFicha(slug, id);
        return;
      }
      const agendar = e.target.closest("[data-agendar]");
      if (agendar) {
        const [slug, id] = agendar.dataset.agendar.split(":");
        prefillCita(slug, id);
      }
    });

    pintar();
  }

  function seleccionarDesarrollo(slug) {
    const tab = $(`.tab[data-dev="${slug}"]`);
    if (tab) tab.click();
  }

  /* ---------- Ficha técnica ---------- */

  function abrirFicha(slug, id) {
    const dev = porSlug(slug);
    const m = dev?.modelos.find((x) => x.id === id);
    const dialog = $("#ficha-modelo");
    if (!dev || !m || !dialog) return;

    const specs = [
      ["Construcción", m2(m.construccion)],
      ["Terreno", m.terreno ? m2(m.terreno) : "A consultar"],
      ["Plantas", m.plantas === 1 ? "1 planta" : `${m.plantas} plantas`],
      ["Recámaras", m.recamaras],
      ["Baños", m.banos ?? "—"],
      ["Cochera", m.cochera ? `${m.cochera} autos` : "A consultar"],
    ];

    const mensaje = `Hola, me interesa el modelo ${m.nombre} de ${dev.nombre}. ¿Me pueden compartir precio y disponibilidad?`;

    dialog.innerHTML = `
      <div class="modal__head">
        <div>
          <h2 id="ficha-titulo">Modelo ${m.nombre}</h2>
          <p>${dev.nombre} · ${dev.ciudad}, ${dev.estado}</p>
        </div>
        <button class="icon-btn" type="button" data-cerrar-ficha aria-label="Cerrar ficha">
          ${icono("ico-close")}
        </button>
      </div>
      <div class="modal__body">
        <div>
          <figure class="modal__media">
            <img src="${m.galeria[0]}" alt="Fachada del modelo ${m.nombre}" loading="lazy" decoding="async">
            <figcaption>Fachada</figcaption>
          </figure>
          <figure class="modal__media">
            <img src="${m.galeria[1]}" alt="Planta arquitectónica del modelo ${m.nombre}" loading="lazy" decoding="async">
            <figcaption>Planta arquitectónica</figcaption>
          </figure>
        </div>
        <div>
          <div class="modal__price">
            <span>Precio</span>
            <strong>A consultar</strong>
          </div>
          <dl class="spec-grid">
            ${specs
              .map(
                ([etiqueta, valor]) =>
                  `<div><dt>${etiqueta}</dt><dd>${valor}</dd></div>`
              )
              .join("")}
          </dl>
          <ul class="extras">
            ${m.extras.map((x) => `<li class="tag">${x}</li>`).join("")}
          </ul>
          <div class="modal__actions">
            <a class="btn btn--primary" href="${enlaceWhatsApp(dev, mensaje)}" target="_blank" rel="noopener">
              ${icono("ico-whatsapp")} Preguntar por WhatsApp
            </a>
            <button class="btn btn--outline" type="button" data-agendar-ficha="${dev.slug}:${m.id}">
              ${icono("ico-calendar")} Agendar visita
            </button>
          </div>
          <p class="form__note" style="text-align:left;margin-top:16px">
            Precio y disponibilidad sujetos a cambio. Imágenes ilustrativas.
          </p>
        </div>
      </div>`;

    dialog.showModal();

    $("[data-cerrar-ficha]", dialog)?.addEventListener("click", () => dialog.close());
    $("[data-agendar-ficha]", dialog)?.addEventListener("click", (e) => {
      const [devSlug, modelId] = e.currentTarget.dataset.agendarFicha.split(":");
      dialog.close();
      prefillCita(devSlug, modelId);
    });
  }

  /* ---------- Buscador ---------- */

  function iniciarBuscador() {
    const estado = $("#filtro-estado");
    const dev = $("#filtro-desarrollo");
    const mod = $("#filtro-modelo");
    const form = $("#buscador");
    const resultado = $("#finder-resultado");
    if (!estado || !dev || !mod || !form || !resultado) return;

    const estados = [...new Set(ACTIVOS.map((d) => d.estado))];
    estado.innerHTML =
      '<option value="">Todos los estados</option>' +
      estados.map((e) => `<option value="${e}">${e}</option>`).join("");

    function llenarDesarrollos(filtroEstado) {
      const lista = ACTIVOS.filter((d) => !filtroEstado || d.estado === filtroEstado);
      dev.innerHTML =
        '<option value="">Todos los desarrollos</option>' +
        lista.map((d) => `<option value="${d.slug}">${d.nombre} · ${d.ciudad}</option>`).join("");
      llenarModelos("");
    }

    function llenarModelos(slug) {
      const lista = slug ? [porSlug(slug)].filter(Boolean) : [];
      const modelos = lista.flatMap((d) => d.modelos);
      mod.innerHTML =
        '<option value="">Todos los modelos</option>' +
        modelos.map((m) => `<option value="${m.id}">${m.nombre}</option>`).join("");
      mod.disabled = modelos.length === 0;
    }

    estado.addEventListener("change", () => llenarDesarrollos(estado.value));
    dev.addEventListener("change", () => llenarModelos(dev.value));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const coincide = ACTIVOS.filter((d) => {
        if (estado.value && d.estado !== estado.value) return false;
        if (dev.value && d.slug !== dev.value) return false;
        if (mod.value) return d.modelos.some((m) => m.id === mod.value);
        return true;
      });

      if (!coincide.length) {
        resultado.innerHTML = `<p class="finder-empty">${icono("ico-pin")} No encontramos desarrollos con esa combinación. Prueba con otro estado o contáctanos.</p>`;
        return;
      }

      const tarjetas = coincide
        .slice(0, 3)
        .map((d) => {
          const modeloSel = mod.value ? d.modelos.find((m) => m.id === mod.value) : null;
          const detalle = modeloSel
            ? `Modelo ${modeloSel.nombre} · ${m2(modeloSel.construccion)} · ${modeloSel.recamaras} recámaras`
            : `${d.modelos.length} modelos disponibles · Precio a consultar`;
          return `
            <div class="finder-card">
              <img src="assets/desarrollos/${d.slug}.webp" alt="${d.nombre}" loading="lazy" width="208" height="152">
              <div class="finder-card__info">
                <strong>${d.nombre}</strong>
                <span>${d.ciudad}, ${d.estado} · ${detalle}</span>
              </div>
              <div class="finder-card__actions">
                <button class="btn btn--outline btn--sm" type="button" data-finder-modelos="${d.slug}">Ver modelos</button>
                <button class="btn btn--primary btn--sm" type="button" data-finder-cita="${d.slug}${modeloSel ? ":" + modeloSel.id : ""}">Agendar</button>
              </div>
            </div>`;
        })
        .join("");

      const extra =
        coincide.length > 3
          ? `<p class="finder-empty">Y ${coincide.length - 3} desarrollos más. Ajusta los filtros para verlos.</p>`
          : "";

      resultado.innerHTML = tarjetas + extra;
    });

    resultado.addEventListener("click", (e) => {
      const ver = e.target.closest("[data-finder-modelos]");
      if (ver) {
        seleccionarDesarrollo(ver.dataset.finderModelos);
        $("#modelos")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const cita = e.target.closest("[data-finder-cita]");
      if (cita) {
        const [slug, id] = cita.dataset.finderCita.split(":");
        prefillCita(slug, id);
      }
    });

    llenarDesarrollos("");
  }

  /* ---------- Formulario de cita ---------- */

  function iniciarFormulario() {
    const form = $("#form-cita");
    if (!form) return;

    const nombre = $("#nombre");
    const telefono = $("#telefono");
    const correo = $("#correo");
    const devSelect = $("#cita-desarrollo");
    const modSelect = $("#cita-modelo");
    const fecha = $("#fecha");
    const horario = $("#horario");
    const privacidad = $("#privacidad");
    const exito = $("#form-exito");
    const exitoTexto = $("#form-exito-texto");

    const hoy = fechaLocalISO();
    fecha.min = hoy;

    devSelect.innerHTML =
      '<option value="">Selecciona un desarrollo</option>' +
      ACTIVOS.map((d) => `<option value="${d.slug}">${d.nombre} · ${d.ciudad}</option>`).join("");

    function llenarModelos(slug) {
      const dev = porSlug(slug);
      const modelos = dev ? dev.modelos : [];
      modSelect.innerHTML =
        '<option value="">Cualquier modelo</option>' +
        modelos.map((m) => `<option value="${m.id}">${m.nombre}</option>`).join("");
    }

    devSelect.addEventListener("change", () => llenarModelos(devSelect.value));

    const campos = [
      { clave: "nombre", campo: nombre, error: $("#error-nombre"), mensaje: "Escribe tu nombre completo (mínimo 3 letras)." },
      { clave: "telefono", campo: telefono, error: $("#error-telefono"), mensaje: "Ingresa un teléfono de 10 a 13 dígitos con lada." },
      { clave: "correo", campo: correo, error: $("#error-correo"), mensaje: "Revisa el formato del correo o déjalo vacío." },
      { clave: "desarrollo", campo: devSelect, error: $("#error-desarrollo"), mensaje: "Selecciona el desarrollo que te interesa." },
      { clave: "fecha", campo: fecha, error: $("#error-fecha"), mensaje: "Elige una fecha de hoy en adelante." },
      { clave: "horario", campo: horario, error: $("#error-horario"), mensaje: "Selecciona un horario de atención." },
      { clave: "privacidad", campo: privacidad, error: $("#error-privacidad"), mensaje: "Necesitamos tu aceptación del aviso de privacidad." },
    ];

    const validadores = {
      nombre: () => nombre.value.trim().length >= 3,
      telefono: () => {
        const digitos = soloDigitos(telefono.value);
        return digitos.length >= 10 && digitos.length <= 13;
      },
      correo: () => !correo.value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo.value.trim()),
      desarrollo: () => Boolean(devSelect.value),
      fecha: () => Boolean(fecha.value) && fecha.value >= fechaLocalISO(),
      horario: () => Boolean(horario.value),
      privacidad: () => privacidad.checked,
    };

    function marcarError(campo, error, mensaje) {
      campo.setAttribute("aria-invalid", "true");
      if (error) {
        error.textContent = mensaje;
        error.hidden = false;
      }
    }

    function limpiarError(campo, error) {
      campo.removeAttribute("aria-invalid");
      if (error) {
        error.hidden = true;
        error.textContent = "";
      }
    }

    campos.forEach(({ clave, campo, error }) => {
      const evento = campo.type === "checkbox" || campo.tagName === "SELECT" ? "change" : "input";
      campo.addEventListener(evento, () => {
        if (validadores[clave]()) limpiarError(campo, error);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let primeroInvalido = null;

      campos.forEach(({ clave, campo, error, mensaje }) => {
        if (validadores[clave]()) {
          limpiarError(campo, error);
        } else {
          marcarError(campo, error, mensaje);
          if (!primeroInvalido) primeroInvalido = campo;
        }
      });

      if (primeroInvalido) {
        primeroInvalido.focus();
        return;
      }

      const dev = porSlug(devSelect.value);
      const modeloSel = modSelect.value ? dev.modelos.find((m) => m.id === modSelect.value) : null;

      const texto = [
        `Hola, quiero agendar una visita a ${dev.nombre} (${dev.ciudad}).`,
        "",
        `Nombre: ${nombre.value.trim()}`,
        `Teléfono: ${telefono.value.trim()}`,
        correo.value.trim() ? `Correo: ${correo.value.trim()}` : "",
        `Modelo: ${modeloSel ? modeloSel.nombre : "Por definir"}`,
        `Fecha: ${formatearFecha(fecha.value)}`,
        `Horario: ${horario.value}`,
        $("#mensaje").value.trim() ? `Mensaje: ${$("#mensaje").value.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      const url = enlaceWhatsApp(dev, texto);

      guardar(STORAGE.citas, {
        nombre: nombre.value.trim(),
        telefono: telefono.value.trim(),
        correo: correo.value.trim(),
        desarrollo: dev.nombre,
        desarrolloSlug: dev.slug,
        modelo: modeloSel ? modeloSel.nombre : "",
        fecha: fecha.value,
        horario: horario.value,
        mensaje: $("#mensaje").value.trim(),
        creada: new Date().toISOString(),
      });

      // Ancla real y adjunta al DOM: conserva `noopener` y funciona también en
      // navegadores que ignoran el clic sobre elementos desconectados.
      const enlace = document.createElement("a");
      enlace.href = url;
      enlace.target = "_blank";
      enlace.rel = "noopener noreferrer";
      enlace.hidden = true;
      document.body.appendChild(enlace);
      enlace.click();
      enlace.remove();

      exito.hidden = false;
      exitoTexto.innerHTML = `Abrimos WhatsApp en una pestaña nueva con tu solicitud. Si no se abrió, <a href="${url}" target="_blank" rel="noopener noreferrer">haz clic aquí</a> para enviarla.`;
      exito.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  function prefillCita(slug, modelId) {
    const devSelect = $("#cita-desarrollo");
    const modSelect = $("#cita-modelo");
    if (!devSelect || !modSelect) return;

    devSelect.value = slug;
    devSelect.dispatchEvent(new Event("change"));
    if (modelId) modSelect.value = modelId;

    $("#cita")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => $("#nombre")?.focus({ preventScroll: true }), 500);
  }

  /* ---------- Tema claro/oscuro ---------- */

  const COLOR_META = { claro: "#A6CE3A", oscuro: "#12150F" };

  function iniciarTema() {
    const bot = $("#tema-toggle");
    if (!bot) return;

    const esOscuro = () => document.documentElement.dataset.theme === "oscuro";

    const aplicar = (oscuro) => {
      const tema = oscuro ? "oscuro" : "claro";
      document.documentElement.dataset.theme = tema;
      bot.setAttribute("aria-pressed", String(oscuro));
      bot.setAttribute(
        "aria-label",
        oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
      );
      bot.title = oscuro ? "Activar modo claro" : "Activar modo oscuro";
      const meta = $("#theme-color");
      if (meta) meta.content = COLOR_META[tema];
    };

    // El script del head ya fijo el tema inicial; solo sincroniza el botón.
    aplicar(esOscuro());

    bot.addEventListener("click", () => {
      const oscuro = !esOscuro();
      aplicar(oscuro);
      try {
        localStorage.setItem(STORAGE.tema, oscuro ? "oscuro" : "claro");
      } catch (_) {
        /* modo privado: el tema solo aplica a esta sesión */
      }
    });

    // Sigue al sistema solo mientras no haya preferencia guardada.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const seguirSistema = (e) => {
      try {
        if (localStorage.getItem(STORAGE.tema)) return;
      } catch (_) {
        return;
      }
      aplicar(e.matches);
    };
    media.addEventListener("change", seguirSistema);
  }

  /* ---------- Menú móvil ---------- */

  function iniciarMenu() {
    const boton = $("#nav-toggle");
    const nav = $("#nav-principal");
    if (!boton || !nav) return;

    const cerrar = () => {
      boton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    };

    boton.addEventListener("click", () => {
      const abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", abierto ? "false" : "true");
      nav.classList.toggle("is-open", !abierto);
    });

    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) cerrar();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        cerrar();
        boton.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) cerrar();
    });
  }

  /* ---------- Asistente IA (puerta falsa) ---------- */

  function iniciarAsistente() {
    const fab = $("#ai-fab");
    const panel = $("#ai-panel");
    const cerrar = $("#ai-close");
    const form = $("#form-ia");
    const contacto = $("#ia-contacto");
    const error = $("#error-ia");
    if (!fab || !panel) return;

    const abrir = () => {
      panel.showModal();
      fab.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    const ocultar = () => {
      panel.close();
      fab.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      fab.focus();
    };

    fab.addEventListener("click", abrir);
    cerrar?.addEventListener("click", ocultar);

    const linkWhatsApp = $("#ai-whatsapp");
    if (linkWhatsApp) {
      linkWhatsApp.href = enlaceWhatsApp(
        null,
        "Hola, quiero información sobre los desarrollos de Lander."
      );
    }
    panel.addEventListener("close", () => {
      fab.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
    panel.addEventListener("click", (e) => {
      if (e.target === panel) ocultar();
    });

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const valor = contacto.value.trim();
      const esCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor);
      const esTelefono = soloDigitos(valor).length >= 10;

      if (!esCorreo && !esTelefono) {
        contacto.setAttribute("aria-invalid", "true");
        if (error) {
          error.textContent = "Escribe un correo válido o un WhatsApp de al menos 10 dígitos.";
          error.hidden = false;
        }
        contacto.focus();
        return;
      }

      contacto.removeAttribute("aria-invalid");
      if (error) error.hidden = true;

      guardar(STORAGE.interesIA, {
        contacto: valor,
        tipo: esCorreo ? "correo" : "whatsapp",
        creado: new Date().toISOString(),
      });

      $("#ai-capture")?.classList.add("is-done");
      const exito = $("#ai-exito");
      if (exito) exito.hidden = false;
    });

    contacto?.addEventListener("input", () => {
      contacto.removeAttribute("aria-invalid");
      if (error) error.hidden = true;
    });
  }

  /* ---------- Arranque ---------- */

  function iniciar() {
    iniciarTema();
    iniciarHero();
    iniciarDesarrollos();
    iniciarModelos();
    iniciarBuscador();
    iniciarFormulario();
    iniciarMenu();
    iniciarAsistente();

    const anio = $("#anio");
    if (anio) anio.textContent = String(new Date().getFullYear());

    // Un solo listener para cerrar los diálogos con clic en el fondo.
    ["#ficha-modelo"].forEach((sel) => {
      const dialog = $(sel);
      dialog?.addEventListener("click", (e) => {
        if (e.target === dialog) dialog.close();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
