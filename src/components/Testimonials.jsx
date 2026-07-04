import { Star } from 'lucide-react'

const TESTIMONIALS = [
  { name: 'María G.', treatment: 'Armonización facial',   text: 'Desde la primera valoración me sentí segura. La Dra. Giovanna explicó cada paso del proceso y los resultados superaron mis expectativas. Totalmente recomendada.' },
  { name: 'Laura M.', treatment: 'Botox y skin boosters', text: 'El ambiente de la clínica es tranquilo y el equipo muy profesional. Me ayudaron a lograr resultados naturales. Ya es mi lugar de confianza en Morelia.' },
  { name: 'Ana R.',   treatment: 'PRP capilar',           text: 'Llevaba meses buscando una solución para la pérdida de cabello. Con el tratamiento de la Dra. Giovanna noté cambios desde la primera sesión. Excelente atención.' },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-gioval-malva text-gioval-malva" />)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-gioval-blanco py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gioval-malva mb-4">Testimonios</p>
          <h2 className="font-display text-gioval-carbon leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            Lo que dicen
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#887482' }}>nuestras pacientes</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="bg-gioval-blanco p-8 border border-gioval-beige">
              <Stars />
              <p className="font-display text-gioval-carbon mb-6 leading-snug"
                style={{ fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 400 }}>
                "{t.text}"
              </p>
              <div className="border-t border-gioval-beige pt-4">
                <p className="font-body text-gioval-carbon text-sm font-medium">{t.name}</p>
                <p className="font-body text-gioval-greige text-xs tracking-widest uppercase mt-0.5">{t.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
