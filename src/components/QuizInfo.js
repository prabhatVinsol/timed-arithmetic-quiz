import React from 'react';
import Quiz from './Quiz';
import QuizDetail from './QuizDetail';

function QuizInfo() {
  return (
    <div className="QuizContainer">
      <QuizDetail />
      <Quiz />
    </div>
  );
}

export default QuizInfo;
