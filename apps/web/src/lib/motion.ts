import type { CSSProperties } from 'react'

/** Retraso de animación para .pop-in y .reveal (lee la variable --d). */
export const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties
