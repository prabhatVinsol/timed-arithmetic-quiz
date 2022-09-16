import React, { useState } from 'react';
import { publish } from './Event';
import ProblemAnswer from './QuestionAnswer';
import Score from './Score';
import TimerContainer from './TimerContainer';

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const nextQuestion = (question) => {
    if (questionNumber < 20) {
      setQuestions([...questions, question]);
      publish('ResetInterval', 20);
      setQuestionNumber(questionNumber + 1);
    }
  };
  return (
    <div>
      <TimerContainer
        questionNum={questionNumber}
        nextQuestion={nextQuestion}
      />
      <ProblemAnswer
        questionNum={questionNumber}
        nextQuestion={nextQuestion}
      />
      <Score answers={questions} />
    </div>
  );
}

export default Quiz;
