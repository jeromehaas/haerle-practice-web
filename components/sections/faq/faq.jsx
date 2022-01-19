import questions from 'components/sections/faq/faq.json'; 
import { useState } from 'react';
import { Heading } from 'components/partials/heading/heading';
import { Section } from 'components/layouts/section/section';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Icon } from 'components/partials/icon/icon';
import { Video } from 'components/partials/video/video';
import { Link } from 'components/partials/link/link';

const Faq = () => {
  return (
    <Section data={{ className: 'faq' }}>
      <div className="faq__wrapper">

        <Heading data={{ className: 'faq__heading', level: 'h2' }}>Häufig gestellte Fragen</Heading>
        <div className="faq__item-wrapper">
          { questions.map((item, index) =>(
            <FaqItem key={index} data={{
              question: item.question,
              answer: item.answer, 
              index: index + 1,
              videoSrc: item.videoSrc,
              videoPoster: item.videoPoster,
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
    <div className='faq__item'>
      <Paragraph data={{ className: 'faq__item-index', color: 'lightblue', onClick: toggleItemStatus }}>
        { data.index < 10  ? `0${ data.index }` : data.index }
      </Paragraph>
      <Heading data={{  className: 'faq__item-question', level: 'h3', color: 'lightblue', onClick: toggleItemStatus }}>
        { data.question }
      </Heading>
      <Icon data={{  icon: 'arrow', className: `faq__item-icon ${itemStatus === 'closed' ? 'faq__item-icon--inverted' : '' }`, onClick: toggleItemStatus }} />
      <Paragraph data={{ className: `faq__item-answer ${itemStatus === 'closed' ? 'faq__item-answer--hidden' : '' }`, onClick: toggleItemStatus }}>
        { data.answer }
      </Paragraph>
      { data.videoSrc && <Video data={{ className: `faq__item-video ${itemStatus === 'closed' ? 'faq__item-video--hidden' : ''}`, src: '/videos/schmerzen-verstehen.mp4', poster: '/videos/schmerzen-verstehen-poster.png'}} /> }
      { data.links && (
        <div className={`faq__item-links ${itemStatus === 'closed' ? 'faq__item-links--hidden' : '' }`}>
          { data.links && data.links.map((link, index) => (
            <Link key={ index } data={{ className: 'faq__item-link', href: '#', icon: 'external-link' }}>{ link.text }</Link> 
          ))}
        </div>
      ) }
    </div>
  )
}

export {
  Faq
}