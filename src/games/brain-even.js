import { printQuestionGetAnswer } from '../cli.js';
import genRandomNumber from '../helpers.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const game = () => {
  const question = genRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  const userAnswer = printQuestionGetAnswer(question);

  return [userAnswer === correctAnswer, userAnswer, correctAnswer];
};

export default { game, rule };
