// IMPORTS
import experience from 'components/sections/resume/resume.json';
import { Heading } from 'components/partials/heading/heading';
import { Section } from 'components/layouts/section/section';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';

// COMPONENT
const Resume = ({ data }) => {

	// RENDER
	return (
		<Section data={{ className: 'resume', anchorId: data.anchorId }}>
			<div className="resume__wrapper">
				<Heading data={{ className: 'resume__heading', level: 'h2' }}>Lebenslauf</Heading>
				<div className="resume__item-wrapper">
					{ experience.map((item, index) => (
						<ResumeItem key={index} data={{ date: item.date, activities: item.activities, links: item.links }} />
					))}
				</div>
			</div>
		</Section>
	);

};

// COMPONENT
const ResumeItem = ({ data }) => {

	// RENDER
	return (
		<div className="resume__item item">
			<Heading data={{ className: 'item__date', level: 'h3', color: 'darkblue' }}>
				{ data.date }
			</Heading>
			<div data={{ className: 'item__activity' }}>
				{ data.activities && data.activities.map((activity, index) => (
					<Paragraph data={{}} key={ index }>{activity}</Paragraph>
				))}
			</div>
			{ data.links && (
			<div className="item__links">
				{ data.links && data.links.map((link, index) => (
					<Link key={ index } data={{ className: 'item__link', href: link.link, icon: 'pdf', target: '_blank' }}>{ link.text }</Link>
				))}
			</div>
			) }
		</div>
	);

};

// EXPORTS
export {
	Resume,
};
