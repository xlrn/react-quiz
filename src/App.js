import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import QuestionCount from './components/QuestionCount';
import AnswerOption from './components/AnswerOption';
import quizQuestions from './api/quizQuestions';

class App extends Component {

  construnctor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        nintendo: 0,
        microsoft: 0,
        sony: 0
      },
      result: ''
    };
  }

  componentWillMount() {
    const shhuffledAnswerOptions = quizQuestions,map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shhuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, tempValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {

        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -=1;

        // And swap with current element
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue; 
    }

    return array;
  };

  render() {
   return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
        </div>
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    )
  }
}

export default App;
