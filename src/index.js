import { greet, printQuestionGetAnswer } from './cli.js';

const run = ({ makeRound, rule }) => {
  const countQuestions = 3;
  const name = greet();
  console.log(rule);

  for (let i = 1; i <= countQuestions; i += 1) {
    const [question, answer] = makeRound();
    const userAnswer = printQuestionGetAnswer(question);

    if (String(answer) === String(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default run;
