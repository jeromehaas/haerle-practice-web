// IMPORTS
import { Page } from 'components/layouts/page/page';
import { ContactForm } from 'components/sections/contact-form/contact-form';
import { ContactTeaser } from 'components/sections/contact-teaser/contact-teaser';
import { Article } from 'components/sections/article/article';
import { Siteplan } from 'components/sections/siteplan/siteplan';

// COMPONENT
const Kontakt = () => {

	// RENDER
	return (
		<Page data={{ title: 'Kontakt' }}>
			<ContactTeaser />
			<ContactForm data={{ anchorId: 'kontakt-formular' }} />
			<Siteplan data={{
				title: 'Sie finden mich in der Praxis von Dr. Jürg Eppenberger, Fachzahnarzt für Rekonstruktive Zahnmedizin.',
				text: '',
				image: {
					src: '/images/14-praxis-dietschiberg.jpg',
					alt: 'Türe von Praxis von Dr. Jürg Eppenberger',
				},
				link: {
					text: 'Zur Website von zahnmedizin Luzern',
					href: 'https://www.zahnmedizinluzern.ch ',
					icon: 'external-link'
				}
			}} />
		</Page>
	);

};

// EXPORTS
export default Kontakt;
