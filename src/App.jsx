import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
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
import BestInsuranceGuide from './pages/BestInsuranceGuide'

import ServiceDetail from './pages/ServiceDetail'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/best-insurance-company-usa" element={<BestInsuranceGuide />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
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
    </>
  )
}

export default App
