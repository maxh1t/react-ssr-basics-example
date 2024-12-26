import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { App } from './components/App'

import './index.css'
import { BrowserRouter } from 'react-router'

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
