import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import usePageMeta from '../hooks/usePageMeta'

export default function Privacy() {
  usePageMeta({
    title: 'Privacy & Cookies | Inshora Group',
    description: 'How Inshora Group collects, uses, and protects your personal information.',
  })

  return (
    <Layout>
      <PageHeader
        title="Privacy & Cookies"
        subtitle="How we collect, use, and protect your information"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-700 leading-relaxed space-y-6">
        <p className="text-sm text-gray-500">Last updated: May 2026</p>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Information we collect</h2>
          <p>
            We may collect information you provide through contact forms, quote requests, phone calls, email, and our voice assistant (Sarah), including name, email, phone, ZIP code, insurance type, and messages. We may also collect technical data such as IP address, browser type, and pages visited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">How we use it</h2>
          <p>
            We use your information to respond to inquiries, provide quotes, service policies, improve our website, and comply with legal obligations. We do not sell your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cookies</h2>
          <p>
            We may use cookies and similar technologies for site functionality and analytics. You can control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Retention and security</h2>
          <p>
            We retain information as long as needed for business and legal purposes and apply reasonable safeguards. No method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your rights</h2>
          <p>
            Texas residents may request access, correction, or deletion of certain personal information by contacting us. We will respond within a reasonable time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
          <p>
            <a href="mailto:support@inshoragroup.com" className="text-[#0B1F8F] hover:underline">support@inshoragroup.com</a>
            {' · '}
            <a href="tel:7139439985" className="text-[#0B1F8F] hover:underline">(713) 943-9985</a>
            {' · '}
            6920 Brisbane Court, Ste 234, Sugar Land, TX 77478. See our{' '}
            <Link to="/terms" className="text-[#0B1F8F] hover:underline">Terms</Link>.
          </p>
        </section>
      </div>
    </Layout>
  )
}
