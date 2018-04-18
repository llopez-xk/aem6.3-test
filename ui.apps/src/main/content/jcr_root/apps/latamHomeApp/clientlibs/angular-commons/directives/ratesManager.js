/**
* @ngdoc ratesManager
* @name ratesManager
*
* @description
* ratesManager take ratesUrl and ratesData as an input to query the Rates on the LAN or TAM
* server, when get the data, publish the result in the app global variable.
* (tpls home, subHomeFidelizacion, d&o)
*/

app.directive('ratesManager', ['$rootScope', 'dataRates', '$window', function ($rootScope, dataRates, $window) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {

      var ratesIds, ratesNums;
      ratesAirline = attrs.ratesAirline;
      try{
        ratesIds = attrs.ratesData;
      }
      catch (e) {
        //console.error("Not valid JSON string on ratesData");
      }
      //this event will be fired when the origin filter changes
      scope.$on('ratesManager-change',handdleFilters);
      function handdleFilters(emitEvent,e){ // this is executed after the filter change
        scope.$prepareForReady(); //prepare for ready
        // send e to the function to get the values of the rates
        updateRatesData(e);
      }
      ratesNums = (!!attrs.ratesNum)?attrs.ratesNum:"";
      ratesNums = angular.isString(ratesNums) ? ratesNums.replace(/\s/g,'').replace('][',',').replace(/[\[\]']+/g,'').split(",") : ratesNums;
      ratesNums = ratesNums.reduce(function(acc, item){
        if(item!==''){
          acc.push(item);
        }
        return acc;
      }, []);
      scope.$prepareForReady();

      function updateRatesData(ratesIds){
        if( !app.ratesData ) {
          // Set rates on global app variable, so the Rates directive can take the data
          app.ratesData = [];
        }
        ratesIds = angular.isString(ratesIds) ? ratesIds.replace(/\s/g,'').replace('][',',').replace(/[\[\]']+/g,'').split(",") : ratesIds;
        if(ratesAirline === "LAN"){
          dataRates.getRates(attrs.ratesUrl, ratesIds, attrs.ratesLang).then(function(resultRates){
            resultRates.forEach(function(el){
              app.ratesData.push(el);
            });
            $rootScope.$broadcast("isRatesLoaded");
            // use scope on ready (see https://github.com/yearofmoo/AngularJS-Scope.onReady)
            scope.$onReady();
          }, function(err){
            // Error getting Rates from server
            //console.log("No LAN rates information found ", err);
            $rootScope.$broadcast("isRatesFailed");
            scope.$onFailure();
          });
        }

        if(ratesAirline === "TAM"){

          //First add the location params to the rates URL
          dataRates.getLocatedUrlTam(attrs.ratesUrl).then( function( locatedUrl ) {

            dataRates.getRatesTam(locatedUrl, ratesIds, ratesNums).then(function(resultRates){
              // Set rates on global app variable, so the Rates directive can take the data
              var result = resultRates.data;
              if(result.hasOwnProperty('campaigns')) {
                app.ratesData = app.ratesData.concat( result.campaigns );
                $rootScope.$broadcast("isRatesLoaded");
                // use scope on ready (see https://github.com/yearofmoo/AngularJS-Scope.onReady)
                scope.$onReady();
              }
            }, function(err){
              // Error getting Rates from server
              //console.log("No TAM rates information found ", err);
              $rootScope.$broadcast("isRatesFailed");
              scope.$onFailure();
            });

          }, function( err ) {
            // console.log( 'Error url ', err );
          });


        }
      }
      updateRatesData(ratesIds); /* call when the page load  */

      if(typeof attrs.ratesAgrupatedCards != "undefined" && attrs.ratesAgrupatedCards == "true"){
        scope.ratesAgrupatedCards = attrs.ratesAgrupatedCards;
      }

    }
  };
}]);
