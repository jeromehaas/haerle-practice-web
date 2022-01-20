import { Link } from 'components/partials/link/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation navigation">
        <Link data={{ className: 'navigation__link', href: '/schmerztherapie' }}>Schmerztherapie</Link>
        <Link data={{ className: 'navigation__link', href: '/aktivitaeten' }}>Aktivitäten</Link>
        <Link data={{ className: 'navigation__link', href: '/ueber-mich' }}>Über mich</Link>
        <Link data={{ className: 'navigation__link', href: '/kontakt' }}>Kontakt</Link>
        <Link data={{ className: 'navigation__link', href: '/kontakt' }}>Anfrage senden</Link>
      </div>
      <div className="footer__privacy privacy">
        <Link data={{ className: 'privacy__link', href: '/datenschutz' }} href="/datenschutz" className="footer__privacy-link">Datenschutz</Link>
        <figure className="privacy__separator">|</figure>
        <Link data={{ className: 'privacy__link', href: '/impressum' }} href="/impressum" className="footer__privacy-link">Impressum</Link>
      </div>
      <img className="footer__logohead" src="/illustrations/illustration-logohead.svg" alt="Logo Head" />
    </footer>
  )
};

export {
  Footer
};