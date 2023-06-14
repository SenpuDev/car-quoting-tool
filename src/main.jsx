import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuotingProvider } from './context/quoting'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuotingProvider>
      <App />
    </QuotingProvider>
  </React.StrictMode>
)
