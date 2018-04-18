;HttpClient = (function(){
    
    var HttpClient = {};
    
    HttpClient.getWithCallbacks = function(uri, onLoadCallback, onErrorCallback, isAsync){

        if(typeof onLoadCallback !== 'function'){
			console.warn("onLoad callback not defined");
        }

        isAsync = (isAsync !== undefined ? isAsync : true);
        var xhr = new XMLHttpRequest(),
            method = "GET";

        xhr.open(method, uri, isAsync);
        xhr.onload = function(){            
            onLoadCallback(xhr.response);            
        };
        xhr.onerror = function(){
            console.error(xhr.response);
            if(typeof onErrorCallback == 'function'){
                onErrorCallback(xhr.response);
            }
        };
        xhr.send();
    }    
    
    return HttpClient;
})();