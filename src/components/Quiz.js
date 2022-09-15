import React, { useState } from 'react';
import ProblemAnswer from './ProblemAnswer';
import Score from './Score';
import TimerContainer from './TimerContainer';

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(1);

  const nextQuestion = () => {
    console.log('Question number before:', questionNumber);
    if (questionNumber < 21) {
      setQuestionNumber(questionNumber + 1);
    }
  };
  return (
    <div>
      <TimerContainer questionNum={questionNumber} nextQuestion={nextQuestion} />
      <ProblemAnswer />
      <Score />
    </div>
  );
}

export default Quiz;
