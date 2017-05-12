(function () {

	'use strict';

	angular.module("nav", [
	])
  .controller('NavController', function($rootScope, $scope, $location, localStorageService) {
		console.debug("NavController()");

		//console.log(localStorageService.cookie.get('user'));
		$rootScope.user = localStorageService.cookie.get('user');
		if ($rootScope.user == null) {
			//$rootScope.sessionTimeout = "Sessão expirada.";
			//$location.path('/');
		}

		$scope.signout = function() {
			$rootScope.user = null;
			$location.path('/');
		}
  });

})();
