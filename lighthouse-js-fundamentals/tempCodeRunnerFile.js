
function calculateRectangleArea(length, width) {
  var rectangle = length * width;
  if (rectangle >= 0 && length >= 0 && width >= 0) {
    return rectangle;
  } else {
    return undefined;
  }

function range(start, end, step) {
  var start = range[0]
  var end = range[range.length - 1]
  var step = parseIntl(end - start) 
  if (step > 0 || start != undefined || end != undefined || step != undefined || start <= end) {
    return step; 
  } else {
    return []; 
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));