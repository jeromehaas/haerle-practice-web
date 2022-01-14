const Textarea = ({ data }) => {

  return (
    <div className={`textarea ${ data.hasError ? 'textarea--error' : '' }`}>
      <label className="textarea__label" htmlFor="">Label { data.isRequired ? '*' : '' }</label>
      <p className="textarea__optional">(optional)</p>
      <textarea className="textarea__input" rows={5} placeholder={ data.placeholder } type="text" onChange={ data.onChange } />
      <p className="textarea__error-text">{ data.errorText }</p>
    </div>
  )
};

export {
  Textarea
};