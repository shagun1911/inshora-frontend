import { useEffect } from 'react'

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    let meta = document.querySelector('meta[name="description"]')
    const prevDescription = meta?.getAttribute('content')
    if (description && meta) {
      meta.setAttribute('content', description)
    }

    return () => {
      document.title = prevTitle
      if (description && meta && prevDescription) {
        meta.setAttribute('content', prevDescription)
      }
    }
  }, [title, description])
}
