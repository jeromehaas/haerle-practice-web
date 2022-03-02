import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Button } from 'components/partials/button/button';

const Error = ({ data }) => {

  return (
      <Section data={{ className: 'error' }}>
				<Heading data={{ className: 'error__title', level: 'h2' }}>
					{ data.title }
				</Heading>	
				<Paragraph data={{ className: 'error__text' }}>
					{ data.text }
				</Paragraph>
				<Button data={{ href: data.button.href }}>
					{ data.button.text }
				</Button>
      </Section>
  )
}

export {
  Error
};