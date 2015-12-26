'use strict';
var loadPortfolio = function() {
  $('li').mouseenter(function() {
    $(this).addClass('active');
  });
  $('li').mouseout(function() {
    $(this).removeClass('active');
  });
};