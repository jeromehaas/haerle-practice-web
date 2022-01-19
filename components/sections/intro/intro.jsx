import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { PageNavigation } from 'components/partials/page-navigation/page-navigation';
import { Article } from 'components/sections/article/article';

const Intro = ({ data }) => {

  return (
    <Section data={{ className: 'intro'}}>
      <Heading data={{ level: 'h2', className: 'intro__title', color: 'lightblue' }}>{ data.title }</Heading>
      <Paragraph data={{ className: 'intro__text'}}>{ data.text }</Paragraph>
      <Image data={{ className: 'intro__image', src: data.imageSrc }}></Image>
      <PageNavigation data={{ 
        className: 'intro__navigation',
        title: 'Themen dieser Seite',
        links: data.navigationLinks 
      }} />
    </Section>

	
  )
}

export {
  Intro
};