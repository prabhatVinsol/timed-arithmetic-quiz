const getRandomOperator = () => {
  const operators = ['+', '-', '*', '/'];
  const opIndex = Math.floor(Math.random() * 4);
  return operators[opIndex];
};
const getRandomNumber = () => Math.floor(Math.random() * 20);
const getQuestion = () => `${getRandomNumber()} ${getRandomOperator()} ${getRandomNumber()}`;

export { getQuestion, getRandomNumber, getRandomOperator };
