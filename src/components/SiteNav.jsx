import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Locations', to: '/locations' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

function isActive(pathname, to) {
  if (to === '/services') return pathname === '/services' || pathname.startsWith('/services/')
  if (to === '/blog') return pathname === '/blog' || pathname.startsWith('/blog/')
  return pathname === to
}

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const glass = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          glass
            ? 'bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg shadow-black/10'
            : 'bg-white shadow-lg border border-slate-200/80'
        }`}
      >
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                glass ? 'bg-white/15 border border-white/20' : 'bg-[#0B1F8F]'
              }`}
            >
              <span className="text-white font-bold text-sm">IG</span>
            </div>
            <div className="leading-tight">
              <span
                className={`block text-base font-bold tracking-tight ${
                  glass ? 'text-white' : 'text-[#0B1F8F]'
                }`}
              >
                Inshora
              </span>
              <span
                className={`block text-[11px] font-semibold -mt-0.5 ${
                  glass ? 'text-blue-200' : 'text-[#2563EB]'
                }`}
              >
                Group
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = isActive(location.pathname, l.to)
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-sm font-medium px-3.5 py-2 rounded-lg transition-colors ${
                    glass
                      ? active
                        ? 'text-white bg-white/15'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                      : active
                        ? 'text-[#0B1F8F] bg-blue-50'
                        : 'text-slate-600 hover:text-[#0B1F8F] hover:bg-slate-50'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="tel:7139439985"
              className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition ${
                glass
                  ? 'text-white border border-white/20 bg-white/10 hover:bg-white/15'
                  : 'text-[#0B1F8F] border border-[#0B1F8F]/20 bg-blue-50 hover:bg-blue-100'
              }`}
            >
              <Phone className="w-4 h-4" />
              (713) 943-9985
            </a>
            <Link
              to="/quote"
              className="text-sm font-bold bg-gradient-to-r from-[#FF5A1F] to-[#FF6B35] text-white px-5 py-2.5 rounded-xl shadow-md shadow-orange-900/30 hover:brightness-110 transition"
            >
              Get Quote
            </Link>
          </div>

          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition ${
              glass ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div
            className={`lg:hidden border-t px-4 py-4 space-y-1 ${
              glass ? 'border-white/10' : 'border-slate-100'
            }`}
          >
            {links.map((l) => {
              const active = isActive(location.pathname, l.to)
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block font-medium py-2.5 px-3 rounded-xl transition ${
                    glass
                      ? active
                        ? 'text-white bg-white/15'
                        : 'text-white/90 hover:bg-white/10'
                      : active
                        ? 'text-[#0B1F8F] bg-blue-50'
                        : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
            <a
              href="tel:7139439985"
              className={`flex items-center gap-2 font-semibold py-2.5 px-3 ${
                glass ? 'text-white/90' : 'text-[#0B1F8F]'
              }`}
            >
              <Phone className="w-4 h-4" /> (713) 943-9985
            </a>
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="block text-center bg-gradient-to-r from-[#FF5A1F] to-[#FF6B35] text-white py-3 rounded-xl font-bold mt-2"
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
