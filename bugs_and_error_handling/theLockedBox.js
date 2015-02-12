(function() {
  "use strict";

  var box = {
    locked: true,
    unlock: function() { this.locked = false; },
    lock: function() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };

  function withBoxUnlocked(body) {
    if (!box.locked) {
      return body();
    }

    box.unlock();
    try {
      return body();
    } finally {
      box.lock();
    }
  }

  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });

  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }

  var resultContainer = document.querySelector(".container__result");

  // Result output
  resultContainer.innerHTML += '<h2>The Locked Box</h2>';
  resultContainer.innerHTML += '<span>Is the box locked: <pre>' + box.locked + '</pre></span>';

  console.log(box.locked);
  // true

})();