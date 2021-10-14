import greetings from './cli.js';

function run(game, regulation) {
  const name = greetings();
  const countQuestions = 3;

  console.log(regulation);

  let i = 0;

  while (i < countQuestions) {
    const [result, message] = game(name);

    if (result) {
      console.log(message);
    } else {
      console.log(message);
      break;
    }

    i += 1;

    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

export default run;
