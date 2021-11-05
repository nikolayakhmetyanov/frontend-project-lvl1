import genRandomNumber from '../helpers.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const makeRound = () => {
  const number = genRandomNumber(0, 100);
  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};

export default { makeRound, rule };
