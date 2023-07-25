// IMPORTS
import { Page } from 'components/layouts/page/page';
import { ContactForm } from 'components/sections/contact-form/contact-form';
import { ContactTeaser } from 'components/sections/contact-teaser/contact-teaser';

// COMPONENT
const Kontakt = () => {

	// RENDER
	return (
		<Page data={{ title: 'Kontakt' }}>
			<ContactTeaser />
			<ContactForm data={{ anchorId: 'kontakt-formular' }} />
		</Page>
	);

};

// EXPORTS
export default Kontakt;
