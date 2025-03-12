import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './component/GlobalStyles/index.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles>
      <App />
      <ToastContainer position="top-center" theme="colored" />
    </GlobalStyles>
  </StrictMode>,
)
