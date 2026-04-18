import { Link } from 'react-router-dom'
import { Car, Home, PawPrint, Shield, Briefcase, Umbrella, CheckCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Car,
      name: 'Auto Insurance',
      description: 'Protect your vehicle with comprehensive auto insurance. We compare rates from top carriers to find you the best coverage at the lowest price.',
      features: ['Liability Coverage', 'Collision Coverage', 'Comprehensive Coverage', 'Uninsured Motorist Protection'],
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/5 to-blue-600/5'
    },
    {
      icon: Home,
      name: 'Home Insurance',
      description: 'Protect your home and belongings with comprehensive home insurance. We help you find the right coverage for your property.',
      features: ['Dwelling Coverage', 'Personal Property', 'Liability Protection', 'Additional Living Expenses'],
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-500/5 to-green-600/5'
    },
    {
      icon: Home,
      name: 'Renters Insurance',
      description: 'Protect your belongings even if you don\'t own your home. Affordable renters insurance for tenants.',
      features: ['Personal Property', 'Liability Coverage', 'Additional Living Expenses', 'Medical Payments'],
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/5 to-purple-600/5'
    },
    {
      icon: Shield,
      name: 'Flood Insurance',
      description: 'Protect your home from flood damage with specialized flood insurance coverage.',
      features: ['Building Coverage', 'Contents Coverage', 'Preferred Risk Policies', 'Standard Flood Policies'],
      color: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-500/5 to-cyan-600/5'
    },
    {
      icon: PawPrint,
      name: 'Pet Insurance',
      description: 'Keep your furry friends healthy with comprehensive pet insurance plans.',
      features: ['Accident Coverage', 'Illness Coverage', 'Hereditary Conditions', 'Wellness Care'],
      color: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-500/5 to-pink-600/5'
    },
    {
      icon: Briefcase,
      name: 'Business Insurance',
      description: 'Protect your business with comprehensive commercial insurance solutions.',
      features: ['General Liability', 'Property Insurance', 'Workers Compensation', 'Professional Liability'],
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-500/5 to-orange-600/5'
    },
    {
      icon: Umbrella,
      name: 'Umbrella Insurance',
      description: 'Extra liability protection beyond your standard insurance policies.',
      features: ['Extended Liability', 'Legal Defense Costs', 'Personal Injury Coverage', 'Worldwide Coverage'],
      color: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-500/5 to-indigo-600/5'
    },
    {
      icon: Shield,
      name: 'Life Insurance',
      description: 'Secure your family\'s financial future with life insurance protection.',
      features: ['Term Life', 'Whole Life', 'Universal Life', 'Final Expense'],
      color: 'from-red-500 to-red-600',
      bgGradient: 'from-red-500/5 to-red-600/5'
    },
    {
      icon: Car,
      name: 'Motorcycle Insurance',
      description: 'Ride with confidence with specialized motorcycle insurance coverage.',
      features: ['Bodily Injury', 'Property Damage', 'Collision Coverage', 'Comprehensive Coverage'],
      color: 'from-yellow-500 to-yellow-600',
      bgGradient: 'from-yellow-500/5 to-yellow-600/5'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Insurance Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive insurance solutions to protect you, your family, your home, and your business. Compare quotes from 25+ A-rated carriers.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
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
              to="/"
              className="inline-flex items-center gap-2 bg-white text-[#0B1F8F] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
