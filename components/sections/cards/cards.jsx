// IMPORTS
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';
import { useRef, useState } from 'react';

// COMPONENT
const Cards = ({ data }) => {

	// RENDER
	return (
		<Section data={{ className: 'cards' }}>
			<Heading data={{ className: 'cards__title', level: 'h2' }}>{ data.title }</Heading>
			<div className="cards__wrapper" >
				{data.cards.map((card, index) => (
					<CardItem
						key={ index }
						data={{
							title: card.title,
							text: card.text,
							image: {
								src: card.image.src,
								alt: card.image.alt,
							},
							link: {
								text: card.link.text,
								href: card.link.href,
							},
						}} />
				))}
			</div>
		</Section>
	);
};

// COMPONENT
const CardItem = ({ data }) => {

	// RENDER
	return (
		<div className="cards__item item">
			<Image data={{ className: 'item__image', src: data.image.src, alt: data.image.alt }} />
			<div className="item__wrapper">
				<Heading data={{ className: 'item__title', level: 'h5' }}>{ data.title }</Heading>
				<Paragraph data={{ className: 'item__text' }} >{ data.text }</Paragraph>
				<Link data={{ className: 'item__link', href: data.link.href, icon: 'arrow' }}>{ data.link.text }</Link>
			</div>
		</div>
	);

};

// EXPORTS
export {
	Cards,
};
