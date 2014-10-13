/**
 * Created by rbit on 10/6/14.
 */

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function mother(el) {
  return byName[el.mother] !== undefined;
}

function ageDiff(el) {
  return el.born - byName[el.mother].born;
}

console.log("---------ex2----------");

console.log('Average age difference between mothers and children is ' + average(ancestry.filter(mother).map(ageDiff)));

