import { useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, CheckCircle, MessageSquare, FileQuestion } from 'lucide-react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PageCta from '../components/PageCta'
import VoiceAgent from '../components/VoiceAgent'
import usePageMeta from '../hooks/usePageMeta'
import { submitLead } from '../utils/submitLead'
import { COMPANY, CONTACT_FAQS } from '../data/siteContent'

const CHANNELS = [
  {
    icon: Phone,
    title: 'Phone',
    primary: COMPANY.phone,
    href: `tel:${COMPANY.phoneTel}`,
    detail: `${COMPANY.hours.weekday}. ${COMPANY.hours.saturday}.`,
    bestFor: 'Urgent questions, complex quotes, flood/life/business lines',
  },
  {
    icon: Mail,
    title: 'Email',
    primary: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    detail: 'We respond within one business day.',
    bestFor: 'Documents, detailed inquiries, non-urgent follow-ups',
  },
  {
    icon: MapPin,
    title: 'Office',
    primary: `${COMPANY.city}, ${COMPANY.state}`,
    href: null,
    detail: `${COMPANY.address}, ${COMPANY.city}, ${COMPANY.state} ${COMPANY.zip}`,
    bestFor: 'In-person meetings by appointment',
  },
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', zip: '', insurance_type: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  usePageMeta({
    title: 'Contact Us | Inshora Group',
    description: 'Reach Inshora Group for Texas insurance quotes, licensed agent support, and general inquiries.',
  })

  useEffect(() => {
    const zip = searchParams.get('zip')
    const type = searchParams.get('type')
    if (zip || type) {
      const params = new URLSearchParams()
      if (zip) params.set('zip', zip)
      if (type) params.set('type', type)
      navigate(`/quote?${params.toString()}`, { replace: true })
    }
  }, [searchParams, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await submitLead({ ...formData, source: 'contact', subject: formData.insurance_type })
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <PageHeader
        badge="Contact"
        title="We're here to help"
        subtitle="Licensed Texas agents for quotes, coverage questions, and specialty lines. Choose the channel that works best for you."
      />

      {/* Channels */}
      <section className="py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {CHANNELS.map((ch) => (
              <div key={ch.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-[#0B1F8F]/10 flex items-center justify-center mb-4">
                  <ch.icon className="w-5 h-5 text-[#0B1F8F]" />
                </div>
                <h2 className="font-bold text-slate-900 mb-1">{ch.title}</h2>
                {ch.href ? (
                  <a href={ch.href} className="text-[#0B1F8F] font-semibold hover:underline block mb-2">{ch.primary}</a>
                ) : (
                  <p className="font-semibold text-slate-900 mb-2">{ch.primary}</p>
                )}
                <p className="text-sm text-slate-600 mb-3">{ch.detail}</p>
                <p className="text-xs text-slate-500"><strong>Best for:</strong> {ch.bestFor}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 rounded-2xl bg-slate-50 border border-slate-200 p-8">
            <div>
              <MessageSquare className="w-8 h-8 text-[#0B1F8F] mb-4" />
              <h2 className="text-xl font-bold text-slate-900 mb-2">Need a full insurance quote?</h2>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                For auto, home, renters, pet, or bundle quotes, our wizard collects 30+ carrier-ready questions. Faster than back-and-forth email for accurate pricing.
              </p>
              <Link to="/quote" className="inline-flex items-center gap-2 bg-[#0B1F8F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1C2ED6] transition">
                Open quote wizard <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <Clock className="w-8 h-8 text-[#FF5A1F] mb-4" />
              <h2 className="text-xl font-bold text-slate-900 mb-2">Talk to Sarah by voice</h2>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Ask coverage questions hands-free. Sarah explains Texas insurance basics — then you can start the wizard when you&apos;re ready.
              </p>
              <VoiceAgent variant="primary" label="Talk to Sarah" />
            </div>
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a message</h2>
              <p className="text-slate-600 text-sm mb-8">
                General inquiries, specialty lines (flood, life, business), or questions that don&apos;t fit the quote wizard.
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center" role="status">
                  <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message sent</h3>
                  <p className="text-slate-600">We&apos;ll respond within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                  <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full name *</label>
                      <input id="contact-name" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100" placeholder="Jane Smith" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                        <input id="contact-email" type="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100" />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                        <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-type" className="block text-sm font-semibold text-slate-700 mb-1.5">Insurance type</label>
                        <select id="contact-type" name="insurance_type" value={formData.insurance_type} onChange={(e) => setFormData({ ...formData, insurance_type: e.target.value })} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100">
                          <option value="">Select type</option>
                          <option value="auto">Auto</option>
                          <option value="home">Home</option>
                          <option value="renters">Renters</option>
                          <option value="flood">Flood</option>
                          <option value="life">Life</option>
                          <option value="business">Business</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-zip" className="block text-sm font-semibold text-slate-700 mb-1.5">ZIP code</label>
                        <input id="contact-zip" name="zip" maxLength={5} value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100" placeholder="77478" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
                      <textarea id="contact-message" name="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100 resize-none" placeholder="How can we help?" />
                    </div>
                    {error && <p className="text-red-600 text-sm" role="alert">{error}</p>}
                    <button type="submit" disabled={loading} className="w-full bg-[#0B1F8F] text-white py-3.5 rounded-xl font-semibold hover:bg-[#1C2ED6] disabled:opacity-60 flex items-center justify-center gap-2">
                      {loading ? 'Sending…' : 'Send message'} <Send className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-slate-500 text-center">
                      By submitting, you agree to our <Link to="/privacy" className="text-[#0B1F8F] hover:underline">Privacy Policy</Link>.
                    </p>
                  </div>
                </form>
              )}
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <FileQuestion className="w-5 h-5 text-[#0B1F8F]" />
                <h2 className="text-lg font-bold text-slate-900">Contact FAQ</h2>
              </div>
              <div className="space-y-3">
                {CONTACT_FAQS.map((faq, i) => (
                  <div key={faq.q} className="rounded-xl border border-slate-200 overflow-hidden">
                    <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50 flex justify-between gap-2">
                      {faq.q}
                      <span className="text-slate-400">{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && (
                      <p className="px-4 pb-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta title="Prefer to start a quote now?" primaryLabel="Go to quote wizard" />
    </Layout>
  )
}
