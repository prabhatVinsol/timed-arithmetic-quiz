import React from 'react';

function Score({ correctResponse }) {
  return (
    <div className="QuizTopText">
      Score --
      {' '}
      {correctResponse}
    </div>
  );
}

export default Score;
