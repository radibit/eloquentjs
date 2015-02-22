(function() {
  'use strict';

  var resultContainer = document.querySelector(".container__result");
  resultContainer.innerHTML += '<h2>Quoting style</h2>';

  var text = "'I'm the cook,' he said, 'it's my job.'";
  // Change this call.

  resultContainer.innerHTML += '<span><pre>' + text.replace(/^'|(\.|,)(\W'|'\W)|'$/g, "$1\"") + '</pre></span>';

  console.log(text.replace(/^'|(\.|,)(\W'|'\W)|'$/g, "$1\""));
  // "I'm the cook," he said, "it's my job."
})();
