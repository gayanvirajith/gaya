// (function () {
//
// 	'use strict';

	define(['angular'], function (angular) {

	  return function($scope, $location) {
	    console.log("DEBUG SigninController()");
	    $scope.user = {};

	    $scope.login = function() {
	      console.log("IN");

	      // if pass
	      $location.path('/docs');
	      //window.open('docs.html', '_self');
	    }

	  });

// })();
