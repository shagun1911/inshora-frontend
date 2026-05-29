import { Link } from 'react-router-dom'
import {
  Car, Home, PawPrint, Shield, Briefcase, Umbrella, Package, Droplets, Heart,
  CheckCircle, ArrowRight, ClipboardList, MessageCircle,
} from 'lucide-react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PageCta from '../components/PageCta'
import VoiceAgent from '../components/VoiceAgent'
import usePageMeta from '../hooks/usePageMeta'
import { SERVICES } from '../data/siteContent'
import { getServicePath } from '../data/servicePages'

const ICONS = { Car, Home, PawPrint, Shield, Briefcase, Umbrella, Package, Droplets, Heart }

const PROCESS = [
  { icon: ClipboardList, title: 'Tell us about your needs', text: 'Pick a product and complete our 30+ question wizard — or call an agent for flood, life, and business lines.' },
  { icon: Shield, title: 'We shop carriers', text: 'Licensed agents run your profile through 25+ A-rated companies and compare apples-to-apples coverage.' },
  { icon: MessageCircle, title: 'You choose with confidence', text: 'We explain options, answer questions (Sarah can help by voice too), and bind when you\'re ready.' },
]

export default function Services() {
  usePageMeta({
    title: 'Insurance Services | Inshora Group',
    description: 'Auto, home, renters, pet, flood, life, business, and umbrella insurance in Texas. Compare 25+ carriers.',
  })

  return (
    <Layout>
      <PageHeader
        badge="Insurance services"
        title="Coverage for every stage of life"
        subtitle="Personal and commercial lines across Texas — quoted through licensed agents who compare 25+ A-rated carriers, not a single company sales desk."
      />

      {/* Process */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">How we quote your coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="bg-white rounded-2xl border border-slate-200 p-6">
                <span className="text-xs font-bold text-slate-400 mb-3 block">Step {i + 1}</span>
                <step.icon className="w-6 h-6 text-[#0B1F8F] mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview cards */}
      <section className="py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => ['auto', 'home', 'renters', 'flood', 'life', 'business'].includes(s.id)).map((service) => {
              const Icon = ICONS[service.icon] || Shield
              const detailPath = getServicePath(`${service.id}-insurance`)
              return (
                <Link
                  key={service.id}
                  to={detailPath}
                  className="group rounded-xl border border-slate-200 p-5 hover:shadow-md hover:border-[#0B1F8F]/30 transition"
                >
                  <Icon className="w-5 h-5 text-[#0B1F8F] mb-3" />
                  <h3 className="font-bold text-slate-900 group-hover:text-[#0B1F8F] transition">{service.name}</h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{service.summary}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B1F8F] mt-3">
                    View details <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] || Shield
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid lg:grid-cols-3">
                  <div className="lg:col-span-1 bg-[#071654] text-white p-8">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{service.name}</h2>
                    <p className="text-blue-100 text-sm leading-relaxed mb-4">{service.summary}</p>
                    <Link
                      to={['auto', 'home', 'renters', 'flood', 'life', 'business'].includes(service.id) ? getServicePath(`${service.id}-insurance`) : `#${service.id}`}
                      className="inline-flex items-center gap-2 text-blue-200 text-sm font-medium hover:text-white mb-4 transition"
                    >
                      Read full guide <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {service.quoteType ? (
                      <Link
                        to={`/quote?type=${service.quoteType}`}
                        className="inline-flex items-center gap-2 bg-white text-[#0B1F8F] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-50 transition"
                      >
                        Get {service.name.split(' ')[0]} quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 border border-white/30 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/10 transition"
                      >
                        Contact an agent
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                  <div className="lg:col-span-2 p-8 bg-white">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Who it&apos;s for</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{service.whoFor}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Texas note</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{service.texasNote}</p>
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mt-8 mb-3">Coverage highlights</h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.coverage.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Sarah + quote */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Questions about coverage?</h2>
              <p className="text-slate-600 text-sm mb-6">
                Sarah explains auto, home, renters, and bundle basics by voice — no forms required to start learning.
              </p>
              <VoiceAgent variant="primary" label="Talk to Sarah" />
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] text-white p-8 flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-2">Ready for real numbers?</h2>
              <p className="text-blue-100 text-sm mb-6">
                Our quote wizard collects carrier-ready details. An agent follows up with personalized options — usually within one business day.
              </p>
              <Link to="/quote" className="inline-flex items-center gap-2 bg-white text-[#0B1F8F] px-6 py-3 rounded-xl font-semibold w-fit hover:bg-blue-50 transition">
                Open quote wizard <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </Layout>
  )
}
