const Paragraph = ({ data, children }) => (
  <p className={`paragraph paragraph--${data.color || ''} ${data.className ? data.className : '' }`} onClick={ data.onClick }>
    { children }
  </p>
)

module.exports = {
  Paragraph
};