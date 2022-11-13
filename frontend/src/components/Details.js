import PropTypes from 'prop-types';

const Details = ({onShow, text}) => {
  return (
    <h4 className="book-h5" onClick={onShow}>{text}</h4>
  )
}

Details.defaultProps = {
  text: 'Details'
}

Details.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  onShow: PropTypes.func
}

export default Details