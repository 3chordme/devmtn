angular.module('apiApp').service('myService', function($http){

  this.get = function() {
    return 'test';
  };

  var baseUrl = 'http://bird-api.com/api/birds';
  //
  // this.getBirds = function() {
  //   var promise = $http({
  //     method: 'GET',
  //     url: baseUrl
  //   });
  //
  //   //this guy is breaking off into the promise evaluation chain:
  //   //Promise evaluation chain - PART A
  //   promise.then(function(response){
  //     return response.data;
  //   });
  //
  //   return promise;
  // };
  //should be the same as:
  //IF YOU CHANGE birds.data to birds in index(which we did)

    this.getBirds = function() {
      return $http({
        method: 'GET',
        url: baseUrl
      }).then(function(response){
        var birdData = response.data;
        birdData = JSON.parse(JSON.stringify(birdData));
        return birdData;
      });

    };



});
