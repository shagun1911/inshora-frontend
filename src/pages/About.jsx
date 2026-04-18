import { Link } from 'react-router-dom'
import { Shield, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Inshora Group</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your trusted Texas insurance partner since 2013
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2013, Inshora Group has grown from a small family-run insurance brokerage to one of Texas's most trusted independent insurance agencies. Our journey began with a simple mission: to help individuals and families find the right insurance coverage at the best possible price.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over the past decade, we've helped thousands of Texans protect what matters most to them. From auto insurance for new drivers to comprehensive home coverage for growing families, we've been there every step of the way.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to uphold our founding principles: integrity, transparency, and putting our customers first. We're not just insurance agents – we're your neighbors, your advocates, and your partners in protection.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">A-Rated Carriers</div>
            </div>
            <div className="bg-gradient-to-br from-[#FF5A1F] to-[#FF6B35] rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold mb-2">2013</div>
              <div className="text-orange-100">Founded</div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#0B1F8F] mb-2">13+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#0B1F8F] mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-3xl p-12 shadow-lg mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To provide every Texan with access to affordable, comprehensive insurance coverage through personalized service, expert advice, and partnerships with the industry's leading carriers. We believe that protecting what matters most shouldn't be complicated or expensive.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#0B1F8F] rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Independent & Unbiased</h3>
              <p className="text-gray-600 leading-relaxed">
                As an independent brokerage, we work for YOU, not the insurance companies. We compare rates from 25+ carriers to find you the best coverage at the best price.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#FF5A1F] rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed Experts</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of licensed insurance agents has decades of combined experience. We understand the complexities of insurance and translate them into simple, clear options for you.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600 leading-relaxed">
                We take the time to understand your unique needs and circumstances. No one-size-fits-all solutions – only personalized recommendations tailored to you.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. Our team is ready to help you find the perfect coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0B1F8F] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:7139439985"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              <Phone className="w-5 h-5" />
              (713) 943-9985
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
