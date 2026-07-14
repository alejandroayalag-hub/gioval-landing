export default function Hero({ onAgendarClick }) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
      }}
    >
      {/* Overlay oscuro limpio — sin gradiente de color */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-40">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-white/50 mb-8">
          Morelia, Michoacán
        </p>

        <h1 className="font-display text-white leading-[0.95] mb-8"
          style={{ fontSize: 'clamp(2.75rem, 8vw, 7rem)', fontWeight: 400 }}>
          Estética integral
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#CCCAD8' }}>
            es salud funcional
          </em>
        </h1>

        <p className="font-body text-white/65 text-sm tracking-wide max-w-sm mb-12 leading-relaxed">
          Un espacio seguro diseñado para transformar tu vida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button onClick={onAgendarClick}
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 bg-gioval-malva text-white hover:bg-white hover:text-gioval-malva transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >Agenda tu cita</button>
          <a href="#servicios"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-white/40 text-white hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >Ver servicios</a>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-white/15 pt-10 max-w-lg">
          {[
            { num: '8+',   label: 'Años de experiencia' },
            { num: '100+', label: 'Tratamientos especializados' },
          ].map(s => (
            <div key={s.label}>
              <p className="font-display text-gioval-lavanda leading-none mb-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300 }}>
                {s.num}
              </p>
              <p className="font-body text-white/40 text-xs tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
