const PageNavigation = ({ data }) => {
	
  return (
    <div className={`page-navigation ${data.className} `}>
      <p className="page-navigation__title">{data.title}</p>
      <div className="page-navigation__link-wrapper">
        { data.links.map((link, index) => (
          <a className="page-navigation__link" href={ link.href } key={index}>{link.text}</a>
        ))}
      </div>
    </div>
  )
};

export {
  PageNavigation
};