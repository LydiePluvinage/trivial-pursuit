import './TrivialQuestion.css';
import React, { useState } from 'react';

const TrivialQuestion = (props) => {
  const [answerGiven, setAnswerGiven] = useState(false);

  function styleAnswer(correctAnswer) {
    return answerGiven
      ? correctAnswer
        ? { backgroundColor: 'green' }
        : { backgroundColor: 'red' }
      : { backgroundColor: 'blueviolet' };
  }

  return (
    <div className="game">
      <div className="game__question">{props.question}</div>

      <ul className="game__answers"></ul>
      {props.answers.map((item, i) => (
        <li
          className="game__answer"
          key={i}
          onClick={() => setAnswerGiven(true)}
          style={styleAnswer(item.correct)}
        >
          {item.text}
        </li>
      ))}
    </div>
  );
};

export default TrivialQuestion;
