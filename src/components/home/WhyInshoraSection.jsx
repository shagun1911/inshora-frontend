import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

const stats = [
  { value: '25+', label: 'A-rated carriers' },
  { value: '2013', label: 'Serving Texas since' },
  { value: '13+', label: 'Metro areas' },
  { value: '30+', label: 'Wizard questions per quote' },
]

const cities = ['Sugar Land', 'Houston', 'Richmond', 'Katy', 'Dallas', 'Austin', 'San Antonio']

export default function WhyInshoraSection() {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">Why Inshora Group</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Protection, security, assurance — that&apos;s what Inshora means
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We&apos;re an independent brokerage, not a single insurance company. That means we work for you — comparing options across carriers to find coverage that fits your life and budget.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Headquartered in Sugar Land, TX. Licensed agents for auto, home, renters, flood, life, business, and more.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-white font-semibold border border-white/20 rounded-full px-5 py-2.5 hover:bg-white/10 transition"
            >
              About our team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-sm text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <div className="flex items-center gap-2 text-blue-200 text-sm font-semibold mb-3">
                <MapPin className="w-4 h-4" /> Texas service areas
              </div>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <span key={c} className="text-xs bg-white/10 rounded-full px-3 py-1 text-slate-300">
                    {c}
                  </span>
                ))}
                <Link to="/locations" className="text-xs text-blue-300 hover:text-white px-2 py-1">
                  + more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
