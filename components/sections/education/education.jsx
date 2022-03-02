import courses from 'components/sections/education/education.json';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';

const Education = ({ data }) => {

  return (
    <Section data={{ className: 'education', anchorId: data.anchorId }}>
      <Heading data={{ className: 'education__title', level: 'h3' }}>Weiterbildungen / Tagungen</Heading>
      <div className="education__item-wrapper">

        { courses.map((item, index) => (
          <EducationItem key={ index } data={{ 
            date: item.date, 
            activities: item.activities,
						image: item.image
          }}/>
        ))}
      </div>
    </Section>
  )
};

const EducationItem = ({ data }) => {
  return (
    <div className="item">
      <Heading data={{ className: 'item__title', level: 'h5'}}>{ data.date }</Heading>
      <ul className='item__list'>
        {data.activities && data.activities.map((item, index) =>(
          <li className="item__list-item" key={ index }>{ item }</li>
        ))}
        { data.image && (
          <Image data={{ 
            className: 'item__image', 
            src: data.image.src,
						alt: data.image.alt,
            width: 700, 
            height: 500
          }}/>
        ) } 
      </ul>
    </div>
  )
}

export {
  Education
};