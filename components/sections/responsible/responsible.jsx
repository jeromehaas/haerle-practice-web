import persons from 'components/sections/responsible/responsible.json';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import Link from 'next/link';

const Responsible = () => {

  return (
    <Section data={{ className: 'responsible'}}>
      <Heading data={{ className: 'responsible__title', level: 'h1', color: 'lightblue'}}>Impressum</Heading>
      <Paragraph data={{ className: 'responsible__text' }}>Diese Datenschutzerklärung beinhaltet allgemeinen Angaben zum Umgang von des Inhabers dieser Website (anschliessend «wir», «uns» genannt)  mit Ihren Daten sowie Informationen über Ihre Rechte gemäss der Europäischen Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).</Paragraph>
      <div className="responsible__item-wrapper">
        { persons.map((item, index) => (
          <ResponsibleItem key={ index } data={{
            category: item.category,
            name: item.name,
            website: item.website
          }}></ResponsibleItem>
        ))}
      </div>
      <Paragraph data={{ className: 'responsible__copyright' }}>Copyright © 2022 Daniela Haerle. Alle Rechte vorbehalten. Für die Vervielfältigung oder Veränderung jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.</Paragraph>
    </Section>
  )
}

const ResponsibleItem = ({ data }) => {
  return (
    <div className="responsible__item item">
      { data.category && (<Heading data={{ className: 'item__category', level: 'h5' }}>{ data.category }</Heading>) }
      { data.name && (<Paragraph data={{ className: 'item__name '}}>{ data.name }</Paragraph>) }
      { data.website && (<Link href={ `https://${ data.website }` }><a className="item__website paragraph" target="_blank">{ data.website }</a></Link>) }
    </div>
  )
}

export {
  Responsible
};