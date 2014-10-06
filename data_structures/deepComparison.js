/**
 * Created by rbit on 9/18/14.
 */

function deepEqual(a, b) {
  var objAProp = 0, objBProp = 0;

  if (a === b) {
    return true;
  }

  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
    return false;
  }

  for (var prop in a) {
    objAProp += 1;
  }

  for (var prop in b) {
    objBProp += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return objAProp == objBProp;

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true