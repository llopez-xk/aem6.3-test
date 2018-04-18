var app = angular.module('app', [
  'ngAnimate', 'ngSanitize', 'ngCookies'
]);

app.config(['$httpProvider', function($httpProvider) {
  //$httpProvider.defaults.withCredentials = true;
}]);
