import { Section } from 'components/layouts/section/section';
import { Image } from 'components/partials/image/image';
import { Heading } from 'components/partials/heading/heading';
import { Link } from 'react-scroll';

const Hero = ({ data }) => {

  return (
    <Section data={{ className: 'hero' }}>
      <Heading data={{ 
        className: 'hero__heading',
        color: data.titleColor,
      }}>{data.titleText}</Heading>
      <Image data={{
        className: 'hero__image',
        src: data.image.src,
				alt: data.image.alt
      }} />
      <Link to={ 'intro-text' } className="page-navigation__link" duration={500} smooth>
        <img className="hero__scroll-icon" src='/icon/scroll.svg'></img>
      </Link>
    </Section>
  )
};

export {
  Hero
};