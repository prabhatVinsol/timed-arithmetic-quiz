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
  const inputRef = React.createRef();

  const nextQuestion = () => {
    const inputVal = inputRef.current.value;
    if (currentQuestion.id <= QUESTIONS_COUNT) {
      const updateCurrentQuestionWithResponse = (
        {
          ...currentQuestion,
          givenAnswer: inputVal === '' ? 'NA' : inputVal,
          correct: inputVal !== '' && Number(currentQuestion.answer) === Number(inputVal),
        });
      if (updateCurrentQuestionWithResponse.correct) {
        updateCorrectResponses([...correctResponses, updateCurrentQuestionWithResponse]);
      } else {
        updateWrongresponses([...wrongResponses, updateCurrentQuestionWithResponse]);
      }
      publish('ResetInterval', TIMER_LIMIT);
      if ((currentQuestion.id) < QUESTIONS_COUNT) {
        updateCurrentQuestion(questions[currentQuestion.id]);
      } else {
        updateCurrentQuestion({ ...currentQuestion, id: (currentQuestion.id + 1) });
      }
    }
    inputRef.current.value = '';
  };

  const showQuiz = currentQuestion.id <= QUESTIONS_COUNT;

  const renderQuiz = () => (
    <div>
      <TimerContainer
        questionNum={currentQuestion.id}
        nextQuestion={nextQuestion}
      />
      <QuestionAnswer
        ref={inputRef}
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
