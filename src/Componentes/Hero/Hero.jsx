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
      </div>

      <div className="image-container">
        <div className="circle-bg"></div>
        <img src={foto} alt="foto" className="foto" />
      </div>
    </div>
  )
}

export default Hero