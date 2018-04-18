app.directive('header',['$templateCache',function($templateCache){
  return {
    restrict: 'A',
    link: function(scope, element, attributes){
      // Get logo from directive and send it to the template
      scope.logo  = attributes["logo"];
      scope.logoDesktop  = attributes["logoDesktop"];
      scope.tam   = attributes["tam"];
      scope.isInverse   = attributes["inverse"];
      scope.demo = attributes["demo"];

      // Show process header
      scope.process = (attributes["process"] === "true") ? true : false;
      scope.navProcess = scope.process;

      // Change body padding when scope.process is true
      if(scope.process) {
        angular.element('body').css('padding-top', '58px');
      }

      if( Modernizr.mq('only all and (max-width: 767px)') && scope.process) {
        scope.process = false;
      }
    },
    templateUrl: function(elm, attrs) {
      app.templateNav = attrs.templateNav;
      app.templateLogin = attrs.templateLogin;
      app.templateCountrySelector = attrs.templateCountryselector;
      return attrs.templateHeader;
    }
  }
}]);
