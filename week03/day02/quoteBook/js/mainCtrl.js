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
      if (quoteObject.text != "" && quoteObject.author != "") { //not working!!!
        //why not (quoteObject.text && quoteObject.author) { ?
        dataService.addData(quoteObject);
      }
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
