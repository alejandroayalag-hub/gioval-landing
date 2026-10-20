import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getDias, getHorarios } from '../api/agenda'

const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const DIAS = ['D', 'L', 'M', 'M', 'J', 'V', 'S']
const MESES_ADELANTE = 2

const mesStr = (y, m) => `${y}-${String(m).padStart(2, '0')}`

export const fechaLarga = fecha =>
  new Date(`${fecha}T12:00:00`).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })

export const hora12 = hora => {
  const [h, m] = hora.split(':').map(Number)
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`
}

// Calendario mensual con días disponibles + botones de horario libre
export default function SelectorHorario({ tratamientoId, empleadaId, value, onChange }) {
  const hoy = new Date()
  const [offset, setOffset] = useState(0)
  const base = new Date(hoy.getFullYear(), hoy.getMonth() + offset, 1)
  const y = base.getFullYear(), m = base.getMonth() + 1
  const mes = mesStr(y, m)

  const [dias, setDias] = useState(null)
  const [horas, setHoras] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setDias(null)
    getDias(tratamientoId, empleadaId, mes).then(setDias).catch(e => { setDias([]); setError(e.message) })
  }, [tratamientoId, empleadaId, mes])

  useEffect(() => {
    if (!value?.fecha) return setHoras(null)
    setHoras(null)
    getHorarios(tratamientoId, empleadaId, value.fecha).then(setHoras).catch(e => { setHoras([]); setError(e.message) })
  }, [tratamientoId, empleadaId, value?.fecha])

  const primerDia = new Date(y, m - 1, 1).getDay()
  const totalDias = new Date(y, m, 0).getDate()
  const celdas = [...Array(primerDia).fill(null), ...Array.from({ length: totalDias }, (_, i) => i + 1)]

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setOffset(o => o - 1)} disabled={offset === 0} aria-label="Mes anterior"
          className="p-2 text-gioval-malva disabled:opacity-20 cursor-pointer disabled:cursor-default">
          <ChevronLeft size={20} />
        </button>
        <p className="font-display text-gioval-carbon text-xl">{MESES[m - 1]} {y}</p>
        <button onClick={() => setOffset(o => o + 1)} disabled={offset === MESES_ADELANTE} aria-label="Mes siguiente"
          className="p-2 text-gioval-malva disabled:opacity-20 cursor-pointer disabled:cursor-default">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-6">
        {DIAS.map((d, i) => <span key={i} className="font-body text-xs text-gioval-greige py-1">{d}</span>)}
        {celdas.map((d, i) => {
          if (!d) return <span key={i} />
          const fecha = `${mes}-${String(d).padStart(2, '0')}`
          const libre = dias?.includes(fecha)
          const sel = value?.fecha === fecha
          return (
            <button key={i} disabled={!libre} onClick={() => onChange({ fecha, hora: null })}
              className={`font-body text-sm aspect-square flex items-center justify-center transition-colors
                ${sel ? 'bg-gioval-malva text-white'
                  : libre ? 'text-gioval-carbon hover:bg-gioval-lavanda cursor-pointer border border-gioval-beige'
                  : 'text-gioval-greige/50 cursor-default'}`}>
              {d}
            </button>
          )
        })}
      </div>
      {dias === null && <p className="font-body text-xs text-gioval-greige text-center">Buscando días disponibles…</p>}
      {dias?.length === 0 && <p className="font-body text-sm text-gioval-greige text-center">Sin lugares este mes, revisa el siguiente.</p>}

      {value?.fecha && (
        <div>
          <p className="font-body text-xs tracking-widest uppercase text-gioval-greige mb-3">{fechaLarga(value.fecha)}</p>
          {horas === null
            ? <p className="font-body text-xs text-gioval-greige">Cargando horarios…</p>
            : horas.length === 0
              ? <p className="font-body text-sm text-gioval-greige">Ya no hay horarios este día.</p>
              : <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {horas.map(h => (
                    <button key={h} onClick={() => onChange({ fecha: value.fecha, hora: h })}
                      className={`font-body text-sm py-2 border transition-colors cursor-pointer
                        ${value.hora === h ? 'bg-gioval-malva text-white border-gioval-malva' : 'border-gioval-beige text-gioval-carbon hover:border-gioval-malva'}`}>
                      {hora12(h)}
                    </button>
                  ))}
                </div>}
        </div>
      )}
      {error && <p className="font-body text-xs text-red-600 mt-3">{error}</p>}
    </div>
  )
}
