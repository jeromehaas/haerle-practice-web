import courses from 'components/sections/education/education.json';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Image } from 'components/partials/image/image';
import { LoginForm } from '../login-form/login-form';

const Education = () => {

  return (
    <Section data={{ className: 'education'}}>
      <Heading data={{ className: 'education__title', level: 'h3' }}>Weiterbildungen / Tagungen</Heading>
      { courses.map((item, index) => (
        <EducationItem key={ index } data={{ 
          date: item.date, 
          activities: item.activities,
          imageSrc: item.imageSrc
        }}/>
      ))}
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
        { console.log(data)}
        { data.imageSrc && (
          <Image data={{ 
            className: 'item__image', 
            src: data.imageSrc,
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