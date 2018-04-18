(function () {
  angular
    .module('slugify', [])

  /**
   * Lowercases a string and replaces whitespace with dash
   *
   * @param {string} - Text to slugify
   */
    .filter('slugify', function () {
      return function (value) {
        if (!value || !angular.isString(value) ) return value;

        if (!String.prototype.trim) {
          String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
          };
        }

        value = value.toLowerCase()
          .trim()
          .replace(/\s+/g, '-')       // Replace whitespace with dash
          .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
          .replace(/\-\-+/g, '-');    // Replace multiple dashes with single dash

        return value;
      };
    });
})();
