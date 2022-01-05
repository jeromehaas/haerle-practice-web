const Paragraph = ({ data, children }) => (
  <p className={`paragraph paragraph--${data.color || 'red'}`}>
    { children }
  </p>
)

module.exports = {
  Paragraph
};