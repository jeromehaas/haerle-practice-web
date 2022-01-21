import paragraphs  from 'components/sections/regulation/regulation.json';
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';

const Regulation = () => {

  return (
    <Section data={{ className: 'regulation'}}>
      { paragraphs.map((item, index) => (
        <RegulationItem key={ index } data={{
          title: item.title, 
          text: item.text,
          anchorId: item.anchorId
        }} />
      ))}
    </Section>
  )
};

const RegulationItem = ({ data }) => {
  return (
    <div className="regulation__item item">
      { data.title && (<Heading data={{ className: 'item__title', level: 'h5'}}>{ data.title }</Heading>) }
      { data.text && (<Paragraph data={{}}>{ data.text }</Paragraph>) }	
      { data.anchorId && (<div className="item__anchor" id={ data.anchorId }></div>) }
    </div>
  )
}

export {
  Regulation
};