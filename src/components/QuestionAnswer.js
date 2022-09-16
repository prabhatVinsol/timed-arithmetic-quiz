import React, { useEffect } from 'react';
import { subscribe } from './Event';
import { getQuestion } from './Helper';

function QuestionAnswer(props) {
  const { nextQuestion } = props;

  useEffect(() => {
    subscribe('NextQuestion', () => {
      nextQuestion();
    });
  });
  const handleOnClick = () => {
    nextQuestion();
  };
  return (
    <div className="ArithmeticContainer">
      <div>
        {getQuestion()}
        <input type="number" className="Input" />
      </div>
      <div className="ButtonContainer">
        <button type="button" className="Next" onClick={handleOnClick}>Next</button>
      </div>
    </div>
  );
}

export default QuestionAnswer;
