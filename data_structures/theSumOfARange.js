/**
 * Created by rbit on 9/18/14.
 */

function sum(arrayOfNum) {
  var result = 0,
      i;

  for (i = 0; i < arrayOfNum.length; i++) {
    result += arrayOfNum[i];
  }

  return result;
}

function range(start, end, step) {
  var numArray = [],
      i;

  if (step !== undefined) {
    if (step < 0) {
      for (i = start; i >= end; i += step) {
        numArray.push(i);
      }
    } else {
      for (i = start; i <= end; i += step) {
        numArray.push(i);
      }
    }
  } else {
    for (i = start; i <= end; i++) {
      numArray.push(i);
    }
  }

  return numArray;
}

// sum all array numbers with recursion
function sumArray(array, output) {
  var result = output || null;
  result += array.pop();

  if (array.length !== 0) {
    return sumArray(array, result);
  } else {
    return result;
  }
}

console.log(range(1, 10));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// -> [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// -> 55
console.log(sumArray([1, 2, 3, 4, 5]));

console.log("---------------------");