const SERVICES = [
  { num: '01', name: 'Medicina Estética',     desc: 'Botox, ácido hialurónico, armonización facial y skin boosters.',       color: '#887482' },
  { num: '02', name: 'Tratamientos Faciales', desc: 'Limpiezas profundas, peelings, microdermoabrasión e hidratación.',      color: '#ABA3BA' },
  { num: '03', name: 'Trat. Capilares',       desc: 'Implante capilar FUE, PRP capilar y tricología avanzada.',              color: '#CCCAD8' },
  { num: '04', name: 'Control de Peso',       desc: 'Programas médicos de reducción y recomposición corporal.',              color: '#CED1CA' },
  { num: '05', name: 'Aparatología',          desc: 'Radiofrecuencia, ultrasonido, criolipólisis y tecnología de punta.',    color: '#DED7CE' },
  { num: '06', name: 'Tratamientos de Spa',   desc: 'Experiencias de relajación y bienestar integral en clínica.',           color: '#BFB9B3' },
  { num: '07', name: 'Medicina Regenerativa', desc: 'PRP, factores de crecimiento, bioestimulación y células madre.',        color: '#887482' },
  { num: '08', name: 'Medicina Funcional',    desc: 'Test epigenético, nutrición de precisión y medicina preventiva.',       color: '#ABA3BA' },
]

function ServiceCard({ num, name, desc, color }) {
  return (
    <div className="group relative bg-gioval-crema p-8 overflow-hidden cursor-default transition-all duration-300 hover:bg-gioval-carbon">
      <p className="font-display text-gioval-beige group-hover:text-gioval-malva/30 transition-colors duration-300 leading-none mb-6 select-none"
        style={{ fontSize: '4rem', fontStyle: 'italic', fontWeight: 300 }}>
        {num}
      </p>
      <h3 className="font-display text-gioval-carbon group-hover:text-white transition-colors duration-300 mb-3 leading-snug"
        style={{ fontSize: '1.35rem', fontWeight: 500 }}>
        {name}
      </h3>
      <p className="font-body text-xs leading-relaxed text-gioval-greige group-hover:text-white/60 transition-colors duration-300">
        {desc}
      </p>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: color }} />
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="bg-gioval-crema py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gioval-malva mb-4">Nuestros servicios</p>
          <h2 className="font-display text-gioval-carbon leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400 }}>
            Tratamientos
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#887482' }}>diseñados para ti</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gioval-beige">
          {SERVICES.map(s => <ServiceCard key={s.num} {...s} />)}
        </div>
      </div>
    </section>
  )
}
