/**
 * Created by rbit on 9/18/14.
 */

function reverseArray(array) {
  var reversedArray = [];

  for (var i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
  }

  return reversedArray;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var elToOverwrite = array[i];

    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = elToOverwrite;
  }

  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

console.log(arrayValue);
// → [5, 4, 3, 2, 1]

console.log("---------------------");