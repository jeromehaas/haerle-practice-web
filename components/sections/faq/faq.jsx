import questions from 'components/sections/faq/faq.json'; 
import { useState } from 'react';
import { Heading } from 'components/partials/heading/heading';
import { Section } from 'components/layouts/section/section';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Icon } from 'components/partials/icon/icon';
import { Video } from 'components/partials/video/video';
import { Link } from 'components/partials/link/link';

const Faq = ({ data }) => {
  return (
    <Section data={{ className: 'faq', anchorId: data.anchorId }}>
      <div className="faq__wrapper">
        <Heading data={{ className: 'faq__heading', level: 'h2' }}>Häufig gestellte Fragen</Heading>
        <div className="faq__item-wrapper">
          { questions.map((item, index) =>(
            <FaqItem key={index} data={{
              question: item.question,
              answer: item.answer, 
              index: index + 1,
							video: item.video,
              links: item.links
            }}>
            </FaqItem>
          ))}
        </div>
      </div>
    </Section>
  )
}

const FaqItem = ({ data }) => {

  const [ itemStatus, setItemStatus ] = useState('closed');

  const toggleItemStatus = () => {
    itemStatus === 'closed' ? setItemStatus('open') : setItemStatus('closed');
  }

  return (
    <div className='faq__item item'>
			<span class="item__question question">
   		   <Heading data={{  className: `question__text ${itemStatus === 'open' ? 'question__text--active' : '' }`, level: 'h3', color: 'darkblue', onClick: toggleItemStatus }}>
   		     { data.question }
   		   </Heading>
					{ data.video && (
						<span className="question__tag tag">
						<Icon data={{ className: 'tag__icon', icon: 'play' }} /> 
						<Paragraph data={{ className: 'tag__text' }}>mit Video</Paragraph>
					</span>
						)}
			</span>
      <Icon data={{  icon: 'arrow', className: `item__icon ${itemStatus === 'closed' ? 'item__icon--inverted' : '' }`, onClick: toggleItemStatus }} />
      <Paragraph data={{ className: `item__answer ${itemStatus === 'closed' ? 'item__answer--hidden' : '' }`, onClick: toggleItemStatus }}>
        { data.answer }
      </Paragraph>
			{ console.log(data) }
      { data.video && (
        <Video data={{ className: `item__video ${itemStatus === 'closed' ? 'item__video--hidden' : ''}`, src: data.video.src, poster: data.video.poster, caption: data.video.poster }} /> 
      )}
      { data.links && (
        <div className={`item__links ${itemStatus === 'closed' ? 'item__links--hidden' : '' }`}>
          { data.links && data.links.map((link, index) => (
            <Link key={ index } data={{ className: 'item__link', href: link.href, icon: 'external-link', target: '_blank' }}>{ link.text }</Link> 
          ))}
        </div>
      ) }
    </div>
  )
}

export {
  Faq
}