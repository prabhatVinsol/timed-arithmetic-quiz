import React, { useEffect, useState } from 'react';
import { QUESTIONS_COUNT, TIMER_DURATION, TIMER_LIMIT } from '../utils/Constants';
import { publish, subscribe } from '../utils/Event';

function TimerContainer({ questionNum }) {
  const [count, setCount] = useState(TIMER_LIMIT);

  const updateCount = () => {
    subscribe('ResetInterval', (data) => {
      setCount(data.detail);
    });
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    } else if (questionNum === QUESTIONS_COUNT) {
      setCount(0);
      publish('NextQuestion');
    } else {
      publish('NextQuestion');
    }
  };
  useEffect(() => {
    const timer = setInterval(updateCount, TIMER_DURATION);

    return () => clearInterval(timer);
  }, [count]);

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
