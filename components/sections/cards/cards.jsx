import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';
import { Icon } from 'components/partials/icon/icon';
import { useRef, useEffect, useState } from 'react';

const Cards = ({ data }) => {

  const cardsWrapperRef = useRef();
	
  const [cardPosition, setCardPosition] = useState('left');

  const toggleCardPosition = () => {
    if (cardPosition === 'left') {
      setCardPosition('right');
      cardsWrapperRef.current.scroll({
        top: 0,
        left: 500,
        behavior: 'smooth'
      });
    } else {
      setCardPosition('left');
      cardsWrapperRef.current.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  return (
    <Section data={{ className: 'cards'}}>
      <Heading data={{ className: 'cards__title', level: 'h2' }}>{ data.title }</Heading>
      <div className="cards__wrapper" ref={cardsWrapperRef} onClick={ toggleCardPosition }>
        {data.cards.map((card, index) => (
          <CardItem key={ index } data={{ 
            imageSrc: card.imageSrc, 
            imgAlt: card.imageAlt, 
            title: card.title, 
            text: card.text, 
            linkText: card.linkText, 
            linkHref: card.linkHref 
          }}  /> 
        ))}
      </div>
      <Icon data={{ icon: 'slide', className: 'cards__icon' }}/>
    </Section>
  )
}


const CardItem = ({ data }) => {
  return (
    <div className="cards__item item">
      <Image data={{ className: 'item__image', src: data.imageSrc }} />
      <div className="item__wrapper">
        <Heading data={{ className: 'item__title', level: 'h5'}}>{ data.title }</Heading>
        <Paragraph data={{ className: 'item__text' }} >{ data.text }</Paragraph>
        <Link data={{ className: 'item__link', href: data.linkHref, icon: 'arrow'}}>{ data.linkText }</Link>
      </div>			
    </div>
  )
}


export { 
  Cards
};