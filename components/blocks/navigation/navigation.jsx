import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

const Navigation = () => {

  const router = useRouter()
  const [menuState, setMenuState] = useState('closed');

  const toggleMenu = () => {
    setMenuState(menuState === 'closed' ? 'open' : 'closed');
  };

  const renderColor = () => {
    const colorSets = {
      ['/']: 'white',	
      ['/schmerztherapie']: 'blue',	
      ['/aktivitaeten']: 'blue',
      ['/ueber-mich']: 'blue',
      ['/kontakt']: 'blue',
      ['/datenschutz']: 'blue',
      ['/impressum']: 'white'
    };
    const currentPath = router.pathname;
    const color =  colorSets[currentPath];
    return color;
  }

  return (
    <Fragment>
      <nav className={`navigation navigation--mobile navigation--${ renderColor() } ${menuState === 'open' ? 'navigation--open' : ''}`}>
        <div className='navigation__bar'>
          <img className="navigation__logo" src="/logos/logo-praxis-dietschiberg.svg" onClick={() => router.push('/')} />
          <button className={`navigation__hamburger hamburger hamburger--squeeze ${menuState === 'open' ? 'hamburger--active' : null} `} type="button" onClick={ toggleMenu }>
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <div className="navigation__blocker"></div>
        <div className='navigation__inner'>
          <div className="navigation__link-wrapper">
            <Link className="navigation__link" onClick={ router.pathname === '/schmerztherapie' && toggleMenu } href="/schmerztherapie" >Schmerztherapie</Link>
            <Link className="navigation__link" onClick={ router.pathname === '/aktivitaeten' && toggleMenu } href="/aktivitaeten" >Aktivitäten</Link>
            <Link className="navigation__link" onClick={ router.pathname === '/ueber-mich' && toggleMenu } href="/ueber-mich" >Über mich</Link>
            <Link className="navigation__link" onClick={ router.pathname === '/kontakt' && toggleMenu } href="/kontakt" >Kontakt</Link>
          </div>
          <address className="navigation__address">
            <img className="navigation__address-icon" src="/icon/icon-location.svg" />
            <p className="navigation__address-item">Praxis am Dietschiberg</p>
            <p className="navigation__address-item">Lützelmattstrasse 3</p>
            <p className="navigation__address-item">6006 Luzern</p>
          </address>
          <div className="navigation__contact">
						<img className="navigation__contact-icon" src="/icon/icon-phone.svg" />
						<p className="navigation__contact-item">Kontakt</p>
						<p className="navigation__contact-item">Tel: <a href="tel:0415521617">041 552 16 17</a></p>
						<p className="navigation__contact-item">Email: <a href="mailto:praxis.dietschiberg@hin.ch">praxis.dietschiberg@hin.ch</a></p>
          </div>
          <div className="navigation__times">
            <img className="navigation__times-icon" src="/icon/icon-time.svg" />
            <p className="navigation__times-item">Öffnungszeiten</p>
            <p className="navigation__times-item">Montag –  Freitag</p>
            <p className="navigation__times-item">08:00 – 12.00, 13:00 – 17:00 Uhr</p>
          </div>
        </div>
      </nav>   
      <nav className={`navigation navigation--desktop navigation--${ renderColor() }` }>
        <div className="navigation__inner">
          <span className="navigation__size-limiter">
            <img className="navigation__logo" src="/logos/logo-praxis-dietschiberg.svg" onClick={() => router.push('/')} />
            <Link className={`navigation__link ${ router.pathname === '/schmerztherapie' || router.pathname === '/' ? 'navigation__link--active' : ''} `} href="/schmerztherapie">Schmerztherapie</Link>
            <Link className={`navigation__link ${ router.pathname === '/aktivitaeten' || router.pathname === '/' ? 'navigation__link--active' : ''} `} href="/aktivitaeten">Aktivitäten</Link>
            <Link className={`navigation__link ${ router.pathname === '/ueber-mich' || router.pathname === '/' ? 'navigation__link--active' : ''} `} href="/ueber-mich">Über mich</Link>
            <Link className={`navigation__link ${ router.pathname === '/kontakt' || router.pathname === '/' ? 'navigation__link--active' : ''} `} href="/kontakt">Kontakt</Link>
          </span>
        </div>
        <div className="navigation__blocker"></div>
      </nav>
    </Fragment>	
  )
};

export {
  Navigation
};