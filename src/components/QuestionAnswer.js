import React, { useEffect, useState } from 'react';
import { ENTER_KEY, EXECPT_THIS_SYMBOLS } from '../utils/Constants';

const QuestionAnswer = React.forwardRef((props, ref) => {
  const { questionObj, nextQuestion } = props;
  const [inputVal, setInputVal] = useState('');

  const handleOnClick = () => {
    nextQuestion();
  };

  const handleKeypress = (e) => {
    if (e.key === ENTER_KEY) {
      nextQuestion();
    } else if (EXECPT_THIS_SYMBOLS.includes(e.key)) {
      e.preventDefault();
    }
  };

  const onChangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    setInputVal('');
  }, [questionObj]);

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
          onKeyDown={handleKeypress}
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
