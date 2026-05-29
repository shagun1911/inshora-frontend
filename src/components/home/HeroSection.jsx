import { ArrowRight, Car, Home, Package, PawPrint, Shield, Phone, Check, Users, Building2, ChevronDown } from 'lucide-react'
import VoiceAgent from '../VoiceAgent'

const TABS = [
  { name: 'Auto', icon: Car },
  { name: 'Home', icon: Home },
  { name: 'Renters', icon: Home },
  { name: 'Pet', icon: PawPrint },
  { name: 'Bundle', icon: Package },
]

/** 22 sample carrier rows — scrollable inside phone mockup */
const PHONE_QUOTES = [
  { carrier: 'Root Insurance', price: 71, detail: 'Full coverage · $500 ded', rating: 'A', best: true },
  { carrier: 'Progressive', price: 82, detail: 'Full coverage · $750 ded', rating: 'A+' },
  { carrier: 'GEICO', price: 84, detail: 'Standard · $500 ded', rating: 'A++' },
  { carrier: 'Allstate', price: 95, detail: 'Full coverage · $1,000 ded', rating: 'A+' },
  { carrier: 'Liberty Mutual', price: 98, detail: 'Full coverage · $500 ded', rating: 'A' },
  { carrier: 'USAA', price: 102, detail: 'Full coverage · $500 ded', rating: 'A++' },
  { carrier: 'State Farm', price: 105, detail: 'Standard · $750 ded', rating: 'A++' },
  { carrier: 'Travelers', price: 108, detail: 'Full coverage · $500 ded', rating: 'A+' },
  { carrier: 'Nationwide', price: 112, detail: 'Full coverage · $1,000 ded', rating: 'A+' },
  { carrier: 'Farmers', price: 115, detail: 'Standard · $750 ded', rating: 'A' },
  { carrier: 'MetLife', price: 118, detail: 'Full coverage · $500 ded', rating: 'A' },
  { carrier: 'American Family', price: 121, detail: 'Full coverage · $750 ded', rating: 'A' },
  { carrier: 'The General', price: 124, detail: 'Liability + comp · $1,000 ded', rating: 'A-' },
  { carrier: 'Bristol West', price: 127, detail: 'Standard · $750 ded', rating: 'A-' },
  { carrier: 'Safeco', price: 129, detail: 'Full coverage · $500 ded', rating: 'A' },
  { carrier: 'Mercury', price: 132, detail: 'Full coverage · $500 ded', rating: 'A' },
  { carrier: 'Auto-Owners', price: 135, detail: 'Full coverage · $1,000 ded', rating: 'A++' },
  { carrier: 'Erie Insurance', price: 138, detail: 'Full coverage · $500 ded', rating: 'A+' },
  { carrier: 'Kemper', price: 142, detail: 'Standard · $750 ded', rating: 'A-' },
  { carrier: 'National General', price: 145, detail: 'Liability + comp · $1,000 ded', rating: 'A-' },
  { carrier: 'Gainsco', price: 148, detail: 'Standard · $750 ded', rating: 'B+' },
  { carrier: 'Commonwealth', price: 152, detail: 'Full coverage · $500 ded', rating: 'A' },
]

const STATS = [
  { value: '25+', label: 'A-rated carriers', icon: Building2 },
  { value: '2013', label: 'Serving Texas', icon: Shield },
  { value: '30+', label: 'Wizard questions', icon: Users },
]

const TRUST_POINTS = ['Free quotes', 'Licensed agents', 'No spam calls']

export default function HeroSection({ activeTab, setActiveTab, zipCode, setZipCode, zipError, setZipError, onGetQuote }) {
  return (
    <section
      id="home"
      className="relative overflow-x-hidden bg-[#071654] pt-28 sm:pt-32 pb-24 sm:pb-32 lg:pb-40"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.35),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,90,31,0.12),_transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left — copy + quote */}
          <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-blue-100 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Licensed Texas brokerage · Est. 2013
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.1rem] font-bold leading-[1.08] tracking-tight mb-4 max-w-xl">
                Compare Texas insurance from{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-200">
                  25+ carriers
                </span>
                {' '}in one place
              </h1>

              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed mb-5 max-w-lg">
                Real quotes from licensed agents — auto, home, renters, pet & bundles. Serving Sugar Land, Houston, and all of Texas.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5 rounded-xl border border-white/15 bg-white/[0.07] px-2.5 sm:px-3 py-2.5 sm:py-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <s.icon className="w-4 h-4 text-blue-200" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl font-bold text-white leading-none">{s.value}</p>
                      <p className="text-[10px] sm:text-xs text-blue-200/80 mt-0.5 font-medium leading-tight">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs uppercase tracking-wider text-blue-200/80 font-semibold mb-2.5">Coverage type</p>
              <div className="flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActiveTab(tab.name)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeTab === tab.name
                        ? 'bg-white text-[#0B1F8F] shadow-lg'
                        : 'bg-white/10 text-white/85 border border-white/10 hover:bg-white/15'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.name}
                  </button>
                ))}
              </div>

            {/* Quote card */}
            <div className="mt-6">
              <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-2xl shadow-black/25 w-full">
                <p className="text-sm font-bold text-slate-900 mb-4">Get your free quote</p>

                <label htmlFor="hero-zip" className="block text-xs font-semibold text-slate-600 mb-2">
                  Your ZIP code
                </label>
                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                  <input
                    id="hero-zip"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 77478"
                    value={zipCode}
                    onChange={(e) => {
                      setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))
                      setZipError(false)
                    }}
                    className={`flex-1 min-w-0 px-4 py-3.5 rounded-xl border text-slate-900 placeholder:text-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-[#0B1F8F]/25 focus:border-[#0B1F8F] ${
                      zipError ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={onGetQuote}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1F8F] text-white font-bold hover:bg-[#1a3a9e] transition whitespace-nowrap sm:min-w-[160px]"
                  >
                    Get free quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {zipError && (
                  <p className="mt-2 text-sm text-red-600">Enter a valid 5-digit ZIP code</p>
                )}

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {TRUST_POINTS.map((p) => (
                      <span key={p} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        {p}
                      </span>
                    ))}
                  </div>
                  <a
                    href="tel:7139439985"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F8F] hover:underline whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    (713) 943-9985
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — phone */}
          <div className="flex justify-center lg:justify-end pt-2 lg:pt-4">
            <div className="relative w-[300px] sm:w-[320px]">
              <div className="absolute -inset-8 bg-blue-500/20 rounded-[4rem] blur-3xl pointer-events-none" />

              {/* Phone shell — fixed height, flex column */}
              <div className="relative rounded-[2.75rem] bg-slate-950 p-2 shadow-2xl shadow-black/40 ring-1 ring-white/10">
                <div className="rounded-[2.35rem] bg-slate-100 overflow-hidden flex flex-col h-[540px] sm:h-[580px]">
                  {/* Header — fixed */}
                  <div className="flex-shrink-0 relative bg-[#0B1F8F] px-4 pt-3 pb-3">
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[68px] h-[20px] bg-black rounded-full" />
                    <p className="text-center text-white font-bold text-sm pt-5">Inshora Group</p>
                    <p className="text-center text-blue-200 text-[11px] mt-0.5">
                      {activeTab} insurance · {PHONE_QUOTES.length} carriers compared
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[10px]">
                      <span className="text-emerald-300 font-semibold bg-emerald-500/20 px-2 py-0.5 rounded-full">
                        Save up to $500/yr
                      </span>
                      <span className="text-blue-200/80">Sample · ZIP 77478</span>
                    </div>
                  </div>

                  {/* Column labels */}
                  <div className="flex-shrink-0 px-3 py-2 bg-slate-200/80 border-b border-slate-300/50 flex justify-between text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    <span>Carrier & coverage</span>
                    <span>Monthly</span>
                  </div>

                  {/* Scrollable quote list — 22 items */}
                  <div className="flex-1 min-h-0 relative">
                    <div className="absolute inset-0 overflow-y-auto overscroll-contain phone-scroll px-2.5 py-2 space-y-1.5">
                      {PHONE_QUOTES.map((q, idx) => (
                        <div
                          key={q.carrier}
                          className={`flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg border bg-white ${
                            q.best
                              ? 'border-emerald-400 bg-emerald-50 ring-1 ring-emerald-200'
                              : 'border-slate-200/80'
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1 flex-wrap">
                              <span className="text-[10px] font-bold text-slate-400 w-4">{idx + 1}</span>
                              <p className="text-xs font-bold text-slate-900 truncate">{q.carrier}</p>
                              {q.best && (
                                <span className="text-[7px] uppercase font-bold bg-emerald-500 text-white px-1.5 py-px rounded-full">
                                  Best
                                </span>
                              )}
                              <span className="text-[8px] font-semibold text-slate-400 bg-slate-100 px-1 rounded">
                                {q.rating}
                              </span>
                            </div>
                            <p className="text-[9px] text-slate-500 ml-5 truncate">{q.detail}</p>
                          </div>
                          <p className={`text-sm font-bold tabular-nums flex-shrink-0 ${q.best ? 'text-emerald-600' : 'text-[#0B1F8F]'}`}>
                            ${q.price}
                          </p>
                        </div>
                      ))}
                    </div>
                    {/* Scroll hint fade */}
                    <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none flex items-end justify-center pb-0.5">
                      <ChevronDown className="w-4 h-4 text-slate-400 animate-bounce" aria-hidden />
                    </div>
                  </div>

                  {/* Sarah footer — fixed inside phone */}
                  <div className="flex-shrink-0 px-3 py-3 bg-white border-t border-slate-200">
                    <VoiceAgent variant="phone" label="Talk to Sarah" />
                    <p className="text-center text-[9px] text-slate-400 mt-1">
                      AI voice assistant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade into next section — behind content, no clip */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-0" />
    </section>
  )
}
