/**
 * Created by rbit on 9/17/14.
 */

function countChar(string, char) {
  var counter = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      counter++;
    }
  }

  return counter;
}

function countBs(string) {
  return countChar(string, 'B');
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4