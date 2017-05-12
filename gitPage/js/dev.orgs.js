(function () {

	'use strict';

	angular.module("dev.orgs", [
		'ngResource'
	])

  .controller('OrganizationController', function($scope, $location, localStorageService, toastr) {
		console.log("DEBUG OrganizationController()");

		init();

		// Load organizations
		function init() {
			if (localStorageService.get('organizations') === null) {
				$scope.organizations = [];
				localStorageService.set('organizations', $scope.organizations);
			} else {
				$scope.organizations = localStorageService.get('organizations');
			}
    }
		// ...
		// Organization.query(function(data) {$scope.orgs = data.result;});

		$scope.load = function(id) {
			// Organization.get({ id: id });
			$scope.organization = {
				"id": id,
				"name": "Organização ABC"
			};
		}

		$scope.save = function(organization) {
			console.log("OrganizationController.save()");
			organization.id = "0000";

			$scope.organizations = localStorageService.get('organizations');
			$scope.organizations.push(organization);
			localStorageService.set('organizations', $scope.organizations);

			//Organization.save($scope.interval, function(data) {
				//$scope. = {};
				//$location.path('/orgs');
			//});
			//toastr.success('', 'Toastr fun!', { timeOut: 5000 });
			$location.path('/orgs');
		}

		$scope.remove = function(organization) {
			Organization.remove({ id: organization.id }, function() {
				//$location.path('/event')
			});
		}
  })

	.factory('Organization', ['$resource', function($resource) {
		return $resource('/api/orgs/:id', { id: '@_id' }, {
			query: { method: 'GET', isArray: false },
			update: { method: 'PUT' }
		});
	}]);

})();
