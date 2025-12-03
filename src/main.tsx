import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme/ThemeProvider'
import Index from './Index'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='light' storageKey="vite-ui-theme">
    <StrictMode>
        <BrowserRouter>
            <Index />
        </BrowserRouter>
  </StrictMode>
  </ThemeProvider>
)
