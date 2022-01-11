const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <a className="footer__navigation-link" href="#">Schmerztherapie</a>
        <a className="footer__navigation-link" href="#">Aktivitäten</a>
        <a className="footer__navigation-link" href="#">Über mich</a>
        <a className="footer__navigation-link" href="#">Kontakt</a>
        <a className="footer__navigation-link" href="#">Anfrage senden</a>
      </div>
      <div className="footer__privacy">
        <a href="#" className="footer__privacy-link">Datenschutz</a>
        <figure className="footer__privacy-separator">|</figure>
        <a href="#" className="footer__privacy-link">Impressum</a>
      </div>
      <img className="footer__logohead" src="/illustrations/illustration-logohead.svg" alt="Logo Head" />
    </footer>
  )
};

export {
  Footer
};