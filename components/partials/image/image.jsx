// IMPORTS
import NextImage from 'next/image';

// COMPONENT
const Image = ({ data }) => {

	// RENDER
	return (
		<div className={ `image ${data.className ? data.className : ''}` } ref={ data.ref }>
			{ data.src && <NextImage priority width={ data.width || 1600 } height={ data.height || 900 } className={ data.className } alt={ data.alt } src={ data.src } quality={ data.quality || 75 } /> }
		</div>
	);

};

// EXPORTS
export {
	Image,
};
