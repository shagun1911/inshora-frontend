import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { COMPANY } from '../data/siteContent'

export default function PageCta({
  title = 'Ready to compare quotes?',
  text = 'Start our guided wizard or speak with a licensed Texas agent today.',
  primaryLabel = 'Start quote wizard',
  primaryTo = '/quote',
  showPhone = true,
}) {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">{text}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center gap-2 bg-[#0B1F8F] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#1C2ED6] transition"
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {showPhone && (
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-800 px-7 py-3.5 rounded-xl font-semibold hover:bg-white transition"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
