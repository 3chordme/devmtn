var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {
  this.getUsers = function() {
    var deferred = $q.defer();
    //console.log(deferred.promise);
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response){
      //console.log(deferred.promise);
      var parsedResponse = response.data.data;
      for (var i = 0; i < parsedResponse.length; i++){
        parsedResponse[i].first_name = 'Ralf'
      }
        //console.log(deferred.promise);
        deferred.resolve(parsedResponse);
        //console.log(deferred.promise);
    });
    return deferred.promise;
  }

});
