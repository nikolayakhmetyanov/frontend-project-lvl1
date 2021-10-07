import askQuestion from '../src/cli.js';

function brainProgression(name) {
  const check = (num, answer) => {
    if (parseInt(answer, 10) === num) {
      return [true, 'Correct!'];
    }

    return [false, `'${answer}' is wrong answer ;(. Correct answer was '${num}'.\nLet's try again, ${name}!`];
  };

  function getRandomInt() {
    return Math.floor(Math.random() * (11 - 5) + 5);
  }

  function getProgression() {
    const result = {};
    const progressionLength = getRandomInt();
    const magicIndex = Math.floor(Math.random() * progressionLength);
    let startNumber = Math.floor(Math.random() * 100);
    const progression = [];

    let i = 0;
    while (i < progressionLength) {
      if (magicIndex === i) {
        progression.push('..');
        result.resNum = startNumber;
      } else {
        progression.push(startNumber);
      }
      startNumber += 2;
      i += 1;
    }

    result.progression = progression;

    return result;
  }

  const { resNum, progression } = getProgression();

  console.log(`Question: ${progression.join(' ')}`);

  const answer = askQuestion('Your answer: ');

  return check(resNum, answer);
}

export default brainProgression;
