import {Component} from 'react'

import ReactPopup from '../ReactPopup'
import ChoiceButton from '../ChoiceButton'
import './index.css'

class GameApp extends Component {
  state = {
    score: 0,
    showPlayingView: true,
    userChoice: '',
    opponentChoice: '',
    result: '',
  }

  renderHeader = () => {
    const {score} = this.state
    return (
      <div className="header-bg">
        <div>
          <h1>
            ROCK
            <br /> PAPPER
            <br /> SCISSORS
            <br />
          </h1>
          <h1 className="blind">Rock Paper Scissors</h1>
        </div>
        <div className="counter-bg">
          <p>Score</p>
          <p className="count">{score}</p>
        </div>
      </div>
    )
  }

  onPlayAgain = () => {
    this.setState({
      showPlayingView: true,
      userChoice: '',
      opponentChoice: '',
      result: '',
    })
  }

  renderResultView = () => {
    const {userChoice, opponentChoice, result} = this.state

    return (
      <div className="result-view-main">
        <div className="pics-container">
          <div className="choice-container">
            <h1 className="result-heading">YOU</h1>
            <img
              className="result-choice-pic"
              src={userChoice}
              alt="your choice"
            />
          </div>
          <div className="choice-container">
            <h1 className="result-heading">OPPONENT</h1>
            <img
              className="result-choice-pic"
              src={opponentChoice}
              alt="opponent choice"
            />
          </div>
        </div>

        <p>{result}</p>

        <button
          onClick={this.onPlayAgain}
          className="play-again-btn"
          type="button"
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  onUserChoice = id => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomNumber].imageUrl

    const userChoice = choicesList.filter(each => each.id === id)

    const userChose = userChoice[0].id
    const opponentChose = choicesList[randomNumber].id

    if (
      (userChose === 'ROCK' && opponentChose === 'SCISSORS') ||
      (userChose === 'SCISSORS' && opponentChose === 'PAPER') ||
      (userChose === 'PAPER' && opponentChose === 'ROCK')
    ) {

      this.setState(prevState => ({
        result: 'YOU WON',
        showPlayingView: false,
        userChoice: userChoice[0].imageUrl,
        opponentChoice,
        score: prevState.score + 1,
      }))
    } else if (userChose === opponentChose) {
  
      this.setState({
        result: 'IT IS DRAW',
        showPlayingView: false,
        userChoice: userChoice[0].imageUrl,
        opponentChoice,
      })
    } else {
      
      this.setState(prevState => ({
        result: 'YOU LOSE',
        showPlayingView: false,
        userChoice: userChoice[0].imageUrl,
        opponentChoice,
        score: prevState.score - 1,
      }))
    }
  }

  renderPlayingView = () => {
    const {choicesList} = this.props

    return (
      <div className="playing-view-main">
        {choicesList.map(each => (
          <ChoiceButton
            key={each.id}
            details={each}
            onUserChoice={this.onUserChoice}
          />
        ))}
      </div>
    )
  }

  render() {
    const {showPlayingView} = this.state

    return (
      <div className="main-bg">
        {this.renderHeader()}
        {showPlayingView ? this.renderPlayingView() : this.renderResultView()}
        <ReactPopup />
      </div>
    )
  }
}

export default GameApp
