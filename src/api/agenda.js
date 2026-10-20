// En producción la API se sirve en el mismo dominio (nginx → backend Elys)
const API = `${import.meta.env.VITE_API_URL ?? ''}/api/public/agenda`

async function req(path, opts = {}) {
  const res = await fetch(`${API}${path}`, {
    ...opts,
    headers: opts.body ? { 'Content-Type': 'application/json' } : undefined,
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.error || 'Ocurrió un error, intenta de nuevo')
  return json
}

const qs = params => new URLSearchParams(Object.entries(params).filter(([, v]) => v != null && v !== '')).toString()

export const getServicios     = telefono => req(`/servicios?${qs({ telefono })}`)
export const getEspecialistas = tratamiento_id => req(`/especialistas?${qs({ tratamiento_id })}`)
export const getDias          = (tratamiento_id, empleada_id, mes) => req(`/dias?${qs({ tratamiento_id, empleada_id, mes })}`)
export const getHorarios      = (tratamiento_id, empleada_id, fecha) => req(`/horarios?${qs({ tratamiento_id, empleada_id, fecha })}`)
export const reservar         = data => req('/reservar', { method: 'POST', body: JSON.stringify(data) })
export const getCita          = token => req(`/cita/${token}`)
export const reagendarCita    = (token, fecha, hora) => req(`/cita/${token}/reagendar`, { method: 'POST', body: JSON.stringify({ fecha, hora }) })
export const cancelarCita     = token => req(`/cita/${token}/cancelar`, { method: 'POST' })
