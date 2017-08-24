function myFunction(number) {
var count = 0;
  for (i = 0; i < number; ++i) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }
  return count;
}

console.log(myFunction(1000));
