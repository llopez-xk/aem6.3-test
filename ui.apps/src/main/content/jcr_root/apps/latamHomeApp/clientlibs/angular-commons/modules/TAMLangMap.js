(function () {
  angular
    .module('TAMLangMap', [])

  /**
   * Map TAM langs and uppercase it.
   *
   * @param {string} - Lang code to map
   */
    .filter('TAMLangMap', function () {
      return function (value) {
        if (!value || !angular.isString(value) ) return value;

        if( value.toLowerCase() === 'pt') {
          value = 'BR';
        }
        if( value.toLowerCase() === 'en') {
          value = 'GB';
        }

        return value.toUpperCase();
      };
    });
})();
