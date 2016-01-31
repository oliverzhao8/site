/* globals loadRoute */
'use strict';
var loadHome = function() {
  var MIN_HOME_WIDTH = 375;
  var onResize = function() {
    var btnList = $("#btn-list-home");
    var listInline = 'list-inline';
    if ($(window).width() < MIN_HOME_WIDTH) {
      btnList.removeClass(listInline);
    } else {
      btnList.addClass(listInline);
    }
  };

  var changeImg = function(src) {
    $("#logo-home").attr('src', src);
  };

  //initialize and register handler for resize
  onResize();
  $(window).resize(onResize);
};