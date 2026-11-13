---
tipo: log
estado: vigente
creado: 2026-10-29
actualizado: 2026-10-29
tags: [log]
fuentes: ["AGENTS.md", "DOC/", "package.json"]
---

# Registro cronológico

## [2026-10-29] inicio | Inspección y memoria del proyecto
- Identificada la landing React/TypeScript/Vite, el ZIP original y un árbol de código extraído con estructura coincidente.
- Registrados materiales recibidos en `DOC/`; leídos tres DOCX y vistas cinco imágenes. El PDF no pudo abrirse con herramientas locales disponibles.
- Registradas discrepancias de teléfonos, sedes, certificaciones, trayectoria y visión; no se modificó el contenido visible por falta de confirmación.
- Añadidos `AGENTS.md`, la wiki inicial y reglas Git para mantener materiales empresariales fuera de versiones compartibles.
- El PDF de portafolio se pudo revisar con las herramientas incluidas; se detectaron NIT distinto y certificados vencidos en 2017. Los datos de contactos personales no se guardaron en la wiki.
- Se inicializó Git local. npm detectó el conflicto de peer `esbuild`/Vite; se ajustó `esbuild` a `^0.28.0` y queda reintentar instalación.
- Comparado el ZIP sin extraer: 33 rutas seguras, sin faltantes; solo `.gitignore` y `package.json` difieren tras los cambios de esta sesión. Hashes confirman duplicados exactos de los dos PDF y dos fotos de Canal Alamosa.
- La dependencia directa `esbuild` se ajustó a `^0.28.0` para satisfacer el peer de Vite 8. npm generó `package-lock.json`, pero la instalación de reparación quedó incompleta; build falla por archivo ausente de Rolldown y lint por declaraciones de tipos ausentes del plugin Tailwind.
- No se inició servidor ni se revisó visualmente la página web. Se prepararon en Git solo los 11 archivos de esta tarea mediante una excepción de seguridad limitada al comando. No se hizo commit porque falta autor local.

## [2026-10-29] ejecución local | Instalación, build y disponibilidad
- Se actualizó `esbuild` a `^0.28.0` para resolver el conflicto de peer con Vite 8. npm generó `package-lock.json`; se repararon dos paquetes locales que habían quedado incompletos.
- `npm run build` y `npm run lint` finalizaron correctamente. Build conserva una advertencia de Vite sobre `__dirname`.
- Se inició el servidor Vite en `http://127.0.0.1:3000/`. La página, `src/main.tsx` y la imagen principal respondieron HTTP 200.
- La herramienta de control visual agotó el tiempo de espera; no se declara revisión visual ni funcional de los clics. No se cambió el contenido visual de la landing.

## [2026-10-29] imágenes | Portada y perfil corporativo
- Copiadas las imágenes seleccionadas desde la foto empresarial adjunta y la carpeta `DOC/`; hashes de las copias coinciden con sus fuentes.
- La foto de empresa quedó en la portada y la foto del equipo en el panel del perfil corporativo “Nosotros”. Se conservaron intactos los originales y se actualizó [[documentos-y-activos]].
- `npm run build` y `npm run lint` pasan; ambas imágenes aparecen en `dist/assets/` y responden HTTP 200 en la vista local. Sigue pendiente la revisión visual de escritorio y móvil.

## [2026-10-29] corrección de datos | Sedes, contactos y portafolio
- Actualizadas las sedes visibles a Valledupar, La Loma y Bosconia, Cesar; retirado el teléfono móvil alterno del sitio.
- Quitadas las afirmaciones sobre Claro/Comcel y Aerocivil/concesiones, así como tarjetas de proyectos que atribuían obras a concesionarias y los nombres de esas entidades en clientes.
- Quitada del uso web la foto heredada que mostraba CivilTech y eliminada la oferta de materiales pétreos y el bloque “Solución Complementaria”.
- Recortada la copia técnica de la foto empresarial para excluir los avisos con teléfonos; original preservado.
- `npm run build` y `npm run lint` pasaron; Vite dejó la advertencia no bloqueante existente sobre `__dirname`.
- La portada local respondió HTTP 200. La revisión visual de escritorio/móvil sigue pendiente.

## [2026-10-29] portada | Cambio de foto principal
- Tras la indicación del usuario de que no le gustaba la foto de oficina, se revisaron visualmente las fotos de obra disponibles en `DOC/`.
- Se seleccionó `DOC/FOTO 1 CANAL ALAMOSA.jpeg` por mostrar una cuadrilla, maquinaria y trabajo de canal en formato horizontal; se copió sin cambios a `src/assets/images/canal-alamosa-obra.jpeg` y se actualizó la portada.
- `npm run build` y `npm run lint` pasaron; el build conservó la advertencia conocida no bloqueante sobre `__dirname`.
- La portada local y la nueva imagen respondieron HTTP 200. Sigue pendiente la revisión visual en escritorio y móvil.

## [2026-11-13] ingesta | Fotos/videos de WhatsApp y Plan de Mejoras
- Nueva sesión: se leyeron AGENTS.md, índice, estado y pendientes. Aparecieron 3 imágenes y 3 videos de WhatsApp en `DOC/` y la carpeta `Plan de Mejoras/` (fuera de `DOC/`, sin versionar).
- Imágenes vistas y catalogadas en [[documentos-y-activos]]; las tres parecen composiciones y su autenticidad queda pendiente. Videos sin reproducir. La gráfica de Canal Alamosa trae el NIT `900302280-2`, lo que respalda al del código (sin confirmar).
- Confirmados por SHA-256 dos duplicados exactos más (soldadura y placas Prodeco).
- Del Plan de Mejoras se registraron los pendientes en [[pendientes]] (rocería/roscería, horario L–V, misión/visión 2029, logo, fotos por línea, datos para política). No se abrieron los ZIP.
- `npm run lint` y `npm run build` pasan. No se cambió el código del sitio. Vista previa visual sigue pendiente.

## [2026-11-13] respuestas de la usuaria y datos aplicados
- La usuaria respondió: NIT `900302289-2`; línea «Rocería» (limpieza y corte de maleza, poda de árboles); horario 8:00–12:00 y 2:00–5:30 p. m.; fachada y antes/después son reales.
- Se catalogaron 8 imágenes nuevas (rocería, fumigación, cuadrilla, 2 logos, láminas de vías y obras eléctricas) en [[documentos-y-activos]].
- Código: NIT corregido en 3 archivos; horario de L–V unificado a 5:30 p. m. en datos y pie de página (el pie y el contacto no coincidían). `npm run lint` y `npm run build` pasan. Sin revisión visual.
- Pendiente de este paso: sección de servicios con las 5 líneas y fotos reales (paso 4 del plan).
