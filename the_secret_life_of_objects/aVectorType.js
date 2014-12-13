/**
 * Created by Radimir on 12.12.2014 г..
 */

(function() {
  /**
   * Vector constructor
   * @param x
   * @param y
   * @constructor
   */
  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Sum two vectors
   * @param vector
   * @returns {Vector}
   */
  Vector.prototype.plus = function(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  };

  /**
   * Subtract a vector
   * @param vector
   * @returns {Vector}
   */
  Vector.prototype.minus = function(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  };

  /**
   * Add length getter
   */
  Object.defineProperty(Vector.prototype, 'length', {
    get: function() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  });

  // Result output
  var resultContainer = document.querySelector('.container__result');
  resultContainer.innerHTML += '<h2>A Vector Type</h2>';
  resultContainer.innerHTML += '<span>Vector: </span><pre>' + JSON.stringify(new Vector(1, 2).plus(new Vector(2, 3))) + '</pre>';
  resultContainer.innerHTML += '<span>Vector: </span><pre>' + JSON.stringify(new Vector(1, 2).minus(new Vector(2, 3))) + '</pre>';
  resultContainer.innerHTML += '<span>Vector length: </span><pre>' + JSON.stringify(new Vector(3, 4).length) + '</pre>';

  console.log(new Vector(1, 2).plus(new Vector(2, 3)));
  // → Vector{x: 3, y: 5}
  console.log(new Vector(1, 2).minus(new Vector(2, 3)));
  // → Vector{x: -1, y: -1}
  console.log(new Vector(3, 4).length);
// → 5
})();
