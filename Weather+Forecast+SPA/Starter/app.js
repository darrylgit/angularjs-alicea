var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.htm',
      controller: 'mainController'
    })
    .when('/forecast/', {
      templateUrl: 'pages/forecast.htm',
      controller: 'forecastController'
    });
});

weatherApp.service('forecastByCity', function () {
  this.city = '';
});

weatherApp.controller('mainController', [
  '$scope',
  'forecastByCity',
  function ($scope, forecastByCity) {
    console.log('hello');
    $scope.city = forecastByCity.city;

    $scope.$watch('city', function () {
      forecastByCity.city = $scope.city;
    });
  }
]);

weatherApp.controller('forecastController', [
  '$scope',
  'forecastByCity',
  function ($scope, forecastByCity) {
    $scope.city = forecastByCity.city;
  }
]);
