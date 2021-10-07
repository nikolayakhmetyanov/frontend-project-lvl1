import greetings from './greetings.js';

function run(game) {
  const name = greetings();

  const countQuastions = 3;

  let i = 0;

  while (i < countQuastions) {
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
