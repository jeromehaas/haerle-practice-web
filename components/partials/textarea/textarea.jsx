// COMPONENT
const Textarea = ({ data }) => {

	// RENDER
	return (
		<div className={ `textarea ${data.className} ${ data.hasError ? 'textarea--error' : '' }` }>
			<label className="textarea__label" htmlFor="">{ data.label } { data.isRequired ? '*' : '' }</label>
			{ data.isRequired === false ? (
				<p className="textarea__optional">(optional)</p>
			) : null }
			<textarea className="textarea__input" rows={ 5 } placeholder={ data.placeholder } type="text" name={ data.name } value={ data.value } onChange={ data.onChange } readOnly={ data.readOnly || false} />
			<p className="textarea__error-text">{ data.errorText }</p>
		</div>
	);

};

// EXPORTS
export {
	Textarea,
};
