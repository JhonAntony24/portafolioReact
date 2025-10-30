import "./About.css"
import foto from "../../assets/foto.png"
import cv from "../../assets/cvjhon.pdf"

export const About = () => {
  return (
    <div className="about-datails" id="about">
        <div className="circle-bg"></div>
        <img src={foto} alt="Sobre mi" />
        <div className="about-infos">
            <h1>Sobre mi</h1>
            <p className="description">
                Soy desarrollador web especializado en JavaScript, ReactJS y Node.js. Me apasiona crear soluciones digitales innovadoras y funcionales, enfocadas en la experiencia del usuario y el rendimiento óptimo.
            </p>
            <div className="esperience-section">
                <div className="experience">
                    <i className="fas fa-plus"></i>
                    <span>2</span>
                    <p>Años de experiencia</p>
                </div>
                <div className="experience">
                    <i className="fas fa-plus"></i>
                    <span>20</span>
                    <p>Proyectos realizados</p>
                </div>
                <div className="experience">
                    <i className="fas fa-plus"></i>
                    <span>5</span>
                    <p>Trabajos profesionales</p>
                </div>
                {/* Botón de descarga */}
                <a href={cv} download="cvjhon.pdf" className="btn-download-cv">
                Descargar CV
                </a>
            </div>
        </div>
    </div>
  )
}
