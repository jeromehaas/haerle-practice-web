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
          href: data.linkHref,
          icon: 'arrow',
          className: 'quote__image-link'
        }}>{ data.linkText }</Link>
      </div>
      <div className='quote__quote-wrapper'>
        <Heading data={{ 
          className: 'quote__quote-text',
          color: data.quoteColor,
        }}>{data.quoteText}</Heading>
        <Paragraph data={{ 
          className: 'quote__quote-author'
        }}>{ data.authorText }</Paragraph>
        <Link data={{ 
          href: data.linkHref,
          icon: 'arrow',
          className: 'quote__link-link'
        }}>{ data.linkText }</Link>
      </div>
    </Section>
  )
};

export {
  Quote
};