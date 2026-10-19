export type FieldErrors<T extends string> = Partial<Record<T, string>>

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
/** Teléfono flexible: 7 a 15 dígitos, admite +, espacios y guiones. */
export const isPhone = (v: string) => {
  const digits = v.replace(/\D/g, '')
  return digits.length >= 7 && digits.length <= 15
}
