/**
 * @ngdoc dataRatesConditions
 * @name dataRatesConditions
 *
 * @description
 * dataRatesConditions, a service to handle rate conditions
 * getRateConditions: Query a rate conditions from the server
 */
app.service('dataRatesConditions',['$http', '$q', 'dataCookies', function($http, $q, dataCookies) {
  return {
    // Get rate conditions from LAN server with a promise
    getRateConditions : function( url ) {
      var locale = dataCookies.getCookie('homeInfo');
      return $http.get( url+"?locale="+locale )
        .then(function(response){
          return response.data['data'];
        }, function(response){
          return $q.reject(response);
        });
    }
  };
}]);
