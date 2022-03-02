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
				image: {
					src: '/images/01-daniela-haerle-besprechung-hauptbild.jpg',
					alt: 'Besprechung mit Daniela Haerle'
				}
      }} />
      <Article data={{
        anchorId: 'intro-text',
        title: 'Gelenkschmerzen, Ohrgeräusche, unklare Zahnschmerzen, Zähneknirschen',
        text: 'Jede sechste Person beklagt solche Symptome. Bleiben die Schmerzen über einen längeren Zeitraum bestehen, können sie sich verselbständigen und chronifizieren, das heisst zu einer eigenständigen Krankheit werden. Die damit verbundene psychische Belastung ist beeinträchtigend und kostet Kraft. Eine frühzeitige Abklärung bei einem spezialisierten Zahnarzt ist daher empfehlenswert.',
				image: {
					src: '/images/02-daniela-haerle-instrumente.jpg',
					alt: 'Instrumente',
				},
				link: {
					text: 'Weitere Symptome',
					href: '/schmerztherapie',
					icon: 'arrow',
				},
        reverse: false,
        hideImageOnMobile: true
      }} /> 
      <Cards data={{
        title: 'Die Schmerztherapie ',
        cards: [
					{
            title: 'Kieferprobleme, Schnarchen, Atemaussetzer im Schlaf, Kopfschmerzen',
            text: 'Leiden Sie unter harmlosem Schnarchen oder ist es schon gesundheitsschädigende Schlafapnoe? Sind die Kopfschmerzen möglicherweise mit Muskelverspannungen assoziiert? Dieser Thematik möchte ich mit Ihnen «auf den Zahn fühlen» und den Grund eruieren.',
						image: {
							src: '/images/04-daniela-haerle-besprechung-patientin-closeup.jpg',
							alt: 'Besprechung mit Patientin',
						},
						link: {
							text: 'mehr zur Therapie',
							href: '/schmerztherapie#therapie'
						}
          },
					{
						title: 'Die Behandlung',
						text: 'Obwohl von einer Zahnärztin durchgeführt, hat die Behandlung eine medizinische Zielsetzung. In diesem Fall ist der Zahnarzt/die Zahnärztin einem Arzt/einer Ärztin gleichgestellt. Die Kosten für Untersuch, Therapie und Nachkontrollen werden von der Grundversicherung der Krankenkasse bezahlt. Entlastende Schienen, mit Ausnahme der Schlafapnoe-Schiene, werden nicht übernommen.',
						image: {
							src: '/images/03-daniela-haerle-besprechung-ipad.png',
							alt: 'Besprechung mit iPad',
						},
						link: {
							text: 'mehr zur Diagnose',
							href: '/schmerztherapie#diagnose'
						}
					}
        ]
      }} />
 
      <Quote data={{
				quote: {
					text: 'Ich werde Ihren Privat-Zahnarzt nicht ersetzen – ich bin Ihre Ansprechperson für ein ganz spezielles Anliegen.',
					color: 'darkblue',
					author: 'Dr. med. dent. Daniela Haerle',
				},
				image: {
					src: '/images/05-daniela-haerle-portrait-brille.jpg',
					alt: 'Dr. med. dent. Daniela Haerle',
				},
				link: {
					text: 'erfahren Sie mehr über mich',
					href: '/ueber-mich'
				}
      }} />

      <Teaser data={{
        className: 'teaser',
        title: 'Was Sie in der Sprechstunde erwartet',
        items: [{
          icon:{
						src: '/icon/icon-examination.svg',
						alt: 'Notizen'
					},
          title: 'Vor dem Untersuch',
          text: 'Vor der ersten Konsultation füllen Sie einen Fragebogen aus, den Sie vor dem ersten Untersuch retournieren.'
        },
        {
					icon: {
						src: '/icon/icon-consultation.svg',
						alt: 'Austausch'
					},
          title: 'Erste Konsultation',
          text: 'Es folgt der Untersuch der Kaumuskulatur, der Kiefergelenke und des Bisses.'
        },
        {
					icon: {
						src: '/icon/icon-therapy.svg',
						alt: 'Therapie'
					},
          title: 'Schmerztherapie',
          text: 'Analyse von weiteren Symptomen (wie gestörter Schlaf, Schnarchen, Reflux, Stressoren) und mögliche Therapieansätze werden besprochen.'
        }]
      }}>
      </Teaser>
      <CTA data={{
        title: 'Termin vereinbaren',
        text: 'Sie finden mich in der Zahnmedizin Luzern AG, bei Dr. Jürg Eppenberger, Zahnarztpraxis für Rekonstruktive Zahnmedizin.',
				button: {
					text: 'Kontakt',
					href: '/kontakt'
				}
      }} />
    </Page>
  )
}

export default Start;