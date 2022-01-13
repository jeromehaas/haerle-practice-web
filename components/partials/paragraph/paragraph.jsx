const Paragraph = ({ data, children }) => (
  <p className={`paragraph paragraph--${data.color || ''} ${data.className ? data.className : '' }`}>
    { children }
  </p>
)

module.exports = {
  Paragraph
};