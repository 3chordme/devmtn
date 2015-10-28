angular.module('quoteBook')
  .controller('mainCtrl', function($scope, dataService) {

    $scope.test = "Test success!";

    $scope.dataGot = function() {
      $scope.data = dataService.getData();
      return $scope.data;
    };

    $scope.quoteData = $scope.dataGot();

    $scope.addData = function() {
      var quoteObject = {
        text: $scope.textInput,
        author: $scope.authorInput
      };
      if (quoteObject.text != undefined && quoteObject.author != undefined) {
        //why not (quoteObject.text && quoteObject.author) { <----- because the object and keys exist, they're just undefined. can't use "" either because not empty strings.
        dataService.addData(quoteObject);
      }
      $scope.textInput = undefined;
      $scope.authorInput = undefined;
    };

//remove the quote above the button
    $scope.removeData = function(index) {
      dataService.removeData(index);
    };

//remove the quote that matches the text input by the user
    $scope.findAndRemove = function() {
      dataService.findAndRemove($scope.removalInput);
    };


  });
