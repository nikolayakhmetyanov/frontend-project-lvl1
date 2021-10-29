import { getAnswerUser, printQuestion } from '../cli.js';
import genRandomNumber from '../helpers.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = () => {
  const num1 = genRandomNumber(0, 100);
  const num2 = genRandomNumber(0, 100);
  const [max, min] = num1 > num2 ? [num1, num2] : [num2, num1];

  let result;

  if (max % min === 0) {
    result = min;
  } else {
    let divider = min - 1;
    while (divider > 1) {
      if (max % divider === 0 && min % divider === 0) {
        break;
      }
      divider -= 1;
    }
    result = divider;
  }

  return [parseInt(result, 10), `${num1} ${num2}`];
};

const game = () => {
  const [result, expression] = getGcd();

  printQuestion(expression);
  const userAnswer = getAnswerUser();

  return [parseInt(userAnswer, 10) === result, userAnswer, result];
};

export default { game, rule };
