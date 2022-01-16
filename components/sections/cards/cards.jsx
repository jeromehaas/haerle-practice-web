import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';
import { Icon } from 'components/partials/icon/icon';

const Cards = ({ data }) => {

  return (
    <Section data={{ className: 'cards'}}>
      <Heading data={{ className: 'cards__title', level: 'h2' }}>{ data.title }</Heading>
      <div className="cards__wrapper">
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
    <div className="cards__item">
      <Image data={{ className: 'cards__image', src: data.imageSrc }} />
      <div className="cards__item__wrapper">
        <Heading data={{ level: 'h5'}}>{ data.title }</Heading>
        <Paragraph data={{}} >{ data.text }</Paragraph>
        <Link data={{ href: data.linkHref, icon: 'arrow'}}>{ data.linkText }</Link>
      </div>			
    </div>
  )
}


export { 
  Cards
};