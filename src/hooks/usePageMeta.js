import { useEffect } from 'react'

export default function usePageMeta({ title, description, canonical, jsonLd }) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    let meta = document.querySelector('meta[name="description"]')
    const prevDescription = meta?.getAttribute('content')
    if (description && meta) {
      meta.setAttribute('content', description)
    }

    let canonicalEl = document.querySelector('link[rel="canonical"]')
    const prevCanonical = canonicalEl?.getAttribute('href')
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement('link')
        canonicalEl.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalEl)
      }
      canonicalEl.setAttribute('href', canonical)
    }

    const jsonLdScripts = []
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      items.forEach((data, i) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-page-meta', String(i))
        script.textContent = JSON.stringify(data)
        document.head.appendChild(script)
        jsonLdScripts.push(script)
      })
    }

    return () => {
      document.title = prevTitle
      if (description && meta && prevDescription) {
        meta.setAttribute('content', prevDescription)
      }
      if (canonicalEl) {
        if (prevCanonical) {
          canonicalEl.setAttribute('href', prevCanonical)
        } else {
          canonicalEl.remove()
        }
      }
      jsonLdScripts.forEach((s) => s.remove())
    }
  }, [title, description, canonical, jsonLd])
}
