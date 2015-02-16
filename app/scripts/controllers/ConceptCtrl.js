'use strict';

/**
 * @ngdoc function
 * @name gatling.io.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webcvApp
 */

var ConceptCtrl = function($rootScope, $scope, $timeout) {

  //-----------------------------------------------//
  //                Scope Variables                //
  //-----------------------------------------------//
  $scope.carouselStep = 0;


  //-----------------------------------------------//
  //                Local Variables                //
  //-----------------------------------------------//
  var carouselTimeout = null;

  //-----------------------------------------------//
  //                Scope Functions                //
  //-----------------------------------------------//

  /**
   * Update carousel value with the refresh of carousel timeout
   * @param carouselValue
   */
  $scope.hardCarouselUpdate = function(carouselValue){
    if(carouselTimeout){
      $timeout.cancel(carouselTimeout);
    }
    updateCarousel(carouselValue);
  };

  //-----------------------------------------------//
  //                Local Functions                //
  //-----------------------------------------------//

  /**
   * Update carousel view according to given state
   * @param carouselValue
   *  the given state
   */
  var updateCarousel = function(carouselValue){
    $scope.carouselStep = carouselValue;
    var pourcent = -400+(carouselValue)*100;

    $('#main-carousel').css({
      left : pourcent+'%'
    });
  };

  //-----------------------------------------------//
  //                   Watchers                    //
  //-----------------------------------------------//
  $scope.$on('$destroy', function(){
    if(carouselTimeout){
      $timeout.cancel(carouselTimeout);
    }
  });

  //-----------------------------------------------//
  //                  Initialize                   //
  //-----------------------------------------------//

  $timeout(function(){
    //Calling twitter
    !function(d,s,id){
      var js;
      var fjs=d.getElementsByTagName(s)[0];
      var p=/^http:/.test(d.location)?'http':'https';

      if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src=p+'://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js,fjs);
      }
    }(document,'script','twitter-wjs');


    //Calling highlight
    $(document).ready(function() {
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });
  }, 100);

  $('#main-carousel').css({
    left : '-400%'
  });
};

angular.module('gatling.io').controller('ConceptCtrl', ['$rootScope', '$scope', '$timeout', ConceptCtrl]);
