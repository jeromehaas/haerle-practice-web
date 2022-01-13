const Section = ({ data, children }) => {
  return (
    <div className={`section ${data.className ? data.className : '' }`} >
      <div className="section__inner">
        { children }
      </div>
    </div>
  )
};

export {
  Section
};