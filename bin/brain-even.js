#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const name = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const countQuastions = 3;

const isEven = (num) => num % 2 === 0;

const check = (num, answer) => {
  if (answer === 'yes' && isEven(num)) {
    return [true, 'Correct!'];
  }

  if (answer === 'no' && !isEven(num)) {
    return [true, 'Correct!'];
  }

  return [false, `'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}!`];
};

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

let i = 0;

while (i < countQuastions) {
  const num = getRandomInt();
  console.log(`Quastion: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  const [res, message] = check(num, answer);
  if (res) {
    console.log(message);
  } else {
    console.log(message);
    break;
  }

  i += 1;

  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
