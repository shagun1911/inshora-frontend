import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

export default function SmartChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m here to help you find the best insurance. What can I assist you with today?' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const quickResponses = [
    'Get a car insurance quote',
    'Compare home insurance rates',
    'What coverage do I need?',
    'Speak to an agent'
  ]

  const handleSendMessage = async (text) => {
    if (!text.trim()) return

    const userMessage = { role: 'user', text }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      let botResponse = { role: 'bot', text: '' }

      if (text.toLowerCase().includes('car') || text.toLowerCase().includes('auto')) {
        botResponse.text = 'Great choice! I can help you find the best car insurance rates. What\'s your ZIP code? Or would you like me to connect you with our AI voice agent Sarah?'
      } else if (text.toLowerCase().includes('home')) {
        botResponse.text = 'Home insurance is important for protecting your investment. I can help you compare rates from top providers. What\'s your ZIP code?'
      } else if (text.toLowerCase().includes('coverage')) {
        botResponse.text = 'Coverage depends on your needs. For car insurance, most people need liability, collision, and comprehensive. For home, you\'ll want dwelling, personal property, and liability coverage. Would you like a personalized recommendation?'
      } else if (text.toLowerCase().includes('agent') || text.toLowerCase().includes('speak')) {
        botResponse.text = 'I can connect you with our AI voice agent Sarah who\'s available 24/7. Just click the microphone button on the page, or I can start the connection for you. Would you like me to do that?'
      } else {
        botResponse.text = 'I\'d be happy to help you with that! Could you tell me more about what type of insurance you\'re looking for? I can help with car, home, renters, or pet insurance.'
      }

      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickResponse = (response) => {
    handleSendMessage(response)
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-40 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Quick help</h3>
                <p className="text-xs text-blue-100">Guided answers — contact us or talk to Sarah for full support</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white'
                      : 'bg-white shadow-sm'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-[#0B1F8F] hover:text-[#0B1F8F] transition"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-[#0B1F8F] text-sm"
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={!input.trim()}
                className="w-10 h-10 bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white rounded-full flex items-center justify-center hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
