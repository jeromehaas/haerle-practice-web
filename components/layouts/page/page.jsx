// IMPORTS
import { Navigation } from 'components/blocks/navigation/navigation';
import { Footer } from 'components/blocks/footer/footer';
import { Head } from 'components/partials/head/head';

// COMPONENT
const Page = ({ data, children }) => {

	// RENDER
	return (
		<div className="page">
			<Head data={ { title: data.title } } />
			<Navigation />
			{ children }
			<Footer />
		</div>
	);
};

// EXPORTS
export {
	Page,
};
