import { useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, CheckCircle } from 'lucide-react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import usePageMeta from '../hooks/usePageMeta'
import { submitLead } from '../utils/submitLead'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    insurance_type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  usePageMeta({
    title: 'Contact Us | Inshora Group',
    description: 'Contact Inshora Group for Texas insurance quotes and licensed agent support.',
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
      await submitLead({
        ...formData,
        source: 'contact',
        subject: formData.insurance_type,
      })
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for expert insurance advice and free quotes"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Have questions about insurance? Need a quote? Our licensed Texas agents are here to help.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0B1F8F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:7139439985" className="text-[#0B1F8F] font-semibold text-lg hover:underline">
                      (713) 943-9985
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon–Fri 8AM–8PM CT, Sat 10AM–4PM CT</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0B1F8F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:support@inshoragroup.com" className="text-[#0B1F8F] font-semibold hover:underline">
                      support@inshoragroup.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0B1F8F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      6920 Brisbane Court, Ste 234<br />
                      Sugar Land, TX 77478
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0B1F8F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday – Friday: 8:00AM – 8:00PM CT<br />
                      Saturday: 10:00AM – 4:00PM CT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Need a Full Quote?</h3>
              <p className="text-blue-100 mb-4">Use our guided wizard with 30+ carrier-ready questions</p>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 bg-white text-[#0B1F8F] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center" role="status" aria-live="polite">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100 transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100 transition"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100 transition"
                        placeholder="(713) 555-1234"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-type" className="block text-sm font-semibold text-gray-700 mb-2">
                        Insurance type
                      </label>
                      <select
                        id="contact-type"
                        name="insurance_type"
                        value={formData.insurance_type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100 transition"
                      >
                        <option value="">Select type</option>
                        <option value="auto">Auto Insurance</option>
                        <option value="home">Home Insurance</option>
                        <option value="renters">Renters Insurance</option>
                        <option value="flood">Flood Insurance</option>
                        <option value="life">Life Insurance</option>
                        <option value="business">Business Insurance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-zip" className="block text-sm font-semibold text-gray-700 mb-2">
                        ZIP code
                      </label>
                      <input
                        id="contact-zip"
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        maxLength={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100 transition"
                        placeholder="77478"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0B1F8F] focus:ring-2 focus:ring-blue-100 transition resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm" role="alert" aria-live="assertive">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0B1F8F] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#1C2ED6] transition flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  By submitting, you agree to our{' '}
                  <Link to="/privacy" className="text-[#0B1F8F] hover:underline">Privacy Policy</Link>
                  {' '}and{' '}
                  <Link to="/terms" className="text-[#0B1F8F] hover:underline">Terms</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
