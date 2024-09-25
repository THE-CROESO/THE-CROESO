import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Cursor from './Components/cursor/Cursor.jsx'

function App() {
  
  return (
   <>
    <Cursor/>
    <Navbar />
    <Outlet />
    <Footer />
   </>
  )
}

export default App
