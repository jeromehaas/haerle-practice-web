// IMPORTS
import { Image } from 'components/partials/image/image';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';

// COMPONENT
const Article = ({ data }) => {

	// RENDER
	return (
		<Section data={{ className: `article ${ data.reverse ? 'article--reverse' : '' } ${ data.reverseOnMobile ? 'article--reverse-on-mobile' : '' }`, anchorId: data.anchorId }}>
			<div className="article__wrapper">
				<Image data={ { width: 660, height: 494, alt: data.image.alt, src: data.image.src, className: `article__image ${data.hideImageOnMobile ? 'article__image--hide-on-mobile' : ''}` }} />
				<div className="article__content">
					<Heading data={ { className: 'article__title', level: 'h2' }} >{ data.title }</Heading>
					<Paragraph data={ { className: 'article__text' } }> { data.text }</Paragraph>
					{ data.link
						? <Link data={{ href: data.link.href, text: data.link.text, icon: data.link.icon, className: 'article__link' }}>{ data.link.text }</Link>
						: '' }
				</div>
			</div>
		</Section>
	);
};

// EXPORTS
export {
	Article,
};
