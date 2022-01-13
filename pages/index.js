import { Page } from 'components/layouts/page/page'
import { Hero } from 'components/sections/hero/hero';
import { Quote } from 'components/sections/quote/quote';

const Start = () => {
  return (
    <Page>
      <Hero data={{ 
        titleText: 'Diagnostik und Therapie von Kiefer-, Gesichts- und Kopfschmerzen, Myoarthropathien des Kausystems, Schlafapnoe',
        titleColor: 'lightblue',
        imageSrc: '/images/01-daniela-haerle-besprechung-hauptbild.jpg',
        imageAlt: 'Besprechung mit Daniela Haerle'
      }} />
      <Quote data={{
        quoteText: 'Ich werde Ihren Privat-Zahnarzt nicht ersetzen – ich bin Ihre Ansprechperson für ein ganz spezielles Anliegen.',
        quoteColor: 'lightblue',
        authorText: 'Dr. med. dent. Daniela Haerle',
        imageSrc: '/images/05-daniela-haerle-portrait-brille.jpg',
        imageAlt: 'Besprechung mit Daniela Haerle'
      }} />
    </Page>
  )
}

export default Start;