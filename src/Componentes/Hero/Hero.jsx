import "./Hero.css"
import foto from "../../assets/foto.png"

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="text-container">
        <span>Hola soy,</span>
        <h1>Jhon Antony Aris Torres</h1>
        <p>Mi pasión por la programación web y mi conjunto de habilidades en JavaScript, CSS, Reactjs, MongoDB y Node.js me impulsan a crear soluciones web que sean atractivas, funcionales y efectivas.</p>
        <a href="https://wa.me/931921906" target="_blank" className="btn">Contáctame</a>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1D2NPv2Kpv/" target="_blank" rel="noopener noreferrer" className="hero-icon hero-facebook">
            <i className="fab fa-facebook"></i>
          </a>

          <a href="https://www.instagram.com/jhonantony98?igsh=MWx4cWt3ZGN1dmlzeA==" target="_blank" rel="noopener noreferrer" className="hero-icon hero-instagram">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="https://wa.me/51931921906" target="_blank" rel="noopener noreferrer" className="hero-icon hero-whatsapp">
            <i className="fab fa-whatsapp"></i>
          </a>

          <a href="https://www.tiktok.com/@pitonantony?_t=ZS-90yBDNHZ3k0&_r=1" target="_blank" rel="noopener noreferrer" className="hero-icon hero-tiktok">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>

      </div>

      <div className="image-container">
        <div className="circle-bg"></div>
        <img src={foto} alt="foto" className="foto" />
      </div>
      
    </div>
  )
}

export default Hero