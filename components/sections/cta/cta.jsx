import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Button } from 'components/partials/button/button';

const CTA = ({ data }) => {

  return (
    <Section data={{
      className: 'cta'
    }}>
      <div className="cta__wrapper">

        <Heading data={{
          className: 'cta__title',
          level: 'h4',
          color: 'lightblue'
        }}>{ data.title }</Heading>
        <Paragraph data={{ 
          className: 'cta__text'
        }}>{ data.text }</Paragraph>
        <Button data={{
          className: 'cta__button'
        }}>{ data.buttonText }</Button>
      </div>
    </Section>
  )
};

export {
  CTA
};