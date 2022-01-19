import experience from 'components/sections/resume/resume.json'; 
import { Heading } from 'components/partials/heading/heading';
import { Section } from 'components/layouts/section/section';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Link } from 'components/partials/link/link';

const Resume = () => {
  return (
    <Section data={{ className: 'faq' }}>
      <div className="resume__wrapper">

        <Heading data={{ className: 'resume__heading', level: 'h2' }}>Lebenslauf</Heading>
        <div className="resume__item-wrapper">
          { experience.map((item, index) =>(
            <ResumeItem key={index} data={{
              date: item.date,
              activities: item.activities, 
              links: item.links
            }}>
            </ResumeItem>
          ))}
        </div>
      </div>
    </Section>
  )
}

const ResumeItem = ({ data }) => {


  return (
    <div className="resume__item">
      <Heading data={{  className: 'resume__item-date', level: 'h3', color: 'lightblue' }}>
        { data.date }
      </Heading>
      <Paragraph data={{ className: 'resume__item-activity' }}>
        { data.activities && data.activities.map((activity, index) => (
          <p key={ index }>{activity}</p>
        ))}
      </Paragraph>
      { data.links && (
        <div className='resume__item-links'>
          { data.links && data.links.map((link, index) => (
            <Link key={ index } data={{ className: 'resume__item-link', href: link.link, icon: 'pdf', target: '_blank' }}>{ link.text }</Link> 
          ))}
        </div>
      ) }
    </div>
  )
}

export {
  Resume
};