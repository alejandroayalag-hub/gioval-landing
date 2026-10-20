export default function AppointmentSection({ onAgendarClick }) {
  return (
    <section id="contacto" className="py-32 px-6 lg:px-12 bg-gioval-carbon">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-white/50 mb-6">Primer paso</p>
        <h2 className="font-display text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
          Tu bienestar
          <br />
          <em style={{ fontStyle: 'italic', color: '#CCCAD8' }}>comienza aquí</em>
        </h2>
        <p className="font-body text-white/60 text-sm leading-relaxed mb-12 max-w-lg mx-auto">
          Agenda en línea tu valoración. La Dra. Giovanna te escuchará,
          evaluará tu caso y te presentará un plan de tratamiento personalizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onAgendarClick}
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 bg-white text-gioval-malva hover:bg-gioval-crema transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gioval-carbon">
            Agendar valoración
          </button>
          <a href="https://wa.me/524521709387?text=Hola%20Gioval%2C%20quisiera%20información%20sobre%20tratamientos"
            target="_blank" rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-white/40 text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Escribir por WhatsApp
          </a>
        </div>
        <p className="font-body text-white/40 text-xs mt-10 tracking-widest uppercase">
          Lunes a Viernes 8:00 am – 5:00 pm · Sábado 9:00 am – 2:00 pm
        </p>
      </div>
    </section>
  )
}
