//function of finalPosition(moves)

//argument as follows
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

finalPosition(moves);


const finalPosition = function (moves) {
  // Your code in here ...
}

if (type === "north") {

}

function finalPosition(moves) {
  let position = [0, 0];
  for (var i = 0; i <= moves.length - 1; i++) {
    if (moves === 'north') { position[1] = position[1] + 1; }
    else if (moves === 'west') { position[0] = position[0] - 1; }
    else if (moves === 'east') { position[0] = position[0] + 1; }
    else if (moves === 'south') { position[1] = position[1] - 1; }
  }
  return position;
}


function finalPosition(moves) {
  let x = 0;
  let y = 0;
  let coordinates = []

  for (let move of moves) {
    if (move === "north") {
      y = y + 1
    }
    if (move === "south") {
      y = y - 1
    }
    if (move === "east") {
      x = x + 1
    }
    if (move === "west") {
      x = x - 1
    }
    coordinates[0] = x
    coordinates[1] = y
  }
  return coordinates
}

console.log(finalPosition(moves));