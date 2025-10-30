import "./Skills.css"

export const Skills = () => {
  return (
    <div className="skills" id="skills">
        <h1>Mis Habilidades</h1>
        <div className="skills-base">
            <div className="skills-box">
                <i className="fas fa-laptop-code"></i>
                <h3>Desarrollo Web</h3>
                <p>
                    Me especializo en desarrollo web para crear sitios modernos y funcionales utilizando tecnologias como HTML, CSS, JavaScript y ReactJS. Siempre me enfoco en ofrecer soluciones optimizados y escalables.
                </p>
            </div>
            <div className="skills-box">
                <i className="fas fa-drafting-compass"></i>
                <h3>Diseño UI/UX</h3>
                <p>
                    Mi enfoque de disñeo de interfaz de usuario (UI) y experiencia de usuario (UX) busca crear experiencia visualmente atractivas y fáciles de usar para mejorar la interacción del usuario con las aplicaciones.
                </p>
            </div>
            <div className="skills-box">
                <i className="fab fa-react"></i>
                <h3>Aplicaciones Web</h3>
                <p>
                    Desarrollo aplicaciones web personalizadas cn ReactJS, enfoándome en crear  experiencias de usuarios dinámicas, rápidas y responsivas.
                </p>
            </div>
        </div>
    </div>
  )
}
