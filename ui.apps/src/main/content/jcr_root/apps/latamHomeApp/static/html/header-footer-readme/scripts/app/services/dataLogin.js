app.service('dataLogin',['$http', '$q', function($http, $q) {
  return {
    get : function(username, password, _tam, _type) {

      //var url = 'http://54.69.86.10:4503/bin/external/login.json';
      var url = '/assets/data/login.'+_tam+'.'+_type+'.json';

      return $http.get( url )
        .then(function(response){
          //return response.data.result;
          return 'ok';
          //console.log( response );
        }, function(response){
          return $q.reject(response);
        });
    }
  }
}]);
