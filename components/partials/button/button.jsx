const Button = ({ data, children }) => {

  return (
    <button 
      className={`button ${data.className}`} 
      href={ data.onClick }
      onClick={data.onClick}
    >{children}</button>
  )
};

export {
  Button
};