/** Backend origin. Empty string uses Vite dev proxy (see vite.config.js). */
export function getApiBase() {
  const url = import.meta.env.VITE_BACKEND_URL
  if (url && String(url).trim()) {
    return String(url).replace(/\/$/, '')
  }
  return ''
}
