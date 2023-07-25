// IMPORTS
import { Page } from 'components/layouts/page/page';
import { Responsible } from 'components/sections/responsible/responsible';

// COMPONENT
const Impressum = () => {

	// RENDER
	return (
		<Page data={{ title: 'Impressum' }}>
			<Responsible />
		</Page>
	);

};

// EXPORTS
export default Impressum;
