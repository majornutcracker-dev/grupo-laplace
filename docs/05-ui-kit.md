# 05 · UI Kit — Grupo Laplace

Catálogo vivo con todas las variantes: **`/ui-kit`** (`yarn dev` → `/ui-kit`).
Código: paquete `@grupo-laplace/ui` (`packages/ui/src/`); los componentes de layout y las secciones viven en `apps/web/src/components/`. Todos los componentes consumen tokens semánticos; ninguno define colores propios.

| Carpeta | Contenido |
|---|---|
| `packages/ui` · `components/brand/` | `Logo`, `BrandPattern`, `BrandCurve` |
| `packages/ui` · `components/ui/` | `Button`, `TextLink` · `Primitives` (Badge, StatusTag, Avatar, Alert, Spinner, Skeleton, Breadcrumbs, SectionHeader, Card, IconTile) · `Cards` · `Form` · `Interactive` (Accordion, Tabs, Modal) |
| `apps/web` · `components/layout/` | `Navbar`, `Footer`, `SiteLayout`, `Docs` (piezas de las páginas de documentación) |
| `apps/web` · `components/sections/` | Secciones de la home: `Hero`, `HomeSections`, `Contact` |

---

## Navegación

### Navbar — `layout/Navbar.tsx`
- **Variantes:** reposo (fondo blanco) · con scroll (borde + blanco 95 % + desenfoque) · menú móvil abierto.
- **Tamaño:** 72 px de alto. Logo horizontal a 38 px.
- **Contenido:** enlaces de sección (`data/content.ts › nav`), CTA naranja «Solicitar información», WhatsApp (solo si está configurado).
- **Responsive:** < 1024 px se sustituye el menú por un botón de 44 × 44 px.
- **Accesibilidad:** enlace «Saltar al contenido»; `aria-expanded` / `aria-controls`; el menú móvil bloquea el scroll, se cierra con Esc y devuelve el foco al botón.

### Menú móvil
Panel a pantalla completa bajo el navbar, enlaces de 56 px, CTA a ancho completo al pie. Se cierra al elegir enlace, con Esc o al pasar a escritorio.

### Logo — `brand/Logo.tsx`
`<Logo layout="horizontal|vertical|isotipo" tone="color|inverted|mono-navy|mono-white|mono-black" height={40} />`. Aplica tamaños mínimos de la guía (28 / 56 / 20 px). `decorative` deja `alt=""` cuando ya hay un nombre accesible cerca.

### Footer — `layout/Footer.tsx`
Fondo `navy-950`, logo invertido, eslogan, navegación secundaria, contacto y redes **solo si están configurados**, enlaces legales solo si existen sus URL.

---

## Acciones

### Button — `ui/Button.tsx`
| Prop | Valores |
|---|---|
| `variant` | `primary` (naranja, texto azul) · `secondary` (azul) · `outline` · `ghost` · `inverse` (fondos oscuros) · `whatsapp` |
| `size` | `sm` 36 px · `md` 44 px · `lg` 52 px |
| Otros | `iconLeft`, `iconRight`, `iconOnly` (requiere `aria-label`), `loading`, `fullWidth`, `href` (se renderiza como `<a>`) |

**Estados:** hover · active (escala 0.98) · focus-visible (anillo celeste 600) · loading (spinner + `aria-busy`) · disabled.
**Uso:** una sola acción naranja por vista. Enlaces externos → `target="_blank" rel="noopener noreferrer"` automático.

### TextLink
Enlace en línea celeste 700 con subrayado grueso; hover a azul.

### CTA de inscripción / WhatsApp
- Inscripción: `Button` primary `lg` + flecha → `#contacto`.
- WhatsApp: `whatsappUrl(mensaje)` (`lib/contact.ts`) devuelve el enlace `wa.me` o `null` si el número no está configurado; los componentes **no** muestran el CTA cuando es `null`.

---

## Contenido — `ui/Cards.tsx`
| Componente | Variantes | Notas |
|---|---|---|
| `CourseCard` | `tone: celeste | navy` | Icono, badge, descripción, beneficios, bloque «Por confirmar» con datos pendientes, CTA. |
| `BenefitCard` | estándar · `featured` | La destacada ocupa dos filas en escritorio. |
| `TeacherCard` | con foto · sin foto (placeholder) | Muestra `StatusTag` si el docente no está confirmado. |
| `TestimonialCard` | — | `StatusTag demostrativo` mientras no haya testimonios reales. |
| `FaqCard` | — | Versión estática (para impresos); en la web se usa `Accordion`. |
| `ModalityCard` | `selected`, `status` | Modalidades **pendientes** de confirmar. |
| `InfoBlock` | `subtle · accent · highlight` | Notas y avisos de contenido. |
| `Stat` | `pending`, `inverse` | Sin dato real muestra «—» + «Dato pendiente». |
| `AdvantageList` | `inverse` | Lista con check. |

**Espaciado:** 24 px (móvil) / 32 px (escritorio) de padding; grids con 20–24 px de separación. **Radios:** `xl` en tarjetas, `2xl` en paneles.
**Accesibilidad:** `<article>` / `<figure>`, títulos `h3`, iconos decorativos con `aria-hidden`.

---

## Formularios — `ui/Form.tsx`
| Componente | Estados |
|---|---|
| `Field` (label + ayuda + mensaje) | requerido (*), opcional, hint, error, éxito |
| `Input`, `Textarea`, `Select` | default · hover · focus · error · éxito · disabled |
| `Checkbox` | checked · error · disabled |
| `RadioGroup` | `inline`, seleccionado (tarjeta con borde azul), error |

- Altura mínima 48 px, texto 16 px (evita zoom en iOS).
- `aria-invalid`, `aria-describedby` hacia ayuda/error; radios en `<fieldset>`/`<legend>`.
- Validación en blur y al enviar; al fallar, el foco va al primer campo inválido.

### Envío del formulario de contacto (`sections/Contact.tsx`)
1. Si `siteConfig.form.endpoint` existe → `POST` JSON real y mensaje de éxito/error según la respuesta.
2. Si no, pero hay WhatsApp → abre WhatsApp con el mensaje prellenado (el usuario decide enviarlo).
3. Si no hay ninguno → aviso de «formulario sin servicio conectado». **Nunca simula un envío.**

---

## Complementarios
| Componente | Variantes / detalles |
|---|---|
| `Badge` | navy · celeste · orange · neutral · success · error · inverse; `sm`/`md`; con icono |
| `StatusTag` | confirmado · propuesta · demostrativo · pendiente |
| `Avatar` | imagen o iniciales; `sm 32` · `md 44` · `lg 64` · `xl 96` |
| `IconTile` | celeste · navy · orange · inverse; `sm`/`md`/`lg` |
| `Accordion` | uno o varios abiertos; `aria-expanded` + región etiquetada; contenido cerrado con `inert` |
| `Tabs` | `underline` (indicador naranja) · `pill`; flechas, Inicio, Fin |
| `Breadcrumbs` | `nav` + `aria-current="page"` |
| `Alert` | info · success · warning · error (`role="alert"` solo en error) |
| `Modal` | `<dialog>` nativo: foco atrapado, Esc, clic fuera, devuelve foco |
| `Spinner` / `Skeleton` | `role="status"` con texto / bloque animado |

## Patrones de marca — `brand/Patterns.tsx`
- `<BrandPattern variant="orbitas|red" tone="dark|light" intensity="default|subtle" />` — mosaico SVG absoluto; combinar con `mask-image` para desvanecer.
- `<BrandCurve tone="dark|light" withPoint />` — la curva derivada del isotipo.
