import NextImage from 'next/image';

const Image = ({ data }) => {
  return (
    <div className={`image ${data.className ? data.className : ''}`} ref={ data.ref } >
      { data.src && (
        <NextImage 
          priority
          width={ data.width || 1600 }
          height={ data.height || 900 }
          layout="responsive"
          className={ data.className }
          alt={ data.alt }
          src={ data.src } 
        />
      )}
    </div>
			
  )	
};

export {
  Image
};