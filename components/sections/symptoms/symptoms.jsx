// IMPORTS
import signs from 'components/sections/symptoms/symptoms.json';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';
import { Icon } from 'components/partials/icon/icon';
import React, { useState } from 'react';
// import Head from '../../../../../../../../../public/illustrations/illustration-head.svg';
import { HeadIllustration } from 'components/partials/head-illustration/head-illustration';

// COMPONENT
const Symptoms = ({ data }) => {

	// SETUP STATE
	const [activeItem, setActiveItem] = useState(null);
	const [activeCategory, setActiveCategory] = useState('one');

	// TOGGLE ACTIVE ITEM
	const toggleActiveItem = (id) => {
		activeItem === id ? setActiveItem(null) : setActiveItem(id);
	};

	// RENDER
	return (
		<Section data={{ className: 'symptoms', anchorId: data.anchorId }}>
			<div className="symptoms__wrapper">
				<div className="symptoms__content">
					<Heading data={{ className: 'symptoms__title', color: 'darkblue', level: 'h2' }}>{ data.title }</Heading>
					<Paragraph data={{ className: 'symptoms__text' }}>{ data.text }</Paragraph>
					{ data.linkText && data.linkHref
						? <Link data={{ href: data.linkHref, text: data.linkText, icon: data.linkIcon, className: 'symptoms__link' }}>{ data.linkText }</Link>
						: null }
				</div>
				<div className="symptoms__visual visual">
					<div className={`visual__graphic graphic graphic--${activeCategory}`}>
						<HeadIllustration />
						<button className={`graphic__button graphic__button--one ${ activeCategory === 'one' ? 'graphic__button--active' : ''}`} type="button" onClick={ () => setActiveCategory('one')} />
						<button className={`graphic__button graphic__button--two ${ activeCategory === 'two' ? 'graphic__button--active' : ''}`} type="button" onClick={ () => setActiveCategory('two')} />
						<button className={`graphic__button graphic__button--three ${ activeCategory === 'three' ? 'graphic__button--active' : ''}`} type="button" onClick={ () => setActiveCategory('three')} />
					</div>
					<div className="visual__card">
						<Heading data={{ level: 'h5' }}>{ signs[activeCategory].title }</Heading>
						{ signs[activeCategory].items.map((item, index) => (
							<div key={ index } className={`visual__item item ${activeItem === item.id ? 'item--active' : ''}`}>
								<Paragraph data={{ className: 'item__title', level: 'h5', onClick: () => toggleActiveItem(item.id) }}>{ item.title }</Paragraph>
								<Paragraph data={{ className: 'item__text', onClick: () => toggleActiveItem(data.id) }}>{ item.text }</Paragraph>
								<Icon data={{ icon: 'arrow', className: `item__icon ${activeItem !== item.id ? 'item__icon--inverted' : '' }`, onClick: () => toggleActiveItem(data.id) }} />
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);

};

// EXPORTS
export {
	Symptoms,
};
