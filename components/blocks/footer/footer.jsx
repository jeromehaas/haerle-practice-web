// import { Link } from 'components/partials/link/link';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation navigation">
        <Link href="/schmerztherapie"><a className="navigation__link">Schmerztherapie</a></Link>
        <Link href="/aktivitaeten"><a className="navigation__link">Aktivitäten</a></Link>
        <Link href="/ueber-mich"><a className="navigation__link">Über mich</a></Link>
        <Link href="/kontakt"><a className="navigation__link">Kontakt</a></Link>
        <Link href="/kontakt#kontakt-formular"><a className="navigation__link">Anfrage senden</a></Link>
      </div>
      <div className="footer__privacy privacy">
        <Link href="/datenschutz"><a className="privacy__link">Datenschutz</a></Link>
        <figure className="privacy__separator">|</figure>
        <Link href="/impressum"><a className="privacy__link">Impressum</a></Link>
      </div>
      <img className="footer__logohead" src="/illustrations/illustration-logohead.svg" alt="Logo Head" />
      <div className="footer__pulse"></div>
    </footer>
  )
};

export {
  Footer
};