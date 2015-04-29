var StoryCtrl = function ($scope, $stateParams, $state, $location, $http) {

  var story = $stateParams.story;
  $scope.previousClass = "";
  $scope.nextClass = "";

  $http.get('../../views/stories/stories.json').success(function (data) {
    pagination(data.stories);
  });

  var pagination = function (stories) {
    for (var index = 0; index < stories.length; index++) {
      if (story == stories[index] && stories.length > 1) {
        if (index == 0) {                        // The story is the first element
          $scope.next = stories[index + 1];
          $scope.previousClass = "disabled";
        }
        else if (index == stories.length - 1) {   // The story is the last element
          $scope.previous = stories[index - 1];
          $scope.nextClass = "disabled";
        }
        else {
          $scope.next = stories[index + 1];
          $scope.previous = stories[index - 1];
        }
      }
    }
  }

  $scope.onSwitchStory = function (story) {
    if (story != undefined) {
      window.scrollTo(0, 0);
      $location.path('/stories/' + story + '.html');
    }
  }

  $state.transitionTo('story.detail', {story: $stateParams.story});
};

angular.module('gatling.io').controller('StoryCtrl', ['$scope', '$stateParams', '$state', '$location', '$http', StoryCtrl]);
