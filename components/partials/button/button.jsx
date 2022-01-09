const Button = ({ data, children }) => {

  return (
    <button 
      className={`button ${data.className}`} 
      onClick={data.onClick}
    >{children}</button>
  )
};

export {
  Button
};