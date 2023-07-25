// COMPONENT
const SubmitButton = ({ data }) => {

	// RENDER
	return (
		<input type="submit" value={ data.text } className={ `button ${ data.className }` } />
	);

};

// EXPORTS
export {
	SubmitButton,
};
