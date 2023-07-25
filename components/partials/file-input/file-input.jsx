// IMPORTS
import { useState } from 'react';

// COMPONENT
const FileInput = ({ data }) => {

	// SETUP STATE
	const [fileName, setFileName] = useState('');

	// HANDLE CHANGE
	const handleChange = (event) => {
		if (event.target.files[0]) setFileName(event.target.files[0].name);
	};

	// RENDER
	return (
		<div className={ `file-input ${ data.className } ${ data.hasError ? 'file-input--error' : '' }` }>
			<label className="file-input__label" htmlFor="">{ data.label } { data.isRequired ? '*' : '' }</label>
			<p className="file-input__optional">(optional)</p>
			<input className="file-input__input" type="file" name={ data.name } id={ data.name } readOnly value={ data.value } onChange={ (event) => handleChange(event) } />
			<input className="file-input__fake-input" type="text" value={ fileName } readOnly />
			<label className="file-input__button" htmlFor={ data.name }>Durchsuchen{ data.isRequired ? '*' : '' }</label>
			<p className="file-input__error-text">{ data.errorText }</p>
		</div>
	);
};

// EXPORTS
export {
	FileInput,
};
