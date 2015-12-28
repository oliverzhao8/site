/*globals aboutData*/
'use strict';
var loadAbout = function() {
  $('li').mouseenter(function() {
    $(this).addClass('active');
  });
  $('li').mouseout(function() {
    $(this).removeClass('active');
  });
  $('#content').text(aboutData);
}