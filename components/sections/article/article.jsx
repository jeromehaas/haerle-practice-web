import { Image } from 'components/partials/image/image';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';

const Article = ({ data }) => {

  return (
    <Section data={{
      className: `article ${ data.reverse ? 'article--reverse' : '' }`
    }}>
      <div className="article__wrapper">
        <Image data={{
          width: 660,
          height: 494,
          alt: '',
          src: '/images/02-daniela-haerle-instrumente.jpg',
          className: 'article__image'
        }} />
        <div className="article__content">
          <Heading data={{ 
            className: 'article__title',
            level: 'h2'
          }}>{ data.title }
          </Heading>
          <Paragraph data={{
            className: 'article__text'
          }}>
            { data.text }
          </Paragraph>
          <Link data={{ 
            href: data.linkHref,
            text: data.linkText,
            icon: 'arrow',
            className: 'article__link'
          }}>mehr zur Theraphie</Link>
        </div>
      </div>
    </Section>
  )
};

export {
  Article
};