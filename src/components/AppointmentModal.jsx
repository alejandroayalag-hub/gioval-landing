import { useState, useEffect } from 'react'
import { X, CheckCircle, AlertCircle } from 'lucide-react'
import { enviarSolicitud } from '../api/solicitudes'

const SERVICIOS = [
  '01 · Medicina Estética',
  '02 · Tratamientos Faciales',
  '03 · Tratamientos Capilares',
  '04 · Control de Peso',
  '05 · Aparatología',
  '06 · Tratamientos de Spa',
  '07 · Medicina Regenerativa',
  '08 · Medicina Funcional',
  'No lo sé todavía — quiero una valoración',
]

const INITIAL = { nombre: '', apellido: '', telefono: '', email: '', servicio: '', fecha_preferida: '', notas: '' }

export default function AppointmentModal({ open, onClose }) {
  const [form,    setForm]    = useState(INITIAL)
  const [loading, setLoading] = useState(false)
  const [status,  setStatus]  = useState(null)
  const [errMsg,  setErrMsg]  = useState('')

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    setErrMsg('')
    try {
      await enviarSolicitud(form)
      setStatus('success')
      setForm(INITIAL)
    } catch (err) {
      setStatus('error')
      setErrMsg(err.message)
    } finally {
      setLoading(false)
    }
  }

  const inputCls = 'w-full font-body text-sm text-gioval-carbon bg-transparent border-b border-gioval-beige focus:border-gioval-malva outline-none py-2 transition-colors duration-200 placeholder:text-gioval-greige'
  const labelCls = 'font-body text-xs tracking-widest uppercase text-gioval-greige block mb-1'

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="absolute inset-0 bg-gioval-carbon/70 backdrop-blur-sm" />
      <div className="relative z-10 bg-gioval-crema w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-start justify-between p-8 pb-6 border-b border-gioval-beige">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gioval-malva mb-1">Gioval Medicina Estética</p>
            <h2 className="font-display text-gioval-carbon" style={{ fontSize: '1.75rem', fontWeight: 400 }}>Agenda tu cita</h2>
          </div>
          <button onClick={onClose} className="p-1 text-gioval-greige hover:text-gioval-carbon transition-colors cursor-pointer mt-1" aria-label="Cerrar">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          {status === 'success' && (
            <div className="flex flex-col items-center text-center py-8">
              <CheckCircle size={48} className="text-gioval-malva mb-4" />
              <h3 className="font-display text-gioval-carbon text-xl mb-2">¡Solicitud enviada!</h3>
              <p className="font-body text-gioval-greige text-sm leading-relaxed mb-6">
                Recibimos tu solicitud. Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas para confirmar tu cita.
              </p>
              <button onClick={onClose} className="font-body text-xs tracking-widest uppercase px-8 py-3 bg-gioval-malva text-white hover:bg-gioval-carbon transition-colors cursor-pointer">
                Cerrar
              </button>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 mb-6">
              <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <p className="font-body text-red-700 text-xs">{errMsg || 'Ocurrió un error. Intenta de nuevo o escríbenos por WhatsApp.'}</p>
            </div>
          )}

          {status !== 'success' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Nombre *</label>
                  <input required value={form.nombre} onChange={set('nombre')} placeholder="Tu nombre" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Apellido *</label>
                  <input required value={form.apellido} onChange={set('apellido')} placeholder="Tu apellido" className={inputCls} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Teléfono *</label>
                <input required type="tel" value={form.telefono} onChange={set('telefono')} placeholder="55 1234 5678" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Email</label>
                <input type="email" value={form.email} onChange={set('email')} placeholder="tu@email.com" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Servicio de interés *</label>
                <select required value={form.servicio} onChange={set('servicio')} className={`${inputCls} cursor-pointer`}>
                  <option value="">Selecciona un servicio...</option>
                  {SERVICIOS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Fecha preferida</label>
                <input type="date" value={form.fecha_preferida} onChange={set('fecha_preferida')}
                  min={new Date().toISOString().split('T')[0]} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Mensaje o notas adicionales</label>
                <textarea value={form.notas} onChange={set('notas')} rows={3}
                  placeholder="Cuéntanos un poco más sobre lo que buscas..."
                  className={`${inputCls} resize-none`} />
              </div>
              <button type="submit" disabled={loading}
                className="w-full font-body text-xs tracking-[0.2em] uppercase py-4 bg-gioval-malva text-white hover:bg-gioval-carbon transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                {loading ? 'Enviando...' : 'Enviar solicitud'}
              </button>
              <p className="font-body text-gioval-greige text-xs text-center leading-relaxed">
                También puedes escribirnos directamente por{' '}
                <a href="https://wa.me/521XXXXXXXXXX?text=Hola%20Gioval%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                  target="_blank" rel="noopener noreferrer" className="text-gioval-malva underline">WhatsApp</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
