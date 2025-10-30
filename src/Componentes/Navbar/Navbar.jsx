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
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector("nav").offsetHeight;

    if (!section) return;

    // Primer y último componente sin centrado
    if (sectionId === "hero" || sectionId === "contact") {
      const topPos = section.offsetTop - navbarHeight;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    } else {
      // Centrar las secciones en la pantalla
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const windowCenter = window.innerHeight / 2;
      const sectionHeight = section.offsetHeight / 2;

      const scrollToPosition = sectionTop - (windowCenter - sectionHeight) - navbarHeight;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };



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