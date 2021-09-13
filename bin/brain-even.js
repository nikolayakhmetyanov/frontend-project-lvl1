#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const namePlayer = greetings();
const regulations = 'Answer "yes" if the number is even, otherwise answer "no".';
const countQuastions = 3;
const messageCorrectAnswer = 'Correct!';
const messageNoCorrectAnswer = (num, answer, namePlayer) => `'${answer}' is wrong answer ;(. Correct answer was '${isEven(num) ? 'yes' : 'no'}'. Let's try again, ${namePlayer}!`;

const isEven = (num) => num % 2 === 0;

const getRandomInt = () => Math.floor(Math.random() * 100);

const checkAnswer = (num, answer) => {
  if (answer === 'yes' && isEven(num)) {
    return true;
  }

  if (answer === 'no' && !isEven(num)) {
    return true;
  }

  return false;
};

const printMessage = (message) => console.log(message);

const runQA = () => {
  const num = getRandomInt();

  printMessage(`Quastion: ${num}`);

  const answer = readlineSync.question('Your answer: ');

  const resultQA = checkAnswer(num, answer);

  if (resultQA) {
    printMessage(messageCorrectAnswer);
    return true;
  }

  printMessage(messageNoCorrectAnswer(num, answer, namePlayer));
  return false;
};

const runGame = () => {
  printMessage(regulations);

  let i = 0;

  while (i < countQuastions) {
    if(!runQA()) {
      break;
    }

    i += 1;

    if (i === 3) {
      printMessage(`Congratulations, ${namePlayer}!`);
    }
  }
};

runGame();
