import './App.css';
import questionAnswer from './QA-interview';
import React, { Component } from 'react'


//Shuffle array of QA prior to react ...
const shuffleArray = (arrayOfItems) => {
  for (let i = 0; i < arrayOfItems.length; i++) {
    let randomNumber = Math.floor(Math.random() * arrayOfItems.length)
    let currentElement = arrayOfItems[i]
    arrayOfItems[i] = arrayOfItems[randomNumber]
    arrayOfItems[randomNumber] = currentElement
  }
  return arrayOfItems
}

const shuffle = shuffleArray(questionAnswer)

//////////////////////////////////////////////

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tracker: 0,
      arrayQuestionsAnswer: shuffle,
      answer: false
    }
  }


  //Increase tracker by 1
  trackerAdd = () => {
    this.setState({ tracker: this.state.tracker + 1, answer: this.state.answer ? !this.state.answer : this.state.answer })
  }

  //Display answer by changing the prop answer
  checkAnswer = () => {
    this.setState({ answer: !this.state.answer })
  }

  handleOnClick = () => {
    if (this.state.tracker === this.state.arrayQuestionsAnswer.length - 1) {
      alert('All questions completed, please refresh the page')
      return console.log('Refresh page')
    }

    this.trackerAdd()
  }


  render() {

    return (
      <>
        <h1>Play the Interview Game</h1>
        <h2>You are on question {this.state.tracker + 1} of {this.state.arrayQuestionsAnswer.length} questions</h2>
        <div className="App-container">
          <h2 class="fs-2">Question</h2>
          <div class="fs-3">{this.state.arrayQuestionsAnswer[this.state.tracker][0]}</div>
        </div>
        <div className="card-body">
          <h2 class="fs-2">Answer</h2>
          <div class="fs-3">{this.state.answer ? this.state.arrayQuestionsAnswer[this.state.tracker][1] : ""}</div>
          <button type="button" className="btn btn-primary btn-lg" styles={"color: white;"} onClick={this.checkAnswer}>Show Answer</button>
          <button type="button" className="btn btn-success btn-lg" onClick={this.handleOnClick}>Next Question</button>
        </div>
      </>
    )
  }
}





