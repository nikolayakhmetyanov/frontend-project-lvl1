import { printGreetings } from './cli.js';

const run = (game, settings) => {
  const name = printGreetings();
  console.log(settings.regulation);

  for (let i = 1; i <= settings.countQuestions; i += 1) {
    const [result, userAnswer, correctAnswer] = game();

    if (result) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }

    if (i === settings.countQuestions) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default run;
