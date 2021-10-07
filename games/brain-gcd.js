import askQuastion from '../src/cli.js';

function brainGcd() {
  const check = (num, answer) => {
    if (parseInt(answer, 10) === num) {
      return [true, 'Correct!'];
    }

    return [false, `'${answer}' is wrong answer ;(. Correct answer was '${num}!`];
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

    console.log(max, min);

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

  console.log('Find the greatest common divisor of given numbers.');

  const { resNum, expression } = getGcd();

  console.log(`Quastion: ${expression}`);

  const answer = askQuastion('Your answer: ');

  return check(resNum, answer);
}

export default brainGcd;
