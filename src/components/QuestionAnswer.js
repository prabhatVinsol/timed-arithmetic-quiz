import React, { useEffect, useState } from 'react';
import { ENTER_CHARCODE } from '../utils/Constants';
import { subscribe } from '../utils/Event';

function QuestionAnswer(props) {
  const { questionObj, nextQuestion } = props;
  const [inputVal, setInputVal] = useState('');

  const getQuestionWithResponse = () => ({
    ...questionObj,
    givenAnswer: inputVal,
    correct: inputVal !== '' && Number(questionObj.answer) === Number(inputVal),
  });

  const handleNextQuestionResquest = () => {
    nextQuestion(getQuestionWithResponse());
    setInputVal('');
  };

  useEffect(() => {
    subscribe('NextQuestion', () => {
      handleNextQuestionResquest();
    });
  }, []);

  const handleOnClick = () => {
    handleNextQuestionResquest();
  };

  const handleKeypress = (e) => {
    if (e.charCode === ENTER_CHARCODE) {
      handleNextQuestionResquest();
    }
  };

  const onChangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const exceptThisSymbols = ['e', 'E', '+'];
  return (
    <div className="ArithmeticContainer">
      <div>
        {questionObj.question}
        <input
          type="number"
          className="Input"
          value={inputVal}
          onChange={onChangeHandler}
          onKeyPress={handleKeypress}
          onKeyDown={(e) => exceptThisSymbols.includes(e.key) && e.preventDefault()}
        />
      </div>
      <div className="ButtonContainer">
        <button
          type="button"
          className="Next"
          onClick={handleOnClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionAnswer;
