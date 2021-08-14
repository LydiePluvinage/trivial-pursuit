import axios from 'axios';
import './TrivialGame.css';
import TrivialQuestion from './TrivialQuestion';
import React, { useEffect, useState } from 'react';

const TrivialGame = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // fetches questions from Trivial Pursuit API and stores them in questions state for display
    const getQuestions = async () => {
      const results = await axios.get(
        'https://opentdb.com/api.php?amount=10&category=17&type=multiple'
      );
      let questionsList = [];
      questionsList.push(
        results.data.results.map((myresult) => {
          let answers;

          const question = {
            category: myresult.category,
            question: myresult.question,
          };

          answers = [{ text: myresult.correct_answer, correct: true }];

          //add incorrect questions and shuffle
          for (var i = 0; i < myresult.incorrect_answers.length; i++) {
            answers.push({ text: myresult.incorrect_answers[i] });
          }
          console.log(answers);
          shuffleArray(answers);
          console.log(answers);

          question.answers = answers;
          console.log(question.answers);

          return question;
        })
      );
      setQuestions(questionsList[0]);
    };

    //shuffles the array of answers
    const shuffleArray = (array) => {
      console.log(array);
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    };

    getQuestions();
  }, []);

  return (
    <>
      {questions.map((question) => (
        <TrivialQuestion
          question={question.question}
          answers={question.answers}
        />
      ))}
    </>
  );
};

export default TrivialGame;
