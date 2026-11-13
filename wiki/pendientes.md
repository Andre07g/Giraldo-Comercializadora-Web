---
tipo: pendientes
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-13
tags: [pendientes, validacion]
fuentes: ["DOC/", "src/data/companyData.ts", "index.html"]
---

# Pendientes

## Confirmación empresarial necesaria
- **Confirmado:** se retiró el móvil alterno que estaba en el código. El sitio conserva el WhatsApp que ya usaba el botón principal; la foto de oficina oculta los teléfonos impresos en la copia publicada.
- **Confirmado:** las sedes actuales son Valledupar, La Loma y Bosconia, Cesar. El código anterior mencionaba La Jagua; la foto de CivilTech ya no se usa en la página.
- **Pendiente:** certificaciones actuales. Documento: RUC y Coface. Página: RUT DIAN, Cámara de Comercio, “Empresa Contratista de Éxito” y SST/calidad.
- **Resuelto 2026-11-13:** NIT `900302289-2` confirmado por la usuaria y aplicado. (Antes: El portafolio declara `900302289-2`, pero `index.html`, `src/data/companyData.ts` y la gráfica de WhatsApp del 2026-11-12 declaran `900302280-2` (más probable, sin confirmar).)
- **Pendiente:** año y redacción de visión (brief: 2028; código: 2029), contenido de misión, trayectoria y métricas.
- **Pendiente:** aprobación de fotos reales, clientes y logos de terceros, y confirmación de autenticidad de imágenes que parecen compuestas.
- **Pendiente:** qué significa “Colaboradores y bloc” en el documento de mejoras (posible “blog”, no asumir).
- **Pendiente:** el documento inicial solicita que las propuestas lleguen por correo, pero el formulario actual abre WhatsApp. Confirmar el canal de recepción deseado antes de cambiar el flujo; no se verificó envío de formularios.

## Del Plan de Mejoras (paquete del facilitador, 2026-11-13)
- **Resuelto:** la línea es «Rocería» (limpieza y corte de maleza, poda de árboles).
- **Resuelto:** horario 8:00–12:00 y 2:00–5:30 p. m. Confirmado lunes a viernes por la usuaria.
- **Pendiente:** misión y visión del documento institucional, con horizonte 2029 (el plan lo pide; el brief decía 2028). Documento institucional no localizado en `DOC/`.
- **Pendiente:** logo oficial en buena calidad y fotos reales por cada una de las cinco líneas (metalmecánica, vías, rocería, obras eléctricas, obra civil); ya hay láminas de obras eléctricas y señalización de vías, pero son composiciones con marcas de terceros; falta decidir cómo usarlas.
- **Pendiente:** para la política de datos: NIT confirmado, dirección y correo para temas de datos.
- **Resuelto:** fachada y antes/después son reales (usuaria). **Pendiente:** reproducir los 3 videos; confirmar cuál logo es el oficial (hay uno con NIT viejo y otro con el correcto); autorización de marcas de terceros en las láminas; todavía queda la gráfica Canal Alamosa con NIT viejo y teléfonos.

## Revisión técnica y de fuentes
- **Pendiente:** revisar visualmente la vista local en escritorio y móvil. El navegador de control agotó el tiempo de espera dos veces; el servidor sí responde HTTP 200 en la página, el módulo inicial y la foto principal.
- **Confirmado:** el segundo PDF y la segunda foto de Canal Alamosa son duplicados exactos por SHA-256; ambos originales se conservaron.
- **Confirmado:** `FOTO 6 SOLDADURA` y `FOTO 7 PLACAS PRODECO` tienen copia exacta (SHA-256). **Pendiente:** ver logos/fotos no abiertos y reproducir videos.
- **Confirmado:** las 33 rutas del ZIP son seguras, no hay archivos faltantes y los 31 archivos no modificados coinciden por SHA-256 con el árbol extraído.
- **Confirmado:** ya existe identidad de Git (`user.name`); se puede crear el primer commit.
- **Pendiente:** confirmar estado del sitio público/publicación.
- **Pendiente:** evaluar en otra conversación si se desea reemplazar o retirar las afirmaciones restantes del portafolio que no estén sustentadas por fuentes aprobadas. No se presentaron como verificadas en este cambio.

## Tras el paso 4 (2026-11-13)
- **Pendiente:** revisar visualmente las cinco tarjetas y el modal en escritorio y móvil (el navegador no estaba conectado).
- **Pendiente:** la lámina de vías y la de obras eléctricas son composiciones con letras; ampliarlas muestra baja nitidez. Mejor reemplazar por fotos individuales cuando existan.
- **Pendiente:** la sección Proyectos y las métricas siguen con contenido heredado del prototipo (cifras, Calenturitas, etc.) sin fuente; sus imágenes usan rutas `/src/assets/...` que no funcionan en el sitio compilado.
- **Pendiente:** poner el logo oficial (NIT `...289-2`) en la cabecera; hoy el logo es el del prototipo.
- **Pendiente:** misión y visión: falta el documento institucional.
