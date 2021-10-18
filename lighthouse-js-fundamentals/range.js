

/* failured attempts

var range = function(start, end, step) { 
  for ( i= start; i < end; i + step) {
    return 
  }
}


function range(start, end, step) {
  let rangeArray();
  if (start = undefined || end = undefined || step = undefined || start > end || step === 0 || step < 0) {
    return range = []; 
  } else {
   for (let i = start; i <= end; i+= step ) {
    rangeArray.push(i);
   }
   return rangeArray; 
  }
}
*/ 

function range(start, end, step) {
  let rangeArray = [];
  if (start === undefined || end === undefined|| step === undefined|| start > end|| step<= 0) {
    return []; 
  } else {
   for (let i = start; i <= end; i+= step ) {
    rangeArray.push(i);
   }
   return rangeArray; 
  }
}