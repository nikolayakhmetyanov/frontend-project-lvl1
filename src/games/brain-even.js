import { getAnswerUser, printQuestion } from '../cli.js';
import getRandomNumber from '../helpers.js';

const settings = {
  regulation: 'Answer "yes" if the number is even, otherwise answer "no".',
  countQuestions: 3,
};

const isEven = (num) => num % 2 === 0;

const game = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  printQuestion(question);
  const userAnswer = getAnswerUser();

  return [userAnswer === correctAnswer, userAnswer, correctAnswer];
};

export { game, settings };
