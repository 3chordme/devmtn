angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      /* FIX ME */
      return $http.post('/api/login', user);
    }

  }
});
