import React, { useEffect, useState } from 'react';

function TimerContainer(props) {
  const { questionNum, nextQuestion } = props;
  const [counter, setTimerCounter] = useState(20);
  // console.log(nextQuestion);
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        setTimerCounter(counter - 1);
      } else {
        nextQuestion();
        setTimerCounter(20);
      }
    }, 1000);

    return () => clearInterval(timer);
  });
  return (
    <div className="QuizDetail">
      <div className="QuizTopText">
        Question No.-
        {' '}
        {questionNum}
      </div>
      <div className="QuizTopText">
        Time Left-
        {' '}
        {counter}
      </div>
    </div>
  );
}

export default TimerContainer;
