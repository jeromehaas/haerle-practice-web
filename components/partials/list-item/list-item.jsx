// COMPONENT
const ListItem = ({ data, children }) => {

	// RENDER
	return (
		<p className={`list-item ${ data.className ? data.className : '' } ` }>
			{ children }
		</p>
	);

};

// EXPORTS
module.exports = {
	ListItem,
};
