/**
 * Created by rbit on 9/22/14.
 */

function reverseWords(str, keywords) {
  var splittedStr = str.split(' '),
    output = [];

  //function reverseStr(str) {
  //    return str.reverse();
  //}

  for (var i = 0; i < splittedStr.length; i++) {
    var currentStr = splittedStr[i].split('').reverse().join('');

    for (var s = 0; s < keywords.length; s++) {
      if (splittedStr[i] === keywords[s]) {
        currentStr = splittedStr[i];
      }
    }

    output.push(currentStr);
  }

  return output.join(' ');
}

document.getElementById('output').innerHTML = reverseWords('hello little shiny world', ['little', 'shiny']);
console.log(reverseWords('hello little shiny world', ['little', 'shiny']));

// olleh little shiny dlroW

console.log(reverseWords('hello little shiny world'));

console.log("----------TEMP START-----------");



console.log("----------TEMP END-------------");