var myApp = angular.module('myApp', []);

myApp.controller('mainController', [
  '$scope',
  '$filter',
  function ($scope, $filter) {
    $scope.handle = '';
    $scope.lowercaseHandle = function () {
      return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function (newValue, oldValue) {
      console.log('Changed!');
      console.log(`Old value: ${oldValue}`);
      console.log(`New value: ${newValue}`);
    });

    // also could use $timeout to save us from having to use $scope.$apply
    setTimeout(function () {
      $scope.$apply(function () {
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');
      });
    }, 3000);
  }
]);
