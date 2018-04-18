/**
 * @ngdoc directive
 * @name dataload
 *
 * @description
 * Load JSON Data URL.
 *
 */
app.directive('dataload',['$http', function ($http) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var url = attrs['dataload'];

      $http({
        method: 'GET',
        url: url
      }).success(function (data, status) {
        scope.header = data.header;
        scope.footer = data.footer;
        scope.order = data.order;
        scope.items = data.items;

        if(scope.header == undefined || scope.header.length == 0){
          $('.header', element).remove();
        }
      });
    }
  };
}]);