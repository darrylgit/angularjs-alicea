var myApp = angular.module('myApp', []);

myApp.controller('mainController', [
  '$scope',
  '$filter',
  '$http',
  function ($scope, $filter, $http) {
    $scope.handle = '';
    $scope.lowercaseHandle = function () {
      return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http
      .get('/api')
      .then(res => {
        $scope.rules = res.data;
      })
      .catch((err, status) => {
        console.error(status, err.message);
      });

    $scope.$watch('handle', function (newValue, oldValue) {
      console.log('Changed!');
      console.log(`Old value: ${oldValue}`);
      console.log(`New value: ${newValue}`);
    });

    // also could use $timeout to save us from having to use $scope.$apply
    setTimeout(function () {
      $scope.$apply(function () {
        // $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');
      });
    }, 3000);

    $scope.alertClick = () => alert('You clicked me');
    $scope.name = 'John Doe';
  }
]);
