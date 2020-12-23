weatherApp.service('cityService', function () {
  this.city = 'London';
});

weatherApp.service('weatherService', [
  '$resource',
  function ($resource) {
    this.GetWeather = function (city, days) {
      var APPID = '5a064f39448c6bddecac93165ac4fcb1';
      var weatherAPI = $resource(
        `http://api.openweathermap.org/data/2.5/forecast/daily`,
        { callback: 'JSON_CALLBACK' },
        { get: { method: 'JSONP' } }
      );

      return weatherAPI.get({
        APPID,
        q: city,
        cnt: days
      });
    };
  }
]);
