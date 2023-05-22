const Details = ({onShow, text}) => {
  return (
    <h4 className="book-h5" onClick={onShow}>{text}</h4>
  )
}

Details.defaultProps = {
  text: 'Details'
}

export default Details;