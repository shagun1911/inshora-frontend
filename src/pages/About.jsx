import { Link } from 'react-router-dom'
import {
  Target, Heart, BookOpen, Building2, CheckCircle, ArrowRight,
} from 'lucide-react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PageCta from '../components/PageCta'
import usePageMeta from '../hooks/usePageMeta'
import {
  COMPANY, STATS, VALUES, MILESTONES, CARRIERS, TEAM,
} from '../data/siteContent'

export default function About() {
  usePageMeta({
    title: 'About Us | Inshora Group',
    description: 'Independent Texas insurance brokerage since 2013. Licensed agents, 25+ carriers, statewide service.',
  })

  return (
    <Layout>
      <PageHeader
        badge="About Inshora Group"
        title="Protection, security, assurance"
        subtitle="An independent Texas insurance brokerage helping families and businesses compare coverage from 25+ A-rated carriers since 2013."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Story + stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">Our story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in 2013 in Sugar Land, Texas, Inshora Group began with a clear mission: make insurance
                shopping honest, simple, and personal. As an independent brokerage, we don&apos;t push one
                carrier — we represent you and search the market for the best fit.
              </p>
              <p>
                The name <strong className="text-slate-900">Inshora</strong> comes from Hausa, meaning
                protection, security, and assurance. That philosophy guides every recommendation we make —
                from first-time auto policies to complex commercial accounts.
              </p>
              <p>
                Today we serve clients across Texas with licensed agents, a guided online quote wizard, and
                Sarah, our AI voice assistant for coverage questions. Whether you prefer digital self-service
                or a phone call with an expert, we meet you where you are.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
                <p className="text-3xl font-bold text-[#0B1F8F] mb-1">{s.value}</p>
                <p className="text-sm text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#0B1F8F] text-white p-8">
            <Target className="w-8 h-8 mb-4 text-blue-200" />
            <h2 className="text-xl font-bold mb-3">Our mission</h2>
            <p className="text-blue-100 leading-relaxed">
              Give every Texan access to affordable, adequate insurance through unbiased comparison,
              plain-language guidance, and responsive licensed agents — without spam or pressure.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-8">
            <Heart className="w-8 h-8 mb-4 text-[#0B1F8F]" />
            <h2 className="text-xl font-bold text-slate-900 mb-3">Our vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be Texas&apos;s most trusted independent brokerage — where technology and human expertise
              work together so no one overpays for coverage or stays underinsured without knowing it.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 tracking-tight">What we stand for</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 tracking-tight">Company milestones</h2>
          <div className="space-y-4">
            {MILESTONES.map((m) => (
              <div key={m.year} className="flex gap-4 sm:gap-6 items-start border-l-2 border-[#0B1F8F]/20 pl-6 py-2">
                <span className="text-sm font-bold text-[#0B1F8F] w-12 flex-shrink-0">{m.year}</span>
                <p className="text-slate-600">{m.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">Your team</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            Behind every quote is a licensed professional committed to Texas clients — supported by modern tools that speed up comparison without cutting corners.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((t) => (
              <div key={t.role} className="rounded-2xl border border-slate-200 p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[#0B1F8F] text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {t.initials}
                </div>
                <h3 className="font-bold text-slate-900">{t.role}</h3>
                <p className="text-sm text-slate-600 mt-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Carriers */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-[#0B1F8F]" />
            <h2 className="text-xl font-bold text-slate-900">Carrier partners</h2>
          </div>
          <p className="text-slate-600 mb-6 text-sm">
            We shop among 25+ A-rated carriers. Examples include:
          </p>
          <div className="flex flex-wrap gap-3">
            {CARRIERS.map((c) => (
              <span key={c} className="text-sm bg-white border border-slate-200 rounded-full px-4 py-1.5 text-slate-700">
                {c}
              </span>
            ))}
            <span className="text-sm text-slate-500 px-2 py-1.5">and more</span>
          </div>
        </div>

        {/* HQ */}
        <div className="grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Headquarters</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Visit or mail our Sugar Land office. Phone and online service are available statewide — you don&apos;t need to be local to get expert help.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" /> {COMPANY.address}, {COMPANY.city}, {COMPANY.state} {COMPANY.zip}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" /> {COMPANY.phone}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" /> {COMPANY.email}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" /> {COMPANY.hours.weekday}</li>
            </ul>
            <Link to="/locations" className="inline-flex items-center gap-1 text-[#0B1F8F] font-semibold text-sm mt-6 hover:gap-2 transition-all">
              View all service areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-[#071654] text-white p-8 md:p-10 min-h-[240px] flex flex-col justify-center">
            <BookOpen className="w-10 h-10 text-blue-300 mb-4" />
            <h3 className="text-lg font-bold mb-2">Licensed in Texas</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Inshora Group operates as an independent insurance brokerage. We are not affiliated with any single carrier — our loyalty is to clients, not commission tiers.
            </p>
          </div>
        </div>
      </div>

      <PageCta
        title="Work with a brokerage that puts you first"
        text="Compare quotes from 25+ carriers with a licensed agent who explains your options in plain English."
      />
    </Layout>
  )
}
