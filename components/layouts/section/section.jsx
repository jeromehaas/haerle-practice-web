import Reveal from 'react-reveal/Reveal';
import { keyframes } from '@emotion/react';

const Section = ({ data, children }) => {

  const moveDown = keyframes`
 	 from { opacity: 0; }
 	 to { opacity: 1; }
`;

  return (
    <Reveal keyframes={moveDown} triggerOnce>
      <div className={`section ${data.className ? data.className : '' }`} >
        <div className={`section__inner ${data.className ? `${data.className}__inner` : '' } `}>
          { children }
        </div>
        <div className="section__anchor" id={ data.anchorId }></div>
      </div>
    </Reveal>
  )
};

export {
  Section
};