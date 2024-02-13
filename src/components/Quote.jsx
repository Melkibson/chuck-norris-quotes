import PropTypes from 'prop-types'
import styled from 'styled-components'
export default function Quote({quote}) {
  const Paragraph = styled.p`
    font-size: 1rem;
    font-family: 'Akkurat';
    padding: 1em 0;
    text-align: center;
    padding-bottom: 1em;
  `
  return (
    <Paragraph>
      {quote}
    </Paragraph>
  )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
}