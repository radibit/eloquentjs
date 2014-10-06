/**
 * Created by rbit on 9/18/14.
 */

function arrayToList(array) {
  var list = null,
      i;

  for (i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }

  return list;
}

function listToArray(list) {
  var output = [];

  for (var node = list; node; node = node.rest) {
    output.push(node.value);
  }

  return output;
}

function prepend(value, list) {
  var newList = {};

  newList.value = value;
  newList.rest = list;

  return newList;
}

function nth(list, n) {
  if (n == 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

console.log("---------------------");