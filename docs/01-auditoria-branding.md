# 01 · Auditoría del branding actual — Grupo Laplace

**Fuente analizada:** Figma *Branding - Grupo Laplace*, página **05 - CLAUDE CONTEXT** (frame «Brand Identity System»): logotipo principal con tagline, variaciones (2 × «monocromática», invertida, isotipo), paleta, tipografías (Freedoka / Montserrat), dos patrones y 8 mockups de aplicación.
Captura de referencia: `brand/figma-source/claude-context.png`.

> Leyenda de estado: **Confirmado** (dato entregado) · **Supuesto** (decisión de diseño) · **Pendiente** (debe darlo la academia).

---

## Resumen

La identidad tiene una **base valiosa**: un isotipo con idea propia (una L parabólica + una P + un punto), una paleta azul-celeste-naranja coherente y un logotipo con letras propias (la «A» sin travesaño). Lo que falta es **sistema**: reglas, jerarquías y criterios de aplicación. Hoy la marca se ve correcta en la lámina, pero no hay nada que garantice que se vea igual en un flyer, un polo o la web.

| Área | Diagnóstico | Gravedad |
|---|---|---|
| Jerarquía visual | Lámina ordenada, pero sin roles: no dice qué color manda, qué fuente es para títulos ni qué versión es la principal. | Media |
| Consistencia de variantes | La versión a color está rotulada como «Versión monocromática» (aparece dos veces con el mismo nombre). No existe versión vertical en la página aunque el brief la menciona. | Alta |
| Tipografía | «Freedoka» está mal escrito (la fuente es **Fredoka**). Dos familias sin rol definido; Fredoka (redondeada) puede volver infantil la marca si se usa en titulares; Montserrat es ancha para párrafos largos. | Media |
| Proporciones y área de seguridad | No hay área de seguridad, retícula de construcción ni tamaños mínimos. | Alta |
| Aplicación de la paleta | Solo HEX/RGB; sin CMYK, sin escalas, sin proporciones. Blanco sobre naranja (2.4:1) y celeste sobre blanco (2.8:1) no son legibles como texto y nada lo advierte. | Alta |
| Patrones | Dos patrones buenos (órbitas y red molecular), pero ambos solo sobre azul; capas nombradas «p04-light» aunque son oscuros. Sin reglas de opacidad ni de uso. | Media |
| Iconografía / ilustración | No definidas. | Media |
| Fotografía | No hay dirección. Los mockups usan modelos adultos y escenarios corporativos que no representan a estudiantes de secundaria. | Media |
| Aplicaciones | Logo muy pequeño y centrado en casi todos los mockups (polo, polera, gorra); posición variable. La curva + punto naranja aparece como adorno sin documentar. | Media |
| Legibilidad pequeña | «GRUPO» es de trazo fino: en 80 px de ancho mide ≈ 10 px de alto. El punto del isotipo depende de un anillo blanco que desaparece sobre fondos de color o en bordado pequeño. | Alta |
| Diferenciación | Azul + naranja es muy común en academias. El diferencial real —la curva parabólica y el punto— no se explota como recurso. | Media |
| Mensaje | Tagline «Aprender matemáticas nunca había sido tan fácil»: excluye química y promete facilidad, lo que choca con la confianza académica que se busca. | Alta |

---

## Hallazgos detallados

### 1. Logotipo
- **Fortalezas:** el isotipo es memorable y tiene significado (curva = función/trayectoria; P sólida; punto = un valor sobre la curva). La «A» sin travesaño (Λ) da personalidad al logotipo.
- **Problemas:**
  - Nombres de versiones incorrectos (ver tabla).
  - Tensión geométrica: la L es orgánica y la P es geométrica; funciona como contraste, pero exige que nunca se deforme la relación entre ambas (no hay retícula que la proteja).
  - El anillo blanco alrededor del punto es un *knockout*: en versiones sin fondo debe tomar el color del fondo. En el export original es blanco fijo.
  - Sin versión vertical documentada; sin versión a 1 tinta negra (sellos, grabados).
- **Decisión:** **no se redibuja**. Se reutilizan los trazados exactos de Figma para generar variantes limpias (`brand/logos/`). La versión **vertical** se presenta como **propuesta evolutiva** construida con las mismas piezas.

### 2. Tipografía
- Montserrat encaja con la geometría del logotipo → se mantiene para **titulares**.
- Para **texto e interfaz** se propone **Inter** (más legible en tamaños pequeños, cifras tabulares para ejercicios). Plus Jakarta Sans y Manrope se evaluaron: Plus Jakarta es muy similar en tono a Montserrat (poca diferenciación de roles) y Manrope tiene menos soporte de cifras tabulares/variantes; Inter gana en legibilidad y en material académico.
- Fredoka queda como **acento**: cifras grandes, numeración de pasos y piezas sociales. Nunca párrafos ni titulares largos.

### 3. Color
- Los cuatro valores oficiales se mantienen sin cambios.
- Contrastes medidos (WCAG 2.x):

| Combinación | Ratio | Uso |
|---|---|---|
| Azul #102C53 / Blanco | 13.93 | ✅ Texto y fondos |
| Naranja #FF8A3D / Azul | 5.94 | ✅ Botón principal (texto azul) |
| Celeste #33A5CC / Azul | 4.91 | ✅ Títulos/iconos sobre azul |
| Celeste / Blanco | 2.84 | ❌ No para texto (solo elementos gráficos grandes) |
| Naranja / Blanco | 2.35 | ❌ No para texto: el botón naranja lleva texto azul |
| Celeste / Naranja | 1.21 | ❌ Nunca combinar |

- Riesgo detectado: sin regla, el naranja tiende a competir con el azul. Se fija la proporción **60 / 30 / 7 / 3** (blanco / azul / celeste / naranja).

### 4. Patrones y recursos
- Ambos patrones son coherentes con el concepto científico. Se reconstruyen como mosaicos SVG parametrizables (oscuro **y** claro) con opacidad controlada.
- La curva + punto naranja que aparece junto a los mockups se formaliza como recurso «**La curva**».

### 5. Aplicaciones
- Los mockups muestran buena intención (polo, tomatodo, polera, tote, gorra, taza, libreta), pero el logo suele ser demasiado pequeño, la posición cambia y la fotografía no representa al público. Se definen especificaciones por pieza en la guía (`docs/03-guia-de-marca.md`).

---

## Dirección visual propuesta

**«El punto en la curva».** La marca se apoya en lo que ya tiene: el isotipo leído como un estudiante (el punto) que avanza sobre la curva del aprendizaje, sostenido por la estructura del docente (la P). De ahí salen:

1. **Estructura editorial en azul profundo**, mucho blanco, celeste como sello de reconocimiento y naranja solo para la acción.
2. **Recursos científicos discretos**: curva parabólica, patrón de órbitas y red molecular, siempre en baja intensidad.
3. **Contenido académico real como imagen**: hojas de ejercicios bien resueltos, moléculas, gráficas, en lugar de stock genérico.
4. **Tipografía con roles claros**: Montserrat (titulares), Inter (lectura), Fredoka (acento numérico).

Resultado esperado: una marca **rigurosa pero cercana**, que se distingue de otras academias por su lenguaje gráfico propio y no por saturar color.
