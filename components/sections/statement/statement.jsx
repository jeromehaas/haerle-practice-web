// IMPORTS
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';

// COMPONENT
const Statement = ({ data }) => {

	// RENDER
	return (
		<Section data={{ className: 'statement' }}>
			<Heading data={{ level: 'h2', color: 'lightblue', className: 'statement__title' }}>
				{ data.text }
			</Heading>
		</Section>
	);

};

// EXPORTS
export {
	Statement,
};
