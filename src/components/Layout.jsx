import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children, className = 'min-h-screen bg-gray-50' }) {
  return (
    <div className={className}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-[#0B1F8F] text-white px-4 py-2 rounded-lg"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
