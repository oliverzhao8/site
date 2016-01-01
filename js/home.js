/* globals loadRoute */
'use strict';
var loadHome = function() {
  var changeImg = function(src) {
    $("#logo-home").attr('src', src)
  };
  // $('.btn').mouseenter(function() {
  //   var buttonText = $(this).context.childNodes[0].nodeValue;
  //   if (buttonText === 'About') {
  //     changeImg('img/placeholder1.png');
  //   }
  //   if (buttonText === 'Portfolio') {
  //     changeImg('img/placeholder2.png');
  //   }
  //   if (buttonText === 'Contact') {
  //     changeImg('img/placeholder3.png');
  //   }
  // });
  $('.btn').mouseout(function() {
    changeImg('img/logo.png');
  });
};