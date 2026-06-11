export default function Hero({ onAgendarClick }) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #4D4846 0%, #887482 50%, #ABA3BA 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gioval-malva/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-white/60 mb-6">
          Querétaro, México
        </p>

        <h1 className="font-display text-white leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 400 }}>
          Revela tu
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#CCCAD8' }}>
            versión más radiante
          </em>
        </h1>

        <p className="font-body text-white/70 text-sm tracking-wide max-w-md mb-10 leading-relaxed">
          Medicina estética de alta especialidad. Tratamientos personalizados
          respaldados por ciencia, experiencia y el cuidado de la Dra. Giovanna.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button onClick={onAgendarClick}
            className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gioval-malva text-white hover:bg-white hover:text-gioval-malva transition-all duration-300 cursor-pointer"
          >Agenda tu cita</button>
          <a href="#servicios"
            className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
          >Ver servicios</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-8">
          {[
            { num: '500+', label: 'Pacientes satisfechas' },
            { num: '8+',   label: 'Años de experiencia' },
            { num: '100+', label: 'Tratamientos especializados' },
            { num: '9',    label: 'Categorías de servicio' },
          ].map(s => (
            <div key={s.label}>
              <p className="font-display text-gioval-lavanda leading-none mb-1"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
                {s.num}
              </p>
              <p className="font-body text-white/50 text-xs tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
