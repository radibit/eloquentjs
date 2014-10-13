/**
 * Created by rbit on 10/13/14.
 */

/**
 * Function every will check each element in a given array against defined condition.
 *
 * @param arr
 * @param func
 * @returns {boolean}
 */
function every(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (!func(arr[i]))
      return false;
  }
  return true;
}

/**
 * Function some will check each element in a given array against defined condition
 * and will stop at the first element which meets it.
 *
 * @param arr
 * @param func
 * @returns {boolean}
 */
function some(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]))
      return true;
  }
  return false;
}

console.log("---------ex4---------");

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

console.log("---------------------");