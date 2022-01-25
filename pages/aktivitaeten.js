import { Page } from 'components/layouts/page/page';
import { Intro } from 'components/sections/intro/intro';
import { CTA } from 'components/sections/cta/cta';
import { Education } from 'components/sections/education/education';
import { Partners } from 'components/sections/partners/partners';

const Aktivitaeten = () => {

  return (
    <Page>
      <Intro data={{
        title: 'Aktivitäten',
        text: 'Ich bleibe auf dem Laufenden und besuche regelmässig Fortbildungen und Anlässe rund um das Thema Kopf- und Kieferschmerzen.',
        imageSrc: '/images/11-daniela-haerle-portrait-brille.jpg',
        mavigationTitle: 'Themen dieser Seite',
        navigationLinks: [
          { text: 'Weiterbildung / Tagungen', href: 'weiterbildungen-tagungen' },
          { text: 'Partner', href: 'partner' },
        ]
      }}/>
      <Education data={{ anchorId: 'weiterbildungen-tagungen'}} />
      <Partners data={{ anchorId: 'partner' }}></Partners>
      <CTA data={{
        title: 'Termin vereinbaren',
        text: 'Sie finden mich in der Zahnmedizin Luzern AG, bei Dr. Jürg Eppenberger, Zahnarztpraxis für Rekonstruktive Zahnmedizin.',
        buttonText: 'Kontak'
      }} />
    </Page>
  )
}

export default Aktivitaeten;