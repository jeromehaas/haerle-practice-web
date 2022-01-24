import signs from 'components/sections/symptoms/symptoms.json';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';
import { Icon } from 'components/partials/icon/icon';
import Head from '/public/illustrations/illustration-head.svg'

import lottie from 'lottie-web';
import Lottie from '/public/lotties/lottie-symptom-head.json';
import React, { useEffect, useState, createRef, useRef } from 'react';

const Symptoms = ({ data }) => {


  const [ activeItem, setActiveItem ] = useState(null);
  const toggleActiveItem = (id) => {
    activeItem === id ? setActiveItem(null) : setActiveItem(id);
  }

  const [activeCategory, setActiveCategory] = useState('one');


  return (
    <Section data={{
      className: 'symptoms',
      anchorId: data.anchorId
    }}>
      <div className="symptoms__wrapper">
        <div className="symptoms__content">
          <Heading data={{ 
            className: 'symptoms__title',
            level: 'h2'
          }}>{ data.title }
          </Heading>
          <Paragraph data={{
            className: 'symptoms__text'
          }}>
            { data.text }
          </Paragraph>
          { data.linkText && data.linkHref ? (
            <Link data={{ 
              href: data.linkHref,
              text: data.linkText,
              icon: data.linkIcon,
              className: 'symptoms__link'
            }}>{ data.linkText }</Link>
          ) : '' }
        </div>
        <div className="symptoms__visual visual">
          <div className={`visual__graphic graphic graphic--${activeCategory}`}>
            <Head />
            <button className={`graphic__button graphic__button--one ${ activeCategory === 'one' ? 'graphic__button--active' : ''}`} onClick={ () => setActiveCategory('one')}></button>
            <button className={`graphic__button graphic__button--two ${ activeCategory === 'two' ? 'graphic__button--active' : ''}`} onClick={ () => setActiveCategory('two')}></button>
            <button className={`graphic__button graphic__button--three ${ activeCategory === 'three' ? 'graphic__button--active' : ''}`} onClick={ () => setActiveCategory('three')}></button>
          </div>
          <div className="visual__card">
            <Heading data={{ level: 'h2'}}>{ signs[activeCategory].title }</Heading>
            { signs[activeCategory].items.map((item, index) => (
              <div key={ index } className={`visual__item item ${activeItem === item.id ? 'item--active' : ''}`}>
                <Heading data={{ className: 'item__title', level: 'h5', onClick: () => toggleActiveItem(item.id) }}>{ item.title }</Heading>
                <Paragraph data={{ className: 'item__text', onClick: () =>  toggleActiveItem(data.id) }}>{ item.text }</Paragraph>
                <Icon data={{  icon: 'arrow', className: `item__icon ${activeItem !== item.id ? 'item__icon--inverted' : '' }`, onClick: () => toggleActiveItem(data.id) }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export {
  Symptoms
};