/**
 * @ngdoc service
 * @name dataCookieTerms
 *
 * @description
 * A service to handle terms cookie, it have two methods
 * getCookie: Query the cookieTerms
 * setCookie: Set the cookieTerms
 */
app.service('dataCookieTerms',[function() {
  var getCookie = function() {
    var cookie = document.cookie.replace(/(?:(?:^|.*;\s*)cookieTerms\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var notification = document.cookie.replace(/(?:(?:^|.*;\s*)COOKIES_NOTIFICATION\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return ( cookie && notification === 'read' ) ? true : false;
  },
  setCookie = function() {
    document.cookie = 'cookieTerms=true; expires=Tue, 19 Jan 2038 03:14:07 GMT;';
    document.cookie = 'COOKIES_NOTIFICATION=read; expires=Tue, 19 Jan 2038 03:14:07 GMT;';
  };

  return {
    getCookie: getCookie,
    setCookie: setCookie
  };
}]);
