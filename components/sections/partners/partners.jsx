// IMPORTS
import { Section } from 'components/layouts/section/section';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import { Link } from 'components/partials/link/link';
import NextLink from 'next/link';

// COMPONENT
const Partners = ({ data }) => {

	// RENDER
	return (
		<Section data={{ className: 'partners', anchorId: data.anchorId }}>
			<div className="partners__text-wrapper">
				<Heading data={{ className: 'partners__title', level: 'h2' }}>Partner</Heading>
				<Paragraph data={{ className: 'partners__text' }}>Mein Netzwerk deckt vielseitige Spezialisierungen ab, auf die ich jederzeit zurückgreifen kann. Davon profitieren auch Sie!</Paragraph>
			</div>
			<div className="partners__item item item--first">
				<Image data={{ className: 'item__logo', src: '/logos/logo-zahnmedizin-luzern.png', height: '300', alt: 'Zahnmedizin Luzern' }} />
				<Paragraph data={{}}>Dr. med. dent. Jürg Eppenberger</Paragraph>
				<Paragraph data={{}}>Haldenstrasse 11</Paragraph>
				<Paragraph data={{}}>6006 Luzern</Paragraph>
				<br />
				<NextLink className="paragraph item__link" href="tel:0414171707">Tel: 041 417 17 07</NextLink>
				<NextLink className="paragraph item__link" href="mailto:info@zahnmedizinluzern.ch">Email: info@zahnmedizinluzern.ch</NextLink>
				<br />
				<Link data={{ icon: 'external-link', href: 'https://zahnmedizinluzern.ch', target: '_blank' }}>zahnmedizinluzern.ch</Link>
			</div>
			<div className="partners__item item item--second">
				<Image data={{ className: 'item__logo ', src: '/logos/logo-zentrum-kopf-hals-chirurgie.png', height: '300', alt: 'Zentrum Kopf Hals Chirurgie Luzern' }} />
				<Paragraph data={{}}>Ärztehaus Klinik St. Anna</Paragraph>
				<Paragraph data={{}}>Lützelmattstrasse 3</Paragraph>
				<Paragraph data={{}}>6006 Luzern</Paragraph>
				<br />
				<NextLink className="paragraph item__link" href="tel:0415440708">Tel: 041 544 07 08</NextLink>
				<NextLink className="paragraph item__link" href="tel:0415440716">Fax: 041 544 07 16</NextLink>
				<NextLink className="paragraph item__link" href="mailto:khc@hin.ch">Email: khc@hin.ch</NextLink>
				<br />
				<Link data={{ icon: 'external-link', href: 'https://kopf-hals-chirurgie.ch', target: '_blank' }}>kopf-hals-chirurgie.ch</Link>
			</div>
		</Section>
	);

};

// EXPORTS
export {
	Partners,
};
