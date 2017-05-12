(function () {

	'use strict';

	angular.module("dev.signup", [])
  .controller('SignupController', function($rootScope, $scope, $location, $http, $timeout, localStorageService) {
    console.log("DEBUG SignupController()");

		var endpoint = 'http://172.18.115.234:8080';
		var service = '/v1/actions/signup';
		$scope.user = $scope.user = localStorageService.cookie.get('user');

		// $(".steps").steps({
	  //     headerTag: "h6",
	  //     bodyTag: "fieldset",
	  //     transitionEffect: "fade",
	  //     //titleTemplate: '<span class="number">#index#</span> #title#',
	  //     labels: {
	  //         finish: 'Salvar e visualizar',
	  //         next: 'Salvar e continuar',
	  //         previous: 'Voltar'
	  //     },
	  //     onFinished: function (event, currentIndex) {
	  //         alert("Form submitted.");
	  //     }
	  // });

		$scope.signup = function($event, user) {
      console.log("SignupController.signup()");
			$scope.l = true;

			$timeout(function() {
				var uri = endpoint + service;
				var data = {
					"user": user,
					"credential": {"type": "JWT" }
				};

				$http.post(uri, data).then(function(response) {
					console.debug(response);
					if (response.status === 200 || response.status === 201) {
						localStorageService.cookie.set('user', response.data);
						$scope.message = "Token criado com sucesso: " + response.data.credential.jwtData.token;
						$rootScope.user = localStorageService.cookie.get('user');
						$location.path('/docs');
					} else {
						$scope.error = {
							"message": "Error " + response.status
						}
					}
				}, function(err) {
					console.log(err);
					$scope.error = {
						"message": "Error: " + err.statusText
					}
				});

				$scope.l = false;

				// if pass
	      //$location.path('/docs');
	      //window.open('docs.html', '_self');
				// else
				//$scope.error = {"message": "credentials failed."};

			}, 500);

			// if (user.username === '' || user.password === '') {
			// 	$scope.error = {"message": "Preencha os dados"};
			// }



    }

  });

})();
