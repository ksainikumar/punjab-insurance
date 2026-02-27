import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './header.jsx'
import Cursor from './Cursor.jsx'
import Bg from './Bg.jsx'
import RDSP from './RDSP.jsx'
import Findpath from './Findpath.jsx'
import Processwork from './Processwork.jsx'
import Support from './Support.jsx'
import Questions from './Questions.jsx'
import Steps from './Steps.jsx'
import Links from './Links.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Cursor />
    <Bg />
    <RDSP />
    <Findpath />
    <Processwork />
    <Support />
    <Questions />
    <Steps />
    <Links />
  </StrictMode>,
)
