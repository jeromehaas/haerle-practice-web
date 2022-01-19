import { Section } from 'components/layouts/section/section';
import { Image } from 'components/partials/image/image';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';

const Quote = ({ data }) => {

  return (
    <Section data={{ className: 'quote'}}>
      <div className='quote__image-wrapper'>
        <Image data={{
          className: 'quote__image-image',
          src: data.imageSrc,
          width: 800,
          height: 950
        }} />
        <Link data={{ 
          href: '/',
          icon: 'arrow',
          className: 'quote__image-link'
        }}>erfahren Sie mehr über mich</Link>
      </div>
      <div className='quote__quote-wrapper'>
        <Heading data={{ 
          className: 'quote__quote-text',
          color: data.quoteColor,
        }}>{data.quoteText}</Heading>
        <Paragraph data={{ 
          className: 'quote__quote-author'
        }}>Dr. med. dent. Daniela Haerle</Paragraph>
        <Link data={{ 
          href: '/',
          icon: 'arrow',
          className: 'quote__link-link'
        }}>erfahren Sie mehr über mich</Link>
      </div>
    </Section>
  )
};

export {
  Quote
};