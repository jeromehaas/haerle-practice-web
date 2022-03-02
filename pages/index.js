import { Page } from 'components/layouts/page/page'
import { Hero } from 'components/sections/hero/hero';
import { Quote } from 'components/sections/quote/quote';
import { Teaser } from 'components/sections/teaser/teaser';
import { CTA } from 'components/sections/cta/cta';
import { Article } from 'components/sections/article/article';
import { Cards } from 'components/sections/cards/cards';
import { Auth } from 'components/sections/auth/auth';

const Start = () => {
  return (
    <Page data={{ title: '' }}>
      <Auth />
      <Hero data={{ 
        titleText: 'Diagnostik und Therapie von Kiefer-, Gesichts- und Kopfschmerzen, Myoarthropathien des Kausystems, Schlafapnoe',
        titleColor: 'lightblue',
        imageSrc: '/images/01-daniela-haerle-besprechung-hauptbild.jpg',
        imageAlt: 'Besprechung mit Daniela Haerle'
      }} />
      <Article data={{
        anchorId: 'intro-text',
        title: 'Gelenkschmerzen, Ohrgeräusche, unklare Zahnschmerzen, Zähneknirschen',
        text: 'Jede sechste Person beklagt solche Symptome. Bleiben die Schmerzen über einen längeren Zeitraum bestehen, können sie sich verselbständigen und chronifizieren, das heisst zu einer eigenständigen Krankheit werden. Die damit verbundene psychische Belastung ist beeinträchtigend und kostet Kraft. Eine frühzeitige Abklärung bei einem spezialisierten Zahnarzt ist daher empfehlenswert.',
        imageSrc: '/images/02-daniela-haerle-instrumente.jpg',
        imageAlt: '#',
        linkText: 'Weitere Symptome',
        linkHref: '/schmerztherapie',
        linkIcon: 'arrow',
        reverse: false,
        hideImageOnMobile: true
      }} /> 
      <Cards data={{
        title: 'Die Schmerztherapie ',
        cards: [
					{
						imageSrc: '/images/04-daniela-haerle-besprechung-patientin-closeup.jpg',
            imageAlt: '#',
            title: 'Kieferprobleme, Schnarchen, Atemaussetzer im Schlaf, Kopfschmerzen',
            text: 'Leiden Sie unter harmlosem Schnarchen oder ist es schon gesundheitsschädigende Schlafapnoe? Sind die Kopfschmerzen möglicherweise mit Muskelverspannungen assoziiert? Dieser Thematik möchte ich mit Ihnen «auf den Zahn fühlen» und den Grund eruieren.',
            linkText: 'mehr zur Therapie',
            linkHref: '/schmerztherapie#therapie'
          },
					{
						imageSrc: '/images/03-daniela-haerle-besprechung-ipad.png',
						imageAlt: '#',
						title: 'Die Behandlung',
						text: 'Obwohl von einer Zahnärztin durchgeführt, hat die Behandlung eine medizinische Zielsetzung. In diesem Fall ist der Zahnarzt/die Zahnärztin einem Arzt/einer Ärztin gleichgestellt. Die Kosten für Untersuch, Therapie und Nachkontrollen werden von der Grundversicherung der Krankenkasse bezahlt. Entlastende Schienen, mit Ausnahme der Schlafapnoe-Schiene, werden nicht übernommen.',
						linkText: 'mehr zur Diagnose',
						linkHref: '/schmerztherapie#diagnose'
					}
        ]
      }} />
 
      <Quote data={{
        quoteText: 'Ich werde Ihren Privat-Zahnarzt nicht ersetzen – ich bin Ihre Ansprechperson für ein ganz spezielles Anliegen.',
        quoteColor: 'darkblue',
        authorText: 'Dr. med. dent. Daniela Haerle',
        imageSrc: '/images/05-daniela-haerle-portrait-brille.jpg',
        imageAlt: 'Besprechung mit Daniela Haerle',
        linkText: 'erfahren Sie mehr über mich',
        linkHref: '/ueber-mich'
      }} />

      <Teaser data={{
        className: 'teaser',
        title: 'Was Sie in der Sprechstunde erwartet',
        items: [{
          iconSrc: '/icon/icon-examination.svg',
          title: 'Vor dem Untersuch',
          text: 'Vor der ersten Konsultation füllen Sie einen Fragebogen aus, den Sie vor dem ersten Untersuch retournieren.'
        },
        {
          iconSrc: '/icon/icon-consultation.svg',
          title: 'Erste Konsultation',
          text: 'Es folgt der Untersuch der Kaumuskulatur, der Kiefergelenke und des Bisses.'
        },
        {
          iconSrc: '/icon/icon-therapy.svg',
          title: 'Schmerztherapie',
          text: 'Analyse von weiteren Symptomen (wie gestörter Schlaf, Schnarchen, Reflux, Stressoren) und mögliche Therapieansätze werden besprochen.'
        }]
      }}>
      </Teaser>
      <CTA data={{
        title: 'Termin vereinbaren',
        text: 'Sie finden mich in der Zahnmedizin Luzern AG, bei Dr. Jürg Eppenberger, Zahnarztpraxis für Rekonstruktive Zahnmedizin.',
        buttonText: 'Kontakt',
        buttonHref: '/kontakt'
      }} />
    </Page>
  )
}

export default Start;