const checkNumber = (i) => {
  let checker = '';

  i % 3 === 0 ? (checker += 'hello ') : '';
  i % 5 === 0 ? (checker += 'world ') : '';
  i % 7 === 0 ? (checker += 'yoo ') : '';

  console.log(checker || i);
};

for (let i = 1; i <= 100; i++) {
  checkNumber(i);
}
