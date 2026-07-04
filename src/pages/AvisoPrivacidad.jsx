import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SECCIONES = [
  {
    titulo: 'Identidad y domicilio del responsable',
    texto: 'GIOVAL Medicina Estética, S.C. — Dra. Itzel Giovanna Valencia López. Morelia, Michoacán, México · Teléfono: 452 170 9387 · info@gioval.mx · @gioval.mx'
  },
  {
    titulo: 'Datos personales que se recaban',
    texto: 'El Responsable recaba las siguientes categorías de datos personales:',
    lista: [
      'Identificación y contacto: nombre completo, fecha de nacimiento, sexo, domicilio, teléfono, correo electrónico.',
      'Datos patrimoniales: información de pago (no se almacenan datos bancarios completos).',
      'Datos de salud (sensibles): historia clínica, diagnósticos, medicamentos, antecedentes heredofamiliares, resultados de laboratorio, fotografías clínicas, medidas antropométricas y bioimpedancia.',
      'Datos de emergencia: nombre y teléfono de contacto de emergencia.'
    ]
  },
  {
    titulo: 'Finalidades del tratamiento',
    texto: 'Finalidades primarias (necesarias para la relación médico-paciente):',
    lista: [
      'Elaboración y resguardo del expediente clínico (NOM-004-SSA3-2012).',
      'Prestación de servicios de medicina estética, corporal, funcional, regenerativa y capilar.',
      'Seguimiento del tratamiento, evolución y resultados.',
      'Contacto para citas, recordatorios y seguimiento post-procedimiento.',
      'Emisión de facturas y comprobantes de pago.'
    ],
    lista2titulo: 'Finalidades secundarias (puede oponerse sin afectar la atención):',
    lista2: [
      'Envío de información sobre nuevos servicios, promociones y eventos de la clínica.',
      'Uso académico o de difusión de casos clínicos de forma anonimizada.',
      'Estadísticas internas y mejora de procesos clínicos.'
    ]
  },
  {
    titulo: 'Transferencias de datos',
    texto: 'El Responsable NO realizará transferencias de datos personales a terceros sin consentimiento del titular, salvo en los siguientes casos previstos por la ley: (1) cuando sea requerido por autoridad competente mediante orden judicial o administrativa; (2) en caso de emergencia médica que requiera traslado o atención especializada; (3) cuando sea necesario para la prevención o diagnóstico médico, prestación de asistencia sanitaria o gestión de servicios de salud.'
  },
  {
    titulo: 'Derechos ARCO y mecanismo de ejercicio',
    texto: 'El titular de los datos tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercerlos, deberá presentar solicitud escrita al correo info@gioval.mx indicando: nombre completo, descripción del derecho a ejercer y, en su caso, documentos que acrediten su identidad. El Responsable dará respuesta en un plazo máximo de 20 días hábiles.'
  },
  {
    titulo: 'Medidas de seguridad',
    texto: 'El Responsable ha implementado medidas técnicas, administrativas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado, en cumplimiento de los Artículos 19 y 20 de la LFPDPPP. Los expedientes físicos se resguardan en instalaciones con acceso restringido; los expedientes digitales se protegen mediante acceso con contraseña y respaldo periódico.'
  },
  {
    titulo: 'Cambios al aviso de privacidad',
    texto: 'Cualquier modificación al presente Aviso de Privacidad será notificada al titular mediante aviso visible en las instalaciones de la clínica y/o por correo electrónico registrado, con al menos 15 días naturales de anticipación a su entrada en vigor.'
  }
]

export default function AvisoPrivacidad() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      <Navbar />

      <div className="pt-32 pb-16 px-6 lg:px-12 max-w-3xl mx-auto">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gioval-malva mb-4">Legal</p>
        <h1 className="font-display text-gioval-carbon leading-tight mb-2"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400 }}>
          Aviso de Privacidad
        </h1>
        <p className="font-body text-gioval-greige text-sm mb-12">
          En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
        </p>

        <div className="space-y-10">
          {SECCIONES.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-gioval-carbon text-xl mb-3">{s.titulo}</h2>
              <p className="font-body text-gioval-carbon/80 text-sm leading-relaxed mb-3">{s.texto}</p>
              {s.lista && (
                <ul className="space-y-2 mb-3">
                  {s.lista.map((li, j) => (
                    <li key={j} className="font-body text-gioval-carbon/80 text-sm leading-relaxed pl-4 border-l-2 border-gioval-lavanda">{li}</li>
                  ))}
                </ul>
              )}
              {s.lista2titulo && (
                <p className="font-body text-gioval-carbon/80 text-sm leading-relaxed mb-3">{s.lista2titulo}</p>
              )}
              {s.lista2 && (
                <ul className="space-y-2">
                  {s.lista2.map((li, j) => (
                    <li key={j} className="font-body text-gioval-carbon/80 text-sm leading-relaxed pl-4 border-l-2 border-gioval-lavanda">{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
