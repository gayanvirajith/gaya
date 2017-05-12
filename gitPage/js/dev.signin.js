(function () {

	'use strict';

  angular.module("dev.signin", [])
  .controller('SigninController', function($scope, $location, $timeout) {
    console.log("DEBUG SigninController()");
    $scope.user = {};

    $scope.login = function($event, user) {
      console.log("SigninController.login()");
			$scope.l = true;

			$timeout(function() {
				$scope.l = false;

				// if pass
	      //$location.path('/docs');
	      //window.open('docs.html', '_self');
				// else
				$scope.error = {"message": "credentials failed."};

			}, 800);

			// if (user.username === '' || user.password === '') {
			// 	$scope.error = {"message": "Preencha os dados"};
			// }



    }

  });

})();
