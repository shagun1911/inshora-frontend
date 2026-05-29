import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { 
  Star, Phone, Menu, X, ChevronDown, Shield, 
  TrendingUp, Users, Award, Clock, CheckCircle,
  ArrowRight, Play, Pause, Car, Home,
  PawPrint, Package, FileText, User
} from 'lucide-react'
import VoiceAgent from './components/VoiceAgent'
import SmartChatbot from './components/SmartChatbot'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Services from './pages/Services'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Accessibility from './pages/Accessibility'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import HomepageBlogSection from './components/HomepageBlogSection'
import { isValidZip } from './utils/submitLead'

function LandingPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Auto')
  const [zipCode, setZipCode] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [zipError, setZipError] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tabs = [
    { name: 'Auto', icon: Car },
    { name: 'Bundle', icon: Package },
    { name: 'Home', icon: Home },
    { name: 'Renters', icon: Home },
    { name: 'Pet', icon: PawPrint }
  ]
  
  const logos = [
    'Progressive', 'Allstate', 'Liberty Mutual', 'USAA', 
    'The General', 'Bristol West', '120+ MORE'
  ]

  const features = [
    {
      title: 'Compare Quotes Without Spam',
      description: 'Get real quotes from top insurers without sharing your personal information with multiple companies.',
      icon: Shield
    },
    {
      title: 'Rate Drop Alerts',
      description: 'We monitor your rates and alert you when prices drop, ensuring you always get the best deal.',
      icon: TrendingUp
    },
    {
      title: 'Real Driver Ratings',
      description: 'See ratings from real drivers who have used each insurance company to make informed decisions.',
      icon: Users
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Saved over $800 on my car insurance! The comparison tool made it so easy to find the best rates.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Incredible experience. Found a better bundle deal in minutes that I had been searching for weeks.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'The voice agent was so helpful. It guided me through the entire process seamlessly.',
      avatar: 'ER'
    }
  ]

  const stats = [
    { value: '#1', label: 'Comparison Platform' },
    { value: '197M+', label: 'Quotes Compared' },
    { value: '$1,100', label: 'Average Savings' },
    { value: '4.7', label: 'Rating' },
    { value: 'A+', label: 'BBB Rating' },
    { value: '85K+', label: 'Reviews' }
  ]

  const faqs = [
    {
      question: 'What is this platform?',
      answer: 'Inshora is an AI-powered insurance comparison platform that helps you find the best insurance rates from top providers in minutes.'
    },
    {
      question: 'How does it work?',
      answer: 'Simply enter your ZIP code, select your insurance type, and compare quotes from multiple insurers side-by-side.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption to protect your personal information and never share it without your consent.'
    },
    {
      question: 'How do you make money?',
      answer: 'We earn a commission from insurance companies when you purchase a policy through our platform, at no extra cost to you.'
    },
    {
      question: 'How fast can I get a quote?',
      answer: 'Most customers receive quote options in minutes once they complete their basic profile and coverage preferences.'
    },
    {
      question: 'Can I switch providers mid-policy?',
      answer: 'Yes. Our licensed agents can help you compare your current policy against available options and guide a smooth switch.'
    },
    {
      question: 'Do you support bundle discounts?',
      answer: 'Yes. We can compare bundled home and auto options to help you maximize eligible discounts and simplify policy management.'
    },
    {
      question: 'Will this affect my credit score?',
      answer: 'Standard quote comparisons typically use soft checks or rating factors that do not impact your credit score.'
    },
    {
      question: 'Can I speak with a licensed agent?',
      answer: 'Absolutely. You can call us directly or request a callback to review recommendations with a licensed Texas agent.'
    }
  ]

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
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-lg shadow-xl py-2' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ease-out ${
            scrolled ? 'h-12' : 'h-24'
          }`}>
            <div className="flex items-center">
              <span className={`font-bold tracking-tight transition-all duration-500 ease-out ${
                scrolled ? 'text-xl text-[#0B1F8F]' : 'text-4xl text-white'
              }`}>INSHORA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/services" className={`transition font-medium text-sm ${
                scrolled ? 'text-gray-600 hover:text-[#0B1F8F]' : 'text-white/90 hover:text-white'
              }`}>Car</Link>
              <Link to="/services" className={`transition font-medium text-sm ${
                scrolled ? 'text-gray-600 hover:text-[#0B1F8F]' : 'text-white/90 hover:text-white'
              }`}>Home</Link>
              <Link to="/services" className={`transition font-medium text-sm ${
                scrolled ? 'text-gray-600 hover:text-[#0B1F8F]' : 'text-white/90 hover:text-white'
              }`}>Renters</Link>
              <Link to="/services" className={`transition font-medium text-sm ${
                scrolled ? 'text-gray-600 hover:text-[#0B1F8F]' : 'text-white/90 hover:text-white'
              }`}>Pet</Link>
              <Link to="/services" className={`transition font-medium text-sm ${
                scrolled ? 'text-gray-600 hover:text-[#0B1F8F]' : 'text-white/90 hover:text-white'
              }`}>Business</Link>
              <Link to="/blog" className={`transition font-medium text-sm ${
                scrolled ? 'text-gray-600 hover:text-[#0B1F8F]' : 'text-white/90 hover:text-white'
              }`}>Blog</Link>
              <Link to="/about" className={`transition font-medium text-sm ${
                scrolled ? 'text-gray-600 hover:text-[#0B1F8F]' : 'text-white/90 hover:text-white'
              }`}>About</Link>
              <Link to="/services" className={`transition font-medium text-sm ${
                scrolled ? 'text-gray-600 hover:text-[#0B1F8F]' : 'text-white/90 hover:text-white'
              }`}>Services</Link>
              <Link to="/locations" className={`transition font-medium text-sm ${
                scrolled ? 'text-gray-600 hover:text-[#0B1F8F]' : 'text-white/90 hover:text-white'
              }`}>Locations</Link>
              <Link to="/contact" className={`transition font-medium text-sm ${
                scrolled ? 'text-gray-600 hover:text-[#0B1F8F]' : 'text-white/90 hover:text-white'
              }`}>Contact</Link>
              <Link
                to="/quote"
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
                  scrolled
                    ? 'bg-[#0B1F8F] text-white hover:bg-[#1C2ED6]'
                    : 'bg-white text-[#0B1F8F] hover:bg-blue-50'
                }`}
              >
                Get Quote
              </Link>
              <div className={`h-6 w-px transition-colors ${
                scrolled ? 'bg-gray-200' : 'bg-white/30'
              }`}></div>
              <a href="tel:7139439985" className={`flex items-center font-semibold text-sm transition ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <Phone className="w-4 h-4 mr-2" />
                (713) 943-9985
              </a>
            </div>

            <button 
              className={`md:hidden transition ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t shadow-lg transition-all ${
            scrolled ? 'bg-white border-gray-100' : 'bg-white/95 backdrop-blur-md border-white/20'
          }`}>
            <div className="px-4 py-6 space-y-4">
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#0B1F8F] font-medium">Car</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#0B1F8F] font-medium">Home</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#0B1F8F] font-medium">Renters</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#0B1F8F] font-medium">Pet</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#0B1F8F] font-medium">Business</Link>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#0B1F8F] font-medium">Blog</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#0B1F8F] font-medium">About</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#0B1F8F] font-medium">Services</Link>
              <Link to="/locations" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#0B1F8F] font-medium">Locations</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#0B1F8F] font-medium">Contact</Link>
              <Link to="/quote" onClick={() => setMobileMenuOpen(false)} className="block bg-[#0B1F8F] text-white text-center px-4 py-3 rounded-lg font-semibold">Get Quote</Link>
              <div className="pt-4 border-t border-gray-100">
                <a href="tel:7139439985" className="flex items-center text-gray-700 font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  (713) 943-9985
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-[#0B1F8F] via-[#1C2ED6] to-blue-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Licensed Texas Insurance Brokerage Since 2013</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Protect What Matters Most with
                <span className="block text-white">Inshora Group</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Compare quotes from 25+ A-rated insurance carriers. Get the best coverage at the lowest price. Licensed agents serving Sugar Land, Houston, and all of Texas.
              </p>

              {/* Insurance Type Selector */}
              <div className="mb-8">
                <p className="text-sm text-blue-200 mb-3 font-medium">What type of insurance do you need?</p>
                <div className="flex flex-wrap gap-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeTab === tab.name
                          ? 'bg-white text-[#0B1F8F] shadow-xl transform scale-105'
                          : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* ZIP Input with Enhanced UX */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Enter your ZIP code"
                      value={zipCode}
                      onChange={(e) => {
                        setZipCode(e.target.value)
                        setZipError(false)
                      }}
                      className={`w-full px-6 py-4 rounded-xl text-gray-900 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-white/30 bg-white ${
                        zipError ? 'ring-2 ring-red-400' : ''
                      }`}
                    />
                    {zipError && (
                      <p className="absolute -bottom-6 left-0 text-red-300 text-sm">Please enter a valid ZIP code</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleHeroQuote}
                    className="bg-gradient-to-r from-[#FF5A1F] to-[#FF6B35] hover:from-[#E54A15] hover:to-[#F05A2A] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center whitespace-nowrap"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <div className="text-sm">
                    <div className="font-semibold text-white">25+ A-Rated Carriers</div>
                  </div>
                </div>
                
                <div className="h-8 w-px bg-white/20"></div>
                
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-300" />
                  <div className="text-sm">
                    <div className="font-semibold text-white">(713) 943-9985</div>
                  </div>
                </div>
                
                <div className="h-8 w-px bg-white/20"></div>
                
                <a href="#contact" className="text-blue-200 hover:text-white text-sm underline transition">
                  Contact Our Agents →
                </a>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="relative flex justify-center items-center">
              <div className="relative">
                {/* Phone Frame with Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] rounded-[3.5rem] blur-2xl opacity-30"></div>
                <div className="w-72 h-[520px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl relative">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen Content - Scrollable */}
                    <div className="h-full overflow-y-auto p-4 pb-16">
                      <div className="text-center mb-4">
                        <span className="text-xl font-bold text-[#0B1F8F]">INSHORA</span>
                      </div>
                      <div className="text-center mb-4">
                        <span className="text-xs font-semibold text-gray-700">Your personalized quotes</span>
                      </div>
                      
                      {/* Quote List - 15+ comparisons */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300 shadow-sm">
                          <div>
                            <div className="flex items-center gap-1 mb-0.5">
                              <div className="font-bold text-gray-900 text-xs">Root Insurance</div>
                              <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">Best</span>
                            </div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-600 text-sm">$71</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">mileauto</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$75</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">Progressive</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$82</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">Geico</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$89</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">Allstate</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$95</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">Liberty Mutual</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$98</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">USAA</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$102</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">State Farm</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$105</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">Farmers</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$108</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">Nationwide</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$112</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">Travelers</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$115</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">The General</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$118</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">Bristol West</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$122</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">AAA</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$125</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">MetLife</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$128</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">Chubb</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$132</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">AIG</div>
                            <div className="text-[10px] text-gray-500">Full coverage</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#0B1F8F] text-sm">$135</div>
                            <div className="text-[10px] text-gray-500">/mo</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom CTA in Phone */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white via-white to-transparent">
                      <button className="w-full bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white py-2 rounded-xl font-semibold text-xs shadow-lg">
                        View All Quotes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Voice Agent — inline, no popup */}
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-max max-w-[calc(100vw-2rem)]">
                <VoiceAgent variant="fab" label="Talk to Sarah" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">Over 20,000 quotes and counting</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Award className="w-4 h-4" />
              <span>Trusted by thousands of customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Scroller */}
      <section className="py-8 bg-white overflow-hidden border-b border-gray-200">
        <div className="relative">
          <div className="flex animate-marquee items-center">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-6 py-4 font-semibold text-lg transition ${
                  logo === '120+ MORE' ? 'text-primary font-bold' : 'text-gray-500 hover:text-primary'
                }`}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4 text-[#0B1F8F]" />
                <span className="text-sm font-semibold text-[#0B1F8F]">About Inshora Group</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                We Believe Progress Happens When People Feel Secure
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Founded in 2013, Inshora Group is a Texas-based insurance brokerage dedicated to helping you protect what matters most. We compare quotes from 25+ A-rated carriers to find you the best coverage at the lowest price.
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-200">
                <h3 className="font-bold text-[#0B1F8F] mb-2">The Meaning of "Inshora"</h3>
                <p className="text-gray-700">
                  Our name comes from the Hausa language, meaning <strong>Protection, Security, and Assurance</strong>. This reflects our commitment to providing comprehensive insurance coverage that gives you peace of mind.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our licensed Texas agents are available to help you navigate the complex insurance landscape, offering personalized service and expert guidance for Auto, Home, Renters, Flood, Life, Business, and Retirement insurance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#0B1F8F] rounded-2xl p-6 text-white">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">A-Rated Carriers</div>
              </div>
              <div className="bg-[#1E3A8A] rounded-2xl p-6 text-white">
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
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4 text-[#0B1F8F]" />
              <span className="text-sm font-semibold text-[#0B1F8F]">Our Insurance Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Insurance Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of insurance solutions to protect you, your family, your home, and your business. Compare quotes from 25+ A-rated carriers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Auto Insurance */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B1F8F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Auto Insurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Protect your vehicle with comprehensive auto insurance. We compare rates from top carriers to find you the best coverage at the lowest price.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Liability Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Collision Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Comprehensive Coverage</li>
                </ul>
              </div>
            </div>

            {/* Home Insurance */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B1F8F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Home Insurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Protect your home and belongings with comprehensive home insurance. We help you find the right coverage for your property.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Dwelling Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Personal Property</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Liability Protection</li>
                </ul>
              </div>
            </div>

            {/* Renters Insurance */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B1F8F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Renters Insurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Protect your belongings even if you don't own your home. Affordable renters insurance for tenants.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Personal Property</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Liability Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Additional Living Expenses</li>
                </ul>
              </div>
            </div>

            {/* Flood Insurance */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B1F8F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flood Insurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Protect your home from flood damage. Standard home insurance doesn't cover flooding - get dedicated flood coverage.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Building Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Contents Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> NFIP Policies</li>
                </ul>
              </div>
            </div>

            {/* Life Insurance */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B1F8F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Life Insurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Secure your family's financial future with life insurance. Term, whole life, and universal life options available.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Term Life Insurance</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Whole Life Insurance</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Universal Life Insurance</li>
                </ul>
              </div>
            </div>

            {/* Business Insurance */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B1F8F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Insurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Protect your business with comprehensive commercial insurance. General liability, workers' comp, and more.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> General Liability</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Workers' Compensation</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Commercial Property</li>
                </ul>
              </div>
            </div>

            {/* Boat Insurance */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B1F8F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Boat Insurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Protect your watercraft with specialized boat insurance coverage for peace of mind on the water.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Hull Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Liability Protection</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Personal Effects</li>
                </ul>
              </div>
            </div>

            {/* RV Insurance */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B1F8F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">RV Insurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Comprehensive RV insurance for motorhomes, travel trailers, and campers. Protect your home on wheels.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Full-Timer Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Vacation Liability</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Roadside Assistance</li>
                </ul>
              </div>
            </div>

            {/* Motorcycle Insurance */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B1F8F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Motorcycle Insurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Protect your motorcycle with specialized coverage. Collision, comprehensive, and liability options available.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Collision Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Comprehensive Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Custom Parts Coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4 text-[#0B1F8F]" />
              <span className="text-sm font-semibold text-[#0B1F8F]">Service Areas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Serving Texas Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our licensed Texas agents are available across the state. We serve Sugar Land, Houston, and surrounding areas with personalized insurance solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              'Sugar Land', 'Richmond', 'Houston', 'Missouri City',
              'Katy', 'Cinco Ranch', 'Galveston', 'League City',
              'Rosenberg', 'Fulshear', 'San Antonio', 'Austin', 'Dallas'
            ].map((city, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors">
                <div className="font-semibold text-gray-900">{city}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Not in Our Service Area?</h3>
                <p className="text-blue-100 mb-6">
                  We're expanding! Contact us to see if we can serve your location or get a referral to a trusted partner.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 bg-white text-[#0B1F8F] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
                  <Phone className="w-5 h-5" />
                  Call (713) 943-9985
                </a>
              </div>
              <div className="text-center md:text-right">
                <div className="text-5xl font-bold mb-2">13+</div>
                <div className="text-blue-100 text-lg">Texas Cities Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-yellow-700">Customer Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Stories, Real Savings
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold text-gray-700">4.7/5</span>
              <span className="text-gray-500">on Trustpilot</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0B1F8F]/5 to-[#2563EB]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">Saved $847/year</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Choose the way that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Do it yourself</h3>
              <p className="text-gray-600 mb-6">
                Use our online comparison tool to find quotes at your own pace, anytime.
              </p>
              <button
                type="button"
                onClick={handleHeroQuote}
                className="bg-[#0B1F8F] hover:bg-[#1C2ED6] text-white px-6 py-3 rounded-xl font-semibold transition transform hover:scale-105"
              >
                Compare Quotes Online
              </button>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get expert help</h3>
              <p className="text-gray-600 mb-6">
                Connect with our licensed agents who can guide you through the process.
              </p>
              <VoiceAgent variant="primary" label="Talk to Sarah" />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  AG
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Licensed Agent
                    </span>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      10+ Years Experience
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expert Team</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Knowledgeable agents
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Expert advice
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Real-time support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <Phone className="w-4 h-4 text-[#0B1F8F]" />
              <span className="text-sm font-semibold text-[#0B1F8F]">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about insurance? Our licensed Texas agents are here to help. Contact us today for a free quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:7139439985" className="text-2xl font-bold text-[#0B1F8F] hover:text-[#2563EB] transition">
                (713) 943-9985
              </a>
              <p className="text-gray-600 mt-2">Mon-Fri: 8AM - 8PM EST</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:support@inshoragroup.com" className="text-2xl font-bold text-[#0B1F8F] hover:text-[#2563EB] transition">
                support@inshoragroup.com
              </a>
              <p className="text-gray-600 mt-2">We respond within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <address className="text-gray-600 not-italic">
                6920 Brisbane Court, Ste 234<br />
                Sugar Land, TX 77478
              </address>
            </div>
          </div>

          {/* Quote wizard CTA */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get accurate quotes in minutes</h3>
                <p className="text-gray-600 mb-6">
                  Our guided quote wizard collects the same details major carriers need — vehicle, driver, property, and coverage preferences — so a licensed agent can compare 25+ options for you.
                </p>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> 30+ relevant questions per insurance type</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> No spam — one agent, multiple carrier quotes</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> Licensed Texas agents · Free & no obligation</li>
                </ul>
                <Link
                  to={wizardLink}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Start quote wizard
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <p className="text-sm font-semibold text-[#0B1F8F] uppercase tracking-wide mb-4">Prefer to talk?</p>
                <a href="tel:7139439985" className="text-3xl font-bold text-gray-900 hover:text-[#0B1F8F] transition block mb-2">(713) 943-9985</a>
                <p className="text-gray-600 text-sm mb-6">Mon–Fri 8 AM – 8 PM CT · Sat 10 AM – 4 PM CT</p>
                <Link to="/contact" className="text-[#0B1F8F] font-semibold text-sm hover:underline">
                  General inquiries & flood/life/business → Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">24/7 Support Available</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Save on Insurance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 100K+ customers who've saved an average of $1,100 on their insurance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button type="button" onClick={handleHeroQuote} className="bg-white text-[#0B1F8F] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
              Compare Quotes Now
            </button>
            <VoiceAgent variant="cta" label="Talk to Sarah" />
          </div>
          <div className="flex items-center justify-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Free to use</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">2 minutes</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">No commitment</span>
            </div>
          </div>
        </div>
      </section>

      <HomepageBlogSection />

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Smart Chatbot */}
      <SmartChatbot />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
