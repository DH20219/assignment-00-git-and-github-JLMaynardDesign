//exercise 2

const findWaldo = function(names) {
  names.forEach(function(names, index) {  //function ( with array excluded, as it is not needed as an argument here)
    if (names === "Waldo") {
      (function () {
        console.log(`Found Waldo at index ${index}!`);
      })();   // execute callback. note that the trailing parentheses () allow me to call the function
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);

//review material https://www.javascripttutorial.net/javascript-anonymous-functions/ . Review section on "Immediately invoked function execution"