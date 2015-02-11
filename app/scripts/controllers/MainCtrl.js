'use strict';

/**
 * @ngdoc function
 * @name gatling.io.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webcvApp
 */

var MainCtrl = function($rootScope, $scope, $location, $timeout) {

  //-----------------------------------------------//
  //                   Watchers                    //
  //-----------------------------------------------//

  $rootScope.$on('$locationChangeSuccess', function(){
    $scope.location = $location.path();
  });


};

angular.module('gatling.io').controller('MainCtrl', ['$rootScope', '$scope', '$location', '$timeout', MainCtrl]);
