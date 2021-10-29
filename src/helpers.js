const genRandomNumber = (min, max) => (Math.floor(
  Math.random() * (max + 1 - min) + min,
));

export default genRandomNumber;
