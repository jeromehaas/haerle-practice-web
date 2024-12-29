// IMPORTS
import { Page } from 'components/layouts/page/page';
import { ContactForm } from 'components/sections/contact-form/contact-form';
import { ContactTeaser } from 'components/sections/contact-teaser/contact-teaser';
import { Siteplan } from 'components/sections/siteplan/siteplan';
import { Impressions } from 'components/sections/impressions/impressions.jsx';

// COMPONENT
const Kontakt = () => {

	// RENDER
	return (
		<Page data={{ title: 'Kontakt' }}>
			<ContactTeaser />
			<ContactForm data={{ anchorId: 'kontakt-formular' }} />
			<Impressions />
			<Siteplan />
		</Page>
	);

};

// EXPORTS
export default Kontakt;
