import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';
import { Image } from 'components/partials/image/image';
import { Button } from 'components/partials/button/button';
import { TextInput } from 'components/partials/text-input/text-input';
import { Video } from 'components/partials/video/video';
import { PageNavigation } from 'components/partials/page-navigation/page-navigation';
import { Footer } from 'components/blocks/footer/footer';
import { Navigation } from 'components/blocks/navigation/navigation';
import { Page } from 'components/layouts/page/page'

const Start = () => {
  return (
    <Page>
      <Heading data={{ level: 'h1', color: 'lightblue' }}>
        Diagnostik und Therapie von Kiefer-, Gesichts- und Kopfschmerzen, Myoarthropathien des Kausystems, Schlafapnoe
      </Heading>
      <Heading data={{ level: 'h2', color: 'darkblue' }}>
        Ursachen für Verspannung und Migräne
      </Heading>
      <Heading data={{ level: 'h3', color: 'lightblue' }}>
        Diagnose lorem ipsum dolor sit anet serum.
      </Heading>
      <Heading data={{ level: 'h4', color: 'lightblue' }}>
        Termin vereinbaren
      </Heading>
      <Heading data={{ level: 'h5', color: 'darkblue' }}>
        Vor der Konsultation
      </Heading>
      <Paragraph data={{ color: 'lightblue' }}>
        Pressen und Knirschen können zu einer Überlastung der Zähne und Kaumuskulatur führen. Oft äussert sich dies mit einem Verspanntheitsgefühl in der Muskulatur. Bei einigen Patienten kann das Pressen und Knirschen der auslösende Faktor für Schulter- und Nackenverspannungen sowie für Migräne sein. 
      </Paragraph>
      <Link data={{ href: '#', icon: 'arrow' }}>
        To the source
      </Link>
      <Button data={{
        className: 'button',
      }}>Button</Button>
      <Video></Video>
      <PageNavigation data={{
        title: 'Themen dieser Seite',
        links: [
          {
            text: 'Symptome',
            href: '#'
          },
          {
            text: 'Diagnose',
            href: '#'
          },
          {
            text: 'Therapie',
            href: '#'
          },
          {
            text: 'Häufig gestellte Fragen',
            href: '#'
          },
        ]
      }} />
      <TextInput data={{
        label: 'Vorname',
        isRequired: true,
        placeholder: 'Ihr Nachname',
        hasError: false,
        errorText: 'Bitte geben Sie ihren Vornamen ein.',
        onChange: () => { console.log('text input changed!')}
      }} />
      <Image data={{
        src: '/images/01-daniela-haerle-besprechung-hauptbild.jpg',
        width: 1600,
        height: 900,
        className: "image",
        alt: 'Image',
      }} />
    </Page>
  )
}

export default Start;