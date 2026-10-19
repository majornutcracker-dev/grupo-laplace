import { useId, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { AlertCircle, Check, CheckCircle2, ChevronDown } from 'lucide-react'
import { cn } from '../../lib/cn'

type FieldState = { error?: string; success?: string; hint?: string }

const controlBase =
  'w-full rounded-md border bg-surface-default px-3.5 text-text-primary type-body placeholder:text-neutral-500 ' +
  'transition-[border-color,box-shadow] duration-200 ease-standard ' +
  'hover:border-neutral-400 focus:outline-none focus:border-celeste-600 focus:shadow-focus ' +
  'disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-500'

const stateBorder = ({ error, success }: FieldState) =>
  error ? 'border-feedback-error focus:border-feedback-error' : success ? 'border-feedback-success' : 'border-border-strong'

/** Envoltura accesible: etiqueta, ayuda y mensaje de validación enlazados por aria-describedby. */
export function Field({ label, required, optional, hint, error, success, children, id, className }: FieldState & {
  label: string
  required?: boolean
  optional?: boolean
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="type-label text-text-primary">
        {label}
        {required && <span className="ml-0.5 text-feedback-error" aria-hidden>*</span>}
        {optional && <span className="ml-1 font-normal text-text-muted">(opcional)</span>}
      </label>
      {children}
      <FieldMessage id={id} hint={hint} error={error} success={success} />
    </div>
  )
}

export function FieldMessage({ id, hint, error, success }: FieldState & { id: string }) {
  if (error)
    return (
      <p id={`${id}-msg`} className="type-caption flex items-start gap-1.5 text-feedback-error">
        <AlertCircle className="mt-px size-4 shrink-0" aria-hidden />
        {error}
      </p>
    )
  if (success)
    return (
      <p id={`${id}-msg`} className="type-caption flex items-start gap-1.5 text-feedback-success">
        <CheckCircle2 className="mt-px size-4 shrink-0" aria-hidden />
        {success}
      </p>
    )
  if (hint) return <p id={`${id}-msg`} className="type-caption text-text-muted">{hint}</p>
  return null
}

const describedBy = (id: string, s: FieldState) => (s.error || s.success || s.hint ? `${id}-msg` : undefined)

export function Input({ id, error, success, hint, className, ...rest }: InputHTMLAttributes<HTMLInputElement> & FieldState & { id: string }) {
  return (
    <input
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy(id, { error, success, hint })}
      className={cn(controlBase, 'min-h-12', stateBorder({ error, success }), className)}
      {...rest}
    />
  )
}

export function Textarea({ id, error, success, hint, className, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement> & FieldState & { id: string }) {
  return (
    <textarea
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy(id, { error, success, hint })}
      className={cn(controlBase, 'min-h-32 resize-y py-3', stateBorder({ error, success }), className)}
      {...rest}
    />
  )
}

export function Select({ id, error, success, hint, className, children, ...rest }: SelectHTMLAttributes<HTMLSelectElement> & FieldState & { id: string }) {
  return (
    <div className="relative">
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, { error, success, hint })}
        className={cn(controlBase, 'min-h-12 appearance-none pr-10', stateBorder({ error, success }), className)}
        {...rest}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-neutral-600" aria-hidden />
    </div>
  )
}

export function Checkbox({ label, description, error, className, id: idProp, ...rest }: InputHTMLAttributes<HTMLInputElement> & { label: ReactNode; description?: string; error?: string }) {
  const autoId = useId()
  const id = idProp ?? autoId
  return (
    <div className={className}>
      <label htmlFor={id} className="group flex cursor-pointer items-start gap-3">
        <span className="relative mt-0.5 inline-grid size-5 shrink-0 place-items-center">
          <input
            id={id}
            type="checkbox"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-msg` : undefined}
            className={cn(
              'peer size-5 cursor-pointer appearance-none rounded-sm border-2 bg-white transition-colors duration-150',
              'checked:border-navy-900 checked:bg-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error ? 'border-feedback-error' : 'border-neutral-400 group-hover:border-navy-700',
            )}
            {...rest}
          />
          <Check className="pointer-events-none absolute size-3.5 text-white opacity-0 peer-checked:opacity-100" strokeWidth={3} aria-hidden />
        </span>
        <span className="type-body-sm text-text-primary">
          {label}
          {description && <span className="block text-text-muted">{description}</span>}
        </span>
      </label>
      {error && <FieldMessage id={id} error={error} />}
    </div>
  )
}

export function RadioGroup({ legend, name, options, value, onChange, error, inline }: {
  legend: string
  name: string
  options: Array<{ value: string; label: string; description?: string }>
  value?: string
  onChange?: (v: string) => void
  error?: string
  inline?: boolean
}) {
  const id = useId()
  return (
    <fieldset aria-describedby={error ? `${id}-msg` : undefined}>
      <legend className="type-label mb-2 text-text-primary">{legend}</legend>
      <div className={cn('flex gap-3', inline ? 'flex-wrap' : 'flex-col')}>
        {options.map((o, i) => (
          <label
            key={o.value}
            className={cn(
              'flex cursor-pointer items-start gap-3 rounded-md border px-4 py-3 transition-colors duration-150',
              value === o.value ? 'border-navy-900 bg-navy-50' : 'border-border-default hover:border-border-strong',
            )}
          >
            <input
              id={i === 0 ? `f-${name}` : undefined}
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange?.(o.value)}
              className={cn(
                'mt-0.5 size-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-neutral-400 bg-white transition-all duration-150',
                'checked:border-[6px] checked:border-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
              )}
            />
            <span className="type-body-sm text-text-primary">
              <span className="font-semibold">{o.label}</span>
              {o.description && <span className="block text-text-muted">{o.description}</span>}
            </span>
          </label>
        ))}
      </div>
      {error && <div className="mt-2"><FieldMessage id={id} error={error} /></div>}
    </fieldset>
  )
}
