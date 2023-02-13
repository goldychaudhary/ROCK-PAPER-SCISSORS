import './index.css'

const ChoiceButton = props => {
  const {details, onUserChoice} = props
  const {id, imageUrl} = details

  const onUserClick = () => {
    onUserChoice(id)
  }

  return (
    <button
      data-testid={`${id.toLowerCase()}Button`}
      onClick={onUserClick}
      className="choice-btn"
      type="button"
    >
      <img className="choice-pic" src={imageUrl} alt={id} />
    </button>
  )
}

export default ChoiceButton
