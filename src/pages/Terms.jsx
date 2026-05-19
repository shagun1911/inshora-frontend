import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import usePageMeta from '../hooks/usePageMeta'

export default function Terms() {
  usePageMeta({
    title: 'Terms & Conditions | Inshora Group',
    description: 'Terms for using the Inshora Group website and insurance quote services in Texas.',
  })

  return (
    <Layout>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Use of our website and insurance quote services"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-700 leading-relaxed space-y-6">
        <p className="text-sm text-gray-500">Last updated: May 2026</p>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Agreement</h2>
          <p>
            By using the Inshora Group website (inshoragroup.com), you agree to these Terms. If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Insurance quotes and licensing</h2>
          <p>
            Inshora Group is a licensed insurance brokerage in Texas. Quotes and information on this site are for general guidance only and are not a contract, binder, or guarantee of coverage or premium. Final rates and coverage are determined by the issuing carrier after application and underwriting.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">No professional advice</h2>
          <p>
            Content on this site does not constitute legal, tax, or financial advice. Speak with a licensed agent for recommendations tailored to your situation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Inshora Group is not liable for indirect, incidental, or consequential damages arising from use of this site or reliance on information provided here.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
          <p>
            Questions about these Terms:{' '}
            <a href="mailto:support@inshoragroup.com" className="text-[#0B1F8F] hover:underline">
              support@inshoragroup.com
            </a>{' '}
            or <a href="tel:7139439985" className="text-[#0B1F8F] hover:underline">(713) 943-9985</a>.
            See also our <Link to="/privacy" className="text-[#0B1F8F] hover:underline">Privacy Policy</Link>.
          </p>
        </section>
      </div>
    </Layout>
  )
}
