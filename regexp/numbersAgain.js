(function() {
  'use strict';

  var resultContainer = document.querySelector(".container__result");
  resultContainer.innerHTML += '<h2>Numbers again</h2>';

  function renderResult(container, result) {
    container.innerHTML += '<span><pre>' + result + '</pre></span>';
  }

  // Fill in this regular expression.
  var number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)(e(\+|-|)\d+)?$/i;

  // Tests:
  ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
    "1e+12"].forEach(function(s) {
      if (!number.test(s)) {
        renderResult(resultContainer, "Failed to match '" + s + "'");
        console.log("Failed to match '" + s + "'");
      } else {
        renderResult(resultContainer, "Successful match for '" + s + "'");
      }
    });
  ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
    "."].forEach(function(s) {
      if (number.test(s))
        renderResult(resultContainer, "Incorrectly accepted '" + s + "'");
        console.log("Incorrectly accepted '" + s + "'");
    });

})();
