const Section = ({ data, children }) => {
  return (
    <div className={`section ${data.className ? data.className : '' }`} >
      <div className={`section__inner ${data.className ? `${data.className}__inner` : '' } `}>
        { children }
      </div>
    </div>
  )
};

export {
  Section
};