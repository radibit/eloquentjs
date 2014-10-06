/**
 * Created by rbit on 9/17/14.
 */

function chessBoard(width, height) {
  var sectionEl = document.querySelector('#chessBoard div'),
      resultConsole = '',
      resultHtml = '',
      i;

  for (i = 1; i <= height; i++) {
    var rowConsole = '',
        rowHtml = '',
        charsOnRow = 0;
    while (charsOnRow < width / 2) {
      if (i % 2 == 0) {
        rowConsole += ' #';
        rowHtml += '&nbsp;#';
      } else {
        rowConsole += '# ';
        rowHtml += '#&nbsp;';
      }
      charsOnRow++;
    }
    resultConsole += rowConsole + '\n';
    resultHtml += '<p>' + rowHtml + '</p>'
  }

  sectionEl.innerHTML = resultHtml;
  console.log(resultConsole);
}

chessBoard(8, 8);