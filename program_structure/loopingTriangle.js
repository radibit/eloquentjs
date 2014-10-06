/**
 * Created by rbit on 9/17/14.
 */

function loopingTriangle(rowsNum) {
  'use strict';

  var sectionEl = document.querySelector('#loopingTriangle div'),
      result = '';

  for (var i = 1; i <= rowsNum; i++) {
    var row = '#';

    while (row.length < i) {
      row += '#';
    }
    console.log(row);

    result += '<p>' + row + '</p>';
  }

  sectionEl.innerHTML = result;
}

loopingTriangle(7);