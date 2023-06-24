import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterCounter from './components/CharacterCounter'

import './App.css'

// Replace your code here
class App extends Component {
  state = {characterList: [], userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAddBtn = () => {
    const {userInput} = this.state
    const newItem = {
      id: uuidv4(),
      userInput,
    }
    this.setState(prev => ({
      characterList: [...prev.characterList, newItem],
      userInput: '',
    }))
  }

  render() {
    const {userInput, characterList} = this.state
    return (
      <div className="main-container">
        <div className="content-container">
          <div className="heading-container">
            <h1 className="content-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          {characterList.length > 0 ? (
            <ul>
              {characterList.map(eachInput => (
                <CharacterCounter eachInput={eachInput} key={eachInput.id} />
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              className="no-input-image"
              alt="no user inputs"
            />
          )}
        </div>
        <div className="input-container">
          <h1 className="counter-heading">Character Counter</h1>
          <form className="input-sub-container">
            <input
              type="text"
              className="user-input"
              value={userInput}
              placeholder="Enter the Characters here"
              onChange={this.onChangeUserInput}
            />
            <button
              type="button"
              className="add-btn"
              onClick={this.onClickAddBtn}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
