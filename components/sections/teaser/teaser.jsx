import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';

const Teaser = ({ data }) => {

  return (
    <Section data={{ className: 'teaser'}}>
      <div className="teaser__container">
        <Heading data={{
          className: 'teaser__title',
          level: 'h2'
        }}>Was Sie in der Sprechstunde erwartet</Heading>
        {data.items.map((item, index) => (
          <Item key={index} data={{ 
            iconSrc: item.iconSrc,
            title: item.title,
            text: item.text,
            index: index
          }}></Item>
        ))}	
      </div>
    </Section>
  )
};

const Item = ({ data }) => {
  return (
    <div className={`teaser__item teaser__item--${data.index}`}>
      <img className="teaser__item-icon" src={ data.iconSrc }></img>
      <Heading data={{
        className: 'teaser__item-title',
        level: 'h5'
      }}>{data.title}</Heading>
      <Paragraph data={{ 
        className: 'teaser__item-text'
      }}>{data.text}</Paragraph>
    </div>
  )
}

export {
  Teaser
};