import PropTypes from 'prop-types'
export default function Quote({quote}) {
  return (
    <p>
      {quote}
    </p>
  )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
}