const TextInput = ({ data }) => {

  return (
    <div className={`text-input ${ data.hasError ? 'text-input--error' : '' }`}>
      <label className="text-input__label" htmlFor="">Label { data.isRequired ? '*' : '' }</label>
      <p className="text-input__optional">(optional)</p>
      <input className="text-input__input" placeholder={ data.placeholder } type="text" onChange={ data.onChange } />
      <p className="text-input__error-text">{ data.errorText }</p>
    </div>
  )
};

export {
  TextInput
};