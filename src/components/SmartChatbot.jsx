import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { sendChatMessage } from '../utils/chatApi'

const GREETING =
  "Hi! I'm the Inshora Group assistant. I can help with auto, home, renters, flood, life, and business insurance in Texas — coverage questions, how quoting works, or next steps. How can I help you today?"

export default function SmartChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', text: GREETING }])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const quickResponses = [
    'How do I get a quote?',
    'What auto coverage do I need in Texas?',
    'Do I need flood insurance?',
    'Talk to a licensed agent',
  ]

  const handleSendMessage = async (text) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return

    setError('')
    const userMessage = { role: 'user', text: trimmed }
    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setInput('')
    setIsTyping(true)

    try {
      const reply = await sendChatMessage(nextMessages)
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }])
    } catch (err) {
      setError(err.message)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Sorry, I had trouble responding. You can call (713) 943-9985 or start our quote wizard for help.',
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300"
          aria-label="Open chat assistant"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          role="dialog"
          aria-label="Inshora chat assistant"
        >
          <div className="bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold">Inshora Assistant</h3>
                <p className="text-xs text-blue-100">AI-powered · Texas insurance help</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white'
                      : 'bg-white shadow-sm text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm p-3 rounded-2xl">
                  <div className="flex gap-1" aria-hidden>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && !isTyping && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {quickResponses.map((response) => (
                  <button
                    key={response}
                    type="button"
                    onClick={() => handleSendMessage(response)}
                    className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-[#0B1F8F] hover:text-[#0B1F8F] transition"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-white border-t border-gray-100">
            {error && (
              <p className="text-xs text-red-600 mb-2" role="alert">
                {error}
              </p>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
                placeholder="Ask about coverage, quotes, Texas insurance..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100 text-sm"
                disabled={isTyping}
                aria-label="Chat message"
              />
              <button
                type="button"
                onClick={() => handleSendMessage(input)}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white rounded-full flex items-center justify-center hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 text-center">
              AI assistant · Not a binding quote ·{' '}
              <Link to="/quote" className="text-[#0B1F8F] hover:underline">
                Get a quote
              </Link>
              {' · '}
              <Link to="/contact" className="text-[#0B1F8F] hover:underline">
                Contact an agent
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
