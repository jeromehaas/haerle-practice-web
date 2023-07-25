// IMPORTS
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { PageNavigation } from 'components/partials/page-navigation/page-navigation';
import { Fragment } from 'react';

// COMPONENT
const Intro = ({ data }) => {

	// RENDER
	return (
		<Fragment>
			<Section data={{ className: `intro intro--upper ${!data.image ? 'intro--no-image' : ''}` }}>
				<div className="intro__text-wrapper">
					<Heading data={{ level: 'h1', className: 'intro__title', color: 'lightblue' }}>{ data.title }</Heading>
					<Paragraph data={{ className: 'intro__text' }}>{ data.text }</Paragraph>
				</div>
				{ data.image ? (
					<div className="intro__image-wrapper">
						<Image data={{ className: 'intro__image', src: data.image.src, alt: data.image.alt }} />
					</div>
				) : '' }
			</Section>
			<Section data={{ className: `intro intro--lower ${!data.navigation ? 'intro--no-links' : ''}` }}>
				{ data.navigation
					?	<PageNavigation data={{ className: 'intro__navigation', title: data.navigation.title, links: data.navigation.links }} />
					: null }
				<div className="intro__blocker" />
			</Section>
		</Fragment>
	);

};

// EXPORTS
export {
	Intro,
};
