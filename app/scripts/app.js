'use strict';


/**
 * @ngdoc overview
 * @name gatling.io
 * @description
 * # gatling.io
 *
 * Main module of the application.
 */

var app = angular.module('gatling.io', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch']);

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
    .otherwise({
      redirectTo: '/'
    });
}]);

app.run(['$rootScope', '$http', '$window', function($rootScope, $http) {
}]);