import React, { useState } from 'react';
import { QUESTIONS_COUNT, TIMER_LIMIT } from '../utils/Constants';
import Answers from './Results';
import { publish } from '../utils/Event';
import QuestionAnswer from './QuestionAnswer';
import Score from './Score';
import TimerContainer from './TimerContainer';

function Quiz({ questions }) {
  const [currentQuestion, updateCurrentQuestion] = useState(questions[0]);
  const [correctResponses, updateCorrectResponses] = useState([]);
  const [wrongResponses, updateWrongresponses] = useState([]);

  const nextQuestion = (question) => {
    if (question.id <= QUESTIONS_COUNT) {
      if (question.correct) {
        updateCorrectResponses([...correctResponses, question]);
      } else {
        updateWrongresponses([...wrongResponses, question]);
      }
      publish('ResetInterval', TIMER_LIMIT);
      if ((question.id) < QUESTIONS_COUNT) {
        updateCurrentQuestion(questions[question.id]);
      } else {
        updateCurrentQuestion({ ...currentQuestion, id: (question.id + 1) });
      }
    }
  };

  const showQuiz = currentQuestion.id <= QUESTIONS_COUNT;

  const renderQuiz = () => (
    <div>
      <TimerContainer
        questionNum={currentQuestion.id}
      />
      <QuestionAnswer
        questionObj={currentQuestion}
        nextQuestion={nextQuestion}
      />
      <Score correctResponse={correctResponses.length} />
    </div>
  );

  const renderResults = () => (
    <div>
      <Score correctResponse={correctResponses.length} />
      <Answers
        answers={correctResponses}
        shouldShowCorrectAnswers
      />
      <Answers
        answers={wrongResponses}
        shouldShowCorrectAnswers={false}
      />
    </div>
  );

  return (
    <div>
      {showQuiz ? renderQuiz() : renderResults()}
    </div>
  );
}

export default Quiz;
