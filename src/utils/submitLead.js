import { getApiBase } from './apiBase'

export async function submitLead(payload) {
  const response = await fetch(`${getApiBase()}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  let data = {}
  try {
    data = await response.json()
  } catch {
    throw new Error('Failed to submit. Please try again or call (713) 943-9985.')
  }
  if (!response.ok || !data.success) {
    const msg = data.error || ''
    if (msg.includes('E11000') || msg.includes('duplicate key')) {
      throw new Error('We already have your request on file. We will contact you soon, or call (713) 943-9985.')
    }
    throw new Error(msg || 'Failed to submit. Please try again or call (713) 943-9985.')
  }
  return data
}

export function isValidZip(zip) {
  return /^\d{5}$/.test(String(zip || '').trim())
}
