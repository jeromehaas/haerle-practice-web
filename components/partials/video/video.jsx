// IMPORTS
import { useRef, useState } from 'react';
import { Paragraph } from 'components/partials/paragraph/paragraph';

// COMPONENT
const Video = ({ data }) => {

	// SETUP REFS
	const videoRef = useRef(null);

	// SETUP STATE
	const [videoStatus, setVideoStatus] = useState('paused');

	// HANDLE PLAY VIDEO
	const handlePlayVideo = () => {
		videoRef.current.play();
		setVideoStatus('playing');
	};

	// HANDLE PAUSE VIDEO
	const handlePauseVideo = () => {
		setVideoStatus('paused');
	};

	// RENDER
	return (
		<div className={ `video ${ data.className }` }>
			<video className="video__video" ref={ videoRef } onPause={ handlePauseVideo } onPlay={ handlePlayVideo } preload="none" poster={ data.poster } controls>
				<source type="video/mp4" src={ data.src } />
			</video>
			<img className={ `video__play-button ${videoStatus === 'playing' ? 'video__play-button--hidden' : '' }` } src="/icon/icon-playbutton.svg" alt="Icon" onClick={ handlePlayVideo } />
			<Paragraph data={ { className: 'video__caption' } }>{ data.caption }</Paragraph>
		</div>
	);

};

// EXPORTS
export {
	Video,
};
