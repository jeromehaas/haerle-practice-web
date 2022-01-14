import { useState } from 'react';

const FileInput = ({ data }) => {

  const [ fileName, setFileName ] = useState('');

  const handleChange = (event) => {
    if (event.target.files[0]) {
      let fileName = event.target.files[0].name;
      setFileName(fileName);
    }
  }

  return (
    <div className={`file-input ${ data.hasError ? 'file-input--error' : '' }`}>
      <p className="file-input__optional">(optional)</p>
      <input 
        className="file-input__input" 
        type="file" 
        name={ data.name } 
        id={ data.name } 
        readOnly
        onChange={ (event) => handleChange(event) } />
      <input 
        className="file-input__fake-input"
        type="text" 
        value={ fileName }
        readOnly
      />
      <label className="file-input__label" htmlFor={ data.name }>Durchsuchen{ data.isRequired ? '*' : '' }</label>
      <p className="file-input__error-text">{ data.errorText }</p>
    </div>
  )
}

export {
  FileInput
};