import askQuestion from '../src/cli.js';

function brainCalc(name) {
  const check = (num, answer) => {
    if (parseInt(answer, 10) === num) {
      return [true, 'Correct!'];
    }

    return [false, `'${answer}' is wrong answer ;(. Correct answer was '${num}'.\nLet's try again, ${name}!`];
  };

  function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }

  function getRandomExpression() {
    const operation = getRandomInt();
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const result = {};

    if (operation % 5 === 0) {
      result.resNum = num1 * num2;
      result.expression = `${num1} * ${num2}`;
    } if (operation % 2 === 0) {
      result.resNum = num1 + num2;
      result.expression = `${num1} + ${num2}`;
    } else {
      result.resNum = num1 - num2;
      result.expression = `${num1} - ${num2}`;
    }

    return result;
  }

  const { resNum, expression } = getRandomExpression();

  console.log(`Question: ${expression}`);

  const answer = askQuestion('Your answer: ');

  return check(resNum, answer);
}

export default brainCalc;
