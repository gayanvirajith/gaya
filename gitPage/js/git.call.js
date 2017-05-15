(function() {

  'use strict';

  var github = angular.module('github', []);

  github.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

    github.controller('gitHubDataController', ['$scope', '$http', function($scope, $http) {

      $scope.reposLoaded = false;

      $scope.userLoaded = false;

      $scope.username = "zenvia";

      $http.get('https://api.github.com/users/' + $scope.username)
        .then(function(data) {
          $scope.userData = data.data;
          loadRepos();
        });

      var loadRepos = function() {
        $http.get('https://api.github.com/users/' + $scope.username + '/repos')
          .then(function(data) {
            $scope.repoData = data.data;
            console.log(data);
          });
      };


      $scope.predicate = '-updated_at';


    }]);

})();
