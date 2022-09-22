/* eslint no-eval: 0 */
import { MAX_LIMIT } from '../utils/Constants';

export const getRandomNumber = (maxLimit) => Math.floor(Math.random() * maxLimit);

export const getRandomOperator = () => {
  const operators = ['+', '-', '*', '/'];
  const opIndex = getRandomNumber(4);
  return operators[opIndex];
};

export const evaluateQuestion = (firstNumber, secondNumber, operator) => {
  const fNumber = Number(firstNumber);
  const sNumber = Number(secondNumber);

  switch (operator) {
  case '+':
    return fNumber + sNumber;
  case '-':
    return fNumber - sNumber;
  case '*':
    return fNumber * sNumber;
  case '/':
    return fNumber / sNumber;
  default:
    return NaN;
  }
};

export const getQuestion = (number) => {
  const firstNumber = getRandomNumber(MAX_LIMIT);
  const secondNumber = getRandomNumber(MAX_LIMIT);
  const operator = getRandomOperator();
  const questionVal = `${firstNumber} ${operator} ${secondNumber}`;
  const evaluate = evaluateQuestion(firstNumber, secondNumber, operator);
  return {
    question: questionVal,
    id: number,
    answer: evaluate,
    givenAnswer: '',
    correct: false,
  };
};
