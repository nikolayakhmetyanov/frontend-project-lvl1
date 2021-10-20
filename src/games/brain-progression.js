import { getAnswerUser, printQuestion } from '../cli.js';
import getRandomNumber from '../helpers.js';

const settings = {
  regulation: 'What is the result of the expression?',
  countQuestions: 3,
};

const getProgression = () => {
  let result;
  const progression = [];

  const minLength = 5;
  const maxLength = 11;

  const progressionLength = (getRandomNumber() / 100) * (maxLength - minLength) + minLength;
  const magicIndex = Math.floor(Math.random() * progressionLength);
  let startNumber = Math.floor(Math.random() * 100);

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

  printQuestion(progression.join(' '));
  const userAnswer = parseInt(getAnswerUser(), 10);

  return [userAnswer === result, userAnswer, result];
};

export { game, settings };
