/**
 * Created by rbit on 9/17/14.
 */

function fizzBuzz() {
  var sectionEl = document.querySelector('#fizzBuzz div'),
      counterEnd = 100,
      resultConsole = '',
      resultHtml = '',
      i;

  for (i = 1; i <= counterEnd; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      resultHtml += '<p>FizzBuzz</p>';
      resultConsole += 'FizzBizz\n';
    } else if (i % 3 == 0) {
      resultHtml += '<p>Fizz</p>';
      resultConsole += 'Fizz\n';
    } else if (i % 5 == 0) {
      resultHtml += '<p>Buzz</p>';
      resultConsole += 'Buzz\n';
    } else {
      resultHtml += '<p>' + i + '</p>';
      resultConsole += i + '\n';
    }
  }

  sectionEl.innerHTML = resultHtml;
  console.log(resultConsole);
}

fizzBuzz();