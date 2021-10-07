import askQuestion from '../src/cli.js';

function brainEven(name) {
  const isEven = (num) => num % 2 === 0;
  const check = (num, answer) => {
    if (answer === 'yes' && isEven(num)) {
      return [true, 'Correct!'];
    }

    if (answer === 'no' && !isEven(num)) {
      return [true, 'Correct!'];
    }

    return [false, `'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.\nLet's try again, ${name}!`];
  };

  function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }

  const num = getRandomInt();
  console.log(`Question: ${num}`);
  const answer = askQuestion('Your answer: ');

  return check(num, answer);
}

export default brainEven;
