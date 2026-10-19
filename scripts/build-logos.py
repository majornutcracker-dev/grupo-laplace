"""Genera las variantes limpias del logotipo a partir del export original de Figma.
No redibuja ninguna forma: reutiliza los trazados originales y solo cambia rellenos,
recortes (viewBox) y la composición vertical.
Uso: python3 scripts/build-logos.py
"""
import re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'brand/figma-source/logo-horizontal-color.svg'
OUT = ROOT / 'brand/logos'
OUT.mkdir(parents=True, exist_ok=True)
# Copia que consume el componente <Logo /> del UI Kit
UI_ASSETS = ROOT / 'packages/ui/src/assets/brand'

NAVY, CELESTE, WHITE = '#102C53', '#33A5CC', '#FFFFFF'
svg = SRC.read_text()
paths = re.findall(r'<path id="([^"]*)"([^>]*?)d="([^"]+)"', svg)

def d_of(name_prefix):
    return [d for (i, _, d) in paths if i.startswith(name_prefix)]

P = d_of('P ')[0]
L = d_of('L parab')[0]
# Trazados del logotipo (GRUPO = Vector..Vector_5, LAPLACE = Vector_6..)
words = [(i, d) for (i, _, d) in paths if i.startswith('Vector')]
def idx(i): return 1 if i == 'Vector' else int(i.split('_')[1])
GRUPO = [d for i, d in words if idx(i) <= 5]
LAPLACE = [d for i, d in words if idx(i) >= 6]

# Isotipo ocupa 0..86.6 x 0..66.6; el logotipo horizontal 0..279.2 x 0..66.6
def iso(c_l, c_p, c_dot, c_ring):
    return (f'<path d="{L}" fill="{c_l}"/>'
            f'<path fill-rule="evenodd" clip-rule="evenodd" d="{P}" fill="{c_p}"/>'
            f'<rect x="43.2503" y="6.65396" width="11.5057" height="11.5057" rx="5.75287" fill="{c_ring}"/>'
            f'<circle cx="49.0032" cy="12.4068" r="4.31465" fill="{c_dot}"/>')

def wordmark(c):
    return ''.join(f'<path d="{d}" fill="{c}"/>' for d in GRUPO + LAPLACE)

def wrap(w, h, body, vb=None, title='Grupo Laplace'):
    vb = vb or f'0 0 {w} {h}'
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="{vb}" '
            f'fill="none" role="img" aria-label="{title}"><title>{title}</title>{body}</svg>\n')

# (nombre, L, P, punto, anillo, logotipo)
VARIANTS = {
    'color':       (CELESTE, NAVY, CELESTE, WHITE, NAVY),   # principal, fondos claros
    'inverted':    (CELESTE, WHITE, CELESTE, NAVY, WHITE),  # principal, fondos oscuros
    'mono-navy':   (NAVY, NAVY, NAVY, WHITE, NAVY),         # una tinta, fondos claros
    'mono-white':  (WHITE, WHITE, WHITE, NAVY, WHITE),      # una tinta, fondos oscuros
    'mono-black':  ('#000000', '#000000', '#000000', WHITE, '#000000'),  # fax/sellos/grabado
}
# El anillo es un recorte que separa el punto del trazo: debe tomar el color del fondo.
# Para archivos sin fondo, en las versiones claras usamos blanco y en las oscuras azul.

for name, (cl, cp, cd, cr, cw) in VARIANTS.items():
    (OUT / f'logo-horizontal-{name}.svg').write_text(
        wrap(280, 67, iso(cl, cp, cd, cr) + wordmark(cw), vb='0 0 279.2 66.6'))
    (OUT / f'isotipo-{name}.svg').write_text(
        wrap(87, 67, iso(cl, cp, cd, cr), vb='0 0 86.6 66.6', title='Grupo Laplace — isotipo'))
    # Vertical (propuesta construida): isotipo centrado sobre el logotipo, separación = altura del punto x2
    wx0, ww = 109.5, 169.7       # caja del logotipo en el horizontal
    s = 1.0
    iso_w, iso_h, gap = 86.6, 66.6, 20
    W = ww
    iso_x = (W - iso_w) / 2
    body = (f'<g transform="translate({iso_x:.2f} 0)">{iso(cl, cp, cd, cr)}</g>'
            f'<g transform="translate({-wx0:.2f} {iso_h + gap - 7.1:.2f})">{wordmark(cw)}</g>')
    H = iso_h + gap + 52.3
    (OUT / f'logo-vertical-{name}.svg').write_text(wrap(round(W), round(H), body, vb=f'0 0 {W:.1f} {H:.1f}'))

UI_ASSETS.mkdir(parents=True, exist_ok=True)
for f in OUT.glob('*.svg'):
    (UI_ASSETS / f.name).write_text(f.read_text())

print('OK', sorted(p.name for p in OUT.iterdir()))
