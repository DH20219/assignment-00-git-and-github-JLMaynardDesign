//copy of initial code
/*The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
    }
  }
}

const actionWhenFound = function() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
*/
//exercise1
// The second argument/parameter is expected to be a (callback) function
//first version
/*const findWaldo = function (names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);// execute callback
    }
  }
};

const actionWhenFound = function (param) {
  console.log(`Found Waldo at index ${param}!`);
};
*/
//second version - better naming
/* const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      let index = i;
      found(index); //execute callback
    }
  }
};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
*/
//exercise 2
const findWaldo = function(names, found) {
  names.forEach(function (names, index) {  //function ( with array excluded, as it is not needed as an argument here)
    if (names === "Waldo") {
      found(index);   // execute callback
    }
  });
};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);