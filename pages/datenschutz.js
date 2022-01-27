import { Page } from 'components/layouts/page/page';
import { Intro } from 'components/sections/intro/intro';
import { Regulation } from 'components/sections/regulation/regulation';

const Datenschutz = () => {

  return (
    <Page data={{ title: 'Datenschutz' }}>
      <Intro data={{
        title: 'Datenschutz',
        text: 'Diese Datenschutzerklärung beinhaltet allgemeinen Angaben zum Umgang von des Inhabers dieser Website (anschliessend «wir», «uns» genannt)  mit Ihren Daten sowie Informationen über Ihre Rechte gemäss der Europäischen Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).',
        imageSrc: '',
        navigationTitle: 'Themen dieser Seite',
        navigationLinks: [
          { text: 'Datenverarbeitung', href: 'datenverarbeitung' },
          { text: 'Cookies', href: 'cookies' },
          { text: 'Haftung für Links', href: 'haftung-fuer-links' },
          { text: 'Aktualität und Änderung ', href: 'aktualitaet-und-aenderung' }
        ]
      }} 
      />
      <Regulation />
    </Page>
  )
}



export default Datenschutz;