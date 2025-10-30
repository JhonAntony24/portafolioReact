import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Navbar from "./Componentes/Navbar/Navbar"
import { ThemeProvider } from "./ThemeContext/ThemeContext"
import { Footer } from "./Componentes/Footer/Footer"

function App() {

  return (
    <>
    <ThemeProvider>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    </Routes>
    <Footer/>
    </Router>
    </ThemeProvider>
    </>
  )
}

export default App
