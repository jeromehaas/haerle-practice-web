import { Page } from 'components/layouts/page/page';
import { ContactForm } from 'components/sections/contact-form/contact-form';
import { Article } from 'components/sections/article/article';
import { ContactTeaser } from 'components/sections/contact-teaser/contact-teaser';

const Kontakt = () => {

  return (
    <Page data={{ title: 'Kontakt' }}>
      <ContactTeaser />
      <ContactForm />
      <Article data={{
        title: 'Sie finden mich in der Praxis von Dr. Jürg Eppenberger, Spezialist SSO für Rekonstruktive Zahnmedizin',
        text: 'Sie finden mich bei der zahnmedizin luzern. Die Praxis von Dr. med. dent. Jürg Eppenberger umfasst ein breites Angebot. Weitere Informationen finden Sie auf der Praxis Website.',
        imageSrc: '/images/12-daniela-haerle-kontakt.jpg',
        imageAlt: '',
        linkText: 'Zur Website von zahnmedizin Luzern',
        linkHref: 'https://zahnarzt-luzern-zahnklinik.ch/',
        linkIcon: 'external-link'
      }} />
    </Page>
  )
}

export default Kontakt;