import genRandomNumber from '../helpers.js';

const rule = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomElement = (items) => items[Math.floor(Math.random() * items.length)];

const makeRound = () => {
  const operandOne = genRandomNumber(1, 100);
  const operandTwo = genRandomNumber(1, 10);
  const operator = getRandomElement(Object.keys(operations));
  const question = `${operandOne} ${operator} ${operandTwo}`;
  const answer = operations[operator](operandOne, operandTwo);

  return [question, answer];
};

export default { makeRound, rule };
