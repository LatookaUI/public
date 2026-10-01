import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/app.css'
import './styles/global.css'

const ghPagesRoute = sessionStorage.getItem('gh-pages-route')
if (ghPagesRoute) {
  sessionStorage.removeItem('gh-pages-route')
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  window.history.replaceState(null, '', `${basePath}${ghPagesRoute}`)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
