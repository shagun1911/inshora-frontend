import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found | Inshora Group',
    description: 'The page you requested could not be found.',
  })

  return (
    <Layout>
      <div className="max-w-xl mx-auto px-4 pt-32 pb-32 text-center">
        <p className="text-6xl font-bold text-[#0B1F8F] mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-[#0B1F8F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1C2ED6] transition"
          >
            Back to home
          </Link>
          <Link
            to="/quote"
            className="border border-[#0B1F8F] text-[#0B1F8F] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Get a quote
          </Link>
          <Link
            to="/contact"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
          >
            Contact us
          </Link>
        </div>
      </div>
    </Layout>
  )
}
