import readlineSync from 'readline-sync';

function askQuastion(question) {
  return readlineSync.question(question);
}

export default askQuastion;
