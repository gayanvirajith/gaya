(function () {

	'use strict';

	angular.module("dev.docs", [
	])
  .controller('DocsController', function($scope, $location, localStorageService) {
		console.log("DEBUG DocsController()");
		$scope.user = localStorageService.cookie.get('user');

		$scope.page = {
		 	"name": '_templates/docs-content/00_intro.html'
		};

		$scope.showPage = function(page) {
			$scope.page = {};
			$scope.page.name = '_templates/docs-content/' + page + '.html';
			//$location.path(page);
			console.debug("Loading page '" + page + "'.");
		}

  });

})();
