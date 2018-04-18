app.service('dataResultRequest',['$http', '$q', function($http, $q) {
    return {
        get: function(url, keywords, path, limit, offset, callback) {
            
            var result = [];
            var uri = url +'.json?' + 'path=' + path + '&limit=' + limit + '&offset=' + offset + (keywords ? ('&q=' + keywords) : '');
            
            HttpClient.getWithCallbacks(uri, function(response){
                response = JSON.parse(response);
                if(response.result != undefined || response.result.lenght > 0){
                    result = response.result;
                }
                callback(result);
            });
            
        },
        getDefer: function(news){
            var promises = [];
            angular.forEach(news, function(singleNew){

                var deferred = $q.defer();
                
                var uri = singleNew.url + ".json?path=" + (singleNew.path ? singleNew.path : "") + "&q=" + (singleNew.keywords ? singleNew.keywords : "");
                
                HttpClient.getWithCallbacks(uri, function(response){deferred.resolve(JSON.parse(response));}, deferred.reject);
                
                promises.push(deferred.promise);
            });
            
            return $q.all(promises); // wait until all promises are resolved
        }
    }
}]);
