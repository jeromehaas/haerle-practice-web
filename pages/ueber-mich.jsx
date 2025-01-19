// IMPORTS
import { Page } from 'components/layouts/page/page';
import { Intro } from 'components/sections/intro/intro';
import { Article } from 'components/sections/article/article';
import { Resume } from 'components/sections/resume/resume';
import { Statement } from 'components/sections/statement/statement';
import { Memberships } from 'components/sections/memberships/memberships';
import { Impressions } from 'components/sections/impressions/impressions.jsx';

// COMPONENT
const Schmerztherapie = () => {

	// RENDER
	return (
		<Page data={{ title: 'Über mich' }}>
			<Intro data={{ title: <>Dr. med. dent. <br/> Daniela Haerle <br /> Schmerzspezialistin SPS</>, text: '',		image: {			src: '/images/09-daniela-haerle-portrait-ohne-brille.jpg',			alt: 'Portrait von Dr. med. dent. Daniela Haerle'		},		navigation: {			title: 'Themen dieser Seite',			links: [{ text: 'Leidenschaft', href: 'leidenschaft' },		{ text: 'Impressionen', href: 'impressionen' },		{ text: 'Mitgliedschaften', href: 'mitgliedschaften' },				{ text: 'Lebenslauf', href: 'lebenslauf' }]		} }} />
			<Article data={{ anchorId: 'leidenschaft', title: 'Meine Leidenschaft für die Suche nach der richtigen Diagnose', text: 'Mein Interesse für das wenig beachtete Gebiet der Zahnmedizin – die Kieferschmerzen – wurde während meiner Ausbildung in der Schmerzsprechstunde am Zahnärztlichen Institut der Universität Zürich geweckt. Plötzlich wurde aus dem scheinbar kleinen Randgebiet eine umfassende und hochkomplexe Materie, in welche ich eintauchte und die mich faszinierte. Die Kommunikation mit dem Patienten stand plötzlich mehr im Focus als seine Zähne. Es geht um die Suche nach der richtigen Ursache. ', image: { src: '/images/10-daniela-haerle-besprechung-patientin.jpg', alt: 'Besprechung mit einer Patientin' }, reverse: false, reverseOnMobile: true		}} />
			<Statement data={{ text: 'Sie als Person stehen im Zentrum – denn – «an den Zähnen hängt ein Patient!»' }} />
			<Impressions data={{ anchorId: 'impressionen' }} />
			<Memberships data={{ anchorId: 'mitgliedschaften' }} />
			<Resume data={{ anchorId: 'lebenslauf' }} />
		</Page>
	);

};

// EXPORTS
export default Schmerztherapie;
