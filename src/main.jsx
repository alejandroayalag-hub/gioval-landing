import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Tratamientos from './pages/Tratamientos.jsx'
import AvisoPrivacidad from './pages/AvisoPrivacidad.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
