import readlineSync from 'readline-sync';

const printGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const printQuestion = (q) => console.log(`Question: ${q}`);
const getAnswerUser = () => readlineSync.question('Your answer: ');

export { printGreetings, getAnswerUser, printQuestion };
