import React, { useEffect, useState } from 'react';
import { ENTER_CHARCODE } from '../utils/Constants';
import { subscribe } from '../utils/Event';
import { getQuestion } from './Helper';

function QuestionAnswer(props) {
  const { questionNum, nextQuestion } = props;
  const [questionObj, updateQuestionWithResponse] = useState(getQuestion(questionNum));
  const [inputVal, setInputVal] = useState('');

  const getQuestionWithResponse = () => ({
    ...questionObj,
    givenAnswer: inputVal,
    correct: inputVal !== '' && Number(questionObj.answer) === Number(inputVal),
  });

  const handleNextQuestionResquest = () => {
    nextQuestion(getQuestionWithResponse());
    updateQuestionWithResponse(getQuestion(questionNum + 1));
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
