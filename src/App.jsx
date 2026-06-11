import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import AppointmentSection from './components/AppointmentSection'
import AppointmentModal from './components/AppointmentModal'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal  = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="bg-gioval-crema">
      <Navbar onAgendarClick={openModal} />
      <Hero onAgendarClick={openModal} />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <AppointmentSection onAgendarClick={openModal} />
      <Footer />
      <AppointmentModal open={modalOpen} onClose={closeModal} />
      <WhatsAppButton />
    </div>
  )
}
