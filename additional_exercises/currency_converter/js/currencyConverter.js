/**
 * Created by Radimir on 19.12.2014
 */
/* global $: false, fx: false */
/* jshint devel: true */
(function() {
  'use strict';

  // Set Initial configuration objects
  var money = fx.noConflict(),
      config = {
        'appId': 'APP-ID' // Place your Open Exchange App Key
      },
      currencyNames = {
        'USD': 'US Dollars',
        'EUR': 'Euro',
        'JPY': 'Japanese Yen'
      },
      convertBtn = $('button.convert-btn');

  /**
   * Get the latest currency rates using Open Exchange Rates
   * Execute the default currency conversion 'EUR' to 'USD'
   *
   * URL: https://openexchangerates.org/
   */
  function getLatestCurrencyRates() {
    $.ajax({
      url: 'http://openexchangerates.org/api/latest.json?app_id=' + config.appId,
      dataType: 'jsonp',
      success: function(json) {
        convertBtn.removeAttr('disabled');

        // set the updated rates
        money.rates = json.rates;
        money.base = json.base;

        // execute the default currency conversation
        initialConverting();
      }
    });
  }

  /**
   * Helper function to bind the UI elements to the
   * result of the currency conversion
   *
   * @param result
   */
  function displayResult(result) {
    $('.display-c-from').text(result.currencyNameFrom);
    $('.display-qty-from').text(result.qtyFrom);
    $('.display-c-to').text(result.currencyNameTo);
    $('.display-qty-to').text(result.qtyTo.toFixed(4));
  }

  /**
   * Helper function for the default conversion
   * 1 EUR to USD
   */
  function initialConverting() {
    displayResult({
      'currencyNameFrom': 'Euro',
      'currencyNameTo': 'US Dollars',
      'qtyFrom': 1,
      'qtyTo': money.convert(1, {from: 'EUR', to: 'USD'})
    });
  }

  /**
   * Main function bind to the convert click event.
   * Perform the currency conversion based on the provided
   * quantity and selected currency codes
   *
   * @param event
   */
  function convert(event) {
    event.preventDefault();

    var currencyQty = $('#currency-qty').val(),
        currencyFrom = $('#currency-from').val(),
        currencyTo = $('#currency-to').val();

    var convertedQty = money.convert(currencyQty, {from: currencyFrom, to: currencyTo});

    var result = {
      'currencyNameFrom': currencyNames[currencyFrom],
      'currencyNameTo': currencyNames[currencyTo],
      'qtyFrom': currencyQty,
      'qtyTo': convertedQty
    };

    displayResult(result);
  }

  // Disable the convert button until the currency rates update
  convertBtn.attr('disabled','disabled');

  // Set the click handler for convert button
  convertBtn.on('click', convert);

  // Update the currency rates
  getLatestCurrencyRates();
})();