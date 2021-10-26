import { greet } from './cli.js';

const run = ({ game, rule }) => {
  const countQuestions = 3;
  const name = greet();
  console.log(rule);

  for (let i = 1; i <= countQuestions; i += 1) {
    const [result, userAnswer, correctAnswer] = game();

    if (result) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default run;
