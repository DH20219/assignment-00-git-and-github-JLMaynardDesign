const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]

//version 1:
//let countLength = lighthouses.map(function(name) {return name.length});

//version 2:
//let countLength = lighthouses.map((name) => {return names.length});

//version 3: 
let countLength = lighthouses.map((x) => x.length); 

console.log(countLength);