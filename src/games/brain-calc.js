import { getAnswerUser, printQuestion } from '../cli';
import { getRandomInt } from '../helpers.js';

const settings = {
  regulation: 'What is the result of the expression?',
  countQuestions: 3,
};

const getRandomExpression = () => {
  const operation = getRandomInt();
  const num1 = getRandomInt();
  const num2 = getRandomInt();

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
  const correctAnswer = result;

  printQuestion(expression);
  const userAnswer = parseInt(getAnswerUser(), 10);

  return [userAnswer === result, userAnswer, correctAnswer];
};

export { game, settings };
