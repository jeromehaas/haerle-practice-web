import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Button } from 'components/partials/button/button';

const CTA = () => {

  return (
    <Section data={{
      className: 'cta'
    }}>
      <div className="cta__wrapper">

        <Heading data={{
          className: 'cta__title',
          level: 'h4',
          color: 'lightblue'
        }}>Termin vereinbaren</Heading>
        <Paragraph data={{ 
          className: 'cta__text'
        }}>Sie finden mich in der Zahnmedizin Luzern AG, bei Dr. Jürg Eppenberger, Zahnarztpraxis für Rekonstruktive Zahnmedizin.</Paragraph>
        <Button data={{
          className: "cta__button"
        }}>Kontakt</Button>
      </div>
    </Section>
  )
};

export {
  CTA
};