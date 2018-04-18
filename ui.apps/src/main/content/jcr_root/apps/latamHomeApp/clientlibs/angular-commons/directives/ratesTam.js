/**
* @description
* This directive get search for a campaign in the app.ratesData global variable
* and renders the ratesTam.html view to iterate throughout the offers
* (promocionesTAM, bannerDeTarifasTAM, destinos-ofertas/*: subHomeFidelizacion, home, d&o)
*/
app.directive('ratesTam', ['$rootScope', 'dataRates', '$templateCache', function($rootScope, dataRates, $templateCache){
  return {
    restrict: 'A',
    scope: {
      'rateCampaign' : '=rateCampaign',
      'rateFidelizacion' : '@rateFidelizacion',
      'hasImage' : '@hasImage',
      'rateCategories' : '=rateCategories',
      'rateBannerColor' : '@rateBannerColor',
      'rateColorIndex': '@rateColorIndex',
      'typeRow':'@typeRow',
      'author':'@author',
      'msjError':'@msjError',
      'msjErrorUrl':'@msjErrorUrl'
    },
    controller: ['$scope', '$attrs', function($scope, $attrs) {
      $scope.rateFidelizacion = ($scope.rateFidelizacion === "true") ? true : false;
      $scope.hasImage = ($scope.hasImage === "true") ? true : false;
      $scope.rateTemplate = $attrs.rateTemplate;
      $scope.campaign = [];

      function injectMock(campaign) {
        if(campaign.offers.length < 3 && $scope.author ){
          campaign.offers.push({'mock': true});
          injectMock(campaign);
        }
        if(campaign.mensaje == null && $scope.author){
          campaign.mensaje = $scope.msjError;
        }
        return campaign;
      }

      $rootScope.$on('isRatesLoaded',
        function() {
          var orderRow ={
            normalFeatured: [ 'normal', 'featured' ],
            featuredNormal: [ 'featured', 'normal' ],
            normal: [ 'normal3c', 'normal3c', 'normal3c' ]
          };
          if(orderRow[$scope.typeRow]) {
              $scope.orderRow = orderRow[$scope.typeRow];
          } else {
            $scope.orderRow = null;
          }
          dataRates.getCampaignRates($scope.rateCampaign).then(function(campaign){
            $scope.campaign = injectMock(campaign);
          }, function(err){
            $scope.campaign = injectMock({"offers":[], "mensaje" : $scope.msjError} );
          });
        }
      );
      $rootScope.$on('isRatesFailed',
        function() {
          $scope.campaign = injectMock({"offers":[] , "mensaje" : $scope.msjErrorUrl} );
        }
      );
    }],
    template: function(element, attr) {
      return $templateCache.get( attr.templateUrl );
    }
  };
}]);