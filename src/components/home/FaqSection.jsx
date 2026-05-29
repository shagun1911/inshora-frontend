import { ChevronDown } from 'lucide-react'

export default function FaqSection({ faqs, openFaq, toggleFaq }) {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#0B1F8F] uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Common questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white transition"
                aria-expanded={openFaq === index}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
