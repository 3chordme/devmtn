angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {
	$scope.currentUser = /*FIX ME*/ userInfo.currentUser;
	$scope.friends = /*FIX ME*/ userInfo.friends;
});
