import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Staging-only safeguard: inject <meta name="robots" content="noindex,nofollow">
// so the preview build is never indexed, even if served somewhere without the
// netlify.toml X-Robots-Tag header. No-op in production (VITE_STAGING unset).
if (import.meta.env.VITE_STAGING === 'true') {
  const meta = document.createElement('meta')
  meta.name = 'robots'
  meta.content = 'noindex, nofollow'
  document.head.appendChild(meta)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
