// Fill in the regular expressions
(function() {
  'use strict';

  var resultContainer = document.querySelector(".container__result");
  resultContainer.innerHTML += '<h2>Regexp golf</h2>';

  verify(/ca?r|ts/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

  verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop"]);

  verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

  verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

  verify(/\s+(\.|,|;)/,
    ["bad punctuation ."],
    ["escape the dot"]);

  verify(/\w{7,}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

  verify(/\b[^e\s]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape"]);

  function renderResult(container, result) {
    container.innerHTML += '<span><pre>' + result + '</pre></span>';
  }

  function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source === "...") return;
    yes.forEach(function (s) {
      if (!regexp.test(s)) {
        renderResult(resultContainer, "Failure to match '" + s + "'");
        console.log("Failure to match '" + s + "'");
      } else {
        renderResult(resultContainer, "Successful match for '" + s + "'");
      }
    });
    no.forEach(function (s) {
      if (regexp.test(s))
        renderResult(resultContainer, "Unexpected match for '" + s + "'");
        console.log("Unexpected match for '" + s + "'");
    });
  }
})();
