(function () {

	'use strict';

	angular.module("zenviaDevelopers", [
		'ngRoute',
		'toastr',
		'LocalStorageModule',
		'github'
	])

	.config(['$routeProvider', '$locationProvider', '$anchorScrollProvider', 'localStorageServiceProvider', function($routeProvider, $locationProvider, $anchorScrollProvider, $localStorageServiceProvider) {
		$routeProvider.
			// Index page
			when('/', {
				templateUrl: '_templates/home.html'
			})
			// .when('/docs/index', {
			// 	templateUrl: '_templates/docs.index.html',
			// 	controller: 'DocsController'
			// })
			// .when('/docs/:page', {
			// 	templateUrl: '_templates/docs-content/{{page}}.html'
			// })

			// Singin / Signup
			.when('/signin', {
				templateUrl: '_templates/signin.html',
				controller: 'SigninController'
			})
			.when('/signup', {
				templateUrl: '_templates/signup.wizard.html',
				controller: 'SignupController'
			})
			.when('/signup/confirm', {
				templateUrl: '_templates/signup.wizard.2.html',
				controller: 'SignupController'
			})
			.when('/signup/api', {
				templateUrl: '_templates/signup.wizard.3.html',
				controller: 'SignupController'
			})

			// Logged user
			// Organizations
			.when('/orgs', {
				templateUrl: '_templates/organizations.html',
				controller: 'OrganizationController'
			})
			.when('/orgs/new', {
				templateUrl: '_templates/organizations.new.html',
				controller: 'OrganizationController'
			})

			// .when('/products', {
			// 	templateUrl: '_templates/products.html',
			// 	controller: 'ProductsController'
			// })

			.otherwise('/');


		$localStorageServiceProvider
			.setPrefix('z-developers')
			.setStorageType('sessionStorage');

		// $translateProvider
		//   .useStaticFilesLoader({
		//     prefix: '/translations/',
		//     suffix: '.json'
	  // });

		$locationProvider.hashPrefix('!');
		//$anchorScrollProvider.disableAutoScrolling


	}])

})();
