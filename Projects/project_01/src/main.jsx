import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navigation from './components/Navigation.jsx'
import './App.css'
import HeroSection from './components/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navigation />
    <HeroSection />
  </React.StrictMode>,
)
