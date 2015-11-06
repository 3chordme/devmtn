angular.module('rtfmApp')
  .controller('threadCtrl', function($scope, threadRef, commentsRef, $firebaseObject, $firebaseArray){

    var thread = $firebaseObject(threadRef);
    thread.$bindTo($scope, 'thread');

    $scope.comments = $firebaseArray(commentsRef);

    $scope.createComment = function (username, text) { //this could also get passed an object with these keys
      $scope.comments.$add({
        username: username,
        text: text
      });
      $scope.newCommentText = "";
      $scope.username = "";
    };
  });
