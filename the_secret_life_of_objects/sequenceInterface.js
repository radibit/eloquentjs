(function() {
  // Result output
  var resultContainer = document.querySelector('.container__result');
  resultContainer.innerHTML += '<h2>Sequence Interface</h2>';

  /**
   * Helper function to display the result
   * @param seqObj
   */
  function logFive(seqObj) {
    for (var i = 0; i < 5; i++) {
      if (!seqObj.getNext()) {
        break;
      }
      resultContainer.innerHTML += '<p>' + seqObj.current + '</p>';
    }
  }

  /**
   * Define Array Sequence
   * @param collection
   * @constructor
   */
  function ArraySeq(collection) {
    this.position = -1;
    this.collection = collection;
  }

  /**
   * Get the next element in the collection and check if it's the last
   * @returns {boolean}
   */
  ArraySeq.prototype.getNext = function() {
    if (this.position >= this.collection.length - 1) {
      return false;
    }
    this.position++;
    return true;
  };

  /**
   * Define getter property for current element
   */
  Object.defineProperty(ArraySeq.prototype, 'current', {
    get: function() {
      return this.collection[this.position];
    }
  });

  /**
   * Define Range Sequence
   * @param from
   * @param to
   * @constructor
   */
  function RangeSeq(from, to) {
    this.position = from - 1;
    this.to = to;
  }
  RangeSeq.prototype.getNext = function() {
    if (this.position >= this.to) {
      return false;
    }
    this.position++;
    return true;
  };
  Object.defineProperty(RangeSeq.prototype, 'current', {
    get: function() {
      return this.position;
    }
  });

  logFive(new ArraySeq([1, 2, 3, null]));
  // 1
  // 2
  // 3
  // null
  logFive(new RangeSeq(100, 1000));
  // 100
  // 101
  // 102
  // 103
  // 104
})();