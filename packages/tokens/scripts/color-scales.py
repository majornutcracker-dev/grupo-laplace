"""Genera escalas tonales OKLCH ancladas en los colores oficiales y reporta contraste WCAG.
Uso: python3 packages/tokens/scripts/color-scales.py [--json]
"""
import math, json, sys

def srgb_to_lin(c): return c/12.92 if c <= 0.04045 else ((c+0.055)/1.055)**2.4
def lin_to_srgb(c): return 12.92*c if c <= 0.0031308 else 1.055*c**(1/2.4)-0.055

def hex_to_oklch(h):
    h = h.lstrip('#'); r, g, b = [srgb_to_lin(int(h[i:i+2], 16)/255) for i in (0, 2, 4)]
    l = 0.4122214708*r+0.5363325363*g+0.0514459929*b
    m = 0.2119034982*r+0.6806995451*g+0.1073969566*b
    s = 0.0883024619*r+0.2817188376*g+0.6299787005*b
    l, m, s = [x**(1/3) for x in (l, m, s)]
    L = 0.2104542553*l+0.7936177850*m-0.0040720468*s
    a = 1.9779984951*l-2.4285922050*m+0.4505937099*s
    bb = 0.0259040371*l+0.7827717662*m-0.8086757660*s
    return L, math.hypot(a, bb), math.degrees(math.atan2(bb, a)) % 360

def oklch_to_hex(L, C, H):
    for _ in range(40):  # reduce croma hasta entrar en gamut sRGB
        a, b = C*math.cos(math.radians(H)), C*math.sin(math.radians(H))
        l = (L+0.3963377774*a+0.2158037573*b)**3
        m = (L-0.1055613458*a-0.0638541728*b)**3
        s = (L-0.0894841775*a-1.2914855480*b)**3
        r = 4.0767416621*l-3.3077115913*m+0.2309699292*s
        g = -1.2684380046*l+2.6097574011*m-0.3413193965*s
        bl = -0.0041960863*l-0.7034186147*m+1.7076147010*s
        if all(-1e-4 <= x <= 1+1e-4 for x in (r, g, bl)): break
        C *= 0.95
    return '#'+''.join(f'{round(min(1,max(0,lin_to_srgb(min(1,max(0,x)))))*255):02X}' for x in (r, g, bl))

def lum(h):
    h = h.lstrip('#'); r, g, b = [srgb_to_lin(int(h[i:i+2], 16)/255) for i in (0, 2, 4)]
    return 0.2126*r+0.7152*g+0.0722*b
def contrast(a, b):
    x, y = sorted([lum(a), lum(b)], reverse=True); return (x+0.05)/(y+0.05)

STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
TARGET_L = {50: .975, 100: .945, 200: .89, 300: .82, 400: .73, 500: .64, 600: .55, 700: .47, 800: .39, 900: .31, 950: .23}
BRAND = {'navy': ('#102C53', 900), 'celeste': ('#33A5CC', 500), 'orange': ('#FF8A3D', 400)}

def scale(hexv, anchor):
    L0, C0, H0 = hex_to_oklch(hexv)
    out = {}
    for s in STEPS:
        if s == anchor: out[s] = hexv.upper(); continue
        L = TARGET_L[s]
        # croma proporcional: se reduce hacia los extremos claros/oscuros
        k = 1 - abs(L-L0)/max(L0, 1-L0)*0.75
        out[s] = oklch_to_hex(L, C0*max(0.12, k), H0)
    return out

scales = {name: scale(*v) for name, v in BRAND.items()}
# neutros con matiz del azul profundo (fríos, coherentes con la marca)
_, _, Hn = hex_to_oklch('#102C53')
scales['neutral'] = {s: oklch_to_hex(TARGET_L[s] if s != 50 else .985, 0.012 if s < 500 else 0.02, Hn) for s in STEPS}

if '--json' in sys.argv:
    print(json.dumps(scales, indent=2)); sys.exit()
for name, sc in scales.items():
    print(name)
    for s, h in sc.items():
        print(f'  {s:>4} {h}  vs blanco {contrast(h, "#FFFFFF"):5.2f}  vs navy {contrast(h, "#102C53"):5.2f}')
