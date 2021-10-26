import { getAnswerUser, printQuestion } from '../cli.js';
import getRandomNumber from '../helpers.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const game = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  printQuestion(question);
  const userAnswer = getAnswerUser();

  return [userAnswer === correctAnswer, userAnswer, correctAnswer];
};

export default { game, rule };
