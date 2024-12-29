// IMPORTS
import { Image } from 'components/partials/image/image';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';

// COMPONENT
const Siteplan = () => {

	// RENDER
	return (
		<Section data={{ className: 'siteplan' }}>
			<div className="siteplan__wrapper">
				<div className="siteplan__content">
					<Heading data={ { className: 'siteplan__title', level: 'h4' }} >Anfahrt</Heading>
					<div className="siteplan__item item">
						<Heading data={ { className: 'item__title', level: 'h3' }} >Öffentliche Verkehrsmittel</Heading>
						<Paragraph data={ { className: 'item__text' } }>Meine Praxis erreichen Sie bequem mit den öffentlichen Verkehrsmitteln. Ab Bahnhof Luzern bringt Sie der Bus (Linie 14) viertelstündlich in Richtung Brüelstrasse zu mir. Sie steigen bei der Haltestelle «Lützelmattstrasse» aus, überqueren die Strasse und sehen auf der linken Seite zwei rote Ärztehäuser. Meine Praxis befindet sich im 2. Stock des Ärztehauses 3.</Paragraph>
						<Link data={{ target: '_blank', href: 'https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?nach=Luzern,L%C3%BCtzelmattstrasse', icon: 'external-link', className: 'item__link' }}>Fahrplan SBB</Link><br />
						<Link data={{ target: '_blank', href: 'https://www.vbl.ch/fahrplaene/online-fahrplan/', icon: 'external-link', className: 'item__link' }}>Fahrplan VBL</Link>
					</div>
					<div className="siteplan__item item">
						<Heading data={ { className: 'item__title', level: 'h3' }} >Auto</Heading>
						<Paragraph data={{ className: 'item__text' }}>Alle Zufahrtsstrassen sind ab Autobahnausfahrt Luzern City signalisiert. Im Parkhaus der Hirslanden Klinik St. Anna stehen gebührenpflichtige Parkplätze zur Verfügung. Am Ende des Parkhauses führt ein Lift direkt zu den Ärztehäusern an der Lützelmattstrasse. Bitte beachten Sie, dass das Parkhaus oft stark belegt ist und daraus Wartezeiten entstehen können.</Paragraph>
					</div>
					<div className="siteplan__item item">
						<Heading data={ { className: 'item__title', level: 'h3' }} >So erreichen Sie mich</Heading>
						<Paragraph data={{ className: 'item__text' }}>Vom Parkhaus der Klinik St. Anna wie auch von der Bushaltestelle «Lützelmattstrasse» ist der Zugang zum Ärztehaus 3 ausgeschildert. Meine Praxis befindet sich im hinteren Ärztehaus im 2. Stock.</Paragraph>
						<Image data={ { className: 'item__image', width: 1200, height: 480, alt: 'Situationsplan', src: '/illustrations/illustration-situationsplan.png' }} />
					</div>
					<Heading data={ { className: 'siteplan__title', level: 'h4' }} >Vorbereitung</Heading>
					<div className="siteplan__item item">
						<Heading data={ { className: 'item__title', level: 'h3' }} >Mitbringen</Heading>
						<Paragraph data={{ className: 'item__text' }}>Bei Ihrem ersten Besuch bringen Sie bitte Ihre Krankenkassenkarte mit. Von Ihrem Hausarzt oder Zahnarzt benötige ich, falls vorhanden, fallbezogene Röntgenbilder oder eine allfällige Medikamentenliste.</Paragraph>
					</div>
					<div className="siteplan__item item">
						<Heading data={ { className: 'item__title', level: 'h3' }} >Termin</Heading>
						<Paragraph data={{ className: 'item__text' }}>Sollten Sie bei Ihrer Krankenkasse ein HMO-Modell gewählt haben, wenden Sie sich zuerst an Ihren Hausarzt, damit er Sie an mich überweisen kann. Ansonsten kontaktieren Sie mich am besten telefonisch zwecks Terminvereinbarung. Sollten Sie einen Termin einmal nicht wahrnehmen können, melden Sie sich bitte 24 Stunden vorher ab. Ansonsten muss ich Ihnen den Termin in Rechnung stellen.</Paragraph>
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
