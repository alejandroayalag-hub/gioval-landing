import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Search } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SelectorHorario, { fechaLarga, hora12 } from '../components/SelectorHorario'
import { getServicios, getEspecialistas, reservar } from '../api/agenda'

const fmt = n => `$${Number(n).toLocaleString('es-MX')}`
const PASOS = ['Tu WhatsApp', 'Servicio', 'Especialista', 'Fecha y hora', 'Confirmar']

const inputCls = 'w-full font-body text-base text-gioval-carbon bg-transparent border-b border-gioval-beige focus:border-gioval-malva outline-none py-2 transition-colors placeholder:text-gioval-greige'
const labelCls = 'font-body text-xs tracking-widest uppercase text-gioval-greige block mb-1'
const btnPrimario = 'font-body text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gioval-malva text-white hover:bg-gioval-carbon transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer'

export default function Agendar() {
  const navigate = useNavigate()
  const [paso, setPaso] = useState(0)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  const [telefono, setTelefono] = useState('')
  const [info, setInfo] = useState(null)              // { continuacion, anticipo, servicios }
  const [busqueda, setBusqueda] = useState('')
  const [servicio, setServicio] = useState(null)
  const [especialistas, setEspecialistas] = useState([])
  const [empleada, setEmpleada] = useState(null)      // null = cualquiera
  const [horario, setHorario] = useState(null)        // { fecha, hora }
  const [datos, setDatos] = useState({ nombre: '', apellido: '', email: '', acepta_aviso: false })

  const correr = async fn => {
    setCargando(true); setError('')
    try { await fn() } catch (e) { setError(e.message) } finally { setCargando(false) }
  }

  const buscarPaciente = e => {
    e.preventDefault()
    correr(async () => { setInfo(await getServicios(telefono)); setPaso(1) })
  }

  const elegirServicio = s => correr(async () => {
    setServicio(s); setHorario(null)
    const esp = await getEspecialistas(s.id)
    setEspecialistas(esp)
    setEmpleada(esp.length === 1 ? esp[0] : null)
    setPaso(esp.length > 1 ? 2 : 3)
  })

  const confirmar = e => {
    e.preventDefault()
    correr(async () => {
      const { token, pago_url } = await reservar({
        telefono, ...datos, tratamiento_id: servicio.id, empleada_id: empleada?.id, ...horario })
      if (pago_url) window.location.href = pago_url
      else navigate(`/mi-cita/${token}?nueva=1`)
    })
  }

  const categorias = useMemo(() => {
    if (!info) return []
    const q = busqueda.trim().toLowerCase()
    const grupos = {}
    for (const s of info.servicios.filter(s => !q || s.nombre.toLowerCase().includes(q)))
      (grupos[s.categoria?.replace(/^\d+\s*·\s*/, '') || 'Otros'] ||= []).push(s)
    return Object.entries(grupos)
  }, [info, busqueda])

  const atras = () => setPaso(p => (p === 3 && especialistas.length <= 1 ? 1 : p - 1))

  return (
    <div className="min-h-screen bg-gioval-crema">
      <Navbar solid />
      <main className="pt-44 pb-20 px-6 lg:px-12 max-w-2xl mx-auto">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gioval-malva mb-4">Agenda en línea</p>
        <h1 className="font-display text-gioval-carbon leading-tight mb-8" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 400 }}>
          Agenda tu cita
        </h1>

        {/* Progreso */}
        <ol className="flex gap-1 mb-10" aria-label="Pasos">
          {PASOS.map((p, i) => (
            <li key={p} className="flex-1">
              <div className={`h-0.5 ${i <= paso ? 'bg-gioval-malva' : 'bg-gioval-beige'}`} />
              <span className={`hidden sm:block font-body text-[10px] tracking-widest uppercase mt-2 ${i === paso ? 'text-gioval-malva' : 'text-gioval-greige'}`}>{p}</span>
            </li>
          ))}
        </ol>

        {paso > 0 && (
          <button onClick={atras} className="flex items-center gap-1 font-body text-xs tracking-widest uppercase text-gioval-greige hover:text-gioval-malva mb-6 cursor-pointer">
            <ArrowLeft size={14} /> Atrás
          </button>
        )}

        {/* 0 · Teléfono */}
        {paso === 0 && (
          <form onSubmit={buscarPaciente} className="space-y-8">
            <div>
              <label className={labelCls} htmlFor="tel">Tu número de WhatsApp</label>
              <input id="tel" required type="tel" inputMode="numeric" autoComplete="tel" value={telefono}
                onChange={e => setTelefono(e.target.value)} placeholder="452 123 4567" className={inputCls} />
              <p className="font-body text-xs text-gioval-greige mt-2">A este número te confirmaremos tu cita.</p>
            </div>
            <button disabled={cargando} className={btnPrimario}>{cargando ? 'Buscando…' : 'Continuar'}</button>
          </form>
        )}

        {/* 1 · Servicio */}
        {paso === 1 && info && (
          <div>
            {!info.continuacion && (
              <div className="border-l-2 border-gioval-malva bg-white/60 p-5 mb-8">
                <p className="font-display text-gioval-carbon text-lg mb-1">¡Te damos la bienvenida a Gioval!</p>
                <p className="font-body text-sm text-gioval-carbon/80 leading-relaxed">
                  Tu primera visita es una <strong>valoración con la Dra. Giovanna</strong>: revisa tu caso y diseña tu plan
                  de tratamiento. Después podrás agendar tus sesiones directamente aquí.
                </p>
              </div>
            )}
            {info.continuacion && (
              <div className="relative mb-6">
                <Search size={16} className="absolute left-0 top-3 text-gioval-greige" />
                <input value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="Buscar tratamiento…"
                  className={`${inputCls} pl-6`} />
              </div>
            )}
            {categorias.length === 0 && (
              <p className="font-body text-sm text-gioval-greige">No hay servicios disponibles en línea por ahora. Escríbenos por WhatsApp.</p>
            )}
            {categorias.map(([cat, servicios]) => (
              <section key={cat} className="mb-8">
                <h2 className="font-body text-xs tracking-[0.25em] uppercase text-gioval-malva mb-3">{cat}</h2>
                <div className="divide-y divide-gioval-beige border-y border-gioval-beige">
                  {servicios.map(s => (
                    <button key={s.id} onClick={() => elegirServicio(s)} disabled={cargando}
                      className="w-full flex items-center justify-between gap-4 py-4 text-left hover:bg-white/60 px-2 transition-colors cursor-pointer">
                      <span>
                        <span className="font-body text-gioval-carbon block">{s.nombre}</span>
                        <span className="font-body text-xs text-gioval-greige flex items-center gap-1 mt-1"><Clock size={12} /> {s.duracion_min} min</span>
                      </span>
                      {s.precio && <span className="font-body text-sm text-gioval-malva whitespace-nowrap">{fmt(s.precio)}</span>}
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* 2 · Especialista */}
        {paso === 2 && (
          <div>
            <p className="font-body text-sm text-gioval-carbon mb-6">¿Con quién quieres tu <strong>{servicio.nombre}</strong>?</p>
            <div className="grid gap-3">
              {[{ id: null, nombre: 'Cualquiera disponible', sub: 'Más horarios para elegir' }, ...especialistas].map(e => (
                <button key={e.id ?? 'any'} onClick={() => { setEmpleada(e.id ? e : null); setHorario(null); setPaso(3) }}
                  className="text-left border border-gioval-beige hover:border-gioval-malva bg-white/50 px-5 py-4 transition-colors cursor-pointer">
                  <span className="font-body text-gioval-carbon block">{e.nombre}</span>
                  {e.sub && <span className="font-body text-xs text-gioval-greige">{e.sub}</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 3 · Fecha y hora */}
        {paso === 3 && (
          <div>
            <p className="font-body text-sm text-gioval-carbon mb-6">
              <strong>{servicio.nombre}</strong>{empleada ? ` con ${empleada.nombre}` : ''} · {servicio.duracion_min} min
            </p>
            <SelectorHorario tratamientoId={servicio.id} empleadaId={empleada?.id} value={horario} onChange={setHorario} />
            <button disabled={!horario?.hora} onClick={() => setPaso(4)} className={`${btnPrimario} mt-8 w-full`}>Continuar</button>
          </div>
        )}

        {/* 4 · Datos y confirmación */}
        {paso === 4 && (
          <form onSubmit={confirmar} className="space-y-6">
            <div className="bg-white/70 border border-gioval-beige p-5">
              <p className="font-display text-gioval-carbon text-xl mb-1">{servicio.nombre}</p>
              <p className="font-body text-sm text-gioval-carbon/80 first-letter:uppercase">{fechaLarga(horario.fecha)} · {hora12(horario.hora)}</p>
              {empleada && <p className="font-body text-sm text-gioval-carbon/80">Con {empleada.nombre}</p>}
              <div className="font-body text-sm mt-4 pt-4 border-t border-gioval-beige space-y-1">
                {servicio.precio && <p className="flex justify-between"><span>Costo</span><span>{fmt(servicio.precio)}</span></p>}
                <p className="flex justify-between text-gioval-malva font-medium"><span>Anticipo para apartar</span><span>{fmt(info.anticipo)}</span></p>
                <p className="font-body text-xs text-gioval-greige">El anticipo se descuenta del total el día de tu cita.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls} htmlFor="nom">Nombre *</label>
                <input id="nom" required autoComplete="given-name" value={datos.nombre} onChange={e => setDatos(d => ({ ...d, nombre: e.target.value }))} className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="ape">Apellidos *</label>
                <input id="ape" required autoComplete="family-name" value={datos.apellido} onChange={e => setDatos(d => ({ ...d, apellido: e.target.value }))} className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls} htmlFor="mail">Correo (opcional)</label>
              <input id="mail" type="email" autoComplete="email" value={datos.email} onChange={e => setDatos(d => ({ ...d, email: e.target.value }))} className={inputCls} />
            </div>

            <div className="font-body text-xs text-gioval-carbon/70 leading-relaxed bg-gioval-beige/30 p-4">
              <p className="font-medium text-gioval-carbon mb-1">Políticas</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Tu cita queda sujeta a confirmación de recepción por WhatsApp.</li>
                <li>Puedes reagendar sin costo hasta 24 h antes desde el enlace que recibirás.</li>
                <li>Si cancelas con menos de 24 h de anticipación o no asistes, el anticipo no es reembolsable.</li>
              </ul>
            </div>

            <label className="flex gap-3 items-start font-body text-sm text-gioval-carbon cursor-pointer">
              <input type="checkbox" required checked={datos.acepta_aviso} onChange={e => setDatos(d => ({ ...d, acepta_aviso: e.target.checked }))} className="mt-1 accent-gioval-malva" />
              <span>Acepto las políticas y el <Link to="/aviso-de-privacidad" target="_blank" className="text-gioval-malva underline">aviso de privacidad</Link>.</span>
            </label>

            <button disabled={cargando} className={`${btnPrimario} w-full`}>{cargando ? 'Reservando…' : 'Reservar cita'}</button>
          </form>
        )}

        {error && <p role="alert" className="font-body text-sm text-red-700 bg-red-50 border border-red-200 p-3 mt-6">{error}</p>}
      </main>
      <Footer />
    </div>
  )
}
