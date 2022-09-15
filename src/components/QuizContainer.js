import React from 'react';
import Quiz from './Quiz';
import QuizDetail from './QuizDetail';

function QuizContainer() {
  return (
    <div className="QuizContainer">
      <QuizDetail />
      <Quiz />
    </div>
  );
}

export default QuizContainer;
