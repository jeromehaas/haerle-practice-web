import { Section } from 'components/layouts/section/section';
import { Image } from 'components/partials/image/image';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';

const Quote = ({ data }) => {

  return (
    <Section data={{ className: 'quote'}}>
      <div className='quote__image-wrapper image'>
        <Image data={{
          className: 'image__image',
          src: data.image.src,
					alt: data.image.alt,
          width: 800,
          height: 950
        }} />
        <Link data={{ 
          href: data.link.href,
          icon: 'arrow',
          className: 'image__link'
        }}>{ data.link.text }</Link>
      </div>
      <div className='quote__quote-wrapper quote'>
        <Heading data={{ 
          className: 'quote__text',
          color: data.quote.color,
					level: 'h1'
        }}>{data.quote.text}</Heading>
        <Paragraph data={{ 
          className: 'quote__author',
					color: 'lightblue'
        }}>{ data.quote.author }</Paragraph>
        <Link data={{ 
          href: data.link.href,
          icon: 'arrow',
          className: 'quote__link'
        }}>{ data.link.text }</Link>
      </div>
    </Section>
  )
};

export {
  Quote
};