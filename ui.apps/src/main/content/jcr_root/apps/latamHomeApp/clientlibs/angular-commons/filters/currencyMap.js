app.filter('currencyMap',[function() {

  var currencies = {
    TAM: {
      BRL: 'R$',
      USD: '$',
      PYG: '₲%'
    }
  };

  return function( currency ) {
    if(app.airline === 'tam') {
      if( currencies.TAM.hasOwnProperty( currency ) ) {
        return currencies.TAM[currency];
      } else {
        return currency;
      }
    }
  }
}]);
