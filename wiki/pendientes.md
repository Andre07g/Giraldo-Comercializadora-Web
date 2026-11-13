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
- **Pendiente:** NIT correcto. El portafolio declara `900302289-2`, pero `index.html`, `src/data/companyData.ts` y la gráfica de WhatsApp del 2026-11-12 declaran `900302280-2` (más probable, sin confirmar).
- **Pendiente:** año y redacción de visión (brief: 2028; código: 2029), contenido de misión, trayectoria y métricas.
- **Pendiente:** aprobación de fotos reales, clientes y logos de terceros, y confirmación de autenticidad de imágenes que parecen compuestas.
- **Pendiente:** qué significa “Colaboradores y bloc” en el documento de mejoras (posible “blog”, no asumir).
- **Pendiente:** el documento inicial solicita que las propuestas lleguen por correo, pero el formulario actual abre WhatsApp. Confirmar el canal de recepción deseado antes de cambiar el flujo; no se verificó envío de formularios.

## Del Plan de Mejoras (paquete del facilitador, 2026-11-13)
- **Pendiente:** nombre de la línea: «rocería» o «roscería». No publicar el nombre sin validarlo.
- **Pendiente:** horario completo. Solo consta el sábado 8:00 a. m.–12:00 m.; el de lunes a viernes no está en las fuentes. No deducirlo.
- **Pendiente:** misión y visión del documento institucional, con horizonte 2029 (el plan lo pide; el brief decía 2028). Documento institucional no localizado en `DOC/`.
- **Pendiente:** logo oficial en buena calidad y fotos reales por cada una de las cinco líneas (metalmecánica, vías, rocería, obras eléctricas, obra civil); hoy no hay fotos de obras eléctricas ni de vías.
- **Pendiente:** para la política de datos: NIT confirmado, dirección y correo para temas de datos.
- **Pendiente:** autenticidad de las tres imágenes de WhatsApp (fachada, gráfica Canal Alamosa, antes/después) y reproducción de los tres videos.

## Revisión técnica y de fuentes
- **Pendiente:** revisar visualmente la vista local en escritorio y móvil. El navegador de control agotó el tiempo de espera dos veces; el servidor sí responde HTTP 200 en la página, el módulo inicial y la foto principal.
- **Confirmado:** el segundo PDF y la segunda foto de Canal Alamosa son duplicados exactos por SHA-256; ambos originales se conservaron.
- **Confirmado:** `FOTO 6 SOLDADURA` y `FOTO 7 PLACAS PRODECO` tienen copia exacta (SHA-256). **Pendiente:** ver logos/fotos no abiertos y reproducir videos.
- **Confirmado:** las 33 rutas del ZIP son seguras, no hay archivos faltantes y los 31 archivos no modificados coinciden por SHA-256 con el árbol extraído.
- **Confirmado:** ya existe identidad de Git (`user.name`); se puede crear el primer commit.
- **Pendiente:** confirmar estado del sitio público/publicación.
- **Pendiente:** evaluar en otra conversación si se desea reemplazar o retirar las afirmaciones restantes del portafolio que no estén sustentadas por fuentes aprobadas. No se presentaron como verificadas en este cambio.
