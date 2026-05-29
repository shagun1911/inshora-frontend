import { ArrowRight, ClipboardList, MessageCircle, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import VoiceAgent from '../VoiceAgent'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Enter your ZIP',
    text: 'Choose auto, home, renters, pet, or bundle on the homepage or quote page.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Answer guided questions',
    text: 'Our wizard collects 30+ carrier-ready details — the same info big sites ask for.',
  },
  {
    icon: MessageCircle,
    step: '03',
    title: 'Agent compares & follows up',
    text: 'A licensed Inshora agent shops 25+ carriers and contacts you with real options.',
  },
]

export default function HowItWorksSection({ onGetQuote, wizardLink }) {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[#0B1F8F] uppercase tracking-wider mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Three steps to personalized quotes
          </h2>
          <p className="text-lg text-slate-600">
            No instant-rate gimmicks — real agents, real carrier systems, real follow-up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-bold text-slate-300 absolute top-6 right-6">{s.step}</span>
              <div className="w-11 h-11 rounded-xl bg-[#0B1F8F]/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-[#0B1F8F]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Start online</h3>
              <p className="text-slate-600 text-sm mb-6">
                Complete the quote wizard at your pace — most people finish in under 10 minutes.
              </p>
            </div>
            <Link
              to={wizardLink}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#0B1F8F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1C2ED6] transition"
            >
              Open quote wizard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#0B1F8F] to-[#1e40af] p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Talk to Sarah</h3>
              <p className="text-blue-100 text-sm mb-6">
                Our AI voice assistant answers coverage questions and guides you — tap to speak, no forms required.
              </p>
            </div>
            <VoiceAgent variant="primary" label="Talk to Sarah" />
          </div>
        </div>
      </div>
    </section>
  )
}
