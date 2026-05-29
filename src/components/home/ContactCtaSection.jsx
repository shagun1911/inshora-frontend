import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import VoiceAgent from '../VoiceAgent'

export default function ContactCtaSection({ wizardLink }) {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 md:p-12">
              <p className="text-sm font-semibold text-[#0B1F8F] uppercase tracking-wider mb-3">Get started</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Ready for your personalized quote?
              </h2>
              <p className="text-slate-600 mb-8 max-w-lg">
                Use our guided wizard or speak with Sarah — then a licensed agent compares 25+ carriers for you.
              </p>
              <ul className="space-y-3 mb-8">
                {['30+ intake questions per product', 'One agent, no spam', 'Free & no obligation'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={wizardLink}
                  className="inline-flex items-center justify-center gap-2 bg-[#0B1F8F] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#1C2ED6] transition"
                >
                  Start quote wizard
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <VoiceAgent variant="cta" label="Talk to Sarah" />
              </div>
            </div>

            <div className="lg:col-span-2 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-center">
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-6">Contact</p>
              <a href="tel:7139439985" className="flex items-start gap-3 mb-5 group">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                <span>
                  <span className="block text-xl font-bold group-hover:text-blue-200 transition">(713) 943-9985</span>
                  <span className="text-sm text-slate-400">Mon–Fri 8–8 CT · Sat 10–4 CT</span>
                </span>
              </a>
              <a href="mailto:support@inshoragroup.com" className="flex items-center gap-3 mb-5 text-slate-300 hover:text-white transition">
                <Mail className="w-5 h-5 text-blue-400" />
                support@inshoragroup.com
              </a>
              <address className="flex items-start gap-3 not-italic text-slate-400 text-sm leading-relaxed">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                6920 Brisbane Court, Ste 234<br />Sugar Land, TX 77478
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
