angular.module('app', [])
.controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

$scope.username = "zenvia";
$http.get("https://api.github.com/users/"+$scope.username)
        .success(function(data) {
            $scope.userData = data;
        });
}]);
angular.module('app', [])
.controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

$http.get($scope.userData.repos_url)
    .success(function(data){
        $scope.repoData = data;
    });

}]);
