import { getAnswerUser, printQuestion } from '../cli.js';
import genRandomNumber from '../helpers.js';

const rule = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomExpression = () => {
  const operandOne = genRandomNumber(1, 100);
  const operandTwo = genRandomNumber(1, 10);
  const operationsLength = Object.keys(operations).length;
  const randomOperationIndex = genRandomNumber(0, operationsLength - 1);
  const [operator, calculate] = Object.entries(operations)[randomOperationIndex];
  const expression = `${operandOne} ${operator} ${operandTwo}`;
  const result = calculate(operandOne, operandTwo);
  return [result, expression];
};

const game = () => {
  const [result, expression] = getRandomExpression();

  printQuestion(expression);
  const userAnswer = parseInt(getAnswerUser(), 10);

  return [userAnswer === result, userAnswer, result];
};

export default { game, rule };
