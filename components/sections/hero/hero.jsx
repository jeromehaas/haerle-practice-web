import { Section } from 'components/layouts/section/section';
import { Image } from 'components/partials/image/image';
import { Heading } from 'components/partials/heading/heading';

const Hero = ({ data }) => {

  return (
    <Section data={{ className: 'hero' }}>
      <Heading data={{ 
        className: 'hero__heading',
        color: data.titleColor,
      }}>{data.titleText}</Heading>
      <Image data={{
        className: 'hero__image',
        src: data.imageSrc
      }} />
    </Section>
  )
};

export {
  Hero
};