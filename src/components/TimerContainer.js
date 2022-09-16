import React from 'react';

function TimerContainer(props) {
  const { questionNum, counter } = props;

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
