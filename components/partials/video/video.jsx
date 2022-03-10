import { useRef, useState } from 'react'; 
import { Paragraph } from 'components/partials/paragraph/paragraph';

const Video = ({ data }) => {

  const videoRef = useRef(null);
  const [ videoStatus, setVideoStatus ] = useState('paused');
	
  const handlePlayVideo = () => {
    videoRef.current.play();
    setVideoStatus('playing');
  }

  const handlePauseVideo = () => {
    setVideoStatus('paused');
    console.log('paused')
  }

  return (
    <div className={`video ${ data.className }`}>
      <video className="video__video" ref={videoRef} onPause={ handlePauseVideo } onPlay={ handlePlayVideo } preload="none" poster={ data.poster } controls>
        <source type="video/mp4" src={ data.src } />
      </video>
      <img className={`video__play-button ${videoStatus === 'playing' ? 'video__play-button--hidden' : '' }`} src="/icon/icon-playbutton.svg" onClick={ handlePlayVideo } />
      <Paragraph data={{ className: 'video__caption'}}>{ data.caption }</Paragraph>	
    </div>
  )
};

export {
  Video
};