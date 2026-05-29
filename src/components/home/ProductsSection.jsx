import { Link } from 'react-router-dom'
import { ArrowRight, Car, Home, PawPrint, Package, Droplets, Briefcase } from 'lucide-react'

const products = [
  {
    icon: Car,
    title: 'Auto',
    desc: 'Liability, collision, comprehensive, UM/UIM, SR-22 guidance.',
    to: '/services/auto-insurance',
    span: 'md:col-span-2',
    featured: true,
  },
  {
    icon: Home,
    title: 'Home',
    desc: 'Dwelling, personal property, liability, wind & hail.',
    to: '/services/home-insurance',
    span: '',
  },
  {
    icon: Package,
    title: 'Bundle',
    desc: 'Auto + home multi-policy savings.',
    to: '/quote?type=bundle',
    span: '',
  },
  {
    icon: Home,
    title: 'Renters',
    desc: 'Belongings & liability for tenants.',
    to: '/services/renters-insurance',
    span: '',
  },
  {
    icon: PawPrint,
    title: 'Pet',
    desc: 'Accident & illness plans for dogs and cats.',
    to: '/quote?type=pet',
    span: '',
  },
  {
    icon: Droplets,
    title: 'Flood',
    desc: 'Separate from homeowners — essential in Texas.',
    to: '/services/flood-insurance',
    span: '',
  },
  {
    icon: Briefcase,
    title: 'Business & Life',
    desc: 'Commercial and life lines via licensed agents.',
    to: '/services/business-insurance',
    span: 'md:col-span-2',
  },
]

export default function ProductsSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#0B1F8F] uppercase tracking-wider mb-3">Coverage</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Insurance for every chapter of life
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-1 text-[#0B1F8F] font-semibold text-sm hover:gap-2 transition-all">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {products.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className={`group rounded-2xl border p-6 transition-all hover:shadow-lg hover:border-[#0B1F8F]/20 ${
                p.featured
                  ? 'md:col-span-2 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] text-white border-transparent'
                  : `bg-slate-50/50 border-slate-200/80 hover:bg-white ${p.span}`
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  p.featured ? 'bg-white/15' : 'bg-[#0B1F8F]/10'
                }`}
              >
                <p.icon className={`w-5 h-5 ${p.featured ? 'text-white' : 'text-[#0B1F8F]'}`} />
              </div>
              <h3 className={`font-bold text-lg mb-1 ${p.featured ? 'text-white' : 'text-slate-900'}`}>{p.title}</h3>
              <p className={`text-sm leading-relaxed ${p.featured ? 'text-blue-100' : 'text-slate-600'}`}>{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
