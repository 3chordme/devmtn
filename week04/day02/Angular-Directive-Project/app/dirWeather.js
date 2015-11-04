angular.module('directivePractice').directive('dirWeather', function(){

  return {
    templateUrl: 'app/dirWeather.html',
    scope: {
      currentUser: '=',
      weatherCall: '&',
    },
    controller: function($scope) {
      $scope.weatherCall({ city: $scope.currentUser.city })
        .then(function(response){
          $scope.weatherResponse = response;
        })
    }
  }



});
