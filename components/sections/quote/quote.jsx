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
          src: data.imageSrc,
          width: 800,
          height: 950
        }} />
        <Link data={{ 
          href: data.linkHref,
          icon: 'arrow',
          className: 'image__link'
        }}>{ data.linkText }</Link>
      </div>
      <div className='quote__quote-wrapper quote'>
        <Heading data={{ 
          className: 'quote__text',
          color: data.quoteColor,
					level: 'h1'
        }}>{data.quoteText}</Heading>
        <Paragraph data={{ 
          className: 'quote__author',
					color: 'lightblue'
        }}>{ data.authorText }</Paragraph>
        <Link data={{ 
          href: data.linkHref,
          icon: 'arrow',
          className: 'quote__link'
        }}>{ data.linkText }</Link>
      </div>
    </Section>
  )
};

export {
  Quote
};