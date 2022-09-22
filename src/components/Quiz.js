import React, { useState } from 'react';
import { QUESTIONS_COUNT, TIMER_LIMIT } from '../utils/Constants';
import Answers from './Answers';
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
  const showResults = questionNumber <= QUESTIONS_COUNT;
  const correctResponse = questions.filter((answer) => answer.correct).length;
  return (
    <div>
      {showResults && (
        <div>
          <TimerContainer
            questionNum={questionNumber}
          />
          <QuestionAnswer
            questionNum={questionNumber}
            nextQuestion={nextQuestion}
          />
        </div>
      )}
      <Score correctResponse={correctResponse} />
      {!showResults
      && (
        <Answers
          answers={questions}
          shouldShowCorrectAnswers
        />
      )}
      {!showResults
      && (
        <Answers
          answers={questions}
          shouldShowCorrectAnswers={false}
        />
      )}
    </div>
  );
}

export default Quiz;
