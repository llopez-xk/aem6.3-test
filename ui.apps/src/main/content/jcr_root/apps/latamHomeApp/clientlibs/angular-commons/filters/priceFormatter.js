app.filter('priceFormatter',['$filter', function($filter) {

  return function( price, decimal ) {
    // Check for invalid prices
    var out = !!price ? price : 0;
    out = Math.abs(out);

    if(app.airline === 'tam') {
      switch (app.lang) {
        case 'es':
          thouSep = '.';
          break;
        case 'pt':
          thouSep = '.';
          decSep = ',';
          decimal = 2;
          break;
        case 'en':
          thouSep = ',';
          break;
        case 'fr':
          thouSep = '.';
          break;
        case 'de':
          thouSep = ',';
          break;
        case 'it':
          thouSep = ',';
          break;
      }

      if ( (price % 1) === 0 ) {
        decimal = 0;
      }
    }

    var decPlaces = decimal || 0,
        decSep = decSep || '.';

    out = $filter('number')(out, decPlaces);

    // Replace the thousand and decimal separators.
    // This is a two step process to avoid overlaps between the two
    if(thouSep != ",") out = out.replace(/\,/g, "T");
    if(decSep != ".") out = out.replace(/\./g, "D");

    out = out.replace(/T/g, thouSep);
    out = out.replace(/D/g, decSep);

    return out;
  }
}]);
