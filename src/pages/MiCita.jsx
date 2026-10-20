import { useState, useEffect, useCallback } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { CheckCircle, Clock, XCircle, MessageCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SelectorHorario from '../components/SelectorHorario'
import { getCita, reagendarCita, cancelarCita } from '../api/agenda'

const WHATSAPP = '524521709387'
const fmt = n => `$${Number(n).toLocaleString('es-MX')}`
const fechaCita = iso => new Date(iso).toLocaleString('es-MX', {
  timeZone: 'America/Mexico_City', weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit', hour12: true,
})

const ESTADOS = {
  apartada:      { icon: Clock,       color: 'text-gioval-lila',  titulo: 'Esperando tu pago',     texto: 'Estamos esperando la confirmación de tu anticipo. Esto puede tardar unos segundos.' },
  expirada:      { icon: XCircle,     color: 'text-gioval-greige', titulo: 'Reserva expirada',     texto: 'No recibimos el pago del anticipo a tiempo y el horario se liberó. Puedes agendar de nuevo.' },
  por_confirmar: { icon: Clock,       color: 'text-gioval-malva', titulo: 'Reserva recibida',      texto: 'Recepción revisará tu reserva y te confirmará por WhatsApp.' },
  pendiente:     { icon: CheckCircle, color: 'text-green-700',    titulo: 'Cita confirmada',       texto: 'Te esperamos. Llega 10 minutos antes de tu cita.' },
  realizada:     { icon: CheckCircle, color: 'text-gioval-malva', titulo: 'Cita realizada',        texto: 'Gracias por tu visita.' },
  cancelada:     { icon: XCircle,     color: 'text-gioval-greige', titulo: 'Cita cancelada',       texto: '' },
}

const ANTICIPO = {
  pendiente:    a => `Recepción te contactará para tu anticipo de ${fmt(a)}.`,
  pagado:       a => `Anticipo de ${fmt(a)} recibido; se descuenta del total el día de tu cita.`,
  por_devolver: a => `Tu anticipo de ${fmt(a)} será devuelto.`,
  devuelto:     a => `Tu anticipo de ${fmt(a)} fue devuelto.`,
  retenido:     a => `El anticipo de ${fmt(a)} no es reembolsable (cancelación con menos de 24 h).`,
}

const btn = 'font-body text-xs tracking-[0.2em] uppercase px-6 py-3 transition-colors cursor-pointer disabled:opacity-40'

export default function MiCita() {
  const { token } = useParams()
  const [params] = useSearchParams()
  const [cita, setCita] = useState(null)
  const [error, setError] = useState('')
  const [modo, setModo] = useState(null) // 'reagendar' | 'cancelar'
  const [horario, setHorario] = useState(null)
  const [ocupado, setOcupado] = useState(false)

  const cargar = useCallback(() => getCita(token).then(setCita).catch(e => setError(e.message)), [token])
  useEffect(() => { cargar() }, [cargar])

  // Al volver de MercadoPago el webhook puede tardar unos segundos
  useEffect(() => {
    if (cita?.estatus !== 'apartada') return
    const t = setInterval(cargar, 4000)
    return () => clearInterval(t)
  }, [cita?.estatus, cargar])

  const accion = async fn => {
    setOcupado(true); setError('')
    try { await fn(); setModo(null); setHorario(null); await cargar() }
    catch (e) { setError(e.message) }
    finally { setOcupado(false) }
  }

  const estado = cita && ESTADOS[cita.estatus]
  const Icono = estado?.icon
  const linkCita = `${window.location.origin}/mi-cita/${token}`
  const avisoWhatsApp = cita && `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hola Gioval, acabo de reservar en línea: ${cita.tratamiento} el ${fechaCita(cita.fecha_hora)}. A nombre de ${cita.nombre}. ${linkCita}`)}`

  return (
    <div className="min-h-screen bg-gioval-crema">
      <Navbar solid />
      <main className="pt-44 pb-20 px-6 lg:px-12 max-w-2xl mx-auto">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gioval-malva mb-4">Mi cita</p>

        {!cita && !error && <p className="font-body text-gioval-greige">Cargando…</p>}
        {!cita && error && <p className="font-body text-gioval-carbon">{error}</p>}

        {cita && (
          <>
            <div className="flex items-center gap-3 mb-6">
              <Icono size={32} className={estado.color} />
              <h1 className="font-display text-gioval-carbon" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>{estado.titulo}</h1>
            </div>
            {params.get('pago') === 'error' && cita.estatus === 'apartada' && (
              <p className="font-body text-sm text-red-700 bg-red-50 border border-red-200 p-3 mb-4">El pago no se completó. Puedes intentarlo de nuevo agendando otra vez.</p>
            )}
            {estado.texto && <p className="font-body text-gioval-carbon/80 mb-8">{estado.texto}</p>}

            <div className="bg-white/70 border border-gioval-beige p-6 mb-8">
              <p className="font-display text-gioval-carbon text-2xl mb-2">{cita.tratamiento}</p>
              <p className="font-body text-gioval-carbon first-letter:uppercase">{fechaCita(cita.fecha_hora)}</p>
              {cita.especialista && <p className="font-body text-sm text-gioval-carbon/70">Con {cita.especialista}</p>}
              {cita.anticipo && ANTICIPO[cita.anticipo_estado] && (
                <p className="font-body text-sm text-gioval-malva mt-4 pt-4 border-t border-gioval-beige">{ANTICIPO[cita.anticipo_estado](cita.anticipo)}</p>
              )}
            </div>

            {['por_confirmar', 'pendiente'].includes(cita.estatus) && (
              <p className="font-body text-xs text-gioval-greige mb-6">
                Guarda este enlace: desde aquí puedes reagendar o cancelar tu cita.
              </p>
            )}

            {params.get('nueva') && cita.estatus === 'por_confirmar' && (
              <a href={avisoWhatsApp} target="_blank" rel="noopener noreferrer"
                className={`${btn} inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebe57] mb-8`}>
                <MessageCircle size={16} fill="white" /> Avisar por WhatsApp
              </a>
            )}

            {!modo && (cita.puede_reagendar || cita.puede_cancelar) && (
              <div className="flex flex-wrap gap-3">
                {cita.puede_reagendar && (
                  <button onClick={() => setModo('reagendar')} className={`${btn} bg-gioval-malva text-white hover:bg-gioval-carbon`}>Reagendar</button>
                )}
                {cita.puede_cancelar && (
                  <button onClick={() => setModo('cancelar')} className={`${btn} border border-gioval-greige text-gioval-carbon hover:border-gioval-carbon`}>Cancelar cita</button>
                )}
              </div>
            )}
            {!cita.puede_reagendar && cita.puede_cancelar && ['por_confirmar', 'pendiente'].includes(cita.estatus) && (
              <p className="font-body text-xs text-gioval-greige mt-4">
                Faltan menos de 24 h: para cambiar tu horario <a className="underline" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">escríbenos por WhatsApp</a>.
              </p>
            )}

            {modo === 'reagendar' && (
              <div>
                <h2 className="font-display text-gioval-carbon text-2xl mb-6">Elige tu nuevo horario</h2>
                <SelectorHorario tratamientoId={cita.tratamiento_id} value={horario} onChange={setHorario} />
                <div className="flex gap-3 mt-8">
                  <button disabled={!horario?.hora || ocupado} onClick={() => accion(() => reagendarCita(token, horario.fecha, horario.hora))}
                    className={`${btn} bg-gioval-malva text-white hover:bg-gioval-carbon`}>{ocupado ? 'Guardando…' : 'Confirmar cambio'}</button>
                  <button onClick={() => setModo(null)} className={`${btn} text-gioval-greige`}>Volver</button>
                </div>
              </div>
            )}

            {modo === 'cancelar' && (
              <div className="border border-gioval-beige bg-white/70 p-6">
                <p className="font-body text-gioval-carbon mb-4">
                  ¿Seguro que quieres cancelar?{' '}
                  {cita.anticipo_estado === 'pagado' && (cita.cancelacion_con_devolucion
                    ? `Tu anticipo de ${fmt(cita.anticipo)} será devuelto.`
                    : `Faltan menos de 24 h, el anticipo de ${fmt(cita.anticipo)} no es reembolsable.`)}
                </p>
                <div className="flex gap-3">
                  <button disabled={ocupado} onClick={() => accion(() => cancelarCita(token))}
                    className={`${btn} bg-gioval-carbon text-white`}>{ocupado ? 'Cancelando…' : 'Sí, cancelar'}</button>
                  <button onClick={() => setModo(null)} className={`${btn} text-gioval-greige`}>No, conservarla</button>
                </div>
              </div>
            )}

            {['expirada', 'cancelada', 'realizada'].includes(cita.estatus) && (
              <Link to="/agendar" className={`${btn} inline-block bg-gioval-malva text-white hover:bg-gioval-carbon`}>Agendar nueva cita</Link>
            )}
            {error && <p role="alert" className="font-body text-sm text-red-700 bg-red-50 border border-red-200 p-3 mt-6">{error}</p>}
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
