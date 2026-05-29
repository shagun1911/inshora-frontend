import { getApiBase } from './apiBase'

export async function submitQuoteIntake(payload) {
  const response = await fetch(`${getApiBase()}/api/quote-intake`, {
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
    throw new Error(data.error || 'Failed to submit. Please try again or call (713) 943-9985.')
  }
  return data
}

export { isValidZip, submitLead } from './submitLead'
