import React, { useState } from 'react';
import { publish } from './Event';
import ProblemAnswer from './QuestionAnswer';
import Score from './Score';
import TimerContainer from './TimerContainer';

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const nextQuestion = () => {
    if (questionNumber < 20) {
      publish('Next', 20);
      setQuestionNumber(questionNumber + 1);
    }
  };
  return (
    <div>
      <TimerContainer
        questionNum={questionNumber}
        nextQuestion={nextQuestion}
      />
      <ProblemAnswer nextQuestion={nextQuestion} />
      <Score />
    </div>
  );
}

export default Quiz;
