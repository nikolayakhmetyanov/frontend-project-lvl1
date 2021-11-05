import genRandomNumber from '../helpers.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const makeRound = () => {
  const number = genRandomNumber(0, 100); // Генерируем случ. число
  const answer = isPrime(number);

  return [number, answer];
};

export default { makeRound, rule };
