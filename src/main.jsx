import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import "./app.css";  // must match the file name

import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
)
