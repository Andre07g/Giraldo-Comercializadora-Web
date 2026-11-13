---
tipo: estado
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-13
tags: [proyecto, estado]
fuentes: ["package.json", "README.md", "AGENTS.md"]
---

# Estado del proyecto

## Confirmado
- La carpeta contiene una landing de Giraldo Ramírez Comercializadora Ltda. hecha con React 19, TypeScript y Vite 8, con secciones de inicio, empresa, servicios, clientes, proyectos, noticias y contacto.
- El ZIP `giraldo-ramírez-comercializadora-ltda..zip` se conserva intacto. Se validaron las 33 rutas del ZIP: ninguna sale de la carpeta ni falta en el árbol existente. Los 31 archivos sin editar coinciden; las diferencias están en `.gitignore` y `package.json`, editados durante esta sesión.
- Hay una carpeta de materiales `DOC/`. Windows no distingue `DOC` de `Docs`; se mantiene la ruta original para no mover las fuentes recibidas.
- Node `v24.22.1`, npm `11.19.1` y Git `2.56.0.windows.2` están disponibles. El proyecto declara `npm run dev`, `npm run build` y `npm run lint` (`tsc --noEmit`). No había `node_modules/` ni lockfile al iniciar. Git local se inicializó sin crear commit.
- Primer intento de `npm install`: conflicto entre `esbuild@^0.25.0` y el peer requerido por Vite 8 (`^0.27.0 || ^0.28.0`). Se actualizó `esbuild` a `^0.28.0`; npm generó `package-lock.json` y la reinstalación de `@rolldown/pluginutils` y `@tailwindcss/vite` reparó los archivos que faltaban. `node_modules/` permanece ignorado por Git.
- El PDF de portafolio tiene 54 páginas. Se extrajo su texto y se revisaron visualmente páginas representativas. Incluye datos de contacto y NIT antiguos; no se copiaron datos personales de clientes a la wiki.

## Estado local y publicación
- Versión local observada: prototipo descargado de Google AI Studio, con código extraído presente.
- Estado de publicación: pendiente de confirmar; no se comprobó un sitio público.
- Compilación tras las fotos y la corrección empresarial: `npm run build` pasó; Vite generó `dist/` e incluyó las imágenes. Emitió una advertencia no bloqueante sobre `__dirname` con su cargador nativo.
- Lint tras los cambios: `npm run lint` pasó (`tsc --noEmit`).
- Servidor local activo en `http://127.0.0.1:3000/`. La página, módulos afectados y ambas imágenes nuevas respondieron HTTP 200.
- Vista visual en escritorio/móvil: pendiente. La herramienta de control del navegador agotó el tiempo de espera dos veces.
- Cambio visual inicial: la foto de oficina fue puesta en portada y la foto de equipo en “Nosotros”; después el usuario pidió retirar la foto de oficina como portada y se cambió por la obra del canal. Los originales siguen intactos y las copias técnicas están en `src/assets/images/`.
- Corrección solicitada por el usuario: sedes Valledupar, La Loma y Bosconia; retirado el móvil alterno, referencias a Claro/Comcel, Aerocivil y concesiones, las tarjetas de proyectos de concesionarias, la foto de CivilTech y la oferta de materiales pétreos. La foto de oficina recortada queda como activo alterno y excluye los teléfonos impresos.
- Preferencia confirmada: la foto de oficina en portada no gustó. Se reemplazó por una foto panorámica de la obra del canal y su cuadrilla, tomada de `DOC/FOTO 1 CANAL ALAMOSA.jpeg`; la foto de equipo sigue en “Nosotros”.
- Servidor local: la página responde HTTP 200 en `http://127.0.0.1:3000/`; la vista visual completa de escritorio/móvil sigue pendiente.
- Git: repositorio local; ya hay identidad de autor configurada. Primer commit creado el 2026-11-13 con el código y la wiki (sin `DOC/` ni `Plan de Mejoras/`).
- 2026-11-13: se ingresó material nuevo (3 imágenes y 3 videos de WhatsApp; paquete `Plan de Mejoras/`). `npm run lint` y `npm run build` siguen pasando. El servidor local no estaba activo al iniciar la sesión.

## Próximo paso
- Seguir el Plan de Mejoras en orden. Paso 2 (logo y fotos propias) es el más avanzado: falta el logo oficial y decidir qué fotos son reales. Ver [[pendientes]].
- Revisar visualmente la vista previa en escritorio y móvil; confirmar los datos empresariales pendientes antes de cambios de contenido. Ver [[pendientes]].
- Confirmar si se desea mostrar solo proyectos documentados y autorizados. Ver [[pendientes]].
