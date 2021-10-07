import { askQuastion } from '../src/cli.js';

function brainPrime(name) {
  const check = (num, answer) => {
    if (answer === 'yes' && num) {
      return [true, 'Correct!'];
    }

    if (answer === 'no' && !num) {
      return [true, 'Correct!'];
    }

    return [false, `'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}!`];
  };

  function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }

  function getIsPrime() {
    const num = getRandomInt();
    const result = {};
    result.resNum = true;
    result.num = num;
    let i = 2;

    while(i < num / 2) {
      if (num % i === 0) {
        result.resNum = false;
        break;
      }
      i++
    }

    return result;
  }

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const { resNum, num } = getIsPrime();

  console.log(`Quastion: ${num}`);

  const answer = askQuastion('Your answer: ');

  return check(resNum, answer);
}

export { brainPrime };
