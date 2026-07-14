import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gioval-carbon text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <img src="/logo-gioval-white.png" alt="Gioval" className="h-10 w-auto mb-4" />
            <p className="font-body text-white/40 text-xs leading-relaxed">
              Medicina estética de alta especialidad en Morelia. Belleza respaldada por la ciencia.
            </p>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-gioval-lila mb-4">Servicios</p>
            <ul className="space-y-2">
              {['Medicina Estética','Tratamientos Faciales','Tratamientos Capilares','Control de Peso','Medicina Regenerativa','Medicina Funcional'].map(s => (
                <li key={s}>
                  <a href="/#servicios" className="font-body text-white/50 text-xs hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-gioval-lila mb-4">Contacto</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-gioval-malva mt-0.5 flex-shrink-0" />
                <span className="font-body text-white/50 text-xs leading-relaxed">Av Lázaro Cárdenas 2182, Col Chapultepec Sur, CP 58260, Morelia, Michoacán</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gioval-malva flex-shrink-0" />
                <a href="tel:+524433046690" className="font-body text-white/50 text-xs hover:text-white transition-colors">+52 (443) 304-6690</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gioval-malva flex-shrink-0" />
                <a href="mailto:gioval.info@gmail.com" className="font-body text-white/50 text-xs hover:text-white transition-colors">gioval.info@gmail.com</a>
              </li>
            </ul>
            <p className="font-body text-white/30 text-xs mt-4">Lun – Sáb · 10:00 – 19:00</p>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-gioval-lila mb-4">Síguenos</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/giovalmx?igsh=aTVkM214bmpseGRi" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="p-2 border border-white/20 text-white/50 hover:text-white hover:border-white transition-all duration-200">
                <InstagramIcon size={16} />
              </a>
              <a href="https://www.facebook.com/share/1D47CdhMNb/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="p-2 border border-white/20 text-white/50 hover:text-white hover:border-white transition-all duration-200">
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 pr-16 sm:pr-0">
          <p className="font-body text-white/30 text-xs">© {year} Gioval Medicina Estética. Todos los derechos reservados.</p>
          <Link to="/aviso-de-privacidad" className="font-body text-white/30 text-xs hover:text-white/60 transition-colors">Aviso de privacidad</Link>
        </div>
      </div>
    </footer>
  )
}
