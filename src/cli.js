import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const printQuestionGetAnswer = (q) => {
  console.log(`Question: ${q}`);
  return readlineSync.question('Your answer: ');
};

export { greet, printQuestionGetAnswer };
