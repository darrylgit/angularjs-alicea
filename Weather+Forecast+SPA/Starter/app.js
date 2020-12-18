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

weatherApp.service('cityService', function () {
  this.city = 'London';
});

weatherApp.controller('mainController', [
  '$scope',
  'cityService',
  function ($scope, cityService) {
    console.log('hello');
    $scope.city = cityService.city;

    $scope.$watch('city', function () {
      cityService.city = $scope.city;
    });
  }
]);

weatherApp.controller('forecastController', [
  '$scope',
  '$resource',
  'cityService',
  function ($scope, $resource, cityService) {
    $scope.city = cityService.city;

    var APPID = '5a064f39448c6bddecac93165ac4fcb1';
    $scope.weatherAPI = $resource(
      `http://api.openweathermap.org/data/2.5/forecast/daily`,
      { callback: 'JSON_CALLBACK' },
      { get: { method: 'JSONP' } }
    );

    $scope.weatherResult = $scope.weatherAPI.get({
      APPID,
      q: $scope.city,
      cnt: 2
    });

    console.log($scope.weatherResult);
  }
]);
