import './index.css'

const ChoiceButton = props => {
  const {details, onUserChoice} = props
  const {id, imageUrl} = details
  //   console.log(details)

  const onUserClick = () => {
    onUserChoice(id)
  }

  console.log(`${id.toLowerCase()}Button`)

  return (
    <button
      data-testid={`${id.toLowerCase()}Button`}
      onClick={onUserClick}
      className="choice-btn"
      type="button"
    >
      <img className="choice-pic" src={imageUrl} alt="" />
    </button>
  )
}

export default ChoiceButton
