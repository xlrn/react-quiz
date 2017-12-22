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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Quiz</h1>
        </header>
        <p className="App-intro">
          <Question content="What is your favourite food?" />
        </p>
      </div>
    );
  }
}

export default App;
