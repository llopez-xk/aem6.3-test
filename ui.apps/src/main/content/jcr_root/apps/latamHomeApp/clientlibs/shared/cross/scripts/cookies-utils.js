/**  CookiesUtils.js
 *   provide a set of utilities to manage cookies (without angular)
 */

/**
 * Get cookie with specified name
 */
function getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function getDomain() {
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
        if( (parts[i] == 'lan' || parts[i] == 'tam' || parts[i] == 'latam') && flag == false){
            flag = true;
            domain = "";
        }
        if(flag == true){
            domain += '.' + parts[ i ];
        }
    }

    if( domain === 'localhost' ) {
        domain = '';
    }
    return ';domain=' + domain + ';path=/;';
}
/**
 * Set cookie with specified name, value and expiration seconds
 */
function setCookie(cookieName, cookieValue, expirationSeconds) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationSeconds*1000));
    var expires = (!!expirationSeconds) ? "expires="+d.toUTCString() : "";
    document.cookie = cookieName + "=" + cookieValue + "; " + expires + getDomain();
}

/**
 * Delete cookie with specified name
 */
function deleteCookie (cookieName) {
    setCookie(cookieName, "", -1000);
}

/**
 * Transform an object in to cookie string notation
 */
function objectToCookie (obj) {
    var r = [];
    for(key in obj){
        r.push(key+"="+obj[key]);
    }
    return r.join("&");
}

/**
 * Transform an cookie string to javascript object
 */
function cookieToObject (value) {
    var r = {},
        elements = value.split("&");
    for (var i = elements.length - 1; i >= 0; i--) {
        if (elements[i].length>0) {
            var pair = elements[i].split("=");
            r[pair[0]] = pair[1];
        };
    };
    return r;
}
