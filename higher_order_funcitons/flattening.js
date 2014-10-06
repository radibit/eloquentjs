/**
 * Created by rbit on 9/27/14.
 */

function flattenArray(multiArray) {
  return multiArray.reduce(function(previousItem, currentItem) {
    return previousItem.concat(currentItem);
  });
}

console.log(flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);