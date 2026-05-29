import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Shield, Lock, Clock } from 'lucide-react'
import Layout from '../components/Layout'
import QuoteField from '../components/quote/QuoteField'
import { labelClass, inputClass } from '../components/quote/quoteStyles'
import usePageMeta from '../hooks/usePageMeta'
import { submitQuoteIntake, isValidZip } from '../utils/submitQuote'
import {
  INSURANCE_TYPES,
  QUOTE_FLOWS,
  getEmptyDetails,
  getFlowSteps,
  countQuestions,
  isFieldVisible,
  validateStep,
} from '../data/quoteFlows'

export default function Quote() {
  const [searchParams] = useSearchParams()
  const [phase, setPhase] = useState('start')
  const [stepIndex, setStepIndex] = useState(0)
  const [zip, setZip] = useState('')
  const [insuranceType, setInsuranceType] = useState('auto')
  const [details, setDetails] = useState(getEmptyDetails('auto'))
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const steps = useMemo(() => getFlowSteps(insuranceType), [insuranceType])
  const currentStep = steps[stepIndex]
  const totalSteps = steps.length + 1
  const currentDisplayStep = phase === 'start' ? 1 : stepIndex + 2
  const progress = done ? 100 : Math.round(((currentDisplayStep - 1) / totalSteps) * 100)
  const questionCount = countQuestions(insuranceType)

  usePageMeta({
    title: 'Get a Free Quote | Inshora Group',
    description: 'Complete our guided quote request — a licensed Texas agent will compare 25+ carriers and follow up personally.',
  })

  useEffect(() => {
    const qZip = searchParams.get('zip') || ''
    const qType = searchParams.get('type') || 'auto'
    if (isValidZip(qZip)) setZip(qZip)
    if (INSURANCE_TYPES.some((t) => t.id === qType)) {
      setInsuranceType(qType)
      setDetails(getEmptyDetails(qType))
    }
  }, [searchParams])

  const setType = (typeId) => {
    setInsuranceType(typeId)
    setDetails(getEmptyDetails(typeId))
    setStepIndex(0)
  }

  const updateDetail = (field, value) => {
    setDetails((prev) => ({ ...prev, [field]: value }))
  }

  const visibleFields = currentStep
    ? currentStep.fields.filter((f) => isFieldVisible(f, details))
    : []

  const validateStart = () => {
    if (!isValidZip(zip)) {
      setError('Enter a valid 5-digit Texas ZIP code.')
      return false
    }
    setError('')
    return true
  }

  const validateCurrentStep = () => {
    if (!currentStep) return false
    if (currentStep.id === 'contact') {
      if (!details.first_name?.trim() || !details.last_name?.trim()) {
        setError('First and last name are required.')
        return false
      }
      if (!details.phone?.trim() || !details.email?.trim()) {
        setError('Phone and email are required.')
        return false
      }
      if (!details.email.includes('@')) {
        setError('Please enter a valid email address.')
        return false
      }
      if (!consent) {
        setError('Please agree to be contacted about your quote request.')
        return false
      }
      setError('')
      return true
    }
    const msg = validateStep(currentStep, details)
    if (msg) {
      setError(msg)
      return false
    }
    setError('')
    return true
  }

  const handleStart = () => {
    if (!validateStart()) return
    setPhase('wizard')
    setStepIndex(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNext = () => {
    if (!validateCurrentStep()) return
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    setError('')
    if (stepIndex > 0) {
      setStepIndex((i) => i - 1)
    } else {
      setPhase('start')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateCurrentStep()) return
    setSubmitting(true)
    setError('')
    const name = `${details.first_name.trim()} ${details.last_name.trim()}`
    const { first_name, last_name, phone, email, preferred_contact, best_time, notes, ...quoteFields } = details
    try {
      await submitQuoteIntake({
        name,
        email: email.trim(),
        phone: phone.trim(),
        zip,
        insurance_type: insuranceType,
        message: notes?.trim() || '',
        quote_data: {
          ...quoteFields,
          preferred_contact,
          best_time,
          insurance_type: insuranceType,
          zip_code: zip,
        },
      })
      setDone(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  const typeLabel = INSURANCE_TYPES.find((t) => t.id === insuranceType)?.label

  return (
    <Layout>
      <div className="bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white py-10 pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Get Your Free Quote</h1>
          <p className="text-blue-100 mb-4">
            Answer a few guided questions — our licensed agents compare 25+ carriers and follow up with personalized options.
          </p>
          {!done && (
            <div className="flex flex-wrap gap-4 text-sm text-blue-100">
              <span className="inline-flex items-center gap-1.5"><Lock className="w-4 h-4" /> Secure & confidential</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> About {Math.max(5, Math.ceil(questionCount / 6))} min to complete</span>
              <span className="inline-flex items-center gap-1.5"><Shield className="w-4 h-4" /> No obligation</span>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!done && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>
                {phase === 'start'
                  ? 'Step 1 — Get started'
                  : `Step ${currentDisplayStep} of ${totalSteps} — ${currentStep?.title}`}
              </span>
              <span>{progress}% complete</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            {phase === 'wizard' && currentStep && (
              <p className="text-xs text-gray-500 mt-2">
                {typeLabel} · ZIP {zip} · {visibleFields.length} questions on this step
              </p>
            )}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          {error && (
            <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3" role="alert">
              {error}
            </p>
          )}

          {phase === 'start' && !done && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Where do you need coverage?</h2>
                <p className="text-sm text-gray-500">We&apos;ll ask about {questionCount} details so agents can quote accurately — just like major insurance sites.</p>
              </div>
              <div>
                <label htmlFor="quote-zip" className={labelClass}>ZIP code *</label>
                <input
                  id="quote-zip"
                  className={inputClass}
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="77478"
                  maxLength={5}
                  autoFocus
                />
              </div>
              <div>
                <span className={labelClass}>What type of insurance? *</span>
                <div className="grid sm:grid-cols-2 gap-3 mt-1">
                  {INSURANCE_TYPES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setType(t.id)}
                      className={`px-4 py-4 rounded-xl border text-left transition ${
                        insuranceType === t.id
                          ? 'border-[#0B1F8F] bg-blue-50 ring-1 ring-[#0B1F8F]/20'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className={`block text-sm font-semibold ${insuranceType === t.id ? 'text-[#0B1F8F]' : 'text-gray-900'}`}>
                        {t.label}
                      </span>
                      <span className="block text-xs text-gray-500 mt-0.5">{t.description}</span>
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={handleStart}
                className="w-full bg-[#0B1F8F] text-white py-3.5 rounded-xl font-semibold hover:bg-[#1C2ED6] flex items-center justify-center gap-2 transition"
              >
                Start quote request <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {phase === 'wizard' && !done && currentStep && (
            <form onSubmit={currentStep.id === 'contact' ? handleSubmit : (e) => { e.preventDefault(); handleNext() }} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{currentStep.title}</h2>
                {currentStep.subtitle && (
                  <p className="text-sm text-gray-500 mt-1">{currentStep.subtitle}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {currentStep.fields
                  .filter((f) => isFieldVisible(f, details))
                  .map((field) => (
                    <QuoteField
                      key={field.name}
                      field={field}
                      value={details[field.name]}
                      onChange={updateDetail}
                      details={details}
                    />
                  ))}
              </div>

              {currentStep.id === 'contact' && (
                <>
                  <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
                  <label className="flex items-start gap-3 text-sm text-gray-600 border border-gray-100 rounded-xl p-4 bg-gray-50">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1"
                      required
                    />
                    <span>
                      I agree to be contacted by Inshora Group by phone, email, or text about my quote request.
                      Message and data rates may apply. See our{' '}
                      <Link to="/privacy" className="text-[#0B1F8F] hover:underline">Privacy Policy</Link>.
                    </span>
                  </label>
                </>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 transition"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                {currentStep.id === 'contact' ? (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-[#0B1F8F] text-white py-3 rounded-xl font-semibold hover:bg-[#1C2ED6] disabled:opacity-60 transition"
                  >
                    {submitting ? 'Submitting…' : 'Submit quote request'}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 bg-[#0B1F8F] text-white py-3 rounded-xl font-semibold hover:bg-[#1C2ED6] flex items-center justify-center gap-2 transition"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}

          {done && (
            <div className="text-center py-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Quote request submitted</h2>
              <p className="text-gray-600 mb-2 max-w-md mx-auto">
                Thank you, {details.first_name}. A licensed Inshora agent is reviewing your {typeLabel?.toLowerCase()} details.
              </p>
              <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                We collected {questionCount}+ data points to help compare carriers accurately. Most follow-ups happen within one business day.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:7139439985" className="inline-flex items-center justify-center gap-2 bg-[#0B1F8F] text-white px-6 py-3 rounded-xl font-semibold">
                  <Phone className="w-4 h-4" /> (713) 943-9985
                </a>
                <Link to="/" className="inline-flex items-center justify-center gap-2 border border-[#0B1F8F] text-[#0B1F8F] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50">
                  Back to home
                </Link>
              </div>
              <p className="text-xs text-gray-400 mt-6 flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" /> Quotes are not binding until confirmed by a licensed agent and carrier.
              </p>
            </div>
          )}
        </div>

        {!done && phase === 'wizard' && (
          <p className="text-center text-xs text-gray-400 mt-4">
            Your information is encrypted in transit and shared only with licensed Inshora agents.
          </p>
        )}
      </div>
    </Layout>
  )
}
