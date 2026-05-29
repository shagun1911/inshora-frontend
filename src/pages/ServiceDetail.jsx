import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import {
  Car, Home, Droplets, Heart, Briefcase, CheckCircle, ArrowRight, Phone, AlertCircle,
} from 'lucide-react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PageCta from '../components/PageCta'
import VoiceAgent from '../components/VoiceAgent'
import usePageMeta from '../hooks/usePageMeta'
import { getServiceBySlug, getServicePath, SERVICE_PAGES } from '../data/servicePages'
import { COMPANY } from '../data/siteContent'

const ICONS = { Car, Home, Droplets, Heart, Briefcase }

function ServiceDetailContent({ service }) {
  const [openFaq, setOpenFaq] = useState(null)
  const Icon = ICONS[service.icon] || CheckCircle
  const canonical = `https://www.inshoragroup.com/services/${service.slug}`

  usePageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.metaDescription,
      provider: {
        '@type': 'InsuranceAgency',
        name: 'Inshora Group',
        telephone: COMPANY.phone,
        url: 'https://www.inshoragroup.com',
      },
      areaServed: { '@type': 'State', name: 'Texas' },
      url: canonical,
    },
  })

  const related = service.relatedSlugs
    .map((s) => SERVICE_PAGES.find((p) => p.slug === s))
    .filter(Boolean)

  return (
    <Layout>
      <PageHeader badge={service.badge} title={service.heroTitle} subtitle={service.heroSubtitle} />

      <section className="py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
              {service.overview.map((p) => (
                <p key={p.slice(0, 40)} className="text-slate-600 leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="rounded-2xl bg-[#071654] text-white p-6 h-fit">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-4">Get {service.name}</h3>
              {service.quoteType ? (
                <Link
                  to={`/quote?type=${service.quoteType}`}
                  className="flex items-center justify-center gap-2 w-full bg-white text-[#0B1F8F] py-3 rounded-xl font-semibold hover:bg-blue-50 transition mb-3"
                >
                  Start quote wizard <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-white text-[#0B1F8F] py-3 rounded-xl font-semibold hover:bg-blue-50 transition mb-3"
                >
                  Contact an agent <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="flex items-center justify-center gap-2 w-full border border-white/30 py-3 rounded-xl font-semibold hover:bg-white/10 transition text-sm"
              >
                <Phone className="w-4 h-4" /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Why quote {service.name.toLowerCase()} with Inshora</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl border border-slate-200 p-5">
                <CheckCircle className="w-5 h-5 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-900 text-sm mb-2">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Coverage details</h2>
          <p className="text-slate-600 text-sm mb-8 max-w-2xl">
            What a typical {service.name.toLowerCase()} policy can include — exact options vary by carrier and your profile.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {service.coverage.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50/50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-5 h-5 text-amber-700" />
            <h2 className="text-2xl font-bold text-slate-900">Texas-specific considerations</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {service.texasNotes.map((note) => (
              <li key={note} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">How to get started</h2>
              <ol className="space-y-4">
                {service.howItWorks.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#0B1F8F] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-2">Questions about {service.name.toLowerCase()}?</h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Sarah, our AI voice assistant, can explain coverage basics hands-free. For binding quotes, use the wizard or call a licensed agent.
              </p>
              <VoiceAgent variant="primary" label="Talk to Sarah" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <div key={faq.q} className="rounded-xl border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 flex justify-between gap-4 text-sm"
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className="text-slate-400">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related coverage</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((rel) => {
                const RelIcon = ICONS[rel.icon] || CheckCircle
                return (
                  <Link
                    key={rel.slug}
                    to={getServicePath(rel.slug)}
                    className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0B1F8F]/10 flex items-center justify-center">
                      <RelIcon className="w-5 h-5 text-[#0B1F8F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{rel.name}</p>
                      <p className="text-xs text-slate-500">Learn more →</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <PageCta
        title={service.quoteType ? `Ready for your ${service.name.toLowerCase()} quote?` : `Need ${service.name.toLowerCase()}?`}
        text="Licensed Texas agents compare 25+ A-rated carriers — usually within one business day."
        primaryLabel={service.quoteType ? 'Start quote wizard' : 'Contact us'}
        primaryTo={service.quoteType ? `/quote?type=${service.quoteType}` : '/contact'}
      />
    </Layout>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return <ServiceDetailContent service={service} />
}
