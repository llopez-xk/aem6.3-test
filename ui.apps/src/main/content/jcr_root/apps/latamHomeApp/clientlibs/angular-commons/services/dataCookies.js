/**
 * @ngdoc service
 * @name dataCookies
 *
 * @description
 * A service to handle native document cookies
 * deleteCookie: Delete a cookie
 * getCookie: Query the given cookie
 * setCookie: Set a cookie
 */
app.service('dataCookies', [function() {
  var deleteCookie = function( name ) {
    if (!name) { return false; }
    document.cookie = name + '=' + getDomain() + '; Max-Age=0';
  },
  getCookie = function( name ) {
    if (!name) { return null; }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  getCookieObject = function( name ) {
    if (!name) { return null; }
    var i = 0,
      cookieArray = getCookie( name ).split('&'),
      len = cookieArray.length,
      cookieObject = {};
    for ( ; i < len; i++ ) {
      cookieArray[i] = cookieArray[i].split('=');
      cookieObject[cookieArray[i][0]] = cookieArray[i][1];
    }
    return cookieObject;
  },
  getCookies = function() {
    return document.cookie;
  },
  // The filter param allows you to filter cookies by partial or full name
  getCookiesObject = function( filter ) {
    var cookiesArray = getCookies().split(';'),
      caLength = cookiesArray.length,
      cookiesObject = {},
      i = 0,
      cookieDiv,
      cookieName,
      cookieContent;

    if( !caLength ) return {};

    filter = filter || '';

    for ( ; i < caLength; i++ ) {
      cookieDiv = cookiesArray[i].indexOf('=');
      cookieName = cookiesArray[i].substring(0, cookieDiv).trim();

      // Check if the cookieName includes the filter text, it can be a portion or a full name for the cookie.
      // If empty, allows all cookies
      if( cookieName.includes(filter) ) {
        cookieContent = cookiesArray[i].substr(cookieDiv+1).trim();
        cookiesObject[cookieName] = cookieContent;
      }
    }
    return cookiesObject;
  },
  getDomain = function () {
    var host = window.location.host,
      port = host.indexOf(':'),
      parts,
      length,
      domain;

      //Remove port, if present
      if( port !== -1 ) {
        host = host.slice(0, port);
      }

      //Split the domain parts into an array
      parts = host.split('.');
      length = parts.length;
      domain = host;
      var flag= false;

      for(var i = 0 ; i < length; i ++ ){
        if( (parts[i] == 'lan' || parts[i] == 'tam' || parts[i] == 'latam') && flag === false){
          flag = true;
          domain = '';
        }
        if(flag == true){
          domain += '.' + parts[ i ];
        }
      }

      if( domain === 'localhost' ) {
        domain = '';
      }
      return ';domain=' + domain + ';path=/;';
  },
  getExpiration = function( seconds ) {
    if( !seconds ) return '';
    var dateValue = new Date(Date.now() + (seconds*1000));
    var resultDate = "expires=" + dateValue.toUTCString() + ";";
    return resultDate;
  },
  setCookie = function( name, value, expirationTime ) {
    if (!name) { return false; }
    document.cookie = name + '=' + value + getDomain() + getExpiration( expirationTime );
  },
  setCookieDominio = function( name, value, expirationTime, dominio ) {
    if (!name) { return false; }
    document.cookie = name + '=' + value +";"+ getExpiration( expirationTime )+"path=/; domain="+dominio+";";
  };

  return {
    deleteCookie: deleteCookie,
    getCookie: getCookie,
    getCookieObject: getCookieObject,
    getCookiesObject: getCookiesObject,
    setCookie: setCookie,
    setCookieDominio: setCookieDominio,
    getDomain:getDomain
  };
}]);
