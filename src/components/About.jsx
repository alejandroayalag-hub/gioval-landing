export default function About() {
  return (
    <section id="nosotros" className="bg-gioval-blanco py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gioval-malva mb-6">Sobre Gioval</p>
          <h2 className="font-display text-gioval-carbon leading-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400 }}>
            Belleza respaldada
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#887482' }}>por la medicina</em>
          </h2>
          <blockquote className="font-display text-gioval-malva border-l-2 border-gioval-malva pl-6 mb-8"
            style={{ fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.5 }}>
            "La estética desde la ética — cada tratamiento es una decisión médica, no solo cosmética."
          </blockquote>
          <p className="font-body text-gioval-greige text-sm leading-relaxed mb-4">
            La Dra. Giovanna lidera Gioval con una filosofía clara: la medicina estética debe ser segura,
            personalizada y basada en evidencia científica. Cada paciente recibe una valoración integral
            antes de cualquier procedimiento.
          </p>
          <p className="font-body text-gioval-greige text-sm leading-relaxed mb-8">
            Con más de 8 años de experiencia en medicina estética y certificaciones en las técnicas más
            avanzadas, la Dra. Giovanna ha atendido a cientos de pacientes en Morelia que buscan verse
            y sentirse mejor, de forma segura.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Médico cirujano certificado',
              'Especialidad en medicina estética',
              'Certificación internacional NOM-004',
              'Miembro de asociaciones médicas',
            ].map(c => (
              <div key={c} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-gioval-malva mt-1.5 flex-shrink-0" />
                <p className="font-body text-xs text-gioval-carbon">{c}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="w-full aspect-[3/4] relative overflow-hidden">
            <img
              src="/images/about.jpg"
              alt="Dra. Giovanna — Directora Médica Gioval"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <div>
                <p className="font-display text-white text-xl font-light">Dra. Giovanna</p>
                <p className="font-body text-white/70 text-xs tracking-widest uppercase">Directora Médica · Gioval</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-gioval-crema shadow-lg p-6 max-w-[160px]">
            <p className="font-display text-gioval-malva leading-none mb-1"
              style={{ fontSize: '2.5rem', fontWeight: 300 }}>8+</p>
            <p className="font-body text-gioval-carbon text-xs tracking-widest uppercase leading-tight">Años de experiencia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
