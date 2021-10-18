
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

function ageCalculator(age) {
  let name = age[0]
  console.log(name)
  const currentAge = [age[2] - age[1]]
  console.log(currentAge)
}
console.log(name + " is" + age + " years old.") 
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));


const chooseStations = function (stations) {
  // Your code in here ...
  const goodStations = []
  for (const station of stations) {
    const capacity = station[1]
    console.log(capacity)

    if (capacity >= 20) {
      console.log(station[0])

      const type = station[2]

      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }

  return goodStations
}


console.log(chooseStations(stations))


const ageCalculator = function (age) {

  let name = age[0]
  console.log(name)

  const currentAge = [age[2] - age[1]]
  console.log(currentAge)
}
console.log(name + " is" + currentAge + " years old.") 
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

let ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let result = name + " is " + age + " years old.";
  return result;
}

//need to come back to restudy and revisit