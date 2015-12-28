/*globals loadHome, loadAbout, loadPortfolio*/
'use strict';
var loadRoute = function(route) {
  var loadContainerId = '#app';
  var fcFactory = function(html, controller) {
    return {
      'html': html,
      'controller': controller
    };
  };
  var routeToFile = {
    '/': fcFactory('views/home.html', loadHome),
    '/about': fcFactory('views/about.html', loadAbout),
    '/portfolio': fcFactory('views/portfolio.html', loadPortfolio),
    '/contact': fcFactory('views/contact.html', function(){})
  };
  var routeInfo = routeToFile[(route in routeToFile) ? route : '/'];
  $(loadContainerId).load(routeInfo.html, routeInfo.controller);
};
