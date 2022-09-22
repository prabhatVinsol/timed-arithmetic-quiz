import React, { useEffect, useState } from 'react';
import { ENTER_CHARCODE } from '../utils/Constants';

const QuestionAnswer = React.forwardRef((props, ref) => {
  const { questionObj, nextQuestion } = props;
  const [inputVal, setInputVal] = useState('');

  const handleOnClick = () => {
    nextQuestion();
  };

  const handleKeypress = (e) => {
    if (e.charCode === ENTER_CHARCODE) {
      nextQuestion();
    }
  };

  const onChangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    setInputVal('');
  }, [questionObj]);

  const exceptThisSymbols = ['e', 'E', '+'];
  return (
    <div className="ArithmeticContainer">
      <div>
        {questionObj.question}
        <input
          ref={ref}
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
});

export default QuestionAnswer;
