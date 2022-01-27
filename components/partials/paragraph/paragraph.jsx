const Paragraph = ({ data, children }) => (
  <p className={`${data.color ? `paragraph--${data.color}` : ''} ${data.className ? data.className : '' } paragraph`} onClick={ data.onClick }>
    { children }
  </p>
)

module.exports = {
  Paragraph
};