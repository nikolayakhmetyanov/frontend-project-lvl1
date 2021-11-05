import genRandomNumber from '../helpers.js';

const rule = 'What is the result of the expression?';

const getProgression = (progressionLength, startNumber, magicIndex) => {
  let result;
  let numberInProgression = startNumber;
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (magicIndex === i) {
      progression.push('..');
      result = numberInProgression;
    } else {
      progression.push(numberInProgression);
    }
    numberInProgression += 2;
  }

  return [progression.join(' '), result];
};

const makeRound = () => {
  const progressionLength = genRandomNumber(5, 11);
  const magicIndex = genRandomNumber(0, progressionLength - 1);
  const startNumber = genRandomNumber(1, 100);

  const [question, answer] = getProgression(progressionLength, startNumber, magicIndex);

  return [question, answer];
};

export default { makeRound, rule };
