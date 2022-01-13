import { Page } from 'components/layouts/page/page'
import { Hero } from 'components/sections/hero/hero';
import { Quote } from 'components/sections/quote/quote';
import { Teaser } from 'components/sections/teaser/teaser';

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

      <Teaser data={{
        className: 'teaser',
        items: [{
          iconSrc: "/icons/icon-examination.svg",
          title: 'Vor dem Untersuch',
          text: 'Vor der ersten Konsultation füllen Sie einen Fragebogen aus, den Sie vor dem ersten Untersuch retournieren.'
        },
        {
          iconSrc: "/icons/icon-consultation.svg",
          title: 'Erste Konsultation',
          text: 'Es folgt der Untersuch der Kaumuskulatur, der Kiefergelenke und des Bisses.'
        },
        {
          iconSrc: "/icons/icon-therapy.svg",
          title: 'Schmerztherapie',
          text: 'Analyse von weiteren Symptomen (wie gestörter Schlaf, Schnarchen, Reflux, Stressoren) und mögliche Therapieansätze werden besprochen.'
        }]
      }}>
      </Teaser>
    </Page>
  )
}

export default Start;