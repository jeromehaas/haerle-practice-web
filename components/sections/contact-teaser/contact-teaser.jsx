import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';

const ContactTeaser = () => {

  return (
    <Section data={{ className: 'contact-teaser'}}>
      <div className="contact-teaser__text-wrapper">
        <Heading data={{
          className: 'contact-teaser__title',
          color: 'lightblue'
        }}>Ich freue mich, von Ihnen zu hören.</Heading>
        <Paragraph data={{
          className: 'contact-teaser__text'
        }}>Anfragen und Termine werden durch die Praxis zahnmedizin Luzern entgegengenommen und organisiert.</Paragraph>
      </div>
			
      <div className="contact-teaser__contact-wrapper">
        <address className="contact-teaser__address">
          <img src="/icons/icon-location.svg" />
          <p>zahnmedizin luzern</p>
          <p>Dr. med. dent. Jürg Eppenberger</p>
          <p>Haldenstrasse 11</p>
          <p>6006 Luzern</p>
        </address>
        <div className="contact-teaser__contact">
          <img src="/icons/icon-phone.svg" />
          <a href="tel:0414171707">041 417 17 07</a>
        </div>
        <div className="contact-teaser__times">
          <img src="/icons/icon-time.svg" />
          <p>Öffnungszeiten</p>
          <p>Montag –  Freitag</p>
          <p>09:00 – 12.00, 13:30 – 18:00 Uhr</p>
        </div>
      </div>
    </Section>
  )
}

export {
  ContactTeaser
};