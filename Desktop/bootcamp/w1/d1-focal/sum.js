let sum = function(num1, num2) {
  return num1 + num2;
};

const args = process.argv;
let numbers = args.slice(2);
console.log(sum(Number(numbers[0]), Number(numbers[1])));







