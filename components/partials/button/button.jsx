// IMPORTS
import Link from 'next/link';

// COMPONENT
const Button = ({ data, children }) => {

	// RENDER
	return (
		<Link className={ `button ${data.className}` } onClick={ data.onClick } href={ data.href || '#' }>
			{children}
		</Link>
	);

};

// EXPORTS
export {
	Button,
};
