(function(){


'use strict';

var avitoApp = angular.module('avitoApp', ['ngRoute', 
  'SafeApply'
  ]);


avitoApp.config(['$routeProvider', '$locationProvider', '$httpProvider', 
  function($routeProvider, $locationProvider, $httpProvider) {

  $routeProvider.when('/', {
    templateUrl: 'partials/index',
    controller: 'chatCtrl'
  });
  $routeProvider.when('/login', {
    templateUrl: 'partials/login'
    // controller: 'loginCtrl'
  });
  $routeProvider.otherwise({
    redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);


})();
