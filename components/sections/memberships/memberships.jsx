import { Section } from 'components/layouts/section/section';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import Link from 'next/link';

const Memberships = ({ data }) => {

  return (
    <Section data={{ className: 'memberships', anchorId: data.anchorId }}>
      <div className="memberships__text-wrapper">
        <Heading data={{ className: 'memberships__title', level: 'h3' }}>Mitgliedschaften</Heading>
        <Paragraph data={{ className: 'memberships__text'}}>Frau Dr. med. dent. Daniela Haerle ist Mitglied von anerkannten Fachgesellschaften; des Weiteren besteht eine Zusammenarbeit mit dem Zentrum für Kopf-Hals-Chirurgie Hirslanden Klinik St. Anna, spezialisierte Zentren für Schlafmedizin, HNO-Ärzten, Neurologen und Psychologen.</Paragraph>
      </div>
      <div className="memberships__logo-wrapper">
        <a className="memberships__logo memberships__logo--1" href="https://swisspainsociety.ch/de/" target="_blank" rel="noreferrer"><Image data={{ src: '/logos/logo-swiss-pain-society.png'}} /></a>
        <a className="memberships__logo memberships__logo--2" href="https://www.sso-luzern.ch/" target="_blank" rel="noreferrer"><Image data={{ src: '/logos/logo-zbk-lzg.png'}} /></a>
        <a className="memberships__logo memberships__logo--3" href="https://www.sso.ch/" target="_blank" rel="noreferrer"><Image data={{ src: '/logos/logo-sso.png'}} /></a>
        <a className="memberships__logo memberships__logo--4" href="https://www.dgfdt.de/" target="_blank" rel="noreferrer"><Image data={{ src: '/logos/logo-dgfdt.png'}} /></a>
        <Image data={{ className: 'memberships__logo memberships__logo--5', src: '/logos/logo-eaopd.png'}} />
      </div>
    </Section>
  )

}

export {
  Memberships
};