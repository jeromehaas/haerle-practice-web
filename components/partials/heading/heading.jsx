const Heading= ({ data, children }) => {
  switch ( data.level ) {
  case 'h1': return <h1 className={`heading heading--${ data.color } heading--${ data.level} ${ data.className ? data.className : '' }` }>{ children }</h1>
  case 'h2': return <h2 className={`heading heading--${ data.color } heading--${ data.level} ${ data.className ? data.className : '' }` }>{ children }</h2>
  case 'h3': return <h3 className={`heading heading--${ data.color } heading--${ data.level} ${ data.className ? data.className : '' }` }>{ children }</h3>
  case 'h4': return <h4 className={`heading heading--${ data.color } heading--${ data.level} ${ data.className ? data.className : '' }` }>{ children }</h4>
  default: return <h1 className={`heading heading--${ data.color } heading--${ data.level} ${ data.className ? data.className : '' }` }>{ children }</h1>
  }
}

module.exports = {
  Heading
}