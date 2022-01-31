import { Section } from 'components/layouts/section/section';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';

const Memberships = ({ data }) => {

  return (
    <Section data={{ className: 'memberships', anchorId: data.anchorId }}>
      <div className="memberships__text-wrapper">
        <Heading data={{ className: 'memberships__title', level: 'h3' }}>Mitgliedschaften</Heading>
        <Paragraph data={{ className: 'memberships__text'}}>Frau Dr. med. dent. Daniela Haerle ist Mitglied von anerkannten Fachgesellschaften; des Weiteren besteht eine Zusammenarbeit mit dem Zentrum für Kopf-Hals-Chirurgie Hirslanden Klinik St. Anna, spezialisierte Zentren für Schlafmedizin, HNO-Ärzten, Neurologen und Psychologen.</Paragraph>
      </div>
      <div className="memberships__logo-wrapper">
        <Image data={{ className: 'memberships__logo memberships__logo--1', src: '/logos/logo-swiss-pain-society.png'}} />
        <Image data={{ className: 'memberships__logo memberships__logo--2', src: '/logos/logo-zbk-lzg.png'}} />
        <Image data={{ className: 'memberships__logo memberships__logo--3', src: '/logos/logo-sso.png'}} />
        <Image data={{ className: 'memberships__logo memberships__logo--4', src: '/logos/logo-dgfdt.png'}} />
      </div>
    </Section>
  )

}

export {
  Memberships
};