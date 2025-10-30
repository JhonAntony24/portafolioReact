import "./Navbar.css"
import logo_light from "../../assets/logo_light.png"
import logo_dark from "../../assets/logo_dark.png"
import { useContext, useState } from "react"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import { ThemeContext } from "../../ThemeContext/ThemeContext"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const {theme} =useContext(ThemeContext)

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({behavior: "smooth", block: "start" })
    }
    setMenuOpen(false)
  }

  return (
    <nav>
        <img src={theme === "light"? logo_light : logo_dark} alt="logo" className="logo" />
        <ul className={menuOpen ? "active" : ""}>
            <li><a href="#" onClick={(e)=> handleScroll(e, "hero")}>Home</a></li>
            <li><a href="#about" onClick={(e)=>handleScroll(e, "about")}>Sobre mí</a></li>
            <li><a href="#skills" onClick={(e)=>handleScroll(e, "skills")}>Habilidades</a></li>
            <li><a href="#portfolio" onClick={(e)=>handleScroll(e, "portfolio")}>Portafolio</a></li>
            <li><a href="#contact" onClick={(e)=>handleScroll(e, "contact")}>Contactos</a></li>
            <i className="fa-solid fa-xmark" onClick={()=>setMenuOpen(false)}></i>
        </ul>
        <ThemeToggle/>
            <i className="fa-solid fa-bars" onClick={()=> setMenuOpen(true)}></i>
    </nav>
  )
}

export default Navbar