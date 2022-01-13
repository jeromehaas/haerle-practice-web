import { Page } from 'components/layouts/page/page'
import { Hero } from 'components/sections/hero/hero';

const Start = () => {
  return (
    <Page>
      <Hero data={{ 
        className: 'hero',
        titleText: 'Diagnostik und Therapie von Kiefer-, Gesichts- und Kopfschmerzen, Myoarthropathien des Kausystems, Schlafapnoe',
        titleColor: 'lightblue',
        imageSrc: '/images/01-daniela-haerle-besprechung-hauptbild.jpg',
        imageAlt: 'Besprechung mit Daniela Haerle'
      }} />
    </Page>
  )
}

export default Start;