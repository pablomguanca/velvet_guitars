import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './sass/main.scss'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)