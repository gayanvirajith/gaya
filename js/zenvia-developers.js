(function() {

  'use strict';

  angular.module("zenviaDevelopers", [
      'ngRoute',
      'toastr',
      'LocalStorageModule',
      'github'
    ])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.
      // Index page
      when('/', {
        templateUrl: 'templates/home.html'
      })




      $locationProvider.hashPrefix('!');



    }])

})();
