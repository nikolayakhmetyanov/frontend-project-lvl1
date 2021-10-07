import askQuestion from '../src/cli.js';

function brainGcd(name) {
  const check = (num, answer) => {
    if (parseInt(answer, 10) === num) {
      return [true, 'Correct!'];
    }

    return [false, `'${answer}' is wrong answer ;(. Correct answer was '${num}'.\nLet's try again, ${name}!`];
  };

  function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }

  function sortMaxToMin(num1, num2) {
    return num1 > num2 ? [num1, num2] : [num2, num1];
  }

  function getGcd() {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const result = {};

    const [max, min] = sortMaxToMin(num1, num2);

    if (max % min === 0) {
      result.resNum = min;
    } else {
      let divider = min - 1;

      while (max % min !== 0 && min % divider !== 0) {
        divider -= 1;
      }
      result.resNum = divider;
    }

    result.expression = `${num1} ${num2}`;

    return result;
  }

  const { resNum, expression } = getGcd();

  console.log(`Question: ${expression}`);

  const answer = askQuestion('Your answer: ');

  return check(resNum, answer);
}

export default brainGcd;
