import readlineSync from 'readline-sync';
import getRandomInt from '../helpers/helpers.js';

const regulation = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const check = (num, answer, name) => {
  if (answer === 'yes' && num) {
    return [true, 'Correct!'];
  }

  if (answer === 'no' && !num) {
    return [true, 'Correct!'];
  }

  return [false, `'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}!`];
};
const getIsPrime = () => {
  const num = getRandomInt();
  const result = {};
  result.resNum = true;
  result.num = num;
  let i = 2;

  while (i < num / 2) {
    if (num % i === 0) {
      result.resNum = false;
      break;
    }
    i += 1;
  }

  return result;
};

const game = (name) => {
  const { resNum, num } = getIsPrime();
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  return check(resNum, answer, name);
};

export { game, regulation };
