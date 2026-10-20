import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Tratamientos from './pages/Tratamientos.jsx'
import AvisoPrivacidad from './pages/AvisoPrivacidad.jsx'
import Agendar from './pages/Agendar.jsx'
import MiCita from './pages/MiCita.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/mi-cita/:token" element={<MiCita />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
