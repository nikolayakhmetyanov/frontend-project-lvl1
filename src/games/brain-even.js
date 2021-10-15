import { getAnswerUser, printQuestion } from '../cli.js';
import { getRandomInt, isEven } from '../helpers.js';

const settings = {
  regulation: 'Answer "yes" if the number is even, otherwise answer "no".',
  countQuestions: 3,
};

const game = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  printQuestion(question);
  const userAnswer = getAnswerUser();

  return [userAnswer === correctAnswer, userAnswer, correctAnswer];
};

export { game, settings };
