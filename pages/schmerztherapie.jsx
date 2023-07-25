// IMPORTS
import { Page } from 'components/layouts/page/page';
import { Intro } from 'components/sections/intro/intro';
import { Article } from 'components/sections/article/article';
import { Faq } from 'components/sections/faq/faq';
import { CTA } from 'components/sections/cta/cta';
import { Symptoms } from 'components/sections/symptoms/symptoms';

// COMPONENT
const Schmerztherapie = () => {

	// RENDER
	return (
		<Page data={{ title: 'Schmerztherapie' }}>
			<Intro data={{ title: 'Schmerztherapie', text: 'Meine Arbeitsweise orientiert sich in allen Bereichen an den international anerkannten Richtlinien der EAOPD (European Academy of Orofacial Pain and Dysfunction) der IASP (International Academy for the Study of Pain) und den DC/TMD (Diagnostic Criteria for Temporo Mandibular Disorders). Es ist dies die Methodik wie sie an den zahnärztlichen Zentren der Universitäten Zürich, Basel und Bern gelehrt wird.',		image: {			src: '/images/06-daniela-haerle-besprechung-fachpersonal.jpg',			alt: 'Besprechung mit Fachpersonal'		},		navigation: {			title: 'Themen dieser Seite',			links: [{ text: 'Symptome', href: 'symptome' },				{ text: 'Diagnose', href: 'diagnose' },				{ text: 'Therapie', href: 'therapie' },				{ text: 'Häufig gestellte Fragen', href: 'haeufig-gestellte-fragen' }]		} }}/>
			<Symptoms data={{ anchorId: 'symptome', title: 'Vielseitige Beschwerden, ganzheitliche Betrachtung', text: 'Eine Cranio Mandibulären Dysfunktion (CMD) führt zu Schmerzen und/oder Funktionseinschränkungen. Sofern Beschwerden auftreten, kann sich das durch verschiedene ein- oder beidseitige Symptome äussern, etwa durch Schmerzen im Kiefer-, Gesichts- und Nackenbereich, Schlafprobleme oder unklare Zahnschmerzen. Zur Abklärung der verschiedenen Symptome, wann diese erstmals auftraten, ob es Begleiterscheinungen gibt und welche Therapien Sie diesbezüglich schon unternommen haben, senden wir Ihnen vor der ersten Konsultation einen Fragebogen zu. Beim Besuch in der Praxis folgt eine Messung der Unterkieferbeweglichkeit, ein Untersuch der Muskulatur, der Gelenke und des Bisses. Es werden erste Therapieansätze besprochen.' }} />
			<Article data={{ anchorId: 'diagnose', 	title: 'Die Diagnose ist so individuell wie Sie', 	text: 'Nach der zweiten Sitzung ist meist klar welche Richtung für die Therapie eingeschlagen wird. Vieles werden wir in ein, zwei weiteren Behandlungsterminen selber angehen und bewältigen können. Manchmal sind aber auch zusätzliche Abklärungen (z.B. in einer Schlafklinik, oder HNO-Arzt) oder Therapieansätze bei weiteren Fachpersonen (Neurologie, Rheumatologie, Psychologie, Physiotherapie, Akupunktur, integrative Medizin u.a.) sinnvoll. Da ich über ein gutes Netzwerk zu solchen Personen verfüge kann Ihnen ein interdisziplinäres Setting angeboten werden. ', 	image: { 		src: '/images/07-daniela-haerle-besprechung-roentgen-ipad.jpg', 		alt: 'Röngten Aufnahme auf iPad' 	}, 	reverse: false	}} />
			<Article data={{ anchorId: 'therapie', title: 'Die auf Sie zugeschnittene Therapie', text: 'Die Therapie beginnt als Erstes bei Ihnen im Kopf. Sie werden Zusammenhänge besser verstehen und ungünstige Gewohnheiten ablegen können. Es kommen reversible Therapiehilfsmittel wie orale Schienen (Entlastungsschiene, Wasser-Schiene, Schnarchschiene, Protrusionsschiene, u.a.) zum Einsatz. Auch helfen gezielte lokale Anästhesien in muskuläre Triggerpunkte oder in das Kiefergelenk. Das Erlernen von einfacher Physiotherapie und Achtsamkeitstraining ist essenziell für eine nachhaltige Wirkung der Therapie. Der Softlaser mit gewebeaktivierender Wirkung und Zellregeneration kommt zum Einsatz. Spezifische Medikamente können dem Nervensystem und dem Schlaf bei der Regulierung helfen. Sollte sich eine Fehlstellung des Bisses oder ein Zahn als Ursache der Schmerzen herausstellen, stehe ich gerne beratend Ihrem Privat-Zahnarzt zur Seite (second opinion).', image: { src: '/images/08-daniela-haerle-besprechung-patient-closeup.jpg', alt: 'Besprechung mit Patient' }, reverse: true		}} />
			<Faq data={{ anchorId: 'haeufig-gestellte-fragen' }} />
			<CTA data={{ title: 'Haben Sie Fragen?', text: 'Sie finden mich in der Praxis am Dietschiberg an der Lützelmattstrasse 3 in Luzern.', button: { text: 'Kontakt', href: '/kontakt'		}	}} />
		</Page>
	);

};

// EXPORTS
export default Schmerztherapie;
