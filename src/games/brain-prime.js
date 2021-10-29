import { printQuestionGetAnswer } from '../cli.js';
import genRandomNumber from '../helpers.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let result = 'yes';
  let i = 2;

  while (i < num / 2) {
    if (num % i === 0) {
      result = 'no';
      break;
    }
    i += 1;
  }

  return result;
};

const game = () => {
  const number = genRandomNumber(0, 100);
  const correctAnswer = isPrime(number);

  const userAnswer = printQuestionGetAnswer(number);

  return [userAnswer === correctAnswer, userAnswer, correctAnswer];
};

export default { game, rule };
