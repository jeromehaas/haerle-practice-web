import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { PageNavigation } from 'components/partials/page-navigation/page-navigation';

const Intro = ({ data }) => {

  return (
    <>
      <Section data={{ className: 'intro intro--upper'}}>
        <div className="intro__text-wrapper">
          <Heading data={{ level: 'h1', className: 'intro__title', color: 'lightblue' }}>{ data.title }</Heading>
          <Paragraph data={{ className: 'intro__text'}}>{ data.text }</Paragraph>
        </div>
        <div className="intro__image-wrapper">
          <Image data={{ className: 'intro__image', src: data.imageSrc }}></Image>
        </div>
      </Section>

      <Section data={{ className: `intro intro--lower ${!data.navigationLinks.length ? 'intro--no-links' : ''}`}}>
        { data.navigationLinks.length ? (
          <PageNavigation data={{ 
            className: 'intro__navigation',
            title: 'Themen dieser Seite',
            links: data.navigationLinks 
          }} />
        ) : '' }
        <div className="intro__blocker">
        </div>
      </Section>

    </>

  )
}

export {
  Intro
};