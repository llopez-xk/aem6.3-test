/**
 * @ngdoc dataRates
 * @name dataRates
 *
 * @description
 * dataRates, a service to handle rates, it have two methods
 * getRates: Query the rates from the server
 * getRate: Query the app variable for a rate id
 */
app.service('dataRates',['$http', '$q', 'dataCookies', 'dataGeo', function($http, $q, dataCookies, dataGeo) {
  return {
    // Get rates from LAN server with a promise
    getRates : function(url, rateIds, ratesLang) {
      var rates = angular.isArray(rateIds) ? rateIds.join(",") : rateIds;
      var locale = dataCookies.getCookie('homeInfo');
      return $http.get( url+"?ids="+rates+"&locale="+locale)
        .then(function(response){
          return response.data['data'];
        }, function(response){
          return $q.reject(response);
        });
    },

    getLocatedUrlTam : function( urlBase ) {
      var deferred = $q.defer(),
        urlBaselocation = "",
        obCookie = dataCookies.getCookieObject('GEOB2CVGN');

      urlBase += '?LANGUAGE=' + obCookie['v-locale'].split('_')[1];
      urlBase += '&SITE=TAMCTAMC';
      urlBase += '&COUNTRY_SITE=' + obCookie['v-pais'];
      //urlBase += '&callback='+?;

      //Get HTML5 geolocation
      dataGeo.get()
        .then( function( geolocation ) {
          urlBaselocation += '&LONGITUDE=' + geolocation.coords.longitude;
          urlBaselocation += '&LATITUDE=' + geolocation.coords.latitude;
          urlBase += urlBaselocation.split('.').join(',');

          deferred.resolve( urlBase );

        }, function( error ) {

          urlBaselocation += '&LONGITUDE=' + obCookie['v-long'];
          urlBaselocation += '&LATITUDE=' + obCookie['v-lat'];
          urlBase += urlBaselocation.split('.').join(',');

          deferred.resolve( urlBase );
        });

      return deferred.promise;

    },

    // Get rates from TAM server with a promise
    getRatesTam : function(url, rateIds, ratesNum) {
      var deferred = $q.defer(),
          default_NB_OFFER = 9;
      function getRateNumOffers(index) {
        var res = default_NB_OFFER;
        if(ratesNum instanceof Array && ratesNum.length >= index){
          res = ratesNum[index];
        }
        return res;
      }
      // JSONP CALL
      var PARAMS = {'callback': 'JSON_CALLBACK'};

      if(rateIds instanceof Array){
        rateIds.forEach(function rateIdsIterator(rateId, index) {
          PARAMS['CAMPAIGN_ID_'+(index+1)] = rateId;
          PARAMS['NB_OFFERS_'+(index+1)] = getRateNumOffers(index);
        });
      } else {
        PARAMS['campaign_id'] = rateIds;
      }

      return $http.jsonp(url, { params: PARAMS })
        .success(function(response){
          deferred.resolve(response.data);
        }, function(response){
          return $q.reject(response);
        });
    },

    // Get a RateObject based on the ID
    getRate: function(id) {
      // looking for rate id: id
      var defer = $q.defer();
      if( !!app.ratesData ) {
        app.ratesData.forEach(function(el){
          // Resolve promise when we found the rate id
          if(el.id == id) {
            if( !(el.months instanceof Array) && el.months ) {
              var ordered_months = [];
              for(var key in el.months) {
                ordered_months.push({name: key, status: el.months[key]});
              }
              el.months = ordered_months;
            }
            defer.resolve(el);
          }
        });
      }
      // No ratae id found, return error
      defer.reject(null);
      return defer.promise;
    },

    // Get a rates array based on the ID of Campaign
    getCampaignRates: function(id) {
      // looking for rate id: id
      var defer = $q.defer();
      app.ratesData.forEach(function(el){
        // Resolve promise when we found the rate id
        if(el.id === parseInt(id))
          defer.resolve(el);
      });
      // No ratae id found, return error
      defer.reject(null);
      return defer.promise;
    }
  };
}]);
