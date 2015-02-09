(function() {
  "use strict";

  function MultiplicatorUnitFailure() {}

  function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
      return a * b;
    else
      throw new MultiplicatorUnitFailure();
  }

  function reliableMultiply(a, b) {
    for(;;) {
      try {
        return primitiveMultiply(a, b);
      } catch (e) {
        console.log("Not a valid result!");
      }
    }
  }

  var resultContainer = document.querySelector(".container__result");

  // Result output
  resultContainer.innerHTML += '<h2>Retry</h2>';
  resultContainer.innerHTML += '<span><pre>' + reliableMultiply(8, 8) + '</pre></span>';


  console.log(reliableMultiply(8, 8));
  // 64

})();