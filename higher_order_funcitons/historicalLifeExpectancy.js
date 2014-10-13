/**
 * Created by rbit on 10/7/14.
 */

var ancestry = JSON.parse(ANCESTRY_FILE),
    group = {};

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

ancestry.forEach(function(person) {
  var currentCentury = Math.ceil(person.died / 100);
  if (!group[currentCentury]) {
    group[currentCentury] = [];
  }
  group[currentCentury].push(person.died - person.born);
});

console.log("---------ex3----------");

for (var century in group) {
  if (group.hasOwnProperty(century)) {
    console.log(century + ': ' + average(group[century]).toFixed(1));
  }
}

//console.log(group);