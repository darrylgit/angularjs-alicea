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
  '$routeParams',
  'cityService',
  function ($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';

    var APPID = '5a064f39448c6bddecac93165ac4fcb1';
    $scope.weatherAPI = $resource(
      `http://api.openweathermap.org/data/2.5/forecast/daily`,
      { callback: 'JSON_CALLBACK' },
      { get: { method: 'JSONP' } }
    );

    $scope.weatherResult = $scope.weatherAPI.get({
      APPID,
      q: $scope.city,
      cnt: $scope.days
    });

    $scope.convertToFahrenheit = function (kelvin) {
      return Math.round(1.8 * (kelvin - 273)) + 32;
    };

    $scope.convertToDate = function (date) {
      return new Date(date * 1000);
    };
  }
]);
