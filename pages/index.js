import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';

const Start = () => {
  return (
    <>
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
    </>
  )
}

export default Start;