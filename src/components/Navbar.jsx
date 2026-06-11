import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Nosotros',    href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Galería',     href: '#galeria' },
  { label: 'Contacto',    href: '#contacto' },
]

export default function Navbar({ onAgendarClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gioval-crema/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img
            src={scrolled ? '/logo-gioval.svg' : '/logo-gioval-white.svg'}
            alt="Gioval Medicina Estética"
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`font-body text-xs tracking-widest uppercase transition-colors duration-200 ${
                scrolled ? 'text-gioval-carbon hover:text-gioval-malva' : 'text-white/80 hover:text-white'
              }`}
            >{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <button onClick={onAgendarClick}
            className="font-body text-xs tracking-widest uppercase px-6 py-2.5 bg-gioval-malva text-white border border-gioval-malva hover:bg-gioval-carbon hover:border-gioval-carbon transition-all duration-200 cursor-pointer"
          >Agenda tu cita</button>
        </div>

        <button className="md:hidden p-2 cursor-pointer" onClick={() => setMenuOpen(v => !v)} aria-label="Abrir menú">
          {menuOpen
            ? <X size={22} className={scrolled ? 'text-gioval-carbon' : 'text-white'} />
            : <Menu size={22} className={scrolled ? 'text-gioval-carbon' : 'text-white'} />
          }
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gioval-crema border-t border-gioval-beige px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="font-body text-xs tracking-widest uppercase text-gioval-carbon hover:text-gioval-malva transition-colors"
            >{l.label}</a>
          ))}
          <button onClick={() => { setMenuOpen(false); onAgendarClick() }}
            className="mt-2 font-body text-xs tracking-widest uppercase px-6 py-3 bg-gioval-malva text-white cursor-pointer"
          >Agenda tu cita</button>
        </div>
      )}
    </header>
  )
}
