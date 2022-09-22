import React from 'react';
import { getQuestions } from './Helper';
import Quiz from './Quiz';
import QuizDetail from './QuizDetail';

function QuizInfo() {
  const questions = getQuestions();
  return (
    <div className="QuizContainer">
      <QuizDetail />
      <Quiz questions={questions} />
    </div>
  );
}

export default QuizInfo;
