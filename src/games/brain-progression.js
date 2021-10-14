import readlineSync from 'readline-sync';
import getRandomInt from '../helpers/helpers.js';

const regulation = 'What is the result of the expression?';
const check = (num, answer, name) => {
  if (parseInt(answer, 10) === num) {
    return [true, 'Correct!'];
  }

  return [false, `'${answer}' is wrong answer ;(. Correct answer was '${num}'.\nLet's try again, ${name}!`];
};
const getProgression = () => {
  const result = {};
  const progressionLength = getRandomInt() * (11 - 5) + 5;
  const magicIndex = Math.floor(Math.random() * progressionLength);
  let startNumber = Math.floor(Math.random() * 100);
  const progression = [];

  let i = 0;
  while (i < progressionLength) {
    if (magicIndex === i) {
      progression.push('..');
      result.resNum = startNumber;
    } else {
      progression.push(startNumber);
    }
    startNumber += 2;
    i += 1;
  }

  result.progression = progression;

  return result;
};

const game = (name) => {
  const { resNum, progression } = getProgression();
  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');

  return check(resNum, answer, name);
};

export { game, regulation };
