app.directive('countrySelector',['$templateCache',function($templateCache){
  return {
    restrict: 'A',
    link: function(scope, element, attributes){

      element.addClass('countrySelector');

      scope.tam = attributes['tam'];

      var dropdown = element.find('.countrySelector-dropDown');
      var link = element.find('.countrySelector-flagLink');
      var caret = element.find('.countrySelector-flagCaret');

      var toggleClick = true;

      link.bind('click', function(event){

        event.preventDefault();

        var toggleAria = link.attr('aria-expanded') == 'true' ? 'false' : 'true' ;
        link.attr('aria-expanded', toggleAria);

        var toggleDropdown = dropdown.attr('aria-hidden') == 'true' ? 'false' : 'true' ;
        dropdown.attr('aria-hidden', toggleDropdown);

        if ( toggleClick ){
          element.addClass('isOpen');
          dropdown.addClass('isOpen');

          caret.removeClass('icon-caret-down');
          caret.addClass('icon-caret-up');
        }else{
          element.removeClass('isOpen');
          dropdown.removeClass('isOpen');

          caret.removeClass('icon-caret-up');
          caret.addClass('icon-caret-down');
        }

        toggleClick = !toggleClick
      });

    },
    templateUrl: function(elm, attrs){
      return app.templateCountrySelector;
    }
  }
}]);
