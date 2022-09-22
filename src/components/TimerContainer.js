import React, { useEffect, useState } from 'react';
import { publish, subscribe } from '../utils/Event';

function TimerContainer(props) {
  const { questionNum } = props;
  const [count, setCount] = useState(20);

  const updateCount = () => {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    } else if (questionNum === 20) {
      setCount(0);
      publish('NextQuestion');
    } else {
      publish('NextQuestion');
    }
  };
  useEffect(() => {
    const timer = setInterval(updateCount, 1000);
    subscribe('ResetInterval', (data) => {
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
