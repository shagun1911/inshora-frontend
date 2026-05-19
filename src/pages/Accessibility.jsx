import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import usePageMeta from '../hooks/usePageMeta'

export default function Accessibility() {
  usePageMeta({
    title: 'Accessibility | Inshora Group',
    description: 'Inshora Group accessibility commitment and accommodation requests.',
  })

  return (
    <Layout>
      <PageHeader
        title="Accessibility"
        subtitle="Our commitment to an accessible experience for everyone"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-700 leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Our commitment</h2>
          <p>
            Inshora Group strives to make our website and services accessible to people with disabilities. We follow WCAG 2.1 guidelines where practicable and continue to improve the experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Accommodations</h2>
          <p>
            If you need assistance obtaining a quote, reviewing policy information, or using our site, contact us by phone or email and we will work with you on a reasonable accommodation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Feedback</h2>
          <p>
            Report accessibility barriers to{' '}
            <a href="mailto:support@inshoragroup.com" className="text-[#0B1F8F] hover:underline">
              support@inshoragroup.com
            </a>{' '}
            or call{' '}
            <a href="tel:7139439985" className="text-[#0B1F8F] hover:underline">(713) 943-9985</a>.
            Include the page URL and a description of the issue.
          </p>
        </section>

        <p>
          <Link to="/contact" className="text-[#0B1F8F] font-semibold hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </Layout>
  )
}
