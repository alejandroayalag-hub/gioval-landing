const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3008'

export async function enviarSolicitud(data) {
  const res = await fetch(`${API_BASE}/api/public/solicitudes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.error || 'Error al enviar la solicitud')
  return json
}
