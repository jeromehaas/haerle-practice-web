import { Page } from 'components/layouts/page/page';
import { ContactForm } from 'components/sections/contact-form/contact-form';
import { Article } from 'components/sections/article/article';
import { ContactTeaser } from 'components/sections/contact-teaser/contact-teaser';

const Kontakt = () => {

  return (
    <Page data={{ title: 'Kontakt' }}>
      <ContactTeaser />
      <ContactForm data={{ anchorId: 'kontakt-formular'}} />
    </Page>
  )
}

export default Kontakt;