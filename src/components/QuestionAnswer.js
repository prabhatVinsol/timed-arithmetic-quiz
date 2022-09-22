import React, { useEffect, useState } from 'react';
import { subscribe } from '../utils/Event';
import { getQuestion } from './Helper';

function QuestionAnswer(props) {
  const { questionNum, nextQuestion } = props;
  const [questionObj, setQuestion] = useState(getQuestion(questionNum));
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    subscribe('NextQuestion', () => {
      nextQuestion(questionObj);
      setQuestion(getQuestion(questionNum + 1));
      setInputVal('');
    });
  }, [questionObj]);

  const handleOnClick = () => {
    nextQuestion(questionObj);
    setQuestion(getQuestion(questionNum + 1));
    setInputVal('');
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      nextQuestion(questionObj);
      setQuestion(getQuestion(questionNum + 1));
      setInputVal('');
    }
  };
  const onChangeHandler = (e) => {
    setQuestion((prevState) => ({
      question: prevState.question,
      id: prevState.id,
      answer: prevState.answer,
      givenAnswer: e.target.value,
      correct: Number(prevState.answer) === Number(e.target.value),
    }));
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
