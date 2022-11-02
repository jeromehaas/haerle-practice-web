import { Page } from 'components/layouts/page/page';
import { ContactForm } from 'components/sections/contact-form/contact-form';
import { Article } from 'components/sections/article/article';
import { ContactTeaser } from 'components/sections/contact-teaser/contact-teaser';

const Kontakt = () => {

  return (
    <Page data={{ title: 'Kontakt' }}>
      <ContactTeaser />
      <ContactForm data={{ anchorId: 'kontakt-formular'}} />
      <Article data={{
        title: 'Sie finden mich in der Praxis von Dr. Jürg Eppenberger, Fachzahnarzt für Rekonstruktive Zahnmedizin.',
        text: '',
				image: {
					src: '/images/12-daniela-haerle-kontakt.jpg',
					alt: 'Türe von Praxis von Dr. Jürg Eppenberger',
				},
				link: {
					text: 'Zur Website von zahnmedizin Luzern',
					href: 'https://www.zahnmedizinluzern.ch ',
					icon: 'external-link'
				}
      }} />
    </Page>
  )
}

export default Kontakt;