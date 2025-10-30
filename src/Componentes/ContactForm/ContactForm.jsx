import "./ContactForm.css"

export const ContacForm = () => {
  return (
    <div className="contact">
      <h1>Contactos</h1>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-content">
            <i className="fas fa-usercircle icon"></i>
            <h2>INFORMACIÓN DE CONTACTO</h2>
            <p>
              <i className="fas fa-envelope"></i>
              antonyaristorres@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +51 931921906
            </p>
          </div>
        </div>

        <div className="contact-form" id="contact">
          <h2>Envia tu mensaje</h2>
          <form action="https://formspree.io/f/xanljggw" method="POST">
            <input type="text" name="name" placeholder="Nombres" required />
            <input type="email" name="email" placeholder="Correo Electronico" required />
            <textarea name="message" placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar Mensajes</button>
          </form>
        </div>
      </div>
    </div>
  )
}
