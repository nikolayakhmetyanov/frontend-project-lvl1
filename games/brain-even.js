import { askQuastion } from "../src/cli.js";

function brainEven(name) {
  const isEven = (num) => num % 2 === 0;
  const check = (num, answer) => {
    if (answer === 'yes' && isEven(num)) {
      return [true, 'Correct!'];
    }

    if (answer === 'no' && !isEven(num)) {
      return [true, 'Correct!'];
    }

    return [false, `'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}!`];
  };

  function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }

  const num = getRandomInt();
  console.log(`Quastion: ${num}`);
  const answer = askQuastion('Your answer: ');

  return check(num, answer);
}

export { brainEven };
