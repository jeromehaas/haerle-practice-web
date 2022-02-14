import { Section } from 'components/layouts/section/section';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import { Link } from 'components/partials/link/link';
import NextLink from 'next/link';

const Partners = ({ data }) => {

  return (
    <Section data={{ className: 'partners', anchorId: data.anchorId }}>
      <div className="partners__text-wrapper">
        <Heading data={{ className: 'partners__title', level: 'h2' }}>Partner</Heading>
        <Paragraph data={{ className: 'partners__text'}}>Mein Netzwerk deckt vielseitige Spezialisierungen ab, auf die ich jederzeit zurückgreifen kann. Davon profitieren auch Sie!</Paragraph>
      </div>

      <div className="partners__item item item--first">
        <Image data={{ className: 'item__logo', src: '/logos/logo-zahnmedizin-luzern.png', height: '300'}} />
        <Paragraph data={{}}>Dr. med. dent. Jürg Eppenberger</Paragraph>
        <Paragraph data={{}}>Haldenstrasse 11</Paragraph>
        <Paragraph data={{}}>6006 Luzern</Paragraph>
        <br />
        {/* <Paragraph data={{}}>041 417 17 07</Paragraph>
        <Paragraph data={{}}>info@zahnmedizinluzern.ch</Paragraph> */}
        <NextLink href="tel:0414171707"><a className="paragraph item__link">T 041 417 17 07</a></NextLink>
        <NextLink href="mailto:info@zahnmedizinluzern.ch"><a className="paragraph item__link">info@zahnmedizinluzern.ch</a></NextLink>
        <br />
        <Link data={{ icon: 'external-link'}}>zahnmedizinluzern.ch</Link>
      </div>

      <div className="partners__item item item--second">
        <Image data={{ className: 'item__logo ', src: '/logos/logo-zentrum-kopf-hals-chirurgie.png', height: '300'}} />
        <Paragraph data={{}}>Ärztehaus Klinik St. Anna</Paragraph>
        <Paragraph data={{}}>Lützelmattstrasse 3</Paragraph>
        <Paragraph data={{}}>6006 Luzern</Paragraph>
        <br />
        <NextLink href="tel:0415440708"><a className="paragraph item__link">T 041 544 07 08</a></NextLink>
        <NextLink href="tel:0415440716"><a className="paragraph item__link">F 041 544 07 16</a></NextLink>
        <NextLink href="mailto:khc@hin.ch"><a className="paragraph item__link">khc@hin.ch</a></NextLink>
        <br />
        <Link data={{ icon: 'external-link'}}>kopf-hals-chirurgie.ch</Link>
      </div>
    </Section>
  )

}

export {
  Partners
};