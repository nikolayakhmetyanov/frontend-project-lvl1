import { getAnswerUser, printQuestion } from '../cli.js';
import getRandomNumber from '../helpers.js';

const settings = {
  regulation: 'What is the result of the expression?',
  countQuestions: 3,
};

const getRandomExpression = () => {
  const operation = getRandomNumber();
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  let result;
  let expression;

  if (operation % 5 === 0) {
    result = num1 * num2;
    expression = `${num1} * ${num2}`;
  } if (operation % 2 === 0) {
    result = num1 + num2;
    expression = `${num1} + ${num2}`;
  } else {
    result = num1 - num2;
    expression = `${num1} - ${num2}`;
  }

  return [parseInt(result, 10), expression];
};

const game = () => {
  const [result, expression] = getRandomExpression();

  printQuestion(expression);
  const userAnswer = parseInt(getAnswerUser(), 10);

  return [userAnswer === result, userAnswer, result];
};

export { game, settings };
