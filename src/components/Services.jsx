const SERVICES = [
  {
    num: '01',
    name: 'Medicina Estética Inyectable',
    desc: 'Toxina botulínica (Botox · Dysport · L\'beautox), Baby Botox, Mesobotox Piel de Cristal, ácido hialurónico, skin boosters (PDRN Salmón · TKN HA3 · Exosomas NXO) y bioestimuladores de colágeno (Sculptra · Radiesse · Juvelook).',
    color: '#887482',
  },
  {
    num: '02',
    name: 'Tratamientos Faciales',
    desc: 'Hydrafacial, Geneo Oxigenación Celular, Dermapen Microneedling, peelings químicos (Cosmelan para melasma) y mesoterapia facial Toskani con vitaminas y ácido hialurónico.',
    color: '#ABA3BA',
  },
  {
    num: '03',
    name: 'Tratamientos Capilares',
    desc: 'Tricoscopia digital de alta resolución, mesoterapia capilar (Dermaheal HL · DR.CYJ Hair Filler), Dermapen capilar y células madre capilares CTM con dutasterida para alopecia avanzada.',
    color: '#CCCAD8',
  },
  {
    num: '04',
    name: 'Control de Peso',
    desc: 'Tirzepatida · Mounjaro con seguimiento médico especializado (certificación Tec de Monterrey en Obesidad), y lipolíticos inyectables para grasa localizada en papada, abdomen, flancos y muslos.',
    color: '#CED1CA',
  },
  {
    num: '05',
    name: 'Aparatología de Alta Tecnología',
    desc: 'Depilación láser definitiva LumiMax PL, HIFU lifting sin bisturí, Endolift Laser LYSE Hybrid, radiofrecuencia, presoterapia drenaje linfático, Liposonic y escleroterapia para várices.',
    color: '#DED7CE',
  },
  {
    num: '06',
    name: 'Spa y Bienestar',
    desc: 'Limpieza facial profunda, masaje relajante con aceites esenciales y técnica sueca, drenaje linfático manual, maderoterapia reductiva y Pink Intimate System despigmentación íntima.',
    color: '#BFB9B3',
  },
  {
    num: '07',
    name: 'Medicina Regenerativa',
    desc: 'Terapia con fibroblastos alogénicos Exocell: regeneración celular profunda para rejuvenecimiento facial, cicatrices, alopecia y flacidez. Resultados que mejoran durante 6–12 meses.',
    color: '#887482',
  },
  {
    num: '08',
    name: 'Medicina Funcional · Sueroterapia',
    desc: 'Power Serum (glutatión · vitamina C · complejo B), sueros esenciales y premium, cócteles funcionales IV al 100% de biodisponibilidad, test epigenético y Protocolo Longevidad.',
    color: '#ABA3BA',
  },
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
