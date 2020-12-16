var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.htm',
      controller: 'mainController'
    })
    .when('/forecast/:city', {
      templateUrl: 'pages/forecast.htm',
      controller: 'forecastController'
    });
});

weatherApp.controller('mainController', ['$scope'], function ($scope) {});

weatherApp.controller('forecastController', ['$scope'], function ($scope) {});
