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

  //Check if all questions have been reviewed
  checker = () => {
    if (this.state.tracker === 26) {
      alert('All questions completed')
    }
  }

  //Increase tracker by 1
  trackerAdd = () => {
    this.state.tracker = this.setState({ tracker: this.state.tracker + 1 })
  }

  //Display answer by changing the prop answer
  checkAnswer = () => {
    this.state.answer = this.setState({ answer: !this.state.answer })
  }

  handleOnClick = () => {
    this.checker()
    this.trackerAdd()
  }


  render() {

    return (
      <>
        <h2>Question</h2>
        {this.state.arrayQuestionsAnswer[this.state.tracker][0]}
        <h2>Answer</h2>
        {this.state.answer ? this.state.arrayQuestionsAnswer[this.state.tracker][1] : ""}
        <button onClick={this.checkAnswer}>Answer</button>
        <button onClick={this.handleOnClick}>Next Question</button>
      </>
    )
  }
}





