// IMPORTS
import { Image } from 'components/partials/image/image';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';
import { ListItem } from 'components/partials/list-item/list-item';

// COMPONENT
const Siteplan = ({ data }) => {

	// RENDER
	return (
		<Section data={{ className: `siteplan`  }}>
			<div className="siteplan__wrapper">
				<Image  data={ { className: "siteplan__image", width: 1200, height: 400, alt: 'Praxis am Dietschiberg', src: '/images/14-dietschiberg-praxis.jpg',  }} />
				<div className="siteplan__content">
					<Heading data={ { className: 'siteplan__title', level: 'h4' }} >Anfahrt</Heading>
					<div className="siteplan__item item">
						<Heading data={ { className: 'item__title', level: 'h3' }} >Öffentliche Verkehrsmittel</Heading>
						<Paragraph data={ { className: 'item__text' } }>Unser Zentrum erreichen Sie bequem mit den öffentlichen Verkehrsmitteln. Ab Bahnhof Luzern bringt Sie der Bus (Linie 14) viertelstündlich in Richtung Brüelstrasse zu uns. Sie steigen bei der Haltestelle «Lützelmattstrasse» aus, überqueren die Strasse und sehen auf der linken Seite zwei rote Ärztehäuser. Unser Zentrum befindet sich im 2. Stock des Ärztehauses 3.</Paragraph>
						<Link data={{ target: "_blank", href: 'https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?nach=Luzern,L%C3%BCtzelmattstrasse', icon: data.link.icon, className: 'item__link' }}>Fahrplan SBB</Link><br />
						<Link data={{ target: "_blank", href: 'https://www.vbl.ch/fahrplaene/online-fahrplan/', icon: data.link.icon, className: 'item__link' }}>Fahrplan VBL</Link>
					</div>
					<div className="siteplan__item item">
						<Heading data={ { className: 'item__title', level: 'h3' }} >Auto</Heading>
						<Paragraph data={{ className: 'item__text'}}>Alle Zufahrtsstrassen sind ab Autobahnausfahrt Luzern City signalisiert. Im Parkhaus der Hirslanden Klinik St. Anna stehen gebührenpflichtige Parkplätze zur Verfügung. Am Ende des Parkhauses führt ein Lift direkt zu den Ärztehäusern an der Lützelmattstrasse. Bitte beachten Sie, dass das Parkhaus oft stark belegt ist und daraus Wartezeiten entstehen können.</Paragraph>
					</div>
					<div className="siteplan__item item">
						<Heading data={ { className: 'item__title', level: 'h3' }} >So erreichen Sie uns</Heading>
						<Paragraph data={{ className: 'item__text'}}>Vom Parkhaus der Klinik St. Anna wie auch von der Bushaltestelle «Lützelmattstrasse» ist der Zugang zum Ärztehaus 3 ausgeschildert. Unser Zentrum befindet sich im hinteren Ärztehaus im 2. Stock.</Paragraph>
						<Image  data={ { className: "item__image", width: 1200, height: 480, alt: 'Situationsplan', src: '/illustrations/illustration-situationsplan.png',  }} />
					</div>
					<Heading data={ { className: 'siteplan__title', level: 'h4' }} >Vorbereitung</Heading>
					<div className="siteplan__item item">
						<Heading data={ { className: 'item__title', level: 'h3' }} >Mitbringen</Heading>
						<Paragraph data={{ className: 'item__text'}}>Bei Ihrem ersten Besuch bringen Sie bitte Ihre Krankenkassenkarte mit. Von Ihrem Hausarzt benötigen wir, falls vorhanden, vorab die Krankengeschichte, fallbezogene Röntgenbilder und eine allfällige Medikamentenliste.</Paragraph>
					</div>
					<div className="siteplan__item item">
						<Heading data={ { className: 'item__title', level: 'h3' }} >Termin</Heading>
						<Paragraph data={{ className: 'item__text'}}>Sollten Sie bei Ihrer Krankenkasse ein HMO-Modell gewählt haben, wenden Sie sich zuerst an Ihren Hausarzt, damit er Sie an uns überweisen kann. Ansonsten kontaktieren Sie uns am besten telefonisch zwecks Terminvereinbarung. Sollten Sie einen Termin einmal nicht wahrnehmen können, melden Sie sich bitte 24 Stunden vorher ab. Ansonsten müssen wir Ihnen den Termin in Rechnung stellen.</Paragraph>
					</div>
				</div>

			</div>
		</Section>
	);
};

// EXPORTS
export {
	Siteplan,
};
