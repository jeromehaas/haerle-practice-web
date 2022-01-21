import { Image } from 'components/partials/image/image';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';

const Article = ({ data }) => {

  return (
    <Section data={{
      className: `article ${ data.reverse ? 'article--reverse' : '' }`,
      anchorId: data.anchorId
    }}>
      <div className="article__wrapper">
        <Image data={{
          width: 660,
          height: 494,
          alt: '',
          src: data.imageSrc,
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
          { data.linkText && data.linkHref ? (
            <Link data={{ 
              href: data.linkHref,
              text: data.linkText,
              icon: data.linkIcon,
              className: 'article__link'
            }}>{ data.linkText }</Link>
          ) : '' }
        </div>
      </div>
    </Section>
  )
};

export {
  Article
};