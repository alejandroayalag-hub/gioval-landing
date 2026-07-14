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
          <p className="font-body text-gioval-greige text-sm leading-relaxed mb-4">
            Con más de 8 años de experiencia en medicina estética y certificaciones en las técnicas más
            avanzadas, la Dra. Giovanna ha atendido a cientos de pacientes que buscan verse
            y sentirse mejor, de forma segura.
          </p>
          <p className="font-body text-gioval-greige text-sm leading-relaxed mb-8">
            Su formación en Medicina Funcional le permite ir más allá del síntoma estético: identifica
            desequilibrios hormonales (SOP, tiroides, resistencia a la insulina), alteraciones del
            microbioma intestinal y deficiencias nutricionales que impactan directamente en la piel,
            el cabello y el peso — y los trata de raíz, antes o junto con los tratamientos estéticos.
          </p>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-gioval-malva mb-4">Formación y certificaciones</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              'Especialista en Medicina Estética — IPPC, aval académico UNAM',
              'Certificada en Medicina Funcional — IEMF',
              'Certificada en SOP y salud hormonal femenina',
              'Certificada en Medicina Funcional Gastrointestinal',
              'Certificada en Tiroides y metabolismo',
              'Certificada en Suplementación funcional — IEMF',
              'Certificada en Obesidad — Tecnológico de Monterrey',
            ].map(c => (
              <div key={c} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-gioval-malva mt-1.5 flex-shrink-0" />
                <p className="font-body text-xs text-gioval-carbon">{c}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gioval-beige pt-6">
            <p className="font-display text-gioval-carbon mb-2"
              style={{ fontSize: '1.15rem', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.6 }}>
              "Los tratamientos estéticos más efectivos son los que trabajan en armonía con tu biología,
              no en contra de ella. Mi objetivo es que cada paciente luzca increíble porque se siente increíble."
            </p>
            <p className="font-body text-xs tracking-widest uppercase text-gioval-greige">— Dra. Giovanna</p>
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
