'use strict';


/**
 * @ngdoc overview
 * @name gatling.io
 * @description
 * # gatling.io
 *
 * Main module of the application.
 */

var app = angular.module('gatling.io',
    [
      'ngAnimate','ngCookies','ngResource',
      'ngRoute','ngSanitize','ngTouch',
      'angulartics','angulartics.google.analytics']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'ConceptCtrl'
    })
    .when('/docs', {
      templateUrl: 'views/docs.html'
    })
    .when('/download', {
      templateUrl: 'views/download.html'
    })
    .when('/services', {
      templateUrl: 'views/services.html'
    })
    .when('/testimonials', {
      templateUrl: 'views/testimonials/klm.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
