import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORIAS = [
  {
    num: '01', label: 'Medicina Inyectable',
    tratamientos: [
      {
        nombre: 'Toxina Botulínica',
        subtitulo: 'Botox · Dysport · L\'beautox',
        desc: 'El tratamiento más solicitado en el mundo de la estética. Relaja los músculos que causan las líneas de expresión —frente, entrecejo, patas de gallo— sin alterar tu expresión natural. El resultado es una mirada más descansada, fresca y luminosa.',
        para: 'Líneas de expresión, patas de gallo, bruxismo, hiperhidrosis, gummy smile, migraña crónica, Barbie Botox.',
        duracion: '20–45 min',
        sesiones: 'Mantenimiento cada 4–6 meses',
      },
      {
        nombre: 'Baby Botox',
        desc: 'El efecto del botox con resultado lo más natural posible. Suaviza líneas de expresión sin congelarte — mantienes movimiento, expresividad y un aspecto totalmente natural.',
        para: 'Primera vez con toxina botulínica, expresión muy marcada, quienes prefieren resultados sutiles.',
        duracion: '30 min',
        sesiones: 'Mantenimiento cada 4–6 meses',
      },
      {
        nombre: 'Mesobotox — Piel de Cristal',
        desc: 'Toxina botulínica en microdosis con nutrientes aplicados en la superficie de la piel para cerrar poros visibles, reducir sebo, mejorar textura y dar ese acabado de piel de cristal.',
        para: 'Poros dilatados, piel grasa, líneas finas superficiales.',
        duracion: '45 min',
        sesiones: 'Cada 3–4 meses',
      },
      {
        nombre: 'Ácido Hialurónico — Rellenos Faciales',
        subtitulo: 'Vivacy Stylage · Revofill',
        desc: 'Restauran de forma natural y progresiva el volumen perdido. Los resultados son inmediatos y duran entre 12 y 18 meses. Aplicamos anestesia tópica para máxima comodidad.',
        para: 'Labios afinados, ojeras marcadas, pómulos bajos, pérdida de definición del óvalo facial.',
        duracion: '45–60 min',
        sesiones: 'Duración 12–18 meses',
      },
      {
        nombre: 'Skin Boosters — Hidratación Profunda',
        subtitulo: 'PDRN Salmón · TKN HA3 · Exosomas NXO',
        desc: 'Tratamientos inyectables que actúan desde adentro de la dermis, estimulando colágeno, mejorando la calidad de la piel y dándole luminosidad y tersura que no se logra con ningún producto tópico.',
        para: 'Piel opaca, dañada por el sol, con signos de envejecimiento.',
        duracion: '45 min',
        sesiones: '3 sesiones con 2–4 semanas de separación',
      },
      {
        nombre: 'Bioestimuladores de Colágeno',
        subtitulo: 'Sculptra · Radiesse · Juvelook',
        desc: 'No solo rellenan — estimulan a tu propio cuerpo a producir más colágeno. Los resultados mejoran progresivamente y duran mucho más que los rellenos convencionales.',
        para: 'Pérdida de volumen generalizada, piel flácida, mejillas hundidas, ojeras, cuello.',
        duracion: '45–60 min',
        sesiones: '2–3 sesiones',
      },
    ],
  },
  {
    num: '02', label: 'Tratamientos Faciales',
    tratamientos: [
      {
        nombre: 'Hydrafacial',
        desc: 'El tratamiento facial más completo del mundo. Limpia, exfolia, extrae impurezas e hidrata en una sola sesión de 60 minutos —sin rojez, sin tiempo de recuperación y con resultados visibles desde el primer día.',
        para: 'Piel opaca, poros dilatados, piel deshidratada, acné no activo, manchas superficiales, preparación pre-evento.',
        duracion: '60 min',
        sesiones: 'Una mensual · ciclo de 4 para manchas o acné',
      },
      {
        nombre: 'Geneo — Oxigenación Celular',
        desc: 'Tecnología OxyGeneo que crea burbujas de CO₂ ricas en nutrientes que penetran en las capas profundas de la piel, estimulando la oxigenación celular natural. Resultado: piel más firme, luminosa y rejuvenecida.',
        para: 'Piel apagada, signos tempranos de envejecimiento, textura irregular, preparación pre-evento.',
        duracion: '60 min',
        sesiones: 'Ciclo inicial 4 sesiones mensuales · mantenimiento cada 6–8 semanas',
      },
      {
        nombre: 'Dermapen — Microneedling',
        desc: 'Microagujas ultrafinas que crean miles de microcanales en la piel, activando la respuesta natural de regeneración: producción de colágeno, elastina y nuevas células dérmicas. Tu piel se repara a sí misma.',
        para: 'Cicatrices de acné, poros dilatados, flacidez leve, manchas, líneas finas.',
        duracion: '60 min',
        sesiones: '3–6 sesiones con 4 semanas de separación',
      },
      {
        nombre: 'Peelings Químicos',
        subtitulo: 'Cosmelan · Peelings profesionales',
        desc: 'Ácidos profesionales en concentraciones específicas que eliminan las capas dañadas, estimulan la renovación celular y revelan una piel nueva, uniforme y luminosa. Cosmelan es el tratamiento más efectivo del mundo para el melasma.',
        para: 'Manchas, melasma, piel opaca, acné, cicatrices superficiales.',
        duracion: '45–60 min',
        sesiones: 'Variable según tipo de peeling',
      },
      {
        nombre: 'Mesoterapia Facial Toskani',
        desc: 'Inyección directa de lo que tu piel necesita. Aplica cócteles biorevitalizantes con vitaminas, aminoácidos, ácido hialurónico y antioxidantes directamente en la dermis para hidratar, iluminar y rejuvenecer desde adentro.',
        para: 'Piel deshidratada, opaca, con falta de luminosidad y firmeza.',
        duracion: '45 min',
        sesiones: '4 sesiones mensuales · mantenimiento cada 2–3 meses',
      },
    ],
  },
  {
    num: '03', label: 'Tratamientos Capilares',
    tratamientos: [
      {
        nombre: 'Tricoscopia Digital',
        subtitulo: 'Diagnóstico Capilar de Alta Resolución',
        desc: 'El primer paso para recuperar tu cabello. Cámara de alta resolución que analiza el cuero cabelludo y los folículos, determina el tipo y grado de alopecia y diseña el protocolo más efectivo. Sin diagnóstico no hay tratamiento correcto.',
        para: 'Caída de cabello, entradas, calvicie, cabello débil o sin volumen.',
        duracion: '60 min',
        sesiones: 'Sesión diagnóstica única',
      },
      {
        nombre: 'Mesoterapia Capilar',
        subtitulo: 'Dermaheal HL · DR.CYJ Hair Filler',
        desc: 'Nutrición directa para tus folículos. Inyecta activos regeneradores en el cuero cabelludo para detener la caída, fortalecer el cabello existente y estimular el crecimiento de nuevas fibras capilares.',
        para: 'Caída difusa, caída por estrés, alopecia androgenética en etapa temprana.',
        duracion: '45 min',
        sesiones: '6–8 sesiones semanales o quincenales · mantenimiento mensual',
      },
      {
        nombre: 'Dermapen Capilar',
        desc: 'Microneedling aplicado al cuero cabelludo para activar los folículos dormidos y mejorar la absorción de activos. Ideal combinado con mesoterapia capilar para multiplicar resultados.',
        para: 'Alopecia con folículos dormidos, baja densidad capilar.',
        duracion: '45 min',
        sesiones: 'Combinado con mesoterapia capilar',
      },
      {
        nombre: 'Células Madre Capilares — CTM',
        desc: 'El tratamiento más avanzado para la alopecia. Las células madre capilares con dutasterida actúan directamente en el folículo para regenerarlo, reactivar el ciclo de crecimiento y recuperar cabello en zonas donde ya estaba en proceso de pérdida.',
        para: 'Alopecia avanzada, zonas con escasa densidad, alopecia androgenética.',
        duracion: '60 min',
        sesiones: '4–6 sesiones con 4 semanas de separación',
      },
    ],
  },
  {
    num: '04', label: 'Control de Peso',
    tratamientos: [
      {
        nombre: 'Tirzepatida · Mounjaro',
        desc: 'El avance más revolucionario en medicina para el control del peso. Actúa sobre dos receptores hormonales (GIP y GLP-1) para reducir el apetito, mejorar la sensibilidad a la insulina y promover una pérdida de peso sostenida. La Dra. Valencia está certificada en Obesidad por el Tec de Monterrey.',
        para: 'Sobrepeso u obesidad (IMC ≥ 27), resistencia a la insulina, prediabetes, quienes no han logrado resultados con dieta y ejercicio.',
        duracion: 'Consulta inicial + seguimiento mensual',
        sesiones: 'Protocolo continuo con ajuste progresivo de dosis',
      },
      {
        nombre: 'Lipolíticos Inyectables',
        subtitulo: 'Grasa Localizada',
        desc: 'Para esa grasa que no se va ni con dieta ni con ejercicio. Se aplican directamente en la zona problema —papada, abdomen, flancos, muslos— para romper la grasa de forma localizada y progresiva, sin cirugía y sin tiempo de recuperación.',
        para: 'Grasa localizada resistente en zonas específicas.',
        duracion: '30–45 min',
        sesiones: '4–6 sesiones con 2 semanas de separación',
      },
    ],
  },
  {
    num: '05', label: 'Aparatología',
    tratamientos: [
      {
        nombre: 'Depilación Láser Definitiva',
        subtitulo: 'LumiMax PL',
        desc: 'Olvídate para siempre de rasuradoras, ceras y pinzas. Destruye el folículo capilar de raíz sin dañar la piel que lo rodea. Reducción permanente del vello de hasta el 95%.',
        para: 'Cualquier zona del cuerpo: cara, axilas, piernas, bikini, espalda.',
        duracion: 'Variable por zona',
        sesiones: '6–8 sesiones con separación de 4–6 semanas',
      },
      {
        nombre: 'HIFU — Lifting sin Bisturí',
        subtitulo: 'Ultrasonido Microfocalizado',
        desc: 'Envía energía ultrasónica a las capas más profundas de la piel —incluyendo el SMAS, la misma capa que trabajan los cirujanos plásticos— para estimular colágeno y tensar la piel desde adentro.',
        para: 'Óvalo facial caído, papada, cuello flácido, brazos, abdomen, glúteos, celulitis.',
        duracion: '60–90 min',
        sesiones: '1 sesión al año es suficiente para la mayoría · resultados en 3–6 meses',
      },
      {
        nombre: 'Endolift · Laser LYSE Hybrid',
        desc: 'El tratamiento más avanzado para quienes quieren resultados quirúrgicos sin pasar por quirófano. Fibra láser que trabaja directamente debajo de la piel, derritiendo grasa localizada y tensando el tejido en una sola sesión.',
        para: 'Perfilamiento facial, papada, párpados, cicatrices de acné, abdomen, espalda, brazos, chaparreras.',
        duracion: '60–120 min',
        sesiones: 'Una sesión es suficiente en la mayoría de los casos',
      },
      {
        nombre: 'Radiofrecuencia',
        subtitulo: 'Reafirma y Rejuvenece',
        desc: 'Energía electromagnética controlada que calienta las capas profundas de la piel y estimula la producción de colágeno y elastina. Resultado: piel más firme, tensa y rejuvenecida, sin tiempo de recuperación.',
        para: 'Flacidez leve a moderada en cara, cuello, abdomen y extremidades.',
        duracion: '45–60 min',
        sesiones: '4–6 sesiones mensuales',
      },
      {
        nombre: 'Presoterapia',
        subtitulo: 'Drenaje Linfático Mecánico',
        desc: 'Traje de compresión neumática que realiza un masaje progresivo de pies a cabeza, activando el drenaje linfático, eliminando la retención de líquidos y reduciendo la inflamación.',
        para: 'Piernas pesadas, retención de líquidos, preparación y recuperación post-cirugía estética.',
        duracion: '45 min',
        sesiones: 'Variable según objetivo',
      },
      {
        nombre: 'Liposonic',
        subtitulo: 'Ultrasonido de Alta Frecuencia',
        desc: 'Ultrasonido de alta intensidad que disuelve el tejido graso y fibroso localizado, mejorando la circulación, reduciendo la celulitis y reafirmando la piel.',
        para: 'Celulitis fibrosa, grasa localizada resistente.',
        duracion: '45–60 min',
        sesiones: 'Variable según zona',
      },
      {
        nombre: 'Escleroterapia',
        subtitulo: 'Várices y Arañas Vasculares',
        desc: 'Elimina esas venas moradas y rojas que tanto te molestan. Inyecta una solución esclerosante directamente en las venas dilatadas, haciendo que se colapsen y desaparezcan gradualmente. Sin cirugía, sin tiempo de recuperación.',
        para: 'Várices pequeñas y medianas, arañas vasculares en piernas.',
        duracion: '30–45 min',
        sesiones: 'Variable según extensión',
      },
    ],
  },
  {
    num: '06', label: 'Spa y Bienestar',
    tratamientos: [
      {
        nombre: 'Limpieza Facial Profunda',
        desc: 'El básico que nunca falla. Va mucho más allá de lo que puedes hacer en casa: exfolia, extrae impurezas de los poros, equilibra el pH, hidrata y deja tu piel preparada para absorber mejor cualquier tratamiento.',
        para: 'Piel con puntos negros, piel grasa o mixta, acné leve, piel opaca.',
        duracion: '60 min',
        sesiones: 'Mensual recomendado',
      },
      {
        nombre: 'Masaje Relajante',
        desc: 'Una hora para ti. Con aceites esenciales y técnica sueca libera la tensión acumulada, reduce el cortisol (la hormona del estrés) y activa la respuesta de relajación profunda del sistema nervioso.',
        para: 'Estrés, tensión muscular, bienestar general.',
        duracion: '60 min',
        sesiones: 'A demanda',
      },
      {
        nombre: 'Drenaje Linfático Manual',
        desc: 'El masaje más saludable que puedes darle a tu cuerpo. Movimientos suaves y rítmicos activan el sistema linfático, eliminan toxinas, reducen la retención de líquidos y desinflamán el cuerpo.',
        para: 'Retención de líquidos, inflamación, post-cirugía estética.',
        duracion: '60 min',
        sesiones: 'Variable según objetivo',
      },
      {
        nombre: 'Maderoterapia',
        desc: 'El masaje reductivo con resultados reales. Instrumentos de madera diseñados para moldear el cuerpo, romper el tejido graso, eliminar celulitis y reducir medidas de forma natural y progresiva.',
        para: 'Celulitis, medidas, tonicidad corporal.',
        duracion: '60 min',
        sesiones: 'Ciclo de 10–12 sesiones recomendado',
      },
      {
        nombre: 'Pink Intimate System',
        subtitulo: 'Despigmentación Íntima',
        desc: 'Protocolo líder mundial para la despigmentación de axilas, bikini, área perianal e ingle. Unifica el tono de forma segura y efectiva, sin procedimientos invasivos.',
        para: 'Hiperpigmentación en zonas íntimas.',
        duracion: '45–60 min',
        sesiones: 'Variable según intensidad del tono',
      },
    ],
  },
  {
    num: '07', label: 'Medicina Regenerativa',
    tratamientos: [
      {
        nombre: 'Terapia con Fibroblastos Alogénicos',
        subtitulo: 'Exocell',
        desc: 'La medicina regenerativa llevada a su máxima expresión. Los fibroblastos alogénicos se integran con tus propias células y las entrenan para producir más colágeno y reparar el daño acumulado. Los resultados mejoran durante meses y pueden durar años.',
        para: 'Rejuvenecimiento facial profundo, cicatrices y queloides, alopecia, flacidez y pérdida de colágeno generalizada.',
        duracion: '60 min por sesión',
        sesiones: '2–4 sesiones · 4–6 semanas de separación · resultados visibles durante 6–12 meses',
      },
    ],
  },
  {
    num: '08', label: 'Sueroterapia · Medicina Funcional',
    tratamientos: [
      {
        nombre: 'Power Serum · El Suero Insignia de GIOVAL',
        desc: 'Más energía, mejor piel, mente más clara y un sistema inmune más fuerte —todo en una sola sesión. Combinación única de glutatión, vitamina C en alta dosis, EDTA, DMSO, complejo B y oligoelementos administrados directamente en vena al 100% de biodisponibilidad.',
        para: 'Fatiga crónica, piel opaca, sistema inmune bajo, deficiencias nutricionales.',
        duracion: '45–60 min',
        sesiones: 'A demanda · con sesiones regulares los beneficios se acumulan',
      },
      {
        nombre: 'Sueros Esenciales y Premium',
        desc: 'Sueros intravenosos personalizados según tu estado de salud, microbioma, absorción de nutrientes y perfil hormonal. La vía intravenosa garantiza el 100% de biodisponibilidad, muy superior a cualquier suplemento oral.',
        para: 'Personas con deficiencias crónicas o que no absorben correctamente los suplementos orales.',
        duracion: '45–60 min',
        sesiones: 'Variable según protocolo',
      },
      {
        nombre: 'Protocolo Longevidad',
        desc: 'El programa más completo para quienes quieren no solo verse bien, sino vivir más y mejor. Combina sueros intravenosos, suplementación personalizada (basada en test epigenético o laboratorios) y modificación de hábitos para optimizar tu biología desde adentro.',
        para: 'Personas que buscan salud óptima, longevidad y bienestar integral.',
        duracion: 'Programa continuo',
        sesiones: 'Protocolo individualizado',
      },
      {
        nombre: 'Test Epigenético',
        desc: 'Tu genética no es tu destino, pero sí es tu mapa. Analiza la expresión de tus genes para identificar cómo envejece tu cuerpo, qué nutrientes te faltan, cómo responde tu piel y qué tratamientos funcionarán mejor para ti.',
        para: 'Quienes buscan personalizar al máximo su protocolo estético y de salud.',
        duracion: '30 min',
        sesiones: 'Sesión única con resultados personalizados',
      },
    ],
  },
]

function TratamientoCard({ t }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative bg-white border border-gioval-beige overflow-hidden cursor-default"
      style={{ height: '310px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Estado default: solo nombre + subtítulo */}
      <div
        className="p-7 h-full flex flex-col justify-center"
        style={{
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.25s ease',
          pointerEvents: 'none',
        }}
      >
        <h3 className="font-display text-gioval-carbon" style={{ fontSize: '1.15rem', fontWeight: 500 }}>
          {t.nombre}
        </h3>
        {t.subtitulo && (
          <p className="font-body text-gioval-malva text-xs tracking-wider uppercase mt-1">{t.subtitulo}</p>
        )}
      </div>

      {/* Estado hover: contenido completo sobre fondo carbon */}
      <div
        className="absolute inset-0 bg-gioval-carbon p-7 flex flex-col gap-3"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          pointerEvents: hovered ? 'auto' : 'none',
        }}
      >
        <div>
          <h3 className="font-display text-white" style={{ fontSize: '1.15rem', fontWeight: 500 }}>
            {t.nombre}
          </h3>
          {t.subtitulo && (
            <p className="font-body text-gioval-malva text-xs tracking-wider uppercase mt-1">{t.subtitulo}</p>
          )}
        </div>
        <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.desc}</p>
        <div className="mt-auto flex flex-col gap-1.5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.75rem' }}>
          {t.para && (
            <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <span className="font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>Ideal para: </span>{t.para}
            </p>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.25rem' }}>
            {t.duracion && (
              <span className="font-body text-xs text-gioval-malva">⏱ {t.duracion}</span>
            )}
            {t.sesiones && (
              <span className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>↻ {t.sesiones}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Tratamientos() {
  const [activa, setActiva] = useState(0)
  const cat = CATEGORIAS[activa]

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gioval-malva mb-4">Catálogo 2026</p>
        <h1 className="font-display text-gioval-carbon leading-tight mb-2"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400 }}>
          Nuestros tratamientos
        </h1>
        <p className="font-body text-gioval-greige text-sm max-w-xl">
          Todos los tratamientos son realizados o supervisados por médico especialista.
        </p>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-gioval-beige shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {CATEGORIAS.map((c, i) => (
              <button
                key={c.num}
                onClick={() => setActiva(i)}
                className={`font-body text-xs tracking-wider uppercase px-5 py-4 border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activa === i
                    ? 'border-gioval-malva text-gioval-malva'
                    : 'border-transparent text-gioval-greige hover:text-gioval-carbon'
                }`}
              >
                <span className="text-gioval-lavanda mr-1.5">{c.num}</span>{c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cat.tratamientos.map((t, i) => (
            <TratamientoCard key={i} t={t} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
