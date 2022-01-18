import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { PageNavigation } from 'components/partials/page-navigation/page-navigation';
import { Article } from 'components/sections/article/article';

const Intro = () => {

  return (
    <Section data={{ className: 'intro'}}>
      <Heading data={{ level: 'h2', className: 'intro__title', color: 'lightblue' }}>Schmerztherapie</Heading>
      <Paragraph data={{ className: 'intro__text'}}>Wenn die Kiefergelenke, die Kaumuskeln und der Biss nicht harmonisch funktionieren, kann das zu Beschwerden im Kieferbereich und in angrenzenden Regionen führen. Erfahren Sie, welche Symptome bei einer Cranio Mandibulären Dysfunktion (CMD) auftreten können, wie die Diagnose erstellt wird und wie die Behandlung auf Sie zugeschnitten wird. </Paragraph>
      <Image data={{ className: 'intro__image', src: '/images/06-daniela-haerle-besprechung-fachpersonal.jpg'}}></Image>
      <PageNavigation data={{ 
        className: 'intro__navigation',
        title: 'Themen dieser Seite',
        links: [
          { text: 'Symptome', href:'#syptome'},
          { text: 'Diagnose', href:'#diagnose'},
          { text: 'Therapie', href:'#therapie'},
          { text: 'Häufig gestellte Fragen', href:'faq'},
        ]}} />
    </Section>

	
  )
}

export {
  Intro
};