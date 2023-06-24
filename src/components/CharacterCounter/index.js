import './index.css'

const CharacterCounter = props => {
  const {eachInput} = props
  const {userInput} = eachInput

  return (
    <li className="list-item">
      <p>
        {userInput}: {userInput.length}
      </p>
    </li>
  )
}

export default CharacterCounter
