import { useRef, useState } from 'react'; 

const Video = () => {

  const videoRef = useRef(null);
  const [ videoStatus, setVideoStatus ] = useState('paused');
	
  const handlePlayVideo = () => {
    videoRef.current.play();
    setVideoStatus('playing');
  }

  const handlePauseVideo = () => {
    setVideoStatus('paused');
  }

  return (
    <div className="video">
      <video className="video__video" ref={videoRef} onPause={ handlePauseVideo } preload="none" poster="/videos/schmerzen-verstehen-poster.png" controls>
        <source type="video/mp4" src="/videos/schmerzen-verstehen.mp4" />
      </video>
      <img className={`video__play-button ${videoStatus === 'playing' ? 'video__play-button--hidden' : '' }`} src="/icons/icon-playbutton.svg" onClick={ handlePlayVideo } />
    </div>
  )
};

export {
  Video
};