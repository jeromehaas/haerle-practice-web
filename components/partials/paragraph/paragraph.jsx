// COMPONENT
const Paragraph = ({ data, children }) => {

	// RENDER
	return (
		<p className={ `${data.color ? `paragraph--${data.color}` : ''} ${data.className ? data.className : '' } paragraph` } onClick={ data.onClick }>
			{ children }
		</p>
	);

};

// EXPORTS
module.exports = {
	Paragraph,
};
