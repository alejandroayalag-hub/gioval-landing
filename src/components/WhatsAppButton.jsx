import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/521XXXXXXXXXX?text=Hola%20Gioval%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20tratamientos"
      target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 shadow-lg hover:bg-[#1ebe57] transition-colors duration-200 group">
      <MessageCircle size={20} fill="white" />
      <span className="font-body text-xs tracking-widest uppercase max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  )
}
