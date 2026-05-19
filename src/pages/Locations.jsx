import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import usePageMeta from '../hooks/usePageMeta'

export default function Locations() {
  usePageMeta({
    title: 'Locations | Inshora Group',
    description: 'Insurance services across Texas.',
  })

  const locations = [
    {
      city: 'Sugar Land',
      address: '6920 Brisbane Court, Ste 234, Sugar Land, TX 77478',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 10AM-4PM',
      phone: '(713) 943-9985',
      isHeadquarters: true
    },
    {
      city: 'Houston',
      address: 'Serving Greater Houston Area',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 10AM-4PM',
      phone: '(713) 943-9985',
      isHeadquarters: false
    },
    {
      city: 'Richmond',
      address: 'Serving Richmond, TX',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 10AM-4PM',
      phone: '(713) 943-9985',
      isHeadquarters: false
    },
    {
      city: 'Galveston',
      address: 'Serving Galveston, TX',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 10AM-4PM',
      phone: '(713) 943-9985',
      isHeadquarters: false
    },
    {
      city: 'Dallas',
      address: 'Serving Dallas, TX',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 10AM-4PM',
      phone: '(713) 943-9985',
      isHeadquarters: false
    },
    {
      city: 'Austin',
      address: 'Serving Austin, TX',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 10AM-4PM',
      phone: '(713) 943-9985',
      isHeadquarters: false
    },
    {
      city: 'San Antonio',
      address: 'Serving San Antonio, TX',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 10AM-4PM',
      phone: '(713) 943-9985',
      isHeadquarters: false
    },
    {
      city: 'Fort Worth',
      address: 'Serving Fort Worth, TX',
      hours: 'Mon-Fri: 8AM-8PM, Sat: 10AM-4PM',
      phone: '(713) 943-9985',
      isHeadquarters: false
    }
  ]

  return (
    <Layout>
      <PageHeader title="Locations We Serve" subtitle="Proudly serving Texas communities with expert insurance solutions" />

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                location.isHeadquarters ? 'ring-2 ring-[#0B1F8F]' : ''
              }`}
            >
              {location.isHeadquarters && (
                <div className="inline-block bg-[#0B1F8F] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Headquarters
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{location.city}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0B1F8F] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{location.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0B1F8F] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{location.hours}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0B1F8F] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 font-semibold">{location.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Area Map */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving All of Texas</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                While our headquarters is in Sugar Land, we proudly serve customers throughout the greater Houston area and across Texas. Our team is available via phone and online to assist customers anywhere in the state.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We're licensed to provide insurance services in all Texas counties, ensuring that no matter where you are in the Lone Star State, you have access to our expert insurance guidance and competitive quotes from 25+ A-rated carriers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-[#0B1F8F] rounded-full"></div>
                  Licensed in all Texas counties
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-[#0B1F8F] rounded-full"></div>
                  Online quotes available statewide
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-[#0B1F8F] rounded-full"></div>
                  Phone support available 24/7
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-[#0B1F8F] rounded-full"></div>
                  Local agents in your area
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#1C2ED6] hover:to-[#3B82F6] transition"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-32 h-32 text-[#0B1F8F] mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900">Texas</p>
                <p className="text-gray-600">Service Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get a Quote?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote from our licensed agents. Serving all of Texas.
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
    </Layout>
  )
}