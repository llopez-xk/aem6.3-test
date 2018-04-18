(function () {
  angular
    .module('ellipsis', [])

  /**
   * Cut a text by character numbers
   *
   * @param {string} - Text to cut
   * @param {integer} - Maximum text characters
   * @param {boolean} - If true don't break words, defaults false
   * @param {string} - Text to add at the end of the cutted text
   */
    .filter('ellipsis', function () {
      return function (value, max, wordwise, tail) {
        if (!value) return '';

        //Removes extra whitespace
        value = value.replace(/\s+/g, ' ');

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
          var lastspace = value.lastIndexOf(' ');
          if (lastspace != -1) {
            value = value.substr(0, lastspace);
          }
        }

        return value + (tail || ' …');
      };
    });
})();
