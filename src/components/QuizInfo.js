import React from 'react';
import { getQuestions } from '../helper/quiz';
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
