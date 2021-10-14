import readlineSync from 'readline-sync';
import getRandomInt from '../helpers/helpers.js';

const regulation = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const check = (num, answer, name) => {
  if (answer === 'yes' && isEven(num)) {
    return [true, 'Correct!'];
  }

  if (answer === 'no' && !isEven(num)) {
    return [true, 'Correct!'];
  }

  return [false, `'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.\nLet's try again, ${name}!`];
};

const game = (name) => {
  const num = getRandomInt();
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  return check(num, answer, name);
};

export { game, regulation };
