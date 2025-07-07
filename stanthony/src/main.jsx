import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BritishSchoolHero from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BritishSchoolHero />
    <App />
    <Footer />
  </StrictMode>,
)
