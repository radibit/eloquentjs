/*jshint devel: true*/
/**
 * Created by Radimir on 19.12.2014
 *
 * We should check if we have good chances of winning a game
 * with two dices. The game start with a 50c in the bank.
 * The profit is computed based on the following table:
 *
 * Sum       | Payback        | Profit
 * 12        | 4x the bet     | +1.50 Euro
 * 11        | 3x the bet     | +1.00 Euro
 * 10        | 2x the bet     | +0.50 Euro
 * 7,8,9     | return the bet | +0.00 Euro
 * 2,3,4,5,6 | none           | -0.50 Euro
 *
 */

(function () {
  'use strict';

  var bank = 0.5,
      resultContainer = document.querySelector('.container__result');

  /**
   * Helper method to get a random integer
   * @param min
   * @param max
   * @returns {*}
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Simulate two dice throwing and sum their result
   * @returns {*}
   */
  function throwDices() {
    return getRandomInt(1, 7) + getRandomInt(1, 7);
  }

  /**
   * Calculate the bank amount
   * @param dicesSum
   * @returns {number}
   */
  function calculateBet(dicesSum) {
    if (dicesSum === 12) {
      bank += 1.5;
    } else if (dicesSum === 11) {
      bank += 1;
    } else if (dicesSum === 10) {
      bank += 0.5;
    } else if (dicesSum === 2 || dicesSum === 3 || dicesSum === 4 ||
      dicesSum === 5 || dicesSum === 6) {
      bank -= 0.5;
    } else {
      bank += 0;
    }

    return bank;
  }

  /**
   * Start the game
   * @param gameNum
   * @returns {string}
   */
  function play(gameNum) {
    for (var i = 0; i < gameNum; i++) {
      var dicesSum = throwDices();
      calculateBet(dicesSum);
      //console.log('Dices Sum is: ' + dicesSum);
      //console.log('Bank is: ' + calculateBet(dicesSum));
    }
    return bank > 0 ? 'You win! Your amount is: ' + bank : 'You lose. Your amount is: ' + bank;
  }

  resultContainer.innerHTML += '<pre>' + play(1000) + '</pre>';
  //console.log(play(1000));

})();