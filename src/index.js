import { greet } from './cli.js';

const run = (game, settings) => {
  const name = greet();
  console.log(settings.regulation);

  for (let i = 1; i <= settings.countQuestions; i += 1) {
    const [result, userAnswer, correctAnswer] = game();

    if (result) {
      console.log('Correct!');
    } else {
      console.log(`
        '${userAnswer}' is wrong answer ;(.
        Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!
      `);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default run;
