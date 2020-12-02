// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', [
  '$scope',
  '$log',
  '$filter',
  function ($scope, $log, $filter, $resource) {
    $scope.name = 'John';
    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedName);
  }
]);
