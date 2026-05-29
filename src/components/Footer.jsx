import { Link } from 'react-router-dom'
import { Phone, FileText, Shield } from 'lucide-react'
import { FOOTER_SERVICES } from '../data/servicePages'

const locationLinks = [
  { label: 'Sugar Land, TX', to: '/locations' },
  { label: 'Houston, TX', to: '/locations' },
  { label: 'Richmond, TX', to: '/locations' },
  { label: 'Dallas, TX', to: '/locations' },
  { label: 'Austin, TX', to: '/locations' },
]

const legalLinks = [
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Privacy & Cookies', to: '/privacy' },
  { label: 'Accessibility', to: '/accessibility' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const facebook = import.meta.env.VITE_FACEBOOK_URL
  const instagram = import.meta.env.VITE_INSTAGRAM_URL
  const linkedin = import.meta.env.VITE_LINKEDIN_URL
  const socialLinks = [
    facebook && { label: 'Facebook', href: facebook, text: 'f' },
    instagram && { label: 'Instagram', href: instagram, text: 'IG' },
    linkedin && { label: 'LinkedIn', href: linkedin, text: 'in' },
  ].filter(Boolean)

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-6">INSHORA GROUP</div>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden />
                <a href="tel:7139439985" className="hover:text-white transition">
                  (713) 943-9985
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 flex-shrink-0" aria-hidden />
                <a href="mailto:support@inshoragroup.com" className="hover:text-white transition">
                  support@inshoragroup.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 mt-1 flex-shrink-0" aria-hidden />
                <address className="not-italic">
                  6920 Brisbane Court, Ste 234
                  <br />
                  Sugar Land, TX 77478
                </address>
              </div>
            </div>
            {socialLinks.length > 0 && (
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-3">Follow us</p>
                <div className="flex space-x-4">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                      aria-label={s.label}
                    >
                      <span className="text-sm">{s.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">Company</h2>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/quote" className="hover:text-white transition">Get a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/best-insurance-company-usa" className="hover:text-white transition">Best Insurance in USA</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">Services</h2>
            <ul className="space-y-2 text-gray-400">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white transition">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">Locations</h2>
            <ul className="space-y-2 text-gray-400">
              {locationLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-white transition">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              {legalLinks.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-white transition">
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="text-gray-400 text-sm">© {year} Inshora Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
