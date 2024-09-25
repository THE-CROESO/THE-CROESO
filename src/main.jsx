import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Explore from './Components/Pages/Explore/Explore.jsx'
import TheCroeso from './Components/Pages/TheCroeso/TheCroeso.jsx'
import Members from './Components/Pages/Members/Members.jsx'
import LetsMeet from './Components/Pages/LetsMeet/LetsMeet.jsx'
import Credits from './Components/Pages/Credits/Credits.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<App/>} >
          <Route path='' element={<Explore/>} />
          <Route path='/TheCroeso' element={<TheCroeso/>} />
          <Route path='/Members' element={<Members/>} />
          <Route path='/LetsMeet' element={<LetsMeet/>} />
          <Route path='/Credits' element={<Credits/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
