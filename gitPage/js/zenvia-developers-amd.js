(function () {

	'use strict';

	// App bootstrap
	require(['angular', 'zenvia-developers'], function(angular) {
    angular.bootstrap(document, ['zenviaDevelopers']);
	});


	// Module definition
	define(['angular'], function (angular) {
	  return angular.module('zenviaDevelopers', [
			'ngRoute',
			'dev.signin'
		])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
				$routeProvider.
					// Index page
					when('/', {
						templateUrl: '_templates/signin.html',
						controller: 'SigninController'
					})

					// Signup
					.when('/signup', {
						templateUrl: '_templates/signup.html',
						controller: 'SignupController'
					})

					// Logged user
					.when('/docs', {
						templateUrl: '_templates/docs.html',
						controller: 'DocsController'
					})
					.when('/docs/index', {
						templateUrl: '_templates/docs-index.html',
						controller: 'DocsController'
					})
					.when('/docs/:page', {
						templateUrl: '_templates/docs-content/{{page}}.html'
					})

					.otherwise('/');

				$locationProvider.hashPrefix('!');
			}]);
	});

// (function () {
//
// 	'use strict';


// 	angular.module("zenviaDevelopers", [
// 		'ngRoute',
// 		'dev.signin',
// 		'dev.signup',
// 		'dev.docs'
// 	])
//
// 	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
// 		$routeProvider.
// 			// Index page
// 			when('/', {
// 				templateUrl: '_templates/signin.html',
// 				controller: 'SigninController'
// 			})
//
// 			// Signup
// 			.when('/signup', {
// 				templateUrl: '_templates/signup.html',
// 				controller: 'SignupController'
// 			})
//
// 			// Logged user
// 			.when('/docs', {
// 				templateUrl: '_templates/docs.html',
// 				controller: 'DocsController'
// 			})
// 			.when('/docs/index', {
// 				templateUrl: '_templates/docs-index.html',
// 				controller: 'DocsController'
// 			})
// 			.when('/docs/:page', {
// 				templateUrl: '_templates/docs-content/{{page}}.html'
// 			})
//
// 			.otherwise('/');
//
// 		$locationProvider.hashPrefix('!');
// 	}]);
//
})();
