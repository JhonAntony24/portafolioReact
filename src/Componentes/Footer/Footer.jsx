import "./Footer.css"

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
        <hr />
        <div className="social-icons">
            <a href="https://www.facebook.com/share/1D2NPv2Kpv/" target="blank" rel="noopene nareferrer">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/jhonantony98?igsh=MWx4cWt3ZGN1dmlzeA==" target="blank" rel="noopene nareferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/51931921906" target="blank" rel="noopene nareferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.tiktok.com/@pitonantony?_t=ZS-90yBDNHZ3k0&_r=1" target="blank" rel="noopene nareferrer">
                <i className="fab fa-tiktok"></i>
            </a>
        </div>

        <p>Copyright {currentYear} ©  JhonAntony.dev — Todos los derechos reservados.</p>
    </footer>
  )
}
