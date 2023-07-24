import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__navigation navigation">
        <Link className="navigation__link" href="/schmerztherapie" >Schmerztherapie</Link>
        <Link className="navigation__link" href="/aktivitaeten">Aktivitäten</Link>
        <Link className="navigation__link" href="/ueber-mich">Über mich</Link>
        <Link className="navigation__link" href="/kontakt">Kontakt</Link>
        <Link className="navigation__link" href="/kontakt#kontakt-formular">Anfrage senden</Link>
      </div>
      <div className="footer__privacy privacy">
        <Link className="privacy__link" href="/datenschutz">Datenschutz</Link>
        <figure className="privacy__separator">|</figure>
        <Link className="privacy__link" href="/impressum">Impressum</Link>
      </div>
      <img className="footer__logohead" src="/illustrations/illustration-logohead.svg" alt="Logo Kopf" />
      <div className="footer__pulse"></div>
    </footer>
  );

};

export {
  Footer
};