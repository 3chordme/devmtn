angular.module('apiApp').service('myService', function($http) {

  this.get = function() {
    return 'test success';
  };

  var baseUrl = 'http://bird-api.com/api/birds';

  this.getBirds = function() {
    var promise = $http({
      method: 'GET',
      url: baseUrl
    })

    .then(function(response) { //promise evaluation chain - PART A
      return response.data;
    });
    return promise;
  };

});
