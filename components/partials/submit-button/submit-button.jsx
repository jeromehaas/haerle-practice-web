const SubmitButton = ({ data }) => {

  return (
    <input 
      type='submit' 
      value={ data.text }
      className={`button ${ data.className }`}	
    />
  )

}

export {
  SubmitButton
};