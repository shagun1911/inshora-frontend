import { Link } from 'react-router-dom'
import { Car, Home, PawPrint, Shield, Briefcase, Umbrella, CheckCircle, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import usePageMeta from '../hooks/usePageMeta'

export default function Services() {
  const services = [
    {
      icon: Car,
      name: 'Auto Insurance',
      description: 'Protect your vehicle with comprehensive auto insurance. We compare rates from top carriers to find you the best coverage at the lowest price.',
      features: ['Liability Coverage', 'Collision Coverage', 'Comprehensive Coverage', 'Uninsured Motorist Protection'],
      color: 'bg-[#0B1F8F]',
      bgGradient: 'bg-slate-50'
    },
    {
      icon: Home,
      name: 'Home Insurance',
      description: 'Protect your home and belongings with comprehensive home insurance. We help you find the right coverage for your property.',
      features: ['Dwelling Coverage', 'Personal Property', 'Liability Protection', 'Additional Living Expenses'],
      color: 'bg-[#0B1F8F]',
      bgGradient: 'bg-slate-50'
    },
    {
      icon: Home,
      name: 'Renters Insurance',
      description: 'Protect your belongings even if you don\'t own your home. Affordable renters insurance for tenants.',
      features: ['Personal Property', 'Liability Coverage', 'Additional Living Expenses', 'Medical Payments'],
      color: 'bg-[#0B1F8F]',
      bgGradient: 'bg-slate-50'
    },
    {
      icon: Shield,
      name: 'Flood Insurance',
      description: 'Protect your home from flood damage with specialized flood insurance coverage.',
      features: ['Building Coverage', 'Contents Coverage', 'Preferred Risk Policies', 'Standard Flood Policies'],
      color: 'bg-[#0B1F8F]',
      bgGradient: 'bg-slate-50'
    },
    {
      icon: PawPrint,
      name: 'Pet Insurance',
      description: 'Keep your furry friends healthy with comprehensive pet insurance plans.',
      features: ['Accident Coverage', 'Illness Coverage', 'Hereditary Conditions', 'Wellness Care'],
      color: 'bg-[#0B1F8F]',
      bgGradient: 'bg-slate-50'
    },
    {
      icon: Briefcase,
      name: 'Business Insurance',
      description: 'Protect your business with comprehensive commercial insurance solutions.',
      features: ['General Liability', 'Property Insurance', 'Workers Compensation', 'Professional Liability'],
      color: 'bg-[#0B1F8F]',
      bgGradient: 'bg-slate-50'
    },
    {
      icon: Umbrella,
      name: 'Umbrella Insurance',
      description: 'Extra liability protection beyond your standard insurance policies.',
      features: ['Extended Liability', 'Legal Defense Costs', 'Personal Injury Coverage', 'Worldwide Coverage'],
      color: 'bg-[#0B1F8F]',
      bgGradient: 'bg-slate-50'
    },
    {
      icon: Shield,
      name: 'Life Insurance',
      description: 'Secure your family\'s financial future with life insurance protection.',
      features: ['Term Life', 'Whole Life', 'Universal Life', 'Final Expense'],
      color: 'bg-[#0B1F8F]',
      bgGradient: 'bg-slate-50'
    },
    {
      icon: Car,
      name: 'Motorcycle Insurance',
      description: 'Ride with confidence with specialized motorcycle insurance coverage.',
      features: ['Bodily Injury', 'Property Damage', 'Collision Coverage', 'Comprehensive Coverage'],
      color: 'bg-[#0B1F8F]',
      bgGradient: 'bg-slate-50'
    }
  ]

  usePageMeta({
    title: 'Insurance Services | Inshora Group',
    description: 'Auto, home, renters, flood, life, and business insurance in Texas.',
  })

  return (
    <Layout>
      <PageHeader
        title="Our Insurance Services"
        subtitle="Comprehensive coverage from 25+ A-rated carriers"
      />

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 relative overflow-hidden"
            >
              <div className={`absolute inset-0 ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get a Free Quote Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Compare quotes from 25+ A-rated carriers and find the perfect coverage for your needs.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-white text-[#0B1F8F] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
