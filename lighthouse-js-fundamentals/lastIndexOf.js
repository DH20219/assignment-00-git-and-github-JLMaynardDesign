
/* mistake

//first think about what is lastIndex made of// 
function lastIndexOf(array, value) {
  var match = false;
  var receipt;
  for (let i = array.length; i >= 0; i--) {
    if (array === undefined || value === undefined || i < 0) {
      receipt = -1;
      match = true;
      return receipt;
    } else if (value === array[i]) {
      receipt = array[i];
      return i;
    }
  }
}

console.log(lastIndexOf([3],3))
//the challenge is to locate the most recent index where the value has last appeared//
*/

function lastIndexOf(array, value) {
  var match = false;
  var receipt;
  for (let i = array.length; i >= 0; i--) {
    if  (value === array[i]) {
      receipt = array[i];
      return i;
    } else if (array === undefined || value === undefined || i <= 0) {
      receipt = -1;
      match = true;
      return receipt;
    } 
  }
}
