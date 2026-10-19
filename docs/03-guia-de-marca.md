# 03 · Guía de marca — Grupo Laplace (v2.0, evolución)

Versión visual e interactiva: **`/marca`** en la web (`yarn dev` → `/marca`).
Archivos de logotipo: `brand/logos/` · Patrones: componente `BrandPattern` (`packages/ui/src/components/brand/Patterns.tsx`).

---

## 1. Logotipo

### Versiones
| Versión | Archivo | Uso |
|---|---|---|
| Horizontal principal (2 colores) | `logo-horizontal-color.svg` | Por defecto: web, papelería, redes |
| Horizontal invertida | `logo-horizontal-inverted.svg` | Fondos azul profundo / fotos oscuras |
| Vertical (**propuesta**) | `logo-vertical-*.svg` | Espacios cuadrados: polos, tomatodos, perfiles |
| Isotipo | `isotipo-*.svg` | Favicon, avatar, sellos, bordado pequeño |
| Una tinta | `*-mono-navy`, `*-mono-white`, `*-mono-black` | Serigrafía, grabado, sellos, fax |

Corrección respecto a la lámina original: la versión a color **no** es «monocromática». Nombres oficiales: *Principal* y *Una tinta*.

Los SVG se generan con `python3 scripts/build-logos.py` a partir del export de Figma, **sin redibujar** trazados. El anillo que rodea el punto toma el color del fondo (blanco en versiones claras, azul en oscuras).

### Área de seguridad
Unidad **x = altura de la palabra «GRUPO»** (≈ 24 % de la altura del logotipo). Margen libre = **1x** por cada lado (2x en impresos).

### Tamaños mínimos
| Versión | Pantalla | Impresión |
|---|---|---|
| Horizontal | 120 px de ancho (≈ 28 px de alto) | 30 mm de ancho |
| Vertical | 56 px de alto | 18 mm de alto |
| Isotipo | 20 px | 6 mm |
| Bordado | isotipo ≥ 25 mm · horizontal ≥ 70 mm | — |

### Usos incorrectos
No deformar · no rotar · no cambiar colores · no usar la versión a color sobre celeste o naranja · no añadir sombras, contornos ni efectos · no colocar sobre patrones o fotos sin contraste · no separar ni reordenar isotipo y logotipo · no reescribir «GRUPO LAPLACE» con otra fuente.

---

## 2. Color

| Color | HEX | RGB | CMYK ref.* | Función | Proporción |
|---|---|---|---|---|---|
| Azul profundo | #102C53 | 16 · 44 · 83 | 100 · 80 · 35 · 30 | Estructura, confianza, texto, fondos | 30 % |
| Celeste | #33A5CC | 51 · 165 · 204 | 75 · 15 · 10 · 0 | Reconocimiento, interacción | 7 % |
| Naranja | #FF8A3D | 255 · 138 · 61 | 0 · 55 · 80 · 0 | Acción y acento puntual | 3 % |
| Blanco | #FFFFFF | 255 · 255 · 255 | 0 · 0 · 0 · 0 | Espacio y claridad | 60 % |

\* CMYK aproximado: validar con prueba de imprenta. Pantone: solicitar equivalencia física (no se asigna sin muestra).

**Escalas tonales** (OKLCH, 50–950) y tokens semánticos: ver `docs/04-design-tokens.md` y `/ui-kit`.

**Reglas:**
- El azul manda. El naranja **solo** para la acción principal o un acento por pieza.
- Texto sobre naranja → **azul**. Nunca blanco.
- Celeste como texto sobre blanco → usar **celeste 700 (#066480)**.
- Combinaciones permitidas: azul/blanco, blanco/azul, celeste/azul, azul/naranja. Prohibidas: blanco/naranja, celeste/blanco (texto), celeste/naranja.

---

## 3. Tipografía

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| Titulares | **Montserrat** | 600–700 | Display, H1–H4, overlines |
| Texto e interfaz | **Inter** | 400–600 | Párrafos, botones, formularios, material académico |
| Acento | **Fredoka** | 500–600 | Cifras grandes, numeración, piezas sociales |

### Jerarquía (web)
| Nivel | Tamaño | Interlineado | Peso |
|---|---|---|---|
| Display | 38 → 56 px (fluido) | 1.05 | 700 |
| H1 | 32 → 48 px | 1.10 | 700 |
| H2 | 28 → 40 px | 1.15 | 700 |
| H3 | 22 → 28 px | 1.25 | 600 |
| H4 | 20 px | 1.30 | 600 |
| Subtítulo | 17 → 20 px | 1.55 | 400 |
| Texto principal | 16–18 px | 1.6–1.65 | 400 |
| Etiqueta / botón | 14–16 px | 1.25–1.4 | 600 |
| Caption | 13 px | 1.45 | 500 |
| Material académico | 17 px | 1.75 | 400, cifras tabulares |

**Impresos:** titulares Montserrat Bold; cuerpo Inter 9–11 pt (flyers) / 11–12 pt (fichas de estudio).

---

## 4. Iconografía
Lucide (lineal, trazo 2 px, terminaciones redondeadas) por coherencia con las curvas del isotipo. Iconos en contenedor redondeado: celeste 50 + icono celeste 700, azul + icono blanco, o naranja 50 + icono naranja 700. Un solo estilo en toda la marca.

## 5. Recursos gráficos
1. **La curva** — derivada de la L parabólica. Trazo grueso redondeado, celeste sobre azul o azul sobre blanco; opcionalmente con el **punto naranja**. Esquinas, separadores, cierres.
2. **Patrón órbitas** — circunferencias + puntos (geometría/átomo). Fondos de tarjetas y secciones. Opacidad de trazo ≤ 35 %.
3. **Patrón red** — nodos y enlaces (moléculas/gráficas). Hero, banners, portadas.

Reglas: uno protagonista por pieza; nunca detrás de párrafos; ahora existen versiones **oscura y clara**.
Símbolos científicos (Σ, x², H₂O) solo como apoyo a contenido real; evitar la «sopa de fórmulas».

## 6. Fotografía
- ✔ Estudiantes reales de secundaria y docentes en sesiones auténticas; momentos de explicación (pizarra, cuaderno, señalar).
- ✔ Luz natural, fondos limpios, presencia de azul, aire para texto.
- ✘ Modelos adultos posando, oficinas, sonrisas a cámara, filtros saturados, stock ajeno al contexto.
- Pendiente: sesión de fotos propia (con autorizaciones de padres para menores).

## 7. Ilustración
Composiciones de interfaz y diagramas (hojas de ejercicios resueltos, moléculas, gráficas), formas planas, paleta oficial. Sin personajes caricaturescos ni estilo infantil. Los ejercicios mostrados deben estar **bien resueltos**.

## 8. Composición y retículas
- **Web:** 12 / 8 / 4 columnas; contenedor 1152 px; margen fluido 16–32 px; secciones 64–120 px de alto de padding.
- **Impresos:** 6 columnas; margen 2x; logo en esquina superior o inferior izquierda.
- **Redes:** margen 8 % del lado; isotipo siempre abajo a la izquierda.

---

## 9. Aplicaciones

| Pieza | Especificación |
|---|---|
| **Tarjetas de presentación** (85 × 55 mm) | Anverso azul con patrón red sutil + logo vertical invertido centrado. Reverso blanco: nombre (Montserrat Bold), cargo (celeste 700), contacto (Inter) y la curva en la esquina inferior derecha. |
| **Tote bags** | Algodón natural o azul. Logo vertical centrado en el tercio superior, 1 tinta, serigrafía. Variante: patrón red a todo lado en celeste sobre azul. |
| **Lapiceros** | Cuerpo blanco o azul; logo horizontal 1 tinta ≥ 30 mm, tampografía. Clip celeste si es posible. |
| **Polos y poleras** | Azul profundo (prioritario) o blanco. Isotipo bordado en pecho izquierdo (≥ 25 mm); logo horizontal en espalda alta. Poleras: eslogan en espalda. |
| **Resaltadores** | Logo horizontal blanco o azul en el cuerpo. El naranja de marca como resaltador oficial. |
| **Tomatodos** | Acero blanco o azul; logo vertical grabado láser o 1 tinta. No usar logo a color sobre metal cromado. |
| **Tazas** | Blanca; logo vertical a color en un lado; la curva + punto naranja en el otro. Interior celeste opcional. |
| **Libretas** | Tapa azul con isotipo invertido; contratapa con patrón órbitas; interiores con cabecera de marca y cuadrícula de 5 mm. |
| **Flyers** (A5) | Mitad superior azul con patrón red + titular; mitad inferior blanca con mensaje y CTA naranja. Un mensaje por pieza. |
| **Banners** | Fondo azul, eslogan en blanco a la izquierda, isotipo invertido a la derecha, la curva como base. |
| **Redes sociales** | Carrusel: portada azul (pregunta), interiores blancos (paso a paso, numeración Fredoka naranja), cierre con CTA. |
| **Presentaciones académicas** | 16:9, fondo blanco, título Montserrat, cuerpo Inter, isotipo en esquina; portada y separadores en azul con patrón. |
| **Material de estudio** | A4 blanco, cabecera con logo horizontal + n.º de ficha, Inter 11–12 pt, interlineado 1.6, sin fondos de color (ahorro de tinta). |

Maquetas de referencia: `/marca#aplicaciones`.
