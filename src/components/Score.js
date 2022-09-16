import React from 'react';

function Score(props) {
  const { answers } = props;
  const correctAnswers = answers.filter((answer) => answer.correct);
  return (
    <div className="QuizTopText">
      Score --
      {' '}
      {correctAnswers.length}
    </div>
  );
}

export default Score;
