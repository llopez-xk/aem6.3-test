/**
 * @ngdoc service
 * @name dataTrustedDomains
 *
 * @description
 * A service to check resources domains
 * getCheckedUrl: Check and return a trusted url
 */
app.service('dataTrustedDomains',['$sce', function($sce) {
  var getRootDomain = function( url ) {

    if( url === 'localhost') {
      return url;
    }

    var port = url.indexOf(':'),
      parts,
      length,
      domain;

    //Remove protocol
    if ( url.indexOf("//") !== -1 ) {
      domain = url.split('/')[2];
    } else {
      domain = url.split('/')[0];
    }
    
    //Remove port, if present
    if( port !== -1 ) {
      domain = domain.split(':')[0];
    }

    //Split the domain parts into an array
    parts = domain.split('.');
    length = parts.length;

    if( length > 1 && isNaN( parts[ length - 1 ] ) ) {
      //Get last two parts only when a string
      domain = parts[ length - 2 ];
      domain += '.' + parts[ length - 1 ];
    }
    return domain;
  },
  getCheckedUrl = function( url ) {
    var rootDomain = getRootDomain(url),
      checkwhitelist = app.whitelist.indexOf( rootDomain );
    if( checkwhitelist !== -1 ) {
      return $sce.trustAsResourceUrl( url );
    } else {
      return url;
    }
  }

  return {
    getCheckedUrl: getCheckedUrl
  };
}]);
