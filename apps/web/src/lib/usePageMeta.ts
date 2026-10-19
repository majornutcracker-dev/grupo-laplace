import { useEffect } from 'react'

/** Título y meta descripción por página (SEO básico en SPA). */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
