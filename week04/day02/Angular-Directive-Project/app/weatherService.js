angular.module('directivePractice').service('weatherService', function($http, $q){

this.getWeather = function(city) {

  var deferred = $q.defer();

  $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=080c36fce479d131e2b94a6197b9b31c')
    .then(function(response) {
      console.log(response);

      //need temperature (not in Kelvin) and weather description.
      var weather = response.data.weather[0].description;
      var tempKelvin = response.data.main.temp;
      var tempF;  //do the math to change to fahrenheit.
      var weatherObject = {weather, tempKelvin};
      console.log(weatherObject);
      deferred.resolve(weatherObject);
    });

    return deferred.promise;

}

});
