import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeNav from '../components/home/HomeNav'
import HeroSection from '../components/home/HeroSection'
import TrustBar from '../components/home/TrustBar'
import HowItWorksSection from '../components/home/HowItWorksSection'
import ProductsSection from '../components/home/ProductsSection'
import WhyInshoraSection from '../components/home/WhyInshoraSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import ContactCtaSection from '../components/home/ContactCtaSection'
import FaqSection from '../components/home/FaqSection'
import HomepageBlogSection from '../components/HomepageBlogSection'
import Footer from '../components/Footer'
import SmartChatbot from '../components/SmartChatbot'
import { isValidZip } from '../utils/submitLead'

const FAQS = [
  {
    question: 'Which is the best insurance company in America?',
    answer:
      'There is no single best insurer for everyone — it depends on your state, ZIP, and coverage needs. Inshora Group compares 25+ A-rated national carriers so you get the best company for you. Read our full guide or start the quote wizard.',
  },
  {
    question: 'What is Inshora Group?',
    answer:
      'Inshora Group is a licensed independent insurance brokerage in Texas. We compare quotes from 25+ A-rated carriers — we are not a single insurance company.',
  },
  {
    question: 'How does the quote wizard work?',
    answer:
      'Enter your ZIP, pick your insurance type, and answer about 30 guided questions. A licensed agent reviews your submission and follows up with personalized quotes from multiple carriers.',
  },
  {
    question: 'Who is Sarah?',
    answer:
      'Sarah is our AI voice assistant on the website. Tap Talk to Sarah to ask coverage questions by voice. For binding quotes, complete the quote wizard or speak with a licensed agent.',
  },
  {
    question: 'Is my information secure?',
    answer:
      'Yes. Your data is transmitted securely and used only to prepare quotes. We do not sell your information to multiple carriers for spam calls.',
  },
  {
    question: 'How fast will I hear back?',
    answer:
      'Most customers receive agent follow-up within one business day after completing the quote wizard.',
  },
  {
    question: 'Do you offer flood, life, or business insurance?',
    answer:
      'Yes. Licensed agents handle specialty lines. Start with our Contact page or call (713) 943-9985 for flood, life, and commercial insurance.',
  },
  {
    question: 'Can I speak with a licensed agent?',
    answer:
      'Absolutely. Call (713) 943-9985 Mon–Fri 8 AM–8 PM CT, Sat 10 AM–4 PM CT, or request a callback through the quote wizard.',
  },
]

export default function Home() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Auto')
  const [zipCode, setZipCode] = useState('')
  const [openFaq, setOpenFaq] = useState(null)
  const [zipError, setZipError] = useState(false)

  const typeMap = { Auto: 'auto', Home: 'home', Renters: 'renters', Pet: 'pet', Bundle: 'bundle' }
  const wizardLink = isValidZip(zipCode)
    ? `/quote?zip=${encodeURIComponent(zipCode)}&type=${typeMap[activeTab] || 'auto'}`
    : '/quote'

  const handleHeroQuote = () => {
    if (!isValidZip(zipCode)) {
      setZipError(true)
      return
    }
    navigate(`/quote?zip=${encodeURIComponent(zipCode)}&type=${typeMap[activeTab] || 'auto'}`)
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <HomeNav />
      <HeroSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        zipCode={zipCode}
        setZipCode={setZipCode}
        zipError={zipError}
        setZipError={setZipError}
        onGetQuote={handleHeroQuote}
      />
      <TrustBar />
      <HowItWorksSection wizardLink={wizardLink} />
      <ProductsSection />
      <WhyInshoraSection />
      <TestimonialsSection />
      <ContactCtaSection wizardLink={wizardLink} />
      <HomepageBlogSection />
      <FaqSection faqs={FAQS} openFaq={openFaq} toggleFaq={toggleFaq} />
      <Footer />
      <SmartChatbot />
    </div>
  )
}
