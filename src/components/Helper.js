/* eslint no-eval: 0 */
const getRandomOperator = () => {
  const operators = ['+', '-', '*', '/'];
  const opIndex = Math.floor(Math.random() * 4);
  return operators[opIndex];
};
const getRandomNumber = () => Math.floor(Math.random() * 20);
const getQuestion = (number) => {
  const questionVal = `${getRandomNumber()} ${getRandomOperator()} ${getRandomNumber()}`;
  const evaluate = eval(questionVal);
  return {
    question: questionVal,
    id: number,
    answer: evaluate,
    givenAnswer: '',
    correct: false,
  };
};

export { getQuestion, getRandomNumber, getRandomOperator };
