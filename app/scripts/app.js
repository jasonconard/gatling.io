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
      'ngAnimate', 'ngCookies', 'ngResource',
      'ngSanitize', 'ngTouch', 'ui.router',
      'angulartics', 'angulartics.google.analytics']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('index', {
        url: "/",
        templateUrl: 'views/main.html',
        controller: 'ConceptCtrl'
      })
      .state('docs', {
        url: "/docs",
        templateUrl: 'views/docs.html'
      })
      .state('download', {
        url: "/download",
        templateUrl: 'views/download.html'
      })
      .state('services', {
        url: "/services",
        templateUrl: 'views/services.html'
        })
      .state('stories', {
        url: "/stories",
        templateUrl: 'views/stories.html'
      })
      .state('story', {
        url: "/stories/:story.html",
        templateUrl: "views/stories/skeleton.html",
        controller: 'StoryCtrl'
      })
      .state('story.detail', {
        templateUrl: function ($stateParams){
          return '/views/stories/' + $stateParams.story + '.html';
        }
      });

  $urlRouterProvider.otherwise("/");

}]);

/*      .state('story', {
 url: "/stories/:story.html",
 templateUrl: function (params) {
 return 'views/stories/' + params.story + '.html';
 }
 })*/