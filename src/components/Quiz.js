import React, { useState } from 'react';
import Answers from './Answers';
import { publish } from './Event';
import QuestionAnswer from './QuestionAnswer';
import Score from './Score';
import TimerContainer from './TimerContainer';

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const nextQuestion = (question) => {
    if (questionNumber < 21) {
      setQuestions([...questions, question]);
      publish('ResetInterval', 20);
      setQuestionNumber(questionNumber + 1);
    }
  };
  const shouldShowQuiz = questionNumber < 21;
  return (
    <div>
      {shouldShowQuiz && (
        <TimerContainer
          questionNum={questionNumber}
          nextQuestion={nextQuestion}
        />
      )}
      {shouldShowQuiz && (
        <QuestionAnswer
          questionNum={questionNumber}
          nextQuestion={nextQuestion}
        />
      )}
      <Score answers={questions} />
      {!shouldShowQuiz
      && (
        <Answers
          answers={questions}
          shouldShowCorrectAnswers
        />
      )}
      {!shouldShowQuiz
      && (
        <Answers
          answers={questions}
          shouldShowCorrectAnswers={false}
        />
      )}
    </div>
  );
}

export default Quiz;
