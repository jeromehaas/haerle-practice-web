import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';

const Statement = ({ data }) => {

  return (
    <Section data={{
      className: 'statement'	
    }}>
      <Heading data= {{
        level: 'h1',
        color: 'lightblue',
        className: 'statement__title'
      }}>
        { data.text }
      </Heading>
    </Section>
  )
}

export {
  Statement
};