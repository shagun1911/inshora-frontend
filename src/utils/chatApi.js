import { getApiBase } from './apiBase'

export async function sendChatMessage(messages) {
  const response = await fetch(`${getApiBase()}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: messages.map((m) => ({
        role: m.role === 'bot' ? 'assistant' : m.role,
        content: m.text,
      })),
    }),
  })

  let data = {}
  try {
    data = await response.json()
  } catch {
    throw new Error('Could not reach the assistant. Please try again or call (713) 943-9985.')
  }

  if (!response.ok || !data.success) {
    throw new Error(data.error || 'Chat unavailable. Please call (713) 943-9985.')
  }

  return data.reply
}
