// COMPONENT
const TextInput = ({ data }) => {

	// RENDER
	return (
		<div className={ `text-input ${data.className} ${ data.hasError ? 'text-input--error' : '' }` }>
			<label className="text-input__label" htmlFor="">{ data.label } { data.isRequired ? '*' : '' }</label>
			<p className="text-input__optional">{ !data.isRequired ? '(optional)' : '' }</p>
			<input className="text-input__input" placeholder={ data.placeholder } type="text" value={ data.value } name={ data.name } onChange={ data.onChange } />
			<p className="text-input__error-text">{ data.errorText }</p>
		</div>
	);

};

// EXPORTS
export {
	TextInput,
};
