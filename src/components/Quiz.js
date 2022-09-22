import React, { useState } from 'react';
import { QUESTIONS_COUNT, TIMER_LIMIT } from '../utils/Constants';
import Answers from './Results';
import { publish } from '../utils/Event';
import QuestionAnswer from './QuestionAnswer';
import Score from './Score';
import TimerContainer from './TimerContainer';

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState([]);

  const nextQuestion = (question) => {
    if (questionNumber <= QUESTIONS_COUNT) {
      setQuestions([...questions, question]);
      publish('ResetInterval', TIMER_LIMIT);
      setQuestionNumber(questionNumber + 1);
    }
  };

  const showQuiz = questionNumber <= QUESTIONS_COUNT;
  const correctResponse = questions.filter((answer) => answer.correct).length;

  const renderQuiz = () => (
    <div>
      <TimerContainer
        questionNum={questionNumber}
      />
      <QuestionAnswer
        questionNum={questionNumber}
        nextQuestion={nextQuestion}
      />
      <Score correctResponse={correctResponse} />
    </div>
  );

  const renderResults = () => (
    <div>
      <Score correctResponse={correctResponse} />
      <Answers
        answers={questions}
        shouldShowCorrectAnswers
      />
      <Answers
        answers={questions}
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
