import React, { useEffect, useState } from 'react';
import { subscribe } from './Event';

function TimerContainer(props) {
  const { questionNum, nextQuestion } = props;
  const [count, setCount] = useState(20);

  const updateCount = () => {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    } else if (questionNum === 20) {
      setCount(0);
    } else {
      nextQuestion();
    }
  };
  useEffect(() => {
    const timer = setInterval(updateCount, 1000);
    subscribe('Next', (data) => {
      setCount(data.detail);
    });
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
        {count}
      </div>
    </div>
  );
}

export default TimerContainer;
