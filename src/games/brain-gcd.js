import readlineSync from 'readline-sync';
import getRandomInt from '../helpers/helpers.js';

const regulation = 'Find the greatest common divisor of given numbers.';
const check = (num, answer, name) => {
  if (parseInt(answer, 10) === num) {
    return [true, 'Correct!'];
  }

  return [false, `'${answer}' is wrong answer ;(. Correct answer was '${num}'.\nLet's try again, ${name}!`];
};
const sortMaxToMin = (num1, num2) => (num1 > num2 ? [num1, num2] : [num2, num1]);

const getGcd = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const [max, min] = sortMaxToMin(num1, num2);
  const result = {};

  if (max % min === 0) {
    result.resNum = min;
  } else {
    let divider = min - 1;
    while (divider > 1) {
      if (max % divider === 0 && min % divider === 0) {
        break;
      }
      divider -= 1;
    }
    result.resNum = divider;
  }

  result.expression = `${num1} ${num2}`;

  return result;
};

const game = (name) => {
  const { resNum, expression } = getGcd();
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');

  return check(resNum, answer, name);
};

export { game, regulation };
