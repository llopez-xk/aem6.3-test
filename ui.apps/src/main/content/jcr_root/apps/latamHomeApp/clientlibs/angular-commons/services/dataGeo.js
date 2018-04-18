app.service('dataGeo',['$q', '$rootScope', function($q, $rootScope){
  return {
    get: function(){
      var deferred = $q.defer();
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(function(position){
          $rootScope.$apply(function(){deferred.resolve(position);});
        }, function(error) {
          $rootScope.$broadcast('error',"Position Unavailable");
          $rootScope.$apply(function() {
            deferred.reject("Position Unavailable");
          });
        });
      }
      else
      {
        deferred.reject("Unsupported Browser");
      }
      return deferred.promise;
    }
  }
}]);
