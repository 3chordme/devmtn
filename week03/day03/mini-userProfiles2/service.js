var app = angular.module('userProfiles'); //wow

app.service('mainService', function($http) { //injecting $http

  this.getUsers = function() {
		return $http({ //calling $http (always returns a promise)
			method: 'GET',
			url: 'http://reqres.in/api/users?page=1'
		});
  }

//you can put the url into postman, it will show you
//the response.data object (see controller)
});
