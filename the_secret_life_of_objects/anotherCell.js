/**
 * Created by Radimir on 13.12.2014 г..
 */
(function() {
  /**
   * Stretch cell constructor conforming the Table cell interface
   * @param inner
   * @param width
   * @param height
   * @constructor
   */
  function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
  }
  StretchCell.prototype.minWidth = function() {
    return Math.max(this.inner.minWidth(), this.width);
  };
  StretchCell.prototype.minHeight = function() {
    return Math.max(this.inner.minHeight(), this.height);
  };
  StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);

  };

  var sc = new StretchCell(new TextCell("abc"), 1, 2);
  var resultContainer = document.querySelector(".container__result");

  // Result output
  resultContainer.innerHTML += '<h2>Another Cell</h2>';
  resultContainer.innerHTML += '<span>Stretch cell minWidth: </span><pre>' + sc.minWidth() + '</pre>';
  resultContainer.innerHTML += '<span>Stretch cell minHeight: </span><pre>' + sc.minHeight() + '</pre>';
  resultContainer.innerHTML += '<span>Stretch cell draw: </span><pre>' + JSON.stringify(sc.draw(3, 2)) + '</pre>';

  console.log(sc.minWidth());
  // → 3
  console.log(sc.minHeight());
  // → 2
  console.log(sc.draw(3, 2));
  // → ["abc", "   "]
})();