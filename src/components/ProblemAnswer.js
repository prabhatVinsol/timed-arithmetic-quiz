import React from 'react';

function ProblemAnswer() {
  return (
    <div className="ArithmeticContainer">
      <div>
        Question
        <input type="number" className="Input" />
      </div>
      <div className="ButtonContainer">
        <button type="button" className="Next" onClick={() => console.log('Next clicked')}>Next</button>
      </div>
    </div>
  );
}

export default ProblemAnswer;
