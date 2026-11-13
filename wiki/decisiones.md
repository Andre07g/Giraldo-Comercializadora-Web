---
tipo: decisiones
estado: vigente
creado: 2026-10-29
actualizado: 2026-10-29
tags: [decisiones]
fuentes: ["AGENTS.md", "DOC/", "package.json"]
---

# Decisiones

- **Confirmado — 2026-10-29:** conservar React, TypeScript y Vite; la inspección encontró una landing funcionalmente estructurada y no hay necesidad concreta de reconstruirla. Fuente: `package.json`, `src/App.tsx`.
- **Confirmado — 2026-10-29:** preservar el ZIP original y el directorio recibido `DOC/`; en Windows, `Docs` y `DOC` se resuelven a la misma carpeta, así que cambiarle el nombre movería de ruta las fuentes originales. Fuente: inspección del sistema de archivos.
- **Confirmado — 2026-10-29:** no actualizar ahora los datos visibles contradictorios (teléfonos, sedes, certificaciones, experiencia y misión/visión); registrar pendientes y solicitar confirmación cuando se elija un cambio de contenido. Fuentes: documento de sitio, documento de mejoras y `src/data/companyData.ts`.
- **Confirmado — 2026-10-29:** ignorar `DOC/` y `Docs/` en Git para evitar incorporar originales empresariales a un remoto por accidente. Fuente: instrucciones del proyecto.
- **Confirmado — 2026-10-29:** usar la foto de empresa suministrada en la portada y la foto de perfil del equipo en el bloque “Nosotros”. Se preservan los originales y se guardan copias técnicas en `src/assets/images/`. Fuente: solicitud directa del usuario.
- **Confirmado — 2026-10-29:** mostrar únicamente sedes en Valledupar, La Loma y Bosconia; retirar el teléfono personal indicado, las afirmaciones de contratos con Claro/Comcel y trabajos con Aerocivil/concesiones, además de la foto que identifica a CivilTech y la oferta de materiales pétreos. Fuente: solicitud directa del usuario.
- **Confirmado — 2026-10-29:** los proyectos atribuidos a concesionarias y los nombres de esas entidades se quitaron del portafolio y de la sección de clientes porque el usuario aclaró que la empresa no realiza proyectos de concesiones. La foto de la oficina se conserva como portada, ocultando en la copia técnica las franjas impresas de teléfonos; el original queda intacto. Fuente: solicitud directa del usuario e inspección visual de la fotografía.
- **Confirmado — 2026-10-29:** el usuario no desea la foto de oficina en la portada; se eligió la foto de la obra del canal de `DOC/FOTO 1 CANAL ALAMOSA.jpeg`, que muestra cuadrilla y maquinaria. Fuente: solicitud del usuario y revisión visual de los activos disponibles.

## 2026-11-13 · Servicios reducidos a cinco líneas
- **Decisión (confirmada, Plan de Mejoras paso 4):** la sección muestra solo metalmecánica, vías y señalización, rocería, obras eléctricas y obra civil. Se retiraron las 9 tarjetas anteriores y los bloques de maquinaria y normas, porque no tenían respaldo en fuentes.
- **Fuente de textos:** política del portafolio (`DOC/EDITV22Portafolio Gr Comercializadora ANTERIOR.pdf`) y descripción de rocería dada por la usuaria. Los textos son cortos y sin cifras.
- **Confirmado por la usuaria:** se pueden mostrar los nombres de terceros (Yuma, Navelena, Consol) y usar las láminas porque no hay fotos individuales. Logo oficial: el de NIT `900302289-2`.

## 2026-11-13 · Noticias retirada; ubicación opcional
- **Decisión (propia, reversible):** se quitó la sección Noticias porque su formulario simulaba una suscripción sin enviar datos y prometía boletines inexistentes. Fuente: revisión de `src/components/NewsSection.tsx`.
- **Confirmado por la usuaria:** no es necesario mostrar la ubicación de la vivienda; misión/visión en espera.

## 2026-11-13 · Rediseño visual: señalización vial y plano de obra
- **Motivo (usuaria):** "se ve extremadamente genérica y hecha por IA... quita esos estilos genéricos o planos". Se mantuvieron textos, fotos, logo y colores (azul `#0f2444`, rojo `#d32f2f`).
- **Decisión (propia, reversible con Git):** tipografía Barlow Condensed (títulos en mayúsculas) y Barlow (texto), de letrero vial; esquinas rectas y sombras casi nulas (variables de tema en `src/index.css`); franja diagonal roja y blanca de barrera vial entre secciones; fotos grandes y a color; sin etiquetitas sobre los títulos, sin tarjetas con íconos, sin filtros de pestañas.
- **Archivos tocados:** `src/index.css`, `index.html` (fuentes), `Hero`, `AboutSection`, `ServicesSection`, `ProjectsSection`, `ClientsSection`, `Header`, `ContactSection` (solo se quitó una etiqueta).
- **Retirado por falta de respaldo:** insignias de la portada (RUT verificado, Empresa Contratista de Éxito, SST & Calidad, "15+ años", "Público y Privado"), recuadro "Certificaciones y evaluaciones oficiales" y la línea "Plan estratégico quinquenal · vigencia 2024-2029". Ver [[pendientes]] para certificaciones.
- **Corregido:** el horario de la barra superior decía 6:00 p. m.; ahora coincide con el confirmado.
