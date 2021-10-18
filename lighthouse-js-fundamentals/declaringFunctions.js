//first code from the page
/*const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();*/

//second code from the page
/*const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand"); */

/* note that a console.log statement will result in some content being displayed in the console.
A return statement will not output anything to the console. But when a function returns a value, we can still console.log it later */

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);