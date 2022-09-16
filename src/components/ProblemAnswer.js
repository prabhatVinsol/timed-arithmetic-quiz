import React from 'react';
import { getQuestion } from './Helper';

function ProblemAnswer(props) {
  const { nextQuestion } = props;
  return (
    <div className="ArithmeticContainer">
      <div>
        {getQuestion()}
        <input type="number" className="Input" />
      </div>
      <div className="ButtonContainer">
        <button type="button" className="Next" onClick={() => nextQuestion()}>Next</button>
      </div>
    </div>
  );
}

export default ProblemAnswer;
