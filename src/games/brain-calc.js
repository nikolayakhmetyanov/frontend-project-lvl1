import readlineSync from 'readline-sync';
import getRandomInt from '../helpers/helpers.js';

const regulation = 'What is the result of the expression?';
const check = (num, answer, name) => {
  if (parseInt(answer, 10) === num) {
    return [true, 'Correct!'];
  }

  return [false, `'${answer}' is wrong answer ;(. Correct answer was '${num}'.\nLet's try again, ${name}!`];
};
const getRandomExpression = () => {
  const operation = getRandomInt();
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const result = {};

  if (operation % 5 === 0) {
    result.resNum = num1 * num2;
    result.expression = `${num1} * ${num2}`;
  } if (operation % 2 === 0) {
    result.resNum = num1 + num2;
    result.expression = `${num1} + ${num2}`;
  } else {
    result.resNum = num1 - num2;
    result.expression = `${num1} - ${num2}`;
  }

  return result;
};

const game = (name) => {
  const { resNum, expression } = getRandomExpression();
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');

  return check(resNum, answer, name);
};

export { game, regulation };
