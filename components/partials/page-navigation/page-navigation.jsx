// IMPORTS
import { Link } from 'react-scroll';

// COMPONENT
const PageNavigation = ({ data }) => {

	// RENDER
	return (
		<div className={ `page-navigation ${data.className} ` }>
			<p className="page-navigation__title">{data.title}</p>
			<div className="page-navigation__link-wrapper">
				{ data.links.map((link, index) => (
					<Link to={ link.href } className="page-navigation__link" duration={ 500 } smooth key={ index }>
						{link.text}
					</Link>
				))}
			</div>
		</div>
	);
};

// EXPORTS
export {
	PageNavigation,
};
