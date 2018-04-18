app.service('dataLogin',['$http', '$q', function($http, $q) {
    return {
        profileLATAM: function( _url ){
            var config = {
                method: 'GET',
                url: _url
            };
            
            return $http( config ).then(function(response){
                return response.data;
            }, function(response){
                return $q.reject(response);
            });
        },
        
        isLoggedIn: function() {
            return !!Auth && Auth.isLoggedIn();
        }
    }
}]);
