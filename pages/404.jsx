// IMPORTS
import { Page } from 'components/layouts/page/page';
import { Error } from 'components/sections/error/error';

// COMPONENT
const PageNotFound = () => {

	// RENDER
	return (
		<Page data={{ title: '' }}>
			<Error data={{ title: 'Diese Seite konnte nicht gefunden werden...', text: 'Es scheint, dass diese Seite nicht mehr zu existieren scheint. Bitte kehren Sie zurück zur Website', button: { text: 'zurück zur Website', href: '/' } }} />
		</Page>
	);

};

// EXPORTS
export default PageNotFound;
