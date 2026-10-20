import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import AppointmentSection from './components/AppointmentSection'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

export default function App() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const agendar = () => navigate('/agendar')

  useEffect(() => {
    // Enlaces viejos /?agendar=1
    if (searchParams.get('agendar') === '1') navigate('/agendar', { replace: true })
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
    }
  }, [])

  return (
    <div className="bg-gioval-crema">
      <Navbar onAgendarClick={agendar} />
      <Hero onAgendarClick={agendar} />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <AppointmentSection onAgendarClick={agendar} />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
