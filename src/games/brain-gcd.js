import genRandomNumber from '../helpers.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);

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

  return result;
};

const makeRound = () => {
  const num1 = genRandomNumber(1, 100);
  const num2 = genRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);

  return [question, answer];
};

export default { makeRound, rule };
