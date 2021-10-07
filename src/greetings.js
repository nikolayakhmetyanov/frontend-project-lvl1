import askQuestion from './cli.js';

function greetings() {
  console.log('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
}

export default greetings;
