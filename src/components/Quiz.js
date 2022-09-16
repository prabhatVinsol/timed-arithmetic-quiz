import React, { useEffect, useState } from 'react';
import ProblemAnswer from './ProblemAnswer';
import Score from './Score';
import TimerContainer from './TimerContainer';

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [counter, setTimerCounter] = useState(20);
  const nextQuestion = () => {
    if (questionNumber < 20) {
      setTimerCounter(20);
      setQuestionNumber(questionNumber + 1);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 1) {
        setTimerCounter(counter - 1);
      } else {
        nextQuestion();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [counter]);
  return (
    <div>
      <TimerContainer
        questionNum={questionNumber}
        counter={counter}
      />
      <ProblemAnswer nextQuestion={nextQuestion} />
      <Score />
    </div>
  );
}

export default Quiz;
