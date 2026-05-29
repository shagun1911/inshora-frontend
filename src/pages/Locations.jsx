import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, ArrowRight, CheckCircle, Globe, Building2 } from 'lucide-react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PageCta from '../components/PageCta'
import usePageMeta from '../hooks/usePageMeta'
import { COMPANY, REGIONS, ALL_CITIES } from '../data/siteContent'

export default function Locations() {
  usePageMeta({
    title: 'Locations & Service Areas | Inshora Group',
    description: 'Inshora Group serves Texas statewide from Sugar Land HQ. Houston, Dallas, Austin, San Antonio, and more.',
  })

  return (
    <Layout>
      <PageHeader
        badge="Texas service areas"
        title="Serving communities across the Lone Star State"
        subtitle="Headquartered in Sugar Land with licensed agents supporting clients statewide by phone, online quote wizard, and email."
      />

      {/* HQ */}
      <section className="py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl border-2 border-[#0B1F8F] bg-white p-8 shadow-lg">
              <span className="inline-block bg-[#0B1F8F] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                Headquarters
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{COMPANY.city}, {COMPANY.state}</h2>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#0B1F8F] flex-shrink-0" />
                  <span>{COMPANY.address}<br />{COMPANY.city}, {COMPANY.state} {COMPANY.zip}</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-[#0B1F8F] flex-shrink-0" />
                  <a href={`tel:${COMPANY.phoneTel}`} className="font-semibold text-[#0B1F8F] hover:underline">{COMPANY.phone}</a>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-[#0B1F8F] flex-shrink-0" />
                  <span>{COMPANY.hours.weekday}<br />{COMPANY.hours.saturday}</span>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-[#0B1F8F] font-semibold text-sm hover:gap-3 transition-all">
                Contact this office <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Statewide, not storefront-limited</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                You don&apos;t need to visit our office to get expert help. Most clients complete our quote wizard online and speak with agents by phone. We&apos;re licensed for all Texas counties.
              </p>
              <ul className="space-y-3">
                {[
                  'Licensed in all Texas counties',
                  'Online quote wizard with ZIP-based routing',
                  'Phone & email support from licensed agents',
                  'Sarah voice assistant available 24/7 on our website',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Regional expertise</h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            Texas is diverse — coastal wind, Hill Country wildfire, DFW hail, and urban flood zones all change what &quot;good coverage&quot; means. We factor local risks into every recommendation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {REGIONS.map((region) => (
              <div key={region.name} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-[#0B1F8F]" />
                  <h3 className="font-bold text-slate-900">{region.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {region.cities.map((city) => (
                    <span key={city} className="text-xs bg-slate-100 text-slate-700 rounded-full px-3 py-1">
                      {city}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-800">Local risks: </strong>{region.risks}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All cities grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-[#0B1F8F]" />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Cities we regularly serve</h2>
          </div>
          <p className="text-slate-600 mb-8 text-sm">
            Don&apos;t see your city? We likely still serve your ZIP — call {COMPANY.phone} to confirm.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {ALL_CITIES.map((city) => (
              <div
                key={city}
                className="text-center py-3 px-2 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700 hover:border-[#0B1F8F]/30 hover:bg-blue-50/50 transition"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not in area */}
      <section className="py-16 bg-[#071654] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Outside our listed cities?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            If you&apos;re in Texas, we can almost certainly help. Contact us with your ZIP code and insurance needs — we&apos;ll confirm carrier availability and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/quote" className="inline-flex items-center justify-center gap-2 bg-white text-[#0B1F8F] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
              Start quote wizard <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <PageCta primaryLabel="Get a quote for your ZIP" />
    </Layout>
  )
}
