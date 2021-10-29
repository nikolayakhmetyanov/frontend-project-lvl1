import { printQuestionGetAnswer } from '../cli.js';
import genRandomNumber from '../helpers.js';

const rule = 'What is the result of the expression?';

const getProgression = () => {
  let result;
  const progression = [];

  const minLength = 5;
  const maxLength = 11;

  const progressionLength = genRandomNumber(minLength, maxLength);
  const magicIndex = genRandomNumber(0, progressionLength - 1);
  let startNumber = genRandomNumber(1, 20);

  for (let i = 0; i < progressionLength; i += 1) {
    if (magicIndex === i) {
      progression.push('..');
      result = parseInt(startNumber, 10);
    } else {
      progression.push(startNumber);
    }
    startNumber += 2;
  }

  return [result, progression];
};

const game = () => {
  const [result, progression] = getProgression();

  const userAnswer = printQuestionGetAnswer(progression.join(' '));

  return [parseInt(userAnswer, 10) === result, userAnswer, result];
};

export default { game, rule };
