const Heading= ({ data, children }) => {
  switch ( data.level ) {
  case 'h1': return <h1 className={`${ data.color ? `heading heading--${ data.color }` : ''} heading--${ data.level} ${ data.className ? data.className : '' }` } onClick={ data.onClick }>{ children }</h1>
  case 'h2': return <h2 className={`${ data.color ? `heading heading--${ data.color }` : ''} heading--${ data.level} ${ data.className ? data.className : '' }` } onClick={ data.onClick }>{ children }</h2>
  case 'h3': return <h3 className={`${ data.color ? `heading heading--${ data.color }` : ''} heading--${ data.level} ${ data.className ? data.className : '' }` } onClick={ data.onClick }>{ children }</h3>
  case 'h4': return <h4 className={`${ data.color ? `heading heading--${ data.color }` : ''} heading--${ data.level} ${ data.className ? data.className : '' }` } onClick={ data.onClick }>{ children }</h4>
  case 'h5': return <h5 className={`${ data.color ? `heading heading--${ data.color }` : ''} heading--${ data.level} ${ data.className ? data.className : '' }` } onClick={ data.onClick }>{ children }</h5>
  default: return <h1 className={`${ data.color ? `heading heading--${ data.color }`: ''} heading--${ data.level} ${ data.className ? data.className : '' }` } onClick={ data.onClick }>{ children }</h1>
  }
}

module.exports = {
  Heading
}