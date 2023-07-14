import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { HomeProvider } from './contexts/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HomeProvider>

      <App />
    </HomeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
