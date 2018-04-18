app.controller('dataResultController', ['$scope', '$timeout', '$attrs', '$http', 'dataResultRequest', function($scope, $timeout, $attrs, $http, dataResultRequest){

  var _path = $attrs['datapath'];
  var _offset = parseInt($attrs['dataoffset']);
  var _limit = $attrs['datalimit'];
  var _last = false;

  $scope.isLoading = false;
  $scope.result = [];
  $scope.isEmpty = false;
  $scope.doSearch = true;

  $scope.loadMore = function() {

    if ( !_last ){
      if (!$scope.isLoading) {
        $scope.isLoading = true;
        var loadTimer = $timeout(function () {

          dataResultRequest.get($attrs['dataresult'], '', _path, _limit, _offset, function (data) {
            if ( parseInt(data.total) > 0 ){

              $scope.isEmpty = false;

              _offset = parseInt(data.offset) + parseInt(data.limit);
              _last = (parseInt(data.total) <= _offset) ? true : false;

              angular.forEach(data.elements, function (value) {
                this.push(value);
              }, $scope.result);

              $timeout(function(){
                $scope.isLoading = false;
              },2000);
            }else{
              $scope.isEmpty = true;
              $scope.isLoading = false;
            }
          });

        }, 2000);

        loadTimer.then(function () {
          $timeout.cancel(loadTimer);
        });
      }
    }
  };

  $scope.loadMore();

}]);
